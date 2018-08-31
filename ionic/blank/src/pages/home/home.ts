import { Component } from '@angular/core';
import {ANIMALES} from '../../data/data.animales';
import { Animal } from '../../intefaces/animal.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'                                                                                                                                                                                                                                                                                                                                                        
})
export class HomePage {

  animals : Animal[] = [];  

  constructor() {
    this.animals = ANIMALES.slice(0)
  }

}
