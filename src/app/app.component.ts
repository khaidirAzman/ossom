import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {State, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AsyncPipe, NgForOf, NgOptimizedImage} from "@angular/common";
import {incrementComputer, incrementPlayer, resetComputer, resetPlayer, winComputer, winPlayer} from "./ossom.action";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, NgForOf, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ossom';
  playerCount$? : Observable<number>;
  computerCount$? : Observable<number>;
  store = inject(Store);
  state = inject(State);
  ossomArray = ['ROCK', 'SCISSOR', 'PAPER'];
  computerSelect = '';

  constructor() {
    this.playerCount$ = this.store.select('playerCounter');
    this.computerCount$ = this.store.select('computerCounter');
  }
  ngOnInit(): void {
  }

  startMatch(value: number){
    let computerPick = Math.floor(Math.random() * 3);
    this.computerSelect = computerPick === 0 ?
      'ROCK':(computerPick === 1 ? 'SCISSOR':'PAPER');
    if (value === computerPick){
      this.store.dispatch(incrementPlayer());
      this.store.dispatch(incrementComputer());
    }
    else if(value === 0){
      if(computerPick === 1){
        this.store.dispatch(winComputer());
      }
      else {
        this.store.dispatch(winPlayer());
      }
    }
    else if(value === 1){
      if(computerPick === 2){
        this.store.dispatch(winComputer());
      }
      else {
        this.store.dispatch(winPlayer());
      }
    }
    else if(value === 2){
      if(computerPick === 0){
        this.store.dispatch(winComputer());
      }
      else {
        this.store.dispatch(winPlayer());
      }
    }
    this.getScore();
  }

  getScore(){
    // @ts-ignore
    let playerCounter = this.state._value.playerCounter;
    // @ts-ignore
    let computerCounter = this.state._value.computerCounter;

    if (playerCounter >=30 || computerCounter >= 30){
      let message = playerCounter > computerCounter ? "You win":"You lose";
      alert(message);
      this.store.dispatch(resetPlayer());
      this.store.dispatch(resetComputer());
    }
  }
  resetScore(){
    this.store.dispatch(resetPlayer());
    this.store.dispatch(resetComputer());
  }

}
