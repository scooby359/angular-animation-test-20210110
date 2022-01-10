# Angular Animations on *ngIf and *ngFor

## Usage

- Import the `BrowserAnimationsModule` in the ng module
```
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
...
import: [BrowserAnimationsModule]
```
- Declare the animation in a ts file within the `@Component` object, e.g.:
```
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
    ])
  ]
})
```
- Apply to a component to use it, e.g.:
```
  <div 
    *ngFor="let card of cards"
    [@inOutAnimation]
  ></div>
```

## Notes

- Can declare multiple animations in the `animations` array
- Transition keywords - `:enter` when component is created, `:leave` when component is destroyed 

## State Transitions

- Can also use state transitions, e.g. `stateA => stateB`
- Can be one way or bi-directional (`a => b` or ` a <=> b`)
- Can use `*` as a wildcard to represent any state
- Can use `void` to represent not existing on page, to catch creation or destruction, e.g.:
```
transition('void => *', [...]), // On creation to any state
transition('* => void', [...]) // OOn any state to destruction
```