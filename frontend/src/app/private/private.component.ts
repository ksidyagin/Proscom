import { Component } from '@angular/core';
import { UserI } from '../model/user.interface';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss'],

})
export class PrivateComponent {
  constructor(private http: HttpClient, private jwtService: JwtHelperService) { }
  user:any;
  ngOnInit(){
    this.user = this.jwtService.decodeToken();
  }
}
