
import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service';
@Component({
  selector: 'app-git-profile',
  templateUrl: './git-profile.component.html',
  styleUrls: ['./git-profile.component.css']
})
export class GitProfileComponent implements OnInit {
  user!:any
  constructor(private gitService: GitService) { }

  ngOnInit(): void {
    this.gitService.getGithubUser().subscribe(
      user => {
        this.user = user
        console.log(user)
      }
    )
  }

}
