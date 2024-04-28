import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AsideComponent } from './layout/aside/aside.component';

@Component({
    selector: 'acme-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, DashboardComponent, AsideComponent]
})
export class AppComponent {
  title = 'acme-crm';
}
