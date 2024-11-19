import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  readonly API_URL = "http://localhost:8080/catify/categories"

  constructor(private http : HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }
}
