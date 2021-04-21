import { Category, Product, Sub_category, Auth_token } from "./models";

export const CATEGORIES : Category[] = [
  {
    id:1,
    name:'name 1',
    image:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fogdream.ru%2Fimages%2Fdetailed%2F1%2Fbrr.png&f=1&nofb=1'
  },
  {
    id:2,
    name:'name 2',
    image:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fogdream.ru%2Fimages%2Fdetailed%2F1%2Fbrr.png&f=1&nofb=1'
  },
  {
    id:3,
    name:'name 3',
    image:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fogdream.ru%2Fimages%2Fdetailed%2F1%2Fbrr.png&f=1&nofb=1'
  },
  {
    id:4,
    name:'name 4',
    image:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fogdream.ru%2Fimages%2Fdetailed%2F1%2Fbrr.png&f=1&nofb=1'
  }
]

export const PRODUCTS : Product[] = [
  {
    id:1,
    name:'name 1',
    price: 200, description:"Abc",
    image:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fogdream.ru%2Fimages%2Fdetailed%2F1%2Fbrr.png&f=1&nofb=1',
    rating: 3.3

 },
  {id:2,
    name:'name 2',
    price: 200,
    description:"Abc",
    image:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fogdream.ru%2Fimages%2Fdetailed%2F1%2Fbrr.png&f=1&nofb=1',
    rating: 5
  },
  {
    id:3,
    name:'name 3',
    price: 200,
    description:"Abc",
    image:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fogdream.ru%2Fimages%2Fdetailed%2F1%2Fbrr.png&f=1&nofb=1',
    rating: 3.5
  },
  {
    id:4,
    name:'name 4',
    price: 200,
    description:"Abc",
    image:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fogdream.ru%2Fimages%2Fdetailed%2F1%2Fbrr.png&f=1&nofb=1',
    rating: 3
  },

]



export const SUB_CATEGORIES : Sub_category[] = [
  {
    id:1,
    name:'name 1',
    image:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fogdream.ru%2Fimages%2Fdetailed%2F1%2Fbrr.png&f=1&nofb=1',
    category_id: 1
  },
  {
    id:2,
    name:'name 2',
    image:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fogdream.ru%2Fimages%2Fdetailed%2F1%2Fbrr.png&f=1&nofb=1',
    category_id: 1
  },
  {
    id:3,
    name:'name 3',
    image:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fogdream.ru%2Fimages%2Fdetailed%2F1%2Fbrr.png&f=1&nofb=1',
    category_id: 2
  },
  {
    id:4,
    name:'name 4',
    image:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fogdream.ru%2Fimages%2Fdetailed%2F1%2Fbrr.png&f=1&nofb=1',
    category_id: 3
  }
]
