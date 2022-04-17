import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Repos } from './repos';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  username = 'kema-ray';
  GH_API = `https://api.github.com/users/${this.username}`
  REPO_URL = `https://api.github.com/users/${this.username}/repos`

  constructor(private http: HttpClient) {
    // this.username = "kema-ray";
   }

   getGithubUser():Observable<any>{
     return this.http.get<any>(this.GH_API)
   }
   getUserRepo():Observable<any>{
     return this.http.get<any>(this.REPO_URL)
   }
   updateUser(username: any){
     this.username = username;
   }
}
