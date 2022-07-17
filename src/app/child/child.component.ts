import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  standalone: true,
})
export class ChildComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
