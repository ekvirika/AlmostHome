export class Account{
    name: string;
    surname: string;
    age: number;
    gender: GenderType;
    email: string;
    password: string;
    id: number;
}

export enum GenderType{ Male = 1 , Female, Other }
