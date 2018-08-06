import { Component, OnInit } from '@angular/core';
import { Country } from '../view-models/country';
import { ActivatedRoute, Router } from '@angular/router';
import { AppDataService } from '../services/app-data.service';
import { FieldDefination } from '../dynamic-forms/field-defination';


@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  country: Country;
  countryDefination: Array<FieldDefination> = [
    {
      key: 'id',
      type: 'number',
      isId: true,
      label: 'Id',
      required: true
    },
    {
      key: 'name',
      type: 'string',
      isId: false,
      label: 'Country Name',
      required: true
    },
    {
      key: 'epiIndex',
      type: 'number',
      isId: false,
      label: 'EPI Index',
      required: true
    }

  ];
  errorMessage: string;
  operation: string;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private appDataService: AppDataService) { }

  ngOnInit() {
    this.operation = this.route.snapshot.params['operation'];
    if(this.operation === 'create' ){
      this.country = { id: 0, name: '', epiIndex: null};
    }else{
      this.appDataService.getCountry(this.route.snapshot.params['id'])
      .subscribe((country: Country) => this.country = country );
    }

  }

  createCountry(country: Country){
    country.id = 0;
    this.errorMessage = null;
    this.appDataService.createCountry(country).subscribe(
      c => this.router.navigate(['/authenticated/country-maint']),
      err => this.errorMessage = 'Error Creating Country'
    );
  }

  updateCountry(country: Country){
    this.errorMessage = null;
    this.appDataService.updateCountry(country).subscribe(
      c => this.router.navigate(['/authenticated/country-maint']),
      err => this.errorMessage = 'Error upddating country'
    );
  }


}
