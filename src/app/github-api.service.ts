import {Http, Headers} from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const BASE_URL = 'https://api.github.com/repos/twbs/bootstrap/issues';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

export interface Issue {
  id: number;
  number: number;
  title: string;
};

@Injectable()
export class GithubApiService {
  constructor(private http: Http) {}

  loadIssues() {
    return this.http.get(BASE_URL)
      .map(res => res.json())
      .toPromise();
  }
}