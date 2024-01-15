export interface SignUpErrors {
  name?: string;
  email?: string;
  password?: string;
  image?:string
}
export interface SignInErrors {
  email?: string;
  password?: string;
  back?: string;
}

export interface PlaceErrors {
  title?: string;
  description?: string;
  address?: string;
  back?: string;
}

export interface AddPlaceErrors {
  title?: string;
  address?: string;
  location?: string;
  description?: string;
}
