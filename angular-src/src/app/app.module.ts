import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { RepresentantesComponent } from './components/representantes/representantes.component';
import { RegioesComponent } from './components/regioes/regioes.component';
import { LateralComponent } from './components/lateral/lateral.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { GetService } from './services/get.service';
import { PostService } from './services/post.service';
import { FlashMessagesModule} from 'angular2-flash-messages';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { CadastroGuard } from './guards/cadastro.guard';

import { TextMaskModule } from 'angular2-text-mask';

const appRoutes: Routes =[
  {path:'', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'home', component: HomeComponent},
  {path:'register', component: RegisterComponent, canActivate:[AdminGuard]},
  {path:'login', component: LoginComponent},
  {path:'clientes', component: ClientesComponent, canActivate:[AuthGuard]},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'pedidos', component: PedidosComponent, canActivate:[AuthGuard]},
  {path:'produtos', component: ProdutosComponent, canActivate:[AuthGuard]},
  {path:'representantes', component: RepresentantesComponent, canActivate:[AdminGuard]},
  {path:'regioes', component: RegioesComponent, canActivate:[AdminGuard]},
  {path:'usuarios', component: UsuariosComponent, canActivate:[AdminGuard]},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProdutosComponent,
    PedidosComponent,
    ClientesComponent,
    RepresentantesComponent,
    RegioesComponent,
    LateralComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    TextMaskModule
  ],
  providers: [ValidateService, AuthService, AuthGuard, AdminGuard, CadastroGuard, GetService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
