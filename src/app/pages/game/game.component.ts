import {Component, OnInit} from '@angular/core';
import Minimax from 'tic-tac-toe-minimax';
import {SocialAuthService} from "angularx-social-login";
import {Router} from "@angular/router";

const {GameStep} = Minimax;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public gameState: Array<number | string> = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  public winner: string | undefined;
  public playing = false;
  public computerFirst = false;
  public difficulty: 'Easy' | 'Normal' | 'Hard' = 'Normal';
  private login: boolean = false;

  constructor(private socialAuthService: SocialAuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    console.log('onInit');
    this.socialAuthService.authState.subscribe((user) => {
      if (user != null) {
        console.log('user != null');
        this.login = true;
      }
    });

    if (!this.login) {
      console.log('this.login = ' + this.login);
      this.router.navigate(['/login']);
    }

  }

  toggleGame(toggle: boolean): void {
    if (toggle === this.playing) {
      return;
    }

    this.gameState = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    this.winner = undefined;

    if (toggle && this.computerFirst) {
      this.makeComputerMove();
    }

    this.playing = toggle;
  }

  makeComputerMove(): void {
    const symbols = {
      huPlayer: 'X',
      aiPlayer: 'O'
    };

    const mensajesGanador: { [index: string]: any } = {
      huPlayer: '🎉 ¡Has ganado!',
      aiPlayer: '🙁 ¡El ordenador ganó!',
      draw: '🧑🏽‍⚖️ Empate'
    };

    const result = GameStep(this.gameState, symbols, this.difficulty);
    this.gameState = result.board;

    if (result.winner) {
      this.winner = mensajesGanador[result.winner];
      this.playing = false;
    }
  }

  makeHumanMove(field: number): void {
    if (!this.playing || typeof this.gameState[field] !== 'number') {
      return;
    }

    this.gameState[field] = 'X';
    this.makeComputerMove();
  }


}
