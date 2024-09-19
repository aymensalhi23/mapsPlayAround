import { AfterViewInit, Component, ElementRef, NgZone, ViewChild } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements AfterViewInit {
  @ViewChild('LocationInputField') LocationInputField!: ElementRef;

  //autocompleteService!: google.maps.places.AutocompleteService;
  suggestions: any[] = [];
  showSuggestions = false;

  autoComplete!: google.maps.places.Autocomplete | undefined;

  constructor(
    private ngZone: NgZone
  ) {
  }

  ngAfterViewInit(): void {
    //this.autocompleteService = new google.maps.places.AutocompleteService();
    
    this.autoComplete = new google.maps.places.Autocomplete(this.LocationInputField.nativeElement);
    this.autoComplete.addListener('place_changed', () => {
      const place = this.autoComplete?.getPlace();
      console.log(place?.geometry?.location?.toJSON().lat, place?.geometry?.location?.toJSON().lng);
    })
  }

  selectSuggestion(suggestion: any) {
    /*console.log('Selected suggestion:', suggestion);
    const placeId = suggestion.place_id;*/
    
  }


  /*onInput(event: any) {
    const query = event.target.value;
    if (query.length > 2) {
      this.autocompleteService.getPlacePredictions({ input: query }, (predictions, status) => {
        this.ngZone.run(() => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            this.suggestions = predictions!;
          } else {
            this.suggestions = [];
          }
        });
      });
    } else {
      this.suggestions = [];
    }
  }*/
}
