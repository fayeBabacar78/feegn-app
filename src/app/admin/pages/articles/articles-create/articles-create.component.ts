import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {first} from 'rxjs/operators';
import {ArticleService} from '../../../services/article.service';
import {Article} from '../../../models/article.model';
import {AuthService} from '../../../../auth/services/auth.service';
import {Categorie} from '../../../models/categorie.model';
import {CategorieService} from '../../../services/categorie.service';

@Component({
  selector: 'app-articles-create',
  templateUrl: './articles-create.component.html',
  styleUrls: ['./articles-create.component.scss']
})
export class ArticlesCreateComponent implements OnInit {

  private selectedFile: any;
  article = new Article();
  categories: Categorie[] = [];
  lieux = [
    'Dakar',
    'Thies',
    'Mbour',
    'Autre'
  ];

  constructor(
    private articleService: ArticleService,
    private catService: CategorieService,
    private auth: AuthService) {
  }

  ngOnInit(): void {
    this.catService.index().pipe(first()).subscribe(
      categories => this.categories = categories,
      error => this.catService.http.showHttpError(error)
    );
  }

  create(data: NgForm) {
    // this.article.user = this.auth.currentUser;
    this.article.agence = this.auth.currentUser?.agence;
    this.articleService.store(this.article).pipe(first())
      .subscribe(
        _ => {
          this.articleService.http.toaster('success', 'Enregistrer avec succès');
          data.reset();
        },
        error => this.articleService.http.showHttpError(error));
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(this.selectedFile);
    // @ts-ignore
    fileReader.onload = () => this.article.imageUrl = fileReader.result.split(',')[1];
    this.article.imageName = this.selectedFile.name;
  }

}
