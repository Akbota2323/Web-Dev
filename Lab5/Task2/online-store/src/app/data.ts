import { Category } from './models/category.model';
import { Product } from './models/product.model';

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Стайлеры' },
  { id: 2, name: 'Ноутбуки' },
  { id: 3, name: 'Смарт-часы' },
  { id: 4, name: 'Кофемашины' }
];

export const PRODUCTS: Product[] = [
  
  {
    id: 1,
    categoryId:1,
    name: 'Стайлер Dyson Airwrap HS05 Long',
    description: 'Синий/медный стайлер с дорожным чехлом для длинных волос.',
    price: 285000,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/he7/hd6/82992821239838.jpg?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h73/hc9/82992821764126.jpg?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/dyson-airwrap-hs05-long-s-dorozhnym-chehlom-i-rascheskami-stailer-sinii-mednyi-112707564/?c=750000000',
    likes: 351
  },
  {
    id: 2,
    categoryId:1,
    name: 'Выпрямитель Dyson Airstrait HT01',
    description: 'Паровой выпрямитель для сушки и выпрямления волос одновременно.',
    price: 245000,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hd0/he9/86180844503070.png?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h35/h30/81180295233566.jpg'],
    link: 'https://kaspi.kz/shop/p/dyson-airstrait-ht01-s-rascheskami-i-chehlom-parovoi-vyprjamitel--120012746/?c=750000000',
    likes: 121
  },
  {
    id: 3,
    categoryId:1,
    name: 'Стайлер Dyson Airwrap id HS08',
    description: 'Розовое золото, интеллектуальная система завивки.',
    price: 315000,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p32/pa2/65259706.jpg?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h9d/h67/83812234035230.jpg'],
    link: 'https://kaspi.kz/shop/p/dyson-airwrap-id-hs08-601848-01-rozovoe-zoloto-stailer-rozovyi-145797988/?c=750000000',
    likes: 15
  },
  {
    id: 4,
    categoryId:1,
    name: 'Фен Dyson Supersonic HD08 серый/розовый',
    description: 'Мощный цифровой двигатель и интеллектуальный контроль температуры для блеска волос.',
    price: 215000,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h16/hbf/86283948130334.png?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h23/h3d/81180295233566.jpg'],
    link: 'https://kaspi.kz/shop/p/dyson-supersonic-hd08-fen-seryi-rozovyi-107135219/?c=750000000',
    likes: 132
  },
  {
    id: 5,
    categoryId:1,
    name: 'BORK F732 стайлер бежевый, оранжевый',
    description: 'Мощный цифровой двигатель и интеллектуальный контроль температуры для блеска волос.',
    price: 261090,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/hf4/86968146133022.png?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h81/h12/86968146198558.png?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/bork-f732-stailer-bezhevyi-oranzhevyi-122968179/?c=750000000',
    likes: 46
  },
  {
    id: 6,
    categoryId:2,
    name: 'Ноутбук Apple MacBook Air 13 2020 MGN63RU/A',
    description: 'Легендарный чип M1, 8 Гб ОЗУ и SSD 256 Гб.',
    price: 365000,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63-100797845/',
    likes:934
  },
  {
    id: 7,
    categoryId:2,
    name: 'Ноутбук Apple MacBook Air 13 2025 MW123',
    description: 'Новинка 2025 года с увеличенной оперативной памятью 16 Гб.',
    price: 685000,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h1b/h4a/84964642226206.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000',
    likes:122
  },
  {
    id: 8,
    categoryId:2,
    name: 'Ноутбук Apple MacBook Air 13 2022 MC7X4',
    description: 'Чип M2, обновленный дизайн и MagSafe зарядка.',
    price: 495000,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p37/p87/22158172.jpg?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h71/h74/64402636931102.jpg'],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-256-gb-macos-mc7x4-133963854/?c=750000000',
    likes:94
  },
  {
    id: 9,
    categoryId:2,
    name: 'Ноутбук Acer Aspire 5 15.6 ',
    description: 'Новейшие процессоры Intel® Core™ 12-го поколения и видеокарта NVIDIA® GeForce RTX®',
    price: 399977,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hbf/h73/86421628518430.jpg?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/he8/h4a/86421628583966.png?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/acer-aspire-5-15-6-16-gb-ssd-512-gb-dos-a515-57g-53xl-nx-kmher-002-116327232/?c=750000000',
    likes:17
  },
  {
    id: 10,
    categoryId:2,
    name: 'Ноутбук Lenovo IdeaPad 3 15.6',
    description: 'Ноутбук IdeaPad 3 работает тише и с меньшим выделением тепла за счет использования оптимизированной механической системы ',
    price: 170471,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h2f/h20/64231858077726.jpg?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000',
    likes:613
  },
  {
    id: 11,
    categoryId:3,
    name: 'Смарт-часы Huawei WATCH GT 6',
    description: 'Новинка 2025 года с увеличенной оперативной памятью 16 Гб.',
    price: 99091,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pb7/p87/72527964.png?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p87/pfe/73833197.png?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/huawei-watch-gt-6-41-mm-zolotistyi-zolotistyi-147986879/?c=750000000',
    likes:33
  },
  {
    id: 12,
    categoryId:3,
    name: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 ',
    description: 'Мощные датчики для информации о вашем здоровье и активности. ',
    price: 139900,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/pe4/p9a/5542339.png?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000',
    likes:671
  },
  {
    id: 13,
    categoryId:3,
    name: 'Смарт-часы Apple Watch Series 11 M/L 46 ',
    description: 'стильные и функциональные умные часы для активной жизни, сочетающие передовые технологии и элегантный дизайн.',
    price: 217175,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p89/pba/64468961.png?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p6d/pba/64468962.png?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/apple-watch-series-11-m-l-46-mm-chernyi-145555823/?c=750000000',
    likes:101
  },
  {
    id: 14,
    categoryId:3,
    name: 'Смарт-часы Huawei WATCH GT 6 Pro',
    description: 'Премиальные смарт-часы с титановым корпусом и сапфировым стеклом, сочетающие стиль',
    price: 119325,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p07/pc3/73398201.png?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p08/pb0/73833217.png?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/huawei-watch-gt-6-pro-46-mm-chernyi-chernyi-148240615/?c=750000000',
    likes:95
  },
  {
    id: 15,
    categoryId:3,
    name: 'Смарт-часы Samsung Galaxy Watch 8',
    description: 'стильные и функциональные умные часы для активной жизни',
    price: 122106,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pca/p48/54615336.png?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p1f/p49/54615339.png?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-8-40-mm-serebristyi-belyi-142949811/?c=750000000',
    likes: 59
  },
  {
    id: 16,
    categoryId:4,
    name: 'Кофемашина Smeg EGF03PBEU кофе машина, пастельная голубая голубой',
    description: ' это стильное и функциональное решение для настоящих ценителей кофе',
    price: 599990,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h82/h6d/86077356441630.jpg?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h9c/h4e/86077356507166.jpg?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/kofemashina-smeg-egf03pbeu-kofe-mashina-pastel-naja-golubaja-goluboi-119661412/?c=750000000',
    likes:100
  },
  {
    id: 17,
    categoryId:4,
    name: 'Кофемашина Delonghi Magnifica S ECAM12.121 ',
    description: 'готовит бодрящий эспрессо и капучино с нежной молочной пеной. ',
    price: 209990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/he8/hac/86742449291294.png?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hbb/hf9/86742449487902.png?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/kofemashina-delonghi-magnifica-s-ecam12-121-b-chernyi-122220863/?c=750000000',
    likes:671
  },
  {
    id: 18,
    categoryId:4,
    name: 'Кофемашина HOKURA CM5520 черный ',
    description: 'идеальное решение для настоящих ценителей кофе.',
    price: 95988,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p67/p9c/75983700.png?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p4b/p9c/75983701.png?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/kofemashina-hokura-cm5520-chernyi-148648774/?c=750000000',
    likes:56
  },
  {
    id: 19,
    categoryId:4,
    name: 'Кофемашина KADY CM5600 белый',
    description: ' ваш персональный бариста дома, в офисе или кафе!',
    price: 57990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p1b/p4f/108312394.jpeg?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p30/p44/87094094.jpeg?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/kofemashina-kady-cm5600-belyi-146364520/?c=750000000',
    likes:313
  },
  {
    id: 20,
    categoryId:4,
    name: 'Кофемашина SGT SGT2308 серебристый',
    description: 'с цветным сенсорным экраном и автоматическим капучинатором',
    price: 100000,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p43/p06/60657358.png?format=gallery-large',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p27/p06/60657359.png?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/kofemashina-sgt-sgt2308-serebristyi-131664789/?c=750000000',
    likes: 530
  }



];