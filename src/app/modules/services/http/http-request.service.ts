import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class HttpRequestService {

  constructor(private httpClient: HttpClient) {
  }

  getRequest(url: string) {
    return this.httpClient.get<any>(url);
  }

  postRequest(url: string, data: any) {
    return this.httpClient.post<any>(url, data);
  }

}
