export interface ProductType {
  name: string;
  image: string;
  price: string;
  sale_price?: string;
  is_on_sale?: boolean;
  expire_date: string;
  contents: string;
}

export interface ProductProps {
  item: ProductType;
}