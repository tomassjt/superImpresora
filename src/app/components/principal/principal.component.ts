import { Component } from '@angular/core';
import { PrintService } from '../../services/print.service';
import { HttpClientModule } from '@angular/common/http';
import { ArticuloTableComponent } from '../articulo-table/articulo-table.component';


@Component({
  selector: 'app-principal',
  standalone: true, 
  imports: [HttpClientModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  constructor(private printService: PrintService) { }


  print() {
    const textToPrint = 'Hola, impresora!';
    this.printService.print(textToPrint).subscribe(
      () => {
        console.log('Impresión exitosa');
      },
      error => {
        console.error('Error al imprimir:', error);
      }
    );
  }



}
