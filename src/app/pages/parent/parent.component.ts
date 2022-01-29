import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  parentDatas : any;

  constructor( private dataApi : ServiceService) { 
    this.dataApi.getData().subscribe(res => this.parentDatas = res)
    console.log(this.parentDatas)
  }

  ngOnInit(): void {
  }

}
