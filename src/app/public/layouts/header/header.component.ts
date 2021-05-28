import {Component, OnInit} from '@angular/core';
import {Categorie} from 'src/app/admin/models/categorie.model';
import {CategorieService} from 'src/app/admin/services/categorie.service';
import {AuthService} from '../../../auth/services/auth.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  categofies: Categorie[] = [];

  constructor(public auth: AuthService, private catService: CategorieService, private loc: Location) {
  }

  ngOnInit(): void {
    this.catService.index().subscribe(
      categories => this.categofies = categories,
      error => this.catService.http.showHttpError(error));
  }

  logout() {
    this.auth.logout();
    this.auth.token.router.onSameUrlNavigation = 'reload';
  }

  go(cat: Categorie) {
    this.auth.token.router.navigate(['public', 'by-categorie', cat.id]);
  }
}
