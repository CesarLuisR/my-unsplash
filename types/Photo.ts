export interface Photo {
  _id: string;
  label: string;
  url: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PhotoObjectValue {
  label: string;
  url: string;
}