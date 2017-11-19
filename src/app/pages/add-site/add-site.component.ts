import { Site } from '../../models/site';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { SiteService } from '../../_services/site.service';
import { Router } from '@angular/router';
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.css']
})
export class AddSiteComponent implements OnInit {
  values: string;
  displayError: any;
  form: FormGroup;
  latitude: number;
  longitude: number;
  searchControl: FormControl;
  zoom: number;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone, private fb: FormBuilder, private siteservice: SiteService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      address: this.fb.group({
        state: [''],
        suburb: [''],
        xcoordinates: [''],
        ycoordinates: [''],
      }),
      interval: [''],
      note: [''],
      member: [''],
    });

    this.latitude = 39.8282;
    this.longitude = -98.5795;

    // create search FormControl
    this.searchControl = new FormControl();

    // set current position
    this.setCurrentPosition();

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['(cities)']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 15;
        });
      });
    });
  }
  onSubmit({ value, valid }: { value: Site, valid: boolean }) {
    const date: Date = new Date();
    value.lastcompletedDate = date;
    this.siteservice.listRef.add(value)
      .then((success) => this.router.navigate(['/']))
      .catch((error) => {
        this.displayError = error.message;
      });
  }
  state(event: any) { // without type info
    this.values = event.target.value;
  }
  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
}
