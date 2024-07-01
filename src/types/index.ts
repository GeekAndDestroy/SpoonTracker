export type UserType = {  
    first_name: string;
    last_name: string;
    email: string;
    token: string;
    phone_number: string;
    password: string;
    user_id: number;
  };

  export type UserFormDataType = {
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
    confirm_password?: string;
  };