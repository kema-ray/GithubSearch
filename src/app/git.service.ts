import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { User } from './user';
import { Repos } from './repos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  GH_API = "https://api.github.com"

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
