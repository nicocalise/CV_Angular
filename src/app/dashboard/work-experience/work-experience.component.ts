import { Component } from '@angular/core';
import { Experience, WorkExperience } from 'src/app/models/experience';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {

  workExperience:WorkExperience=
    {
      experience:[
        {
        dateBetween:'08/2022 - Actualidad',
        company:'Bravos',
        role:'Desarrollador Junior',
        tecno:[
          {
            name:'PHP Codeingiter'
          },
          {
            name:'MySQL'
          }
          ]
        },
        {
          dateBetween:'12/2019 - 07/2022',
          company:'Sigma Investment',
          role:'Comercial Financiero',
          tecno:[]
          }
      ]
  }
}
