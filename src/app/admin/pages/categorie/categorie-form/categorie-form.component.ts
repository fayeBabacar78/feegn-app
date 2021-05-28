import {Component, OnInit} from '@angular/core';
import {Categorie} from '../../../models/categorie.model';
import {CategorieService} from '../../../services/categorie.service';
import {first} from 'rxjs/operators';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-categorie-form',
  templateUrl: './categorie-form.component.html',
  styleUrls: ['./categorie-form.component.scss']
})
export class CategorieFormComponent implements OnInit {

  categorie: Categorie = new Categorie();
  private selectedFile: any;

  constructor(private catService: CategorieService) {
  }

  ngOnInit(): void {
  }

  create(data: NgForm) {
    this.catService.store(this.categorie).pipe(first())
      .subscribe(
        _ => {
          this.catService.http.toaster('success', 'Enregistrer avec succès');
          data.reset();
        },
        error => this.catService.http.showHttpError(error));
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
