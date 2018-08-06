import { Component, OnInit } from '@angular/core';
import { ApplicationConfigService } from '../application-config.service';
import { UserApi } from '../users/user-api';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private applicationConfigService: ApplicationConfigService,
  private userApi: UserApi) { }

  ngOnInit() {
  }

  signOut(){
    this.userApi.signOut();
  }
}
