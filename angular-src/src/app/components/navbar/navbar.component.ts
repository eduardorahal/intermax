import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AdminGuard } from '../../guards/admin.guard';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  admin = false;
  cadastro = false;

  constructor(
    private authService: AuthService,
    private adminGuard: AdminGuard,
    private router: Router,
    private flashMessage: FlashMessagesService,
  ) {}

   ngOnInit(){

   }

  onLogoutClick(){
    this.authService.logout();
    this.flashMessage.show('Logout Efetuado com Sucesso', {cssClass:'alert-success', timeout: '3000'});
    this.router.navigate(['login']);
    return false;
  }

}
