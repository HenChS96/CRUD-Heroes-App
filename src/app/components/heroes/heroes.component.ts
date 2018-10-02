import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { timeout } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any;
  loading = true;

  constructor(private _heroeService: HeroesService) {

    this._heroeService.getHeroes().subscribe( data =>{
      console.log(data);
      // this.loading = false;
      setTimeout( ()=> {
        this.loading = false;
        this.heroes = data
      } , 3000 );
    })

   }

  ngOnInit() {
  }

  delete( key$:string ){
    this._heroeService.deleteHeroe(key$).subscribe( res => {
      if( res ){
        console.error(res);
      }else{
        //all fine
        delete this.heroes[key$];
      }
    })
  }

}
