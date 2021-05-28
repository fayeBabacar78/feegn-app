import {Component, OnInit} from '@angular/core';
import {CategorieService} from '../../../services/categorie.service';
import {Categorie} from '../../../models/categorie.model';
import {first} from 'rxjs/operators';
import {LyDialog} from '@alyle/ui/dialog';
import {CategorieDetailsComponent} from '../categorie-details/categorie-details.component';
import {SanitizerService} from '../../../services/sanitizer.service';
import {AuthService} from '../../../../auth/services/auth.service';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.scss']
})
export class CategorieListComponent implements OnInit {

  categories: Categorie[] = [];

  constructor(
    private catService: CategorieService,
    private sn: SanitizerService,
    public auth: AuthService,
    private _dialog: LyDialog) {
  }

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories() {
    this.catService.index().pipe(first()).subscribe(
      categories => categories.map(categorie => {
          categorie.imageUrl = this.sn.sanitizeUrl(categorie);
          this.categories.push(categorie);
        },
        error => this.catService.http.showHttpError(error))
    );
  }

  showCategorie(categorie: Categorie) {
    const dialogRef = this._dialog.open<CategorieDetailsComponent>(CategorieDetailsComponent, {
      data: categorie
    });
    // dialogRef.afterClosed.subscribe();
  }

  deleteCategorie(categorie: Categorie) {
    this.catService.destroy(categorie).pipe(first())
      .subscribe(
        category => this.categories = this.categories.filter(cat => cat.id !== category.id),
        error => this.catService.http.showHttpError(error));
  }


}
