import { Component, VERSION } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule]
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  datasubscribe$: Subscription;

  ngOnInit() {}
}
