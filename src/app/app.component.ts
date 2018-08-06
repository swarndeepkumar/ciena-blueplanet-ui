import { Component } from '@angular/core';
import { ApplicationConfigService, ApplicationConfigSettings } from './application-config.service';
import { MenuService } from './menu.service';
import { initialMenuItems } from './app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private applicationConfigService: ApplicationConfigService,
    private menuService: MenuService) {

    let config:ApplicationConfigSettings = {
      socialIcons: [
        {imageFile: 'assets/fb.png', alt: 'Facebook', link: 'http://www.facebook.com/'},
        {imageFile: 'assets/tw.png', alt: 'Twitter', link: 'http://www.twitter.com/'},
        {imageFile: 'assets/in.png', alt: 'Linked In', link: 'http://www.linkedin.com/'}
      ],
      showLanguageSelector: true,
      showUserControls: true,
      showStatusBar: true,
      showStatusBreakpoint: 800

    };
    applicationConfigService.configure(config);
    menuService.items = initialMenuItems;
  }
}
