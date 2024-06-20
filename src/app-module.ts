
// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconAnchor } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PrincipalComponent } from './app/components/principal/principal.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    
   // Declara el componente raíz y otros componentes si los tienes
  ],
  imports: [
    BrowserModule, // Importa BrowserModule necesario para la ejecución en el navegador
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
    
  ],
  providers: [],
  
})
export class AppModule { }
