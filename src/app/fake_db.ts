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
    image: 'https://img.icons8.com/ios/452/product--v2.png',
    rating: 3.3,
    sub_category: 1

 },
  {id: 2,
    name: 'product 2',
    price: 2,
    description: 'Abc',
    image: 'https://img.icons8.com/ios/452/product--v2.png',
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

];



export const SUB_CATEGORIES: Sub_category[] = [
  {
    id: 1,
    name: 'sub 1',
    image: 'https://img.icons8.com/ios/452/product--v2.png',
    category_id: 1
  },
  {
    id: 2,
    name: 'sub 2',
    image: 'https://img.icons8.com/ios/452/product--v2.png',
    category_id: 1
  },
  {
    id: 3,
    name: 'sub 3',
    image: 'https://img.icons8.com/ios/452/product--v2.png',
    category_id: 2
  },
  {
    id: 4,
    name: 'sub 4',
    image: 'https://img.icons8.com/ios/452/product--v2.png',
    category_id: 3
  }
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
