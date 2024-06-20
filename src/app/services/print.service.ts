import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrintService {
  private apiUrl = 'http://localhost:3000'; // URL de tu servidor Node.js

  constructor(private http: HttpClient) { }

  print(text: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/print`, { text });
  }
}
