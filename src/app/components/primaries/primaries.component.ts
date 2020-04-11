import { Component, OnInit } from '@angular/core';
import { PrimariesService } from '../../services/primaries.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-primaries',
  templateUrl: './primaries.component.html',
  styleUrls: ['./primaries.component.sass']
})
export class PrimariesComponent implements OnInit {

  data:any = {primaries:[]}

  constructor(private redir:Router, private primariesSrv:PrimariesService) { }

  ngOnInit(): void {
    if(!localStorage.getItem('rhusr')) {
      this.redir.navigate(['/login'])
    } else {
    	this.primariesSrv.getSaved().subscribe(res=> {
    		this.data = res as any
    	})

    	this.primariesSrv.getPrimaries().subscribe(res=> {
    		let primaries = res as Array<any>
    		for(let primary of primaries) {
    			if(!this.data.primaries.some(x => x.name == primary.name)) {
    				this.data.primaries.push({
    					name: primary.name,
    					imageName: primary.imageName,
    					obtained:0
    				})
    			}
    		}
    		this.data.primaries.sort((a,b) => {
    			if(a.name < b.name) return -1
    				return 1
    		})
    	})
    }
  }

  saveChanges() {
  	this.primariesSrv.save(this.data).subscribe(res => {})
  }

}
