import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CovidServiceService } from '../covid-service.service';
import { ChartType} from 'angular-google-charts'



@Component({
  selector: 'app-covid-info',
  templateUrl: './covid-info.component.html',
  styleUrls: ['./covid-info.component.css']
})
export class CovidInfoComponent implements OnInit {
  countryCode:any
  model:any
  activeCases:any
  chartData:any
  
  constructor(private activatedRoute: ActivatedRoute, private covidService: CovidServiceService) { }

  ngOnInit(): void {
    this.countryCode = this.activatedRoute.snapshot.paramMap.get('code')
    console.log(this.countryCode)
    this.covidService.getByCountryCode(this.countryCode).subscribe((res:any)=>{
      this.model=res.data[0]
      this.activeCases = Number(this.model.confirmed) - Number(this.model.dead) - Number(this.model.recovered)
      this.chartData = {
        type: ChartType.PieChart,
        data: [
        ["Active Cases",     this.activeCases],
        ["Deceased Cases",   this.model.dead],
        ["Confirmed Cases",  this.model.confirmed],
        ["Rcovered Cases",   this.model.recovered],
     ],
     options:{is3D: true},
     width: 1000,
     height: 400
    };
    })

  }

}
