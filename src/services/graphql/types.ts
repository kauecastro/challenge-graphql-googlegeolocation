export interface Product {
  id: Number;
  images: [ProductImage];
  productVariants: ProductVariant[];
  title: string;
}

export interface ProductVariant {
  price: Number;
}

export interface ProductImage {
  url: string;
}

export interface Poc {
  id: Int16Array;
  products: Product[];
}

export interface ProductVars {
  id: string;
  search: string;
  categoryId: string;
}

export interface ProductData {
  poc: Poc;
}

export interface Distributor {
  id: Number;
  status: string;
  tradingName: string;
  officialName: string;
}

export interface DistributorData {
  pocSearch: Distributor[];
}

export interface DistributorVars {
  now: string;
  algorithm: string;
  lat: string;
  long: string;
}
