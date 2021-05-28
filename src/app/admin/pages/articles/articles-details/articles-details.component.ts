import {Component, Inject, OnInit} from '@angular/core';
import {LY_DIALOG_DATA, LyDialogRef} from '@alyle/ui/dialog';
import {Article} from '../../../models/article.model';

@Component({
  selector: 'app-articles-details',
  templateUrl: './articles-details.component.html',
  styleUrls: ['./articles-details.component.scss']
})
export class ArticlesDetailsComponent implements OnInit {

  constructor(public dialogRef: LyDialogRef, @Inject(LY_DIALOG_DATA) public article: Article) {
  }

  ngOnInit(): void {
  }


}
