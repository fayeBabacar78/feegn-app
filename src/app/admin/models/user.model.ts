export class User {
  id: any;
  prenom: string;
  nom: string;
  username: string;
  telephone1: string;
  telephone2: string;
  ville: string;
  quartier: string;
  email: string;
  password: string;
  agence?: any; // object
  roles: any[] = [];
  passwordConfirmation?: any;
  adresse: any;
}
