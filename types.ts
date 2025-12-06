export enum ProductType {
  SERVICE = 'service',
  COURSE = 'course',
  PAID_PRODUCT = 'paid',
  FREE_PRODUCT = 'free'
}

export interface Product {
  id: number;
  type: ProductType;
  title: string;
  description: string;
  price?: number;
  originalPrice?: number;
  pricePrefix?: string;
  imageUrl: string;
  actionText: string;
  actionLink: string;
  discount?: number;
}
