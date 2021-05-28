import {Injectable} from '@angular/core';
import {AbstractHttpService} from '../models/http.model';
import {Article} from '../models/article.model';
import {ArticleService} from './article.service';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ClaimsService {

  constructor(public http: AbstractHttpService, public articleService: ArticleService) {
  }

  getArticlesByUser(user: User) {
    return this.http.get<Article[]>(`articles/user/${user?.id}`);
  }

  index(agenceId) {
    return this.http.get<Article[]>(`articles/agence/${agenceId}/claims`);
  }

  claimArticleByUser(article: Article, user: User) {
    article.user = user;
    article.imageUrl = article.imageUrl.changingThisBreaksApplicationSecurity.split(',')[1];
    return this.http.post<Article>(`articles/claim`, article);
  }
}
