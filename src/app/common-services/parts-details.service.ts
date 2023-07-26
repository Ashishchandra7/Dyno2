import { Injectable } from '@angular/core';
import {partsDetails} from '../shared/Parts'

@Injectable({
  providedIn: 'root'
})
export class PartsDetailsService {

  constructor() { }

  getAll():partsDetails[]{
    return [
      {
        id:1,
        imageurl:'./assets/parts/partA.png',
        Title:"Part A",
        tags:["#afdv ","#kmk ","#fnenf"],
        decription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ducimus!',
        navigationUrl:'home/landing/PartA',
        notification:5,
      },
      {
        id:2,
        imageurl:'./assets/parts/Part B.png',
        Title:"Part B",
        tags:["#afdv ","#kmk ","#fnenf"],
        decription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ducimus!',
        navigationUrl:'home/landing/PartA',
        notification:5,
      },
      {
        id:3,
        imageurl:'./assets/parts/Part C.png',
        Title:"Part C",
        tags:["#afdv ","#kmk ","#fnenf"],
        decription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ducimus!',
        navigationUrl:'home/landing/PartA',
        notification:5,
      },
      {
        id:4,
        imageurl:'./assets/parts/Part B.png',
        Title:"Part D",
        tags:["#afdv ","#kmk ","#fnenf"],
        decription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ducimus!',
        navigationUrl:'home/landing/PartA',
        notification:5,
      },
      {
        id:5,
        imageurl:'./assets/parts/Part C.png',
        Title:"Part E",
        tags:["#afdv ","#kmk ","#fnenf"],
        decription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ducimus!',
        navigationUrl:'home/landing/PartA',
        notification:5,
      },
      {
        id:6,
        imageurl:'./assets/parts/partA.png',
        Title:"Part F",
        tags:["#afdv ","#kmk ","#fnenf"],
        decription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ducimus!',
        navigationUrl:'home/landing/PartA',
        notification:5,
      }
    ]
  }




}
