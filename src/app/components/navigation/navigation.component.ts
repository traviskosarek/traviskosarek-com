import { Component, OnInit, AfterViewInit, Input, ElementRef, HostListener, ViewChild } from "@angular/core";

@Component({
  selector: "portfolio-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit, AfterViewInit {
  public sticky: boolean;

  public top: number;

  @ViewChild("navbar")
  public navbar: ElementRef;

  constructor(public element: ElementRef) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.onResize(undefined);
  }

  @HostListener("window:resize", ["$event"])
  public onResize(event) {
    this.top = this.element.nativeElement.offsetTop;
    this.checkScroll();
  }

  @HostListener("window:scroll", ["$event"])
  public checkScroll() {
    const position = window.pageYOffset;

    if (position >= this.top) {
      this.sticky = true;
      this.navbar.nativeElement.classList.add("sticky");
    } else {
      this.sticky = false;
      this.navbar.nativeElement.classList.remove("sticky");
    }
  }
}
