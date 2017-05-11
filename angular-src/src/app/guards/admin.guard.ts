import { Injectable } from '@angular/core';
import { Router, CanActivate, CanDeactivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AdminGuard implements CanActivate{

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  canActivate(){
      return this.authService.admin;
  }

}