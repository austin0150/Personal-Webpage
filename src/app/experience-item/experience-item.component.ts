import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {

  @Input() listId : string;
  @Input() Title :string;
  @Input() Company :string;
  @Input() Dates : string;
  @Input() Description : Array<string>;

  constructor() { }

  ngOnInit() {

    
  }

  ngAfterViewInit(){
    var list = document.getElementById(this.listId);
   
    console.log(this.Description.length);
    for (var i = 0; i < this.Description.length; i++) {
      var entry = document.createElement('li');
      entry.appendChild(document.createTextNode(this.Description[i]));
      list.appendChild(entry);
    }
  }

}
