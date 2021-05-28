export class JwtToken {
  id: number;
  username: string;
  prenom: string;
  nom: string;
  email: string;
  permissions: string[];
  accessToken: string;
  tokenType: string;
  authorities: any;
}
