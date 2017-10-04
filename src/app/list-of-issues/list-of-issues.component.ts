import { Component, OnInit } from '@angular/core';
import {GithubApiService,Issue} from '../github-api.service';


@Component({
  selector: 'app-list-of-issues',
  templateUrl: './list-of-issues.component.html',
  styleUrls: ['./list-of-issues.component.css'],
  providers: [GithubApiService],
  //directives: [ItemsList, ItemDetail]
})

export class ListOfIssuesComponent implements OnInit {
  issues: Array<Issue>;

  constructor(private githubApiService: GithubApiService) {}


  ngOnInit() {
    this.githubApiService.loadIssues()
      .then(issues => {
        this.issues = issues;
      });
    }

}
