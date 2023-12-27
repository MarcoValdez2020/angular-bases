import { Component } from "@angular/core";

@Component({
  selector: ' app-counter',
  template: `
  <p>Counter: {{counter}}</p>
  <button (click)="increseCounter(1)">+1</button>
  <button (click)="increseCounter(-1)">-1</button>
  <button (click)="resetCounter()"> Reset</button>
  `,
})

export class CounterComponent {
  public counter: number = 10;

  increseCounter(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
