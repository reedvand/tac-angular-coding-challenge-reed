import {Injectable} from "@angular/core";
import {HttpRequestService} from "../../../services/http/http-request.service";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {People} from "../models/people.model";
import {Person} from "../models/person.model";

@Injectable({providedIn: 'root'})
export class PeopleBusiness {

  apiUrl = 'http://localhost:4500/people/';

  constructor(private httpService: HttpRequestService) {
  }

  getPeople(): Observable<People[]> {
    return this.httpService.getRequest(this.apiUrl)
      .pipe(
        map(people => {
          const peopleList: People[] = people.map((p: any) => {
            return (
              {
                id: p.id,
                name: p.name,
                isActive: p.isActive,
                dateRegistered: p.registered.substring(0 ,10)
              }
            );
          });
          return peopleList;
        }));
  }

  getPersonById(id: string): Observable<Person> {
    return this.httpService.getRequest(this.apiUrl + id)
      .pipe(
        map((person: Person) => person)
      );
  }

  updatePerson(person: Person) {
    return this.httpService.putRequest(this.apiUrl + person.id, person);
  }

  addPerson(person: any) {
    return this.httpService.postRequest(this.apiUrl, person);
  }
}
