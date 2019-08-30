import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { heroes } from './heroes';
import { Hero } from './hero';



@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(
    private messageService: MessageService
  ) { }

  getHeroes() : Observable<Hero[]> {
    this.messageService.add('HeroesService: fetched heroes')
    return of(heroes);
  }
}
