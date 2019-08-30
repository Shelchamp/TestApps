import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { heroes } from './heroes';
import { Hero } from './hero';



@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() { }

  getHeroes() : Observable<Hero[]> {
    return of(heroes);
  }
}
