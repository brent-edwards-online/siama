import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  private isOpen: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  private toggleIsOpen(): void {
      this.isOpen = !this.isOpen;
  }
}
