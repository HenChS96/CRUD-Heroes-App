import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    name: '',
    bio: '',
    house: 'Marvel'
  }

  constructor( private _heroeService: HeroesService ) { }

  ngOnInit() {
  }

  save(){
    console.log(this.heroe);

    this._heroeService.newHeroe(this.heroe).subscribe(data => {

    })
  }

}
