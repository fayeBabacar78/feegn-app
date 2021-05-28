import {Injectable} from '@angular/core';
import {AbstractHttpService} from '../models/http.model';
import {Agence} from '../models/agence.model';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {

  constructor(public http: AbstractHttpService) {
  }

  index() {
    return this.http.get<Agence[]>('agences/');
  }

  store(agence: Agence) {
    return this.http.post<Agence>('agences/', agence);
  }

  show(agence: Agence) {
    return this.http.get<Agence>(`agences/${agence.id}`);
  }

  update(agence: Agence) {
    return this.http.put<Agence>(`agences/${agence.id}`, agence);
  }

  destroy(agence: Agence) {
    return this.http.delete<Agence>(`agences/${agence.id}`);
  }

}
