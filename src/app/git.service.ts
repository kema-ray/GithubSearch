import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { User } from './user';
import { Repos } from './repos';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  // username = 'kema-ray';
  GH_API = "https://api.github.com"
  // REPO_URL = `https://api.github.com/users/${this.username}/repos`

  constructor(private http: HttpClient) {
    // this.username = "kema-ray";
   }

   async getGithubUser(username: string){
     const name = this.http.get<any>(`${this.GH_API}/users/${username}`)
     return await lastValueFrom(name).then((response)=>response);
   }
   getUserRepo(username: string):Observable<any>{
     return this.http.get<any>(`${this.GH_API}/users/${username}/repos`)
   }
  //  updateUser(username: any){
  //    this.username = username;
  //  }
}
