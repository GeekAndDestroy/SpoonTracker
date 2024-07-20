export type UserType = {
    user_data?: any;  
    first_name: string;
    last_name: string;
    email: string;
    token: string;
    password: string;
    user_id: number;
    spoons: number;
    profile_pic: string;
  };

export type UserFormDataType = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    confirm_password?: string;
  };

export type UserLoginDataType = {
    email: string;
    password: string;
  };

export type TaskType = {
    description: string;
    duration: string;
    id: number;
    spoons_needed: number;
    task: string;
    time_of_day: string;
    user_id: number;
  }

