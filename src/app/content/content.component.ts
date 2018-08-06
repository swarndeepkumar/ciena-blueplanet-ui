import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { ScreenService } from '../screen.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private menuService: MenuService,
    private screenService: ScreenService) { }

  ngOnInit() {
  }

}
