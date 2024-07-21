// import axios from 'axios';
import { UserFormDataType, UserType, UserLoginDataType, TaskType } from '../types';



const baseURL: string = 'https://spork-lb9l.onrender.com/';
const userEndpoint: string = 'users/';
const taskEndpoint: string = 'tasks/';
const taskByDateEndpoint: string = 'tasks/bydate/';
const tokenEndpoint: string = 'token/';


// const apiClientNoAuth = () => axios.create({
//     baseURL: baseURL
// })

// const apiClientBasicAuth = (username:string, password:string) => axios.create({
//     baseURL: baseURL,
//     headers: {
//         Authorization: 'Basic ' + btoa(username + ':' + password)
//     }
// })

// const apiClientTokenAuth = (token:string) => axios.create({
//     baseURL: baseURL,
//     headers: {
//         Authorization: 'Bearer ' + token
//     }
// })

type APIResponse<T> = {
    data?: T,
    error?: string
}

// export async function register(newUser:UserFormDataType):Promise<APIResponse<UserType>> {
//     let data;
//     let error;
//     try {
//         const response = await apiClientNoAuth().post(userEndpoint, newUser, {
//             headers: {
//               'Content-Type': 'application/json',
//             },
//           },)
//         data = response.data
//         console.log(data)
//     } catch (err) {
//         if (axios.isAxiosError(err)) {
//             error = err.response?.data.error
//         } else {
//             error = "Something went wrong"
//         }
//     }
//     return { data, error }
// }

export async function register(newUser: UserFormDataType): Promise<APIResponse<UserType>> {
    let data;
    let error;
    try {
        const response = await fetch(baseURL + userEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        });
        data = await response.json();
        // console.log("data from apiWrapper", data);
    } catch (err) {
        error = "Something went wrong";
    }
    return { data, error };
}

export async function login(user: UserLoginDataType): Promise<APIResponse<UserType>> {
    let data;
    let error;
    try {
        const response = await fetch(baseURL + tokenEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        data = await response.json();
        // console.log("data from apiWrapper", data);
    } catch (err) {
        error = "Something went wrong";
    }
    return { data, error };
}

export async function createTask(task: TaskType): Promise<APIResponse<TaskType>> {
    let data;
    let error;
    try {
        const response = await fetch(baseURL + taskEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        });
        data = await response.json();
        console.log("data from apiWrapper", data);
    } catch (err) {
        error = "Something went wrong";
    }
    return { data, error };
}

export async function getTasksByUserId(user_id: number): Promise<APIResponse<TaskType[]>> {
    let data;
    let error;
    try {
        const response = await fetch(baseURL + taskEndpoint + user_id);
        data = await response.json();
        console.log("TaskByID data from apiWrapper", data);
    } catch (err) {
        error = "Something went wrong";
    }
    return { data, error };
}

export async function getTasksByDate(user_id: number, start_date: string, end_date: string): Promise<APIResponse<TaskType[]>> {
    let data;
    let error;
    try {
        const response = await fetch(baseURL + taskByDateEndpoint + user_id + "/" + start_date + "/" + end_date);
        data = await response.json();
        console.log("TaskByDate data from apiWrapper", data);
    } catch (err) {
        error = "Something went wrong";
    }
    return { data, error };
}