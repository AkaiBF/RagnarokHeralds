import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

	user:string
	password:string
  constructor(private userSrv:UserService) { }

  ngOnInit(): void {
  }

  register() {
  	this.userSrv.register(this.user, this.password).subscribe(res => {
  	})
  }

}
