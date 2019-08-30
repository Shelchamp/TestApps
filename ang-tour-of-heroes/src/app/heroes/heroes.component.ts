import { Component, OnInit } from '@angular/core';

// import { Hero } from '../hero';
import { heroes } from '../heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes:Hero[] = heroes;
  selectedHero:Hero;
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  constructor() { }
  
  ngOnInit() {
  }

  onClick() {
    window.alert("It works!")
  }

}
