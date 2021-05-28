import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

  items: MenuItem[];

  constructor() {
  }

  ngOnInit(): void {
    this.items = [
      {label: 'Liste', icon: 'pi pi-fw pi-list', routerLink: 'list'},
      {label: 'Ajouter', icon: 'pi pi-fw pi-plus', routerLink: 'create'}
    ];
  }

}
