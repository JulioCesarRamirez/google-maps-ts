import { MapGeoCoder } from './MapGeoCoder';
import { Mappable, SearchOptions } from './types';

export class GoogleMap {
  private googleMap: google.maps.Map;
  private geoCoder: MapGeoCoder;

  constructor(mapElement: string) {
    this.googleMap = new google.maps.Map(document.getElementById(mapElement)!, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
    this.geoCoder = new MapGeoCoder(this.googleMap);
  }

  AddMarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: parseInt(mappable.getLocation.lat),
        lng: parseInt(mappable.getLocation.lng),
      },
    });

    this.geoCoder.AddMarkerInfo(marker, mappable);
  }

  SearchText(options: SearchOptions): void {
    this.geoCoder.SearchText(options);
  }
}
