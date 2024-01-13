export interface PlaceType {
    location:{
      lat:number,
      lng:number
    }
    image: string;
    description: string;
    title: string;
    address: string;
    id: string;
    creator?:string
  }