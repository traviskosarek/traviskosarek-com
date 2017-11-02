import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public navbar;
  public sticky;

  constructor() {}

  ngOnInit() {
    this.navbar = document.getElementById('navbar');
    // this.sticky = this.navbar.offsetTop;
  }

  // Add the sticky class to the navbar when you reach its scroll position. Remove 'sticky' when you leave the scroll position
  public myFunction() {
    if (window.pageYOffset >= this.sticky) {
      this.navbar.classList.add('sticky');
    } else {
      this.navbar.classList.remove('sticky');
    }
  }
}
