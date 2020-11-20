import { Component } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  nom = 'ITN!';
  nomsaisi = '';

  constructor(private helloService: HelloService) {}

  hello() {
    this.nomsaisi = this.nom;
    this.helloService.addMot(this.nom);
  }

  listerMots() : string {
    return this.helloService.getMots().join(', ');
  }

  listeMots(): string[] {
    return this.helloService.getMots();
  }
}
