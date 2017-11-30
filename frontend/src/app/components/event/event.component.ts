import { Component } from '@angular/core';

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
    public title:string = "DnD";
    public start:number = 11.5;
    public end:number = 14.7;
}
