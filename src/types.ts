export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  longDescription: string;
  images: string[]; // Product gallery images
  rating: number;
  reviewsCount: number;
  benefits: string[];
  specifications: ProductSpecification[];
  isBestSeller?: boolean;
  isNew?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  location: string;
}

export interface OrderFormData {
  title: string;
  fullName: string;
  mobileNumber: string;
  emailAddress: string;
  address: string;
  flatHouseNo: string;
  landmark: string;
  pincode: string;
  city: string;
  state: string;
  country: string; // India (read-only)
}

export interface GoogleReview {
  id: string;
  name: string;
  text: string;
  rating: number;
  location: string;
  date?: string;
  isLocalGuide?: boolean;
}

