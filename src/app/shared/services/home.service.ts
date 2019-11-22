import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {}

  getAllEpisodes() {
    console.log('service');
    return this.http.get('http://localhost:3000/authtest/getall');
  }
  getAllCharacters() {
    return this.http.get('http://localhost:3000/characters');
  }
}
