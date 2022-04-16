import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  username = 'kema-ray';
  GH_API = `https://api.github.com/users/${this.username}`

  constructor(private http: HttpClient) {
    // this.username = "kema-ray";
   }

   getGithubUser():Observable<any>{
     return this.http.get<any>(this.GH_API)
   }
}
