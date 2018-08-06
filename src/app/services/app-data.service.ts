import { Injectable } from '@angular/core';
import { Country } from '../view-models/country';
import { UserService } from './user.service';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AppDataService {

private countries : Array<Country> = [
        {id: 1, name: 'Switzerland', epiIndex: 87.67},
        {id: 2, name: 'Luxzumberge', epiIndex: 83.67},
        {id: 3, name: 'Australia', epiIndex: 82.67},
        {id: 4, name: 'Singapure', epiIndex: 81.67},
        {id: 5, name: 'Crech Republic', epiIndex: 81.47},
        {id: 6, name: 'Germany', epiIndex: 80.67},
        {id: 7, name: 'Spain', epiIndex: 79.67},
        {id: 8, name: 'Austria', epiIndex: 78.67},
        {id: 9, name: 'Swedon', epiIndex: 77.67},
        {id: 10, name: 'Norway', epiIndex: 76.67}
    ];

  constructor(private userService: UserService) { }

    createCountry(vm: Country): Observable<any> {
         //return of({}).pipe(delay(200)).pipe(flatMap(x=>throwError('Invalid User Name and/or Passowd')));
        let id = 0;
        this.countries.forEach(c => { if (c.id >= id) {
         id = c.id + 1;   
        }});
        vm.id = id;
        this.countries.push(vm);
        return of(vm);
    }

    deleteCountry(id: number): Observable<any>{
         //return of({}).pipe(delay(200)).pipe(flatMap(x=>throwError('Invalid User Name and/or Passowd')));
        return of({}).pipe(delay(2000))
        .pipe(tap(e => this.countries.splice(this.countries.findIndex(c => c.id == id), 1 )));

    }

    getCountries(): Observable<any>{
         //return of({}).pipe(delay(200)).pipe(flatMap(x=>throwError('Invalid User Name and/or Passowd')));
        return of(this.countries);
    }

    getCountry(id: number): Observable<any>{
        var country = this.countries.find(c => c.id == id);
        return of(country);
    }

    updateCountry(updatedCountry: Country): Observable<any> {
        this.countries.forEach( c => {
            if(c.id ===  updatedCountry.id) {
                c.name = updatedCountry.name;
                c.epiIndex = updatedCountry.epiIndex;
            }
        })
        
        return of(this.countries);
    }
}
