import {Component, OnInit} from '@angular/core';
import {Article} from '../../../models/article.model';
import {ActivatedRoute} from '@angular/router';
import {SanitizerService} from '../../../services/sanitizer.service';
import {ArticleService} from '../../../services/article.service';
import {AuthService} from '../../../../auth/services/auth.service';
import {ClaimsService} from '../../../services/claims.service';
import {first} from 'rxjs/operators';
import {ArticlesDetailsComponent} from '../articles-details/articles-details.component';
import {LyDialog} from '@alyle/ui/dialog';

@Component({
  selector: 'app-lost',
  templateUrl: './lost.component.html',
  styleUrls: ['./lost.component.scss']
})
export class LostComponent implements OnInit {

  id: any;
  articles: Article[] = [];
  claimedArticle: Article;

  displayBasic = false;

  constructor(
    private activatedRoute: ActivatedRoute, private sn: SanitizerService,
    private articleService: ArticleService, public auth: AuthService,
    private _dialog: LyDialog,
    private claimService: ClaimsService) {
    this.claimedArticle = new Article();
  }

  ngOnInit(): void {
    this.articleService.unclaimedArticles()
      .pipe(first()).subscribe(articles => {
        articles.map(article => {
          article.imageUrl = this.sn.sanitizeUrl(article);
          this.articles.push(article);
        });
      },
      error => this.articleService.http.showHttpError(error));
  }

  show(article: Article) {
    const dialogRef = this._dialog.open<ArticlesDetailsComponent>(ArticlesDetailsComponent, {
      data: article
    });
  }

  vaidateClaim() {
    this.claimService.claimArticleByUser(this.claimedArticle, this.auth?.currentUser)
      .pipe(first()).subscribe(article => {
      this.claimedArticle.imageUrl = this.sn.sanitizeUrl(article);
      this.displayBasic = false;
    }, error => this.claimService.http.showHttpError(error));
  }

  showDialog(article: Article) {
    this.claimedArticle = article;
    this.displayBasic = true;
  }
}
