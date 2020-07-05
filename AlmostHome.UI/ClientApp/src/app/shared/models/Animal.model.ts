import { GenderType } from "./Account.model";

export class Animal{
    id : number;
    name : string;
    age:number;
    reasonToAdopt:string;
    foundDate:string;
    locationCity:string;
    animalCategory:AnimalCategory;
    animalBreed:string;
    color:string;
    sex:GenderType;
    condition:string;
    imageUrl:string;
}


export enum AnimalCategory {Dog = 1, Cat, Bird}