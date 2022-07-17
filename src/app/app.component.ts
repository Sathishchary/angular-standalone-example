import { Component, VERSION } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  datasubscribe$: Subscription;

  ngOnInit() {}
}
