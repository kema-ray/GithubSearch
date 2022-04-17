import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { GitService } from '../git.service';

@Component({
  selector: 'app-git-form',
  templateUrl: './git-form.component.html',
  styleUrls: ['./git-form.component.css']
})
export class GitFormComponent implements OnInit {
  @Output() newUsername=new EventEmitter()
  username:string=""

  submitForm(username:string){
    this.newUsername.emit(username)
    // console.log(username)
  }

  constructor(private gitService:GitService) { }
  // submitForm(username:string){
  //   this.newGituser.emit(username)
  //   console.log(username)
  // }

  ngOnInit(): void {
  }

}
