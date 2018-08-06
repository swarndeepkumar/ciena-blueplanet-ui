import { Injectable } from '@angular/core';

export interface IconFiles {
  imageFile: string,
  alt: string,
  link: string
}

export interface ApplicationConfigSettings {
  showLanguageSelector?: boolean,
  showUserControls?: boolean,
  showStatusBar?: boolean,
  showStatusBreakpoint?: number,
  socialIcons?: Array<IconFiles>
}
@Injectable({
  providedIn: 'root'
})
export class ApplicationConfigService {
  showLanguageSelector = true;
  showUserControls = true;
  showStatusBar = true;
  showStatusBreakpoint = 0;
  socialIcons = new Array<IconFiles>();
  
  configure(settings: ApplicationConfigSettings) : void {
    Object.assign(this, settings);
  }
}
