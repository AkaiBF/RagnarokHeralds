import { Component, OnInit } from '@angular/core';
import { WarframesService } from '../../services/warframes.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-warframes',
  templateUrl: './warframes.component.html',
  styleUrls: ['./warframes.component.sass']
})
export class WarframesComponent implements OnInit {

  data:any = {warframes:[]}

  constructor(private redir:Router, private warframesSrv:WarframesService) { }

  ngOnInit(): void {
    if(!localStorage.getItem('rhusr')) {
      this.redir.navigate(['/login'])
    } else {
    	this.warframesSrv.getSaved().subscribe(res=> {
    		this.data = res as any
    	})

    	this.warframesSrv.getWarframes().subscribe(res=> {
    		let warframes = res as Array<any>
    		for(let warframe of warframes) {
    			if(!this.data.warframes.some(x => x.name == warframe.name)) {
    				this.data.warframes.push({
    					name: warframe.name,
    					imageName: warframe.imageName,
    					obtained:0
    				})
    			}
    		}
    		this.data.warframes.sort((a,b) => {
    			if(a.name < b.name) return -1
    				return 1
    		})
    	})
    }
  }

  saveChanges() {
  	this.warframesSrv.save(this.data).subscribe(res => {})
  }

}
