import {Injectable} from '@angular/core';

export interface Badge {
  type: string;
  value: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: Badge;
}

const MENUITEMS = [
  // {state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer'},
  {state: 'categories', name: 'Categories', type: 'link', icon: 'av_timer' },
  {state: 'articles', name: 'Articles', type: 'link', icon: 'av_timer'},
  {state: 'claims', name: 'Réclamations', type: 'link', icon: 'av_timer'},
  {state: 'agences', name: 'Agences', type: 'link', icon: 'av_timer'},
  {state: 'users', name: 'Utilisateurs', type: 'link', icon: 'av_timer'}
];

@Injectable({providedIn: 'root'})
export class Menu {
  getMenuitems() {
    return MENUITEMS as Menu[];
  }
}
