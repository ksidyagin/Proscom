import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(private http: HttpClient, private jwtService: JwtHelperService) { }
  user:any;
  ngOnInit(){
    this.user = this.jwtService.decodeToken();
  }

}
