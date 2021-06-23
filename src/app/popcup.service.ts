import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopcupService {

  constructor() { }
  makeCapitalPopup(data: any): string {
    return `` +
      `<div>
      <label><strong>Country Name:</strong></lable> ${ data.CountryName }
      </div>` +
      `<div>
      <label>
      <strong>Capital Name:</strong>
      </label> ${ data.CapitalName }</div>` +
      `<div>
      <label>
      <strong>Continent Name:</strong>
      </label> ${ data.ContinentName }</div>`+
      `<a ActivatedRoute="active" href="covidInfo/${data.CountryCode}" >Click me!</a>`
   }
}
