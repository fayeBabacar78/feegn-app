import {Component, OnInit} from '@angular/core';
import {ClaimsService} from '../../../services/claims.service';
import {Article} from '../../../models/article.model';
import {AuthService} from '../../../../auth/services/auth.service';
import {SanitizerService} from '../../../services/sanitizer.service';
import {first} from 'rxjs/operators';
import {ArticlesDetailsComponent} from '../../articles/articles-details/articles-details.component';
import {LyDialog} from '@alyle/ui/dialog';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-claims-list',
  templateUrl: './claims-list.component.html',
  styleUrls: ['./claims-list.component.scss']
})
export class ClaimsListComponent implements OnInit {

  articles: Article[] = [];
  items: MenuItem[];

  constructor(
    private claimsService: ClaimsService, private _dialog: LyDialog,
    private auth: AuthService, private sn: SanitizerService) {
    this.items = [
      {label: 'Liste', icon: 'pi pi-fw pi-list'},
    ];
  }

  ngOnInit(): void {
    this.claimsService.index(this.auth.currentUser?.agence.id).pipe(first())
      .subscribe(articles => {
        articles.map(article => {
          article.imageUrl = this.sn.sanitizeUrl(article);
          this.articles.push(article);
        }, error => this.claimsService.http.showHttpError(error));
      });
  }

  showArticle(article: Article) {
    const dialogRef = this._dialog.open<ArticlesDetailsComponent>(ArticlesDetailsComponent, {
      data: article
    });
    // dialogRef.afterClosed.subscribe();
  }

  deleteArticle(a: Article) {
    this.claimsService.articleService.destroy(a).pipe(first())
      .subscribe(
        article => this.articles = this.articles.filter(art => article.id !== art.id),
        error => this.claimsService.http.showHttpError(error));
  }
}
