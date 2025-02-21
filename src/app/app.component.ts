import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./components/nav/nav.component";
import { FormsModule } from '@angular/forms';
import { CountComponent } from "./components/count/count.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, CountComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eventTracker';
}
