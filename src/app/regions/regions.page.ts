import { Component, OnInit } from '@angular/core';
import { RegionService } from '../services/region.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.page.html',
  styleUrls: ['./regions.page.scss'],
})
export class RegionsPage implements OnInit {
 regions:any;
  constructor(private service:RegionService) { }

  ngOnInit() {
    this.service.getAllRegion().subscribe(data =>{
       this.regions=data;
    });

  }

}
