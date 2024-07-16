import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-counter',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.css'
})
export class AppCounter {
    //title = '01-introduccion';
}