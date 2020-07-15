import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [PostService]
})
export class AppComponent {
  name : string = "Carlo Jose Luis"; 
  age : number = 40; 
  email; // : string ;
  webpage : string;
  hobbies : string[];
  showHobbies : boolean;
  title = 'my-dream-app';
  users = ['ryan','joe','cameron','john'];
  activated = false;
  posts = [];
  
  constructor(private dataService: DataService) { 
	this.dataService.getData().subscribe(data => {
		//console.log(data);
		this.posts = data;
	});  
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

  sayHello() {
	  alert("Hola Desde app.component");
  }

  addUser(newUser) {
	  //console.log(newUser.value);
	  this.users.push(newUser.value);
	  newUser.value = '';
	  newUser.focus();
	  return false;
  }

  deleteUser(user) {
	  for(let i=0; i<this.users.length; i++) {
		  if (user==this.users[i]) {
			  this.users.splice(i,1);
		  }
	  }
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
