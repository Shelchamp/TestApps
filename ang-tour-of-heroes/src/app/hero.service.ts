import { Injectable } from '@angular/core';
import { heroes } from './heroes';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() { }

  getHeroes() : Hero[] {
    return heroes
  }
}
