import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { CardPlayerComponent } from '../card-player/card-player.component';

@Component({
  selector: 'app-section-generic',
  standalone: true,
  imports: [
    CommonModule,
    CardPlayerComponent
  ],
  templateUrl: './section-generic.component.html',
  styleUrl: './section-generic.component.css'
})

export class SectionGenericComponent implements OnInit {
  @Input() title: string = '';
  @Input() mode: 'small' | 'big' = 'big';
  @Input() dataTracks: Array<TrackModel> = [];

  constructor() { }

  ngOnInit(): void {
  }

}