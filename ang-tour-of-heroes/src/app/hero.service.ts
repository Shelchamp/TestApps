import { Injectable } from '@angular/core';
import { heroes } from './heroes';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes:Hero[] = heroes;
  constructor() { }

  getHeroes() : Hero[] {
    return this.heroes;
  }
}
