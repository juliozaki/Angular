import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { TrackModel } from '@core/models/tracks.model';
import { SearchComponent } from '@modules/history/components/search/search.component';
import { SearchService } from '@modules/history/services/search.service';
import { PlayListBodyComponent } from '@shared/components/play-list-body/play-list-body.component';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [
    FormsModule,
    PlayListBodyComponent,
    SearchComponent,
    CommonModule
  ],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent implements OnInit {
  listResults$: Observable<any> = of([])
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  receiveData(event: string): void {
    //TODO: agarras el termino y sabes que solo se ejecuta cunado tiene 3 caracters
    console.log('🎁 Estoy en el padre jua jua...', event);
    this.listResults$ = this.searchService.searchTracks$(event)

  }
}