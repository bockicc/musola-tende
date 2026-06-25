import { useCallback } from 'react'
import { useDropzone, type FileRejection } from 'react-dropzone'
import { cn } from '@/lib/cn'
import { Upload, File, X } from 'lucide-react'
import content from '@/data/content.sr'

interface FileDropzoneProps {
  files: File[]
  onFilesChange: (files: File[]) => void
  maxFiles?: number
  maxSize?: number
  accept?: Record<string, string[]>
  className?: string
}

export function FileDropzone({
  files,
  onFilesChange,
  maxFiles = 5,
  maxSize = 10 * 1024 * 1024,
  accept,
  className,
}: FileDropzoneProps) {
  const onDrop = useCallback(
    (accepted: File[], rejected: FileRejection[]) => {
      if (rejected.length > 0) return
      onFilesChange([...files, ...accepted].slice(0, maxFiles))
    },
    [files, maxFiles, onFilesChange],
  )

  const removeFile = (index: number) => {
    onFilesChange(files.filter((_, i) => i !== index))
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles,
    maxSize,
    accept,
  })

  return (
    <div className={cn('space-y-2', className)}>
      <div
        {...getRootProps()}
        className={cn(
          'flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-neutral-700 p-6 transition-all hover:border-[var(--accent-primary)]/50 hover:bg-neutral-800/50',
          isDragActive && 'border-[var(--accent-primary)] bg-[var(--accent-primary)]/10',
        )}
      >
        <input {...getInputProps()} />
        <Upload className="mb-2 h-8 w-8 text-neutral-500" />
        <p className="text-sm text-neutral-400">
          {content.contact.form.dropzoneHint}
        </p>
        <p className="mt-1 text-xs text-neutral-600">
          Max {maxFiles} fajlova, do {maxSize / 1024 / 1024}MB
        </p>
      </div>

      {files.length > 0 && (
        <ul className="space-y-1">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${index}`}
              className="flex items-center justify-between rounded-md bg-neutral-800 px-3 py-2 text-sm"
            >
              <div className="flex items-center gap-2 truncate">
                <File className="h-4 w-4 shrink-0 text-[var(--accent-primary)]" />
                <span className="truncate text-neutral-300">{file.name}</span>
                <span className="shrink-0 text-xs text-neutral-500">
                  {(file.size / 1024).toFixed(0)}KB
                </span>
              </div>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="ml-2 shrink-0 text-neutral-500 hover:text-red-400"
                aria-label="Ukloni fajl"
              >
                <X className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
