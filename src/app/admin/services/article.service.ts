import {Injectable} from '@angular/core';
import {AbstractHttpService} from '../models/http.model';
import {Article} from '../models/article.model';
import {Categorie} from '../models/categorie.model';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(public http: AbstractHttpService) {
  }

  index() {
    return this.http.get<Article[]>('articles/');
  }

  unclaimedArticles() {
    return this.http.get<Article[]>('articles/unclaimed');
  }

  getAgencyArticles(id: any) {
    return this.http.get<Article[]>(`articles/agence/${id}`);
  }

  getArticlesByCategorie(categorie: Categorie) {
    return this.http.get<Article[]>(`articles/categorie/${categorie.id}`);
  }

  store(article: Article) {
    return this.http.post<Article>('articles/', article);
  }

  show(article: Article) {
    return this.http.get<Article>(`articles/${article.id}`);
  }

  update(article: Article) {
    return this.http.put<Article>(`articles/${article.id}`, article);
  }

  destroy(article: Article) {
    return this.http.delete<Article>(`articles/${article.id}`);
  }
}
