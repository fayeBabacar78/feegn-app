import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {AgenceService} from '../../../services/agence.service';
import {Agence} from '../../../models/agence.model';
import {SanitizerService} from '../../../services/sanitizer.service';

@Component({
  selector: 'app-agence-list',
  templateUrl: './agence-list.component.html',
  styleUrls: ['./agence-list.component.scss']
})
export class AgenceListComponent implements OnInit {
  agences: Agence[];

  constructor(private agenceService: AgenceService, private sn: SanitizerService) {
    this.agences = new Array<Agence>();
  }

  ngOnInit(): void {
    this.getAgences();
  }

  getAgences() {
    this.agenceService.index().pipe(first()).subscribe(
      agences => {
        agences.forEach(agence => {
          agence.imageUrl = this.sn.sanitizeUrl(agence);
          this.agences.push(agence);
        });
      },
      error => this.agenceService.http.showHttpError(error));
  }

  showAgence(agence: any) {

  }

  deleteAgence(agence: any) {
    this.agenceService.destroy(agence).pipe(first())
      .subscribe(
        agency => this.agences = this.agences.filter(ag => agency.id !== ag.id),
        error => this.agenceService.http.showHttpError(error));
  }
}
