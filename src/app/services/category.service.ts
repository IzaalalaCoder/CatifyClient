import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  readonly API_URL_CATEGORIES = "http://localhost:8080/catify/categories";
  readonly API_URL_CATEGORY = "http://localhost:8080/catify/category";

  constructor(private http : HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get<any>(this.API_URL_CATEGORIES);
  }

  createCategories(category: Category): Observable<any> {
    console.log('Données envoyées pour la création de la catégorie :', category.toJson());  // Affiche les données envoyées

    return this.http.post(this.API_URL_CATEGORIES + "/add", category.toJson(), {
      headers: { 'Content-Type': 'application/json' }  // Assure-toi que les en-têtes sont corrects
    }).pipe(
      tap(response => {
        console.log('Réponse de l\'API :', response);  // Affiche la réponse du serveur
      }),
      catchError(error => {
        console.error('Erreur lors de la requête HTTP :', error);  // Affiche l'erreur s'il y en a
        return throwError(error);  // Permet de continuer à gérer les erreurs
      })
    );
}

}
