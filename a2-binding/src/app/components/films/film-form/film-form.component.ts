import { Component, Output, EventEmitter } from '@angular/core';
import { Film } from '../../../shared/models/film.model';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
})
export class FilmFormComponent  {
  newFilm: Film = new Film();

  @Output() createFilm: EventEmitter<Film> = new EventEmitter<Film>();
  

  onCreateFilm() {
    this.createFilm.emit(this.newFilm);
  }
}
