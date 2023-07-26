import { Injectable } from '@angular/core';
import { CardDetail } from '../shared/card';

@Injectable({
  providedIn: 'root'
})
export class CardDetailService {

  constructor() { }

  getAll():CardDetail[]{
    return [
      {
        id:1,
        imageurl:'./assets/image 72.png',
        Title:"Pocket Atm",
        tags:["#afdv ","#kmk ","#fnenf"],
        decription:'Pocket ATM is an application that enables flexible',
        navigationUrl:'home/landing/app-detail'
      },
      {
        id:2,
        imageurl:'./assets/Dyno logo.png',
        Title:"Dyno",
        tags:["#afdv ","#kmk ","#fnenf"],
        decription:'Pocket ATM is an application that enables flexible',
        navigationUrl:'home/landing/app-detail'
      },
      {
        id:3,
        imageurl:'./assets/ls-black.png',
        Title:"Lifesenze",
        tags:["#afdv ","#kmk ","#fnenf"],
        decription:'Pocket ATM is an application that enables flexible',
        navigationUrl:'home/landing/app-detail'
      },
      {
        id:4,
        imageurl:'./assets/cal_logo_text 1.png',
        Title:"CAL",
        tags:["#afdv ","#kmk ","#fnenf"],
        decription:'Pocket ATM is an application that enables flexible',
        navigationUrl:'home/landing/app-detail'
      },
      {
        id:5,
        imageurl:'./assets/Group 206.png',
        Title:"ArtistPass",
        tags:["#afdv ","#kmk ","#fnenf"],
        decription:'Pocket ATM is an application that enables flexible',
        navigationUrl:'home/landing/app-detail'
      },
      {
        id:6,
        imageurl:'./assets/idea 3 (1).png',
        Title:"Pocket Idea",
        tags:["#afdv ","#kmk ","#fnenf"],
        decription:'Pocket ATM is an application that enables flexible',
        navigationUrl:'home/landing/app-detail'
      }
    ]
  }
}
