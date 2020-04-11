import { Component, OnInit } from '@angular/core';
import { MeleeService } from '../../services/melee.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-melees',
  templateUrl: './melees.component.html',
  styleUrls: ['./melees.component.sass']
})
export class MeleesComponent implements OnInit {

	data:any = {melees:[]}

  constructor(private redir:Router, private meleeSrv:MeleeService) { }

  ngOnInit(): void {
  	if(!localStorage.getItem('rhusr')) {
      this.redir.navigate(['/login'])
    } else {
    	this.meleeSrv.getSaved().subscribe(res=> {
    		this.data = res as any
    	})

    	this.meleeSrv.getMelees().subscribe(res=> {
    		let melees = res as Array<any>
    		for(let melee of melees) {
    			if(!this.data.melees.some(x => x.name == melee.name)) {
    				this.data.melees.push({
    					name: melee.name,
    					imageName: melee.imageName,
    					obtained:0
    				})
    			}
    		}
    		this.data.melees.sort((a,b) => {
    			if(a.name < b.name) return -1
    				return 1
    		})
    	})
    }
  }

  saveChanges() {
  	this.meleeSrv.save(this.data).subscribe(res => {})
  }

}
