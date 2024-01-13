export interface InitialState {
  user: {
    token?: string | null;
    userID?: string | null;
    expirationDate?: Date | null | string;
    render:boolean
  };
  loggedIn?: boolean | null;
}



export interface RootState {
    user: {
      user: {
        token?: string | null;
        userID?: string | null;
        expirationDate?: Date | null;
        render:boolean
  
      };
      loggedIn?: boolean | null;
    };
  }
 export interface Props {
    params: {
      userID: string;
    };
  }
 export interface User {
    id: string;
    places: Array<any>;
    name: string;
    image: string;
  }

