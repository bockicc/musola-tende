import type { Product } from '@/types'

export const products: Product[] = [
  {
    id: 'tenda-ravna-na-ruke',
    title: 'Ravna tenda na ruke',
    category: 'tende',
    description:
      'Klasična ravna tenda sa zglobnim rukama, idealna za terase i balkone, izrađena po meri.',
    longDescription:
      'Ravna tenda na ruke je najpopularniji model za zaštitu terasa i balkona. Aluminijumska konstrukcija sa zglobnim rukama omogućava sklapanje platna uz fasadu kada nije u upotrebi. Platna biramo iz asortimana Sauleda, Dickson i Irisgiovanardi.',
    image: '/assets/products/tenda-ravna-na-ruke.jpg',
    images: ['/assets/products/tenda-ravna-na-ruke.jpg'],
    material: 'Sauleda',
    featured: true,
    features: [
      'Aluminijumska konstrukcija sa zglobnim rukama',
      'Platno po izboru (Sauleda, Dickson, Irisgiovanardi)',
      'Izrada po meri terase ili balkona',
      'Ručno ili motorizovano upravljanje',
      'Širok spektar boja i uzoraka platna',
    ],
    materials: [],
  },
  {
    id: 'tenda-polukruzna-bara-quadra',
    title: 'Polukružna tenda (Bara Quadra)',
    category: 'tende',
    description:
      'Elegantna polukružna konstrukcija sa stubnim osloncem, pogodna za veće površine.',
    longDescription:
      'Polukružna tenda Bara Quadra odlikuje se prepoznatljivim dizajnom i čvrstom konstrukcijom sa centralnim stubnim osloncem. Idealna je za bašte, ugostiteljske objekte i veće terase gde je potrebna elegantna zaštita od sunca.',
    image: '/assets/products/tenda-polukruzna.jpg',
    images: ['/assets/products/tenda-polukruzna.jpg'],
    material: 'Dickson',
    featured: false,
    features: [
      'Polukružna konstrukcija sa centralnim stubom',
      'Pogodna za veće površine',
      'Platno otporno na UV zračenje',
      'Mogućnost motorizacije',
      'Različite veličine i boje platna',
    ],
    materials: [],
  },
  {
    id: 'tenda-vertikalna',
    title: 'Vertikalna tenda',
    category: 'tende',
    description:
      'Vertikalno zatezanje platna za zaštitu od bočnog sunca, vetra i pogleda.',
    longDescription:
      'Vertikalne tende pružaju zaštitu od niskog sunca sa bočnih strana, vetra i neželjenih pogleda. Platno se zateže vertikalno, a sistem se može koristiti samostalno ili kao dopuna klasičnoj ravnoj tendi.',
    image: '/assets/products/tenda-vertikalna.jpg',
    images: ['/assets/products/tenda-vertikalna.jpg'],
    featured: false,
    features: [
      'Vertikalno zatezanje platna',
      'Zaštita od bočnog sunca i vetra',
      'Mogućnost kombinacije sa ravnim tendama',
      'Izrada po meri',
      'Jednostavno rukovanje',
    ],
    materials: [],
  },
  {
    id: 'tenda-kupola',
    title: 'Okrugla tenda (Kupola)',
    category: 'tende',
    description:
      'Kupolasti dizajn za ugostiteljske objekte i prepoznatljive fasade.',
    longDescription:
      'Okrugla tenda kupolastog oblika stvara prepoznatljiv vizuelni identitet. Pogodna za ugostiteljske objekte, hotel i poslovne prostore. Izrađuje se od platna Irisgiovanardi uz čvrstu aluminijumsku konstrukciju.',
    image: '/assets/products/tenda-kupola.jpg',
    images: ['/assets/products/tenda-kupola.jpg'],
    material: 'Irisgiovanardi',
    featured: false,
    features: [
      'Prepoznatljiv kupolasti dizajn',
      'Aluminijumska konstrukcija',
      'Platno Irisgiovanardi',
      'Pogodno za ugostiteljske objekte',
      'Izrada prema merama objekta',
    ],
    materials: [],
  },
  {
    id: 'tenda-fiksna',
    title: 'Fiksna tenda',
    category: 'tende',
    description:
      'Stabilna, nepokretna nadstrešnica za trajnu zaštitu ulaza i izloga.',
    longDescription:
      'Fiksne tende su nepokretne nadstrešnice koje pružaju trajnu zaštitu ulaza, izloga i izložbenih prostora. Konstrukcija je čvrsta i stabilna, a platno je zategnuto u stalnom položaju, otporno na sve vremenske uslove.',
    image: '/assets/products/tenda-fiksna.jpg',
    images: ['/assets/products/tenda-fiksna.jpg'],
    featured: false,
    features: [
      'Nepokretna konstrukcija',
      'Trajna zaštita ulaza i izloga',
      'Otpornost na vremenske uslove',
      'Minimalno održavanje',
      'Izrada po meri',
    ],
    materials: [],
  },
  {
    id: 'pergola-bioklimatska',
    title: 'Bioklimatska pergola',
    category: 'pergole',
    description:
      'Aluminijumska pergola sa rotirajućim lamelama za kontrolu svetlosti, ventilacije i kiše.',
    longDescription:
      'Bioklimatska pergola je najsavremeniji sistem za zaštitu od sunca. Rotirajuće aluminijumske lamele omogućavaju preciznu regulaciju količine svetlosti, protoka vazduha i zaštitu od kiše. Lamele se mogu zaustaviti u bilo kom položaju — od potpuno otvorenog do zatvorenog. Integracija LED rasvete, senzora za kišu i vetar, kao i daljinskog upravljanja.',
    image: '/assets/products/pergola-bioklimatska.jpg',
    images: ['/assets/products/pergola-bioklimatska.jpg'],
    featured: true,
    features: [
      'Rotirajuće aluminijumske lamele',
      'Kontrola svetlosti, ventilacije i kiše',
      'Mogućnost integracije LED rasvete',
      'Senzori za kišu i vetar',
      'Daljinsko upravljanje',
      'Izrada po meri',
    ],
    materials: [],
  },
  {
    id: 'pergola-v4-fiksirana',
    title: 'Pergola V4 (fiksirana za objekat)',
    category: 'pergole',
    description:
      'Pergola delom oslonjena na objekat, kombinuje stabilnost i fleksibilan dizajn.',
    longDescription:
      'Pergola V4 se jednim delom oslanja na postojeći objekat (zid kuće), čime se dobija na stabilnosti uz mogućnost većih raspona. Pogodna za terase uz kuću, gde je potrebna zaštita veće površine.',
    image: '/assets/products/pergola-v4.jpg',
    images: ['/assets/products/pergola-v4.jpg'],
    featured: false,
    features: [
      'Delimično oslonjena na objekat',
      'Veći rasponi pokrivanja',
      'Aluminijumska konstrukcija',
      'Mogućnost integracije lamela',
      'Prilagođavanje arhitekturi objekta',
    ],
    materials: [],
  },
  {
    id: 'pergola-samostojeca',
    title: 'Samostojeća pergola',
    category: 'pergole',
    description:
      'Nezavisna aluminijumsko-čelična konstrukcija, bez potrebe za oslonom na zid.',
    longDescription:
      'Samostojeća pergola je nezavisna konstrukcija koja ne zahteva oslonac na postojeći objekat. Idealna je za bašte, dvorišta i restoranske bašte gde nema zida za fiksiranje. Može se postaviti na bilo koju ravnu podlogu.',
    image: '/assets/products/pergola-samostojeca.jpg',
    images: ['/assets/products/pergola-samostojeca.jpg'],
    featured: false,
    features: [
      'Nezavisna konstrukcija bez oslonca na zid',
      'Pogodna za bašte i dvorišta',
      'Aluminijumsko-čelična konstrukcija',
      'Mogućnost krovnih lamela',
      'Različite dimenzije i konfiguracije',
    ],
    materials: [],
  },
  {
    id: 'roletne-aluminijumske',
    title: 'Aluminijumske roletne',
    category: 'roletne',
    description:
      'Lamele od aluminijumske legure punjene poliuretanom, za termo i zvučnu izolaciju.',
    longDescription:
      'Aluminijumske roletne sa poliuretanskom punom pružaju odličnu termičku i zvučnu izolaciju, kao i zaštitu od provale. Lamele su izrađene od aluminijumske legure, a unutrašnjost je ispunjena poliuretanom koji dodatno pojačava izolaciona svojstva.',
    image: '/assets/products/roletne-aluminijumske.jpg',
    images: ['/assets/products/roletne-aluminijumske.jpg'],
    featured: false,
    features: [
      'Aluminijumske lamele sa poliuretanskom punom',
      'Termo i zvučna izolacija',
      'Zaštita od provale',
      'Mogućnost motorizacije',
      'Širok spektar boja',
    ],
    materials: [],
  },
  {
    id: 'roletne-pvc',
    title: 'PVC roletne',
    category: 'roletne',
    description:
      'Otporne na atmosferske uticaje, u širokom spektru boja usklađenih sa stolarijom.',
    longDescription:
      'PVC roletne su otporne na vlagu, koroziju i atmosferske uticaje, što ih čini idealnim rešenjem za sve tipove objekata. Dostupne su u širokom spektru boja koje se mogu uskladiti sa postojećom stolarijom.',
    image: '/assets/products/roletne-pvc.jpg',
    images: ['/assets/products/roletne-pvc.jpg'],
    featured: false,
    features: [
      'Otpornost na vlagu i koroziju',
      'Širok spektar boja',
      'Usklađivanje sa stolarijom',
      'Pristupačna cena',
      'Jednostavno održavanje',
    ],
    materials: [],
  },
  {
    id: 'roletne-screen',
    title: 'Screen roletne',
    category: 'roletne',
    description:
      'Tehničko platno koje propušta svetlost i smanjuje toplotu, uz zadržan pogled napolje.',
    longDescription:
      'Screen roletne koriste tehničko platno koje propušta prirodnu svetlost dok istovremeno smanjuje zagrevanje prostora i blokira UV zračenje. Za razliku od standardnih roletni, screen omogućava pogled ka spoljašnjosti dok pruža zaštitu od sunca.',
    image: '/assets/products/roletne-screen.jpg',
    images: ['/assets/products/roletne-screen.jpg'],
    featured: false,
    features: [
      'Tehničko platno koje propušta svetlost',
      'Smanjenje zagrevanja prostora',
      'Blokada UV zračenja',
      'Očuvan pogled ka spoljašnjosti',
      'Pogodno za poslovne i stambene objekte',
    ],
    materials: [],
  },
  {
    id: 'venecijaneri',
    title: 'Venecijaneri',
    category: 'zavese',
    description:
      'Klasične horizontalne lamele za preciznu regulaciju svetlosti u enterijeru.',
    longDescription:
      'Aluminijumske i drvene venecijanere omogućavaju preciznu regulaciju količine svetlosti koja ulazi u prostoriju. Horizontalne lamele se mogu zakretati pod željenim uglom, čime se postiže optimalna kombinacija svetlosti i privatnosti.',
    image: '/assets/products/venecijaneri.jpg',
    images: ['/assets/products/venecijaneri.jpg'],
    featured: false,
    features: [
      'Horizontalne aluminijumske ili drvene lamele',
      'Precizna regulacija svetlosti',
      'Širok spektar boja i završnih obrada',
      'Jednostavno održavanje',
      'Izrada po meri prozora',
    ],
    materials: [],
  },
  {
    id: 'zebra-zavese',
    title: 'Zebra zavese',
    category: 'zavese',
    description:
      'Kombinacija providnih i neprovidnih traka za fluidnu kontrolu svetlosti i privatnosti.',
    longDescription:
      'Zebra zavese su moderan sistem senčenja koji kombinuje naizmenične providne i neprovidne trake tkanine. Pomeranjem traka jedna u odnosu na drugu postiže se fluidna kontrola svetlosti — od potpune privatnosti do delimičnog propuštanja svetlosti.',
    image: '/assets/products/zebra-zavese.jpg',
    images: ['/assets/products/zebra-zavese.jpg'],
    featured: false,
    features: [
      'Kombinacija providnih i neprovidnih traka',
      'Fluidna kontrola svetlosti',
      'Moderan i elegantan izgled',
      'Jednostavno rukovanje',
      'Izrada po meri',
    ],
    materials: [],
  },
  {
    id: 'komarnici',
    title: 'Komarnici',
    category: 'komarnici',
    description:
      'Fiksni, rolo i plise komarnici za prozore i vrata, izrađeni po meri otvora.',
    longDescription:
      'Naši komarnici se izrađuju po meri svakog otvora, bez obzira na dimenzije i oblik. Nudimo fiksne komarnike za stalnu zaštitu, rolo komarnike sa opružnim mehanizmom koji se automatski namotavaju i plise komarnike koji se sklapaju kao harmonika.',
    image: '/assets/products/komarnici.jpg',
    images: ['/assets/products/komarnici.jpg'],
    featured: false,
    features: [
      'Izrada po meri otvora',
      'Fiksni, rolo i plise modeli',
      'Kvalitetna mreža protiv insekata',
      'Jednostavna ugradnja',
      'Diskretan dizajn',
    ],
    materials: [],
  },
  {
    id: 'zatvaranje-zastakljivanje',
    title: 'Zatvaranje terase — zastakljivanje',
    category: 'zatvaranje-terasa',
    description:
      'Potpuno zatvaranje bašte ili terase staklenim panelima, za korišćenje tokom cele godine.',
    longDescription:
      'Zastakljivanje terase ili bašte omogućava korišćenje prostora tokom svih godišnjih doba. Stakleni paneli štite od kiše, vetra i hladnoće, dok istovremeno propuštaju prirodnu svetlost i omogućavaju nesmetan pogled.',
    image: '/assets/products/zatvaranje-staklo.jpg',
    images: ['/assets/products/zatvaranje-staklo.jpg'],
    featured: true,
    features: [
      'Potpuno zatvaranje staklenim panelima',
      'Korišćenje prostora tokom cele godine',
      'Zaštita od kiše, vetra i hladnoće',
      'Očuvanje preglednosti i svetlosti',
      'Izrada po meri terase',
    ],
    materials: [],
  },
  {
    id: 'zatvaranje-zip-pvc',
    title: 'Zatvaranje terase — ZIP PVC sistem',
    category: 'zatvaranje-terasa',
    description:
      'Providna PVC folija sa rajsfešlus ili vodilica sistemom zatvaranja, otporna na vremenske uslove.',
    longDescription:
      'ZIP PVC sistem za zatvaranje terasa koristi providnu PVC foliju koja se zateže pomoću rajfešlus ili vodilica sistema. Ovaj sistem pruža efikasnu zaštitu od kiše, vetra i prašine, dok zadržava preglednost i propušta svetlost.',
    image: '/assets/products/zatvaranje-zip.jpg',
    images: ['/assets/products/zatvaranje-zip.jpg'],
    featured: false,
    features: [
      'Providna PVC folija',
      'Rajfešlus ili vodilica sistem',
      'Zaštita od kiše, vetra i prašine',
      'Očuvanje preglednosti',
      'Pristupačna cena u odnosu na zastakljivanje',
    ],
    materials: [],
  },
  {
    id: 'suncobran-aluminijumski',
    title: 'Aluminijumski suncobran',
    category: 'suncobrani',
    description:
      'Plastificirana konstrukcija u beloj ili izabranoj boji, sa fiksnim ili prenosivim postoljem.',
    longDescription:
      'Aluminijumski suncobrani su robustni i izdržljivi, sa plastificiranom konstrukcijom koja je otporna na koroziju. Dostupni su sa fiksnim postoljem za trajnu instalaciju ili prenosivim postoljem za fleksibilno korišćenje.',
    image: '/assets/products/suncobran.jpg',
    images: ['/assets/products/suncobran.jpg'],
    featured: false,
    features: [
      'Plastificirana aluminijumska konstrukcija',
      'Fiksno ili prenosivo postolje',
      'Otpornost na koroziju',
      'Bela ili boja po izboru',
      'Pogodno za bašte i ugostiteljske objekte',
    ],
    materials: [],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.id === slug)
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter((p) => p.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}
