export interface Category {
  id: number;
  title: string;
  image: string;
}

export interface Product {
  id: number;
  title?: string;
  type?: string;
}
