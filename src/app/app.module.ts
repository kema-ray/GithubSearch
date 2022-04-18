import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GitProfileComponent } from './git-profile/git-profile.component';
import { DateCountPipe } from './date-count.pipe';
import { FormsModule } from '@angular/forms';
import { GitFormComponent } from './git-form/git-form.component';
import { GithighlightDirective } from './githighlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GitProfileComponent,
    DateCountPipe,
    GitFormComponent,
    GithighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
