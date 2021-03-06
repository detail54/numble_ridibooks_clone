export interface IBook {
  id: number
  thumbnail: string
  type: string // novel, ebook, webNovel
  category: string[] // romance, fantasy, humanities, thriller, detective, society, history, sf
  title: string
  author: {
    name: string
    awards: string[]
    representatives: {
      name: string
      thumbnail: string
    }[]
    introduction: string
  }
  translator: {
    name: string
    nationality: string
    career: string
    representatives: {
      name: string
      thumbnail: string
    }[]
    introduction: string
  }
  publisher: string
  starRate: {
    rate: number
    rateNum: number // 별점 참여자 수
    rateBuyerNum: number // 별점 참여자 중 구매자 수
  }
  rentalPrice: number
  rentalSalePercent: number
  buyPrice: number
  buySalePercent: number
  count: number // 총 권 수
  freeCount: number // 무료 권 수. count보다 큰 경우는 전권 무료입니다.
  isFinished: boolean
  canRent: boolean // canRent 항목의 우선 순위가 rentalPrice, rentalSalePrice보다 높습니다.
  waitFree: boolean
  xRated: boolean
  description: string
  index: string
  lastlyRead: string // yyyy-mm-dd
}

export const books: IBook[] = [
  {
    id: 1,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
    type: 'webNovel',
    category: ['sf', 'detective'],
    title: 'Diabetes',
    author: {
      name: 'Reeta Loukes',
      awards: ['Denesik Group', 'Leuschke-Herzog'],
      representatives: [
        {
          name: 'Food Science',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'VMware',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'OmniGraffle',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    },
    translator: {
      name: 'Wat Ebourne',
      nationality: 'North Korea',
      career: 'Bahringer-Fay',
      representatives: [
        {
          name: 'NHS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
      ],
      introduction:
        'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    },
    publisher: 'Kuhic, Huels and Schuppe',
    starRate: { rate: 1.2, rateNum: 71, rateBuyerNum: 17 },
    rentalPrice: 431,
    rentalSalePercent: 35,
    buyPrice: 34885,
    buySalePercent: 32,
    count: 2,
    freeCount: 2,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: false,
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    index:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    lastlyRead: '2021-01-10',
  },
  {
    id: 2,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
    type: 'novel',
    category: ['humanities'],
    title: 'Water Quality',
    author: {
      name: 'Karissa Otter',
      awards: ['Lindgren-Mohr'],
      representatives: [
        {
          name: 'Overall Wellness',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        { name: 'FSC Certification', thumbnail: '' },
        { name: 'SAP SD', thumbnail: '' },
      ],
      introduction: 'Maecenas rhoncus aliquam lacus.',
    },
    translator: {
      name: 'Guillema Bruckman',
      nationality: 'North Korea',
      career: 'Bergnaum Inc',
      representatives: [
        {
          name: 'DTA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
      ],
      introduction:
        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    },
    publisher: 'Pouros, Haag and Hirthe',
    starRate: { rate: 3.7, rateNum: 75, rateBuyerNum: 1 },
    rentalPrice: 1196,
    rentalSalePercent: 36,
    buyPrice: 54593,
    buySalePercent: 47,
    count: 7,
    freeCount: 7,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: true,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    index:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    lastlyRead: '2021-01-07',
  },
  {
    id: 3,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
    type: 'webNovel',
    category: ['romance', 'history'],
    title: 'WCCP',
    author: {
      name: 'Del Antoniutti',
      awards: ['Brekke, Runolfsson and Russel'],
      representatives: [
        {
          name: 'MCSA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'VSEO',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'Online Gaming',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'TDR',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'Strategic HR',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Multi-Unit Management',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction:
        'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    },
    translator: {
      name: 'Robinson Colaco',
      nationality: 'North Korea',
      career: 'Stokes, Osinski and Kunde',
      representatives: [
        { name: 'Oil Analysis', thumbnail: '' },
        {
          name: 'Tiles',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'Durable Goods',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    },
    publisher: 'Metz-Wilderman',
    starRate: { rate: 0.1, rateNum: 33, rateBuyerNum: 7 },
    rentalPrice: 755,
    rentalSalePercent: 6,
    buyPrice: 56947,
    buySalePercent: 41,
    count: 30,
    freeCount: 3,
    isFinished: true,
    canRent: true,
    waitFree: true,
    xRated: true,
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    index:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    lastlyRead: '2021-09-29',
  },
  {
    id: 4,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
    type: 'novel',
    category: ['fantasy'],
    title: 'Hand-drawn Typography',
    author: {
      name: 'Fanechka Tallach',
      awards: ['Schmitt-Kshlerin', 'Douglas Group'],
      representatives: [
        { name: 'Short Films', thumbnail: '' },
        {
          name: 'SFI',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'IVD',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Air Traffic Control',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'RLC',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'OSHA 30-Hour',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    },
    translator: {
      name: 'Wyatan Wimsett',
      nationality: 'North Korea',
      career: 'Gislason LLC',
      representatives: [
        {
          name: 'Urban Economics',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    },
    publisher: 'Lesch-Konopelski',
    starRate: { rate: 1.5, rateNum: 67, rateBuyerNum: 8 },
    rentalPrice: 988,
    rentalSalePercent: 36,
    buyPrice: 54487,
    buySalePercent: 33,
    count: 6,
    freeCount: 8,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    index:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    lastlyRead: '2021-06-27',
  },
  {
    id: 5,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
    type: 'ebook',
    category: ['sf', 'history'],
    title: 'Online Help',
    author: {
      name: 'Theobald Welland',
      awards: [
        'Thiel-Hirthe',
        'Collier-Pfannerstill',
        'Rosenbaum, Wolff and Cole',
      ],
      representatives: [
        {
          name: 'Market Knowledge',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Import',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'MCH',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Pyrolysis',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Sony Vegas',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'UCP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction:
        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    },
    translator: {
      name: 'Aubrey Ruspine',
      nationality: 'North Korea',
      career: 'Lueilwitz-Brekke',
      representatives: [
        {
          name: 'Jet Ski',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'RNP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
      ],
      introduction:
        'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    },
    publisher: 'Jaskolski, Wiegand and Smitham',
    starRate: { rate: 4.3, rateNum: 36, rateBuyerNum: 12 },
    rentalPrice: 1242,
    rentalSalePercent: 30,
    buyPrice: 44162,
    buySalePercent: 33,
    count: 10,
    freeCount: 8,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    index:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    lastlyRead: '2021-01-31',
  },
  {
    id: 6,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
    type: 'novel',
    category: ['thriller'],
    title: 'BTL Activations',
    author: {
      name: 'Alexandro Ottewill',
      awards: ['Oberbrunner-Stoltenberg'],
      representatives: [
        {
          name: 'JDO',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'NPV',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'NWDI',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    },
    translator: {
      name: 'Laure Moston',
      nationality: 'North Korea',
      career: 'Jacobs LLC',
      representatives: [
        {
          name: 'SFR Certified',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Lotus Domino',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'PTC Creo',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Pipefitting',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'EOC',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
      ],
      introduction:
        'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    },
    publisher: 'Leffler-Schmidt',
    starRate: { rate: 1.8, rateNum: 61, rateBuyerNum: 11 },
    rentalPrice: 794,
    rentalSalePercent: 10,
    buyPrice: 27064,
    buySalePercent: 17,
    count: 8,
    freeCount: 4,
    isFinished: true,
    canRent: false,
    waitFree: true,
    xRated: false,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    index:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    lastlyRead: '2021-02-18',
  },
  {
    id: 7,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
    type: 'ebook',
    category: ['humanities'],
    title: 'EJB',
    author: {
      name: 'Caddric Evanson',
      awards: ['Ortiz-Borer', 'Rutherford-Armstrong', 'Runte LLC'],
      representatives: [
        {
          name: 'Web TV',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'BTS Installation',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'TDA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Hunting',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'PDH',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        { name: 'UIM', thumbnail: '' },
      ],
      introduction:
        'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    },
    translator: {
      name: 'Orson Fitzroy',
      nationality: 'North Korea',
      career: 'Abbott-Buckridge',
      representatives: [
        {
          name: 'DWH',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Keyboard Skills',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
      ],
      introduction:
        'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    },
    publisher: 'Hauck and Sons',
    starRate: { rate: 1.0, rateNum: 80, rateBuyerNum: 0 },
    rentalPrice: 1002,
    rentalSalePercent: 19,
    buyPrice: 58417,
    buySalePercent: 25,
    count: 29,
    freeCount: 3,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    index:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    lastlyRead: '2021-08-18',
  },
  {
    id: 8,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
    type: 'novel',
    category: ['fantasy', 'society'],
    title: 'Wyse',
    author: {
      name: 'Blythe Furphy',
      awards: ['Legros-Frami', 'Harvey Inc'],
      representatives: [
        {
          name: 'Oasys',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'DMU',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'LPG',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'NSA-IAM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Umbrellas',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    },
    translator: {
      name: 'Kendal Dew',
      nationality: 'North Korea',
      career: 'Marks, Greenfelder and Wuckert',
      representatives: [
        {
          name: 'EKG',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        { name: 'BSF', thumbnail: '' },
        { name: 'Hudson', thumbnail: '' },
      ],
      introduction:
        'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    },
    publisher: 'Ankunding LLC',
    starRate: { rate: 2.9, rateNum: 39, rateBuyerNum: 7 },
    rentalPrice: 1345,
    rentalSalePercent: 9,
    buyPrice: 8603,
    buySalePercent: 38,
    count: 20,
    freeCount: 9,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: false,
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    index:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    lastlyRead: '2021-06-19',
  },
  {
    id: 9,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
    type: 'webNovel',
    category: ['sf', 'society'],
    title: 'TPX',
    author: {
      name: 'Marty Dowtry',
      awards: ['Spinka and Sons', 'Hartmann-Boehm', 'Conroy LLC'],
      representatives: [
        {
          name: 'mLearning',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'RS422',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction:
        'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    },
    translator: {
      name: 'Silvia Nossent',
      nationality: 'North Korea',
      career: 'Schuster-Crooks',
      representatives: [
        {
          name: 'Food Quality',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'DLC',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
      ],
      introduction:
        'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    },
    publisher: 'Hermiston-Gaylord',
    starRate: { rate: 3.0, rateNum: 65, rateBuyerNum: 30 },
    rentalPrice: 178,
    rentalSalePercent: 34,
    buyPrice: 48765,
    buySalePercent: 34,
    count: 27,
    freeCount: 4,
    isFinished: true,
    canRent: false,
    waitFree: true,
    xRated: false,
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    index:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    lastlyRead: '2021-07-17',
  },
  {
    id: 10,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
    type: 'ebook',
    category: ['sf'],
    title: 'Home Health Agencies',
    author: {
      name: 'Giff Darton',
      awards: ['Welch-Batz', "Hane-O'Hara", 'Kuphal, Parker and Murphy'],
      representatives: [],
      introduction:
        'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    },
    translator: {
      name: 'Emma Dripp',
      nationality: 'North Korea',
      career: 'Emard, Klein and Paucek',
      representatives: [
        {
          name: 'LynxOS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Jenkins',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        { name: 'Electric Guitar', thumbnail: '' },
        {
          name: 'FMEA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction:
        'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    },
    publisher: 'Schneider-Lynch',
    starRate: { rate: 3.3, rateNum: 59, rateBuyerNum: 26 },
    rentalPrice: 1019,
    rentalSalePercent: 21,
    buyPrice: 37016,
    buySalePercent: 5,
    count: 20,
    freeCount: 7,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: true,
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    index: 'Etiam vel augue. Vestibulum rutrum rutrum neque.',
    lastlyRead: '2021-08-22',
  },
  {
    id: 11,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
    type: 'webNovel',
    category: ['detective'],
    title: 'NSS',
    author: {
      name: 'Sherwin Cancellor',
      awards: ['Hahn and Sons', 'Botsford, Nitzsche and Littel'],
      representatives: [],
      introduction:
        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    },
    translator: {
      name: 'Patty Boyen',
      nationality: 'North Korea',
      career: 'Koepp and Sons',
      representatives: [],
      introduction: 'Nullam varius.',
    },
    publisher: 'Metz LLC',
    starRate: { rate: 4.9, rateNum: 68, rateBuyerNum: 20 },
    rentalPrice: 643,
    rentalSalePercent: 15,
    buyPrice: 16091,
    buySalePercent: 36,
    count: 27,
    freeCount: 0,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: false,
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    index: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    lastlyRead: '2021-01-13',
  },
  {
    id: 12,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
    type: 'webNovel',
    category: ['sf', 'fantasy'],
    title: 'JSON-RPC',
    author: {
      name: 'Tabbi Britch',
      awards: ['McClure-Lubowitz', 'Durgan-Schmidt', 'Haley Inc'],
      representatives: [
        {
          name: 'MPLS Networking',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'DDTS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'MS Axapta',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction: 'Nulla ut erat id mauris vulputate elementum.',
    },
    translator: {
      name: 'Nickey Kybird',
      nationality: 'North Korea',
      career: 'Armstrong-Kemmer',
      representatives: [
        {
          name: 'CVIS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'Keynote',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'Wound Care',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
      ],
      introduction:
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    },
    publisher: 'Breitenberg, Parisian and Blick',
    starRate: { rate: 3.0, rateNum: 49, rateBuyerNum: 13 },
    rentalPrice: 868,
    rentalSalePercent: 18,
    buyPrice: 7705,
    buySalePercent: 19,
    count: 22,
    freeCount: 2,
    isFinished: true,
    canRent: false,
    waitFree: true,
    xRated: false,
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    index: 'Suspendisse potenti.',
    lastlyRead: '2021-11-03',
  },
  {
    id: 13,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
    type: 'webNovel',
    category: ['thriller', 'fantasy'],
    title: 'Wireless',
    author: {
      name: 'Fulvia Kinsley',
      awards: ['Stokes-Ernser', 'Corwin-Jacobs'],
      representatives: [
        {
          name: 'Mobile Marketing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Guest Recovery',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Ships',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    },
    translator: {
      name: 'Aubree Cartmail',
      nationality: 'North Korea',
      career: 'Dickinson-Beer',
      representatives: [
        {
          name: 'E-zines',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        { name: 'Blackberry Enterprise Server', thumbnail: '' },
        {
          name: 'Joint Ventures',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Zenoss',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    },
    publisher: 'Muller-Abernathy',
    starRate: { rate: 3.3, rateNum: 69, rateBuyerNum: 29 },
    rentalPrice: 1425,
    rentalSalePercent: 44,
    buyPrice: 13160,
    buySalePercent: 1,
    count: 24,
    freeCount: 10,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    index:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    lastlyRead: '2021-06-09',
  },
  {
    id: 14,
    thumbnail: '',
    type: 'novel',
    category: ['society'],
    title: 'Vulnerability Scanning',
    author: {
      name: 'Frants Bilovsky',
      awards: ['Hand-Stark', 'Yost Inc'],
      representatives: [
        {
          name: 'Wealth Management',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Vital Signs',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'FSMS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction:
        'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    },
    translator: {
      name: 'Murdoch Bodycote',
      nationality: 'North Korea',
      career: 'Schuster Group',
      representatives: [
        {
          name: 'Wiring',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    },
    publisher: 'Roob, Grimes and Abshire',
    starRate: { rate: 2.9, rateNum: 66, rateBuyerNum: 24 },
    rentalPrice: 856,
    rentalSalePercent: 45,
    buyPrice: 52738,
    buySalePercent: 9,
    count: 25,
    freeCount: 8,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: true,
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    index:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    lastlyRead: '2020-12-15',
  },
  {
    id: 15,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
    type: 'webNovel',
    category: ['humanities'],
    title: 'Vray',
    author: {
      name: 'Rickie Johannesson',
      awards: ['Hills, Nitzsche and Ferry'],
      representatives: [
        {
          name: 'TSS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'HTC',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        { name: 'VSAT', thumbnail: '' },
        {
          name: 'OCR',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Wiring',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Non-linear Editing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    },
    translator: {
      name: 'Jewelle Francombe',
      nationality: 'North Korea',
      career: 'Jones LLC',
      representatives: [
        {
          name: 'Jerseys',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'NC-Verilog',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Lithium-ion Batteries',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Urban Forestry',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Electrical Engineering',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    },
    publisher: "Bayer, Ankunding and O'Reilly",
    starRate: { rate: 0.7, rateNum: 70, rateBuyerNum: 22 },
    rentalPrice: 636,
    rentalSalePercent: 1,
    buyPrice: 30850,
    buySalePercent: 6,
    count: 10,
    freeCount: 3,
    isFinished: true,
    canRent: false,
    waitFree: true,
    xRated: true,
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    index: 'Sed sagittis.',
    lastlyRead: '2021-05-17',
  },
  {
    id: 16,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
    type: 'webNovel',
    category: ['history', 'romance'],
    title: 'Water Features',
    author: {
      name: 'Carlynn Briatt',
      awards: [
        'Koelpin, Kautzer and Grimes',
        'Mills-Stiedemann',
        'Aufderhar, Cassin and Ziemann',
      ],
      representatives: [
        {
          name: 'Kodak',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Amazon RDS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'Sustainability',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction:
        'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    },
    translator: {
      name: 'Britta Plaunch',
      nationality: 'North Korea',
      career: 'Kihn, Towne and Greenholt',
      representatives: [
        {
          name: 'Teaching',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'WUFI',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    },
    publisher: 'Ziemann Inc',
    starRate: { rate: 1.5, rateNum: 32, rateBuyerNum: 14 },
    rentalPrice: 306,
    rentalSalePercent: 17,
    buyPrice: 41787,
    buySalePercent: 41,
    count: 12,
    freeCount: 6,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    index:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    lastlyRead: '2020-12-01',
  },
  {
    id: 17,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
    type: 'ebook',
    category: ['humanities', 'society'],
    title: 'Medical-Surgical',
    author: {
      name: 'Conant Wilfing',
      awards: ['Blick, Considine and Ratke', 'Shanahan-Koch'],
      representatives: [
        {
          name: 'Business Transformation',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'uDig',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'cXML',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    },
    translator: {
      name: 'Gavan Gehring',
      nationality: 'North Korea',
      career: 'Bartoletti-Rutherford',
      representatives: [
        {
          name: 'TFF',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        { name: 'Layout', thumbnail: '' },
        {
          name: 'Embedded Software',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        { name: 'Mortgage Underwriting', thumbnail: '' },
      ],
      introduction:
        'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.',
    },
    publisher: 'Stiedemann, Olson and Sporer',
    starRate: { rate: 4.8, rateNum: 58, rateBuyerNum: 20 },
    rentalPrice: 577,
    rentalSalePercent: 41,
    buyPrice: 25990,
    buySalePercent: 11,
    count: 8,
    freeCount: 10,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: false,
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    index:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    lastlyRead: '2021-05-31',
  },
  {
    id: 18,
    thumbnail: '',
    type: 'webNovel',
    category: ['detective'],
    title: 'SAP BPM',
    author: {
      name: 'Damien Milella',
      awards: ['Runolfsdottir, Turner and Welch'],
      representatives: [],
      introduction:
        'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    },
    translator: {
      name: 'Ollie Thomelin',
      nationality: 'North Korea',
      career: 'Bauch, Monahan and Huels',
      representatives: [
        {
          name: 'DPM 2010',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'RTGS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        { name: 'JCAHO', thumbnail: '' },
      ],
      introduction:
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    },
    publisher: 'Bashirian-Flatley',
    starRate: { rate: 3.1, rateNum: 78, rateBuyerNum: 9 },
    rentalPrice: 1181,
    rentalSalePercent: 17,
    buyPrice: 53287,
    buySalePercent: 27,
    count: 26,
    freeCount: 5,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: false,
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    index:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    lastlyRead: '2021-08-31',
  },
  {
    id: 19,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
    type: 'novel',
    category: ['romance', 'fantasy'],
    title: 'Torts',
    author: {
      name: 'Cristian Annon',
      awards: [
        'Mitchell Group',
        'Barton, Wyman and Predovic',
        'Hahn, Bosco and Waters',
      ],
      representatives: [
        {
          name: 'Epistemology',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'MLB',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Pneumatic Tools',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'VSTO',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
      ],
      introduction:
        'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    },
    translator: {
      name: 'Stormi Antoniazzi',
      nationality: 'North Korea',
      career: 'Prohaska-Rutherford',
      representatives: [
        {
          name: 'Zend Certified Engineer',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        { name: 'Sleep Apnea', thumbnail: '' },
      ],
      introduction:
        'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    },
    publisher: 'Reichert, Hegmann and Kunde',
    starRate: { rate: 3.1, rateNum: 33, rateBuyerNum: 15 },
    rentalPrice: 1121,
    rentalSalePercent: 44,
    buyPrice: 7037,
    buySalePercent: 42,
    count: 21,
    freeCount: 4,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
    index:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    lastlyRead: '2021-06-30',
  },
  {
    id: 20,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
    type: 'novel',
    category: ['history', 'society'],
    title: 'ZBrush',
    author: {
      name: 'Merissa Fegan',
      awards: ['Lemke, Buckridge and Roberts', 'Dicki, Strosin and Marvin'],
      representatives: [],
      introduction:
        'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    },
    translator: {
      name: 'Amelita Gumn',
      nationality: 'North Korea',
      career: 'Botsford, Hudson and Bins',
      representatives: [
        {
          name: 'EELS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'Cinematography',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'NCIE',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    },
    publisher: 'Streich Group',
    starRate: { rate: 2.7, rateNum: 40, rateBuyerNum: 1 },
    rentalPrice: 665,
    rentalSalePercent: 33,
    buyPrice: 5800,
    buySalePercent: 35,
    count: 4,
    freeCount: 2,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: false,
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    index: 'Nam tristique tortor eu pede.',
    lastlyRead: '2021-06-01',
  },
  {
    id: 21,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
    type: 'ebook',
    category: ['fantasy', 'detective'],
    title: 'Real Estate License',
    author: {
      name: 'Tedi Quayle',
      awards: ['Shanahan-Muller'],
      representatives: [
        {
          name: 'Efficent',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Writing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'Screening',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Ethical Decision Making',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        { name: 'Appointment Scheduling', thumbnail: '' },
        {
          name: 'Snorkeling',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    },
    translator: {
      name: 'Timothee Lissandri',
      nationality: 'North Korea',
      career: 'Purdy Inc',
      representatives: [
        {
          name: 'Zenoss',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'HCCP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'CTAs',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'IVIG',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Capacity Building',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
      ],
      introduction:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    },
    publisher: 'Boyle and Sons',
    starRate: { rate: 3.9, rateNum: 64, rateBuyerNum: 7 },
    rentalPrice: 208,
    rentalSalePercent: 38,
    buyPrice: 49494,
    buySalePercent: 39,
    count: 4,
    freeCount: 5,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: false,
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    index:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    lastlyRead: '2021-05-07',
  },
  {
    id: 22,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
    type: 'novel',
    category: ['society'],
    title: 'RPAS',
    author: {
      name: 'Odele Kornes',
      awards: ['Brakus LLC', 'West and Sons', 'Medhurst-Hudson'],
      representatives: [
        {
          name: 'NDA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction:
        'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    },
    translator: {
      name: 'Jackie Daviddi',
      nationality: 'North Korea',
      career: 'Kris LLC',
      representatives: [
        {
          name: 'SAP SRM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Tax',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'International Human Rights',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    },
    publisher: 'Bahringer Inc',
    starRate: { rate: 0.4, rateNum: 46, rateBuyerNum: 10 },
    rentalPrice: 1268,
    rentalSalePercent: 14,
    buyPrice: 21919,
    buySalePercent: 26,
    count: 22,
    freeCount: 7,
    isFinished: true,
    canRent: false,
    waitFree: true,
    xRated: true,
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    index:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    lastlyRead: '2021-10-15',
  },
  {
    id: 23,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
    type: 'webNovel',
    category: ['sf'],
    title: 'Allergic Rhinitis',
    author: {
      name: 'Welbie Wren',
      awards: ['Rippin Group', 'Jerde-Leuschke', "O'Reilly LLC"],
      representatives: [
        {
          name: 'LTV',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        { name: 'OGC Gateway Reviews', thumbnail: '' },
        {
          name: 'OH&amp;S',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'YUM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        { name: 'Zinc', thumbnail: '' },
        {
          name: 'ProSystem fx Tax',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    },
    translator: {
      name: 'Inness Geill',
      nationality: 'North Korea',
      career: 'Konopelski, Corwin and Bradtke',
      representatives: [
        {
          name: 'Cash Flow Forecasting',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Wide Format Printing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'RF Test',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    },
    publisher: 'Toy Inc',
    starRate: { rate: 1.6, rateNum: 46, rateBuyerNum: 18 },
    rentalPrice: 308,
    rentalSalePercent: 5,
    buyPrice: 26633,
    buySalePercent: 26,
    count: 2,
    freeCount: 0,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: true,
    description: 'In eleifend quam a odio. In hac habitasse platea dictumst.',
    index:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    lastlyRead: '2021-10-07',
  },
  {
    id: 24,
    thumbnail: '',
    type: 'novel',
    category: ['romance'],
    title: 'DC-9',
    author: {
      name: 'Fredrika Arnaudet',
      awards: [
        'Franecki, Jones and Simonis',
        'Mayert-Feest',
        'Shanahan, Wilkinson and Toy',
      ],
      representatives: [
        {
          name: 'LTACH',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'Lumion',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'LCD Projectors',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Customer Acquisition',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Business Planning',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction: 'Morbi non quam nec dui luctus rutrum.',
    },
    translator: {
      name: 'Filide Cooley',
      nationality: 'North Korea',
      career: 'Mayert Group',
      representatives: [{ name: 'SX.enterprise', thumbnail: '' }],
      introduction:
        'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    },
    publisher: 'Jones, McClure and Abbott',
    starRate: { rate: 1.4, rateNum: 78, rateBuyerNum: 2 },
    rentalPrice: 1492,
    rentalSalePercent: 0,
    buyPrice: 10021,
    buySalePercent: 32,
    count: 2,
    freeCount: 8,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: true,
    description: 'Nunc nisl.',
    index:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    lastlyRead: '2020-12-25',
  },
  {
    id: 25,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
    type: 'novel',
    category: ['fantasy'],
    title: 'Xserve',
    author: {
      name: 'Lindon Sycamore',
      awards: ['Koepp, Prohaska and Smith'],
      representatives: [
        {
          name: 'MySQL Cluster',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
      ],
      introduction: 'Vivamus vestibulum sagittis sapien.',
    },
    translator: {
      name: 'Patrizius Devereux',
      nationality: 'North Korea',
      career: 'Pagac, Gottlieb and Wisoky',
      representatives: [
        {
          name: 'Japanese',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction:
        'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    },
    publisher: 'Brakus, Bradtke and Gulgowski',
    starRate: { rate: 0.7, rateNum: 54, rateBuyerNum: 3 },
    rentalPrice: 473,
    rentalSalePercent: 37,
    buyPrice: 26571,
    buySalePercent: 14,
    count: 9,
    freeCount: 10,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: false,
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    index: 'Donec posuere metus vitae ipsum. Aliquam non mauris.',
    lastlyRead: '2021-03-29',
  },
  {
    id: 26,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
    type: 'webNovel',
    category: ['society'],
    title: 'RPT',
    author: {
      name: 'Jasen Shreenan',
      awards: ['Jerde, Watsica and Weimann', 'MacGyver Group'],
      representatives: [
        {
          name: 'IATSE',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'UHV',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Credit',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        { name: 'SSAE 16', thumbnail: '' },
        {
          name: 'IRAs',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    },
    translator: {
      name: 'Stanislaw Shepheard',
      nationality: 'North Korea',
      career: 'Boyle, Schumm and Beatty',
      representatives: [
        {
          name: 'Unreal Editor',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'Job Search',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Ultrafast Spectroscopy',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Kitchen &amp; Bath Design',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Data Modeling',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    },
    publisher: 'Walter and Sons',
    starRate: { rate: 0.0, rateNum: 37, rateBuyerNum: 9 },
    rentalPrice: 952,
    rentalSalePercent: 35,
    buyPrice: 50465,
    buySalePercent: 16,
    count: 14,
    freeCount: 10,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    index: 'Mauris sit amet eros.',
    lastlyRead: '2021-02-07',
  },
  {
    id: 27,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
    type: 'ebook',
    category: ['history', 'society'],
    title: 'Air Traffic Control',
    author: {
      name: "Miquela O'Day",
      awards: ['Walker-Gaylord', 'Cronin-Windler', 'Stroman, Stark and Lesch'],
      representatives: [],
      introduction:
        'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    },
    translator: {
      name: 'Janey Zanneli',
      nationality: 'North Korea',
      career: 'Jakubowski, Maggio and Koelpin',
      representatives: [
        {
          name: 'Gigabit Ethernet',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'LCD',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'PTH',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Alumni Relations',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction:
        'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    },
    publisher: 'Olson-Kiehn',
    starRate: { rate: 1.5, rateNum: 65, rateBuyerNum: 5 },
    rentalPrice: 224,
    rentalSalePercent: 21,
    buyPrice: 49524,
    buySalePercent: 5,
    count: 12,
    freeCount: 3,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: false,
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    index:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    lastlyRead: '2021-03-15',
  },
  {
    id: 28,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
    type: 'webNovel',
    category: ['sf'],
    title: 'Medical Nutrition Therapy',
    author: {
      name: 'Klarika Klemt',
      awards: ['Klein Inc'],
      representatives: [
        {
          name: 'WS-*',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        { name: 'BMX', thumbnail: '' },
        {
          name: 'Ntop',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Hypermesh',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'XSLT',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction: 'In quis justo. Maecenas rhoncus aliquam lacus.',
    },
    translator: {
      name: 'Jefferson Bickle',
      nationality: 'North Korea',
      career: 'Sawayn LLC',
      representatives: [
        {
          name: 'Manual Therapy',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction:
        'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    },
    publisher: 'Metz-DuBuque',
    starRate: { rate: 3.5, rateNum: 68, rateBuyerNum: 10 },
    rentalPrice: 1095,
    rentalSalePercent: 44,
    buyPrice: 24934,
    buySalePercent: 39,
    count: 11,
    freeCount: 3,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: true,
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    index:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    lastlyRead: '2021-02-27',
  },
  {
    id: 29,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
    type: 'novel',
    category: ['romance', 'society'],
    title: 'BMI',
    author: {
      name: 'Wilie Axford',
      awards: ['Bernier-Windler', 'Zemlak-Kerluke', 'Ortiz-Botsford'],
      representatives: [
        {
          name: 'Product Marketing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    },
    translator: {
      name: "Brennan D'Alesco",
      nationality: 'North Korea',
      career: 'Frami, Rau and Kuhlman',
      representatives: [
        {
          name: 'World War II',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'VXI',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction:
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    },
    publisher: 'Heathcote-Dibbert',
    starRate: { rate: 3.3, rateNum: 76, rateBuyerNum: 29 },
    rentalPrice: 1406,
    rentalSalePercent: 26,
    buyPrice: 36553,
    buySalePercent: 35,
    count: 16,
    freeCount: 6,
    isFinished: true,
    canRent: false,
    waitFree: true,
    xRated: false,
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    index:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    lastlyRead: '2021-06-15',
  },
  {
    id: 30,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
    type: 'ebook',
    category: ['thriller'],
    title: 'Knitwear',
    author: {
      name: 'Serge Simister',
      awards: ['Kiehn-Bashirian'],
      representatives: [
        {
          name: 'Mobile Games',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    },
    translator: {
      name: 'Josh Knowlson',
      nationality: 'North Korea',
      career: 'Kassulke, Pagac and Lynch',
      representatives: [
        {
          name: 'EOI',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Urban Redevelopment',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        { name: 'PCI Standards', thumbnail: '' },
        {
          name: 'DMS-100',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    },
    publisher: 'Schumm and Sons',
    starRate: { rate: 3.9, rateNum: 52, rateBuyerNum: 5 },
    rentalPrice: 372,
    rentalSalePercent: 38,
    buyPrice: 23330,
    buySalePercent: 0,
    count: 24,
    freeCount: 7,
    isFinished: true,
    canRent: true,
    waitFree: true,
    xRated: false,
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    index: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    lastlyRead: '2021-03-13',
  },
  {
    id: 31,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
    type: 'ebook',
    category: ['society'],
    title: 'XML Programming',
    author: {
      name: 'Olav Boston',
      awards: ['Herzog-Heller', "O'Reilly and Sons", 'Bahringer and Sons'],
      representatives: [
        {
          name: 'Time-efficient',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'NSE',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'NRSWA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'European Markets',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    },
    translator: {
      name: 'Joanie Dossett',
      nationality: 'North Korea',
      career: 'Keeling, Yundt and Kassulke',
      representatives: [
        {
          name: 'OSHA Certified',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Drums',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        { name: 'Managerial Finance', thumbnail: '' },
      ],
      introduction:
        'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    },
    publisher: 'Schuster-Smith',
    starRate: { rate: 2.9, rateNum: 67, rateBuyerNum: 16 },
    rentalPrice: 925,
    rentalSalePercent: 26,
    buyPrice: 21310,
    buySalePercent: 21,
    count: 16,
    freeCount: 6,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    index:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    lastlyRead: '2021-07-13',
  },
  {
    id: 32,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
    type: 'webNovel',
    category: ['romance'],
    title: 'Retirement Planning',
    author: {
      name: 'Gunilla Treuge',
      awards: ['Zulauf, Beier and Brown'],
      representatives: [
        {
          name: 'CBORD',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
      ],
      introduction:
        'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    },
    translator: {
      name: 'Zacharie Beaudry',
      nationality: 'North Korea',
      career: "Brekke-O'Kon",
      representatives: [
        {
          name: 'Failure Analysis',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'PTS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Manual Therapy',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'RSA SecurID',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'JWICS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    },
    publisher: 'Schinner and Sons',
    starRate: { rate: 1.0, rateNum: 72, rateBuyerNum: 9 },
    rentalPrice: 376,
    rentalSalePercent: 19,
    buyPrice: 37137,
    buySalePercent: 5,
    count: 10,
    freeCount: 4,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: false,
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    index:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    lastlyRead: '2021-08-24',
  },
  {
    id: 33,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
    type: 'webNovel',
    category: ['society'],
    title: 'Windows Azure',
    author: {
      name: 'Camile Machans',
      awards: ['Sauer, Lemke and Quitzon'],
      representatives: [
        {
          name: 'Soft Skills',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'CCDP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Nginx',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'ASIC',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Voice Over',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    },
    translator: {
      name: 'Maye Gellan',
      nationality: 'North Korea',
      career: 'Koch LLC',
      representatives: [
        {
          name: 'LSAMS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    },
    publisher: 'Yost, Hilpert and Schamberger',
    starRate: { rate: 0.8, rateNum: 59, rateBuyerNum: 22 },
    rentalPrice: 751,
    rentalSalePercent: 39,
    buyPrice: 47846,
    buySalePercent: 31,
    count: 17,
    freeCount: 3,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    index:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    lastlyRead: '2021-10-07',
  },
  {
    id: 34,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
    type: 'ebook',
    category: ['detective', 'sf'],
    title: 'Underscore.js',
    author: {
      name: 'Bobette Symcoxe',
      awards: ['Kunze LLC'],
      representatives: [],
      introduction:
        'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    },
    translator: {
      name: 'Tomi Petranek',
      nationality: 'North Korea',
      career: "O'Connell Inc",
      representatives: [],
      introduction:
        'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    },
    publisher: 'Conroy LLC',
    starRate: { rate: 1.3, rateNum: 34, rateBuyerNum: 4 },
    rentalPrice: 1044,
    rentalSalePercent: 6,
    buyPrice: 43025,
    buySalePercent: 48,
    count: 2,
    freeCount: 5,
    isFinished: true,
    canRent: false,
    waitFree: true,
    xRated: true,
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    index:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    lastlyRead: '2020-12-16',
  },
  {
    id: 35,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
    type: 'webNovel',
    category: ['detective'],
    title: 'Feature Films',
    author: {
      name: 'Dredi Theobald',
      awards: ['Kerluke-Renner', 'Schiller, Lueilwitz and Beier'],
      representatives: [
        {
          name: 'Change Orders',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Budgets',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction:
        'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    },
    translator: {
      name: 'Amandi Cottrell',
      nationality: 'North Korea',
      career: 'Block and Sons',
      representatives: [],
      introduction:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
    publisher: 'Kutch Group',
    starRate: { rate: 1.2, rateNum: 48, rateBuyerNum: 27 },
    rentalPrice: 1242,
    rentalSalePercent: 24,
    buyPrice: 28158,
    buySalePercent: 9,
    count: 8,
    freeCount: 7,
    isFinished: true,
    canRent: true,
    waitFree: true,
    xRated: true,
    description: 'In hac habitasse platea dictumst.',
    index: 'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    lastlyRead: '2021-05-09',
  },
  {
    id: 36,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
    type: 'ebook',
    category: ['detective', 'history'],
    title: 'Rugby',
    author: {
      name: 'Dougy Skamal',
      awards: ['Rice-Bernier', 'Effertz, Kassulke and Lesch'],
      representatives: [
        {
          name: 'FTP software',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Play by Play',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Construction',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Data Integration',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Aerial Cinematography',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'DNA fingerprinting',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction:
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    },
    translator: {
      name: 'Zachery Chittey',
      nationality: 'North Korea',
      career: 'Borer-Grady',
      representatives: [
        {
          name: 'RQM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'RV',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction:
        'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    },
    publisher: 'Hammes Inc',
    starRate: { rate: 4.5, rateNum: 57, rateBuyerNum: 11 },
    rentalPrice: 148,
    rentalSalePercent: 10,
    buyPrice: 7663,
    buySalePercent: 30,
    count: 18,
    freeCount: 4,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: true,
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    index:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    lastlyRead: '2021-06-14',
  },
  {
    id: 37,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
    type: 'novel',
    category: ['society', 'detective'],
    title: 'Zenoss',
    author: {
      name: 'Rona Victoria',
      awards: ['Connelly Group', 'Schiller, Ryan and Wisozk'],
      representatives: [
        {
          name: 'Star-CCM+',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction:
        'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    },
    translator: {
      name: 'Kearney Grafom',
      nationality: 'North Korea',
      career: 'Wunsch Group',
      representatives: [
        {
          name: 'CMC Regulatory Affairs',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction:
        'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    },
    publisher: 'Ratke Group',
    starRate: { rate: 2.8, rateNum: 63, rateBuyerNum: 5 },
    rentalPrice: 705,
    rentalSalePercent: 45,
    buyPrice: 21161,
    buySalePercent: 41,
    count: 1,
    freeCount: 10,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    index:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    lastlyRead: '2021-10-25',
  },
  {
    id: 38,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
    type: 'webNovel',
    category: ['history', 'fantasy'],
    title: 'ISO 9000',
    author: {
      name: 'Mahmoud Garnsey',
      awards: ['Schumm and Sons', "O'Hara-McCullough", 'Schowalter Group'],
      representatives: [],
      introduction:
        'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    },
    translator: {
      name: 'Justinn Hedan',
      nationality: 'North Korea',
      career: 'Kihn, Feest and Stracke',
      representatives: [
        {
          name: 'TMX',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'RDO',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Office Administration',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    },
    publisher: 'Carroll-Moore',
    starRate: { rate: 1.6, rateNum: 61, rateBuyerNum: 15 },
    rentalPrice: 162,
    rentalSalePercent: 50,
    buyPrice: 39983,
    buySalePercent: 45,
    count: 1,
    freeCount: 2,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    index:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    lastlyRead: '2020-12-04',
  },
  {
    id: 39,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
    type: 'webNovel',
    category: ['history', 'romance'],
    title: 'Pinterest',
    author: {
      name: 'Stesha Ovitz',
      awards: ['Ebert, Miller and Pacocha', 'Mante-Raynor'],
      representatives: [
        {
          name: 'Socket.io',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'PFEMA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'fMRI',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'CPT',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Sweaters',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    },
    translator: {
      name: 'Candis Ruegg',
      nationality: 'North Korea',
      career: 'Kautzer Group',
      representatives: [
        {
          name: 'Zebrafish',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        { name: 'Aesthetic Surgery', thumbnail: '' },
        {
          name: 'Business Overhead Expense',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        { name: 'Irrigation Management', thumbnail: '' },
        {
          name: 'NDC',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    },
    publisher: 'Boyer, Oberbrunner and Hermiston',
    starRate: { rate: 4.6, rateNum: 53, rateBuyerNum: 30 },
    rentalPrice: 1230,
    rentalSalePercent: 5,
    buyPrice: 40508,
    buySalePercent: 26,
    count: 19,
    freeCount: 2,
    isFinished: true,
    canRent: true,
    waitFree: true,
    xRated: false,
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    index:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    lastlyRead: '2021-03-15',
  },
  {
    id: 40,
    thumbnail: '',
    type: 'ebook',
    category: ['thriller', 'sf'],
    title: 'Oilfield',
    author: {
      name: 'Beitris Hakey',
      awards: ['Marvin LLC', 'Swaniawski Group', 'Brown LLC'],
      representatives: [],
      introduction:
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    },
    translator: {
      name: 'Shay Helsdon',
      nationality: 'North Korea',
      career: 'Kovacek, Crist and Kris',
      representatives: [],
      introduction:
        'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    },
    publisher: 'Smitham-Grimes',
    starRate: { rate: 1.1, rateNum: 72, rateBuyerNum: 22 },
    rentalPrice: 935,
    rentalSalePercent: 31,
    buyPrice: 39560,
    buySalePercent: 25,
    count: 21,
    freeCount: 3,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    index:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    lastlyRead: '2021-10-17',
  },
  {
    id: 41,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
    type: 'novel',
    category: ['romance'],
    title: 'Pyrography',
    author: {
      name: 'Dasie Corbitt',
      awards: ['Hand LLC'],
      representatives: [
        {
          name: 'JVM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'OGSYS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'VMware View',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'FPSO',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction:
        'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    translator: {
      name: 'Towny Denzilow',
      nationality: 'North Korea',
      career: 'Hegmann-Lebsack',
      representatives: [
        {
          name: 'IEX',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'Software Installation',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    },
    publisher: 'Ritchie, Corkery and Kautzer',
    starRate: { rate: 4.8, rateNum: 78, rateBuyerNum: 29 },
    rentalPrice: 272,
    rentalSalePercent: 23,
    buyPrice: 19493,
    buySalePercent: 1,
    count: 25,
    freeCount: 9,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    index:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    lastlyRead: '2021-08-25',
  },
  {
    id: 42,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
    type: 'novel',
    category: ['fantasy'],
    title: 'QSE',
    author: {
      name: 'Hermina McCormack',
      awards: ['Brown LLC', 'Dach LLC', 'Shanahan-Gaylord'],
      representatives: [
        {
          name: 'LCMS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'VOD',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'TDM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction:
        'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    },
    translator: {
      name: 'Augustina Ciccetti',
      nationality: 'North Korea',
      career: 'Runolfsson, Feil and Marks',
      representatives: [
        {
          name: 'EOR',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'SketchUp',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Functional Testing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'RSView',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Jeep',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction:
        'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    },
    publisher: 'Daugherty-Fahey',
    starRate: { rate: 1.8, rateNum: 55, rateBuyerNum: 1 },
    rentalPrice: 540,
    rentalSalePercent: 25,
    buyPrice: 30064,
    buySalePercent: 36,
    count: 15,
    freeCount: 10,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    index:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    lastlyRead: '2021-07-19',
  },
  {
    id: 43,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
    type: 'webNovel',
    category: ['detective'],
    title: 'Alternative Energy',
    author: {
      name: 'Bree Siene',
      awards: ["O'Conner LLC", 'Parisian-Goyette', 'Brakus, Rice and Runte'],
      representatives: [
        {
          name: 'MS Reporting Services',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'nVision',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Google Analytics',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction:
        'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    },
    translator: {
      name: 'Lexie Grogan',
      nationality: 'North Korea',
      career: 'Heathcote Group',
      representatives: [
        {
          name: 'Jigs',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'SRED',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Design Thinking',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    },
    publisher: 'Mante-Ortiz',
    starRate: { rate: 2.2, rateNum: 43, rateBuyerNum: 1 },
    rentalPrice: 114,
    rentalSalePercent: 15,
    buyPrice: 37008,
    buySalePercent: 41,
    count: 8,
    freeCount: 6,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: false,
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    index:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    lastlyRead: '2021-04-01',
  },
  {
    id: 44,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
    type: 'novel',
    category: ['sf'],
    title: 'SPC',
    author: {
      name: 'Liv Vigietti',
      awards: ["Fay-O'Reilly"],
      representatives: [
        {
          name: 'Pharmaceutical Sales',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Oil &amp; Gas Accounting',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction: 'Praesent id massa id nisl venenatis lacinia.',
    },
    translator: {
      name: 'Gregorio Coldham',
      nationality: 'North Korea',
      career: 'Windler-Braun',
      representatives: [
        {
          name: 'AC/DC',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Joint Ventures',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        { name: 'RF', thumbnail: '' },
      ],
      introduction:
        'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    },
    publisher: 'Grimes Group',
    starRate: { rate: 3.9, rateNum: 65, rateBuyerNum: 1 },
    rentalPrice: 1217,
    rentalSalePercent: 2,
    buyPrice: 22090,
    buySalePercent: 5,
    count: 10,
    freeCount: 5,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    index:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    lastlyRead: '2021-10-26',
  },
  {
    id: 45,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
    type: 'webNovel',
    category: ['society'],
    title: 'Slogans',
    author: {
      name: 'Freemon Martinat',
      awards: ['Moen-Feest', 'Spinka Group'],
      representatives: [
        {
          name: 'KDE',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Academic Writing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'WYSIWYG Layout Tools',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    },
    translator: {
      name: 'Ettore Virr',
      nationality: 'North Korea',
      career: 'Hudson, Rodriguez and Bernhard',
      representatives: [
        {
          name: 'Jitter',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Nutrition',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction:
        'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    },
    publisher: 'Marks Group',
    starRate: { rate: 4.0, rateNum: 61, rateBuyerNum: 5 },
    rentalPrice: 774,
    rentalSalePercent: 12,
    buyPrice: 52855,
    buySalePercent: 49,
    count: 3,
    freeCount: 0,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: false,
    description: 'Nulla facilisi.',
    index:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    lastlyRead: '2021-04-18',
  },
  {
    id: 46,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
    type: 'ebook',
    category: ['society'],
    title: 'Animal Nutrition',
    author: {
      name: 'Vinita Snoxell',
      awards: ['Hegmann-Zemlak', 'Hintz, Nader and Hansen'],
      representatives: [
        {
          name: 'Zendesk',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        { name: 'Inventory Control', thumbnail: '' },
        {
          name: 'Editing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'TMJ Treatment',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'European Integration',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
      ],
      introduction:
        'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    },
    translator: {
      name: 'Adiana Gislebert',
      nationality: 'North Korea',
      career: "Lueilwitz, Williamson and O'Conner",
      representatives: [
        {
          name: 'Hodes IQ',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Lifestyle',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Teeth Whitening',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
      ],
      introduction: 'Donec posuere metus vitae ipsum. Aliquam non mauris.',
    },
    publisher: 'Carroll LLC',
    starRate: { rate: 4.0, rateNum: 43, rateBuyerNum: 24 },
    rentalPrice: 104,
    rentalSalePercent: 11,
    buyPrice: 55604,
    buySalePercent: 19,
    count: 10,
    freeCount: 7,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    index:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    lastlyRead: '2021-01-19',
  },
  {
    id: 47,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
    type: 'ebook',
    category: ['humanities', 'sf'],
    title: 'DNA ligation',
    author: {
      name: 'Tymothy Henfre',
      awards: ['Gleason Group'],
      representatives: [
        {
          name: 'CCIE R&amp;S',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'DMEDI',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Guest Lecturing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Translation',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        { name: 'Managed Services', thumbnail: '' },
      ],
      introduction:
        'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    },
    translator: {
      name: 'Darcy Cheley',
      nationality: 'North Korea',
      career: 'Goldner Inc',
      representatives: [
        {
          name: 'Behavior Based Safety',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'American Politics',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    },
    publisher: "O'Hara LLC",
    starRate: { rate: 4.4, rateNum: 74, rateBuyerNum: 23 },
    rentalPrice: 1162,
    rentalSalePercent: 15,
    buyPrice: 16451,
    buySalePercent: 29,
    count: 20,
    freeCount: 6,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: true,
    description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    index:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    lastlyRead: '2021-10-12',
  },
  {
    id: 48,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
    type: 'ebook',
    category: ['society', 'sf'],
    title: 'Fax',
    author: {
      name: 'Elmira Boulde',
      awards: ['Ward, Koepp and Hirthe'],
      representatives: [],
      introduction:
        'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    },
    translator: {
      name: 'Dukie Crummie',
      nationality: 'North Korea',
      career: 'Kilback-Lynch',
      representatives: [
        { name: 'HttpUnit', thumbnail: '' },
        {
          name: 'JDE Enterprise One',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'DTS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction: 'Donec posuere metus vitae ipsum. Aliquam non mauris.',
    },
    publisher: 'Carter, Aufderhar and Lindgren',
    starRate: { rate: 1.4, rateNum: 61, rateBuyerNum: 7 },
    rentalPrice: 175,
    rentalSalePercent: 22,
    buyPrice: 43770,
    buySalePercent: 33,
    count: 6,
    freeCount: 3,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: true,
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    index: 'Suspendisse ornare consequat lectus.',
    lastlyRead: '2021-05-05',
  },
  {
    id: 49,
    thumbnail: '',
    type: 'novel',
    category: ['fantasy', 'society'],
    title: 'Human Resources',
    author: {
      name: 'Marietta Doughton',
      awards: ["O'Reilly, Williamson and Schmeler"],
      representatives: [],
      introduction: 'In eleifend quam a odio.',
    },
    translator: {
      name: 'Nari Meake',
      nationality: 'North Korea',
      career: 'Stehr, Wunsch and McLaughlin',
      representatives: [{ name: 'Business Transformation', thumbnail: '' }],
      introduction:
        'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    },
    publisher: 'Murray Inc',
    starRate: { rate: 0.2, rateNum: 80, rateBuyerNum: 22 },
    rentalPrice: 1358,
    rentalSalePercent: 16,
    buyPrice: 38995,
    buySalePercent: 43,
    count: 4,
    freeCount: 2,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    index:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    lastlyRead: '2020-11-18',
  },
  {
    id: 50,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
    type: 'ebook',
    category: ['detective'],
    title: 'Journalism',
    author: {
      name: 'Rici Bruyns',
      awards: ['Streich-Kris', 'Hirthe-Wolff', 'West, Hartmann and Reynolds'],
      representatives: [
        {
          name: 'SFDC',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Term Life Insurance',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Active-HDL',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Offshore Oil &amp; Gas',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Outplacement',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    },
    translator: {
      name: 'Emory Althorpe',
      nationality: 'North Korea',
      career: 'Ankunding, Braun and Kuhn',
      representatives: [
        {
          name: 'PCS7',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    },
    publisher: 'Ziemann, Bauch and Greenfelder',
    starRate: { rate: 4.1, rateNum: 36, rateBuyerNum: 7 },
    rentalPrice: 373,
    rentalSalePercent: 49,
    buyPrice: 15515,
    buySalePercent: 49,
    count: 13,
    freeCount: 9,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: true,
    description: 'Aenean lectus.',
    index:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    lastlyRead: '2020-12-17',
  },
  {
    id: 51,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
    type: 'ebook',
    category: ['sf', 'humanities'],
    title: 'Vi',
    author: {
      name: 'Mace Jeal',
      awards: ['Beier LLC'],
      representatives: [
        {
          name: 'UL',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'BST',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
      ],
      introduction:
        'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    },
    translator: {
      name: 'Nertie Ebbers',
      nationality: 'North Korea',
      career: 'Erdman, Lesch and Oberbrunner',
      representatives: [
        {
          name: 'QLab',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction:
        'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    },
    publisher: 'Fisher, Collier and Moore',
    starRate: { rate: 4.7, rateNum: 80, rateBuyerNum: 5 },
    rentalPrice: 770,
    rentalSalePercent: 17,
    buyPrice: 52974,
    buySalePercent: 43,
    count: 20,
    freeCount: 9,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    index:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    lastlyRead: '2021-03-13',
  },
  {
    id: 52,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
    type: 'webNovel',
    category: ['fantasy', 'history'],
    title: 'ITIL',
    author: {
      name: 'Phaedra Kits',
      awards: ['Stamm-Senger'],
      representatives: [
        {
          name: 'EEO Reporting',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        { name: 'Supporting Others', thumbnail: '' },
        {
          name: 'Global Business Development',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
      ],
      introduction:
        'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    },
    translator: {
      name: 'Torrie Oehme',
      nationality: 'North Korea',
      career: 'Collins LLC',
      representatives: [
        {
          name: 'Oxygen Therapy',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'HDSL',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'OC RDC',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Guitar Playing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    },
    publisher: 'Schroeder-Prohaska',
    starRate: { rate: 0.7, rateNum: 51, rateBuyerNum: 27 },
    rentalPrice: 720,
    rentalSalePercent: 24,
    buyPrice: 58034,
    buySalePercent: 3,
    count: 8,
    freeCount: 7,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: false,
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    index:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    lastlyRead: '2021-10-04',
  },
  {
    id: 53,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
    type: 'webNovel',
    category: ['thriller'],
    title: 'VSS',
    author: {
      name: 'Kristien Cokly',
      awards: ['Brekke LLC', 'Buckridge-Murazik', 'Veum-Sporer'],
      representatives: [
        {
          name: 'Spot TV',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'VTS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Video Editing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Olfaction',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Unreal Engine 3',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Kontakt',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction:
        'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    },
    translator: {
      name: 'Hart Haverty',
      nationality: 'North Korea',
      career: 'Ward LLC',
      representatives: [
        {
          name: 'ProSystem fx Tax',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'Shipbuilding',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction:
        'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    },
    publisher: 'Graham, Welch and Okuneva',
    starRate: { rate: 4.4, rateNum: 55, rateBuyerNum: 5 },
    rentalPrice: 1119,
    rentalSalePercent: 10,
    buyPrice: 20012,
    buySalePercent: 47,
    count: 4,
    freeCount: 9,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    index:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    lastlyRead: '2021-07-04',
  },
  {
    id: 54,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
    type: 'novel',
    category: ['fantasy'],
    title: 'MQX',
    author: {
      name: 'Eli Sephton',
      awards: ['Yost, Kemmer and McDermott', 'Padberg-Bednar'],
      representatives: [],
      introduction:
        'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    },
    translator: {
      name: 'Nicol Shatford',
      nationality: 'North Korea',
      career: 'Veum, Tremblay and Maggio',
      representatives: [
        {
          name: 'Sponsorship',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'Screening Resumes',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Data Collection',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    },
    publisher: 'Cummings, Bauch and Miller',
    starRate: { rate: 2.9, rateNum: 42, rateBuyerNum: 5 },
    rentalPrice: 137,
    rentalSalePercent: 44,
    buyPrice: 32925,
    buySalePercent: 42,
    count: 22,
    freeCount: 2,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    index:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    lastlyRead: '2021-10-11',
  },
  {
    id: 55,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
    type: 'ebook',
    category: ['romance', 'humanities'],
    title: 'Joint Military Operations',
    author: {
      name: 'Abbot Mowson',
      awards: ['Price Inc', 'Reynolds and Sons'],
      representatives: [
        {
          name: 'FMOD',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'HSSE',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Qik',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'RMA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'BSI Tax Factory',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction:
        'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    },
    translator: {
      name: 'Allard Dowle',
      nationality: 'North Korea',
      career: 'Bosco, Blick and Gibson',
      representatives: [
        {
          name: 'DDIC',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'People Skills',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Syslog-ng',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'Blackberry OS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction:
        'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    },
    publisher: 'Shanahan, Dooley and Bins',
    starRate: { rate: 0.6, rateNum: 51, rateBuyerNum: 3 },
    rentalPrice: 307,
    rentalSalePercent: 26,
    buyPrice: 26495,
    buySalePercent: 41,
    count: 2,
    freeCount: 4,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    index: 'Integer ac leo.',
    lastlyRead: '2021-04-22',
  },
  {
    id: 56,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
    type: 'webNovel',
    category: ['detective', 'history'],
    title: 'Guest Service Management',
    author: {
      name: 'Vernor Wayvill',
      awards: [
        'Satterfield-Keebler',
        'Cruickshank, Franecki and Lueilwitz',
        'Spencer Group',
      ],
      representatives: [],
      introduction:
        'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    },
    translator: {
      name: 'Catina Mogford',
      nationality: 'North Korea',
      career: "O'Keefe Inc",
      representatives: [
        {
          name: 'LDOM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Emerging Markets',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
      ],
      introduction:
        'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    },
    publisher: 'Shields, Roberts and Rath',
    starRate: { rate: 0.7, rateNum: 32, rateBuyerNum: 10 },
    rentalPrice: 1037,
    rentalSalePercent: 49,
    buyPrice: 45858,
    buySalePercent: 5,
    count: 3,
    freeCount: 2,
    isFinished: true,
    canRent: false,
    waitFree: true,
    xRated: false,
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    index: 'Integer ac neque.',
    lastlyRead: '2021-05-03',
  },
  {
    id: 57,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
    type: 'webNovel',
    category: ['sf', 'romance'],
    title: 'Guided Reading',
    author: {
      name: 'Vanni Gainor',
      awards: ['Shanahan-Hintz', 'Kling LLC'],
      representatives: [
        {
          name: 'TSP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Olefins',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'PMCS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Fermentation',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Claims Management',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction:
        'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    },
    translator: {
      name: 'Arlee De Avenell',
      nationality: 'North Korea',
      career: 'Schuster, Hackett and Quitzon',
      representatives: [],
      introduction:
        'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    },
    publisher: 'Hessel-Wyman',
    starRate: { rate: 2.7, rateNum: 65, rateBuyerNum: 30 },
    rentalPrice: 888,
    rentalSalePercent: 24,
    buyPrice: 18036,
    buySalePercent: 43,
    count: 7,
    freeCount: 0,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: false,
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    index:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    lastlyRead: '2021-04-12',
  },
  {
    id: 58,
    thumbnail: '',
    type: 'ebook',
    category: ['society'],
    title: 'iOS Development',
    author: {
      name: 'Bobbette Huyche',
      awards: [
        'Lynch, Lebsack and Deckow',
        'Goyette and Sons',
        'Mills and Sons',
      ],
      representatives: [
        {
          name: 'Sun Certified Java Programmer',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Luxury Lifestyle',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Pitching Ideas',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction: 'In hac habitasse platea dictumst.',
    },
    translator: {
      name: 'Kissee Clarey',
      nationality: 'North Korea',
      career: 'Williamson Group',
      representatives: [],
      introduction:
        'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    },
    publisher: 'Schowalter-Gleason',
    starRate: { rate: 2.6, rateNum: 35, rateBuyerNum: 12 },
    rentalPrice: 1157,
    rentalSalePercent: 8,
    buyPrice: 49441,
    buySalePercent: 44,
    count: 2,
    freeCount: 7,
    isFinished: true,
    canRent: true,
    waitFree: true,
    xRated: false,
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    index:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    lastlyRead: '2021-05-14',
  },
  {
    id: 59,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
    type: 'novel',
    category: ['society', 'history'],
    title: 'Home Owners',
    author: {
      name: 'Florella Barbrick',
      awards: ['Botsford LLC'],
      representatives: [
        {
          name: 'MyEclipse',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
      ],
      introduction:
        'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    },
    translator: {
      name: 'Northrop Selvester',
      nationality: 'North Korea',
      career: 'Franecki-Abernathy',
      representatives: [
        {
          name: 'OSHA 10-Hour',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'GDAL',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'MMSC',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    },
    publisher: 'Zboncak, Kessler and Schroeder',
    starRate: { rate: 4.2, rateNum: 32, rateBuyerNum: 12 },
    rentalPrice: 243,
    rentalSalePercent: 31,
    buyPrice: 3919,
    buySalePercent: 13,
    count: 17,
    freeCount: 5,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: true,
    description: 'In congue. Etiam justo.',
    index:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    lastlyRead: '2021-03-25',
  },
  {
    id: 60,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
    type: 'ebook',
    category: ['sf'],
    title: 'BCLS',
    author: {
      name: 'Averill Frantsev',
      awards: ['Bode-Jaskolski', 'Hickle-Kshlerin'],
      representatives: [
        {
          name: 'wxWidgets',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Background Checks',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Academic Tutoring',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Hospitality Management',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'HSE Management Systems',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Kontakt',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    },
    translator: {
      name: 'Brina Arnoll',
      nationality: 'North Korea',
      career: 'Wuckert-Emard',
      representatives: [],
      introduction:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    },
    publisher: 'Turcotte-Bode',
    starRate: { rate: 4.8, rateNum: 38, rateBuyerNum: 11 },
    rentalPrice: 943,
    rentalSalePercent: 21,
    buyPrice: 38101,
    buySalePercent: 28,
    count: 8,
    freeCount: 3,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    index:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    lastlyRead: '2021-08-07',
  },
  {
    id: 61,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
    type: 'webNovel',
    category: ['detective'],
    title: 'PFEP',
    author: {
      name: 'Riccardo Skim',
      awards: ['Maggio and Sons', 'Toy, Nicolas and Wintheiser'],
      representatives: [
        { name: 'NHL', thumbnail: '' },
        {
          name: 'ICP-OES',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'MBAL',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Job Scheduling',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Language Teaching',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'JRun',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction:
        'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    },
    translator: {
      name: 'Tore Czajkowski',
      nationality: 'North Korea',
      career: 'Wilkinson, Hahn and Marks',
      representatives: [
        {
          name: 'English',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    },
    publisher: 'Romaguera-Bailey',
    starRate: { rate: 2.3, rateNum: 63, rateBuyerNum: 3 },
    rentalPrice: 643,
    rentalSalePercent: 29,
    buyPrice: 22104,
    buySalePercent: 15,
    count: 2,
    freeCount: 2,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: false,
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    index:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    lastlyRead: '2021-05-10',
  },
  {
    id: 62,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
    type: 'ebook',
    category: ['sf', 'history'],
    title: 'MTTR',
    author: {
      name: 'Sully Dennerley',
      awards: ['Kuhlman, Davis and Hettinger'],
      representatives: [
        {
          name: 'Film',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'RFI',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'JTA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
      ],
      introduction: 'Aenean lectus. Pellentesque eget nunc.',
    },
    translator: {
      name: 'Alanson Holgan',
      nationality: 'North Korea',
      career: 'Hettinger, Parisian and Hegmann',
      representatives: [
        {
          name: 'PDF Creator',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'VTP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'ISM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'FMLA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Functional Verification',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
      ],
      introduction: 'Nunc purus.',
    },
    publisher: 'Rippin, Gusikowski and Jones',
    starRate: { rate: 1.3, rateNum: 71, rateBuyerNum: 22 },
    rentalPrice: 1091,
    rentalSalePercent: 33,
    buyPrice: 30846,
    buySalePercent: 43,
    count: 29,
    freeCount: 9,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: true,
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    index:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    lastlyRead: '2021-06-04',
  },
  {
    id: 63,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
    type: 'ebook',
    category: ['romance'],
    title: 'FHLMC',
    author: {
      name: 'Jess Antrack',
      awards: ['Johns, Johnson and McGlynn'],
      representatives: [
        {
          name: 'MD5',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Phase II',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'SQL Tuning',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Non-profit Board Development',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'FMEA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction:
        'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    },
    translator: {
      name: 'Conni Loges',
      nationality: 'North Korea',
      career: 'Sauer, Homenick and Schulist',
      representatives: [
        {
          name: 'CD packaging',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'DMMs',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Lynx',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        { name: 'Store Management', thumbnail: '' },
        {
          name: 'Offshore Oil',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    },
    publisher: 'Upton Group',
    starRate: { rate: 2.4, rateNum: 75, rateBuyerNum: 5 },
    rentalPrice: 119,
    rentalSalePercent: 42,
    buyPrice: 42266,
    buySalePercent: 11,
    count: 19,
    freeCount: 10,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: false,
    description: 'Maecenas pulvinar lobortis est.',
    index:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
    lastlyRead: '2021-10-26',
  },
  {
    id: 64,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
    type: 'webNovel',
    category: ['romance', 'thriller'],
    title: 'DMR',
    author: {
      name: 'Cindee Keoghane',
      awards: [
        'Wolf LLC',
        'Huels, Okuneva and Hilll',
        "Kuhn, Farrell and D'Amore",
      ],
      representatives: [
        {
          name: 'RFI',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction: 'Morbi a ipsum.',
    },
    translator: {
      name: 'Bili Kembrey',
      nationality: 'North Korea',
      career: 'Donnelly-Reilly',
      representatives: [
        {
          name: 'Agency MBS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'MKS Integrity',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    },
    publisher: 'Upton, Feil and Douglas',
    starRate: { rate: 4.8, rateNum: 54, rateBuyerNum: 13 },
    rentalPrice: 817,
    rentalSalePercent: 8,
    buyPrice: 44123,
    buySalePercent: 44,
    count: 27,
    freeCount: 2,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: false,
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    index:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    lastlyRead: '2021-10-21',
  },
  {
    id: 65,
    thumbnail: '',
    type: 'ebook',
    category: ['sf', 'romance'],
    title: 'HTRI Software',
    author: {
      name: 'Sergeant Bletso',
      awards: ['Hansen-Schiller', 'Cronin LLC', 'Bode, Reilly and Spencer'],
      representatives: [
        { name: 'MSC Patran', thumbnail: '' },
        {
          name: 'E-commerce',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'DNA microarray',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'Child Development',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Functional Training',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        { name: 'Biology', thumbnail: '' },
      ],
      introduction:
        'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    },
    translator: {
      name: 'Dov Balchen',
      nationality: 'North Korea',
      career: 'Herman-Koch',
      representatives: [
        {
          name: 'Hands-on Training',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'Servers',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'PBIS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction: 'Phasellus sit amet erat. Nulla tempus.',
    },
    publisher: 'Conroy Inc',
    starRate: { rate: 4.9, rateNum: 54, rateBuyerNum: 1 },
    rentalPrice: 1475,
    rentalSalePercent: 48,
    buyPrice: 31788,
    buySalePercent: 18,
    count: 26,
    freeCount: 1,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: false,
    description: 'Nunc purus. Phasellus in felis.',
    index:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    lastlyRead: '2021-09-12',
  },
  {
    id: 66,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
    type: 'webNovel',
    category: ['romance', 'detective'],
    title: 'Unreal Editor',
    author: {
      name: 'Erika Curneen',
      awards: [
        'Bruen, Lindgren and Turner',
        'Spencer-Runolfsson',
        'Adams-Blanda',
      ],
      representatives: [
        {
          name: 'Omnis',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Knitwear',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'OLAP Cube Studio',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Awareness Raising',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'New Media',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction:
        'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    },
    translator: {
      name: 'Stearne Morfield',
      nationality: 'North Korea',
      career: 'Marquardt, Cummerata and Ernser',
      representatives: [
        {
          name: 'NSLDS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    },
    publisher: 'Ryan, Bernier and Kemmer',
    starRate: { rate: 3.0, rateNum: 72, rateBuyerNum: 28 },
    rentalPrice: 1147,
    rentalSalePercent: 45,
    buyPrice: 27049,
    buySalePercent: 16,
    count: 26,
    freeCount: 5,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: false,
    description: 'Maecenas rhoncus aliquam lacus.',
    index:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    lastlyRead: '2021-06-20',
  },
  {
    id: 67,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
    type: 'webNovel',
    category: ['humanities'],
    title: 'BPT',
    author: {
      name: 'Federico Rehm',
      awards: ['Mann, Gerlach and Koepp', 'Skiles Group', 'Gerlach LLC'],
      representatives: [
        {
          name: 'RSA SecurID',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        { name: 'HP Procurve Networking', thumbnail: '' },
        {
          name: 'Military Aviation',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Yacht Clubs',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
      ],
      introduction:
        'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    },
    translator: {
      name: 'Decca Joseph',
      nationality: 'North Korea',
      career: 'Herzog, Breitenberg and Parisian',
      representatives: [],
      introduction:
        'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    },
    publisher: 'Collier Inc',
    starRate: { rate: 1.7, rateNum: 70, rateBuyerNum: 4 },
    rentalPrice: 700,
    rentalSalePercent: 20,
    buyPrice: 9030,
    buySalePercent: 40,
    count: 24,
    freeCount: 4,
    isFinished: true,
    canRent: true,
    waitFree: true,
    xRated: true,
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    index:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    lastlyRead: '2021-09-07',
  },
  {
    id: 68,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
    type: 'ebook',
    category: ['society'],
    title: 'KDB+',
    author: {
      name: 'Anni Dearnaley',
      awards: ['Gottlieb, Runte and Batz'],
      representatives: [
        {
          name: 'OKI',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    },
    translator: {
      name: 'Nesta Dugald',
      nationality: 'North Korea',
      career: 'Glover-Hackett',
      representatives: [
        {
          name: 'Sourcing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'New Product Ideas',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Product Life Cycle',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    },
    publisher: 'Larson-Schowalter',
    starRate: { rate: 2.4, rateNum: 34, rateBuyerNum: 5 },
    rentalPrice: 857,
    rentalSalePercent: 31,
    buyPrice: 8967,
    buySalePercent: 25,
    count: 9,
    freeCount: 1,
    isFinished: true,
    canRent: true,
    waitFree: true,
    xRated: false,
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    index:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    lastlyRead: '2020-11-16',
  },
  {
    id: 69,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
    type: 'ebook',
    category: ['fantasy', 'society'],
    title: 'Ion Exchange',
    author: {
      name: 'Cassy Drable',
      awards: ["Brown-O'Conner", 'Willms LLC'],
      representatives: [
        {
          name: 'SMT Kingdom',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'Legal Writing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'QRC',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    },
    translator: {
      name: 'Leslie Chellenham',
      nationality: 'North Korea',
      career: 'Stracke, Kshlerin and Koepp',
      representatives: [
        {
          name: 'Ultrasound',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    },
    publisher: 'Fisher-Rodriguez',
    starRate: { rate: 1.9, rateNum: 50, rateBuyerNum: 18 },
    rentalPrice: 595,
    rentalSalePercent: 0,
    buyPrice: 10064,
    buySalePercent: 33,
    count: 26,
    freeCount: 3,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: true,
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    index: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    lastlyRead: '2021-09-12',
  },
  {
    id: 70,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
    type: 'ebook',
    category: ['humanities'],
    title: 'Turbines',
    author: {
      name: 'Julienne Penelli',
      awards: ['Dare-Kerluke'],
      representatives: [
        {
          name: 'Flight Test',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'HTK',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Automotive',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'UK Law',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction:
        'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    },
    translator: {
      name: 'Wash Chance',
      nationality: 'North Korea',
      career: 'Vandervort LLC',
      representatives: [{ name: 'Ocean', thumbnail: '' }],
      introduction:
        'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    },
    publisher: 'Grimes-Greenholt',
    starRate: { rate: 0.1, rateNum: 35, rateBuyerNum: 0 },
    rentalPrice: 957,
    rentalSalePercent: 43,
    buyPrice: 59699,
    buySalePercent: 2,
    count: 18,
    freeCount: 3,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    index:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    lastlyRead: '2021-10-15',
  },
  {
    id: 71,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
    type: 'webNovel',
    category: ['humanities'],
    title: 'FTP software',
    author: {
      name: 'Roxi Dodge',
      awards: ['Gleason, Monahan and Baumbach'],
      representatives: [
        {
          name: 'Corporate Branding',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Systems Analysis',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'NX Unigraphics',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'European Languages',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction:
        'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    },
    translator: {
      name: 'Bourke Buesden',
      nationality: 'North Korea',
      career: 'Watsica Inc',
      representatives: [
        {
          name: 'Counseling Psychology',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    },
    publisher: 'Dietrich-Monahan',
    starRate: { rate: 0.4, rateNum: 66, rateBuyerNum: 24 },
    rentalPrice: 625,
    rentalSalePercent: 31,
    buyPrice: 19012,
    buySalePercent: 13,
    count: 29,
    freeCount: 5,
    isFinished: true,
    canRent: false,
    waitFree: true,
    xRated: false,
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    index:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    lastlyRead: '2021-09-08',
  },
  {
    id: 72,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
    type: 'webNovel',
    category: ['thriller', 'history'],
    title: 'Economic Development',
    author: {
      name: 'Nolana Hadlington',
      awards: ['Streich and Sons'],
      representatives: [
        {
          name: 'Mystery Shopping',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Architecture',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Phase II Environmental Site Assessments',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
      ],
      introduction:
        'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    },
    translator: {
      name: 'Farleigh Twede',
      nationality: 'North Korea',
      career: 'Batz-Fadel',
      representatives: [
        {
          name: 'UFC',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        { name: 'Inventory Management', thumbnail: '' },
      ],
      introduction:
        'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    },
    publisher: 'Mitchell-Romaguera',
    starRate: { rate: 1.3, rateNum: 67, rateBuyerNum: 2 },
    rentalPrice: 675,
    rentalSalePercent: 14,
    buyPrice: 58023,
    buySalePercent: 16,
    count: 28,
    freeCount: 2,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    index:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    lastlyRead: '2020-11-27',
  },
  {
    id: 73,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
    type: 'novel',
    category: ['romance'],
    title: 'Firewalls',
    author: {
      name: 'Winfred Pesticcio',
      awards: ['Weber-Beer'],
      representatives: [
        {
          name: 'UC4',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'iPhone',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'XStream',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Mathematical Modeling',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
      ],
      introduction:
        'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    },
    translator: {
      name: 'Catlin McGrey',
      nationality: 'North Korea',
      career: 'Boehm-Deckow',
      representatives: [
        {
          name: 'Multi-Unit Management',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'Public Speaking',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Fundraising',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
    publisher: 'Ondricka, Mante and Armstrong',
    starRate: { rate: 3.3, rateNum: 54, rateBuyerNum: 5 },
    rentalPrice: 814,
    rentalSalePercent: 41,
    buyPrice: 9830,
    buySalePercent: 11,
    count: 25,
    freeCount: 1,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: true,
    description: 'In eleifend quam a odio.',
    index:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    lastlyRead: '2021-11-04',
  },
  {
    id: 74,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
    type: 'ebook',
    category: ['sf', 'detective'],
    title: 'Diabetes',
    author: {
      name: 'Ephrayim Biggans',
      awards: [
        'Wilderman-Nienow',
        'Jerde, Stokes and Lemke',
        'Runolfsson and Sons',
      ],
      representatives: [
        {
          name: 'FI-AA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'What-if Analysis',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    },
    translator: {
      name: 'Boyd Brendeke',
      nationality: 'North Korea',
      career: 'Schoen, Corwin and Purdy',
      representatives: [
        {
          name: 'Eyelash &amp; Eyebrow Tinting',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'Epi Info',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'IXIA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'LPS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    },
    publisher: 'Weber-Will',
    starRate: { rate: 4.4, rateNum: 79, rateBuyerNum: 6 },
    rentalPrice: 176,
    rentalSalePercent: 39,
    buyPrice: 34609,
    buySalePercent: 44,
    count: 3,
    freeCount: 6,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: true,
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    index:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    lastlyRead: '2021-07-25',
  },
  {
    id: 75,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
    type: 'ebook',
    category: ['thriller', 'fantasy'],
    title: 'VTAM',
    author: {
      name: 'Lilly Presnail',
      awards: ['Bins-Tremblay', 'Dach-Hand'],
      representatives: [],
      introduction:
        'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    },
    translator: {
      name: 'Norby Fardo',
      nationality: 'North Korea',
      career: 'Bayer, Romaguera and Gleichner',
      representatives: [
        {
          name: 'HSQLDB',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Ukrainian',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'General Surgery',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'SFTP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction:
        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    },
    publisher: 'Dare-Aufderhar',
    starRate: { rate: 2.1, rateNum: 62, rateBuyerNum: 18 },
    rentalPrice: 952,
    rentalSalePercent: 24,
    buyPrice: 15224,
    buySalePercent: 1,
    count: 8,
    freeCount: 7,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: true,
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    index: 'Phasellus in felis.',
    lastlyRead: '2020-12-09',
  },
  {
    id: 76,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
    type: 'ebook',
    category: ['society'],
    title: '3Com NBX',
    author: {
      name: 'Page Extence',
      awards: ['McClure, Koepp and Jast', 'Ondricka, Lesch and McKenzie'],
      representatives: [
        {
          name: 'Computer Graphics',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Blood Typing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Airworthiness',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
      ],
      introduction:
        'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    },
    translator: {
      name: 'Welch Barritt',
      nationality: 'North Korea',
      career: 'McCullough-Yundt',
      representatives: [
        {
          name: 'CFTC',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        { name: 'MKS', thumbnail: '' },
        {
          name: 'IFE',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
      ],
      introduction:
        'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    },
    publisher: 'Parisian and Sons',
    starRate: { rate: 3.6, rateNum: 40, rateBuyerNum: 28 },
    rentalPrice: 1256,
    rentalSalePercent: 14,
    buyPrice: 16467,
    buySalePercent: 20,
    count: 16,
    freeCount: 4,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: false,
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    index:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    lastlyRead: '2021-08-30',
  },
  {
    id: 77,
    thumbnail: '',
    type: 'ebook',
    category: ['fantasy', 'thriller'],
    title: 'Local Government',
    author: {
      name: 'Kory Figliovanni',
      awards: ['Breitenberg-Sanford'],
      representatives: [
        {
          name: 'CTI',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'NSE',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'TCM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Music History',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'LGD',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        { name: 'Talent Acquisition', thumbnail: '' },
      ],
      introduction:
        'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    },
    translator: {
      name: 'Merle Skerrett',
      nationality: 'North Korea',
      career: 'Lesch-Grimes',
      representatives: [
        {
          name: 'Get Along Well with Others',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Utilization Review',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'GPS Devices',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'IEEE standards',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    },
    publisher: 'Kreiger and Sons',
    starRate: { rate: 0.9, rateNum: 36, rateBuyerNum: 26 },
    rentalPrice: 723,
    rentalSalePercent: 37,
    buyPrice: 14666,
    buySalePercent: 19,
    count: 9,
    freeCount: 3,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: true,
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    index:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    lastlyRead: '2020-11-29',
  },
  {
    id: 78,
    thumbnail: '',
    type: 'webNovel',
    category: ['sf', 'society'],
    title: 'Visio',
    author: {
      name: 'Emalee Gaffney',
      awards: ['Hilpert, Sipes and Altenwerth', 'Hartmann-Schmeler'],
      representatives: [
        {
          name: 'Operational Excellence',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'PPPoA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    },
    translator: {
      name: 'Ellene Kocher',
      nationality: 'North Korea',
      career: 'Corwin LLC',
      representatives: [],
      introduction:
        'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    },
    publisher: 'Schmitt, Kub and Wiegand',
    starRate: { rate: 3.1, rateNum: 42, rateBuyerNum: 7 },
    rentalPrice: 417,
    rentalSalePercent: 6,
    buyPrice: 29094,
    buySalePercent: 38,
    count: 26,
    freeCount: 8,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: true,
    description: 'Suspendisse potenti. In eleifend quam a odio.',
    index:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    lastlyRead: '2021-05-30',
  },
  {
    id: 79,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
    type: 'webNovel',
    category: ['society', 'history'],
    title: 'Illustration',
    author: {
      name: 'Mal Simakov',
      awards: [
        'Yost, Bartell and Harvey',
        'Zemlak Inc',
        'Goyette, Steuber and Balistreri',
      ],
      representatives: [
        {
          name: 'Jet Engines',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        { name: 'Fashion Illustration', thumbnail: '' },
        {
          name: 'CAESAR II',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'WiFi',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction: 'Pellentesque at nulla.',
    },
    translator: {
      name: 'Anica MacAlaster',
      nationality: 'North Korea',
      career: 'Bins and Sons',
      representatives: [
        {
          name: 'RPG III',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'Situational Awareness',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'UPS Systems',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'VTS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    },
    publisher: 'Adams LLC',
    starRate: { rate: 2.5, rateNum: 71, rateBuyerNum: 29 },
    rentalPrice: 1051,
    rentalSalePercent: 38,
    buyPrice: 59601,
    buySalePercent: 20,
    count: 5,
    freeCount: 1,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    index:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    lastlyRead: '2021-08-08',
  },
  {
    id: 80,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
    type: 'ebook',
    category: ['history', 'thriller'],
    title: 'Ion Chromatography',
    author: {
      name: 'Boycey Glusby',
      awards: ['Jacobson, Luettgen and Howe'],
      representatives: [
        {
          name: 'AHA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'Behavior Based Safety',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'TMA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction:
        'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    },
    translator: {
      name: 'Mommy Grimshaw',
      nationality: 'North Korea',
      career: 'Armstrong LLC',
      representatives: [],
      introduction:
        'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    },
    publisher: 'Rogahn-Considine',
    starRate: { rate: 1.7, rateNum: 72, rateBuyerNum: 22 },
    rentalPrice: 1322,
    rentalSalePercent: 15,
    buyPrice: 50272,
    buySalePercent: 35,
    count: 5,
    freeCount: 2,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: false,
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    index:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    lastlyRead: '2020-12-01',
  },
  {
    id: 81,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
    type: 'novel',
    category: ['sf', 'romance'],
    title: 'MMIS',
    author: {
      name: 'Bentley Hockey',
      awards: ['Ankunding-Zieme', 'Block Group', 'Larson Group'],
      representatives: [
        {
          name: 'Supply Management',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Microsoft Exchange',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    },
    translator: {
      name: 'Izabel Smeath',
      nationality: 'North Korea',
      career: 'Becker-Purdy',
      representatives: [
        {
          name: 'EFQM Excellence Model',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'RLU',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Quantitative Research',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'Safety Management Systems',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'GTAW',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    },
    publisher: 'Medhurst Inc',
    starRate: { rate: 3.9, rateNum: 67, rateBuyerNum: 7 },
    rentalPrice: 1360,
    rentalSalePercent: 27,
    buyPrice: 10152,
    buySalePercent: 48,
    count: 27,
    freeCount: 8,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    index:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    lastlyRead: '2021-06-05',
  },
  {
    id: 82,
    thumbnail: '',
    type: 'webNovel',
    category: ['sf', 'history'],
    title: 'Document Management',
    author: {
      name: 'Ebonee Munehay',
      awards: ['Stokes, Koch and Blick', 'Baumbach-Sanford', 'Brakus Inc'],
      representatives: [
        {
          name: 'FX Operations',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction:
        'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    },
    translator: {
      name: 'Matthias Feare',
      nationality: 'North Korea',
      career: 'Klocko, Harber and Zemlak',
      representatives: [],
      introduction:
        'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    },
    publisher: 'Watsica, Haag and Runolfsdottir',
    starRate: { rate: 1.9, rateNum: 64, rateBuyerNum: 0 },
    rentalPrice: 1373,
    rentalSalePercent: 46,
    buyPrice: 31466,
    buySalePercent: 18,
    count: 23,
    freeCount: 6,
    isFinished: true,
    canRent: false,
    waitFree: true,
    xRated: false,
    description: 'Mauris lacinia sapien quis libero.',
    index:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    lastlyRead: '2021-07-08',
  },
  {
    id: 83,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
    type: 'ebook',
    category: ['romance', 'sf'],
    title: 'CPIM',
    author: {
      name: 'Tammi Gingles',
      awards: ['Kovacek-Jerde'],
      representatives: [
        {
          name: 'OOH',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'RSA enVision',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Sustainability',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Wireless Networking',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'VSAT',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction:
        'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    },
    translator: {
      name: 'Clara Cracoe',
      nationality: 'North Korea',
      career: 'Cormier-Terry',
      representatives: [
        { name: 'XML Publisher', thumbnail: '' },
        { name: 'Recognition Awards', thumbnail: '' },
        {
          name: 'Geometric Dimensioning &amp; Tolerancing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction:
        'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    },
    publisher: 'McClure-Abernathy',
    starRate: { rate: 4.2, rateNum: 34, rateBuyerNum: 4 },
    rentalPrice: 932,
    rentalSalePercent: 7,
    buyPrice: 40451,
    buySalePercent: 21,
    count: 29,
    freeCount: 9,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    index:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    lastlyRead: '2021-07-15',
  },
  {
    id: 84,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
    type: 'ebook',
    category: ['romance', 'humanities'],
    title: 'Framing',
    author: {
      name: 'Emiline MacCulloch',
      awards: ['Oberbrunner LLC', 'Bogan LLC'],
      representatives: [
        {
          name: 'DOT Regulations',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'GMAT',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'RPT',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'GSM-R',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        { name: 'Tax Law', thumbnail: '' },
      ],
      introduction:
        'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    },
    translator: {
      name: 'Hastings Abriani',
      nationality: 'North Korea',
      career: 'Schoen Group',
      representatives: [
        {
          name: 'Durable Goods',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction:
        'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    },
    publisher: 'Stehr LLC',
    starRate: { rate: 4.5, rateNum: 49, rateBuyerNum: 8 },
    rentalPrice: 928,
    rentalSalePercent: 13,
    buyPrice: 22853,
    buySalePercent: 16,
    count: 16,
    freeCount: 4,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    index:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    lastlyRead: '2021-05-29',
  },
  {
    id: 85,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
    type: 'novel',
    category: ['romance'],
    title: 'ProSystem fx Engagement',
    author: {
      name: 'Ronica Tallach',
      awards: [
        'Skiles, Mante and Fritsch',
        'Lubowitz, Kiehn and Balistreri',
        'Stanton, King and Wunsch',
      ],
      representatives: [
        {
          name: 'Ultrafast Spectroscopy',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'MSP430',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Wound Care',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Egyptian Arabic',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'PMR',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'FFA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction:
        'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    },
    translator: {
      name: 'Ximenes Headrick',
      nationality: 'North Korea',
      career: 'Hauck LLC',
      representatives: [
        {
          name: 'qPCR',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'EOL',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Healthcare Consulting',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Juvenile Law',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    },
    publisher: 'Bechtelar Inc',
    starRate: { rate: 3.3, rateNum: 62, rateBuyerNum: 5 },
    rentalPrice: 100,
    rentalSalePercent: 9,
    buyPrice: 49408,
    buySalePercent: 44,
    count: 29,
    freeCount: 10,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: true,
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    index:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    lastlyRead: '2021-06-19',
  },
  {
    id: 86,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
    type: 'webNovel',
    category: ['history', 'humanities'],
    title: 'IT Project &amp; Program Management',
    author: {
      name: 'Corrianne Radeliffe',
      awards: [
        'Heidenreich-Bradtke',
        'Runolfsdottir, McLaughlin and Champlin',
        'Collier and Sons',
      ],
      representatives: [
        {
          name: 'NDE',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Autism Spectrum Disorders',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'MPE',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Axioma',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'CTQ',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction:
        'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    },
    translator: {
      name: 'Sibyl Dawidowsky',
      nationality: 'North Korea',
      career: 'Gusikowski-West',
      representatives: [
        {
          name: 'XLSTAT',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        { name: 'TCAS', thumbnail: '' },
        {
          name: 'WiMAX',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction:
        'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    },
    publisher: 'Hilll, Jaskolski and Wilkinson',
    starRate: { rate: 0.7, rateNum: 77, rateBuyerNum: 4 },
    rentalPrice: 1363,
    rentalSalePercent: 2,
    buyPrice: 24480,
    buySalePercent: 40,
    count: 14,
    freeCount: 8,
    isFinished: true,
    canRent: true,
    waitFree: true,
    xRated: true,
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    index:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    lastlyRead: '2020-12-30',
  },
  {
    id: 87,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
    type: 'novel',
    category: ['thriller'],
    title: 'NICE Call Recording',
    author: {
      name: 'Adiana Frampton',
      awards: ['Rice-Hand', 'Stoltenberg-Becker', "O'Kon LLC"],
      representatives: [
        {
          name: 'Zillow',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'ICD-9-CM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Windows Azure',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'Variance Analysis',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction: 'Fusce consequat.',
    },
    translator: {
      name: 'Obie Courtois',
      nationality: 'North Korea',
      career: 'Kunze, Brekke and VonRueden',
      representatives: [
        { name: 'Dynamic Speaker', thumbnail: '' },
        {
          name: 'Editorial',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction:
        'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    },
    publisher: 'Crooks Group',
    starRate: { rate: 1.7, rateNum: 36, rateBuyerNum: 24 },
    rentalPrice: 1498,
    rentalSalePercent: 10,
    buyPrice: 13805,
    buySalePercent: 3,
    count: 12,
    freeCount: 1,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: false,
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    index: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    lastlyRead: '2021-03-17',
  },
  {
    id: 88,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
    type: 'webNovel',
    category: ['history'],
    title: 'Semantic HTML',
    author: {
      name: 'Margot Deex',
      awards: [
        'Kerluke Group',
        'Koelpin-Satterfield',
        'Wisoky, Hagenes and Jones',
      ],
      representatives: [
        {
          name: 'Event Production',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'iPad Development',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'WLST',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Wiring',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'GIS Modeling',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
      ],
      introduction: 'Maecenas pulvinar lobortis est.',
    },
    translator: {
      name: 'Henrie Fort',
      nationality: 'North Korea',
      career: 'Nikolaus, McGlynn and Kozey',
      representatives: [
        {
          name: 'White Collar Criminal Defense',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'NCLB',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Analytical Ultracentrifugation',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'DDIC',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
    },
    publisher: 'Jacobi LLC',
    starRate: { rate: 4.1, rateNum: 76, rateBuyerNum: 4 },
    rentalPrice: 485,
    rentalSalePercent: 23,
    buyPrice: 30488,
    buySalePercent: 21,
    count: 3,
    freeCount: 4,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: true,
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    index:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    lastlyRead: '2021-06-10',
  },
  {
    id: 89,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
    type: 'webNovel',
    category: ['history', 'romance'],
    title: 'GMAT',
    author: {
      name: 'Brooke Cawthorn',
      awards: ['Jakubowski, Lindgren and Kling'],
      representatives: [
        {
          name: 'PPDS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Government Contracting',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Invoicing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Wufoo',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Zillow',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    },
    translator: {
      name: 'Josselyn Floyd',
      nationality: 'North Korea',
      career: "Mann-D'Amore",
      representatives: [],
      introduction:
        'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    },
    publisher: 'Deckow-Davis',
    starRate: { rate: 3.7, rateNum: 32, rateBuyerNum: 12 },
    rentalPrice: 749,
    rentalSalePercent: 45,
    buyPrice: 42229,
    buySalePercent: 11,
    count: 11,
    freeCount: 9,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: true,
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    index:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    lastlyRead: '2021-08-04',
  },
  {
    id: 90,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
    type: 'ebook',
    category: ['humanities', 'sf'],
    title: 'Guided Tours',
    author: {
      name: 'Hewitt Sanderson',
      awards: ['Carter LLC'],
      representatives: [
        {
          name: 'Google Webmaster Tools',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'RMADS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'Erosion Control',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    },
    translator: {
      name: 'Almeta Crummy',
      nationality: 'North Korea',
      career: 'Jerde-Senger',
      representatives: [
        {
          name: 'Pain Management',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction: 'Aenean lectus. Pellentesque eget nunc.',
    },
    publisher: 'Volkman-Bashirian',
    starRate: { rate: 3.0, rateNum: 40, rateBuyerNum: 13 },
    rentalPrice: 200,
    rentalSalePercent: 50,
    buyPrice: 43834,
    buySalePercent: 50,
    count: 25,
    freeCount: 6,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    index:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    lastlyRead: '2021-02-11',
  },
  {
    id: 91,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
    type: 'webNovel',
    category: ['thriller'],
    title: 'Ulead VideoStudio',
    author: {
      name: 'Laurene Culwen',
      awards: ['Towne-Marvin', 'Ernser Inc', 'Prohaska-Maggio'],
      representatives: [
        {
          name: 'Latin America',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Erosion Control',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Kinematics',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Electronic Payments',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Property Management Systems',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'At Multitasking',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    },
    translator: {
      name: 'Thornie Mattiazzo',
      nationality: 'North Korea',
      career: 'Brekke, Yundt and Davis',
      representatives: [
        {
          name: 'OCP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Public Relations',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'HCM Processes &amp; Forms',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    },
    publisher: 'Murazik LLC',
    starRate: { rate: 1.2, rateNum: 52, rateBuyerNum: 7 },
    rentalPrice: 1400,
    rentalSalePercent: 17,
    buyPrice: 36905,
    buySalePercent: 32,
    count: 22,
    freeCount: 2,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: true,
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    index:
      'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    lastlyRead: '2021-07-30',
  },
  {
    id: 92,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
    type: 'ebook',
    category: ['sf', 'detective'],
    title: 'HCS',
    author: {
      name: 'Archaimbaud Antonikov',
      awards: ['Brekke-Brakus', 'Renner, Sawayn and Murphy', 'Lind-Wolff'],
      representatives: [
        {
          name: 'UCITS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        { name: 'ProSystem fx Tax', thumbnail: '' },
      ],
      introduction:
        'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    },
    translator: {
      name: 'Clarke Golds',
      nationality: 'North Korea',
      career: 'Breitenberg-Feil',
      representatives: [
        {
          name: 'Job Coaching',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        { name: 'Microsoft Publisher', thumbnail: '' },
        {
          name: 'Justice',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
      ],
      introduction:
        'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    },
    publisher: 'Hickle, Yost and Daugherty',
    starRate: { rate: 4.4, rateNum: 75, rateBuyerNum: 4 },
    rentalPrice: 985,
    rentalSalePercent: 7,
    buyPrice: 13590,
    buySalePercent: 15,
    count: 3,
    freeCount: 9,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    index:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    lastlyRead: '2021-10-29',
  },
  {
    id: 93,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
    type: 'ebook',
    category: ['fantasy', 'history'],
    title: 'Kuka',
    author: {
      name: 'Sonnie Gingel',
      awards: ['McCullough, Littel and Corkery', 'Pacocha, Fisher and Kunde'],
      representatives: [
        {
          name: 'Cross Functional Team Building',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'CGI programming',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Xytech',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Group Work',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Managed Care',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    },
    translator: {
      name: 'Vachel Cerie',
      nationality: 'North Korea',
      career: 'Sauer and Sons',
      representatives: [
        {
          name: 'Practice CS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    },
    publisher: 'Hand-Brakus',
    starRate: { rate: 3.4, rateNum: 54, rateBuyerNum: 0 },
    rentalPrice: 600,
    rentalSalePercent: 38,
    buyPrice: 30341,
    buySalePercent: 43,
    count: 14,
    freeCount: 3,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    index:
      'Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    lastlyRead: '2021-07-18',
  },
  {
    id: 94,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
    type: 'webNovel',
    category: ['detective'],
    title: 'Graphic Illustrations',
    author: {
      name: 'Pacorro Paraman',
      awards: ['Friesen, Olson and Abernathy', 'Wyman, Ernser and Tromp'],
      representatives: [
        {
          name: 'Virtual DJ',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'EEG',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction:
        'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    },
    translator: {
      name: 'Flint Eliasson',
      nationality: 'North Korea',
      career: 'Toy-Gutkowski',
      representatives: [
        {
          name: 'Urban Forestry',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'PSpice',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    },
    publisher: 'Bruen Group',
    starRate: { rate: 0.8, rateNum: 45, rateBuyerNum: 3 },
    rentalPrice: 1180,
    rentalSalePercent: 21,
    buyPrice: 31508,
    buySalePercent: 13,
    count: 14,
    freeCount: 4,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: true,
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    index:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    lastlyRead: '2021-10-02',
  },
  {
    id: 95,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
    type: 'novel',
    category: ['society', 'humanities'],
    title: 'Microsoft Dynamics GP',
    author: {
      name: 'Camella Colpus',
      awards: ['Kuphal, Christiansen and Schmeler'],
      representatives: [
        {
          name: 'iWork',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Omgeo Oasys',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Rhapsody',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Laboratory Skills',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'XMLBeans',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Circuit Design',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction:
        'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    },
    translator: {
      name: 'Pavel Dominey',
      nationality: 'North Korea',
      career: 'Deckow-Windler',
      representatives: [
        {
          name: 'Mentoring',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Audio Typing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Business Process',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction: 'In quis justo. Maecenas rhoncus aliquam lacus.',
    },
    publisher: 'Hilll Group',
    starRate: { rate: 1.9, rateNum: 55, rateBuyerNum: 13 },
    rentalPrice: 231,
    rentalSalePercent: 23,
    buyPrice: 18074,
    buySalePercent: 34,
    count: 25,
    freeCount: 5,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: false,
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    index:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    lastlyRead: '2021-06-08',
  },
  {
    id: 96,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
    type: 'webNovel',
    category: ['history', 'society'],
    title: 'Fashion GPS',
    author: {
      name: 'Chelsea Baistow',
      awards: ['Lang, Morar and Stark'],
      representatives: [
        {
          name: 'HP Procurve',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        { name: 'EZ Labor', thumbnail: '' },
        {
          name: 'VSS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Materials Science',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Hazardous Materials',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    },
    translator: {
      name: 'Trish Merrigans',
      nationality: 'North Korea',
      career: 'Koss, Bogisich and McDermott',
      representatives: [
        {
          name: 'GPRS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Regulatory Affairs',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
      ],
      introduction:
        'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    },
    publisher: 'Barrows-Schultz',
    starRate: { rate: 2.6, rateNum: 63, rateBuyerNum: 4 },
    rentalPrice: 1341,
    rentalSalePercent: 0,
    buyPrice: 48339,
    buySalePercent: 37,
    count: 5,
    freeCount: 2,
    isFinished: true,
    canRent: false,
    waitFree: true,
    xRated: true,
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    index:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    lastlyRead: '2021-03-22',
  },
  {
    id: 97,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
    type: 'webNovel',
    category: ['romance', 'humanities'],
    title: 'MXG',
    author: {
      name: 'Clarabelle Paynton',
      awards: ['Ferry-Gusikowski'],
      representatives: [
        {
          name: 'Kickstart',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        { name: 'Adobe Creative Suite', thumbnail: '' },
        {
          name: 'Asset Protection',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'ISM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Channel Partners',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    },
    translator: {
      name: 'Denver Stimson',
      nationality: 'North Korea',
      career: 'Homenick, Sipes and Wolf',
      representatives: [
        {
          name: 'MyFaces',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'CDO',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Operational Due Diligence',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
      ],
      introduction:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    },
    publisher: 'Wiza Group',
    starRate: { rate: 2.6, rateNum: 60, rateBuyerNum: 28 },
    rentalPrice: 1269,
    rentalSalePercent: 21,
    buyPrice: 59179,
    buySalePercent: 45,
    count: 13,
    freeCount: 2,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: true,
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    index:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    lastlyRead: '2021-09-10',
  },
  {
    id: 98,
    thumbnail: '',
    type: 'ebook',
    category: ['romance'],
    title: 'Jigs',
    author: {
      name: 'Glynn Putley',
      awards: [
        'Schulist Inc',
        'Weber, Schaefer and Stokes',
        'Bruen, Feil and Kunde',
      ],
      representatives: [
        {
          name: 'RDO',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
      ],
      introduction:
        'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    },
    translator: {
      name: 'Felipa Pedro',
      nationality: 'North Korea',
      career: 'Haley Inc',
      representatives: [
        {
          name: 'XPlanner',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Eyebrow',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Ownership',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'Emergency Medicine',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Phase II',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    },
    publisher: "Raynor-O'Kon",
    starRate: { rate: 2.2, rateNum: 65, rateBuyerNum: 12 },
    rentalPrice: 1366,
    rentalSalePercent: 39,
    buyPrice: 25159,
    buySalePercent: 43,
    count: 24,
    freeCount: 1,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: false,
    description: 'Nulla nisl. Nunc nisl.',
    index:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    lastlyRead: '2021-08-24',
  },
  {
    id: 99,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
    type: 'webNovel',
    category: ['romance'],
    title: 'Zend',
    author: {
      name: "Claybourne O' Mulderrig",
      awards: ['Zieme and Sons', 'Daniel-Cole', 'Bashirian LLC'],
      representatives: [
        {
          name: 'Tablet PC',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'FCNSP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Pianist',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'VMware ESX',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction:
        'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    },
    translator: {
      name: 'Jazmin Bartle',
      nationality: 'North Korea',
      career: 'Cruickshank-Feil',
      representatives: [],
      introduction:
        'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    },
    publisher: 'Harris-Crist',
    starRate: { rate: 2.9, rateNum: 30, rateBuyerNum: 3 },
    rentalPrice: 1250,
    rentalSalePercent: 47,
    buyPrice: 25553,
    buySalePercent: 39,
    count: 11,
    freeCount: 4,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    index:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    lastlyRead: '2020-11-29',
  },
  {
    id: 100,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
    type: 'ebook',
    category: ['thriller'],
    title: 'eHRPD',
    author: {
      name: 'Edvard Penquet',
      awards: ['Nitzsche-Schneider'],
      representatives: [
        {
          name: 'IGMP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        { name: 'Custom Furniture', thumbnail: '' },
      ],
      introduction:
        'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    },
    translator: {
      name: 'Ronnie Wandtke',
      nationality: 'North Korea',
      career: 'Stracke, Pagac and Rath',
      representatives: [
        {
          name: 'R&amp;TTE',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    },
    publisher: 'Bergnaum Group',
    starRate: { rate: 4.3, rateNum: 77, rateBuyerNum: 2 },
    rentalPrice: 913,
    rentalSalePercent: 6,
    buyPrice: 8440,
    buySalePercent: 13,
    count: 6,
    freeCount: 6,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: false,
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    index: 'Vivamus vel nulla eget eros elementum pellentesque.',
    lastlyRead: '2021-08-22',
  },
  {
    id: 101,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
    type: 'ebook',
    category: ['thriller', 'romance'],
    title: 'Integrated Circuit Design',
    author: {
      name: 'Auberon Grishukov',
      awards: ['Mante-Willms'],
      representatives: [
        {
          name: 'RTF',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Volunteering',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Public Speaking',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'EIP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'Digital Media',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Python',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction: 'Nullam varius. Nulla facilisi.',
    },
    translator: {
      name: 'Herc Saich',
      nationality: 'North Korea',
      career: 'Kozey LLC',
      representatives: [
        {
          name: 'Storage',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    },
    publisher: 'Hand-Hauck',
    starRate: { rate: 1.5, rateNum: 68, rateBuyerNum: 26 },
    rentalPrice: 283,
    rentalSalePercent: 23,
    buyPrice: 33580,
    buySalePercent: 27,
    count: 18,
    freeCount: 0,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: true,
    description: 'Vivamus vel nulla eget eros elementum pellentesque.',
    index:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    lastlyRead: '2020-12-01',
  },
  {
    id: 102,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
    type: 'novel',
    category: ['romance', 'humanities'],
    title: 'CNG',
    author: {
      name: 'Oralee Marron',
      awards: ['Swaniawski Inc'],
      representatives: [
        {
          name: 'Cerner',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Kontakt',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'LabVIEW',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction:
        'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    },
    translator: {
      name: 'Jocelyn Kermannes',
      nationality: 'North Korea',
      career: 'Kuhlman LLC',
      representatives: [
        {
          name: 'MDSD',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'CSA 2010',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'Testing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'EIM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'Pensions',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction: 'Morbi non quam nec dui luctus rutrum.',
    },
    publisher: 'Shanahan, Adams and Jast',
    starRate: { rate: 2.3, rateNum: 37, rateBuyerNum: 12 },
    rentalPrice: 362,
    rentalSalePercent: 2,
    buyPrice: 56661,
    buySalePercent: 3,
    count: 13,
    freeCount: 6,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: true,
    description: 'Morbi a ipsum.',
    index:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    lastlyRead: '2021-05-08',
  },
  {
    id: 103,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
    type: 'ebook',
    category: ['detective', 'society'],
    title: 'RPO',
    author: {
      name: 'Nerte Lisett',
      awards: [
        'Beahan Group',
        'Corkery, Heaney and Ritchie',
        'Cartwright, Schultz and Kilback',
      ],
      representatives: [
        {
          name: 'DMP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Global Management',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'DFT',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Allergic Rhinitis',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    },
    translator: {
      name: "Vinny O'Hone",
      nationality: 'North Korea',
      career: 'Rippin Group',
      representatives: [
        {
          name: 'BBP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'BTL Activations',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'iHotelier',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    },
    publisher: 'Cruickshank LLC',
    starRate: { rate: 4.5, rateNum: 59, rateBuyerNum: 28 },
    rentalPrice: 363,
    rentalSalePercent: 28,
    buyPrice: 3654,
    buySalePercent: 1,
    count: 26,
    freeCount: 8,
    isFinished: true,
    canRent: false,
    waitFree: true,
    xRated: true,
    description: 'Nullam varius.',
    index:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    lastlyRead: '2021-05-07',
  },
  {
    id: 104,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
    type: 'webNovel',
    category: ['sf', 'romance'],
    title: 'Corporate Real Estate',
    author: {
      name: 'Jodee Hill',
      awards: ['Beahan Inc', 'Prosacco and Sons', 'Abbott-Adams'],
      representatives: [
        {
          name: 'Valuation',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'EEG',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Bylined Articles',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Statistics',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    },
    translator: {
      name: 'Austin McAree',
      nationality: 'North Korea',
      career: 'Hegmann, Wisoky and Johnston',
      representatives: [
        {
          name: 'Slope Stability Analysis',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Aerospace Medicine',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Globalization',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'TTP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Testing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction: 'Curabitur convallis.',
    },
    publisher: 'Nienow, Ernser and Lubowitz',
    starRate: { rate: 1.7, rateNum: 44, rateBuyerNum: 2 },
    rentalPrice: 1070,
    rentalSalePercent: 37,
    buyPrice: 27822,
    buySalePercent: 29,
    count: 2,
    freeCount: 9,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: false,
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    index:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    lastlyRead: '2021-01-20',
  },
  {
    id: 105,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
    type: 'ebook',
    category: ['fantasy', 'society'],
    title: 'Weapons of Mass Destruction',
    author: {
      name: 'Emery Goodbourn',
      awards: ['Huel-Nolan'],
      representatives: [
        {
          name: 'wxWidgets',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'HCP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'JDOM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Project Oversight',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Corel Draw',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        { name: 'Ruby', thumbnail: '' },
      ],
      introduction:
        'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    },
    translator: {
      name: 'Shanta Cawte',
      nationality: 'North Korea',
      career: 'Keebler, Hettinger and Bergnaum',
      representatives: [
        {
          name: 'Urinalysis',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'International Relations',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        { name: 'DGFT', thumbnail: '' },
        {
          name: 'XaaS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'Mobile Marketing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    },
    publisher: 'Funk-Hackett',
    starRate: { rate: 4.4, rateNum: 64, rateBuyerNum: 18 },
    rentalPrice: 720,
    rentalSalePercent: 46,
    buyPrice: 38407,
    buySalePercent: 6,
    count: 22,
    freeCount: 4,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: true,
    description: 'Aliquam non mauris.',
    index:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    lastlyRead: '2021-04-26',
  },
  {
    id: 106,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
    type: 'novel',
    category: ['history', 'humanities'],
    title: 'MDL',
    author: {
      name: 'Eberto Dahlen',
      awards: ['Stokes-Rempel', 'Kovacek, Kutch and Kohler'],
      representatives: [
        {
          name: 'Tax Accounting',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Hyperion',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    },
    translator: {
      name: 'Sanders Parmby',
      nationality: 'North Korea',
      career: 'Ondricka Inc',
      representatives: [
        {
          name: 'JMP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Lesson Planning',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'JGroups',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Conservation Issues',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Downstream Oil &amp; Gas',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    },
    publisher: 'Haley, Boyle and Wolff',
    starRate: { rate: 0.8, rateNum: 42, rateBuyerNum: 2 },
    rentalPrice: 1301,
    rentalSalePercent: 49,
    buyPrice: 26367,
    buySalePercent: 13,
    count: 13,
    freeCount: 5,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    index:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    lastlyRead: '2021-07-08',
  },
  {
    id: 107,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
    type: 'novel',
    category: ['romance', 'thriller'],
    title: 'MXP',
    author: {
      name: 'Lissy De Meyer',
      awards: ['Dooley Group'],
      representatives: [
        { name: 'Oracle', thumbnail: '' },
        {
          name: 'DCOM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'FFP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'UMTS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Apollo GDS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    },
    translator: {
      name: 'Rikki Pulhoster',
      nationality: 'North Korea',
      career: 'Fay-Waters',
      representatives: [
        { name: 'Yield Management', thumbnail: '' },
        {
          name: 'Scripting',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'Phase II Environmental Site Assessments',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'RCS Master Control',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction:
        'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    },
    publisher: 'Jacobson-McCullough',
    starRate: { rate: 3.4, rateNum: 58, rateBuyerNum: 18 },
    rentalPrice: 409,
    rentalSalePercent: 46,
    buyPrice: 31978,
    buySalePercent: 24,
    count: 30,
    freeCount: 1,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: false,
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    index:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    lastlyRead: '2020-11-26',
  },
  {
    id: 108,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
    type: 'webNovel',
    category: ['thriller'],
    title: 'Eye Tracking',
    author: {
      name: 'Cloe Neaves',
      awards: ['Walter LLC'],
      representatives: [
        { name: 'FTSE 100', thumbnail: '' },
        {
          name: 'Logistics Management',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'NDMP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'IT Hardware Support',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        { name: 'Luminex', thumbnail: '' },
      ],
      introduction:
        'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    },
    translator: {
      name: 'Isaak Delea',
      nationality: 'North Korea',
      career: "Kuhlman, Schimmel and O'Keefe",
      representatives: [
        {
          name: 'SVG',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    },
    publisher: 'Rolfson Group',
    starRate: { rate: 4.1, rateNum: 37, rateBuyerNum: 15 },
    rentalPrice: 757,
    rentalSalePercent: 0,
    buyPrice: 37714,
    buySalePercent: 48,
    count: 30,
    freeCount: 2,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: false,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    index: 'Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    lastlyRead: '2021-10-13',
  },
  {
    id: 109,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
    type: 'ebook',
    category: ['sf', 'society'],
    title: 'MySQL',
    author: {
      name: 'Zachery Elion',
      awards: ['Schmitt Inc', 'Gutkowski Group'],
      representatives: [
        {
          name: 'Python',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
      ],
      introduction:
        'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    },
    translator: {
      name: 'Henryetta Sherbrooke',
      nationality: 'North Korea',
      career: 'Wisoky, Champlin and Schaden',
      representatives: [
        {
          name: 'NMT',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    },
    publisher: 'Kihn, Runte and Greenfelder',
    starRate: { rate: 2.4, rateNum: 79, rateBuyerNum: 6 },
    rentalPrice: 1318,
    rentalSalePercent: 32,
    buyPrice: 5884,
    buySalePercent: 44,
    count: 20,
    freeCount: 4,
    isFinished: true,
    canRent: false,
    waitFree: true,
    xRated: true,
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    index: 'Aenean lectus. Pellentesque eget nunc.',
    lastlyRead: '2020-12-06',
  },
  {
    id: 110,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
    type: 'novel',
    category: ['detective'],
    title: 'Hospitality Industry',
    author: {
      name: 'Ermengarde Broome',
      awards: ["O'Connell and Sons"],
      representatives: [
        {
          name: 'Big 4',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Amazon EC2',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'Pylons',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'nMarket',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Toxicology',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Document Drafting',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    },
    translator: {
      name: 'Krispin Fernihough',
      nationality: 'North Korea',
      career: 'Witting-Bosco',
      representatives: [
        {
          name: 'NCARB',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'MX Road',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Hazard Analysis',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'BDMS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    },
    publisher: 'Walter, Larson and Ferry',
    starRate: { rate: 3.7, rateNum: 31, rateBuyerNum: 13 },
    rentalPrice: 1282,
    rentalSalePercent: 2,
    buyPrice: 19589,
    buySalePercent: 27,
    count: 14,
    freeCount: 0,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: false,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    index:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    lastlyRead: '2021-01-10',
  },
  {
    id: 111,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
    type: 'novel',
    category: ['thriller'],
    title: 'z/OS',
    author: {
      name: 'Brion Gary',
      awards: [
        'Feest, Stanton and Witting',
        'Kerluke-Bartell',
        'Nikolaus, Steuber and Ebert',
      ],
      representatives: [
        {
          name: 'Entrust PKI',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'RVs',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'HCPCS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction:
        'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    },
    translator: {
      name: 'Reena Greguol',
      nationality: 'North Korea',
      career: 'Larkin-Sporer',
      representatives: [],
      introduction:
        'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    },
    publisher: 'Schoen-Swift',
    starRate: { rate: 0.5, rateNum: 43, rateBuyerNum: 2 },
    rentalPrice: 980,
    rentalSalePercent: 34,
    buyPrice: 47648,
    buySalePercent: 8,
    count: 8,
    freeCount: 9,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: false,
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    index:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    lastlyRead: '2021-02-14',
  },
  {
    id: 112,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
    type: 'webNovel',
    category: ['humanities'],
    title: 'CDO',
    author: {
      name: 'Gabe Irvine',
      awards: ['Dickens and Sons', 'Considine-Mohr', 'Mills, Hartmann and Orn'],
      representatives: [],
      introduction: 'Morbi ut odio.',
    },
    translator: {
      name: 'Vergil Shears',
      nationality: 'North Korea',
      career: 'MacGyver-Medhurst',
      representatives: [
        {
          name: 'Reverse Osmosis',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Church Events',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Skin',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    },
    publisher: 'Boyle-Langosh',
    starRate: { rate: 0.8, rateNum: 42, rateBuyerNum: 25 },
    rentalPrice: 1238,
    rentalSalePercent: 27,
    buyPrice: 40482,
    buySalePercent: 19,
    count: 30,
    freeCount: 0,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: false,
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    index: 'Integer ac neque.',
    lastlyRead: '2021-01-02',
  },
  {
    id: 113,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
    type: 'webNovel',
    category: ['detective'],
    title: 'DVB-T',
    author: {
      name: 'Aviva Chesshyre',
      awards: ['Emmerich, Windler and Casper', 'Rau-Smith'],
      representatives: [
        {
          name: 'FDD',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    },
    translator: {
      name: 'Alvina Pittman',
      nationality: 'North Korea',
      career: 'Mertz, Jaskolski and Reichert',
      representatives: [
        { name: 'Pharmaceutical Industry', thumbnail: '' },
        {
          name: 'qPCR',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'CFM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Warranty',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'VTAM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    },
    publisher: 'Gerhold-Mayer',
    starRate: { rate: 4.8, rateNum: 48, rateBuyerNum: 23 },
    rentalPrice: 1329,
    rentalSalePercent: 16,
    buyPrice: 52325,
    buySalePercent: 30,
    count: 10,
    freeCount: 0,
    isFinished: true,
    canRent: true,
    waitFree: true,
    xRated: true,
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    index: 'Donec ut mauris eget massa tempor convallis.',
    lastlyRead: '2021-09-06',
  },
  {
    id: 114,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
    type: 'ebook',
    category: ['romance', 'society'],
    title: 'Rehabilitation Psychology',
    author: {
      name: 'Kristal Benstead',
      awards: [
        'Fisher-Pacocha',
        'Bogisich, Goldner and Schulist',
        'Leffler Inc',
      ],
      representatives: [],
      introduction:
        'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    },
    translator: {
      name: 'Boyce Bellon',
      nationality: 'North Korea',
      career: 'Mraz-Bogan',
      representatives: [],
      introduction: 'Phasellus in felis. Donec semper sapien a libero.',
    },
    publisher: 'King and Sons',
    starRate: { rate: 1.3, rateNum: 45, rateBuyerNum: 10 },
    rentalPrice: 320,
    rentalSalePercent: 11,
    buyPrice: 6253,
    buySalePercent: 40,
    count: 21,
    freeCount: 9,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: false,
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    index:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    lastlyRead: '2021-09-07',
  },
  {
    id: 115,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
    type: 'novel',
    category: ['romance'],
    title: 'Alternative Medicine',
    author: {
      name: 'Leontine Lucas',
      awards: ['Legros-Welch', 'Cole, Metz and Kuhn'],
      representatives: [
        {
          name: 'Microsoft Project',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'SAP BI',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Cisco Routers',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Space Planning',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Molecular Dynamics',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'AOD',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
      ],
      introduction:
        'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    },
    translator: {
      name: 'Sheila-kathryn Boyall',
      nationality: 'North Korea',
      career: 'Kessler-Gusikowski',
      representatives: [
        {
          name: 'Active Directory',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Eyeliner',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        { name: 'Epicor', thumbnail: '' },
        { name: 'Drilling', thumbnail: '' },
      ],
      introduction:
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    },
    publisher: 'Heathcote, Osinski and Emmerich',
    starRate: { rate: 3.0, rateNum: 74, rateBuyerNum: 0 },
    rentalPrice: 795,
    rentalSalePercent: 39,
    buyPrice: 33472,
    buySalePercent: 22,
    count: 17,
    freeCount: 5,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: false,
    description: 'Donec semper sapien a libero. Nam dui.',
    index:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    lastlyRead: '2021-04-03',
  },
  {
    id: 116,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
    type: 'webNovel',
    category: ['fantasy'],
    title: 'Turbo C++',
    author: {
      name: 'Celene Kuna',
      awards: [
        'Jaskolski-Bernhard',
        'Dooley Inc',
        'Sanford, Luettgen and Stracke',
      ],
      representatives: [
        {
          name: 'FGD',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Smart TV',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        { name: 'CFRA', thumbnail: '' },
        {
          name: 'HP Procurve',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
      ],
      introduction:
        'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    },
    translator: {
      name: 'Johanna Cunney',
      nationality: 'North Korea',
      career: 'Bogan Inc',
      representatives: [
        {
          name: 'XDCAM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'PgSQL',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Aerospace',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Bluetooth',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction: 'Proin eu mi. Nulla ac enim.',
    },
    publisher: 'Shanahan, Jakubowski and Jenkins',
    starRate: { rate: 2.8, rateNum: 46, rateBuyerNum: 17 },
    rentalPrice: 329,
    rentalSalePercent: 21,
    buyPrice: 46169,
    buySalePercent: 34,
    count: 29,
    freeCount: 1,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: false,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    index: 'Quisque ut erat.',
    lastlyRead: '2021-02-28',
  },
  {
    id: 117,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
    type: 'webNovel',
    category: ['society'],
    title: 'Air Compressors',
    author: {
      name: 'Jada Brumham',
      awards: [
        'Effertz, Kulas and Koelpin',
        'Krajcik, Toy and Predovic',
        'Collins, Barton and Auer',
      ],
      representatives: [
        {
          name: 'EPiServer',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'WDF',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction: 'Etiam vel augue. Vestibulum rutrum rutrum neque.',
    },
    translator: {
      name: 'Sacha Lasseter',
      nationality: 'North Korea',
      career: 'Luettgen Inc',
      representatives: [
        { name: 'Art', thumbnail: '' },
        {
          name: 'Jeans',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'EFTPOS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Design for Manufacturing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'Perl',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction:
        'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    },
    publisher: 'Cole, Roob and Hammes',
    starRate: { rate: 0.9, rateNum: 61, rateBuyerNum: 4 },
    rentalPrice: 442,
    rentalSalePercent: 5,
    buyPrice: 18348,
    buySalePercent: 47,
    count: 10,
    freeCount: 2,
    isFinished: true,
    canRent: false,
    waitFree: true,
    xRated: false,
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    index:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    lastlyRead: '2020-11-24',
  },
  {
    id: 118,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
    type: 'webNovel',
    category: ['history', 'sf'],
    title: 'Keratin Treatment',
    author: {
      name: 'Jyoti Bridywater',
      awards: ['Turner and Sons', 'Bradtke LLC', 'Mills-Cronin'],
      representatives: [
        {
          name: 'Graphic Design',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction:
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    },
    translator: {
      name: 'Cornall McCarrison',
      nationality: 'North Korea',
      career: 'Marvin LLC',
      representatives: [
        {
          name: 'Following Up',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    },
    publisher: 'Murray-Heaney',
    starRate: { rate: 2.1, rateNum: 33, rateBuyerNum: 30 },
    rentalPrice: 1432,
    rentalSalePercent: 32,
    buyPrice: 32271,
    buySalePercent: 5,
    count: 10,
    freeCount: 5,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: false,
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    index:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    lastlyRead: '2021-10-24',
  },
  {
    id: 119,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
    type: 'webNovel',
    category: ['history', 'sf'],
    title: 'NQA-1',
    author: {
      name: 'Bordy Schruyers',
      awards: ['Gaylord, Torp and Mraz', 'Will and Sons', 'Torphy LLC'],
      representatives: [
        {
          name: 'MBTI',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        { name: 'Office Equipment', thumbnail: '' },
        {
          name: 'User Experience Design',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    },
    translator: {
      name: 'Berny Fidele',
      nationality: 'North Korea',
      career: 'Lubowitz, Gislason and Brakus',
      representatives: [
        {
          name: 'DDR2',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Construction',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Gynecology',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Space Planning',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Start-up Ventures',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
      ],
      introduction:
        'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    },
    publisher: 'Shanahan, Harvey and Brakus',
    starRate: { rate: 4.2, rateNum: 39, rateBuyerNum: 28 },
    rentalPrice: 275,
    rentalSalePercent: 10,
    buyPrice: 18711,
    buySalePercent: 22,
    count: 20,
    freeCount: 10,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: true,
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    index:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    lastlyRead: '2020-11-30',
  },
  {
    id: 120,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
    type: 'ebook',
    category: ['history', 'romance'],
    title: 'HSE auditing',
    author: {
      name: 'Itch Elstone',
      awards: ['Lowe-Wolff', 'Predovic, Crona and Waelchi'],
      representatives: [
        {
          name: 'PCIe',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'SWOT analysis',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Luminex',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'PMO Design',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'UIKit',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    },
    translator: {
      name: 'Hyacinth Hooke',
      nationality: 'North Korea',
      career: 'Bednar Group',
      representatives: [
        {
          name: 'xCP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        { name: 'Blueprint Reading', thumbnail: '' },
        {
          name: 'GFS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Hunting',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    },
    publisher: 'Mayer-Lemke',
    starRate: { rate: 2.5, rateNum: 58, rateBuyerNum: 26 },
    rentalPrice: 1215,
    rentalSalePercent: 25,
    buyPrice: 58373,
    buySalePercent: 9,
    count: 20,
    freeCount: 9,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: true,
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    index:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    lastlyRead: '2021-01-12',
  },
  {
    id: 121,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
    type: 'novel',
    category: ['romance', 'humanities'],
    title: 'DDD',
    author: {
      name: 'Gloria MacCrossan',
      awards: ["Batz, Beer and D'Amore", 'Yost-Bruen'],
      representatives: [
        {
          name: 'SMT',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Videography',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        { name: 'Graphic Illustrations', thumbnail: '' },
      ],
      introduction:
        'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    },
    translator: {
      name: 'Charley Bier',
      nationality: 'North Korea',
      career: 'Halvorson-Ledner',
      representatives: [
        {
          name: 'Rheology',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'Skin Care',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'RDBMS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    },
    publisher: 'Beahan-Hettinger',
    starRate: { rate: 1.9, rateNum: 46, rateBuyerNum: 1 },
    rentalPrice: 158,
    rentalSalePercent: 43,
    buyPrice: 50874,
    buySalePercent: 31,
    count: 23,
    freeCount: 6,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    index:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    lastlyRead: '2021-02-04',
  },
  {
    id: 122,
    thumbnail: '',
    type: 'ebook',
    category: ['sf'],
    title: 'Bands',
    author: {
      name: 'Dan Harbison',
      awards: ['Haag-Daugherty', 'White, Maggio and Yost'],
      representatives: [
        {
          name: 'TSS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'RFID',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    },
    translator: {
      name: 'Carmel MacCosty',
      nationality: 'North Korea',
      career: "Gislason-D'Amore",
      representatives: [
        {
          name: 'Zend Studio',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'VCI',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
      ],
      introduction:
        'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    },
    publisher: "Larson, Haag and O'Reilly",
    starRate: { rate: 3.1, rateNum: 66, rateBuyerNum: 30 },
    rentalPrice: 666,
    rentalSalePercent: 26,
    buyPrice: 54331,
    buySalePercent: 19,
    count: 25,
    freeCount: 0,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: false,
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    index:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    lastlyRead: '2021-03-20',
  },
  {
    id: 123,
    thumbnail: '',
    type: 'novel',
    category: ['society'],
    title: 'TV Distribution',
    author: {
      name: 'Carlina Schuricke',
      awards: ['Boyle Inc', 'Stamm-Herzog', 'Runte-Hagenes'],
      representatives: [
        {
          name: 'NSPS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Mortgage Underwriting',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Novell',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'IGOR Pro',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction: 'Donec ut dolor.',
    },
    translator: {
      name: 'Karel Burnsell',
      nationality: 'North Korea',
      career: 'Hickle-Waelchi',
      representatives: [
        {
          name: 'MCNP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Nightlife',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Logic Pro',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    },
    publisher: 'Roberts-Herzog',
    starRate: { rate: 4.0, rateNum: 54, rateBuyerNum: 14 },
    rentalPrice: 407,
    rentalSalePercent: 25,
    buyPrice: 15223,
    buySalePercent: 22,
    count: 2,
    freeCount: 2,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: false,
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    index:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    lastlyRead: '2021-07-31',
  },
  {
    id: 124,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
    type: 'ebook',
    category: ['thriller'],
    title: 'Yacht Deliveries',
    author: {
      name: 'Cindee Prozillo',
      awards: ['Zemlak, Schaefer and Donnelly'],
      representatives: [
        { name: 'Office Management', thumbnail: '' },
        {
          name: 'Human Resource Development',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Manufacturing Operations Management',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    },
    translator: {
      name: 'Johan Bowsher',
      nationality: 'North Korea',
      career: 'Carroll Group',
      representatives: [
        {
          name: 'WTT',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'D3.js',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Snort',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'iWeb',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'PDO',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
      ],
      introduction:
        'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    },
    publisher: 'Roberts-Daugherty',
    starRate: { rate: 4.7, rateNum: 57, rateBuyerNum: 22 },
    rentalPrice: 643,
    rentalSalePercent: 29,
    buyPrice: 58854,
    buySalePercent: 25,
    count: 15,
    freeCount: 2,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: false,
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    index:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    lastlyRead: '2021-07-26',
  },
  {
    id: 125,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
    type: 'novel',
    category: ['humanities', 'history'],
    title: 'Sustainable Tourism',
    author: {
      name: 'Giulia Ackenson',
      awards: ['Pfeffer, Pagac and Strosin', 'Stokes-Treutel'],
      representatives: [
        {
          name: 'Americans with Disabilities Act',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction:
        'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    },
    translator: {
      name: 'Alica Joslin',
      nationality: 'North Korea',
      career: 'Brekke-Reilly',
      representatives: [
        {
          name: 'QCAT',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Nikon DSLR',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'SV',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'SSH',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
      ],
      introduction:
        'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    },
    publisher: 'Abshire Group',
    starRate: { rate: 0.2, rateNum: 30, rateBuyerNum: 10 },
    rentalPrice: 891,
    rentalSalePercent: 9,
    buyPrice: 53820,
    buySalePercent: 30,
    count: 24,
    freeCount: 2,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: false,
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    index:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    lastlyRead: '2020-11-09',
  },
  {
    id: 126,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
    type: 'webNovel',
    category: ['thriller', 'society'],
    title: 'CBEST',
    author: {
      name: 'Shalne McGannon',
      awards: ['Kunde, Von and Casper'],
      representatives: [
        {
          name: 'User Experience Design',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'Zymography',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Sanction II',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Video over IP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction:
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    },
    translator: {
      name: 'Nichole Renneke',
      nationality: 'North Korea',
      career: 'Mraz LLC',
      representatives: [
        {
          name: 'CQ5',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
      ],
      introduction:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    },
    publisher: 'Bosco-Orn',
    starRate: { rate: 1.9, rateNum: 30, rateBuyerNum: 1 },
    rentalPrice: 501,
    rentalSalePercent: 28,
    buyPrice: 37970,
    buySalePercent: 2,
    count: 17,
    freeCount: 2,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: false,
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    index: 'Nulla ut erat id mauris vulputate elementum.',
    lastlyRead: '2021-08-05',
  },
  {
    id: 127,
    thumbnail: '',
    type: 'webNovel',
    category: ['romance', 'history'],
    title: 'SAP HR',
    author: {
      name: 'Killie Twinn',
      awards: ['Cummerata, Tillman and Jacobi', 'Kub Inc'],
      representatives: [
        {
          name: 'JAXB',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'Equity Research',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'WTL',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'MyFaces',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        { name: 'CP', thumbnail: '' },
        {
          name: 'LGBT Rights',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    },
    translator: {
      name: 'Karee Ratledge',
      nationality: 'North Korea',
      career: 'Reilly-Pfeffer',
      representatives: [
        {
          name: 'RPC',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Production Efficiency',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'DMS-100',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Commercial Aviation',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction:
        'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    },
    publisher: 'Murphy, McKenzie and Krajcik',
    starRate: { rate: 0.5, rateNum: 62, rateBuyerNum: 13 },
    rentalPrice: 904,
    rentalSalePercent: 11,
    buyPrice: 16377,
    buySalePercent: 25,
    count: 8,
    freeCount: 7,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: false,
    description: 'Sed ante.',
    index:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    lastlyRead: '2021-09-03',
  },
  {
    id: 128,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
    type: 'webNovel',
    category: ['thriller'],
    title: 'LDAP Administration',
    author: {
      name: 'Theodor Liddle',
      awards: [
        'Deckow, Walker and Balistreri',
        'Mertz LLC',
        'Orn, Bauch and Treutel',
      ],
      representatives: [
        {
          name: 'Get Along Well with Others',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Yardi Voyager',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Valves',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Executive Management',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Utility Regulation',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'iLife',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    },
    translator: {
      name: 'Lew Presswell',
      nationality: 'North Korea',
      career: 'Boehm Group',
      representatives: [
        {
          name: 'SBMS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Nslookup',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'LSAMS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
      ],
      introduction:
        'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    },
    publisher: 'Schamberger, Abshire and Waelchi',
    starRate: { rate: 4.6, rateNum: 67, rateBuyerNum: 4 },
    rentalPrice: 1054,
    rentalSalePercent: 40,
    buyPrice: 18263,
    buySalePercent: 33,
    count: 29,
    freeCount: 1,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: false,
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    index:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    lastlyRead: '2021-05-29',
  },
  {
    id: 129,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
    type: 'novel',
    category: ['detective', 'fantasy'],
    title: 'PMC',
    author: {
      name: 'Melisa Dunston',
      awards: ['Fahey and Sons', 'Kris, Deckow and Franecki', 'Blick Inc'],
      representatives: [],
      introduction:
        'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    },
    translator: {
      name: 'Ariel Etter',
      nationality: 'North Korea',
      career: 'Littel Group',
      representatives: [
        {
          name: 'Mutual Funds',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'WSGI',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'HCV',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'MBS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        { name: 'Pyramid', thumbnail: '' },
      ],
      introduction:
        'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    },
    publisher: 'Howe LLC',
    starRate: { rate: 4.1, rateNum: 75, rateBuyerNum: 5 },
    rentalPrice: 1290,
    rentalSalePercent: 36,
    buyPrice: 42867,
    buySalePercent: 42,
    count: 9,
    freeCount: 7,
    isFinished: true,
    canRent: false,
    waitFree: true,
    xRated: true,
    description: 'Proin interdum mauris non ligula pellentesque ultrices.',
    index:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    lastlyRead: '2020-11-11',
  },
  {
    id: 130,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
    type: 'webNovel',
    category: ['society', 'sf'],
    title: 'Small Business Marketing',
    author: {
      name: 'Raymond Whenham',
      awards: ['Romaguera Group'],
      representatives: [],
      introduction:
        'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    },
    translator: {
      name: 'Martin Morehall',
      nationality: 'North Korea',
      career: 'Hudson Inc',
      representatives: [
        {
          name: 'DV Cleared',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction:
        'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    },
    publisher: 'Doyle Group',
    starRate: { rate: 4.6, rateNum: 73, rateBuyerNum: 13 },
    rentalPrice: 501,
    rentalSalePercent: 41,
    buyPrice: 54960,
    buySalePercent: 1,
    count: 6,
    freeCount: 8,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: false,
    description: 'Sed ante.',
    index:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    lastlyRead: '2020-12-19',
  },
  {
    id: 131,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
    type: 'novel',
    category: ['fantasy'],
    title: 'DFMA',
    author: {
      name: 'Delcine Taveriner',
      awards: ['Okuneva and Sons', 'Hilll LLC', 'Paucek LLC'],
      representatives: [
        {
          name: 'ETFs',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Grants',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction:
        'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    },
    translator: {
      name: 'Gilberte Reddings',
      nationality: 'North Korea',
      career: 'Mante-Kub',
      representatives: [],
      introduction:
        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    },
    publisher: 'Kling-Cummerata',
    starRate: { rate: 0.7, rateNum: 64, rateBuyerNum: 27 },
    rentalPrice: 1273,
    rentalSalePercent: 4,
    buyPrice: 46155,
    buySalePercent: 27,
    count: 22,
    freeCount: 2,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: true,
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    index:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    lastlyRead: '2021-03-11',
  },
  {
    id: 132,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
    type: 'ebook',
    category: ['history', 'thriller'],
    title: 'HVDC',
    author: {
      name: 'Henrieta Littleton',
      awards: ['White-Gleason', 'Dach Group'],
      representatives: [
        {
          name: 'JTAPI',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
      ],
      introduction:
        'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    },
    translator: {
      name: 'Deloria Basilio',
      nationality: 'North Korea',
      career: 'Pacocha, Gerhold and McDermott',
      representatives: [
        {
          name: 'Data Entry',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Geological Mapping',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'GML',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    },
    publisher: 'Connelly, Prohaska and Simonis',
    starRate: { rate: 0.0, rateNum: 46, rateBuyerNum: 24 },
    rentalPrice: 409,
    rentalSalePercent: 23,
    buyPrice: 10670,
    buySalePercent: 32,
    count: 7,
    freeCount: 4,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: true,
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    index:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    lastlyRead: '2021-02-02',
  },
  {
    id: 133,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
    type: 'novel',
    category: ['detective', 'society'],
    title: 'Onshore',
    author: {
      name: 'Anjela Skoof',
      awards: ['Jacobson-Glover', 'Reilly-Goodwin'],
      representatives: [],
      introduction:
        'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    },
    translator: {
      name: 'Gerhardine Sives',
      nationality: 'North Korea',
      career: 'Padberg LLC',
      representatives: [
        {
          name: 'Youth Programs',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'LLDP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
      ],
      introduction:
        'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    },
    publisher: 'Connelly Inc',
    starRate: { rate: 1.9, rateNum: 73, rateBuyerNum: 25 },
    rentalPrice: 638,
    rentalSalePercent: 28,
    buyPrice: 55939,
    buySalePercent: 20,
    count: 4,
    freeCount: 0,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: false,
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    index:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    lastlyRead: '2021-10-16',
  },
  {
    id: 134,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
    type: 'novel',
    category: ['history'],
    title: 'Urban Geography',
    author: {
      name: 'Belinda Elner',
      awards: ['Macejkovic and Sons'],
      representatives: [
        {
          name: 'HDCAM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
      ],
      introduction:
        'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    },
    translator: {
      name: 'Niel Weaben',
      nationality: 'North Korea',
      career: 'Graham-Kuhn',
      representatives: [
        {
          name: 'JCT',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Outcomes Research',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Layout',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Foreign Trade Zone',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction:
        'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    },
    publisher: 'Halvorson Inc',
    starRate: { rate: 0.8, rateNum: 50, rateBuyerNum: 6 },
    rentalPrice: 209,
    rentalSalePercent: 32,
    buyPrice: 42890,
    buySalePercent: 11,
    count: 10,
    freeCount: 5,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: true,
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    index:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    lastlyRead: '2021-03-24',
  },
  {
    id: 135,
    thumbnail: '',
    type: 'ebook',
    category: ['fantasy', 'history'],
    title: 'ABR',
    author: {
      name: 'Filberto Truelock',
      awards: ['Baumbach and Sons'],
      representatives: [],
      introduction:
        'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    },
    translator: {
      name: 'Daffy Vere',
      nationality: 'North Korea',
      career: 'Schulist LLC',
      representatives: [
        {
          name: 'AX 2009',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Stage Make-up',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'Public Affairs',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
      ],
      introduction: 'Nulla suscipit ligula in lacus.',
    },
    publisher: 'Morar, Collins and Emmerich',
    starRate: { rate: 1.6, rateNum: 30, rateBuyerNum: 24 },
    rentalPrice: 680,
    rentalSalePercent: 46,
    buyPrice: 53411,
    buySalePercent: 49,
    count: 6,
    freeCount: 1,
    isFinished: true,
    canRent: true,
    waitFree: true,
    xRated: false,
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    index:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    lastlyRead: '2021-05-30',
  },
  {
    id: 136,
    thumbnail: '',
    type: 'ebook',
    category: ['thriller', 'detective'],
    title: 'Digital Photography',
    author: {
      name: 'Gordan Daltrey',
      awards: ['Powlowski-Kovacek'],
      representatives: [
        {
          name: 'MMC',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Product Management',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'OA Framework',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'SSL Certificates',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'ODM management',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    },
    translator: {
      name: 'Elsie Sidey',
      nationality: 'North Korea',
      career: 'Gutmann Inc',
      representatives: [
        {
          name: 'Twisted',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'eGain',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'VAS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'NRA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        { name: 'IAR', thumbnail: '' },
      ],
      introduction:
        'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
    publisher: 'Maggio-Corwin',
    starRate: { rate: 5.0, rateNum: 44, rateBuyerNum: 5 },
    rentalPrice: 243,
    rentalSalePercent: 1,
    buyPrice: 5491,
    buySalePercent: 8,
    count: 19,
    freeCount: 2,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: true,
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    index:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    lastlyRead: '2021-02-09',
  },
  {
    id: 137,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
    type: 'ebook',
    category: ['society'],
    title: 'VMware View',
    author: {
      name: 'Dory Alfuso',
      awards: ['Mills-Johns', 'Borer Group', 'Hermiston-Huel'],
      representatives: [
        {
          name: 'Apache ZooKeeper',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    },
    translator: {
      name: 'Magnum Mc Giffin',
      nationality: 'North Korea',
      career: 'Zieme, Moore and Douglas',
      representatives: [
        {
          name: 'EPC',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Customer Insight',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    },
    publisher: 'Monahan, Schamberger and Ullrich',
    starRate: { rate: 3.3, rateNum: 73, rateBuyerNum: 1 },
    rentalPrice: 586,
    rentalSalePercent: 43,
    buyPrice: 31865,
    buySalePercent: 2,
    count: 19,
    freeCount: 3,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: false,
    description: 'Fusce consequat.',
    index:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    lastlyRead: '2021-03-26',
  },
  {
    id: 138,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
    type: 'webNovel',
    category: ['society', 'humanities'],
    title: 'RRC',
    author: {
      name: 'Nefen Onyon',
      awards: ['Nolan-Brekke', 'Wuckert, McGlynn and Keebler'],
      representatives: [
        {
          name: 'Songwriting',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Forecasting',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    },
    translator: {
      name: 'Lloyd Pashbee',
      nationality: 'North Korea',
      career: 'Ledner LLC',
      representatives: [
        {
          name: 'BDD',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Counseling Psychology',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'VLSM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'HP Data Protector',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    },
    publisher: 'McClure Inc',
    starRate: { rate: 4.3, rateNum: 30, rateBuyerNum: 11 },
    rentalPrice: 260,
    rentalSalePercent: 3,
    buyPrice: 38148,
    buySalePercent: 12,
    count: 9,
    freeCount: 10,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    index:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    lastlyRead: '2021-10-30',
  },
  {
    id: 139,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
    type: 'webNovel',
    category: ['detective'],
    title: 'Karaoke',
    author: {
      name: 'Joane Bridgwood',
      awards: ['Harvey and Sons', 'Spencer-Carroll'],
      representatives: [
        {
          name: 'HDPE',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'FF&amp;E Procurement',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    },
    translator: {
      name: 'Ray Ondracek',
      nationality: 'North Korea',
      career: 'Stroman-Keeling',
      representatives: [
        {
          name: 'Blackberry Enterprise Server',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'Full-life Cycle Recruiting',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction: 'In quis justo. Maecenas rhoncus aliquam lacus.',
    },
    publisher: 'Hickle-Ledner',
    starRate: { rate: 3.3, rateNum: 54, rateBuyerNum: 6 },
    rentalPrice: 964,
    rentalSalePercent: 28,
    buyPrice: 49329,
    buySalePercent: 26,
    count: 2,
    freeCount: 0,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    index:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    lastlyRead: '2020-11-06',
  },
  {
    id: 140,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
    type: 'webNovel',
    category: ['fantasy', 'sf'],
    title: 'PVSyst',
    author: {
      name: 'Gael Catford',
      awards: [
        'Bogan-Tremblay',
        'Lueilwitz, Rohan and Wuckert',
        'Dibbert-Kozey',
      ],
      representatives: [
        {
          name: 'Scientific Writing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Museums',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Musical Theatre',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
      ],
      introduction:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    },
    translator: {
      name: 'Xylia Billie',
      nationality: 'North Korea',
      career: 'Bosco LLC',
      representatives: [
        {
          name: 'JAXB',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Visual Communication',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'SDS-PAGE',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Hyperion',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Aeroelasticity',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    },
    publisher: 'Hand, Padberg and Smith',
    starRate: { rate: 1.1, rateNum: 54, rateBuyerNum: 29 },
    rentalPrice: 1483,
    rentalSalePercent: 28,
    buyPrice: 20032,
    buySalePercent: 20,
    count: 11,
    freeCount: 9,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    index:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    lastlyRead: '2020-12-16',
  },
  {
    id: 141,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
    type: 'novel',
    category: ['society', 'fantasy'],
    title: 'DV Cleared',
    author: {
      name: 'Fallon Norman',
      awards: ['Wyman, Hagenes and Lebsack'],
      representatives: [
        {
          name: 'Digital Strategy',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        { name: 'eCTD', thumbnail: '' },
        {
          name: 'EOR',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Software Documentation',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction: 'Etiam pretium iaculis justo.',
    },
    translator: {
      name: 'Kizzie Northen',
      nationality: 'North Korea',
      career: 'Zulauf, Schoen and Bailey',
      representatives: [
        {
          name: 'ICP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
      ],
      introduction:
        'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    },
    publisher: 'Cartwright and Sons',
    starRate: { rate: 1.9, rateNum: 38, rateBuyerNum: 26 },
    rentalPrice: 1151,
    rentalSalePercent: 21,
    buyPrice: 29405,
    buySalePercent: 24,
    count: 7,
    freeCount: 1,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    index:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    lastlyRead: '2020-11-29',
  },
  {
    id: 142,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
    type: 'ebook',
    category: ['fantasy', 'romance'],
    title: 'GWAPT',
    author: {
      name: 'Sigismundo Nizet',
      awards: ['Yost and Sons', 'Hansen, Stehr and Kulas'],
      representatives: [
        { name: 'Rational XDE', thumbnail: '' },
        { name: 'Permanent Placement', thumbnail: '' },
        { name: 'Credit', thumbnail: '' },
        { name: 'FCAPS', thumbnail: '' },
        { name: 'SLC500', thumbnail: '' },
      ],
      introduction:
        'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    },
    translator: {
      name: 'Ashien Kahler',
      nationality: 'North Korea',
      career: 'Blanda, Daniel and Effertz',
      representatives: [
        { name: 'LWUIT', thumbnail: '' },
        {
          name: 'PKCS#11',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Air Compressors',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
      ],
      introduction:
        'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    },
    publisher: 'Hackett Inc',
    starRate: { rate: 4.8, rateNum: 49, rateBuyerNum: 20 },
    rentalPrice: 742,
    rentalSalePercent: 4,
    buyPrice: 47906,
    buySalePercent: 15,
    count: 1,
    freeCount: 0,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: true,
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    index: 'Etiam vel augue.',
    lastlyRead: '2021-02-27',
  },
  {
    id: 143,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
    type: 'novel',
    category: ['history'],
    title: 'Online Reputation Management',
    author: {
      name: 'Curry Pettit',
      awards: ['Weber Inc'],
      representatives: [
        {
          name: 'PFT',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'JIS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Yiddish',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'DLX',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'White Box Testing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'XML Sitemaps',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    },
    translator: {
      name: 'Rosabella Sanchez',
      nationality: 'North Korea',
      career: 'Welch LLC',
      representatives: [
        {
          name: 'CT Summation',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'OTM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'IEC 62304',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Group Policy',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    },
    publisher: 'Jaskolski Inc',
    starRate: { rate: 2.4, rateNum: 53, rateBuyerNum: 2 },
    rentalPrice: 825,
    rentalSalePercent: 39,
    buyPrice: 26121,
    buySalePercent: 43,
    count: 19,
    freeCount: 4,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: true,
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    index:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    lastlyRead: '2020-12-25',
  },
  {
    id: 144,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
    type: 'novel',
    category: ['romance'],
    title: 'DDIC',
    author: {
      name: 'Laurianne Howes',
      awards: ['Flatley-Ziemann'],
      representatives: [
        {
          name: 'Luminex',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Sustainable Agriculture',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction:
        'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    },
    translator: {
      name: 'Salvador Wright',
      nationality: 'North Korea',
      career: 'Pacocha-Crist',
      representatives: [
        {
          name: 'Procurement',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'Payment by Results',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Medical Writing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Flights',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
      ],
      introduction:
        'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    },
    publisher: 'Little-Beatty',
    starRate: { rate: 1.4, rateNum: 66, rateBuyerNum: 6 },
    rentalPrice: 875,
    rentalSalePercent: 34,
    buyPrice: 32308,
    buySalePercent: 30,
    count: 16,
    freeCount: 4,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: false,
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    index:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    lastlyRead: '2021-08-03',
  },
  {
    id: 145,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
    type: 'ebook',
    category: ['detective'],
    title: 'Data Migration',
    author: {
      name: 'Cristi Kneal',
      awards: ['McKenzie-VonRueden', 'Leuschke and Sons'],
      representatives: [
        {
          name: 'PMI',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'RNAseq',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Critical Care',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction:
        'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    },
    translator: {
      name: 'Leon Klejna',
      nationality: 'North Korea',
      career: 'Gislason, Cummings and Marvin',
      representatives: [
        {
          name: 'PMO Services',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Technical Recruiting',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'Outplacement',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    },
    publisher: 'Stroman-Lehner',
    starRate: { rate: 0.4, rateNum: 78, rateBuyerNum: 3 },
    rentalPrice: 1228,
    rentalSalePercent: 45,
    buyPrice: 57624,
    buySalePercent: 41,
    count: 21,
    freeCount: 4,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: true,
    description: 'Nulla tellus.',
    index:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    lastlyRead: '2021-06-26',
  },
  {
    id: 146,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
    type: 'ebook',
    category: ['society'],
    title: 'Technical Recruiting',
    author: {
      name: 'Hodge Pinchback',
      awards: ['Lubowitz-Hayes', 'Adams and Sons', 'Klein-Stokes'],
      representatives: [
        {
          name: 'Bioinformatics',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'MDSD',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'TSM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Banners',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    },
    translator: {
      name: 'Juieta Turley',
      nationality: 'North Korea',
      career: 'Morar-Haley',
      representatives: [
        {
          name: 'Team Management',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Euphonium',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    },
    publisher: 'Anderson, Bins and Wisoky',
    starRate: { rate: 2.0, rateNum: 48, rateBuyerNum: 26 },
    rentalPrice: 1039,
    rentalSalePercent: 19,
    buyPrice: 19239,
    buySalePercent: 38,
    count: 18,
    freeCount: 5,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: true,
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    index:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    lastlyRead: '2021-04-20',
  },
  {
    id: 147,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
    type: 'ebook',
    category: ['fantasy', 'detective'],
    title: 'PPPoE',
    author: {
      name: 'Ryon Tootell',
      awards: ['Hansen-Schamberger', 'Grant, Stiedemann and Sipes'],
      representatives: [
        {
          name: 'Omnet++',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'CMMI',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'eGain',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Publishing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
      ],
      introduction:
        'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    },
    translator: {
      name: 'Lindi Siebert',
      nationality: 'North Korea',
      career: 'Kuhlman, Braun and Purdy',
      representatives: [
        {
          name: 'Location Intelligence',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'VLSI CAD',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'Jeans',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Kernel Programming',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction: 'In congue.',
    },
    publisher: 'Kovacek Group',
    starRate: { rate: 4.5, rateNum: 34, rateBuyerNum: 1 },
    rentalPrice: 323,
    rentalSalePercent: 47,
    buyPrice: 28102,
    buySalePercent: 18,
    count: 25,
    freeCount: 4,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: true,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    index:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    lastlyRead: '2021-03-18',
  },
  {
    id: 148,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
    type: 'ebook',
    category: ['romance', 'thriller'],
    title: 'Econometrics',
    author: {
      name: 'Shanie Azemar',
      awards: ['Lubowitz-Stoltenberg', 'Christiansen Inc'],
      representatives: [
        {
          name: 'Cell Biology',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Slide Shows',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'XFOIL',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Appointment Scheduling',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Healthcare Information Technology',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    },
    translator: {
      name: 'Rosco Towse',
      nationality: 'North Korea',
      career: 'Dooley-Cummings',
      representatives: [],
      introduction:
        'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    },
    publisher: 'Olson, Farrell and Rogahn',
    starRate: { rate: 3.9, rateNum: 79, rateBuyerNum: 19 },
    rentalPrice: 1260,
    rentalSalePercent: 33,
    buyPrice: 47232,
    buySalePercent: 40,
    count: 2,
    freeCount: 8,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: false,
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    index:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    lastlyRead: '2021-08-12',
  },
  {
    id: 149,
    thumbnail: '',
    type: 'novel',
    category: ['humanities'],
    title: 'Rock Mechanics',
    author: {
      name: 'Winny Ivantsov',
      awards: ['Lind, Kertzmann and Hand'],
      representatives: [
        {
          name: 'NRC',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Curriculum Design',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Brokerage',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'TCPA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    },
    translator: {
      name: 'Kelci Jacobowitz',
      nationality: 'North Korea',
      career: 'Kuphal Group',
      representatives: [
        {
          name: 'Social TV',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
      ],
      introduction:
        'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    publisher: 'Treutel, Lemke and Reichert',
    starRate: { rate: 1.4, rateNum: 50, rateBuyerNum: 27 },
    rentalPrice: 383,
    rentalSalePercent: 49,
    buyPrice: 53479,
    buySalePercent: 42,
    count: 9,
    freeCount: 9,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: true,
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    index:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    lastlyRead: '2021-07-14',
  },
  {
    id: 150,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
    type: 'webNovel',
    category: ['romance'],
    title: 'iPhone Application Development',
    author: {
      name: 'Elene Hagland',
      awards: ['Dibbert-Cronin', 'Zemlak Inc', 'Schroeder-Beer'],
      representatives: [
        {
          name: 'Kurdish',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'uCOS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    },
    translator: {
      name: 'Noellyn Collinge',
      nationality: 'North Korea',
      career: 'Hodkiewicz, Stamm and Hayes',
      representatives: [
        {
          name: 'SQL*Plus',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'VAT',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    },
    publisher: 'Durgan-Dickinson',
    starRate: { rate: 1.4, rateNum: 57, rateBuyerNum: 8 },
    rentalPrice: 901,
    rentalSalePercent: 39,
    buyPrice: 35114,
    buySalePercent: 21,
    count: 30,
    freeCount: 7,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    index:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    lastlyRead: '2021-03-15',
  },
  {
    id: 151,
    thumbnail: '',
    type: 'webNovel',
    category: ['fantasy', 'thriller'],
    title: 'global HCM',
    author: {
      name: 'Kahlil Pirt',
      awards: ['Nitzsche, Kohler and Nolan', 'Homenick-Cole'],
      representatives: [
        {
          name: 'HDLC',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction: 'Aliquam non mauris.',
    },
    translator: {
      name: 'Clayborne Magnay',
      nationality: 'North Korea',
      career: 'Schimmel and Sons',
      representatives: [
        {
          name: 'Feature Writing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'GWAS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'DxDesigner',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
      ],
      introduction:
        'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    },
    publisher: 'Gleichner LLC',
    starRate: { rate: 1.8, rateNum: 45, rateBuyerNum: 29 },
    rentalPrice: 294,
    rentalSalePercent: 0,
    buyPrice: 48248,
    buySalePercent: 8,
    count: 17,
    freeCount: 7,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: false,
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    index:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    lastlyRead: '2021-07-26',
  },
  {
    id: 152,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
    type: 'webNovel',
    category: ['romance', 'detective'],
    title: 'BMD',
    author: {
      name: 'Domingo Batt',
      awards: ['Koelpin-Cruickshank', 'Murazik and Sons'],
      representatives: [
        {
          name: 'Ocean Freight',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'DNS Management',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Electrical Controls',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'KWP2000',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Ticket Sales',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'DVD',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    },
    translator: {
      name: 'Walker Attoc',
      nationality: 'North Korea',
      career: "D'Amore-Altenwerth",
      representatives: [
        {
          name: 'Flatbed',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'Ab Initio',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    },
    publisher: 'Hartmann-Mann',
    starRate: { rate: 3.7, rateNum: 57, rateBuyerNum: 18 },
    rentalPrice: 1347,
    rentalSalePercent: 16,
    buyPrice: 37398,
    buySalePercent: 10,
    count: 25,
    freeCount: 1,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: false,
    description: 'Curabitur convallis.',
    index:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    lastlyRead: '2021-03-28',
  },
  {
    id: 153,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
    type: 'novel',
    category: ['humanities'],
    title: 'Book Design',
    author: {
      name: 'Tarah Spadeck',
      awards: ['Johns-Ritchie'],
      representatives: [
        {
          name: 'Airline Ticketing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction:
        'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    translator: {
      name: 'Hildagard Hazley',
      nationality: 'North Korea',
      career: 'Lesch-Rutherford',
      representatives: [
        {
          name: 'BTE',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        { name: 'Urinalysis', thumbnail: '' },
      ],
      introduction:
        'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    },
    publisher: 'Stoltenberg-Wyman',
    starRate: { rate: 2.1, rateNum: 48, rateBuyerNum: 14 },
    rentalPrice: 1288,
    rentalSalePercent: 42,
    buyPrice: 27583,
    buySalePercent: 23,
    count: 22,
    freeCount: 4,
    isFinished: true,
    canRent: true,
    waitFree: true,
    xRated: false,
    description: 'Vivamus tortor. Duis mattis egestas metus.',
    index:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    lastlyRead: '2020-11-07',
  },
  {
    id: 154,
    thumbnail: '',
    type: 'novel',
    category: ['society', 'sf'],
    title: 'Hands-on Training',
    author: {
      name: 'Rock Clyant',
      awards: ['Hoeger Inc'],
      representatives: [],
      introduction:
        'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    },
    translator: {
      name: 'Diego Longmuir',
      nationality: 'North Korea',
      career: 'Rath Group',
      representatives: [
        {
          name: 'JWICS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Root Cause Analysis',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'LDAR',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        { name: 'CNOR', thumbnail: '' },
      ],
      introduction:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    },
    publisher: 'Carter and Sons',
    starRate: { rate: 2.4, rateNum: 50, rateBuyerNum: 26 },
    rentalPrice: 335,
    rentalSalePercent: 32,
    buyPrice: 47324,
    buySalePercent: 2,
    count: 7,
    freeCount: 9,
    isFinished: true,
    canRent: true,
    waitFree: true,
    xRated: true,
    description: 'Morbi porttitor lorem id ligula.',
    index:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    lastlyRead: '2021-08-12',
  },
  {
    id: 155,
    thumbnail: '',
    type: 'webNovel',
    category: ['humanities', 'fantasy'],
    title: 'PWE3',
    author: {
      name: 'Phelia Scneider',
      awards: ['Denesik-Kunze', 'Hudson, Bailey and Hegmann'],
      representatives: [
        {
          name: 'Videography',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'CMMS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'Hydropower',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'VMware Player',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    },
    translator: {
      name: 'Hansiain Leworthy',
      nationality: 'North Korea',
      career: 'Bode-Klocko',
      representatives: [
        {
          name: 'Branding &amp; Identity',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Hearings',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Jasper Reports',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'C-TPAT',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    },
    publisher: 'Willms LLC',
    starRate: { rate: 3.5, rateNum: 42, rateBuyerNum: 5 },
    rentalPrice: 183,
    rentalSalePercent: 39,
    buyPrice: 54754,
    buySalePercent: 49,
    count: 21,
    freeCount: 8,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: false,
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    index:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    lastlyRead: '2021-10-31',
  },
  {
    id: 156,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
    type: 'ebook',
    category: ['detective', 'fantasy'],
    title: 'RFID',
    author: {
      name: 'Timmi Treat',
      awards: ['Hartmann-Fahey', 'Shields LLC', 'Steuber-Emmerich'],
      representatives: [
        {
          name: 'NRSWA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'Recruitment Advertising',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'CTF',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'TGI',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'TFTP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    },
    translator: {
      name: 'Taffy Trenbay',
      nationality: 'North Korea',
      career: 'Kutch-Zemlak',
      representatives: [],
      introduction:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    },
    publisher: 'Cruickshank and Sons',
    starRate: { rate: 2.9, rateNum: 68, rateBuyerNum: 11 },
    rentalPrice: 1365,
    rentalSalePercent: 13,
    buyPrice: 29495,
    buySalePercent: 47,
    count: 12,
    freeCount: 3,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    index: 'Integer tincidunt ante vel ipsum.',
    lastlyRead: '2021-01-09',
  },
  {
    id: 157,
    thumbnail: '',
    type: 'webNovel',
    category: ['romance'],
    title: 'Feature Articles',
    author: {
      name: 'Myrna Safell',
      awards: [
        'Swift, Ondricka and Leannon',
        'Gibson Inc',
        'Watsica, Cronin and Considine',
      ],
      representatives: [
        { name: 'Errors &amp; Omissions', thumbnail: '' },
        { name: 'HR Transformation', thumbnail: '' },
        { name: 'Keratin Treatment', thumbnail: '' },
      ],
      introduction:
        'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    },
    translator: {
      name: 'Karolina Ryson',
      nationality: 'North Korea',
      career: 'Padberg-Frami',
      representatives: [
        {
          name: 'Cross-functional Team Leadership',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction:
        'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    },
    publisher: 'Walker-Dibbert',
    starRate: { rate: 3.6, rateNum: 72, rateBuyerNum: 8 },
    rentalPrice: 1238,
    rentalSalePercent: 6,
    buyPrice: 8654,
    buySalePercent: 48,
    count: 26,
    freeCount: 6,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: true,
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    index:
      'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    lastlyRead: '2021-05-14',
  },
  {
    id: 158,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
    type: 'ebook',
    category: ['history'],
    title: 'Order Picking',
    author: {
      name: 'Arlee Farrell',
      awards: ['Armstrong, Dickinson and Donnelly'],
      representatives: [
        {
          name: 'Recruitment Advertising',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Statistics',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Aquatic Ecology',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Juniper Technologies',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'Mobile Games',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction:
        'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    },
    translator: {
      name: 'Giulia Tooting',
      nationality: 'North Korea',
      career: 'Conn, Champlin and Howell',
      representatives: [
        {
          name: 'Visual Basic',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'NBFC',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Revenue Cycle Management',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    },
    publisher: 'Mertz, Marquardt and Waelchi',
    starRate: { rate: 4.5, rateNum: 74, rateBuyerNum: 0 },
    rentalPrice: 976,
    rentalSalePercent: 4,
    buyPrice: 18940,
    buySalePercent: 24,
    count: 9,
    freeCount: 10,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: true,
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    index:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    lastlyRead: '2021-07-10',
  },
  {
    id: 159,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
    type: 'webNovel',
    category: ['humanities', 'detective'],
    title: 'Software Design',
    author: {
      name: 'Arty Lafranconi',
      awards: ['Nitzsche-Donnelly', 'Kunze, Paucek and Borer'],
      representatives: [
        {
          name: 'VMware',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        { name: 'IGCC', thumbnail: '' },
        {
          name: 'Benefits Administration',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Gas Chromatography',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Employee Relations',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'QRM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
      ],
      introduction:
        'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    },
    translator: {
      name: 'Fidel Twitching',
      nationality: 'North Korea',
      career: 'Prosacco-Metz',
      representatives: [
        {
          name: 'WTL',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'At Multitasking',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
      ],
      introduction:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    },
    publisher: 'Collier and Sons',
    starRate: { rate: 1.5, rateNum: 52, rateBuyerNum: 25 },
    rentalPrice: 181,
    rentalSalePercent: 5,
    buyPrice: 24438,
    buySalePercent: 38,
    count: 30,
    freeCount: 9,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: false,
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    index:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    lastlyRead: '2021-08-07',
  },
  {
    id: 160,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
    type: 'webNovel',
    category: ['detective'],
    title: 'Youth Development',
    author: {
      name: 'Claudine Corrie',
      awards: ['Kessler, Rau and Pagac', 'Cole Inc'],
      representatives: [
        {
          name: 'FTL',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'CTD',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'RPD',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'FTSE 100',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'NWDS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Ideas NX',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction:
        'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    },
    translator: {
      name: 'Arnoldo Dickings',
      nationality: 'North Korea',
      career: 'Howe Group',
      representatives: [],
      introduction:
        'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    },
    publisher: 'Gutmann, Heller and Monahan',
    starRate: { rate: 0.2, rateNum: 63, rateBuyerNum: 21 },
    rentalPrice: 1015,
    rentalSalePercent: 9,
    buyPrice: 32226,
    buySalePercent: 34,
    count: 14,
    freeCount: 3,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    index:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    lastlyRead: '2020-11-22',
  },
  {
    id: 161,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
    type: 'webNovel',
    category: ['romance'],
    title: 'Voice Acting',
    author: {
      name: 'Rena Eglaise',
      awards: ['Swift and Sons'],
      representatives: [
        {
          name: 'WiMAX',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'NCFM Certified',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'UV-Vis-NIR',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Advertising',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'CFK',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'PPPoE',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction:
        'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    },
    translator: {
      name: 'Sidonnie McLucky',
      nationality: 'North Korea',
      career: 'Willms, Kemmer and Pollich',
      representatives: [
        {
          name: 'Essential Oils',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'P&amp;ID',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'HFM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'CNAS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'Quality Assurance',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction:
        'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    },
    publisher: 'Turner Group',
    starRate: { rate: 3.9, rateNum: 54, rateBuyerNum: 17 },
    rentalPrice: 779,
    rentalSalePercent: 10,
    buyPrice: 29201,
    buySalePercent: 33,
    count: 4,
    freeCount: 9,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: false,
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    index:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    lastlyRead: '2021-06-18',
  },
  {
    id: 162,
    thumbnail: '',
    type: 'novel',
    category: ['society', 'humanities'],
    title: 'MBE',
    author: {
      name: 'Anna Juanico',
      awards: ['Cormier-Pfeffer'],
      representatives: [
        {
          name: 'Health Education',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'BTO',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'Aftersales',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Kronos Timekeeping',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
      ],
      introduction:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
    translator: {
      name: 'Aimee Marchelli',
      nationality: 'North Korea',
      career: 'Kreiger-Bogisich',
      representatives: [
        {
          name: 'UPS Shipping',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction:
        'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    },
    publisher: 'Kuhlman, Lockman and Lesch',
    starRate: { rate: 3.6, rateNum: 50, rateBuyerNum: 10 },
    rentalPrice: 139,
    rentalSalePercent: 13,
    buyPrice: 13943,
    buySalePercent: 49,
    count: 5,
    freeCount: 7,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: true,
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    index:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    lastlyRead: '2021-07-08',
  },
  {
    id: 163,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
    type: 'webNovel',
    category: ['thriller', 'sf'],
    title: 'Art Direction',
    author: {
      name: 'Allyn Alfuso',
      awards: ['Stanton LLC', 'Rodriguez Group'],
      representatives: [
        {
          name: 'Microsoft Exchange',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'MRAM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'USB',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'UAT Coordination',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'LTO',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    },
    translator: {
      name: 'Mab Ionesco',
      nationality: 'North Korea',
      career: 'Lehner-Strosin',
      representatives: [
        {
          name: 'Get Along Well with Others',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'GFI',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'SharePoint',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Occlusion',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    },
    publisher: 'Cummerata, Lesch and Harber',
    starRate: { rate: 2.8, rateNum: 62, rateBuyerNum: 23 },
    rentalPrice: 1161,
    rentalSalePercent: 23,
    buyPrice: 30347,
    buySalePercent: 50,
    count: 20,
    freeCount: 1,
    isFinished: true,
    canRent: true,
    waitFree: true,
    xRated: false,
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    index:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    lastlyRead: '2021-07-04',
  },
  {
    id: 164,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
    type: 'ebook',
    category: ['fantasy', 'sf'],
    title: 'Zone Alarm',
    author: {
      name: 'Penny Cake',
      awards: ['Crona, Jenkins and Daugherty', 'Jacobi-Schaefer'],
      representatives: [
        {
          name: 'Whole Life',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    },
    translator: {
      name: 'Van Karolyi',
      nationality: 'North Korea',
      career: 'Kilback Inc',
      representatives: [
        {
          name: 'VMware View',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'JWICS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
      ],
      introduction:
        'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    },
    publisher: 'Haley, Rosenbaum and Feeney',
    starRate: { rate: 4.3, rateNum: 41, rateBuyerNum: 26 },
    rentalPrice: 861,
    rentalSalePercent: 8,
    buyPrice: 31820,
    buySalePercent: 0,
    count: 21,
    freeCount: 3,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: true,
    description:
      'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    index:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    lastlyRead: '2020-11-25',
  },
  {
    id: 165,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
    type: 'novel',
    category: ['fantasy', 'thriller'],
    title: 'CDM',
    author: {
      name: 'Aurthur Sleep',
      awards: ['Kovacek Group'],
      representatives: [],
      introduction:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    },
    translator: {
      name: 'Arron Corkel',
      nationality: 'North Korea',
      career: 'Reilly, Kunze and McLaughlin',
      representatives: [
        {
          name: 'Operational Risk',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'OTV',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        { name: 'Ultrasonic Testing', thumbnail: '' },
      ],
      introduction:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    },
    publisher: 'Larson-Macejkovic',
    starRate: { rate: 4.6, rateNum: 73, rateBuyerNum: 1 },
    rentalPrice: 778,
    rentalSalePercent: 2,
    buyPrice: 51807,
    buySalePercent: 38,
    count: 17,
    freeCount: 5,
    isFinished: true,
    canRent: true,
    waitFree: true,
    xRated: false,
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    index:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    lastlyRead: '2021-06-23',
  },
  {
    id: 166,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
    type: 'ebook',
    category: ['detective', 'history'],
    title: 'MVA',
    author: {
      name: 'Latia Culshew',
      awards: ['Miller Inc'],
      representatives: [
        {
          name: 'PDMS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'KRAs',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Gnome',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        { name: 'PMD', thumbnail: '' },
        {
          name: 'Emergency Room',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Tax Advisory',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction: 'Duis consequat dui nec nisi volutpat eleifend.',
    },
    translator: {
      name: 'Cody Sollner',
      nationality: 'North Korea',
      career: 'Herman-Crist',
      representatives: [
        {
          name: 'NCIDQ',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        { name: 'Executive Protection', thumbnail: '' },
        { name: 'Finance', thumbnail: '' },
        {
          name: 'FSP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'HBDI',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    },
    publisher: 'Miller, Donnelly and Barton',
    starRate: { rate: 1.9, rateNum: 68, rateBuyerNum: 21 },
    rentalPrice: 371,
    rentalSalePercent: 47,
    buyPrice: 59847,
    buySalePercent: 50,
    count: 10,
    freeCount: 4,
    isFinished: true,
    canRent: false,
    waitFree: true,
    xRated: true,
    description:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    index:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    lastlyRead: '2021-08-31',
  },
  {
    id: 167,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
    type: 'webNovel',
    category: ['detective'],
    title: 'CMS-1500',
    author: {
      name: 'Nevin Hane',
      awards: [
        'Kerluke Inc',
        'Batz, Barrows and Swift',
        'Beahan, Shanahan and Hammes',
      ],
      representatives: [
        {
          name: 'Steam Turbines',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Outpatient Orthopedics',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'US GAAP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Embedded Systems',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
    translator: {
      name: 'Stefanie Lanfranchi',
      nationality: 'North Korea',
      career: 'Schamberger, Price and Stracke',
      representatives: [
        {
          name: 'FrameMaker',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'mLearning',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction: 'Vestibulum sed magna at nunc commodo placerat.',
    },
    publisher: 'Zboncak, Mann and Turcotte',
    starRate: { rate: 4.0, rateNum: 69, rateBuyerNum: 15 },
    rentalPrice: 906,
    rentalSalePercent: 41,
    buyPrice: 16420,
    buySalePercent: 29,
    count: 28,
    freeCount: 9,
    isFinished: true,
    canRent: true,
    waitFree: true,
    xRated: false,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    index:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    lastlyRead: '2021-01-13',
  },
  {
    id: 168,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
    type: 'webNovel',
    category: ['sf', 'humanities'],
    title: 'Legal Writing',
    author: {
      name: 'Melessa Nesey',
      awards: [
        'Harris, Kassulke and Dibbert',
        'Larkin and Sons',
        "D'Amore, Auer and Wisozk",
      ],
      representatives: [
        {
          name: 'Eagle PCB',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Oilfield',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Multiplex PCR',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'solid-state NMR',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction:
        'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    },
    translator: {
      name: 'Kate Canedo',
      nationality: 'North Korea',
      career: 'Bogan Group',
      representatives: [
        {
          name: 'AV',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'ZK',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Office Equipment',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'AMBA AHB',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    },
    publisher: 'Braun, Gutmann and Weimann',
    starRate: { rate: 3.7, rateNum: 54, rateBuyerNum: 21 },
    rentalPrice: 402,
    rentalSalePercent: 9,
    buyPrice: 45252,
    buySalePercent: 4,
    count: 19,
    freeCount: 6,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: true,
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    index: 'Fusce consequat.',
    lastlyRead: '2021-02-21',
  },
  {
    id: 169,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
    type: 'webNovel',
    category: ['sf', 'detective'],
    title: 'XPDL',
    author: {
      name: 'Vyky Reschke',
      awards: ['Baumbach, Dietrich and Emard'],
      representatives: [
        {
          name: 'Object Pascal',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction: 'Phasellus sit amet erat. Nulla tempus.',
    },
    translator: {
      name: 'Davita Durnian',
      nationality: 'North Korea',
      career: 'McDermott LLC',
      representatives: [
        {
          name: 'UK Corporation Tax',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Sqoop',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
      ],
      introduction: 'Nunc nisl.',
    },
    publisher: 'Carter Group',
    starRate: { rate: 2.3, rateNum: 63, rateBuyerNum: 23 },
    rentalPrice: 622,
    rentalSalePercent: 0,
    buyPrice: 35434,
    buySalePercent: 14,
    count: 21,
    freeCount: 3,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    index:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    lastlyRead: '2021-08-31',
  },
  {
    id: 170,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
    type: 'webNovel',
    category: ['thriller'],
    title: 'Switchboard Operator',
    author: {
      name: 'Christalle Juris',
      awards: ['Predovic, Pacocha and Fay', 'Mann, Greenfelder and Dibbert'],
      representatives: [
        {
          name: 'Generators',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        { name: 'Access', thumbnail: '' },
        {
          name: 'Topographic Surveys',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
      ],
      introduction:
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    },
    translator: {
      name: 'Nilson Hellwing',
      nationality: 'North Korea',
      career: 'Wyman-Padberg',
      representatives: [
        {
          name: 'Yacc',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        { name: 'Flex', thumbnail: '' },
        {
          name: 'Beer',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'PPPoA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Sun One LDAP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction:
        'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    },
    publisher: 'Sipes Group',
    starRate: { rate: 1.8, rateNum: 72, rateBuyerNum: 4 },
    rentalPrice: 415,
    rentalSalePercent: 7,
    buyPrice: 55361,
    buySalePercent: 33,
    count: 14,
    freeCount: 2,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    index: 'Ut at dolor quis odio consequat varius. Integer ac leo.',
    lastlyRead: '2021-02-01',
  },
  {
    id: 171,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
    type: 'ebook',
    category: ['history'],
    title: 'VPP',
    author: {
      name: 'David Ambrogini',
      awards: ['Spinka Group', 'Pfeffer, Feil and Pagac', 'Jerde LLC'],
      representatives: [
        { name: 'Krav Maga', thumbnail: '' },
        {
          name: 'iPhoto',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'Academic Tutoring',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'EWS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Myofascial',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction:
        'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    },
    translator: {
      name: 'Candice Napolitano',
      nationality: 'North Korea',
      career: 'Bartoletti-Cartwright',
      representatives: [],
      introduction:
        'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
    publisher: 'Hudson, Little and Smitham',
    starRate: { rate: 1.0, rateNum: 64, rateBuyerNum: 16 },
    rentalPrice: 530,
    rentalSalePercent: 2,
    buyPrice: 3558,
    buySalePercent: 16,
    count: 6,
    freeCount: 3,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    index:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    lastlyRead: '2021-01-18',
  },
  {
    id: 172,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
    type: 'novel',
    category: ['sf'],
    title: 'Software Documentation',
    author: {
      name: 'Lloyd Raymen',
      awards: ['Beier-Koss', 'Bruen, Becker and Schaefer', 'Mante-Nienow'],
      representatives: [
        {
          name: 'Union Avoidance',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Microsoft Dynamics ERP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'ATM Networks',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction:
        'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    },
    translator: {
      name: 'Godfry Spata',
      nationality: 'North Korea',
      career: 'Kirlin, Adams and McClure',
      representatives: [
        {
          name: 'Branch Banking',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'D3.js',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'UV coating',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Typeface Design',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Close Protection',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction:
        'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    },
    publisher: 'Johnston, Stark and Aufderhar',
    starRate: { rate: 2.4, rateNum: 37, rateBuyerNum: 21 },
    rentalPrice: 769,
    rentalSalePercent: 31,
    buyPrice: 10034,
    buySalePercent: 8,
    count: 7,
    freeCount: 2,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: false,
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    index:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    lastlyRead: '2021-10-03',
  },
  {
    id: 173,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
    type: 'novel',
    category: ['society'],
    title: 'Talent Booking',
    author: {
      name: 'Vallie Cradoc',
      awards: ['Kreiger, Flatley and Hagenes', 'Beier-Kemmer'],
      representatives: [
        {
          name: 'IABP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'NYSE',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'RF Design',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'CSS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Young People',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'WS-I',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    },
    translator: {
      name: 'Barde Matieu',
      nationality: 'North Korea',
      career: 'Erdman, Gulgowski and Mayer',
      representatives: [
        {
          name: 'AQTF compliance',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    },
    publisher: 'Feest, Gerlach and Feest',
    starRate: { rate: 1.5, rateNum: 34, rateBuyerNum: 27 },
    rentalPrice: 342,
    rentalSalePercent: 22,
    buyPrice: 42934,
    buySalePercent: 7,
    count: 7,
    freeCount: 6,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: true,
    description:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    index:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    lastlyRead: '2020-11-05',
  },
  {
    id: 174,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
    type: 'novel',
    category: ['history', 'romance'],
    title: 'Curriculum Design',
    author: {
      name: 'Shayla Kersley',
      awards: ['Armstrong and Sons', 'Mayert-Spinka', 'Nitzsche Group'],
      representatives: [
        {
          name: 'Rheology',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Urban Forestry',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'HGV',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Kyocera',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'CBM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    },
    translator: {
      name: 'Anatol Grafom',
      nationality: 'North Korea',
      career: 'Smitham and Sons',
      representatives: [
        { name: 'FEED', thumbnail: '' },
        {
          name: 'DDD',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    },
    publisher: 'Zieme-Kerluke',
    starRate: { rate: 0.7, rateNum: 34, rateBuyerNum: 26 },
    rentalPrice: 728,
    rentalSalePercent: 38,
    buyPrice: 48642,
    buySalePercent: 31,
    count: 19,
    freeCount: 8,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: true,
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    index:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    lastlyRead: '2021-08-16',
  },
  {
    id: 175,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
    type: 'ebook',
    category: ['humanities', 'history'],
    title: 'QA Automation',
    author: {
      name: 'Cory Farndale',
      awards: [
        'Dickens, Ruecker and Mosciski',
        'Pfannerstill, Schumm and Zboncak',
      ],
      representatives: [],
      introduction:
        'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    },
    translator: {
      name: 'Hewett Gibke',
      nationality: 'North Korea',
      career: 'McCullough-DuBuque',
      representatives: [
        {
          name: 'DSDM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        { name: 'CVD', thumbnail: '' },
        {
          name: 'GNU/Linux',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'TCF',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction:
        'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    },
    publisher: 'Hackett-Hyatt',
    starRate: { rate: 1.8, rateNum: 79, rateBuyerNum: 20 },
    rentalPrice: 297,
    rentalSalePercent: 36,
    buyPrice: 7452,
    buySalePercent: 33,
    count: 13,
    freeCount: 4,
    isFinished: true,
    canRent: false,
    waitFree: true,
    xRated: false,
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    index:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    lastlyRead: '2020-11-11',
  },
  {
    id: 176,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
    type: 'novel',
    category: ['thriller'],
    title: 'iView',
    author: {
      name: 'Lidia Fost',
      awards: ["Bruen, O'Conner and Halvorson", 'Stanton, Reichert and Harvey'],
      representatives: [
        {
          name: 'CCDA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'ICP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction:
        'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    },
    translator: {
      name: 'Merrel Weald',
      nationality: 'North Korea',
      career: 'Lakin, Morissette and Dooley',
      representatives: [
        {
          name: 'DFA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'RTSP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Cycling',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction:
        'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    },
    publisher: 'Klein, Waelchi and Lemke',
    starRate: { rate: 1.4, rateNum: 73, rateBuyerNum: 18 },
    rentalPrice: 1235,
    rentalSalePercent: 7,
    buyPrice: 35784,
    buySalePercent: 33,
    count: 23,
    freeCount: 6,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: true,
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    index:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    lastlyRead: '2021-08-21',
  },
  {
    id: 177,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
    type: 'ebook',
    category: ['fantasy', 'humanities'],
    title: 'XPages',
    author: {
      name: 'Jacquie De Filippo',
      awards: ['Jerde, Boehm and Gleichner'],
      representatives: [
        {
          name: 'Dysphagia',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'IAM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'PFlow',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Hybrid Cloud',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    },
    translator: {
      name: 'Gal Prew',
      nationality: 'North Korea',
      career: 'Metz LLC',
      representatives: [
        {
          name: 'Drug Development',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    },
    publisher: 'Thompson, Mosciski and Bayer',
    starRate: { rate: 1.0, rateNum: 46, rateBuyerNum: 6 },
    rentalPrice: 746,
    rentalSalePercent: 4,
    buyPrice: 17111,
    buySalePercent: 49,
    count: 19,
    freeCount: 6,
    isFinished: true,
    canRent: true,
    waitFree: true,
    xRated: true,
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    index:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    lastlyRead: '2021-01-30',
  },
  {
    id: 178,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
    type: 'novel',
    category: ['history', 'humanities'],
    title: 'ESB',
    author: {
      name: 'Mamie Aneley',
      awards: ['Streich and Sons'],
      representatives: [
        {
          name: 'PC Anywhere',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'UK Corporation Tax',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Durable Goods',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        { name: 'XML Spy', thumbnail: '' },
      ],
      introduction: 'In blandit ultrices enim.',
    },
    translator: {
      name: 'Demetris McTaggart',
      nationality: 'North Korea',
      career: 'Cummings LLC',
      representatives: [
        {
          name: 'Zuora',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'Program Management',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'IBM pSeries',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
      ],
      introduction:
        'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    },
    publisher: 'Schultz, Olson and Kutch',
    starRate: { rate: 1.2, rateNum: 69, rateBuyerNum: 4 },
    rentalPrice: 1286,
    rentalSalePercent: 33,
    buyPrice: 4625,
    buySalePercent: 25,
    count: 10,
    freeCount: 3,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    index:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    lastlyRead: '2021-03-16',
  },
  {
    id: 179,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
    type: 'novel',
    category: ['society', 'humanities'],
    title: 'Two-phase Flow',
    author: {
      name: 'Junie Smales',
      awards: ['Wyman, Schaefer and Hansen', 'White, Zulauf and Bartoletti'],
      representatives: [
        {
          name: 'PWS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'Fashion Illustration',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        { name: 'Corporate Tax', thumbnail: '' },
        {
          name: 'Jets',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        { name: 'VSX', thumbnail: '' },
        { name: 'HP Networking', thumbnail: '' },
      ],
      introduction:
        'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    },
    translator: {
      name: 'Bobbie Milburne',
      nationality: 'North Korea',
      career: 'Cremin LLC',
      representatives: [
        { name: 'Mathematical Modeling', thumbnail: '' },
        {
          name: 'RMX',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        { name: 'Aquariums', thumbnail: '' },
      ],
      introduction:
        'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    },
    publisher: 'Denesik, Reichel and Johnson',
    starRate: { rate: 4.1, rateNum: 80, rateBuyerNum: 18 },
    rentalPrice: 377,
    rentalSalePercent: 23,
    buyPrice: 28654,
    buySalePercent: 5,
    count: 7,
    freeCount: 9,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: true,
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    index:
      'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    lastlyRead: '2021-08-24',
  },
  {
    id: 180,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
    type: 'ebook',
    category: ['fantasy', 'romance'],
    title: 'RTGS',
    author: {
      name: 'Izaak Cherry',
      awards: ['MacGyver-King', 'Halvorson, Price and Torphy', 'Hauck-Mayert'],
      representatives: [
        {
          name: 'BMV',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'DNA microarray',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Health Education',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'Windows NT',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'XSL-FO',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Invoicing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    },
    translator: {
      name: 'Andonis Paolone',
      nationality: 'North Korea',
      career: 'Rohan-Casper',
      representatives: [
        {
          name: 'MVA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Award Winner',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'HV',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        { name: 'Data Guard', thumbnail: '' },
        {
          name: 'Kodaly',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    },
    publisher: 'Spencer and Sons',
    starRate: { rate: 2.2, rateNum: 68, rateBuyerNum: 10 },
    rentalPrice: 771,
    rentalSalePercent: 2,
    buyPrice: 9883,
    buySalePercent: 43,
    count: 1,
    freeCount: 6,
    isFinished: true,
    canRent: true,
    waitFree: true,
    xRated: true,
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    index:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    lastlyRead: '2021-05-22',
  },
  {
    id: 181,
    thumbnail: '',
    type: 'novel',
    category: ['fantasy'],
    title: 'NVU',
    author: {
      name: 'Griffy Iacomelli',
      awards: ["Baumbach-D'Amore", 'Harber, Bahringer and Kirlin'],
      representatives: [
        {
          name: 'Juniper Switches',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    },
    translator: {
      name: 'Yolande Tomaszek',
      nationality: 'North Korea',
      career: 'Olson and Sons',
      representatives: [
        {
          name: 'Aesthetic Surgery',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Urban Geography',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Software Testing Life Cycle',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
      ],
      introduction:
        'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    },
    publisher: 'Greenholt, Erdman and Rippin',
    starRate: { rate: 1.1, rateNum: 33, rateBuyerNum: 16 },
    rentalPrice: 745,
    rentalSalePercent: 23,
    buyPrice: 11706,
    buySalePercent: 8,
    count: 27,
    freeCount: 9,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: false,
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    index:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    lastlyRead: '2020-12-10',
  },
  {
    id: 182,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
    type: 'novel',
    category: ['romance'],
    title: 'Zeus',
    author: {
      name: 'Caril Mearns',
      awards: ['Willms, Jacobi and Weimann'],
      representatives: [
        {
          name: 'TNCC',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'CNC Manufacturing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Social Services',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        { name: 'International Business', thumbnail: '' },
      ],
      introduction:
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    },
    translator: {
      name: 'Allan Casburn',
      nationality: 'North Korea',
      career: 'Erdman, Wunsch and Prosacco',
      representatives: [
        {
          name: 'Luxury Homes',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        { name: 'Oracle SQL Developer', thumbnail: '' },
      ],
      introduction:
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    },
    publisher: 'Daugherty, Hartmann and Kuhn',
    starRate: { rate: 1.2, rateNum: 79, rateBuyerNum: 15 },
    rentalPrice: 1097,
    rentalSalePercent: 36,
    buyPrice: 58853,
    buySalePercent: 29,
    count: 16,
    freeCount: 8,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: true,
    description: 'Nulla tellus. In sagittis dui vel nisl.',
    index:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    lastlyRead: '2021-08-07',
  },
  {
    id: 183,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
    type: 'novel',
    category: ['sf'],
    title: 'Eyewonder',
    author: {
      name: 'Leonie Bog',
      awards: ['Kshlerin, Adams and Jaskolski'],
      representatives: [
        {
          name: 'Interviewing Skills',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'DNA fingerprinting',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    },
    translator: {
      name: 'Lothaire Balmforth',
      nationality: 'North Korea',
      career: 'Wiza-Stracke',
      representatives: [
        {
          name: 'NCSS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Lyricist',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'PQRI',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'Non-profit Leadership',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
      ],
      introduction:
        'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    },
    publisher: 'Towne Inc',
    starRate: { rate: 4.2, rateNum: 80, rateBuyerNum: 19 },
    rentalPrice: 1128,
    rentalSalePercent: 6,
    buyPrice: 20144,
    buySalePercent: 32,
    count: 13,
    freeCount: 1,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    index:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    lastlyRead: '2021-03-04',
  },
  {
    id: 184,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
    type: 'webNovel',
    category: ['thriller'],
    title: 'Aerial Silks',
    author: {
      name: 'Arlen Downe',
      awards: ['Wuckert-Schaden'],
      representatives: [
        {
          name: 'MLA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Yields',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'AP Style',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'DOT Regulations',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Tourism',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
      ],
      introduction:
        'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    },
    translator: {
      name: 'Kailey Allmond',
      nationality: 'North Korea',
      career: 'Hessel, Auer and Rempel',
      representatives: [
        {
          name: 'Multi-color Flow Cytometry',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'TDM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Overseeing Projects',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction: 'Aliquam non mauris.',
    },
    publisher: 'Thompson, Kirlin and Stehr',
    starRate: { rate: 4.9, rateNum: 39, rateBuyerNum: 27 },
    rentalPrice: 112,
    rentalSalePercent: 21,
    buyPrice: 59338,
    buySalePercent: 49,
    count: 20,
    freeCount: 5,
    isFinished: true,
    canRent: false,
    waitFree: true,
    xRated: false,
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    index:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    lastlyRead: '2021-05-26',
  },
  {
    id: 185,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
    type: 'webNovel',
    category: ['history'],
    title: 'GPG',
    author: {
      name: 'Melba Reddecliffe',
      awards: [
        'Kutch Inc',
        'Green, Kessler and Erdman',
        'Berge, Cremin and Witting',
      ],
      representatives: [
        {
          name: 'UART',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Book Design',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'TSRM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction: 'Praesent blandit.',
    },
    translator: {
      name: 'Rosabel Tonkes',
      nationality: 'North Korea',
      career: 'Dare Inc',
      representatives: [
        {
          name: 'Sales Management',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'IEC',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'MyEclipse',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    },
    publisher: 'Dickinson-Beatty',
    starRate: { rate: 2.0, rateNum: 32, rateBuyerNum: 30 },
    rentalPrice: 880,
    rentalSalePercent: 42,
    buyPrice: 27755,
    buySalePercent: 16,
    count: 23,
    freeCount: 1,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    index:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    lastlyRead: '2021-04-15',
  },
  {
    id: 186,
    thumbnail: '',
    type: 'novel',
    category: ['thriller', 'romance'],
    title: 'WMI',
    author: {
      name: 'Rozamond Wickes',
      awards: ['Treutel Inc', 'Connelly, Bogisich and Daniel'],
      representatives: [
        {
          name: 'Make vs Buy',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Disaster Recovery',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'SNOMED',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Agarose Gel Electrophoresis',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
      ],
      introduction:
        'Nullam sit amet turpis elementum ligula vehicula consequat.',
    },
    translator: {
      name: 'Carri Hannaford',
      nationality: 'North Korea',
      career: 'Nienow-Fisher',
      representatives: [
        {
          name: 'Unified Communications',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Aerobics',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'PDP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction:
        'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    },
    publisher: 'Bartoletti, Wehner and Volkman',
    starRate: { rate: 4.1, rateNum: 49, rateBuyerNum: 11 },
    rentalPrice: 1124,
    rentalSalePercent: 48,
    buyPrice: 46124,
    buySalePercent: 43,
    count: 29,
    freeCount: 6,
    isFinished: true,
    canRent: true,
    waitFree: true,
    xRated: true,
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    index:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    lastlyRead: '2021-03-28',
  },
  {
    id: 187,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
    type: 'webNovel',
    category: ['fantasy', 'thriller'],
    title: 'Snow Leopard',
    author: {
      name: 'Dave Minard',
      awards: ['Cartwright Group', 'Keebler, Schneider and Carroll'],
      representatives: [
        {
          name: 'Ambulatory',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'CSS Sprites',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    },
    translator: {
      name: 'Lena Kahn',
      nationality: 'North Korea',
      career: 'Larson LLC',
      representatives: [],
      introduction:
        'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    },
    publisher: 'Sauer-Douglas',
    starRate: { rate: 4.1, rateNum: 32, rateBuyerNum: 21 },
    rentalPrice: 350,
    rentalSalePercent: 38,
    buyPrice: 25458,
    buySalePercent: 42,
    count: 9,
    freeCount: 10,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: true,
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    index:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    lastlyRead: '2021-06-29',
  },
  {
    id: 188,
    thumbnail: '',
    type: 'novel',
    category: ['detective', 'history'],
    title: 'Customer Insight',
    author: {
      name: 'Corrianne Denney',
      awards: ['Bernhard Inc', 'Mann Group', 'Nikolaus-Smitham'],
      representatives: [],
      introduction:
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    },
    translator: {
      name: 'Madelyn Laise',
      nationality: 'North Korea',
      career: 'Osinski Inc',
      representatives: [
        {
          name: 'MSS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Aspen HYSYS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Web Content Management',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    },
    publisher: 'Towne, Moen and Weber',
    starRate: { rate: 0.1, rateNum: 59, rateBuyerNum: 28 },
    rentalPrice: 300,
    rentalSalePercent: 31,
    buyPrice: 38020,
    buySalePercent: 47,
    count: 20,
    freeCount: 7,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    index:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    lastlyRead: '2021-02-06',
  },
  {
    id: 189,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
    type: 'ebook',
    category: ['sf', 'society'],
    title: 'Process Piping Design',
    author: {
      name: 'Raddie Sprules',
      awards: ['Morissette LLC'],
      representatives: [
        {
          name: 'Yacc',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
      ],
      introduction:
        'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    },
    translator: {
      name: 'Ethel Pessler',
      nationality: 'North Korea',
      career: "Strosin-O'Reilly",
      representatives: [
        {
          name: 'WSAD',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Process Engineering',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    },
    publisher: 'Bosco, Simonis and Nolan',
    starRate: { rate: 1.8, rateNum: 60, rateBuyerNum: 30 },
    rentalPrice: 321,
    rentalSalePercent: 4,
    buyPrice: 58129,
    buySalePercent: 19,
    count: 12,
    freeCount: 5,
    isFinished: true,
    canRent: true,
    waitFree: true,
    xRated: false,
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    index:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    lastlyRead: '2021-04-29',
  },
  {
    id: 190,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
    type: 'webNovel',
    category: ['detective'],
    title: 'uC/OS-II',
    author: {
      name: 'Meghan Ponsford',
      awards: ['Gottlieb Group', 'Hayes LLC', 'Harvey, Herman and Beer'],
      representatives: [
        {
          name: 'UV coating',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'BTS Installation',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        { name: 'CVA', thumbnail: '' },
        {
          name: 'IT Governance',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'IOS Firewall',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'European Union',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction:
        'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    },
    translator: {
      name: 'Timmy Sleaford',
      nationality: 'North Korea',
      career: 'Towne, Bartoletti and Padberg',
      representatives: [
        {
          name: 'NPL',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Business Aviation',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Yacht Charters',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Talent Booking',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction:
        'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    },
    publisher: 'Abshire Group',
    starRate: { rate: 4.3, rateNum: 30, rateBuyerNum: 3 },
    rentalPrice: 1439,
    rentalSalePercent: 5,
    buyPrice: 21723,
    buySalePercent: 42,
    count: 18,
    freeCount: 6,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: true,
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    index:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    lastlyRead: '2021-10-05',
  },
  {
    id: 191,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
    type: 'webNovel',
    category: ['humanities', 'fantasy'],
    title: 'EViews',
    author: {
      name: 'Terri Leggan',
      awards: ['Pfeffer LLC', 'Hansen-Kertzmann'],
      representatives: [
        {
          name: 'TV Distribution',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction:
        'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    },
    translator: {
      name: 'Washington Courtois',
      nationality: 'North Korea',
      career: 'Hoeger-Gottlieb',
      representatives: [
        {
          name: 'Power Utilities',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        { name: 'vShield', thumbnail: '' },
        {
          name: 'Product Marketing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'FMA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction:
        'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    },
    publisher: 'Nikolaus Group',
    starRate: { rate: 1.5, rateNum: 38, rateBuyerNum: 0 },
    rentalPrice: 252,
    rentalSalePercent: 34,
    buyPrice: 5559,
    buySalePercent: 49,
    count: 24,
    freeCount: 3,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: false,
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    index:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    lastlyRead: '2021-07-07',
  },
  {
    id: 192,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
    type: 'ebook',
    category: ['society'],
    title: 'OMNI',
    author: {
      name: 'Lesley Absolem',
      awards: ['Nolan Group', 'Johns Group'],
      representatives: [
        {
          name: 'Natural Gas',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Oxidation',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'Design for Manufacturing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Life Insurance',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'TPD',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    },
    translator: {
      name: 'Augustine Tancock',
      nationality: 'North Korea',
      career: 'Gottlieb Inc',
      representatives: [
        {
          name: 'Psychological Assessment',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Core FTP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'European Markets',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    },
    publisher: 'Denesik LLC',
    starRate: { rate: 0.8, rateNum: 64, rateBuyerNum: 10 },
    rentalPrice: 606,
    rentalSalePercent: 18,
    buyPrice: 32429,
    buySalePercent: 46,
    count: 15,
    freeCount: 4,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    index:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    lastlyRead: '2021-04-02',
  },
  {
    id: 193,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
    type: 'ebook',
    category: ['romance'],
    title: 'LTACH',
    author: {
      name: 'Irita Benallack',
      awards: ['Dicki LLC', 'Vandervort and Sons', 'Jones-Strosin'],
      representatives: [
        {
          name: 'Green Building',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'TCF',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'PBUSE',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'Cost Accounting',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    },
    translator: {
      name: 'Christal Pinching',
      nationality: 'North Korea',
      career: 'Haag Inc',
      representatives: [],
      introduction:
        'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    },
    publisher: 'Schmeler-Maggio',
    starRate: { rate: 3.0, rateNum: 73, rateBuyerNum: 0 },
    rentalPrice: 587,
    rentalSalePercent: 30,
    buyPrice: 58215,
    buySalePercent: 36,
    count: 10,
    freeCount: 4,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: true,
    description: 'Nulla ac enim.',
    index:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    lastlyRead: '2021-07-12',
  },
  {
    id: 194,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
    type: 'webNovel',
    category: ['fantasy', 'society'],
    title: 'UB04',
    author: {
      name: 'Pyotr Rathjen',
      awards: ['Kuhic, Wiza and Bernhard', 'Hoppe, Daugherty and Huels'],
      representatives: [
        {
          name: 'XMPie',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        { name: 'Design Patterns', thumbnail: '' },
        {
          name: 'Nanomaterials',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Real Estate',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    },
    translator: {
      name: 'Midge Grishunin',
      nationality: 'North Korea',
      career: 'Hettinger-Doyle',
      representatives: [
        {
          name: 'Swing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        { name: 'iReport', thumbnail: '' },
        {
          name: 'Vtiger',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'Knee',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
      ],
      introduction: 'In hac habitasse platea dictumst.',
    },
    publisher: 'Marquardt-Graham',
    starRate: { rate: 1.1, rateNum: 46, rateBuyerNum: 0 },
    rentalPrice: 963,
    rentalSalePercent: 24,
    buyPrice: 53583,
    buySalePercent: 21,
    count: 30,
    freeCount: 2,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    index:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    lastlyRead: '2021-02-06',
  },
  {
    id: 195,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
    type: 'ebook',
    category: ['sf'],
    title: 'Science',
    author: {
      name: 'Easter Beckerleg',
      awards: ['Upton-Moen'],
      representatives: [
        {
          name: 'EZ Labor',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction:
        'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    },
    translator: {
      name: 'Basilio Fudger',
      nationality: 'North Korea',
      career: 'Corwin-Schuppe',
      representatives: [
        {
          name: 'Kundalini Yoga',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    },
    publisher: 'Emard-Douglas',
    starRate: { rate: 3.4, rateNum: 42, rateBuyerNum: 29 },
    rentalPrice: 1370,
    rentalSalePercent: 0,
    buyPrice: 11783,
    buySalePercent: 1,
    count: 15,
    freeCount: 2,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: true,
    description:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    index:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    lastlyRead: '2021-04-22',
  },
  {
    id: 196,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
    type: 'webNovel',
    category: ['thriller'],
    title: 'XCAL',
    author: {
      name: 'Cathee Kinsman',
      awards: ['Beer-Ratke'],
      representatives: [
        {
          name: 'Ideas Development',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction: 'Nulla nisl. Nunc nisl.',
    },
    translator: {
      name: 'Tonia Stenett',
      nationality: 'North Korea',
      career: 'Deckow-Robel',
      representatives: [
        {
          name: 'Web Content Management',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'WPF',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'WML',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    },
    publisher: 'Yost-Zemlak',
    starRate: { rate: 0.4, rateNum: 56, rateBuyerNum: 23 },
    rentalPrice: 550,
    rentalSalePercent: 46,
    buyPrice: 25339,
    buySalePercent: 25,
    count: 15,
    freeCount: 4,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: true,
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    index:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    lastlyRead: '2020-11-06',
  },
  {
    id: 197,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
    type: 'novel',
    category: ['history', 'thriller'],
    title: 'DBT',
    author: {
      name: 'Catarina Colcomb',
      awards: ['Bruen LLC', 'Schumm, Homenick and Beatty'],
      representatives: [
        {
          name: 'MP2',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Multi-Unit',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'HAZOP Study',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Overseas Sourcing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction:
        'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    },
    translator: {
      name: 'Anabelle Dugdale',
      nationality: 'North Korea',
      career: 'Heaney Inc',
      representatives: [
        {
          name: 'Vehicles',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Team Building',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction:
        'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    },
    publisher: 'Ondricka LLC',
    starRate: { rate: 4.0, rateNum: 42, rateBuyerNum: 27 },
    rentalPrice: 772,
    rentalSalePercent: 32,
    buyPrice: 10119,
    buySalePercent: 18,
    count: 23,
    freeCount: 8,
    isFinished: true,
    canRent: false,
    waitFree: true,
    xRated: false,
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    index:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    lastlyRead: '2020-12-17',
  },
  {
    id: 198,
    thumbnail: '',
    type: 'webNovel',
    category: ['sf'],
    title: 'Classical Guitar',
    author: {
      name: 'Felicle Polendine',
      awards: ['Stamm-Halvorson'],
      representatives: [
        {
          name: 'Process Efficiency',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Environmental Issues',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'BPH',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'KWI',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
      ],
      introduction:
        'Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    },
    translator: {
      name: 'Brett Baynton',
      nationality: 'North Korea',
      career: 'Howe Inc',
      representatives: [
        {
          name: 'BCLS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'IEC 61131-3',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    },
    publisher: 'Harris-Ortiz',
    starRate: { rate: 3.8, rateNum: 31, rateBuyerNum: 8 },
    rentalPrice: 162,
    rentalSalePercent: 13,
    buyPrice: 4987,
    buySalePercent: 41,
    count: 1,
    freeCount: 7,
    isFinished: true,
    canRent: false,
    waitFree: true,
    xRated: false,
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    index:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    lastlyRead: '2021-06-22',
  },
  {
    id: 199,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
    type: 'ebook',
    category: ['humanities', 'society'],
    title: 'SLES',
    author: {
      name: 'Avivah Cyples',
      awards: ['Pagac and Sons', 'Kertzmann-Zemlak'],
      representatives: [],
      introduction:
        'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    },
    translator: {
      name: 'Norma Clemmen',
      nationality: 'North Korea',
      career: 'Lehner-Stehr',
      representatives: [
        {
          name: 'User-centered Design',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    },
    publisher: 'Corkery, Bailey and Kulas',
    starRate: { rate: 4.3, rateNum: 43, rateBuyerNum: 16 },
    rentalPrice: 1177,
    rentalSalePercent: 3,
    buyPrice: 58344,
    buySalePercent: 33,
    count: 15,
    freeCount: 10,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    index:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    lastlyRead: '2021-08-07',
  },
  {
    id: 200,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
    type: 'webNovel',
    category: ['sf', 'history'],
    title: 'Youth Outreach',
    author: {
      name: 'Mel Choulerton',
      awards: [
        'Windler, Gutkowski and Rice',
        'Dibbert and Sons',
        'Douglas Inc',
      ],
      representatives: [
        {
          name: 'Pneumatics',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Civil Aviation',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'WLR3',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Ektron',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    },
    translator: {
      name: 'Octavia Ivanuschka',
      nationality: 'North Korea',
      career: 'Pollich and Sons',
      representatives: [],
      introduction:
        'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    },
    publisher: 'Kozey-Hermann',
    starRate: { rate: 1.6, rateNum: 43, rateBuyerNum: 9 },
    rentalPrice: 151,
    rentalSalePercent: 37,
    buyPrice: 35708,
    buySalePercent: 24,
    count: 6,
    freeCount: 5,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    index:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    lastlyRead: '2021-02-10',
  },
  {
    id: 201,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
    type: 'ebook',
    category: ['society', 'history'],
    title: 'JSP440',
    author: {
      name: 'Barbara Stode',
      awards: ['Harvey, Pfeffer and Ratke', 'Renner LLC'],
      representatives: [
        {
          name: 'Research Ethics',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction:
        'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    },
    translator: {
      name: 'Blancha Balentyne',
      nationality: 'North Korea',
      career: 'Goyette, Volkman and Conn',
      representatives: [
        {
          name: 'SAP OM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Zone Alarm',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        { name: 'Voiceovers', thumbnail: '' },
        {
          name: 'CSS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    },
    publisher: 'Jacobs-Balistreri',
    starRate: { rate: 2.6, rateNum: 67, rateBuyerNum: 27 },
    rentalPrice: 1335,
    rentalSalePercent: 20,
    buyPrice: 12692,
    buySalePercent: 14,
    count: 23,
    freeCount: 2,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: false,
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    index:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    lastlyRead: '2021-02-09',
  },
  {
    id: 202,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
    type: 'novel',
    category: ['fantasy', 'thriller'],
    title: 'VXML',
    author: {
      name: 'Teddi Newiss',
      awards: ['Schmitt-Nolan', 'Mraz-Robel', 'Gorczany and Sons'],
      representatives: [
        {
          name: 'International Tax',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'RCSA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Animal Work',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Dubbing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'XCOM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Norton Ghost',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction:
        'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    },
    translator: {
      name: 'Wylie Hair',
      nationality: 'North Korea',
      career: 'Ward-Weimann',
      representatives: [
        {
          name: 'HCPCS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'BMC Remedy',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Hatha Yoga',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'Segregation of Duties',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
      ],
      introduction:
        'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    },
    publisher: 'Renner, Glover and Feil',
    starRate: { rate: 4.2, rateNum: 51, rateBuyerNum: 4 },
    rentalPrice: 901,
    rentalSalePercent: 15,
    buyPrice: 49474,
    buySalePercent: 18,
    count: 20,
    freeCount: 4,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: true,
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    index:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    lastlyRead: '2020-12-18',
  },
  {
    id: 203,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
    type: 'novel',
    category: ['detective'],
    title: 'Direct Marketing',
    author: {
      name: 'Quintina Pym',
      awards: ['Sipes-Feil', 'Hayes and Sons'],
      representatives: [
        {
          name: 'ATG CSC',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        { name: 'Fraud', thumbnail: '' },
        {
          name: 'High Yield Bonds',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'NLS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction:
        'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
    },
    translator: {
      name: 'Ryun Macellar',
      nationality: 'North Korea',
      career: 'Gorczany, Abernathy and Stark',
      representatives: [
        {
          name: 'Intercollegiate Athletics',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Agrochemicals',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction: 'Sed vel enim sit amet nunc viverra dapibus.',
    },
    publisher: 'Mraz-Hintz',
    starRate: { rate: 0.5, rateNum: 54, rateBuyerNum: 20 },
    rentalPrice: 1061,
    rentalSalePercent: 4,
    buyPrice: 56060,
    buySalePercent: 20,
    count: 23,
    freeCount: 9,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: false,
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    index:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    lastlyRead: '2020-12-22',
  },
  {
    id: 204,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
    type: 'ebook',
    category: ['thriller', 'history'],
    title: 'IT Hardware Support',
    author: {
      name: 'Devlen Roony',
      awards: ['Bruen LLC'],
      representatives: [],
      introduction:
        'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    },
    translator: {
      name: 'Tait Gebhard',
      nationality: 'North Korea',
      career: 'Gorczany-Funk',
      representatives: [
        {
          name: 'NLog',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Jidoka',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Zebra',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
      ],
      introduction:
        'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    },
    publisher: 'Boyer and Sons',
    starRate: { rate: 3.4, rateNum: 38, rateBuyerNum: 19 },
    rentalPrice: 1335,
    rentalSalePercent: 25,
    buyPrice: 8252,
    buySalePercent: 4,
    count: 22,
    freeCount: 5,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    index:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    lastlyRead: '2020-12-06',
  },
  {
    id: 205,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
    type: 'novel',
    category: ['humanities', 'thriller'],
    title: 'Lubricants',
    author: {
      name: 'Brynne Anyene',
      awards: [
        'Hilll, Homenick and Runolfsson',
        'Kuhic-Turner',
        'Hauck, Conroy and Ortiz',
      ],
      representatives: [
        {
          name: 'GMP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'Aluminum',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Sculpture',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        { name: 'In-situ Chemical Oxidation', thumbnail: '' },
        {
          name: 'MDL',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    },
    translator: {
      name: 'Gilda Wilsdon',
      nationality: 'North Korea',
      career: 'Goodwin, Cole and Predovic',
      representatives: [
        {
          name: 'PWS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction: 'Donec posuere metus vitae ipsum. Aliquam non mauris.',
    },
    publisher: 'Powlowski, Kihn and Kuhlman',
    starRate: { rate: 2.1, rateNum: 54, rateBuyerNum: 22 },
    rentalPrice: 183,
    rentalSalePercent: 27,
    buyPrice: 8765,
    buySalePercent: 14,
    count: 25,
    freeCount: 2,
    isFinished: true,
    canRent: false,
    waitFree: true,
    xRated: false,
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    index:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    lastlyRead: '2021-08-16',
  },
  {
    id: 206,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
    type: 'ebook',
    category: ['fantasy'],
    title: 'FSCM',
    author: {
      name: 'Huntington Tosney',
      awards: ['Dickinson-Kemmer', 'Brekke Inc', 'Mueller-Dibbert'],
      representatives: [
        {
          name: 'Military Aviation',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Amazon RDS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Rooms Division',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Lyophilization',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Journalism',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'AAT',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    translator: {
      name: 'Adrien Botley',
      nationality: 'North Korea',
      career: 'Stanton, Emard and Hane',
      representatives: [
        {
          name: 'Mycobacteriology',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Csh',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'Utility Regulation',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'TPA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    },
    publisher: 'Ankunding-Wisozk',
    starRate: { rate: 0.5, rateNum: 30, rateBuyerNum: 19 },
    rentalPrice: 248,
    rentalSalePercent: 25,
    buyPrice: 12240,
    buySalePercent: 34,
    count: 22,
    freeCount: 1,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: false,
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    index:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    lastlyRead: '2021-01-11',
  },
  {
    id: 207,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
    type: 'ebook',
    category: ['society'],
    title: 'Umbrella Insurance',
    author: {
      name: 'Verna Chesnay',
      awards: ['Hermiston Inc'],
      representatives: [
        {
          name: 'HR Information Management',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'DNA replication',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'CNN Pathfire',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'MBR',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'Snow Leopard',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction:
        'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    },
    translator: {
      name: 'Levey Eveque',
      nationality: 'North Korea',
      career: 'Goldner LLC',
      representatives: [
        {
          name: 'Uveitis',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        { name: 'FDTD', thumbnail: '' },
        {
          name: 'ADP HRB',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'eHRPD',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Operating Room',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction:
        'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    },
    publisher: 'Schimmel-Cremin',
    starRate: { rate: 4.0, rateNum: 72, rateBuyerNum: 0 },
    rentalPrice: 1160,
    rentalSalePercent: 11,
    buyPrice: 3837,
    buySalePercent: 29,
    count: 28,
    freeCount: 0,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: false,
    description:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    index:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    lastlyRead: '2020-12-02',
  },
  {
    id: 208,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
    type: 'webNovel',
    category: ['society', 'sf'],
    title: 'JBL',
    author: {
      name: 'Marlee Kitney',
      awards: ['Wehner-Durgan', 'VonRueden and Sons', 'Kuhn-Little'],
      representatives: [
        {
          name: 'Cash Flow',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Location Intelligence',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Gypsum',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction:
        'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    },
    translator: {
      name: 'Helenelizabeth Kerrigan',
      nationality: 'North Korea',
      career: 'Brakus Inc',
      representatives: [
        {
          name: 'ICD-9',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'GPS Tracking',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
      ],
      introduction:
        'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    },
    publisher: 'Parisian LLC',
    starRate: { rate: 0.3, rateNum: 75, rateBuyerNum: 3 },
    rentalPrice: 1073,
    rentalSalePercent: 28,
    buyPrice: 29354,
    buySalePercent: 3,
    count: 25,
    freeCount: 8,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    index:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    lastlyRead: '2021-02-27',
  },
  {
    id: 209,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
    type: 'ebook',
    category: ['humanities'],
    title: 'Bank-owned Properties',
    author: {
      name: 'Tatum Exter',
      awards: [
        'Mohr, Rowe and Morissette',
        'Simonis, Bayer and Schaden',
        'Gaylord-Kihn',
      ],
      representatives: [],
      introduction:
        'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    },
    translator: {
      name: 'Juana Coleson',
      nationality: 'North Korea',
      career: 'Walsh-Harris',
      representatives: [],
      introduction:
        'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    },
    publisher: 'Oberbrunner, Bashirian and Ankunding',
    starRate: { rate: 3.5, rateNum: 43, rateBuyerNum: 14 },
    rentalPrice: 1322,
    rentalSalePercent: 4,
    buyPrice: 14032,
    buySalePercent: 9,
    count: 17,
    freeCount: 4,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    index: 'Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    lastlyRead: '2021-06-29',
  },
  {
    id: 210,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
    type: 'novel',
    category: ['society'],
    title: 'VLSI',
    author: {
      name: 'Ingrid Fetherby',
      awards: ['Stroman, Jast and Senger', 'Kshlerin-Stiedemann'],
      representatives: [
        {
          name: 'Fashion Photography',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction:
        'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    },
    translator: {
      name: 'Niccolo Glauber',
      nationality: 'North Korea',
      career: 'Mraz and Sons',
      representatives: [],
      introduction:
        'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    },
    publisher: 'Stamm, Heathcote and Orn',
    starRate: { rate: 2.5, rateNum: 70, rateBuyerNum: 10 },
    rentalPrice: 194,
    rentalSalePercent: 30,
    buyPrice: 17201,
    buySalePercent: 15,
    count: 18,
    freeCount: 7,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    index:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    lastlyRead: '2021-08-30',
  },
  {
    id: 211,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
    type: 'webNovel',
    category: ['romance'],
    title: 'AU',
    author: {
      name: 'Octavia Salman',
      awards: ['Keebler-Treutel'],
      representatives: [
        {
          name: 'Ergonomics',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'IA32',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'OLAP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction:
        'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    },
    translator: {
      name: 'Leona Branscomb',
      nationality: 'North Korea',
      career: 'Schulist, Wiegand and Leffler',
      representatives: [
        {
          name: 'RPOs',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Powder X-ray Diffraction',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'Cinema 4D',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
    publisher: 'Corkery-Stoltenberg',
    starRate: { rate: 2.2, rateNum: 80, rateBuyerNum: 20 },
    rentalPrice: 647,
    rentalSalePercent: 15,
    buyPrice: 10073,
    buySalePercent: 20,
    count: 3,
    freeCount: 9,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: false,
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
    index:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    lastlyRead: '2021-05-22',
  },
  {
    id: 212,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
    type: 'ebook',
    category: ['society'],
    title: 'Play Therapy',
    author: {
      name: 'Hoebart Thorrold',
      awards: ['Wilkinson Inc', 'Abernathy, Jones and Lakin'],
      representatives: [
        {
          name: 'Credit Analysis',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    },
    translator: {
      name: 'Claire Cressy',
      nationality: 'North Korea',
      career: 'Lesch, Schmeler and Wehner',
      representatives: [
        {
          name: 'Novell',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'FTTH',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction:
        'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    },
    publisher: 'Satterfield Group',
    starRate: { rate: 0.6, rateNum: 34, rateBuyerNum: 0 },
    rentalPrice: 241,
    rentalSalePercent: 35,
    buyPrice: 59145,
    buySalePercent: 12,
    count: 2,
    freeCount: 6,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: false,
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    index:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    lastlyRead: '2020-12-18',
  },
  {
    id: 213,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
    type: 'webNovel',
    category: ['fantasy'],
    title: 'VDM',
    author: {
      name: 'Graeme Jendrassik',
      awards: ['Weber Inc', 'Lebsack-Thiel', 'Windler-Cronin'],
      representatives: [
        {
          name: 'Amazon VPC',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'DNA electrophoresis',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Nuclear Engineering',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    },
    translator: {
      name: 'Ariadne Hilldrop',
      nationality: 'North Korea',
      career: 'Rau and Sons',
      representatives: [],
      introduction:
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    },
    publisher: 'Barton, Labadie and Kuvalis',
    starRate: { rate: 4.2, rateNum: 41, rateBuyerNum: 12 },
    rentalPrice: 1207,
    rentalSalePercent: 23,
    buyPrice: 53238,
    buySalePercent: 17,
    count: 3,
    freeCount: 8,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    index:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    lastlyRead: '2021-05-24',
  },
  {
    id: 214,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
    type: 'ebook',
    category: ['society'],
    title: 'CMYK',
    author: {
      name: 'Roseline Cornfield',
      awards: ['Johnson, Abshire and Armstrong'],
      representatives: [
        {
          name: 'Project Implementation',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Quality System',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    },
    translator: {
      name: 'Dewey Sandry',
      nationality: 'North Korea',
      career: 'Marks-Hammes',
      representatives: [
        {
          name: 'Posters',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'iSCSI',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'QA Engineering',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        { name: 'LS-DYNA', thumbnail: '' },
      ],
      introduction:
        'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    },
    publisher: 'Nitzsche and Sons',
    starRate: { rate: 1.8, rateNum: 54, rateBuyerNum: 29 },
    rentalPrice: 949,
    rentalSalePercent: 31,
    buyPrice: 59164,
    buySalePercent: 9,
    count: 17,
    freeCount: 7,
    isFinished: true,
    canRent: false,
    waitFree: true,
    xRated: true,
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    index:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    lastlyRead: '2021-04-23',
  },
  {
    id: 215,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
    type: 'ebook',
    category: ['society'],
    title: 'OAS Gold',
    author: {
      name: 'Matthaeus Louisot',
      awards: [
        'McKenzie and Sons',
        'Cruickshank, Ferry and Zemlak',
        'Doyle Inc',
      ],
      representatives: [
        {
          name: 'BTL Activations',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'Ukrainian',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Zoning',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction: 'Aenean auctor gravida sem.',
    },
    translator: {
      name: 'Buffy Alliban',
      nationality: 'North Korea',
      career: 'Denesik, Nienow and MacGyver',
      representatives: [
        {
          name: 'OTL',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    },
    publisher: 'Balistreri, Maggio and Lueilwitz',
    starRate: { rate: 0.9, rateNum: 41, rateBuyerNum: 12 },
    rentalPrice: 540,
    rentalSalePercent: 1,
    buyPrice: 56475,
    buySalePercent: 45,
    count: 21,
    freeCount: 2,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: false,
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    index:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    lastlyRead: '2021-05-08',
  },
  {
    id: 216,
    thumbnail: '',
    type: 'webNovel',
    category: ['thriller', 'sf'],
    title: 'CCIP',
    author: {
      name: 'Hedvig Jacquemot',
      awards: [
        'Hermiston Group',
        'Herzog, McLaughlin and Boyer',
        'Thompson, Olson and Orn',
      ],
      representatives: [
        {
          name: 'FPSO',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'Hospitals',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'HCFA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction: 'In blandit ultrices enim.',
    },
    translator: {
      name: 'Darelle Baszniak',
      nationality: 'North Korea',
      career: 'Fritsch, Thiel and Ledner',
      representatives: [],
      introduction: 'Donec vitae nisi.',
    },
    publisher: 'Becker LLC',
    starRate: { rate: 4.3, rateNum: 77, rateBuyerNum: 21 },
    rentalPrice: 838,
    rentalSalePercent: 7,
    buyPrice: 59591,
    buySalePercent: 18,
    count: 20,
    freeCount: 10,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: true,
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    index:
      'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    lastlyRead: '2021-04-15',
  },
  {
    id: 217,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
    type: 'webNovel',
    category: ['detective', 'thriller'],
    title: 'International Economics',
    author: {
      name: 'Lari Warrender',
      awards: ['Ledner-Mraz', 'McCullough-Hilll'],
      representatives: [
        {
          name: 'Evidence',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'EIP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction:
        'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    },
    translator: {
      name: 'Wyn Slessor',
      nationality: 'North Korea',
      career: 'Reichert, Konopelski and Waters',
      representatives: [
        {
          name: 'Phase II',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'LGD',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'NVH',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'IPS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'SGBD',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction:
        'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    },
    publisher: 'Price, Fisher and Nicolas',
    starRate: { rate: 4.7, rateNum: 73, rateBuyerNum: 4 },
    rentalPrice: 684,
    rentalSalePercent: 45,
    buyPrice: 44541,
    buySalePercent: 47,
    count: 8,
    freeCount: 1,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: true,
    description: 'Phasellus id sapien in sapien iaculis congue.',
    index:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    lastlyRead: '2021-02-20',
  },
  {
    id: 218,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
    type: 'webNovel',
    category: ['sf', 'thriller'],
    title: 'SVG',
    author: {
      name: 'Benoite Goede',
      awards: ['Ebert-Kirlin'],
      representatives: [
        {
          name: 'IVIVC',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'AHWD',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'SQLite',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Electrical Engineering',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'SMT Kingdom',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction: 'Nunc rhoncus dui vel sem. Sed sagittis.',
    },
    translator: {
      name: 'Valencia Bute',
      nationality: 'North Korea',
      career: 'Wolff-Schiller',
      representatives: [
        {
          name: 'Emergency Room',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Food Quality',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.',
    },
    publisher: 'Konopelski-Schumm',
    starRate: { rate: 0.0, rateNum: 74, rateBuyerNum: 8 },
    rentalPrice: 743,
    rentalSalePercent: 49,
    buyPrice: 14989,
    buySalePercent: 38,
    count: 30,
    freeCount: 1,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: false,
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    index:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    lastlyRead: '2021-05-22',
  },
  {
    id: 219,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
    type: 'ebook',
    category: ['humanities'],
    title: 'Dublin Core',
    author: {
      name: 'Hymie Kean',
      awards: ['Purdy Inc'],
      representatives: [
        {
          name: 'NHL',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Human Capital Management',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
      ],
      introduction:
        'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    },
    translator: {
      name: 'Will Woodson',
      nationality: 'North Korea',
      career: 'Bradtke and Sons',
      representatives: [
        {
          name: 'OS X',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Stage Make-up',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        { name: 'HD Camera Operation', thumbnail: '' },
        { name: 'LDRA', thumbnail: '' },
        {
          name: 'Air Conditioning',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction:
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    },
    publisher: 'Abernathy, Boyer and Rath',
    starRate: { rate: 0.4, rateNum: 68, rateBuyerNum: 18 },
    rentalPrice: 957,
    rentalSalePercent: 44,
    buyPrice: 37441,
    buySalePercent: 35,
    count: 14,
    freeCount: 7,
    isFinished: true,
    canRent: false,
    waitFree: true,
    xRated: false,
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    index:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    lastlyRead: '2021-01-15',
  },
  {
    id: 220,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
    type: 'novel',
    category: ['humanities'],
    title: 'Capital Equipment Sales',
    author: {
      name: 'Annabela Stump',
      awards: ['Dickens, Moore and Padberg'],
      representatives: [
        {
          name: 'Groundwater',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Pyrolysis',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'SSD',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Amazon Kindle',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'Slovak',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    },
    translator: {
      name: 'Georgina Blown',
      nationality: 'North Korea',
      career: 'Schulist-VonRueden',
      representatives: [
        {
          name: 'Planning',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'ABAP Web Dynpro',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Earthworks',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
      ],
      introduction:
        'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    },
    publisher: 'Doyle, Homenick and Fay',
    starRate: { rate: 2.2, rateNum: 80, rateBuyerNum: 19 },
    rentalPrice: 711,
    rentalSalePercent: 50,
    buyPrice: 42137,
    buySalePercent: 24,
    count: 16,
    freeCount: 10,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: true,
    description: 'Curabitur gravida nisi at nibh.',
    index: 'Aliquam sit amet diam in magna bibendum imperdiet.',
    lastlyRead: '2020-12-28',
  },
  {
    id: 221,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
    type: 'webNovel',
    category: ['society'],
    title: 'Animal Husbandry',
    author: {
      name: 'Heather Terrelly',
      awards: ['Doyle-Leannon'],
      representatives: [
        {
          name: 'PVST+',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Award Submissions',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'EU Funding',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'Vector NTI',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    },
    translator: {
      name: 'De witt Fulbrook',
      nationality: 'North Korea',
      career: 'Cormier, Terry and Russel',
      representatives: [
        {
          name: 'IES Virtual Environment',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Smartboard',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'BMI',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Gyrokinesis',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'HBSS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction: 'Nunc rhoncus dui vel sem. Sed sagittis.',
    },
    publisher: 'Rodriguez Group',
    starRate: { rate: 4.3, rateNum: 40, rateBuyerNum: 23 },
    rentalPrice: 625,
    rentalSalePercent: 6,
    buyPrice: 5016,
    buySalePercent: 10,
    count: 1,
    freeCount: 9,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: false,
    description: 'Phasellus sit amet erat. Nulla tempus.',
    index:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    lastlyRead: '2021-10-15',
  },
  {
    id: 222,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
    type: 'novel',
    category: ['history'],
    title: 'Workshops',
    author: {
      name: 'Ricoriki Zemler',
      awards: ['Shanahan, Moen and Kuvalis', 'Hagenes-Cole', 'Schmitt-Toy'],
      representatives: [
        {
          name: 'Visual Studio',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'Canon DSLR',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
      ],
      introduction:
        'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    },
    translator: {
      name: 'Goldina Faires',
      nationality: 'North Korea',
      career: 'Powlowski, Tillman and Brekke',
      representatives: [
        {
          name: 'Agile Methodologies',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'ITIL v3 Foundations Certified',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'HLASM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Validation',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    },
    publisher: 'Wintheiser-Schmeler',
    starRate: { rate: 5.0, rateNum: 49, rateBuyerNum: 16 },
    rentalPrice: 618,
    rentalSalePercent: 18,
    buyPrice: 41798,
    buySalePercent: 28,
    count: 29,
    freeCount: 9,
    isFinished: true,
    canRent: true,
    waitFree: true,
    xRated: true,
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    index:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    lastlyRead: '2021-02-04',
  },
  {
    id: 223,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
    type: 'novel',
    category: ['fantasy'],
    title: 'First Aid',
    author: {
      name: 'Alayne Girardey',
      awards: ['Prohaska, Emard and Nader', 'Koepp and Sons'],
      representatives: [
        {
          name: 'Sports Marketing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'OLEDs',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'OGC Gateway Reviews',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Robotics',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction: 'Suspendisse accumsan tortor quis turpis. Sed ante.',
    },
    translator: {
      name: 'Johnathan Widmore',
      nationality: 'North Korea',
      career: 'Braun Group',
      representatives: [
        {
          name: 'Piano Education',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
      ],
      introduction:
        'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    },
    publisher: 'Gutmann and Sons',
    starRate: { rate: 3.4, rateNum: 69, rateBuyerNum: 5 },
    rentalPrice: 1153,
    rentalSalePercent: 34,
    buyPrice: 22423,
    buySalePercent: 29,
    count: 25,
    freeCount: 3,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: false,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.',
    index: 'Etiam justo.',
    lastlyRead: '2021-06-11',
  },
  {
    id: 224,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
    type: 'webNovel',
    category: ['humanities', 'history'],
    title: 'Windows NT',
    author: {
      name: 'Kathye Clarke-Williams',
      awards: ['Klocko-Jaskolski'],
      representatives: [],
      introduction:
        'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    },
    translator: {
      name: 'Opal Mullineux',
      nationality: 'North Korea',
      career: 'Botsford-Konopelski',
      representatives: [
        {
          name: 'PWB',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Dubbing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'e-QIP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Computer Graphics',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction:
        'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    },
    publisher: 'Ullrich-Reilly',
    starRate: { rate: 3.4, rateNum: 40, rateBuyerNum: 1 },
    rentalPrice: 1364,
    rentalSalePercent: 14,
    buyPrice: 25707,
    buySalePercent: 2,
    count: 17,
    freeCount: 10,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: false,
    description:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    index:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    lastlyRead: '2021-06-28',
  },
  {
    id: 225,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
    type: 'webNovel',
    category: ['society', 'romance'],
    title: 'Alcoholic Beverages',
    author: {
      name: 'Harwilll Plant',
      awards: ['Mueller, Romaguera and Trantow', 'Runte-Funk'],
      representatives: [{ name: 'SAP MM', thumbnail: '' }],
      introduction:
        'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    },
    translator: {
      name: 'Jaimie Adamov',
      nationality: 'North Korea',
      career: 'Skiles LLC',
      representatives: [
        {
          name: 'JReport',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
      ],
      introduction: 'Sed sagittis.',
    },
    publisher: 'Nikolaus, Bauch and Marvin',
    starRate: { rate: 1.7, rateNum: 44, rateBuyerNum: 17 },
    rentalPrice: 1281,
    rentalSalePercent: 21,
    buyPrice: 19607,
    buySalePercent: 14,
    count: 22,
    freeCount: 10,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    index:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    lastlyRead: '2021-09-27',
  },
  {
    id: 226,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
    type: 'novel',
    category: ['history', 'fantasy'],
    title: 'MPBN',
    author: {
      name: 'Janina Geffinger',
      awards: ['Emard and Sons'],
      representatives: [
        {
          name: 'Nginx',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'History',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
      ],
      introduction:
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    },
    translator: {
      name: 'Glynis Devereux',
      nationality: 'North Korea',
      career: 'Huels Group',
      representatives: [
        {
          name: 'Publications',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        { name: 'IPTV', thumbnail: '' },
        {
          name: 'EoMPLS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction:
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    },
    publisher: 'Mante-Daugherty',
    starRate: { rate: 3.6, rateNum: 49, rateBuyerNum: 22 },
    rentalPrice: 1030,
    rentalSalePercent: 39,
    buyPrice: 37176,
    buySalePercent: 2,
    count: 18,
    freeCount: 10,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    index:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    lastlyRead: '2021-03-30',
  },
  {
    id: 227,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
    type: 'webNovel',
    category: ['fantasy', 'humanities'],
    title: 'Quality Control',
    author: {
      name: 'Binnie Phebey',
      awards: ['Runte, Cronin and Ledner', 'Bednar LLC'],
      representatives: [
        {
          name: 'Aerial Cinematography',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction:
        'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    },
    translator: {
      name: 'Robinet Clemens',
      nationality: 'North Korea',
      career: 'McGlynn Inc',
      representatives: [
        {
          name: 'Higher Education',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Competitive Analysis',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'Application Architecture',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Zachman',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'ProSystem fx Tax',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction:
        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    },
    publisher: 'Howe Inc',
    starRate: { rate: 5.0, rateNum: 41, rateBuyerNum: 12 },
    rentalPrice: 719,
    rentalSalePercent: 36,
    buyPrice: 6451,
    buySalePercent: 9,
    count: 5,
    freeCount: 9,
    isFinished: true,
    canRent: true,
    waitFree: true,
    xRated: false,
    description: 'In blandit ultrices enim.',
    index:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    lastlyRead: '2021-06-21',
  },
  {
    id: 228,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
    type: 'novel',
    category: ['humanities'],
    title: 'Avaya IP Telephony',
    author: {
      name: 'Bonnie Mensler',
      awards: ['Zieme-Mills'],
      representatives: [
        {
          name: 'Kanban',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Technical Illustration',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'eGate',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'MQSI',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Urban Forestry',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction: 'In hac habitasse platea dictumst.',
    },
    translator: {
      name: 'Vidovik Dyde',
      nationality: 'North Korea',
      career: 'Nolan, Pollich and Stanton',
      representatives: [
        {
          name: 'Microsoft Dynamics NAV',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Ember.js',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'MRTG',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Smart TV',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'SSP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    },
    publisher: 'Emmerich Group',
    starRate: { rate: 2.0, rateNum: 42, rateBuyerNum: 22 },
    rentalPrice: 1332,
    rentalSalePercent: 11,
    buyPrice: 7043,
    buySalePercent: 8,
    count: 26,
    freeCount: 10,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    index:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    lastlyRead: '2021-02-11',
  },
  {
    id: 229,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
    type: 'webNovel',
    category: ['society'],
    title: 'OxMetrics',
    author: {
      name: 'Adolpho Sawley',
      awards: ['Ledner Inc', 'Bins-Ward', 'Nikolaus-Douglas'],
      representatives: [
        {
          name: 'Target Identification',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
      ],
      introduction:
        'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
    },
    translator: {
      name: 'Erl Jorissen',
      nationality: 'North Korea',
      career: 'Bergnaum Inc',
      representatives: [
        {
          name: 'Turf',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Tax Returns',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'PIM-DM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
      ],
      introduction:
        'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    },
    publisher: 'Hirthe, Strosin and Mohr',
    starRate: { rate: 2.2, rateNum: 45, rateBuyerNum: 2 },
    rentalPrice: 849,
    rentalSalePercent: 41,
    buyPrice: 39300,
    buySalePercent: 33,
    count: 8,
    freeCount: 5,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: true,
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    index:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    lastlyRead: '2021-03-09',
  },
  {
    id: 230,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
    type: 'webNovel',
    category: ['society', 'detective'],
    title: 'CBR',
    author: {
      name: 'Terrie Jirka',
      awards: ['Jaskolski, Hagenes and Crooks'],
      representatives: [
        {
          name: 'Solaris Zones',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
      ],
      introduction:
        'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    },
    translator: {
      name: 'Lishe Lodemann',
      nationality: 'North Korea',
      career: 'Koch Group',
      representatives: [
        {
          name: 'Taleo',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        { name: 'Nanoparticles', thumbnail: '' },
      ],
      introduction:
        'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    },
    publisher: 'Pfannerstill-Waelchi',
    starRate: { rate: 2.1, rateNum: 46, rateBuyerNum: 19 },
    rentalPrice: 1310,
    rentalSalePercent: 32,
    buyPrice: 24079,
    buySalePercent: 22,
    count: 20,
    freeCount: 5,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    index:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    lastlyRead: '2020-11-18',
  },
  {
    id: 231,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
    type: 'webNovel',
    category: ['detective', 'humanities'],
    title: 'CGEIT',
    author: {
      name: 'Rosaline Catley',
      awards: ['Pollich Inc'],
      representatives: [
        {
          name: 'Office Administration',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'GSA Schedules',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        { name: 'IGP', thumbnail: '' },
      ],
      introduction:
        'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    },
    translator: {
      name: 'Lamont Coysh',
      nationality: 'North Korea',
      career: 'Bins-Lowe',
      representatives: [
        {
          name: 'Architectural Drawings',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    },
    publisher: 'Konopelski and Sons',
    starRate: { rate: 4.1, rateNum: 39, rateBuyerNum: 7 },
    rentalPrice: 159,
    rentalSalePercent: 7,
    buyPrice: 32530,
    buySalePercent: 15,
    count: 21,
    freeCount: 4,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: true,
    description: 'Nulla tellus.',
    index:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    lastlyRead: '2021-03-21',
  },
  {
    id: 232,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
    type: 'ebook',
    category: ['sf'],
    title: 'Window Displays',
    author: {
      name: 'Fionna Klaves',
      awards: [
        'Jerde, Satterfield and Champlin',
        'Dickens, Morissette and Gutmann',
        'Ziemann, McKenzie and Stiedemann',
      ],
      representatives: [
        { name: 'Bootstrap', thumbnail: '' },
        {
          name: 'vBulletin',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'Microsoft Dynamics ERP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    },
    translator: {
      name: 'Simonette Filson',
      nationality: 'North Korea',
      career: 'Hammes-Walter',
      representatives: [
        {
          name: 'Oracle Identity Manager',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction: 'Suspendisse accumsan tortor quis turpis.',
    },
    publisher: 'Block LLC',
    starRate: { rate: 1.6, rateNum: 78, rateBuyerNum: 5 },
    rentalPrice: 1135,
    rentalSalePercent: 1,
    buyPrice: 26897,
    buySalePercent: 26,
    count: 24,
    freeCount: 3,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    index:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    lastlyRead: '2021-08-31',
  },
  {
    id: 233,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
    type: 'webNovel',
    category: ['humanities'],
    title: 'LVDS',
    author: {
      name: 'Richard Drover',
      awards: ['Christiansen-Russel', 'Altenwerth, Wisoky and Kertzmann'],
      representatives: [
        {
          name: 'OHS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'VSEO',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction:
        'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    },
    translator: {
      name: 'Eward Dunbabin',
      nationality: 'North Korea',
      career: 'Jacobson-Beahan',
      representatives: [
        {
          name: 'World War II',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Insurance',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'NPI Management',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    },
    publisher: 'Hilpert Inc',
    starRate: { rate: 4.0, rateNum: 70, rateBuyerNum: 14 },
    rentalPrice: 1106,
    rentalSalePercent: 41,
    buyPrice: 19318,
    buySalePercent: 28,
    count: 3,
    freeCount: 10,
    isFinished: false,
    canRent: false,
    waitFree: false,
    xRated: false,
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    index:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    lastlyRead: '2021-01-14',
  },
  {
    id: 234,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
    type: 'ebook',
    category: ['romance'],
    title: 'Online Advertising',
    author: {
      name: 'Almeria Malpas',
      awards: ['Crist-Altenwerth'],
      representatives: [
        {
          name: 'CTD',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Athletic Training',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'Olfaction',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction:
        'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    },
    translator: {
      name: 'Stevy Rheubottom',
      nationality: 'North Korea',
      career: 'Wolf and Sons',
      representatives: [
        {
          name: 'Krakatoa',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'MRDs',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'Book Design',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Xinet',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    },
    publisher: 'McKenzie LLC',
    starRate: { rate: 2.0, rateNum: 79, rateBuyerNum: 27 },
    rentalPrice: 604,
    rentalSalePercent: 7,
    buyPrice: 33881,
    buySalePercent: 15,
    count: 16,
    freeCount: 10,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: false,
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    index:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    lastlyRead: '2021-04-24',
  },
  {
    id: 235,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
    type: 'webNovel',
    category: ['fantasy'],
    title: 'Psychotherapy',
    author: {
      name: 'Heywood Trodden',
      awards: ['Hirthe-Bauch', 'Kohler, Farrell and Lakin'],
      representatives: [
        {
          name: 'Wicklander-Zulawski Interview &amp; Interrogation',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    },
    translator: {
      name: 'Keane Clack',
      nationality: 'North Korea',
      career: "O'Kon-Fay",
      representatives: [{ name: 'MVS', thumbnail: '' }],
      introduction:
        'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    },
    publisher: 'Kemmer, Bartoletti and Harris',
    starRate: { rate: 4.1, rateNum: 68, rateBuyerNum: 21 },
    rentalPrice: 337,
    rentalSalePercent: 1,
    buyPrice: 3681,
    buySalePercent: 31,
    count: 23,
    freeCount: 6,
    isFinished: true,
    canRent: true,
    waitFree: true,
    xRated: false,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    index:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    lastlyRead: '2021-08-22',
  },
  {
    id: 236,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
    type: 'novel',
    category: ['thriller', 'fantasy'],
    title: 'Utilization Review',
    author: {
      name: 'Udale Punt',
      awards: ['Howell LLC'],
      representatives: [{ name: 'Manual Therapy', thumbnail: '' }],
      introduction:
        'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    },
    translator: {
      name: 'Fraze Meadway',
      nationality: 'North Korea',
      career: 'Braun-Franecki',
      representatives: [
        {
          name: 'Digital IC Design',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'GSM-R',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Estimates',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Toxicology',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction: 'Suspendisse ornare consequat lectus.',
    },
    publisher: 'Schmitt, Emmerich and Blanda',
    starRate: { rate: 4.7, rateNum: 63, rateBuyerNum: 26 },
    rentalPrice: 593,
    rentalSalePercent: 1,
    buyPrice: 34418,
    buySalePercent: 41,
    count: 21,
    freeCount: 10,
    isFinished: true,
    canRent: false,
    waitFree: true,
    xRated: true,
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    index:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    lastlyRead: '2020-12-24',
  },
  {
    id: 237,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
    type: 'webNovel',
    category: ['detective'],
    title: 'Six Sigma',
    author: {
      name: 'Dido Haylands',
      awards: ['Torp-Volkman', 'Bradtke-Little', 'Hoppe, Gibson and Grimes'],
      representatives: [
        {
          name: 'OS/390',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'JReport',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        { name: 'TPMS', thumbnail: '' },
        {
          name: 'Trials',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
      ],
      introduction: 'Etiam justo.',
    },
    translator: {
      name: 'Kenn Millington',
      nationality: 'North Korea',
      career: 'Brekke LLC',
      representatives: [
        {
          name: 'CSA 2010',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Simulink',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'VSD',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction:
        'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    },
    publisher: 'Wisoky, Raynor and Welch',
    starRate: { rate: 2.9, rateNum: 74, rateBuyerNum: 24 },
    rentalPrice: 620,
    rentalSalePercent: 50,
    buyPrice: 11167,
    buySalePercent: 16,
    count: 22,
    freeCount: 0,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: false,
    description: 'In eleifend quam a odio.',
    index:
      'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    lastlyRead: '2020-12-08',
  },
  {
    id: 238,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
    type: 'webNovel',
    category: ['sf'],
    title: 'IT Project &amp; Program Management',
    author: {
      name: 'Berget Rawcliff',
      awards: ['Hamill, Prosacco and Stamm', 'Johnston and Sons', 'Boyer Inc'],
      representatives: [
        {
          name: 'OLE',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'Vulnerability Scanning',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'RoboHelp',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'JAXB',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'TMS320',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
      ],
      introduction:
        'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    },
    translator: {
      name: 'Odie Dorkin',
      nationality: 'North Korea',
      career: 'Anderson-Anderson',
      representatives: [
        {
          name: 'LDS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'SIP Trunking',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
      ],
      introduction:
        'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    },
    publisher: 'Ruecker-Jones',
    starRate: { rate: 0.9, rateNum: 60, rateBuyerNum: 8 },
    rentalPrice: 733,
    rentalSalePercent: 35,
    buyPrice: 36560,
    buySalePercent: 20,
    count: 29,
    freeCount: 4,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: false,
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    index:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    lastlyRead: '2021-08-25',
  },
  {
    id: 239,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
    type: 'webNovel',
    category: ['humanities', 'romance'],
    title: 'Mobile Technology',
    author: {
      name: 'Padraic De Cristoforo',
      awards: ['Beahan, Walsh and Dickinson', 'Parisian-Flatley'],
      representatives: [],
      introduction:
        'In eleifend quam a odio. In hac habitasse platea dictumst.',
    },
    translator: {
      name: 'Cori Spurdle',
      nationality: 'North Korea',
      career: 'Welch LLC',
      representatives: [
        {
          name: 'Indoor Air Quality',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'GT-Power',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Earthworks',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'FM200',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        { name: 'PFT', thumbnail: '' },
      ],
      introduction:
        'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    },
    publisher: 'Moen-Becker',
    starRate: { rate: 4.7, rateNum: 76, rateBuyerNum: 22 },
    rentalPrice: 419,
    rentalSalePercent: 20,
    buyPrice: 57938,
    buySalePercent: 16,
    count: 5,
    freeCount: 10,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: false,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    index:
      'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    lastlyRead: '2021-11-03',
  },
  {
    id: 240,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
    type: 'novel',
    category: ['sf'],
    title: 'RPD',
    author: {
      name: 'Andy Gorstidge',
      awards: ['Bradtke and Sons'],
      representatives: [
        {
          name: 'Xcart',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'SBRT',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'Indoor Air Quality',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
      ],
      introduction:
        'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    },
    translator: {
      name: 'Arnoldo Gocke',
      nationality: 'North Korea',
      career: 'Hills LLC',
      representatives: [
        {
          name: 'LabVIEW',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
      ],
      introduction:
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    },
    publisher: 'Stokes-Gottlieb',
    starRate: { rate: 0.4, rateNum: 41, rateBuyerNum: 6 },
    rentalPrice: 317,
    rentalSalePercent: 16,
    buyPrice: 49644,
    buySalePercent: 11,
    count: 27,
    freeCount: 6,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: true,
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    index: 'Maecenas pulvinar lobortis est.',
    lastlyRead: '2021-03-17',
  },
  {
    id: 241,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
    type: 'webNovel',
    category: ['humanities'],
    title: 'FW',
    author: {
      name: 'Elinor Vosse',
      awards: [
        'Crist, Pouros and Lowe',
        'Mertz, Blanda and Schroeder',
        'Price-Stiedemann',
      ],
      representatives: [
        {
          name: 'Koi Ponds',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'Public Policy',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
      ],
      introduction:
        'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    },
    translator: {
      name: 'Krissy Mithon',
      nationality: 'North Korea',
      career: 'Treutel-Cremin',
      representatives: [
        {
          name: 'Hardware Diagnostics',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'MSBuild',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Wireless',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'OHSAS 18001',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
      ],
      introduction:
        'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    },
    publisher: 'Smitham, Cole and Moore',
    starRate: { rate: 1.0, rateNum: 52, rateBuyerNum: 26 },
    rentalPrice: 1170,
    rentalSalePercent: 35,
    buyPrice: 46922,
    buySalePercent: 41,
    count: 2,
    freeCount: 1,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: false,
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    index:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    lastlyRead: '2020-11-17',
  },
  {
    id: 242,
    thumbnail: '',
    type: 'novel',
    category: ['detective', 'fantasy'],
    title: 'Basic HTML',
    author: {
      name: 'Bo De Cleyne',
      awards: [
        'Bashirian, Dicki and Konopelski',
        'Kassulke Group',
        'Weissnat Inc',
      ],
      representatives: [],
      introduction:
        'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    },
    translator: {
      name: 'Hephzibah Teideman',
      nationality: 'North Korea',
      career: 'Mills-Kunze',
      representatives: [],
      introduction:
        'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    },
    publisher: 'Schmidt, Ratke and Heidenreich',
    starRate: { rate: 1.6, rateNum: 76, rateBuyerNum: 17 },
    rentalPrice: 1062,
    rentalSalePercent: 28,
    buyPrice: 37952,
    buySalePercent: 17,
    count: 11,
    freeCount: 6,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    index:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    lastlyRead: '2021-09-21',
  },
  {
    id: 243,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
    type: 'novel',
    category: ['society'],
    title: 'Customer Support',
    author: {
      name: 'Pavia Minter',
      awards: ['Schiller Group', 'Mills, Carroll and Hane', 'Rogahn Inc'],
      representatives: [
        {
          name: 'SMT Kingdom',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        { name: 'BPML', thumbnail: '' },
        {
          name: 'DFLSS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'IAS 39',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'LP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'NRA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction:
        'Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    },
    translator: {
      name: 'Glyn Twelftree',
      nationality: 'North Korea',
      career: 'Sauer, Howe and Hartmann',
      representatives: [
        {
          name: 'UK Bribery Act',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Ignite-UX',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Telephone Skills',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'Judicial Review',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'Test Automation',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
      ],
      introduction:
        'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    },
    publisher: 'Leannon-Dach',
    starRate: { rate: 0.0, rateNum: 62, rateBuyerNum: 11 },
    rentalPrice: 723,
    rentalSalePercent: 7,
    buyPrice: 35851,
    buySalePercent: 29,
    count: 8,
    freeCount: 2,
    isFinished: true,
    canRent: true,
    waitFree: false,
    xRated: true,
    description: 'Aenean fermentum.',
    index:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    lastlyRead: '2021-08-05',
  },
  {
    id: 244,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
    type: 'webNovel',
    category: ['humanities', 'fantasy'],
    title: 'TPU',
    author: {
      name: 'Bobbie Zwicker',
      awards: ['Windler-Buckridge'],
      representatives: [
        {
          name: 'Zen',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
      ],
      introduction:
        'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    },
    translator: {
      name: 'Hester Jimson',
      nationality: 'North Korea',
      career: 'Tillman, Klocko and Rempel',
      representatives: [
        {
          name: 'On-Set VFX Supervision',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        { name: 'DSLR', thumbnail: '' },
      ],
      introduction:
        'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    },
    publisher: 'Zemlak, Goodwin and Hintz',
    starRate: { rate: 4.5, rateNum: 48, rateBuyerNum: 18 },
    rentalPrice: 865,
    rentalSalePercent: 47,
    buyPrice: 40006,
    buySalePercent: 16,
    count: 4,
    freeCount: 5,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: true,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    index:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    lastlyRead: '2021-01-18',
  },
  {
    id: 245,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
    type: 'webNovel',
    category: ['romance'],
    title: 'CV',
    author: {
      name: 'Abra Zellick',
      awards: [
        'Satterfield Group',
        'Cremin, Howell and Kreiger',
        'Mills, Gusikowski and Schaefer',
      ],
      representatives: [
        {
          name: 'WM modules',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'MDB',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Sleep Medicine',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    },
    translator: {
      name: 'Glenine Ewington',
      nationality: 'North Korea',
      career: 'Ferry Inc',
      representatives: [
        {
          name: 'SBEM',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        { name: 'Judo', thumbnail: '' },
        {
          name: 'Biochemistry',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'DC-9',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
      ],
      introduction:
        'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    },
    publisher: 'Quigley-Rutherford',
    starRate: { rate: 4.0, rateNum: 33, rateBuyerNum: 23 },
    rentalPrice: 650,
    rentalSalePercent: 4,
    buyPrice: 4577,
    buySalePercent: 47,
    count: 2,
    freeCount: 6,
    isFinished: false,
    canRent: true,
    waitFree: false,
    xRated: true,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    index:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    lastlyRead: '2021-10-06',
  },
  {
    id: 246,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
    type: 'novel',
    category: ['thriller', 'sf'],
    title: 'Church Growth',
    author: {
      name: 'Cchaddie Ruske',
      awards: ['Auer, Koch and Treutel'],
      representatives: [
        {
          name: 'PPO',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'WGA',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'Snacks',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
      ],
      introduction:
        'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    },
    translator: {
      name: 'Ava Seine',
      nationality: 'North Korea',
      career: 'Sawayn-Fay',
      representatives: [
        {
          name: 'Efficent',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
        {
          name: 'Social Psychology',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ofgRWgYEEa.jpg',
        },
      ],
      introduction:
        'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    },
    publisher: 'Graham Inc',
    starRate: { rate: 1.7, rateNum: 57, rateBuyerNum: 23 },
    rentalPrice: 1204,
    rentalSalePercent: 20,
    buyPrice: 20152,
    buySalePercent: 2,
    count: 3,
    freeCount: 6,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: true,
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    index:
      'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    lastlyRead: '2021-05-12',
  },
  {
    id: 247,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
    type: 'novel',
    category: ['humanities', 'thriller'],
    title: 'Nastran',
    author: {
      name: 'Shannon Eltun',
      awards: ['Franecki Inc'],
      representatives: [
        {
          name: 'OSHA Certified',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
        {
          name: 'NGP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'RIP',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
        },
        {
          name: 'OTS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'HP Server Hardware',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'MBR',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
      ],
      introduction:
        'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    },
    translator: {
      name: 'Saundra Tomaszynski',
      nationality: 'North Korea',
      career: 'Predovic, Barton and Bogan',
      representatives: [
        {
          name: 'Registered Patent Attorney',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'XML Databases',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg',
        },
        {
          name: 'Order Fulfillment',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction: 'Vestibulum sed magna at nunc commodo placerat.',
    },
    publisher: 'Murray and Sons',
    starRate: { rate: 2.2, rateNum: 50, rateBuyerNum: 26 },
    rentalPrice: 718,
    rentalSalePercent: 12,
    buyPrice: 21774,
    buySalePercent: 33,
    count: 19,
    freeCount: 2,
    isFinished: false,
    canRent: true,
    waitFree: true,
    xRated: false,
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    index:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    lastlyRead: '2020-12-11',
  },
  {
    id: 248,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg',
    type: 'novel',
    category: ['sf'],
    title: 'Logging',
    author: {
      name: 'Benedick Harbach',
      awards: ['Haag Inc', 'Okuneva-Pagac', 'Pouros Inc'],
      representatives: [
        {
          name: 'Screening',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'FM Radio',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg',
        },
        {
          name: 'MPI',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
        {
          name: 'Vulcan',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    },
    translator: {
      name: 'Dasya Gunney',
      nationality: 'North Korea',
      career: 'Mayert Group',
      representatives: [
        {
          name: 'Embedded Software',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg',
        },
        {
          name: 'Higher Education',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg',
        },
      ],
      introduction:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    },
    publisher: 'Rowe Group',
    starRate: { rate: 4.8, rateNum: 30, rateBuyerNum: 13 },
    rentalPrice: 239,
    rentalSalePercent: 24,
    buyPrice: 57409,
    buySalePercent: 1,
    count: 4,
    freeCount: 6,
    isFinished: false,
    canRent: false,
    waitFree: true,
    xRated: false,
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    index:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    lastlyRead: '2021-06-24',
  },
  {
    id: 249,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
    type: 'ebook',
    category: ['society'],
    title: 'CFIA',
    author: {
      name: 'Georgy Bonanno',
      awards: ['Upton-Pouros', 'Roberts-Berge', 'Gusikowski, Murray and Crona'],
      representatives: [],
      introduction:
        'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    },
    translator: {
      name: 'Gilberto Barry',
      nationality: 'North Korea',
      career: 'Lowe-Kuhn',
      representatives: [
        {
          name: 'Lua',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'Social Media Marketing',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
        },
        {
          name: 'CCENT',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
      ],
      introduction:
        'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    },
    publisher: 'Bahringer, Reichert and Haley',
    starRate: { rate: 2.1, rateNum: 47, rateBuyerNum: 10 },
    rentalPrice: 760,
    rentalSalePercent: 35,
    buyPrice: 34327,
    buySalePercent: 42,
    count: 2,
    freeCount: 2,
    isFinished: true,
    canRent: false,
    waitFree: true,
    xRated: true,
    description: 'Pellentesque at nulla. Suspendisse potenti.',
    index:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    lastlyRead: '2021-02-04',
  },
  {
    id: 250,
    thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg',
    type: 'novel',
    category: ['thriller', 'society'],
    title: 'DNA electrophoresis',
    author: {
      name: 'Aluin Bridel',
      awards: ['Hauck-Grady'],
      representatives: [
        {
          name: 'Nortel DMS',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg',
        },
        {
          name: 'NDC',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/2iQ8ERK7yN.jpg',
        },
        {
          name: 'Class Actions',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/Lkxg5yptjB.jpg',
        },
        {
          name: 'Uranium',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg',
        },
        {
          name: 'XP Professional',
          thumbnail: 'https://i.esdrop.com/d/1o9bbwj5cf0u/f0m37oaOO2.jpg',
        },
      ],
      introduction:
        'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    },
    translator: {
      name: 'Ariela Waliszek',
      nationality: 'North Korea',
      career: 'Schamberger-Wuckert',
      representatives: [],
      introduction:
        'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    },
    publisher: 'Streich Inc',
    starRate: { rate: 3.0, rateNum: 65, rateBuyerNum: 22 },
    rentalPrice: 126,
    rentalSalePercent: 22,
    buyPrice: 32734,
    buySalePercent: 43,
    count: 6,
    freeCount: 9,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: true,
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    index:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    lastlyRead: '2021-07-14',
  },
]
