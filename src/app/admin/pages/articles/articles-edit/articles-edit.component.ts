import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../../services/article.service';
import {Article} from '../../../models/article.model';
import {first} from 'rxjs/operators';
import {NgForm} from '@angular/forms';
import {Categorie} from '../../../models/categorie.model';
import {CategorieService} from '../../../services/categorie.service';

@Component({
  selector: 'app-articles-edit',
  templateUrl: './articles-edit.component.html',
  styleUrls: ['./articles-edit.component.scss']
})
export class ArticlesEditComponent implements OnInit {
  article = new Article();
  selectedFile: any;
  categories: Categorie[] = [];
  lieux = [
    'Dakar',
    'Thies',
    'Mbour',
    'Autre'
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
    private catService: CategorieService) {
    this.article.id = +activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.articleService.show(this.article).pipe(first())
      .subscribe(
        article => {
          this.article = article;
        },
        error => this.articleService.http.showHttpError(error)
      );
    this.catService.index().pipe(first()).subscribe(
      categories => this.categories = categories,
      error => this.catService.http.showHttpError(error)
    );
  }

  update(data: NgForm) {
    this.articleService.update(this.article).pipe(first()).subscribe(
      _ => {
        this.articleService.http.toaster('info', 'Enregistrer avec succès');
        this.articleService.http.redirect('articles');
      },
      error => this.articleService.http.showHttpError(error)
    );
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
