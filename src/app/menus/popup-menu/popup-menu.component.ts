import { Component, OnInit, Input } from '@angular/core';
import { MenuService, MenuItem } from '../../menu.service';

@Component({
  selector: 'app-popup-menu',
  templateUrl: './popup-menu.component.html',
  styleUrls: ['./popup-menu.component.css']
})
export class PopupMenuComponent implements OnInit {
  
  @Input() menu: Array<MenuItem>;
  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

}
