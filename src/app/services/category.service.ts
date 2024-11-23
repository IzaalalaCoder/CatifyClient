import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  readonly API_URL_CATEGORIES = "http://localhost:8080/catify/categories";
  readonly API_URL_CATEGORY = "http://localhost:8080/catify/category";

  constructor(private http : HttpClient) { }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL_CATEGORIES);
  }

  getChildrenOfCategory(id : number): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL_CATEGORY + "/" + id + "/childrens");
  }

  getSpecificCategorie(id : number) : Observable<any[]> {
    return this.http.get<any[]>(this.API_URL_CATEGORY + "/" + id);
  }

  createCategories(category : any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.API_URL_CATEGORIES + "/add", category, { headers });
  }

  removeCategory(id : number): Observable<any> {
    return this.http.delete<any>(this.API_URL_CATEGORY + "/delete/" + id);
  }

  updateNameCategory(id : number, category : any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(this.API_URL_CATEGORY + "/update/" + id + "/name/" + category.name, { headers });
  }

  unlinkCategory(parentId : number, childId : number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(this.API_URL_CATEGORY + "/dissociate/" + parentId + "/" + childId, { headers })
  }

  linkCategory(parentId : number, childId : number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(this.API_URL_CATEGORY + "/associate/" + parentId + "/" + childId, { headers })
  }

  searchCategories(pagination : number, root : boolean, after : string, before : string, order : string, sort : string): Observable<any> {
    const request : string = "?root=" + (root ? "true" : "false") + "&page=" + pagination
      + (after == null ? '' : "&after=" + after) + (before == null ? '' : "&before=" + before)
      + (sort == '' ? '' : "&sort=" + sort) + (order == '' ? '' : "&order=" + order) ;
    console.log(request);
    return this.http.get<any[]>(this.API_URL_CATEGORIES + "/search" + request);
  }
}
