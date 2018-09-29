import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any;

  constructor(private _heroeService: HeroesService) {

    this._heroeService.getHeroes().subscribe( data =>{
      console.log(data);
    })

   }

  ngOnInit() {
  }

}
