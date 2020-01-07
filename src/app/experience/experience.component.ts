import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  public jobDesc1 : string[];
  public jobDesc2 : string[];

  constructor() { 
    this.jobDesc1 = [];
    this.jobDesc1.push("Developing ECU test system software/hardware.");
    this.jobDesc1.push("Developing .net Core app using Blazor");
    console.log(this.jobDesc1[0]);
    this.jobDesc2  = ["Containerizing existing ASP Net Core services and migrating them to AWS ECS using CI/CD.",
      "Working to stand up new ASP Net Core services in AWS ECS, AWS Lambdas, and On-Prem Docker EE", 
      "Working together with multiple teams to help create a suite of backend services"];
  }

  ngOnInit() {
  }

}
