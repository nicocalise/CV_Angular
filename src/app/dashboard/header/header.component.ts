
import { Component } from '@angular/core';
import { Info } from 'src/app/models/info';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  info:Info = {
    name:'Nicolas Calise',
    email:'tonio.calise@gmail.com',
    celphone:611171565,
    linkedin:'https://www.linkedin.com/in/nicolas-antonio-calise/'
  };
}
