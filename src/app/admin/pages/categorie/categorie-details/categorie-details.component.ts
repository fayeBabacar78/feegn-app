import {Component, Inject, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {LY_DIALOG_DATA, LyDialogRef} from '@alyle/ui/dialog';
import {Categorie} from '../../../models/categorie.model';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-categorie-details',
  templateUrl: './categorie-details.component.html',
  styleUrls: ['./categorie-details.component.scss']
})
export class CategorieDetailsComponent implements OnInit {

  constructor(public dialogRef: LyDialogRef, @Inject(LY_DIALOG_DATA) public categorie: Categorie) {
  }

  ngOnInit(): void {

  }

}
