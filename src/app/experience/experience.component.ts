import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  public jobDesc1 : string[];
  public jobDesc2 : string[];
  public jobDesc3 : string[];
  public jobDesc4 : string[];

  constructor() { 
    this.jobDesc1 = [];
    this.jobDesc1.push("Developing ECU test system software/hardware.");
    this.jobDesc1.push("Developing .net Core app using Blazor");

    this.jobDesc2  = [];
    this.jobDesc2.push("Containerizing existing ASP Net Core services and migrating them to AWS ECS using CI/CD.");
    this.jobDesc2.push("Working to stand up new ASP Net Core services in AWS ECS, AWS Lambdas, and On-Prem Docker EE");
    this.jobDesc2.push("Working together with multiple teams to help create a suite of backend services");

    this.jobDesc3 = [];
    this.jobDesc3.push("Developing and maintaining Inventory Tracking for spare parts on assembly line using C# with .NET framework");
    this.jobDesc3.push("Assessing need for spare parts and manage parts in inventory using my own inventory tracking software");

    this.jobDesc4 =[];
    this.jobDesc4.push("Developed and maintained advanced Inventory Tracking for spare parts on assembly line using C# with .NET framework ");
    this.jobDesc4.push("Developed system to track and monitor washing of inventory storage carts for plant using Java and headless Raspberry Pi ");
    this.jobDesc4.push("Troubleshooting embedded system functionality using log analysis and communication with system developers");


  }

  ngOnInit() {
  }

}
