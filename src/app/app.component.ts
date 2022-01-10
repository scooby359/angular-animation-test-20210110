import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Card } from 'src/models/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({height: 0, opacity: 0}),
        animate('300ms ease-out', style({height: 59, opacity: 1}))
      ]),
      transition(':leave', [
        style({height: 59, opacity: 1}),
        animate('300ms ease-in', style({height: 0, opacity: 0}))
      ])
    ]),
    trigger('slideInOutAnimation', [
      transition(':enter', [
        style({height: 0, margin: 0, left: '-100%'}),
        animate('300ms ease-in', style({height:50, margin: 10})),
        animate('300ms ease-in', style({left: 0}))
      ]),
      transition(':leave', [
        style({height: 59, margin: 10}),
        animate('300ms', style({left: '-100%'})),
        animate('300ms ease-in', style({height: 0, margin: 0}))
      ])
    ])
  ]
})
export class AppComponent {

  cards: Card[] = [];

  add() {
    this.cards.push({
      id: this.cards.length,
      timeStamp: new Date()
    })
  }

  remove() {
    this.cards.pop();
  }

  deleteCard(id: number) {
    this.cards.splice(this.cards.findIndex(c => c.id === id), 1);
  }

}
