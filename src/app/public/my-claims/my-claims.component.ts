import { Component, OnInit } from '@angular/core';
import {Article} from '../../admin/models/article.model';
import {SanitizerService} from '../../admin/services/sanitizer.service';
import {AuthService} from '../../auth/services/auth.service';
import {ClaimsService} from '../../admin/services/claims.service';
import {first} from 'rxjs/operators';
import {ArticlesDetailsComponent} from '../../admin/pages/articles/articles-details/articles-details.component';
import {LyDialog} from '@alyle/ui/dialog';

@Component({
  selector: 'app-my-claims',
  templateUrl: './my-claims.component.html',
  styleUrls: ['./my-claims.component.scss']
})
export class MyClaimsComponent implements OnInit {

  id: any;
  articles: Article[] = [];
  claimedArticle: Article;

  displayBasic = false;

  constructor(
    private _dialog: LyDialog,
    private sn: SanitizerService,
    public auth: AuthService,
    private claimService: ClaimsService) {
    this.claimedArticle = new Article();
  }

  ngOnInit(): void {
    this.claimService.getArticlesByUser(this.auth?.currentUser)
      .pipe(first()).subscribe(articles => {
        articles.map(article => {
          article.imageUrl = this.sn.sanitizeUrl(article);
          this.articles.push(article);
        });
      },
      error => this.claimService.http.showHttpError(error));
  }

  showBasicDialog(article: Article) {
    const dialogRef = this._dialog.open<ArticlesDetailsComponent>(ArticlesDetailsComponent, {
      data: article
    });
  }
}
