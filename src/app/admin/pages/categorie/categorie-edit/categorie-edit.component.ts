import {Component, OnInit} from '@angular/core';
import {Categorie} from '../../../models/categorie.model';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {CategorieService} from '../../../services/categorie.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-categorie-edit',
  templateUrl: './categorie-edit.component.html',
  styleUrls: ['./categorie-edit.component.scss']
})
export class CategorieEditComponent implements OnInit {

  categorie: Categorie = new Categorie();

  private selectedFile: any;

  constructor(private activatedRoute: ActivatedRoute, private catService: CategorieService) {
    this.categorie.id = +activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.catService.show(this.categorie).pipe(first())
      .subscribe(
        categorie => {
          this.categorie = categorie;
        },
        error => this.catService.http.showHttpError(error)
      );
  }

  update(data: NgForm) {
    this.catService.update(this.categorie).pipe(first()).subscribe(
      _ => {
        this.catService.http.toaster('success', 'Enregistrer avec succès');
        this.catService.http.redirect('categories');
      },
      error => this.catService.http.showHttpError(error)
    );
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(this.selectedFile);
    // @ts-ignore
    fileReader.onload = () => this.categorie.imageUrl = fileReader.result.split(',')[1];
    this.categorie.imageName = this.selectedFile.name;
  }
}
