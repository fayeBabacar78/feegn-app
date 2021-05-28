import {Injectable} from '@angular/core';
import {AbstractHttpService} from '../models/http.model';
import {Categorie} from '../models/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(public http: AbstractHttpService) {
  }

  index() {
    return this.http.get<Categorie[]>('categories/list');
  }

  store(categorie: Categorie) {
    return this.http.post<Categorie>('categories/', categorie);
  }

  show(categorie: Categorie) {
    return this.http.get<Categorie>(`categories/${categorie.id}`);
  }

  update(categorie: Categorie) {
    return this.http.put<Categorie>(`categories/${categorie.id}`, categorie);
  }

  destroy(categorie: Categorie) {
    return this.http.delete<Categorie>(`categories/${categorie.id}`);
  }
}
