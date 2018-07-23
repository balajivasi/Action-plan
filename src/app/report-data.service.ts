import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class ReportDataService {

  constructor(private _http:Http) { }

  getReportsService(id):Observable<any>{
		
		return this._http.get('./assets/script/data.json')
				  		 .pipe(map(response=>{
                 let data= response.json();

                return data.filter(function (entry) {
                   //debugger;
                  return entry.ID === id;
                })
                  //return data;
               }))
				  		 	
  }
}

