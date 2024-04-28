import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MainDiscoverComponent } from '../main-discover/main-discover.component';

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [HeaderComponent, MainDiscoverComponent, FooterComponent],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.scss'
})
export class DiscoverComponent {

}
