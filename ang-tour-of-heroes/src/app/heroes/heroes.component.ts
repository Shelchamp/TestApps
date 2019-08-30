import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
// import { heroes } from '../heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes;
  selectedHero:Hero;
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  constructor(
    private heroService: HeroService
    ) { }
  
  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }

  onClick() {
    window.alert("It works!")
  }

}
