export interface Image {
  _id: string;
  label: string;
  url: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ImageObjectValue {
  label: string;
  url: string;
  password: string;
}