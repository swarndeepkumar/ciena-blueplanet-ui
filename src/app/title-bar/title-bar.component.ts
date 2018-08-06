import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../screen.service';
import { MenuService } from '../menu.service';
@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  constructor(private screenService: ScreenService,
              private menuService: MenuService) { }

  ngOnInit() {
  }

}
