import { Injectable } from '@angular/core';
import { HttpClient, JsonpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private apiUrl = 'http://localhost:8080'; // Update with your API URL

  constructor(private http: HttpClient) { }

  getFirstTenElements(): Observable<any[]> {
    const url = `${this.apiUrl}/getfirst10`;
    return this.http.get<any[]>(url);
  }

  getElementImage(elementId: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/image/${elementId}`, { responseType: 'blob' });
  }

  changeTheStateOfElement(elementId: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/addToCart/${elementId}`, {  });
  }
  // getImage(id: string): Observable<Blob> {
  //   const url = `${this.apiUrl}/image/${id}`;
  //   return this.http.get(url, { responseType: 'blob' });
  // }

  countCartElement(){
    return this.http.get(`${this.apiUrl}/countCartElement`, {  })
  }


  saveTheElement(Element:any){
    return this.http.post(`${this.apiUrl}/addElemtsWithImage`, Element);
  }



}
