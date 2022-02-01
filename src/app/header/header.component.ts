import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerLogo:string = "store.png";
  banner:string = "Banner2.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
