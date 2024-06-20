import { Component, ElementRef, OnInit, ViewChild, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Articulo } from './models/Articulo';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconAnchor } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PrintService } from './services/print.service';
import { PrincipalComponent } from './components/principal/principal.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconAnchor,
    MatIconModule,
    AppComponent,
    PrincipalComponent],// Importa HttpClientModule para habilitar las solicitudes HTTP
    // Otros módulos que puedas necesitar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  @ViewChild('articleInput')
  articleInput!: ElementRef;
  ngOnInit(): void {
    // Set the focus on the input field once the component initializes
    setTimeout(() => this.articleInput.nativeElement.focus(), 0);
  }
  numero: number | undefined;
  articulos: Articulo[] =   [
    {
      id: 123456,
      nombre: "turron"
    },
    {
      id: 123457,
      nombre: "caramelo"
    }
    ,
    {
      id: 123458,
      nombre: "alfajor"
    }
  ];
 

 

  checkNumero() {
    if (this.numero && this.numero.toString().length > 5) {
      //alert(`El número ${this.numero} tiene más de 5 dígitos.`);
      console.log('n', this.numero)
      var index = this.articulos.findIndex((a) => a.id === this.numero) 
      if (index != -1) {
        console.log(index)
        alert("encontrado" + index)
      }
     
    }
  }

  

  @HostListener('document:keydown.enter', ['$event'])
  handleEnterKey(event: KeyboardEvent) {
    this.checkNumero();
  }


 


}
