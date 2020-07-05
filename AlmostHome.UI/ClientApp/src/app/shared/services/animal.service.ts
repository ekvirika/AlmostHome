import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from '../models/Animal.model';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  public animals: Animal[];
  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    console.log(this.baseUrl);
   }


  postAnimal(formData : Animal): Observable<Animal> {
    return this.httpClient.post<Animal>(`${this.baseUrl}api/Animals`, formData)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAllAnimals(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(`${this.baseUrl}api/Animals`)
    // return this.httpClient.get<Animal[]>(this.baseUrl + 'api/Animals')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  putAnimal(id : number, Animal : Animal): Observable<Animal> {
    return this.httpClient.put<Animal>(`${this.baseUrl}api/Animals` + id, Animal)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deleteAnimal(id : number){
    return this.httpClient.delete<Animal>(`${this.baseUrl}api/Animals` + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
      console.log(errorMessage);
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      console.log(errorMessage);
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
