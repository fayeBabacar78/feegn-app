import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../../services/article.service';
import {Article} from '../../../models/article.model';
import {AuthService} from '../../../../auth/services/auth.service';
import {first} from 'rxjs/operators';
import {SanitizerService} from '../../../services/sanitizer.service';
import {LyDialog} from '@alyle/ui/dialog';
import {ArticlesDetailsComponent} from '../articles-details/articles-details.component';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  articles: Article[] = [];

  constructor(
    private articlesService: ArticleService, private _dialog: LyDialog,
    private auth: AuthService, private sn: SanitizerService) {
  }

  ngOnInit(): void {
    this.articlesService.getAgencyArticles(this.auth.currentUser?.agence.id).pipe(first())
      .subscribe(articles => {
        articles.map(article => {
          article.imageUrl = this.sn.sanitizeUrl(article);
          this.articles.push(article);
        });
      }, error => this.articlesService.http.showHttpError(error));
  }

  showArticle(article: Article) {
    const dialogRef = this._dialog.open<ArticlesDetailsComponent>(ArticlesDetailsComponent, {
      data: article
    });
  }

  deleteArticle(a: Article) {
    this.articlesService.destroy(a).pipe(first())
      .subscribe(
        article => this.articles = this.articles.filter(art => article.id !== art.id),
        error => this.articlesService.http.showHttpError(error));
  }
}
