import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Response {
  result: any;
}

interface Responsestatus {
  status: number;
}

interface Userstatus {
  valid: boolean;
  status: string;
}
@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private httpClient: HttpClient) { }

  generatetemplate(data) {
    return this.httpClient.post<Responsestatus>('/api/template/generatetemplate', { data });
  }

  checkuser(useremail, authtoken) {
    return this.httpClient.get<Userstatus>('/api/user/checkuser?useremail=' + useremail + '&authtoken=' + authtoken);
  }

  getTemplateList() {
    return this.httpClient.get<Response>('/api/template');
  }

}
