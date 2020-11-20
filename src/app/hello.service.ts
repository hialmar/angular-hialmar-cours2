import { Injectable } from '@angular/core';

@Injectable()
export class HelloService {
  private  mots : string [] = [];

  constructor() { }

  addMot(mot : string) {
    this.mots.push(mot);
  }

  getMots() : string [] {
    return this.mots;
  }
}