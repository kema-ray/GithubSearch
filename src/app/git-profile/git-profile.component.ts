
import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service';
@Component({
  selector: 'app-git-profile',
  templateUrl: './git-profile.component.html',
  styleUrls: ['./git-profile.component.css']
})
export class GitProfileComponent implements OnInit {
  user!:any
  repo!:any
  username!:any
  constructor(private gitService: GitService) { }

  ngOnInit(): void {
    this.gitService.getGithubUser().subscribe(
      user => {
        this.user = user
        console.log(user)
      }
    )
    this.gitService.getUserRepo().subscribe(
      repo => {
        this.repo = repo
        console.log(repo)
      }
    )
  }
  searchUser(){
    this.gitService.updateUser(this.username);
    this.gitService.getUserRepo().subscribe(user=>{
      this.user = user;
    });
  }

}
