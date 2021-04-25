import {Category, Product, Sub_category, Auth_token, Sale} from './models';

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: 'category 1',
    image: 'https://img.icons8.com/ios/452/product--v2.png'
  },
  {
    id: 2,
    name: 'category 2',
    image: 'https://img.icons8.com/ios/452/product--v2.png'
  },
  {
    id: 3,
    name: 'category 3',
    image: 'https://img.icons8.com/ios/452/product--v2.png'
  },
  {
    id: 4,
    name: 'category 4',
    image: 'https://img.icons8.com/ios/452/product--v2.png'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'product 1',
    price: 1,
    description: 'Abc',
    image: 'https://www.technodom.kz/media/catalog/product/cache/79d62b5a17d20b122cb8cbf050cc7241/b/8/b856eaf43c7df24ce74d8780a915ecba1131eece_217129_1vbn.jpg',
    rating: 3.3,
    sub_category: 1

 },
  {id: 2,
    name: 'product 2',
    price: 2,
    description: 'Abc',
    image: 'https://www.technodom.kz/media/catalog/product/cache/79d62b5a17d20b122cb8cbf050cc7241/b/8/b856eaf43c7df24ce74d8780a915ecba1131eece_217129_1vbn.jpg',
    rating: 5,
    sub_category: 1
  },
  {
    id: 3,
    name: 'product 3',
    price: 3,
    description: 'Abc',
    image: 'https://img.icons8.com/ios/452/product--v2.png',
    rating: 3.5,
    sub_category: 2
  },
  {
    id: 4,
    name: 'product 4 1 1',
    price: 10,
    description: 'Abc',
    image: 'https://img.icons8.com/ios/452/product--v2.png',
    rating: 3,
    sub_category: 3
  },
  {
    id: 5,
    name: 'product 1',
    price: 1,
    description: 'Abc',
    image: 'https://www.technodom.kz/media/catalog/product/cache/79d62b5a17d20b122cb8cbf050cc7241/b/8/b856eaf43c7df24ce74d8780a915ecba1131eece_217129_1vbn.jpg',
    rating: 3.3,
    sub_category: 1

  },
  {
    id: 6,
    name: 'product 1',
    price: 1,
    description: 'Abc',
    image: 'https://www.technodom.kz/media/catalog/product/cache/79d62b5a17d20b122cb8cbf050cc7241/b/8/b856eaf43c7df24ce74d8780a915ecba1131eece_217129_1vbn.jpg',
    rating: 3.3,
    sub_category: 1

  },
  {
    id: 7,
    name: 'product 1',
    price: 1,
    description: 'Abc',
    image: 'https://www.technodom.kz/media/catalog/product/cache/79d62b5a17d20b122cb8cbf050cc7241/b/8/b856eaf43c7df24ce74d8780a915ecba1131eece_217129_1vbn.jpg',
    rating: 3.3,
    sub_category: 1

  },

];



export const SUB_CATEGORIES: Sub_category[] = [
  {
    id: 1,
    name: 'Sub-category 1',
    image: 'https://img.icons8.com/ios/452/product--v2.png',
    category_id: 1
  },
  {
    id: 2,
    name: 'Sub-category 2',
    image: 'https://img.icons8.com/ios/452/product--v2.png',
    category_id: 1
  },
  {
    id: 3,
    name: 'Sub-category 3',
    image: 'https://img.icons8.com/ios/452/product--v2.png',
    category_id: 1
  },
  {
    id: 4,
    name: 'Sub-category 4',
    image: 'https://img.icons8.com/ios/452/product--v2.png',
    category_id: 1
  },
  

  {
    id: 5,
    name: 'Sub-category 5',
    image: 'https://img.icons8.com/ios/452/product--v2.png',
    category_id: 2
  },
  {
    id: 6,
    name: 'Sub-category 6',
    image: 'https://img.icons8.com/ios/452/product--v2.png',
    category_id: 2
  },
  {
    id: 7,
    name: 'Sub-category 7',
    image: 'https://img.icons8.com/ios/452/product--v2.png',
    category_id: 2
  },
  {
    id: 8,
    name: 'Sub-category 8',
    image: 'https://img.icons8.com/ios/452/product--v2.png',
    category_id: 2
  },
  {
    id: 9,
    name: 'Sub-category 9',
    image: 'https://img.icons8.com/ios/452/product--v2.png',
    category_id: 3
  },
  {
    id: 10,
    name: 'Sub-category 10',
    image: 'https://img.icons8.com/ios/452/product--v2.png',
    category_id: 3
  },
  {
    id: 11,
    name: 'Sub-category 11',
    image: 'https://img.icons8.com/ios/452/product--v2.png',
    category_id: 3
  },
  {
    id: 12,
    name: 'Sub-category 12',
    image: 'https://img.icons8.com/ios/452/product--v2.png',
    category_id: 3
  },
  {
    id: 13,
    name: 'Sub-category 13',
    image: 'https://img.icons8.com/ios/452/product--v2.png',
    category_id: 4
  },
  {
    id: 14,
    name: 'Sub-category 14',
    image: 'https://img.icons8.com/ios/452/product--v2.png',
    category_id: 4
  },
  {
    id: 15,
    name: 'Sub-category 15',
    image: 'https://img.icons8.com/ios/452/product--v2.png',
    category_id: 4
  },
  {
    id: 16,
    name: 'Sub-category 16',
    image: 'https://img.icons8.com/ios/452/product--v2.png',
    category_id: 4
  },

];

export const SALES: Sale[] = [
  {
    id: 1,
    name: 'Double profit',
    description: 'Some lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem asdasdasdas dasd as das das d asasdasdasdlorem lorasdasdas ddasdasdasdas dasd sada sdas d asd asdas da sdasd asasd asdasddsa ',
    date: new Date(),
    image: 'https://www.technodom.kz/under/banners/kup580.png'
  },
  {
    id: 2,
    name: 'Double profit 2',
    description: 'Some description',
    date: new Date(),
    image: 'https://www.technodom.kz/under/banners/kup580.png'
  },
  {
    id: 3,
    name: 'Double profit 3',
    description: 'Some desc',
    date: new Date(),
    image: 'https://www.technodom.kz/under/banners/kup580.png'
  }
];
