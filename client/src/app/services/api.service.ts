import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  loginUser(email: string, password: string) {
    return this.http.post(this.baseURL + '/auth/login', {
      email: email,
      password: password,
    });
  }

  async registerUser(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    const res = await this.http
      .post(this.baseURL + '/auth/register', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
      .toPromise();
    console.log(res);
    return res;
  }

  async getScholars() {
    const res = await this.http.get(this.baseURL + '/scholars/').toPromise();
    console.log(res);
    return res;
  }

  getScholarships(){
    return this.http.get(this.baseURL + '/scholarships')
  }

  addScholarship(
    title: string,
    description: string,
    payment_type: string,
    supported_token: string,
    budget: number,
    manager: string
  ) {
    return this.http.post(this.baseURL + '/scholarships/create', {
      title,
      description,
      payment_type,
      supported_token,
      budget,
      manager,
    });
  }
}
