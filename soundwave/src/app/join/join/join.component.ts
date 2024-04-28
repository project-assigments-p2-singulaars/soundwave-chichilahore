import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../discover/footer/footer.component';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [FormComponent, HeaderComponent, FooterComponent],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss'
})
export class JoinComponent {

}
