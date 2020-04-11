import { Component, OnInit } from '@angular/core';
import { SecondariesService } from '../../services/secondaries.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-secondaries',
  templateUrl: './secondaries.component.html',
  styleUrls: ['./secondaries.component.sass']
})
export class SecondariesComponent implements OnInit {

  data:any = {secondaries:[]}

  constructor(private redir:Router, private secondariesSrv:SecondariesService) { }

  ngOnInit(): void {
    if(!localStorage.getItem('rhusr')) {
      this.redir.navigate(['/login'])
    } else {
    	this.secondariesSrv.getSaved().subscribe(res=> {
    		this.data = res as any
    	})

    	this.secondariesSrv.getSecondaries().subscribe(res=> {
    		let secondaries = res as Array<any>
    		for(let secondary of secondaries) {
    			if(!this.data.secondaries.some(x => x.name == secondary.name)) {
    				this.data.secondaries.push({
    					name: secondary.name,
    					imageName: secondary.imageName,
    					obtained:0
    				})
    			}
    		}
    		this.data.secondaries.sort((a,b) => {
    			if(a.name < b.name) return -1
    				return 1
    		})
    	})
    }
  }

  saveChanges() {
  	this.secondariesSrv.save(this.data).subscribe(res => {})
  }

}
