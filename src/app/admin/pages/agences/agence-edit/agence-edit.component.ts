import {Component, OnInit} from '@angular/core';
import {Agence} from '../../../models/agence.model';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AgenceService} from '../../../services/agence.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-agence-edit',
  templateUrl: './agence-edit.component.html',
  styleUrls: ['./agence-edit.component.scss']
})
export class AgenceEditComponent implements OnInit {
  agence: Agence;
  private selectedFile: any;

  constructor(private activateRoute: ActivatedRoute, private agenceService: AgenceService) {
    this.agence = new Agence();
    this.agence.id = +activateRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.agenceService.show(this.agence).pipe(first()).subscribe(
      agence => this.agence = agence,
      error => this.agenceService.http.showHttpError(error)
    );
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(this.selectedFile);
    fileReader.onload = () => this.agence.imageUrl = typeof fileReader.result === 'string'
      ? fileReader.result.split(',')[1] : '';
    this.agence.imageName = this.selectedFile.name;
  }

  update(data: NgForm) {
    this.agenceService.update(this.agence).pipe(first()).subscribe(
      _ => {
        this.agenceService.http.toaster('info', 'Enregistrer avec succès');
        this.agenceService.http.redirect('agences');
      },
      error => this.agenceService.http.showHttpError(error)
    );
  }
}
