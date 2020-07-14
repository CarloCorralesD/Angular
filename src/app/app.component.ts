import { Component } from '@angular/core';
//import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';

//import {PostService} from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [PostService]
})
export class AppComponent {
  users = ['ryan','joe','cameron','john'];
  activated = false;
  title = 'my-dream-app';
  name : string;
  email; // : string ;
  webpage : string;
  hobbies : string[];
  showHobbies : boolean;
  
  constructor() { //private postService: PostService) {
  	console.log("Constructor working...");
  	this.name = "Carlo Jose Luis";
  	this.email = "ccorrales@unsa.edu.pe";
  	this.webpage = "http://www.unsa.edu.pe";
  	this.hobbies = ["Futbol","Programación","Netflix"];
  	this.showHobbies = false;
  	/* this.postService.getPosts().subscribe(posts=> {
  		console.log(posts);
  	}); */
  }

  toggleHobbies() {
  	this.showHobbies = !this.showHobbies;
  }

  newHobby(hobby) {
  	//console.log(hobby.value);
  	this.hobbies.push(hobby.value);
  	hobby.value = "";
  	return false;
  }
}

/*@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }. */
