import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  private heroe: Heroe = {
    name: '',
    bio: '',
    house: 'Marvel'
  }

  new = false;
  id: string;

  constructor( private _heroeService: HeroesService, private _router:Router, private _actRoute: ActivatedRoute ) {

    this._actRoute.params.subscribe( parameters => {
      
      this.id = parameters['id'];

      if( this.id !== 'new'){
        this._heroeService.getHeroe(this.id).subscribe( data => this.heroe = data)
      } 

    })

   }

  ngOnInit() {
  }

  save(){

    if (this.id == 'new'){
      //new save
      console.log(this.heroe);

    this._heroeService.newHeroe(this.heroe).subscribe(data => {
      this._router.navigate(['/heroe', data.name])
    }, error => {
      console.error(error);
    });


    }else{
      //update

    console.log(this.heroe);

    this._heroeService.updateHeroe(this.heroe, this.id).subscribe(data => {
      console.log(data);
    }, error => {
      console.error(error);
    });

    }
 
  }


  addNew(forma: NgForm){

    this._router.navigate(['/heroe','new'])

    forma.reset({
      house:'Marvel'
    });// you can put which values wouldnt be deleted

  }

  

}
