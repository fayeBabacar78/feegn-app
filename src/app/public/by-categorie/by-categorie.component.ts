import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Article} from 'src/app/admin/models/article.model';
import {ArticleService} from 'src/app/admin/services/article.service';
import {Categorie} from '../../admin/models/categorie.model';
import {first} from 'rxjs/operators';
import {SanitizerService} from '../../admin/services/sanitizer.service';
import {AuthService} from '../../auth/services/auth.service';
import {ClaimsService} from '../../admin/services/claims.service';

@Component({
  selector: 'app-by-categorie',
  templateUrl: './by-categorie.component.html',
  styleUrls: ['./by-categorie.component.scss']
})
export class ByCategorieComponent implements OnInit {

  id: any;
  articles: Article[] = [];
  claimedArticle: Article;

  displayBasic = false;

  constructor(
    private activatedRoute: ActivatedRoute, private sn: SanitizerService,
    private articleService: ArticleService, public auth: AuthService,
    private claimService: ClaimsService) {
    this.id = activatedRoute.snapshot.paramMap.get('id');
    this.claimedArticle = new Article();
  }

  ngOnInit(): void {
    this.articleService.getArticlesByCategorie({id: this.id} as Categorie)
      .pipe(first()).subscribe(articles => {
        articles.map(article => {
          article.imageUrl = this.sn.sanitizeUrl(article);
          this.articles.push(article);
        });
      },
      error => this.articleService.http.showHttpError(error));
  }

  showBasicDialog(article: Article) {
    this.claimedArticle = article;
    this.displayBasic = true;
  }

  vaidateClaim() {
    this.claimService.claimArticleByUser(this.claimedArticle, this.auth?.currentUser)
      .pipe(first()).subscribe(article => {
      this.claimedArticle.imageUrl = this.sn.sanitizeUrl(article);
      this.displayBasic = false;
    }, error => this.claimService.http.showHttpError(error));
  }
}
