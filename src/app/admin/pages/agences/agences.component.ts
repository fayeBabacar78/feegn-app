import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {AgenceService} from '../../services/agence.service';
import {first} from 'rxjs/operators';
import {Agence} from '../../models/agence.model';

@Component({
  selector: 'app-agences',
  templateUrl: './agences.component.html',
  styleUrls: ['./agences.component.scss']
})
export class AgencesComponent implements OnInit {

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
