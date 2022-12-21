import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Langue } from '../Classes/langue';
import { Pays } from '../Classes/pays';
import { Region } from '../Classes/region';
import { ActiviteService } from '../services/activite.service';
import { LangueService } from '../services/langue.service';
import { PaysService } from '../services/pays.service';
import { RegionService } from '../services/region.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.page.html',
  styleUrls: ['./ajouter.page.scss'],
})
export class AjouterPage implements OnInit {

  regionModel :  any={
    idRegion:null,
    codeRegion :null,
    nomRegion: null,
    superficie:null,
    langue: null,
    pays:null,
    activite: null,
    description:null
  };
  activites:any;
  langues:any;
  payss:any;
  regions:any;
  image: any;

  constructor( private activiteService: ActiviteService , private langueService:LangueService,private paysService:PaysService ,private regionService:RegionService) { }

  
  ngOnInit() {
    this.activiteService.getAllActivite().subscribe(data=>{
      this.activites=data;
      console.log(data)
    })

    this.langueService.getAllLangue().subscribe(data=>{
      this.langues=data;
      console.log(data)
    })

    

    this.paysService.getAllPays().subscribe(data=>{
      this.payss=data;
      console.log(data)
    })

  
  }

  
  chargeImage(event: any){
    this.image = event.target["files"][0]
    console.log(this.image);
  }

  
  CreerRegion(){
    this.regionService.ajoutRegion(this.regionModel.codeRegion,this.regionModel.nomRegion,this.regionModel.superficie,this.image,this.regionModel.langue,this.regionModel.pays,this.regionModel.activite,this.regionModel.description).subscribe(data =>{
      this.regions=data;
      console.log(data)
    })
  }

}
