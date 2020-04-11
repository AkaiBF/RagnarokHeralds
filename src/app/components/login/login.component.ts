import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
	user:string
	password:string
  
  constructor(private usersSrv:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  login() {
  	this.usersSrv.login(this.user, this.password).subscribe(res => {
  		this.router.navigate(['/home'])
  	}, error => {
  		console.log("Wrong credentials")
  	})
  }

  goUsers() {
    this.router.navigate(['/users'])
  }

}
