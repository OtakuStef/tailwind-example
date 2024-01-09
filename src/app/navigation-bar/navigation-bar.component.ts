import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {

public flyoutIsVisible = false;
public sliderIsVisible = false;

flyoutMenu() {
  this.flyoutIsVisible = !this.flyoutIsVisible;
}

sliderMenu() {
  this.sliderIsVisible = !this.sliderIsVisible;
}

}
