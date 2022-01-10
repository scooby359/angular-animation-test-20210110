import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
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
      transition('void => *', [
        style({transform: 'translateX(-200%)'}),
        animate('300ms ease-in', style({}))
      ]),
      transition('* => void', [
        animate('300ms', style({transform: 'translateX(-200%)'})),
        animate('300ms ease-in', style({height: 0, padding: 0, margin: 0}))
      ])
    ]),
    trigger('pageAnimations', [
      transition(':enter', [
        query('.card', [
          style({opacity: 0, transform: 'translateY(-100px)'}),
          stagger(30, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)',
            style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ])
  ]
})
export class AppComponent implements OnInit {

  cards: Card[] = [];
  definedCards: Card[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.definedCards.push({id: i, timeStamp: new Date()})
    }      
  }

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
