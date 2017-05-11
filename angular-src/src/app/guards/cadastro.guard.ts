import { Injectable } from '@angular/core';
import { Router, CanActivate, CanDeactivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class CadastroGuard implements CanActivate{
  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  canActivate(){
   return false;
  }

}