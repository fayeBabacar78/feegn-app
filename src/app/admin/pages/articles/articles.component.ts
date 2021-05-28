import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

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
