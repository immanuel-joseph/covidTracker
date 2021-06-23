import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CovidServiceService } from '../covid-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  model:any

  constructor(private covidService:CovidServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.covidService.getAllInfo().subscribe((res:any)=>{
      this.model=res.data
    })
  }

}
