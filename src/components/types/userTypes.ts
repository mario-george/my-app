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
  interface Props {
    params: {
      userID: string;
    };
  }