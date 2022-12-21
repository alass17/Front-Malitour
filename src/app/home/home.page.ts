import { Component } from '@angular/core';
import { RegionService } from '../services/region.service';
import { UserService } from '../services/utilisateur.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  regions:any;
  content?: string;


  constructor(private service:RegionService ,private userService:UserService) { }

  ngOnInit() {
    this.service.getAllRegion().subscribe(data =>{
       this.regions=data;
    });


   

  }
}
