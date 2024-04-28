import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { AsideComponent } from '../aside/aside.component';
import { DashboardComponent } from '../../dashboard/dashboard/dashboard.component';


@Component({
  selector: 'acme-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AsideComponent, DashboardComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {}

