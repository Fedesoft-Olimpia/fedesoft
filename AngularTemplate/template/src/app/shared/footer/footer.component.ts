import { Component, OnInit } from '@angular/core';
import { InforPaginaService } from '../../service/infor-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public _infoPaginaService : InforPaginaService) { }

  ngOnInit() {
  }

}
