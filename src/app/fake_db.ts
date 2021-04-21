import {Category, Product, Sub_category, Auth_token, Sale} from './models';

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: 'name 1',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fogdream.ru%2Fimages%2Fdetailed%2F1%2Fbrr.png&f=1&nofb=1'
  },
  {
    id: 2,
    name: 'name 2',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fogdream.ru%2Fimages%2Fdetailed%2F1%2Fbrr.png&f=1&nofb=1'
  },
  {
    id: 3,
    name: 'name 3',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fogdream.ru%2Fimages%2Fdetailed%2F1%2Fbrr.png&f=1&nofb=1'
  },
  {
    id: 4,
    name: 'name 4',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fogdream.ru%2Fimages%2Fdetailed%2F1%2Fbrr.png&f=1&nofb=1'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'name 1',
    price: 200, description: 'Abc',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fogdream.ru%2Fimages%2Fdetailed%2F1%2Fbrr.png&f=1&nofb=1',
    rating: 3.3

 },
  {id: 2,
    name: 'name 2',
    price: 200,
    description: 'Abc',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fogdream.ru%2Fimages%2Fdetailed%2F1%2Fbrr.png&f=1&nofb=1',
    rating: 5
  },
  {
    id: 3,
    name: 'name 3',
    price: 200,
    description: 'Abc',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fogdream.ru%2Fimages%2Fdetailed%2F1%2Fbrr.png&f=1&nofb=1',
    rating: 3.5
  },
  {
    id: 4,
    name: 'name 4',
    price: 200,
    description: 'Abc',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fogdream.ru%2Fimages%2Fdetailed%2F1%2Fbrr.png&f=1&nofb=1',
    rating: 3
  },

];



export const SUB_CATEGORIES: Sub_category[] = [
  {
    id: 1,
    name: 'name 1',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fogdream.ru%2Fimages%2Fdetailed%2F1%2Fbrr.png&f=1&nofb=1',
    category_id: 1
  },
  {
    id: 2,
    name: 'name 2',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fogdream.ru%2Fimages%2Fdetailed%2F1%2Fbrr.png&f=1&nofb=1',
    category_id: 1
  },
  {
    id: 3,
    name: 'name 3',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fogdream.ru%2Fimages%2Fdetailed%2F1%2Fbrr.png&f=1&nofb=1',
    category_id: 2
  },
  {
    id: 4,
    name: 'name 4',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fogdream.ru%2Fimages%2Fdetailed%2F1%2Fbrr.png&f=1&nofb=1',
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
