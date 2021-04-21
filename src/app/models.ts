export interface Auth_token {
  token: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;

}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  sub_category: number;

}

export interface Sub_category {
  id: number;
  name: string;
  image: string;
  category_id: number;

}

export interface Sale {
  id: number;
  name: string;
  description: string;
  date: Date;
  image: string;
}
