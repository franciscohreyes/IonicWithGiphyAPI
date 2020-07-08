import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  private apiKey:string = "YOUR_API_KEY";
  private apiUrl:string = "https://api.giphy.com/v1/gifs/search?api_key="+this.apiKey;

  constructor(private http: HttpClient) { }

  /**
   * search
   * @param params
   */
  search(params:string){
    return this.http.get(this.apiUrl+"&q="+params+"&limit=25&offset=0&rating=g&lang=en");
  }
}
