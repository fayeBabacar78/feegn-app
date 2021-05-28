import { Injectable } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SanitizerService {

  constructor(private sn: DomSanitizer) { }

  sanitizeUrl(element) {
    return this.sn.bypassSecurityTrustUrl('data:image/jpeg;base64,' + element.imageUrl);
  }
}
