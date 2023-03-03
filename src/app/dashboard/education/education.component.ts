import { Component } from '@angular/core';
import { Education } from 'src/app/models/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  education:Education = {
    university:[
      {
        name:'UTN',
        title:'Tecnicatura en programación',
        period:'2011 - 2014',
        finished:false
      }
    ]
  }

}
