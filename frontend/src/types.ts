export interface ProductType {
  id: number
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

export interface ProductSpecification {
  key: string;
  value: string;
}

export interface ProductOrderingInformation {
  material: string;
  description: string;
  packaging: string;
}