import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

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
