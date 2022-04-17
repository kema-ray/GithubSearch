import { Component, OnInit} from '@angular/core';
import { GitService } from '../git.service';

@Component({
  selector: 'app-git-profile',
  templateUrl: './git-profile.component.html',
  styleUrls: ['./git-profile.component.css']
})
export class GitProfileComponent implements OnInit {
  username = 'kema-ray';
  user!:any
  repo:any

  constructor(private gitService: GitService) { }
  

  getFeedback(newUsername:any):void{
  //   this.username=newUsername
  //   this.getRepos=(newUsername)
  //   this.getUser=(newUsername)
  //   this.gitService.getGithubUser(this.username).then((user)=>{(this.user=user)
  //   console.log(user)
  //   this.gitService.getUserRepo(this.username).subscribe((repo)=>{
  //     this.repo=repo})
  //   });
  // }
  // this.gitService.getGithubUser(username).then((user)=>(this.user=user));

  // getUser(username:string):void{
  //   this.gitService.getGithubUser(username).then((user)=>(this.user=user));
  // }
  // getRepos(username:string):void{
  //   this.gitService.getUserRepo(username).subscribe((repo)=>{
  //     this.repo=repo})
  // }

  ngOnInit(): void {
    this.getUser(this.username)
    this.getRepos(this.username)

  }
}
  
