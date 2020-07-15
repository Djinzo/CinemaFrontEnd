import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  public host='http://localhost:8080'

  constructor(private http:HttpClient) { }

  getVilles(){
    return this.http.get(this.host+'/villes');
  }

  public getCinemas(url:string){
    return this.http.get(url);
  }

  public getSalles(url: string) {
    return this.http.get(url);
  }

  getProjection(projectionFilms: string) {
    let url=projectionFilms.replace('{?projection}','?projection=p1');
    return this.http.get(url);
  }

  getTicket(tickets: string) {
    let url=tickets.replace('{?projection}','?projection=ticketProj');
    return this.http.get(url);
  }

  payerTickert(value) {
    return this.http.post(this.host+"/payerTicker",value);
  }
}
