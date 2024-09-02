import { Component } from '@angular/core';
import { LayoutStandaloneComponents } from '../../layout/layout';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, LayoutStandaloneComponents],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}