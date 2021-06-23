import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { PopcupService } from './popcup.service';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  capitals: string = '/assets/data/world-capitals.geojson';

  constructor(private http: HttpClient,private popcupService: PopcupService) { }

  makeCapitalMarkers(map: L.Map): void {
    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res) {
        const lon = c.CapitalLongitude;
        const lat = c.CapitalLatitude;
        const marker = L.marker([lat, lon]);
        let isClicked = false
        marker.bindPopup(this.popcupService.makeCapitalPopup(c))
        marker.addTo(map);
      }
    });

   }
}
