import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bank_on';
  //valor: number;
  //destino: number;
  constructor(private service: TransferenciaService) { }
  //transferencias: any[] = [];
  //transferir($event) {
    //this.destino = $event.destino;
    // this.valor = $event.valor;
    //console.log($event);
    //this.service.adicionar($event);

  //}
}
