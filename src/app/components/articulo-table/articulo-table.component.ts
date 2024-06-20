import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { Articulo } from '../../models/Articulo';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-articulo-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './articulo-table.component.html',
  styleUrls: ['./articulo-table.component.css']
})
export class ArticuloTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'precio', 'stock'];
  dataSource = new MatTableDataSource<Articulo>(ARTICULOS);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

const ARTICULOS: Articulo[] = [
  { id: 1, nombre: 'Articulo 1', precio: 100, stock: 10 },
  { id: 2, nombre: 'Articulo 2', precio: 200, stock: 20 },
  // Agrega más artículos según sea necesario
];
