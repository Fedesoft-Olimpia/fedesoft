import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  title = 'GG EZ'
  hide = true
  data = [{"Casa" :"asdas"},"Hola", "Cosa"]
  constructor() { }

  ngOnInit() {
  }

  public sendText(){
    console.log(this.title);
  }
  public hideCard(){
    this.hide = !this.hide;
  }
}
