import {Component, OnInit} from '@angular/core';
import {Agence} from '../../../models/agence.model';
import {NgForm} from '@angular/forms';
import {first} from 'rxjs/operators';
import {AgenceService} from '../../../services/agence.service';

@Component({
  selector: 'app-agence-create',
  templateUrl: './agence-create.component.html',
  styleUrls: ['./agence-create.component.scss']
})
export class AgenceCreateComponent implements OnInit {

  agence: Agence;
  selectedFile: any;

  constructor(private agenceService: AgenceService) {
    this.agence = new Agence();
  }

  ngOnInit(): void {
  }

  create(data: NgForm) {
    this.agenceService.store(this.agence).pipe(first())
      .subscribe(
        _ => {
          this.agenceService.http.toaster('success', 'Enregistrer avec succès');
          data.reset();
        },
        error => this.agenceService.http.showHttpError(error));
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(this.selectedFile);
    fileReader.onload = () => this.agence.imageUrl = typeof fileReader.result === 'string'
      ? fileReader.result.split(',')[1] : '';
    this.agence.imageName = this.selectedFile.name;
  }
}
