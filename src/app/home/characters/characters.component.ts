import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services/home.service';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  character$: Observable<any> ;

  constructor(private home: HomeService) { }

  ngOnInit() {
   this.character$ = this.home.getAllCharacters();
   this.character$.subscribe((res) => console.log(res));
   console.log(this.character$)
  }

}
