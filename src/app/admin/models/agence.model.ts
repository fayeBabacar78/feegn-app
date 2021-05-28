import {User} from './user.model';
import {Article} from './article.model';

export class Agence {
  id: number;
  nom: string;
  phone: string;
  adresse: string;
  description: string;
  users?: Array<User>;
  articles: Array<Article>;
  imageName: any;
  imageUrl: any;
}
