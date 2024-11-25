export interface IUserSignUpInterface{
    first_name: string;
    last_name: string;
    email_id: string;
    mobile_number: string;
    password: string;
}

export interface IUserSignInInterface{
    email_id: string;
    password: string;
}