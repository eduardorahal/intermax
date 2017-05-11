webpackJsonp([1,4],{

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CadastroGuard = (function () {
    function CadastroGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    CadastroGuard.prototype.canActivate = function () {
        return false;
    };
    CadastroGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], CadastroGuard);
    return CadastroGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/tmp/intermax/angular-src/src/cadastro.guard.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_cookies__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.admin = false;
        this.cadastro = false;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.isAdmin = function () {
        this.user = __WEBPACK_IMPORTED_MODULE_4_ng2_cookies__["Cookie"].get('1');
        if (this.user == "true") {
            this.admin = true;
        }
        else {
            this.admin = false;
        }
    };
    AuthService.prototype.loggedIn = function () {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])()) {
            this.isAdmin();
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
        }
    };
    AuthService.prototype.mostraNavbar = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user, jwt) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
        this.idEmpresa = user.idEmpresa;
        if (this.user.acesso == "admin") {
            this.admin = true;
            __WEBPACK_IMPORTED_MODULE_4_ng2_cookies__["Cookie"].set('1', 'true');
        }
        if (this.user.acesso !== "admin") {
            this.admin = false;
            __WEBPACK_IMPORTED_MODULE_4_ng2_cookies__["Cookie"].set('1', 'false');
        }
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        this.admin = null;
        this.cadastro = null;
        localStorage.clear();
        __WEBPACK_IMPORTED_MODULE_4_ng2_cookies__["Cookie"].deleteAll();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=C:/tmp/intermax/angular-src/src/auth.service.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = (function () {
    function AdminGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function () {
        return this.authService.admin;
    };
    AdminGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AdminGuard);
    return AdminGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/tmp/intermax/angular-src/src/admin.guard.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.username == undefined || user.password == undefined || user.firstName == undefined || user.lastName == undefined || user.email == undefined || user.idEmpresa == "" || user.acesso == "" || user.telefone == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=C:/tmp/intermax/angular-src/src/validate.service.js.map

/***/ }),

/***/ 395:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 395;


/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(513);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/tmp/intermax/angular-src/src/main.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(703),
            styles: [__webpack_require__(690)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=C:/tmp/intermax/angular-src/src/app.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_produtos_produtos_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_pedidos_pedidos_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_clientes_clientes_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_representantes_representantes_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_regioes_regioes_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_lateral_lateral_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_validate_service__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_get_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_post_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_usuarios_usuarios_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__guards_admin_guard__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__guards_cadastro_guard__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_text_mask__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_angular2_text_mask__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'clientes', component: __WEBPACK_IMPORTED_MODULE_13__components_clientes_clientes_component__["a" /* ClientesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'pedidos', component: __WEBPACK_IMPORTED_MODULE_12__components_pedidos_pedidos_component__["a" /* PedidosComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'produtos', component: __WEBPACK_IMPORTED_MODULE_11__components_produtos_produtos_component__["a" /* ProdutosComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'representantes', component: __WEBPACK_IMPORTED_MODULE_14__components_representantes_representantes_component__["a" /* RepresentantesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'regioes', component: __WEBPACK_IMPORTED_MODULE_15__components_regioes_regioes_component__["a" /* RegioesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'usuarios', component: __WEBPACK_IMPORTED_MODULE_22__components_usuarios_usuarios_component__["a" /* UsuariosComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__guards_admin_guard__["a" /* AdminGuard */]] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_produtos_produtos_component__["a" /* ProdutosComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_pedidos_pedidos_component__["a" /* PedidosComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_clientes_clientes_component__["a" /* ClientesComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_representantes_representantes_component__["a" /* RepresentantesComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_regioes_regioes_component__["a" /* RegioesComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_lateral_lateral_component__["a" /* LateralComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_usuarios_usuarios_component__["a" /* UsuariosComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_26_angular2_text_mask__["TextMaskModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_17__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_24__guards_admin_guard__["a" /* AdminGuard */], __WEBPACK_IMPORTED_MODULE_25__guards_cadastro_guard__["a" /* CadastroGuard */], __WEBPACK_IMPORTED_MODULE_19__services_get_service__["a" /* GetService */], __WEBPACK_IMPORTED_MODULE_20__services_post_service__["a" /* PostService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/tmp/intermax/angular-src/src/app.module.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_get_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_post_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_cadastro_guard__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ClientesComponent = (function () {
    function ClientesComponent(getService, postService, router, flashMessage, cadastroGuard, authService) {
        this.getService = getService;
        this.postService = postService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.cadastroGuard = cadastroGuard;
        this.authService = authService;
        this.categoria = "";
        this.estado = "";
        this.endArr = [];
        this.telArr = [];
        this.cpfArr = [];
        this.consulta_categoria = "";
        this.consulta_representante = "";
        this.consulta_regiao = "";
        this.consulta_cidade = "";
        this.consulta_estado = "";
        this.info = [];
        this.regioes = [
            { id: 1, nome: "centro" },
            { id: 2, nome: "oeste" }
        ];
        this.representantes = [
            { id: 1, nome: "centro" },
            { id: 2, nome: "oeste" }
        ];
        this.estados = [{ value: "AC" }, { value: "AL" }, { value: "AM" }, { value: "AP" }, { value: "BA" }, { value: "CE" }, { value: "DF" }, { value: "ES" }, { value: "GO" }, { value: "MA" }, { value: "MT" }, { value: "MS" }, { value: "MG" }, { value: "PA" }, { value: "PB" }, { value: "PR" }, { value: "PE" }, { value: "PI" }, { value: "RJ" }, { value: "RN" }, { value: "RO" }, { value: "RS" }, { value: "RR" }, { value: "SC" }, { value: "SE" }, { value: "SP" }, { value: "TO" },];
    }
    ClientesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (usuario) {
            _this.idEmpresa = usuario.user.idEmpresa;
            if (usuario.user.acesso == "admin") {
                document.getElementById('abaCadastro').setAttribute('class', 'active');
                document.getElementById('cadastrar_Cliente').setAttribute('class', 'tab-pane fade active in');
                document.getElementById('consultar_Cliente').setAttribute('class', 'tab-pane fade');
            }
            else {
                if (usuario.user.acesso == "cadastro") {
                    document.getElementById('abaCadastro').setAttribute('class', 'active');
                    document.getElementById('cadastrar_Cliente').setAttribute('class', 'tab-pane fade active in');
                    document.getElementById('consultar_Cliente').setAttribute('class', 'tab-pane fade');
                }
                else {
                    document.getElementById('abaCadastro').setAttribute('class', 'disabled');
                    document.getElementById('abaCadastro').style.display = 'none';
                    document.getElementById('cadastrar_Cliente').style.display = 'none';
                    document.getElementById('abaConsulta').setAttribute('class', 'active');
                    document.getElementById('consultar_Cliente').setAttribute('class', 'tab-pane fade active in');
                }
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ClientesComponent.prototype.limpa = function () {
        this.cnpj = null;
        this.razao = null;
        this.categoria = "";
        this.contato = null;
        this.insc_estadual = null;
        this.regiao = null;
        this.endereco = null;
        this.bairro = null;
        this.cidade = null;
        this.estado = "";
        this.cep = null;
        this.telefone = null;
        this.contato_tel = null;
        this.operadora = null;
        this.cpf = null;
        this.nome_cpf = null;
        this.endArr.length = null;
        this.telArr.length = null;
        this.cpfArr.length = null;
    };
    ClientesComponent.prototype.limpaBusca = function () {
        this.clientes = null;
        this.consulta_cliente = "";
        this.consulta_id = "";
        this.consulta_categoria = "";
        this.consulta_representante = "";
        this.consulta_regiao = "";
        this.consulta_cidade = "";
        this.consulta_estado = "";
    };
    ClientesComponent.prototype.infoCliente = function (cliente) {
        this.info = cliente;
    };
    ClientesComponent.prototype.editCliente = function (cliente) {
        this._id = cliente._id;
        this.cnpj = cliente.cnpj;
        this.razao = cliente.razao;
        this.categoria = cliente.categoria;
        this.contato = cliente.contato;
        this.insc_estadual = cliente.insc_estadual;
        this.regiao = cliente.regiao;
        this.endereco = null;
        this.bairro = null;
        this.cidade = null;
        this.estado = "";
        this.cep = null;
        this.telefone = null;
        this.contato_tel = null;
        this.operadora = null;
        this.cpf = null;
        this.nome_cpf = null;
        this.endArr = cliente.enderecos;
        this.telArr = cliente.telefones;
        this.cpfArr = cliente.cpfs;
    };
    ClientesComponent.prototype.consultaCliente = function () {
        var _this = this;
        if (this.consulta_cliente.length >= 3) {
            var consulta_cliente = {
                consulta_cliente: this.consulta_cliente,
            };
            this.postService.consultaClientes(consulta_cliente).subscribe(function (cliente) {
                _this.clientes = cliente;
            });
        }
    };
    ClientesComponent.prototype.consultaClienteID = function () {
        var _this = this;
        var consulta_id = {
            consulta_id: this.consulta_id,
        };
        this.postService.consultaClientesID(consulta_id).subscribe(function (cliente) {
            _this.clientes = cliente;
        });
    };
    ClientesComponent.prototype.consultaClienteMulti = function () {
        var _this = this;
        if (this.consulta_categoria == "" && this.consulta_representante == "" && this.consulta_regiao == "" && this.consulta_cidade == "" && this.consulta_estado == "") {
        }
        else {
            var consulta_tmp = {};
            if (this.consulta_regiao !== "") {
                consulta_tmp["regiao"] = this.consulta_regiao;
            }
            if (this.consulta_cidade !== "") {
                consulta_tmp["cidade"] = this.consulta_cidade;
            }
            if (this.consulta_estado !== "") {
                consulta_tmp["estado"] = this.consulta_estado;
            }
            if (this.consulta_categoria !== "") {
                consulta_tmp["categoria"] = this.consulta_categoria;
            }
            if (this.consulta_representante !== "") {
                consulta_tmp["representante"] = this.consulta_representante;
            }
            this.postService.consultaClientesMulti(consulta_tmp).subscribe(function (cliente) {
                _this.clientes = cliente;
            });
        }
    };
    ClientesComponent.prototype.adicionaEndereco = function () {
        if (this.endereco == null || this.bairro == null || this.cidade == null || this.estado == null || this.cep == null) {
        }
        else {
            var end_tmp = {
                endereco: this.endereco,
                bairro: this.bairro,
                cidade: this.cidade,
                estado: this.estado,
                cep: this.cep,
            };
            this.endArr.push(end_tmp);
            this.endereco = null;
            this.bairro = null;
            this.cidade = null;
            this.estado = null;
            this.cep = null;
        }
    };
    ClientesComponent.prototype.removeEndereco = function (item) {
        var index = this.endArr.indexOf(item);
        this.endArr.splice(index, 1);
    };
    ClientesComponent.prototype.adicionaTelefone = function () {
        if (this.telefone == null || this.contato_tel == null || this.operadora == null) {
        }
        else {
            var tel_tmp = {
                telefone: this.telefone,
                contato_tel: this.contato_tel,
                operadora: this.operadora,
            };
            this.telArr.push(tel_tmp);
            this.telefone = null;
            this.contato_tel = null;
            this.operadora = null;
        }
    };
    ClientesComponent.prototype.removeTelefone = function (item) {
        var index = this.telArr.indexOf(item);
        this.telArr.splice(index, 1);
    };
    ClientesComponent.prototype.adicionaCPF = function () {
        if (this.cpf == null || this.nome_cpf == null) {
        }
        else {
            var cpf_tmp = {
                cpf: this.cpf,
                nome_cpf: this.nome_cpf,
            };
            this.cpfArr.push(cpf_tmp);
            this.cpf = null;
            this.nome_cpf = null;
        }
    };
    ClientesComponent.prototype.removeCPF = function (item) {
        var index = this.cpfArr.indexOf(item);
        this.cpfArr.splice(index, 1);
    };
    ClientesComponent.prototype.adicionaCliente = function () {
        var _this = this;
        this.adicionaEndereco();
        this.adicionaTelefone();
        this.adicionaCPF();
        var Cliente = {
            cnpj: this.cnpj,
            razao: this.razao,
            categoria: this.categoria,
            contato: this.contato,
            insc_estadual: this.insc_estadual,
            regiao: this.regiao,
            endArr: this.endArr,
            telArr: this.telArr,
            cpfArr: this.cpfArr,
        };
        this.postService.adicionaCliente(Cliente).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/clientes']);
                _this.limpa();
            }
            else {
                _this.flashMessage.show('Ocorreu um erro inesperado', { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/clientes']);
            }
        });
    };
    ClientesComponent.prototype.modificaCliente = function () {
        var _this = this;
        this.adicionaEndereco();
        this.adicionaTelefone();
        this.adicionaCPF();
        var Cliente = {
            _id: this._id,
            cnpj: this.cnpj,
            razao: this.razao,
            categoria: this.categoria,
            contato: this.contato,
            insc_estadual: this.insc_estadual,
            regiao: this.regiao,
            endArr: this.endArr,
            telArr: this.telArr,
            cpfArr: this.cpfArr,
        };
        this.postService.modificaCliente(Cliente).subscribe(function (data) {
            if (data.success) {
                _this.limpa();
                $("#edit").modal('hide');
                _this.limpaBusca();
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                _this.flashMessage.show('Ocorreu um erro inesperado', { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    ClientesComponent.prototype.removeCliente = function (cliente) {
        var _this = this;
        var Cliente = {
            _id: cliente._id
        };
        this.postService.removeCliente(Cliente).subscribe(function (data) {
            if (data.success) {
                $("#remove").modal('hide');
                _this.limpaBusca();
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                _this.flashMessage.show('Ocorreu um erro inesperado', { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    ClientesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-clientes',
            template: __webpack_require__(704),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_get_service__["a" /* GetService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_get_service__["a" /* GetService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__guards_cadastro_guard__["a" /* CadastroGuard */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__guards_cadastro_guard__["a" /* CadastroGuard */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */]) === 'function' && _f) || Object])
    ], ClientesComponent);
    return ClientesComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=C:/tmp/intermax/angular-src/src/clientes.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(705),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=C:/tmp/intermax/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(706),
            styles: [__webpack_require__(693)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/tmp/intermax/angular-src/src/home.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LateralComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LateralComponent = (function () {
    function LateralComponent() {
    }
    LateralComponent.prototype.ngOnInit = function () {
    };
    LateralComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lateral',
            template: __webpack_require__(707),
            styles: [__webpack_require__(694)]
        }), 
        __metadata('design:paramtypes', [])
    ], LateralComponent);
    return LateralComponent;
}());
//# sourceMappingURL=C:/tmp/intermax/angular-src/src/lateral.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user, data.jwt);
                _this.flashMessage.show('Você está Logado', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(708),
            styles: [__webpack_require__(695)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/tmp/intermax/angular-src/src/login.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_admin_guard__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(authService, adminGuard, router, flashMessage) {
        this.authService = authService;
        this.adminGuard = adminGuard;
        this.router = router;
        this.flashMessage = flashMessage;
        this.admin = false;
        this.cadastro = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('Logout Efetuado com Sucesso', { cssClass: 'alert-success', timeout: '3000' });
        this.router.navigate(['login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(709),
            styles: [__webpack_require__(696)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__guards_admin_guard__["a" /* AdminGuard */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__guards_admin_guard__["a" /* AdminGuard */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _d) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/tmp/intermax/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_get_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_post_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_cadastro_guard__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PedidosComponent = (function () {
    function PedidosComponent(getService, postService, router, flashMessage, cadastroGuard, authService) {
        this.getService = getService;
        this.postService = postService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.cadastroGuard = cadastroGuard;
        this.authService = authService;
    }
    PedidosComponent.prototype.ngOnInit = function () {
    };
    PedidosComponent.prototype.consultaCliente = function () {
        var _this = this;
        var consulta_cliente = {
            consulta_cliente: this.consulta_cliente,
        };
        this.postService.consultaClientes(consulta_cliente).subscribe(function (cliente) {
            _this.clientes = cliente;
        });
        $("#select_cliente").modal('show');
    };
    PedidosComponent.prototype.selectCliente = function (cliente) {
        this.clientePedido = cliente;
        $("#select_cliente").modal('hide');
    };
    PedidosComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pedidos',
            template: __webpack_require__(710),
            styles: [__webpack_require__(697)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_get_service__["a" /* GetService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_get_service__["a" /* GetService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__guards_cadastro_guard__["a" /* CadastroGuard */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__guards_cadastro_guard__["a" /* CadastroGuard */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */]) === 'function' && _f) || Object])
    ], PedidosComponent);
    return PedidosComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=C:/tmp/intermax/angular-src/src/pedidos.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_get_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_post_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProdutosComponent = (function () {
    function ProdutosComponent(getService, postService, router, flashMessage) {
        this.getService = getService;
        this.postService = postService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.tipoProduto = "";
        this.medicaoProduto = "";
        this.linhas = [];
        this.editDesconto = [];
        this.desc_nome = "nomeProduto";
        this.desc_tipo = "tipoProduto";
        this.desc_linha = "linhaProduto";
        this.select_field = null;
        this.select_desc = null;
        this.cons_nomeProduto = "";
        this.cons_tipoProduto = "";
        this.cons_linhaProduto = "";
        this.disable_select = false;
        this.quant_desc1 = "";
        this.medida_desc1 = "";
        this.quant_desc2 = "";
        this.medida_desc2 = "";
        this.quant_desc3 = "";
        this.medida_desc3 = "";
        this.quant_desc4 = "";
        this.medida_desc4 = "";
    }
    ProdutosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getService.getProdutos().then(function (produto) {
            _this.produtos = produto;
            for (var i = 0; i < produto.length; i++) {
                if (_this.linhas.indexOf(produto[i].linhaProduto) == -1) {
                    _this.linhas.push(produto[i].linhaProduto);
                }
            }
            ;
        });
    };
    ProdutosComponent.prototype.adicionaProduto = function () {
        var _this = this;
        var Produto = {
            tipoProduto: this.nomeProduto,
            nomeProduto: this.nomeProduto,
            descricaoProduto: this.descricaoProduto,
            codigoProduto: this.codigoProduto,
            linhaProduto: this.linhaProduto,
            medicaoProduto: this.medicaoProduto,
            capaProduto: this.capaProduto,
            compProduto: this.compProduto,
            largProduto: this.largProduto,
            espProduto: this.espProduto,
            unidCx: this.unidCx,
            cxPallet: this.cxPallet,
            metroCx: this.metroCx,
            metroPallet: this.metroPallet,
            metroContainer: this.metroContainer,
            preco_rev_cd1: this.preco_rev_cd1,
            desc1_rev_cd1: this.desc1_rev_cd1,
            desc2_rev_cd1: this.desc2_rev_cd1,
            desc3_rev_cd1: this.desc3_rev_cd1,
            desc4_rev_cd1: this.desc4_rev_cd1,
            preco_rev_cd3: this.preco_rev_cd3,
            desc1_rev_cd3: this.desc1_rev_cd3,
            desc2_rev_cd3: this.desc2_rev_cd3,
            desc3_rev_cd3: this.desc3_rev_cd3,
            desc4_rev_cd3: this.desc4_rev_cd3,
            preco_eng_cd1: this.preco_eng_cd1,
            desc1_eng_cd1: this.desc1_eng_cd1,
            desc2_eng_cd1: this.desc2_eng_cd1,
            desc3_eng_cd1: this.desc3_eng_cd1,
            desc4_eng_cd1: this.desc4_eng_cd1,
            preco_eng_cd3: this.preco_eng_cd3,
            desc1_eng_cd3: this.desc1_eng_cd3,
            desc2_eng_cd3: this.desc2_eng_cd3,
            desc3_eng_cd3: this.desc3_eng_cd3,
            desc4_eng_cd3: this.desc4_eng_cd3,
            preco_hcka_cd1: this.preco_hcka_cd1,
            desc1_hcka_cd1: this.desc1_hcka_cd1,
            desc2_hcka_cd1: this.desc2_hcka_cd1,
            desc3_hcka_cd1: this.desc3_hcka_cd1,
            desc4_hcka_cd1: this.desc4_hcka_cd1,
            preco_hcka_cd3: this.preco_hcka_cd3,
            desc1_hcka_cd3: this.desc1_hcka_cd3,
            desc2_hcka_cd3: this.desc2_hcka_cd3,
            desc3_hcka_cd3: this.desc3_hcka_cd3,
            desc4_hcka_cd3: this.desc4_hcka_cd3,
            preco_dist_cd1: this.preco_dist_cd1,
            desc1_dist_cd1: this.desc1_dist_cd1,
            desc2_dist_cd1: this.desc2_dist_cd1,
            desc3_dist_cd1: this.desc3_dist_cd1,
            desc4_dist_cd1: this.desc4_dist_cd1,
            preco_dist_cd3: this.preco_dist_cd3,
            desc1_dist_cd3: this.desc1_dist_cd3,
            desc2_dist_cd3: this.desc2_dist_cd3,
            desc3_dist_cd3: this.desc3_dist_cd3,
            desc4_dist_cd3: this.desc4_dist_cd3,
        };
        this.postService.adicionaProduto(Produto).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Produto Cadastrado com Sucesso', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/produtos']);
            }
            else {
                _this.flashMessage.show('Ocorreu um erro inesperado', { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/produtos']);
            }
        });
    };
    ProdutosComponent.prototype.funcao_desc = function (field, value) {
        this.select_field = field;
        this.select_desc = value;
        this.disable_select = true;
        if (field = "nomeProduto") {
            for (var i = 0; i < this.produtos.length; i++) {
                if (this.produtos[i]._id == value) {
                    this.quant_desc1 = this.produtos[i].quant_desc1;
                    this.medida_desc1 = this.produtos[i].medida_desc1;
                    this.quant_desc2 = this.produtos[i].quant_desc2;
                    this.medida_desc2 = this.produtos[i].medida_desc2;
                    this.quant_desc3 = this.produtos[i].quant_desc3;
                    this.medida_desc3 = this.produtos[i].medida_desc3;
                    this.quant_desc4 = this.produtos[i].quant_desc4;
                    this.medida_desc4 = this.produtos[i].medida_desc4;
                }
            }
            ;
        }
    };
    ProdutosComponent.prototype.limpaBuscaDesconto = function () {
        this.disable_select = false;
        this.select_field = null;
        this.select_desc = null;
        this.cons_nomeProduto = "";
        this.cons_tipoProduto = "";
        this.cons_linhaProduto = "";
        this.quant_desc1 = "";
        this.medida_desc1 = "";
        this.quant_desc2 = "";
        this.medida_desc2 = "";
        this.quant_desc3 = "";
        this.medida_desc3 = "";
        this.quant_desc4 = "";
        this.medida_desc4 = "";
    };
    ProdutosComponent.prototype.cadastraDesconto = function () {
        var _this = this;
        var Desconto = {
            select_field: this.select_field,
            select_desc: this.select_desc,
            quant_desc1: this.quant_desc1,
            medida_desc1: this.medida_desc1,
            quant_desc2: this.quant_desc2,
            medida_desc2: this.medida_desc2,
            quant_desc3: this.quant_desc3,
            medida_desc3: this.medida_desc3,
            quant_desc4: this.quant_desc4,
            medida_desc4: this.medida_desc4,
        };
        this.postService.modificaDesconto(Desconto).subscribe(function (data) {
            if (data.success) {
                _this.limpaBuscaDesconto();
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/produtos']);
            }
            else {
                _this.flashMessage.show('Ocorreu um erro inesperado', { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    ProdutosComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-produtos',
            template: __webpack_require__(711),
            styles: [__webpack_require__(698)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_get_service__["a" /* GetService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_get_service__["a" /* GetService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _d) || Object])
    ], ProdutosComponent);
    return ProdutosComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/tmp/intermax/angular-src/src/produtos.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_get_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_post_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegioesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegioesComponent = (function () {
    function RegioesComponent(getService, postService, router, flashMessage) {
        this.getService = getService;
        this.postService = postService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.estado = "";
        this.locArr = [];
        this.info = [];
        this.estados = [{ value: "AC" }, { value: "AL" }, { value: "AM" }, { value: "AP" }, { value: "BA" }, { value: "CE" }, { value: "DF" }, { value: "ES" }, { value: "GO" }, { value: "MA" }, { value: "MT" }, { value: "MS" }, { value: "MG" }, { value: "PA" }, { value: "PB" }, { value: "PR" }, { value: "PE" }, { value: "PI" }, { value: "RJ" }, { value: "RN" }, { value: "RO" }, { value: "RS" }, { value: "RR" }, { value: "SC" }, { value: "SE" }, { value: "SP" }, { value: "TO" },];
    }
    RegioesComponent.prototype.ngOnInit = function () {
    };
    RegioesComponent.prototype.limpa = function () {
        this.nome = "";
        this.estado = "";
        this.cidade = "";
        this.locArr.length = null;
    };
    RegioesComponent.prototype.adicionaLocal = function () {
        if (this.estado == null || this.cidade == null) {
        }
        else {
            var loc_tmp = {
                estado: this.estado,
                cidade: this.cidade,
            };
            this.locArr.push(loc_tmp);
            this.cidade = null;
            document.getElementById("cidade").focus();
        }
    };
    RegioesComponent.prototype.removeLocal = function (item) {
        var index = this.locArr.indexOf(item);
        this.locArr.splice(index, 1);
    };
    RegioesComponent.prototype.adicionaRegiao = function () {
        var _this = this;
        this.adicionaLocal();
        var Regiao = {
            nome: this.nome,
            locArr: this.locArr,
        };
        this.postService.adicionaRegiao(Regiao).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/regiao']);
                $("#adicionar").modal('hide');
                _this.limpa();
            }
            else {
                _this.flashMessage.show('Ocorreu um erro inesperado', { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    RegioesComponent.prototype.consultaRegiao = function () {
        var _this = this;
        if (this.consulta_regiao.length >= 3) {
            var consulta_regiao = {
                consulta_regiao: this.consulta_regiao,
            };
            this.postService.consultaRegiao(consulta_regiao).subscribe(function (regiao) {
                _this.regioes = regiao;
            });
        }
    };
    RegioesComponent.prototype.infoRegiao = function (regiao) {
        this.info = regiao;
    };
    RegioesComponent.prototype.editRegiao = function (regiao) {
        this.id_regiao = regiao._id;
        this.nome = regiao.nome;
        this.locArr = regiao.locais;
    };
    RegioesComponent.prototype.modificaRegiao = function () {
        var _this = this;
        this.adicionaLocal();
        var Regiao = {
            _id: this.id_regiao,
            nome: this.nome,
            locArr: this.locArr,
        };
        this.postService.modificaRegiao(Regiao).subscribe(function (data) {
            if (data.success) {
                _this.limpa();
                $("#edit").modal('hide');
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/regioes']);
            }
            else {
                _this.flashMessage.show('Ocorreu um erro inesperado', { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    RegioesComponent.prototype.removeRegiao = function (regiao) {
        var _this = this;
        var Regiao = {
            _id: regiao._id
        };
        this.postService.removeRegiao(Regiao).subscribe(function (data) {
            if (data.success) {
                $("#remove").modal('hide');
                _this.router.navigate(['/regioes']);
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                _this.flashMessage.show('Ocorreu um erro inesperado', { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    RegioesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-regioes',
            template: __webpack_require__(712),
            styles: [__webpack_require__(699)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_get_service__["a" /* GetService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_get_service__["a" /* GetService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _d) || Object])
    ], RegioesComponent);
    return RegioesComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/tmp/intermax/angular-src/src/regioes.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_get_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router, getService) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.getService = getService;
        this.idEmpresa = "";
        this.acesso = "";
        this.representantes = [];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getService.getRepresentantes().then(function (representante) {
            _this.representantes = representante;
        });
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            idEmpresa: this.idEmpresa,
            telefone: this.telefone,
            acesso: this.acesso,
            username: this.username,
            password: this.password,
        };
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Preencha todos os campos', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Insira um Email válido', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.msg == 'Username já existe') {
                _this.flashMessage.show('Utilize outro Username', { cssClass: 'alert-danger', timeout: 5000 });
            }
            else {
                if (data.success) {
                    _this.flashMessage.show('Usuário Cadastrado com Sucesso', { cssClass: 'alert-success', timeout: 5000 });
                    _this.router.navigate(['/login']);
                }
                else {
                    _this.flashMessage.show('Ocorreu um erro inesperado', { cssClass: 'alert-danger', timeout: 5000 });
                    _this.router.navigate(['/register']);
                }
            }
        });
    };
    RegisterComponent.prototype.admin = function () {
        if (this.acesso == "admin") {
            this.if_admin = true;
            this.idEmpresa = "intermax";
        }
        else {
            this.if_admin = false;
            this.idEmpresa = "";
        }
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(713),
            styles: [__webpack_require__(700)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_get_service__["a" /* GetService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_get_service__["a" /* GetService */]) === 'function' && _e) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/tmp/intermax/angular-src/src/register.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_get_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_post_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepresentantesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RepresentantesComponent = (function () {
    function RepresentantesComponent(getService, postService, router, flashMessage) {
        this.getService = getService;
        this.postService = postService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.estado = "";
        this.regiao = "";
        this.regiaoEdit = "";
        this.categoria = "";
        this.categoriaEdit = "";
        this.regArr = [];
        this.telArr = [];
        this.catArr = [];
        this.consulta_categoria = "";
        this.consulta_representante = "";
        this.consulta_regiao = "";
        this.consulta_cidade = "";
        this.consulta_estado = "";
        this.info = [];
        this.regioes = [];
        this.estados = [{ value: "AC" }, { value: "AL" }, { value: "AM" }, { value: "AP" }, { value: "BA" }, { value: "CE" }, { value: "DF" }, { value: "ES" }, { value: "GO" }, { value: "MA" }, { value: "MT" }, { value: "MS" }, { value: "MG" }, { value: "PA" }, { value: "PB" }, { value: "PR" }, { value: "PE" }, { value: "PI" }, { value: "RJ" }, { value: "RN" }, { value: "RO" }, { value: "RS" }, { value: "RR" }, { value: "SC" }, { value: "SE" }, { value: "SP" }, { value: "TO" },];
    }
    RepresentantesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getService.getRegioes().then(function (regiao) {
            _this.regioes = regiao;
        });
    };
    RepresentantesComponent.prototype.limpa = function () {
        this.cnpj = null;
        this.razao = null;
        this.contato = null;
        this.insc_estadual = null;
        this.endereco = null;
        this.bairro = null;
        this.cidade = null;
        this.estado = "";
        this.cep = null;
        this.telefone = null;
        this.contato_tel = null;
        this.operadora = null;
        this.regiao = "";
        this.regArr.length = null;
        this.categoria = "";
        this.categoriaEdit = "";
        this.telArr.length = null;
        this.catArr.length = null;
        var op = document.getElementById("categoria").getElementsByTagName("option");
        for (var i = 0; i < op.length; i++) {
            op[i].disabled = null;
        }
    };
    RepresentantesComponent.prototype.limpaBusca = function () {
        this.representantes = null;
        this.consulta_representante = "";
        this.consulta_id = "";
        this.consulta_categoria = "";
        this.consulta_representante = "";
        this.consulta_regiao = "";
        this.consulta_cidade = "";
        this.consulta_estado = "";
    };
    RepresentantesComponent.prototype.consultaRepresentante = function () {
        var _this = this;
        if (this.consulta_representante.length >= 3) {
            var consulta_representante = {
                consulta_representante: this.consulta_representante,
            };
            this.postService.consultaRepresentante(consulta_representante).subscribe(function (representante) {
                _this.representantes = representante;
            });
        }
    };
    RepresentantesComponent.prototype.consultaRepresentanteID = function () {
        var _this = this;
        var consulta_id = {
            consulta_id: this.consulta_id,
        };
        this.postService.consultaRepresentantesID(consulta_id).subscribe(function (representante) {
            _this.representantes = representante;
        });
    };
    RepresentantesComponent.prototype.consultaRepresentanteMulti = function () {
        var _this = this;
        if (this.consulta_categoria == "" && this.consulta_regiao == "" && this.consulta_cidade == "" && this.consulta_estado == "") {
            var consulta_tmp = {
                all: 1
            };
            this.postService.consultaRepresentantesMulti(consulta_tmp).subscribe(function (representante) {
                _this.representantes = representante;
            });
        }
        else {
            var consulta_tmp = {};
            if (this.consulta_regiao !== "") {
                consulta_tmp["regiao"] = this.consulta_regiao;
            }
            if (this.consulta_cidade !== "") {
                consulta_tmp["cidade"] = this.consulta_cidade;
            }
            if (this.consulta_estado !== "") {
                consulta_tmp["estado"] = this.consulta_estado;
            }
            if (this.consulta_categoria !== "") {
                consulta_tmp["categoria"] = this.consulta_categoria;
            }
            this.postService.consultaRepresentantesMulti(consulta_tmp).subscribe(function (representante) {
                _this.representantes = representante;
            });
        }
    };
    RepresentantesComponent.prototype.adicionaTelefone = function () {
        if (this.telefone == null || this.contato_tel == null || this.operadora == null) {
        }
        else {
            var tel_tmp = {
                telefone: this.telefone,
                contato_tel: this.contato_tel,
                operadora: this.operadora,
            };
            this.telArr.push(tel_tmp);
            this.telefone = null;
            this.contato_tel = null;
            this.operadora = null;
        }
    };
    RepresentantesComponent.prototype.removeTelefone = function (item) {
        var index = this.telArr.indexOf(item);
        this.telArr.splice(index, 1);
    };
    RepresentantesComponent.prototype.adicionaRegiao = function () {
        if (this.regiao == null || this.regiao == "") {
        }
        else {
            var reg_tmp = {
                _id: this.regioes[this.regiao]._id,
                nome: this.regioes[this.regiao].nome,
            };
            this.regArr.push(reg_tmp);
            var op = document.getElementById("regiao").getElementsByTagName("option");
            for (var i = 0; i < op.length; i++) {
                if (op[i].value == this.regiao) {
                    op[i].disabled = true;
                }
            }
            this.regiao = "";
        }
    };
    RepresentantesComponent.prototype.removeRegiao = function (item) {
        var index = this.regArr.indexOf(item);
        this.regArr.splice(index, 1);
        var op = document.getElementById("regiao").getElementsByTagName("option");
        for (var i = 0; i < op.length; i++) {
            if (op[i].innerHTML == item.nome) {
                op[i].disabled = false;
            }
        }
    };
    RepresentantesComponent.prototype.adicionaRegiaoEdit = function () {
        if (this.regiaoEdit == null || this.regiaoEdit == "") {
        }
        else {
            var reg_tmp = {
                _id: this.regioes[this.regiaoEdit]._id,
                nome: this.regioes[this.regiaoEdit].nome,
            };
            this.regArr.push(reg_tmp);
            var op = document.getElementById("regiaoEdit").getElementsByTagName("option");
            for (var i = 0; i < op.length; i++) {
                if (op[i].value == this.regiaoEdit) {
                    op[i].disabled = true;
                }
            }
            this.regiaoEdit = "";
        }
    };
    RepresentantesComponent.prototype.removeRegiaoEdit = function (item) {
        var index = this.regArr.indexOf(item);
        this.regArr.splice(index, 1);
        var op = document.getElementById("regiaoEdit").getElementsByTagName("option");
        for (var i = 0; i < op.length; i++) {
            if (op[i].innerHTML == item.nome) {
                op[i].disabled = false;
            }
        }
    };
    RepresentantesComponent.prototype.adicionaCategoria = function () {
        if (this.categoria == null || this.categoria == "") {
        }
        else {
            var cat_tmp = {
                categoria: this.categoria
            };
            this.catArr.push(cat_tmp);
            var op = document.getElementById("categoria").getElementsByTagName("option");
            for (var i = 0; i < op.length; i++) {
                if (op[i].value == this.categoria) {
                    op[i].disabled = true;
                }
            }
            this.categoria = "";
        }
    };
    RepresentantesComponent.prototype.removeCategoria = function (item) {
        var index = this.catArr.indexOf(item);
        this.catArr.splice(index, 1);
        var op = document.getElementById("categoria").getElementsByTagName("option");
        for (var i = 0; i < op.length; i++) {
            if (op[i].value == item.categoria) {
                op[i].disabled = false;
            }
        }
    };
    RepresentantesComponent.prototype.adicionaCategoriaEdit = function () {
        if (this.categoriaEdit == null || this.categoriaEdit == "") {
        }
        else {
            var cat_tmp = {
                categoria: this.categoriaEdit
            };
            this.catArr.push(cat_tmp);
            var op = document.getElementById("categoriaEdit").getElementsByTagName("option");
            for (var i = 0; i < op.length; i++) {
                if (op[i].value == this.categoriaEdit) {
                    op[i].disabled = true;
                }
            }
            this.categoriaEdit = "";
        }
    };
    RepresentantesComponent.prototype.removeCategoriaEdit = function (item) {
        var index = this.catArr.indexOf(item);
        this.catArr.splice(index, 1);
        var op = document.getElementById("categoriaEdit").getElementsByTagName("option");
        for (var i = 0; i < op.length; i++) {
            if (op[i].value == item.categoria) {
                op[i].disabled = false;
            }
        }
    };
    RepresentantesComponent.prototype.adicionaRepresentante = function () {
        var _this = this;
        this.adicionaTelefone();
        this.adicionaCategoria();
        var Representante = {
            cnpj: this.cnpj,
            razao: this.razao,
            contato: this.contato,
            insc_estadual: this.insc_estadual,
            endereco: this.endereco,
            bairro: this.bairro,
            cidade: this.cidade,
            estado: this.estado,
            cep: this.cep,
            regArr: this.regArr,
            telArr: this.telArr,
            catArr: this.catArr,
        };
        this.postService.adicionaRepresentante(Representante).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/representantes']);
                _this.limpa();
            }
            else {
                _this.flashMessage.show('Ocorreu um erro inesperado', { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/representantes']);
            }
        });
    };
    RepresentantesComponent.prototype.infoRepresentante = function (representante) {
        this.info = representante;
    };
    RepresentantesComponent.prototype.editRepresentante = function (representante) {
        this._id = representante._id;
        this.cnpj = representante.cnpj;
        this.razao = representante.razao;
        this.contato = representante.contato;
        this.insc_estadual = representante.insc_estadual;
        this.endereco = representante.endereco;
        this.bairro = representante.bairro;
        this.cidade = representante.cidade;
        this.estado = representante.estado;
        this.cep = representante.cep;
        this.telefone = null;
        this.contato_tel = null;
        this.operadora = null;
        this.regiaoEdit = "";
        this.categoriaEdit = "";
        this.telArr = representante.telefones;
        this.regArr = representante.regioes;
        var reg = document.getElementById("regiaoEdit").getElementsByTagName("option");
        for (var x = 0; x < reg.length; x++) {
            for (var y = 0; y < this.regArr.length; y++) {
                if (reg[x].innerHTML == this.regArr[y].nome) {
                    reg[x].disabled = true;
                }
            }
        }
        this.catArr = representante.categorias;
        var op = document.getElementById("categoriaEdit").getElementsByTagName("option");
        for (var i = 0; i < op.length; i++) {
            for (var j = 0; j < this.catArr.length; j++) {
                if (op[i].value == this.catArr[j].categoria) {
                    op[i].disabled = true;
                }
            }
        }
    };
    RepresentantesComponent.prototype.modificaRepresentante = function () {
        var _this = this;
        this.adicionaTelefone();
        this.adicionaCategoria();
        var Representante = {
            _id: this._id,
            cnpj: this.cnpj,
            razao: this.razao,
            contato: this.contato,
            insc_estadual: this.insc_estadual,
            endereco: this.endereco,
            bairro: this.bairro,
            cidade: this.cidade,
            estado: this.estado,
            cep: this.cep,
            telArr: this.telArr,
            catArr: this.catArr,
        };
        this.postService.modificaRepresentante(Representante).subscribe(function (data) {
            if (data.success) {
                _this.limpa();
                $("#edit").modal('hide');
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/representantes']);
            }
            else {
                _this.flashMessage.show('Ocorreu um erro inesperado', { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    RepresentantesComponent.prototype.removeRepresentante = function (representante) {
        var _this = this;
        var Representante = {
            _id: representante._id
        };
        this.postService.removeRepresentante(Representante).subscribe(function (data) {
            if (data.success) {
                $("#remove").modal('hide');
                _this.router.navigate(['/representantes']);
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                _this.flashMessage.show('Ocorreu um erro inesperado', { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    RepresentantesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-representantes',
            template: __webpack_require__(714),
            styles: [__webpack_require__(701)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_get_service__["a" /* GetService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_get_service__["a" /* GetService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _d) || Object])
    ], RepresentantesComponent);
    return RepresentantesComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/tmp/intermax/angular-src/src/representantes.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsuariosComponent = (function () {
    function UsuariosComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    UsuariosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (usuario) {
            _this.user = usuario.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    UsuariosComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-usuarios',
            template: __webpack_require__(715),
            styles: [__webpack_require__(702)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], UsuariosComponent);
    return UsuariosComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/tmp/intermax/angular-src/src/usuarios.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/home']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/tmp/intermax/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/tmp/intermax/angular-src/src/environment.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetService = (function () {
    function GetService(http) {
        this.http = http;
        this.produto = null;
        this.cliente = null;
        this.representante = null;
        this.regiao = null;
    }
    GetService.prototype.getProdutos = function () {
        var _this = this;
        if (this.produto) {
            return Promise.resolve(this.produto);
        }
        return new Promise(function (resolve) {
            _this.http.get('http://localhost:3000/produtos/consulta')
                .map(function (res) { return res.json(); })
                .subscribe(function (produto) {
                _this.produto = produto;
                resolve(_this.produto);
            });
        });
    };
    GetService.prototype.getClientes = function () {
    };
    GetService.prototype.getRepresentantes = function () {
        var _this = this;
        if (this.representante) {
            return Promise.resolve(this.representante);
        }
        return new Promise(function (resolve) {
            _this.http.get('http://localhost:3000/representantes/consulta')
                .map(function (res) { return res.json(); })
                .subscribe(function (representante) {
                _this.representante = representante;
                resolve(_this.representante);
            });
        });
    };
    GetService.prototype.getRegioes = function () {
        var _this = this;
        if (this.regiao) {
            return Promise.resolve(this.regiao);
        }
        return new Promise(function (resolve) {
            _this.http.get('http://localhost:3000/regioes/consulta')
                .map(function (res) { return res.json(); })
                .subscribe(function (regiao) {
                _this.regiao = regiao;
                resolve(_this.regiao);
            });
        });
    };
    GetService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], GetService);
    return GetService;
    var _a;
}());
//# sourceMappingURL=C:/tmp/intermax/angular-src/src/get.service.js.map

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = ".input-group-addon\r\n{\r\n    background-color: rgb(50, 118, 177);\r\n    border-color: rgb(40, 94, 142);\r\n    color: rgb(255, 255, 255);\r\n    width: 90px;\r\n    text-align: left;\r\n}\r\n\r\n.form-control{\r\n    color: rgb(40, 94, 142);\r\n    border: 1px solid rgb(40, 94, 142);\r\n}\r\n\r\n::-webkit-input-placeholder{\r\n    color: rgb(40, 94, 142);\r\n}\r\n\r\n::-moz-placeholder{\r\n    color: rgb(40, 94, 142);\r\n}\r\n\r\n:-ms-input-placeholder{\r\n    color: rgb(40, 94, 142);\r\n}\r\n\r\n::placeholder{\r\n    color: rgb(40, 94, 142);\r\n}\r\n\r\n.input-group{\r\n    width: 100%; \r\n}\r\n\r\n.page-header{\r\n    margin-top: 4px;\r\n    margin-bottom: 17px;\r\n    border-bottom: 1px solid lightgray;\r\n}\r\n\r\n.row{\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\nhr {\r\n    margin-top: 0px;\r\n    margin-bottom: 10px;\r\n    border: 0;\r\n    border-top: 1px solid lightgray;\r\n}\r\n\r\ntable{\r\n    margin-top: 0px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.nav{\r\n    margin-bottom: 30px;\r\n}"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = ".home {\r\n  margin-top: 150px;\r\n}\r\n"

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = ".nav-pills li.active a {\r\n    background-color: #4e5d6c;\r\n}\r\n"

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = ".input-group-addon\r\n{\r\n    background-color: rgb(50, 118, 177);\r\n    border-color: rgb(40, 94, 142);\r\n    color: rgb(255, 255, 255);\r\n    text-align: left;\r\n}\r\n\r\n.form-control{\r\n    color: rgb(40, 94, 142);\r\n    border: 1px solid rgb(40, 94, 142);\r\n}\r\n\r\n.btn {\r\n  border-radius: 5px;\r\n}\r\n\r\n.row{\r\nmargin-top: 50px;\r\n}"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = ".input-group-addon\r\n{\r\n    background-color: rgb(50, 118, 177);\r\n    border-color: rgb(40, 94, 142);\r\n    color: rgb(255, 255, 255);\r\n    width: 90px;\r\n    text-align: left;\r\n}\r\n\r\n.btn {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.form-control{\r\n    color: rgb(40, 94, 142);\r\n    border: 1px solid rgb(40, 94, 142);\r\n}\r\n\r\n::-webkit-input-placeholder{\r\n    color: rgb(40, 94, 142);\r\n}\r\n\r\n::-moz-placeholder{\r\n    color: rgb(40, 94, 142);\r\n}\r\n\r\n:-ms-input-placeholder{\r\n    color: rgb(40, 94, 142);\r\n}\r\n\r\n::placeholder{\r\n    color: rgb(40, 94, 142);\r\n}\r\n\r\n.input-group{\r\n    width: 100%; \r\n}\r\n\r\n.page-header{\r\n    margin-top: 4px;\r\n    margin-bottom: 15px;\r\n    border-bottom: 1px solid lightgray;\r\n}\r\n\r\n.row{\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\nhr {\r\n    margin-top: 0px;\r\n    margin-bottom: 10px;\r\n    border: 0;\r\n    border-top: 1px solid lightgray;\r\n}\r\n\r\ntable{\r\n    margin-top: 0px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.nav{\r\n    margin-bottom: 30px;\r\n}\r\n"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = ".input-group-addon\r\n{\r\n    background-color: rgb(50, 118, 177);\r\n    border-color: rgb(40, 94, 142);\r\n    color: rgb(255, 255, 255);\r\n    width: 90px;\r\n    text-align: left;\r\n}\r\n\r\n.btn {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.form-control{\r\n    color: rgb(40, 94, 142);\r\n    border: 1px solid rgb(40, 94, 142);\r\n}\r\n\r\n::-webkit-input-placeholder{\r\n    color: rgb(40, 94, 142);\r\n}\r\n\r\n::-moz-placeholder{\r\n    color: rgb(40, 94, 142);\r\n}\r\n\r\n:-ms-input-placeholder{\r\n    color: rgb(40, 94, 142);\r\n}\r\n\r\n::placeholder{\r\n    color: rgb(40, 94, 142);\r\n}\r\n\r\n.input-group{\r\n    width: 100%; \r\n}\r\n\r\n.page-header{\r\n    margin-top: 4px;\r\n    margin-bottom: 15px;\r\n    border-bottom: 1px solid lightgray;\r\n}\r\n\r\n.row{\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\nhr {\r\n    margin-top: 0px;\r\n    margin-bottom: 10px;\r\n    border: 0;\r\n    border-top: 1px solid lightgray;\r\n}\r\n\r\ntable{\r\n    margin-top: 0px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.nav{\r\n    margin-bottom: 30px;\r\n}\r\n"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = ".input-group-addon\r\n{\r\n    background-color: rgb(50, 118, 177);\r\n    border-color: rgb(40, 94, 142);\r\n    color: rgb(255, 255, 255);\r\n    width: 90px;\r\n    text-align: left;\r\n}\r\n\r\n.adicionar {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.div{\r\n    padding: 0;\r\n}\r\n\r\n.form-control{\r\n    color: rgb(40, 94, 142);\r\n    border: 1px solid rgb(40, 94, 142);\r\n}\r\n\r\n::-webkit-input-placeholder{\r\n    color: rgb(40, 94, 142);\r\n}\r\n\r\n::-moz-placeholder{\r\n    color: rgb(40, 94, 142);\r\n}\r\n\r\n:-ms-input-placeholder{\r\n    color: rgb(40, 94, 142);\r\n}\r\n\r\n::placeholder{\r\n    color: rgb(40, 94, 142);\r\n}\r\n\r\n.input-group{\r\n    width: 100%; \r\n}\r\n\r\n.page-header{\r\n    margin-top: 4px;\r\n    margin-bottom: 15px;\r\n    border-bottom: 1px solid lightgray;\r\n}\r\n\r\n.row{\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\nhr {\r\n    margin-top: 0px;\r\n    margin-bottom: 15px;\r\n    border: 0;\r\n    border-top: 1px solid lightgray;\r\n}\r\n\r\ntable{\r\n    margin-top: 0px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.nav{\r\n    margin-bottom: 30px;\r\n}\r\n"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = ".input-group-addon\r\n{\r\n    background-color: rgb(50, 118, 177);\r\n    border-color: rgb(40, 94, 142);\r\n    color: rgb(255, 255, 255);\r\n    width: 90px;\r\n    text-align: left;\r\n}\r\n\r\n.form-control{\r\n    color: rgb(40, 94, 142);\r\n    border: 1px solid rgb(40, 94, 142);\r\n}\r\n\r\n::-webkit-input-placeholder{\r\n    color: rgb(40, 94, 142);\r\n}\r\n\r\n::-moz-placeholder{\r\n    color: rgb(40, 94, 142);\r\n}\r\n\r\n:-ms-input-placeholder{\r\n    color: rgb(40, 94, 142);\r\n}\r\n\r\n::placeholder{\r\n    color: rgb(40, 94, 142);\r\n}\r\n\r\n.input-group{\r\n    width: 100%; \r\n}\r\n\r\n.page-header{\r\n    margin-top: 4px;\r\n    margin-bottom: 17px;\r\n    border-bottom: 1px solid lightgray;\r\n}\r\n\r\n.row{\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\nhr {\r\n    margin-top: 0px;\r\n    margin-bottom: 10px;\r\n    border: 0;\r\n    border-top: 1px solid lightgray;\r\n}\r\n\r\ntable{\r\n    margin-top: 0px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.nav{\r\n    margin-bottom: 30px;\r\n}"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = ".input-group-addon\r\n{\r\n    background-color: rgb(50, 118, 177);\r\n    border-color: rgb(40, 94, 142);\r\n    color: rgb(255, 255, 255);\r\n    width: 90px;\r\n    text-align: left;\r\n}\r\n\r\n.form-control{\r\n    color: rgb(40, 94, 142);\r\n    border: 1px solid rgb(40, 94, 142);\r\n}\r\n\r\n::-webkit-input-placeholder{\r\n    color: rgb(40, 94, 142);\r\n}\r\n\r\n::-moz-placeholder{\r\n    color: rgb(40, 94, 142);\r\n}\r\n\r\n:-ms-input-placeholder{\r\n    color: rgb(40, 94, 142);\r\n}\r\n\r\n::placeholder{\r\n    color: rgb(40, 94, 142);\r\n}\r\n\r\n.input-group{\r\n    width: 100%; \r\n}\r\n\r\n.page-header{\r\n    margin-top: 4px;\r\n    margin-bottom: 15px;\r\n    border-bottom: 1px solid lightgray;\r\n}\r\n\r\n.row{\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\nhr {\r\n    margin-top: 0px;\r\n    margin-bottom: 10px;\r\n    border: 0;\r\n    border-top: 1px solid lightgray;\r\n}\r\n\r\ntable{\r\n    margin-top: 0px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.nav{\r\n    margin-bottom: 30px;\r\n}"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "<app-navbar *ngIf=\"authService.mostraNavbar()\" ></app-navbar>\n<div class=\"container\">\n    <flash-messages></flash-messages>\n    <router-outlet></router-outlet>\n</div>\n<div><br></div>\n"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = "\n\n<!--HEADER-->\n\n<h3 class=\"page-header col-md-2\">Clientes</h3>\n\n\n        <!--ABAS-->\n\n        <ul class=\"nav nav-tabs col-md-10\">\n          <li id=\"abaCadastro\" class=\"\"><a id=\"linkCadastro\" href=\"#cadastrar_Cliente\" data-toggle=\"tab\" aria-expanded=\"false\" (click)=\"limpa()\" >Cadastrar</a></li>\n          <li id=\"abaConsulta\" class=\"\"><a href=\"#consultar_Cliente\" data-toggle=\"tab\" aria-expanded=\"true\" (click)=\"limpa()\" >Consultar</a></li>\n        </ul>\n\n\n\n<!--DIV PRINCIPAL-->\n\n<div id=\"myTabContent\" class=\"tab-content\">\n\n\n      <!--CADASTRO DE CLIENTE-->\n\n      <div class=\"tab-pane fade in\" id=\"cadastrar_Cliente\">\n        <div class=\"col-md-12\" style=\"padding: 0\">\n          <div class=\"form-group col-md-4\">\n            <div class=\"input-group\" >\n              <label for=\"\">CNPJ</label>\n              <input type=\"text\" class=\"cnpj form-control input-sm\" [(ngModel)]=\"cnpj\" name=\"cnpj\" placeholder=\"CNPJ\" />\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group col-md-8\">\n          <div class=\"input-group\">\n            <label for=\"\">Razão Social</label>\n            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"razao\" name=\"razao\" placeholder=\"Razão Social\" />\n          </div>\n        </div>\n        <div class=\"form-group col-md-4\">\n          <div class=\"input-group\">\n            <label for=\"\">Categoria</label>\n            <select class=\"form-control input-sm\" [(ngModel)]=\"categoria\" name=\"categoria\" id=\"categoria\">\n              <option value=\"\" disabled=true>Selecione uma ou mais opções:</option>\n              <option value=\"Revenda\">Revenda</option>\n              <option value=\"Varejo\">Varejo</option>\n              <option value=\"Engenharia\">Engenharia</option>\n              <option value=\"Home Center\">Home Center</option>\n              <option value=\"Key Account\">Key Account</option>\n              <option value=\"Distribuidor\">Distribuidor</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-group col-md-4\">\n          <div class=\"input-group\">\n            <label for=\"\">Contato</label>\n            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"contato\" name=\"contato\" placeholder=\"Nome para Contato\" />\n          </div>\n        </div>\n        <div class=\"form-group col-md-4\">\n          <div class=\"input-group\">\n            <label for=\"\">Insc. Estadual</label>\n            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"insc_estadual\" name=\"insc_estadual\" placeholder=\"Inscrição Estadual\" />\n          </div>\n        </div>\n        <div class=\"form-group col-md-4\">\n          <div class=\"input-group\">\n            <label for=\"\">Região</label>\n            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"regiao\" name=\"regiao\" placeholder=\"Região de Atendimento\" />\n          </div>\n        </div>\n        <div class=\"form-group col-md-8\">\n          <div class=\"input-group\">\n            <label for=\"\">Endereço</label>\n            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"endereco\" name=\"endereco\" placeholder=\"Endereço\" />\n          </div>\n        </div>\n        <div class=\"form-group col-md-4\">\n          <div class=\"input-group\">\n            <label for=\"\">Bairro</label>\n            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"bairro\" name=\"bairro\" placeholder=\"Bairro\" />\n          </div>\n        </div>\n        <div class=\"form-group col-md-5\">\n          <div class=\"input-group\">\n            <label for=\"\">Cidade</label>\n            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"cidade\" name=\"cidade\" placeholder=\"Cidade\" />\n          </div>\n        </div>\n          <div class=\"form-group col-md-3\">\n          <div class=\"input-group\">\n            <label for=\"\">UF</label>\n            <select class=\"form-control input-sm\" [(ngModel)]=\"estado\" name=\"estado\" id=\"estado\" >\n                <option value=\"\" disabled=true>Selecione o Estado</option> \n                <option *ngFor=\"let uf of estados\" [value]=\"uf.value\">{{uf.value}}</option> \n              </select>\n          </div>\n        </div>\n        <div class=\"form-group col-md-3\">\n          <div class=\"input-group\">\n            <label for=\"\">CEP</label>\n            <input type=\"text\" class=\"cep form-control input-sm\" [(ngModel)]=\"cep\" name=\"cep\" placeholder=\"CEP\" />\n          </div>\n        </div>\n      <div class=\"col-md-1\">\n        <label>Novo</label>\n        <button class=\"btn btn-primary btn-sm btn-block\" (click)=\"adicionaEndereco()\"><span class=\"glyphicon glyphicon-plus-sign\"></span></button>\n      </div>\n      <div class=\" col-md-12\" *ngIf=\"endArr.length\" >\n        <table class=\"table table-striped table-hover\" >\n          <thead>\n              <tr>\n                <th class=\"col-md-1\">#</th>\n                <th class=\"col-md-4\">Endereço</th>\n                <th class=\"col-md-2\">Bairro</th>\n                <th class=\"col-md-2\">Cidade</th>\n                <th class=\"col-md-1\">Estado</th>\n                <th class=\"col-md-2\">CEP</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of endArr; let i = index\">\n                <td>{{i + 1}}</td>\n                <td>{{item.endereco}}</td>\n                <td>{{item.bairro}}</td>\n                <td>{{item.cidade}}</td>\n                <td>{{item.estado}}</td>\n                <td class=\"cep\">{{item.cep}}</td>\n                <td><a style=\"cursor:pointer;\" (click)=\"removeEndereco(item)\" ><span class=\"glyphicon glyphicon-minus\" style=\"color:red\"></span></a></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"form-group col-md-4\">\n          <div class=\"input-group\">\n            <label for=\"\">Telefone</label>\n            <input type=\"text\" class=\"phone form-control input-sm\" [(ngModel)]=\"telefone\" name=\"telefone\" placeholder=\"Telefone\" />\n          </div>\n        </div>\n        <div class=\"form-group col-md-4\">\n          <div class=\"input-group\">\n            <label for=\"\">Contato</label>\n            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"contato_tel\" name=\"contato_tel\" placeholder=\"Contato\" />\n          </div>\n        </div>\n        <div class=\"form-group col-md-3\">\n          <div class=\"input-group\">\n            <label for=\"\">Operadora</label>\n            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"operadora\" name=\"operadora\" placeholder=\"Operadora\" />\n          </div>\n        </div>\n        <div class=\"col-md-1\">\n          <label>Novo</label>\n        <button class=\"btn btn-primary btn-sm btn-block\" (click)=\"adicionaTelefone()\"><span class=\"glyphicon glyphicon-plus-sign\"></span></button>\n      </div>\n      <div class=\" col-md-12\" *ngIf=\"telArr.length\" >\n      <table class=\"table table-striped table-hover\" >\n            <thead>\n              <tr>\n                <th class=\"col-md-1\">#</th>\n                <th class=\"col-md-4\">Telefone</th>\n                <th class=\"col-md-4\">Contato</th>\n                <th class=\"col-md-3\">Operadora</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of telArr; let i = index\">\n                <td>{{i + 1}}</td>\n                <td class=\"phone\">{{item.telefone}}</td>\n                <td>{{item.contato_tel}}</td>\n                <td>{{item.operadora}}</td>\n                <td><a style=\"cursor:pointer;\" (click)=\"removeTelefone(item)\" ><span class=\"glyphicon glyphicon-minus\" style=\"color:red\"></span></a></td>\n              </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"form-group col-md-4\">\n          <div class=\"input-group\">\n            <label for=\"\">CPF</label>\n            <input type=\"text\" class=\"cpf form-control input-sm\" [(ngModel)]=\"cpf\" name=\"cpf\" placeholder=\"CPF\" />\n          </div>\n        </div>\n        <div class=\"form-group col-md-7\">\n          <div class=\"input-group\">\n            <label for=\"\">Nome</label>\n            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"nome_cpf\" name=\"nome_cpf\" placeholder=\"Nome\" />\n          </div>\n        </div>\n        <div class=\"col-md-1\">\n          <label>Novo</label>\n        <button class=\"btn btn-primary btn-sm btn-block\" (click)=\"adicionaCPF()\"><span class=\"glyphicon glyphicon-plus-sign\"></span></button>\n        </div>\n        <div class=\" col-md-12\" *ngIf=\"cpfArr.length\" >\n          <table class=\"table table-striped table-hover\" >\n            <thead>\n              <tr>\n                <th class=\"col-md-1\">#</th>\n                <th class=\"col-md-3\">CPF</th>\n                <th class=\"col-md-8\">Nome</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of cpfArr; let i = index\">\n                <td>{{i + 1}}</td>\n                <td class=\"cpf\">{{item.cpf}}</td>\n                <td>{{item.nome_cpf}}</td>\n                <td><a style=\"cursor:pointer;\" class=\"warning\" (click)=\"removeCPF(item)\" ><span class=\"glyphicon glyphicon-minus\" style=\"color:red\"></span></a></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"col-md-12\">\n          <input class=\"btn btn-primary btn-block btn-sm\" (click)=\"adicionaCliente()\" value=\"CONFIRMAR\">\n        </div>\n      </div>\n\n\n\n      <!--CONSULTA DE CLIENTE-->\n\n      <div class=\"tab-pane fade\" id=\"consultar_Cliente\">\n        <div class=\"form-group col-md-2\">\n          <input type=\"text\" class=\"form-control input-sm\" name=\"consulta_id\" [(ngModel)]=\"consulta_id\" placeholder=\"ID do Cliente\" (keyup.enter)=\"consultaClienteID()\" />\n        </div>\n        <div class=\"form-group col-md-10\">\n          <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"consulta_cliente\" name=\"consulta_cliente\" placeholder=\"CNPJ ou Razão Social\" (keyup)=\"consultaCliente()\" />\n        </div>\n        <div class=\"form-group col-md-4\">\n          <select class=\"form-control input-sm\" [(ngModel)]=\"consulta_regiao\" name=\"consulta_regiao\">\n            <option value=\"\" >Região</option>\n            <option *ngFor=\"let regiao of regioes\" [value]=\"regiao.id\">{{regiao.nome}}</option>\n          </select>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <input type=\"text\" class=\"form-control input-sm\" name=\"consulta_cidade\" [(ngModel)]=\"consulta_cidade\" placeholder=\"Cidade\" />\n        </div>\n        <div class=\"form-group col-md-2\">\n          <select class=\"form-control input-sm\" [(ngModel)]=\"consulta_estado\" name=\"consulta_estado\" >\n            <option value=\"\">Estado</option> \n            <option *ngFor=\"let uf of estados\" [value]=\"uf.value\">{{uf.value}}</option> \n          </select>\n        </div>\n        <div class=\"form-group col-md-4\">\n          <select class=\"form-control input-sm\" [(ngModel)]=\"consulta_categoria\" name=\"consulta_categoria\">\n            <option value=\"\">Categoria</option>\n            <option value=\"Revenda\">Revenda</option>\n            <option value=\"Varejo\">Varejo</option>\n            <option value=\"Engenharia\">Engenharia</option>\n            <option value=\"Home Center\">Home Center</option>\n            <option value=\"Key Account\">Key Account</option>\n            <option value=\"Distribuidor\">Distribuidor</option>\n          </select>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <select class=\"form-control input-sm\" [(ngModel)]=\"consulta_representante\" name=\"consulta_representante\">\n            <option value=\"\" >Representante</option>\n            <option *ngFor=\"let representante of representantes\" [value]=\"representante.id\">{{representante.nome}}</option>\n          </select>\n        </div>\n        <div class=\"form-group col-md-2\">\n          <button *ngIf=\"!clientes\" class=\"btn btn-primary btn-sm btn-block\" (click)=\"consultaClienteMulti()\"><span class=\"glyphicon glyphicon-search\"></span></button>\n          <button *ngIf=\"clientes\" class=\"btn btn-danger btn-sm btn-block\" (click)=\"limpaBusca()\">Nova Consulta</button>\n        </div>\n        <table class=\"table table-striped table-hover col-md-12\" *ngIf=\"clientes\">\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>CNPJ</th>\n              <th>Nome</th>\n              <th>Local</th>\n              <th>Representante</th>\n              <th>Ação</th>\n            </tr>\n          </thead>\n          <tbody *ngFor=\"let cliente of clientes; let i = index\" [attr.data-index]=\"i\">\n            <tr>\n              <td>{{cliente._id}}</td>\n              <td class=\"cnpj\">{{cliente.cnpj}}</td>\n              <td>{{cliente.razao}}</td>\n              <td>{{cliente.enderecos[0].cidade}}/{{cliente.enderecos[0].estado}}</td>\n              <td>{{cliente.representante}}</td>\n              <td><a style=\"cursor:pointer;\" data-title=\"Visualizar\" data-toggle=\"modal\" data-target=\"#view\" title=\"Visualizar\" (click)=\"infoCliente(cliente)\" ><span class=\"glyphicon glyphicon-info-sign\" style=\"color:blue\"></span></a> &nbsp;&nbsp;&nbsp;\n              <a style=\"cursor:pointer;\" data-title=\"Editar\" data-toggle=\"modal\" data-target=\"#edit\" title=\"Editar\" (click)=\"editCliente(cliente)\"><span class=\"glyphicon glyphicon-pencil\" style=\"color:green\"></span></a> &nbsp;&nbsp;&nbsp;\n              <a style=\"cursor:pointer;\" data-title=\"Remover\" data-toggle=\"modal\" data-target=\"#remove\" title=\"Excluir\" ><span class=\"glyphicon glyphicon-trash\" style=\"color:red\"></span></a></td>\n            </tr>\n\n\n\n            <!--INFO-->\n\n            <div class=\"modal fade\" id=\"view\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\n              <div class=\"modal-dialog modal-lg\">\n                <div class=\"modal-content\" style=\"overflow: hidden\">\n                  <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\n                    <h4 class=\"modal-title custom_align\" id=\"Heading\">Cadastro de Cliente</h4>\n                  </div>\n                  <div class=\"modal-body\" style=\"overflow-y: auto; height: auto\">\n                    <div class=\"col-md-4\">\n                      <label for=\"\">ID</label>\n                      <p>{{info._id}}</p>\n                    </div>\n                    <div class=\"col-md-4\">\n                      <label for=\"\">CNPJ</label>\n                      <p class=\"cnpj\">{{info.cnpj}}</p>\n                    </div>\n                    <div class=\"col-md-4\">\n                      <label for=\"\">Insc.Estadual</label>\n                      <p>{{info.insc_estadual}}</p>\n                    </div>\n                    <div class=\"col-md-12\">\n                      <label for=\"\">Razão Social</label>\n                      <p>{{info.razao}}</p>\n                    </div>\n                    <div class=\"col-md-4\">\n                      <label for=\"\">Categoria</label>\n                      <p>{{info.categoria}}</p>\n                    </div>\n                    <div class=\"col-md-4\">\n                      <label for=\"\">Região</label>\n                      <p>{{info.regiao}}</p>\n                    </div>\n                    <div class=\"col-md-4\">\n                      <label for=\"\">Contato</label>\n                      <p>{{info.contato}}</p>\n                    </div>\n                    <div>\n                      <table class=\"table table-striped table-hover\" >\n                        <thead>\n                          <tr>\n                            <th class=\"col-md-1\">#</th>\n                            <th class=\"col-md-4\">Endereço</th>\n                            <th class=\"col-md-2\">Bairro</th>\n                            <th class=\"col-md-2\">Cidade</th>\n                            <th class=\"col-md-1\">Estado</th>\n                            <th class=\"col-md-2\">CEP</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let item of info.enderecos; let i = index\">\n                            <td>{{i + 1}}</td>\n                            <td>{{item.endereco}}</td>\n                            <td>{{item.bairro}}</td>\n                            <td>{{item.cidade}}</td>\n                            <td>{{item.estado}}</td>\n                            <td class=\"cep\">{{item.cep}}</td>\n                            </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                    <div>\n                      <table class=\"table table-striped table-hover\" >\n                        <thead>\n                          <tr>\n                            <th class=\"col-md-1\">#</th>\n                            <th class=\"col-md-4\">Telefone</th>\n                            <th class=\"col-md-4\">Contato</th>\n                            <th class=\"col-md-3\">Operadora</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let item of info.telefones; let i = index\">\n                            <td>{{i + 1}}</td>\n                            <td class=\"phone\">{{item.telefone}}</td>\n                            <td>{{item.contato_tel}}</td>\n                            <td>{{item.operadora}}</td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                    <div>\n                      <table class=\"table table-striped table-hover\" >\n                        <thead>\n                          <tr>\n                            <th class=\"col-md-1\">#</th>\n                            <th class=\"col-md-3\">CPF</th>\n                            <th class=\"col-md-8\">Nome</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let item of info.cpfs; let i = index\">\n                            <td>{{i + 1}}</td>\n                            <td class=\"cpf\">{{item.cpf}}</td>\n                            <td>{{item.nome_cpf}}</td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                  <div class=\"modal-footer \">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"><span class=\"glyphicon glyphicon-remove\"> Sair</span></button>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n\n            <!--EDITAR-->\n\n            <div id=\"edit\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\" >\n                <div class=\"modal-dialog modal-lg\">\n                  <div class=\"modal-content\" style=\"overflow: hidden\">\n                    <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\n                      <h4 class=\"modal-title custom_align\" id=\"Heading\">Editar Cadastro de Cliente</h4>\n                    </div>\n                    <div class=\"modal-body\" style=\"overflow-y: auto; height: auto\">\n                      <div>\n                        <div class=\"col-md-12\" style=\"padding: 0\">\n                          <div class=\"form-group col-md-4\">\n                            <div class=\"input-group\" >\n                              <label for=\"\">CNPJ</label>\n                              <input type=\"text\" class=\"cnpj form-control input-sm\" [(ngModel)]=\"cnpj\" name=\"cnpj\" placeholder=\"CNPJ\" />\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"form-group col-md-8\">\n                          <div class=\"input-group\">\n                            <label for=\"\">Razão Social</label>\n                            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"razao\" name=\"razao\" placeholder=\"Razão Social\" />\n                          </div>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                          <div class=\"input-group\">\n                            <label for=\"\">Categoria</label>\n                              <select class=\"form-control input-sm\" [(ngModel)]=\"categoria\" name=\"categoria\" id=\"categoria\">\n                                <option value=\"\" disabled=true>Selecione uma ou mais opções:</option>\n                                <option value=\"Revenda\">Revenda</option>\n                                <option value=\"Varejo\">Varejo</option>\n                                <option value=\"Engenharia\">Engenharia</option>\n                                <option value=\"Home Center\">Home Center</option>\n                                <option value=\"Key Account\">Key Account</option>\n                                <option value=\"Distribuidor\">Distribuidor</option>\n                              </select>\n                          </div>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                          <div class=\"input-group\">\n                            <label for=\"\">Contato</label>\n                            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"contato\" name=\"contato\" placeholder=\"Nome para Contato\" />\n                          </div>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                          <div class=\"input-group\">\n                            <label for=\"\">Insc. Estadual</label>\n                            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"insc_estadual\" name=\"insc_estadual\" placeholder=\"Inscrição Estadual\" />\n                          </div>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                          <div class=\"input-group\">\n                            <label for=\"\">Região</label>\n                            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"regiao\" name=\"regiao\" placeholder=\"Região de Atendimento\" />\n                          </div>\n                        </div>\n                        <div class=\"form-group col-md-8\">\n                          <div class=\"input-group\">\n                            <label for=\"\">Endereço</label>\n                            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"endereco\" name=\"endereco\" placeholder=\"Endereço\" />\n                          </div>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                          <div class=\"input-group\">\n                            <label for=\"\">Bairro</label>\n                            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"bairro\" name=\"bairro\" placeholder=\"Bairro\" />\n                          </div>\n                        </div>\n                        <div class=\"form-group col-md-5\">\n                          <div class=\"input-group\">\n                            <label for=\"\">Cidade</label>\n                            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"cidade\" name=\"cidade\" placeholder=\"Cidade\" />\n                          </div>\n                        </div>\n                          <div class=\"form-group col-md-3\">\n                          <div class=\"input-group\">\n                            <label for=\"\">UF</label>\n                            <select class=\"form-control input-sm\" [(ngModel)]=\"estado\" name=\"estado\" id=\"estado\" >\n                                <option value=\"\" disabled=true>Selecione o Estado</option> \n                                <option *ngFor=\"let uf of estados\" [value]=\"uf.value\">{{uf.value}}</option>  \n                              </select>\n                          </div>\n                        </div>\n                        <div class=\"form-group col-md-3\">\n                          <div class=\"input-group\">\n                            <label for=\"\">CEP</label>\n                            <input type=\"text\" class=\"cep form-control input-sm\" [(ngModel)]=\"cep\" name=\"cep\" placeholder=\"CEP\" />\n                          </div>\n                        </div>\n                      <div class=\"col-md-1\">\n                        <label>Novo</label>\n                        <button class=\"btn btn-primary btn-sm btn-block\" (click)=\"adicionaEndereco()\"><span class=\"glyphicon glyphicon-plus-sign\"></span></button>\n                      </div>\n                      <div class=\" col-md-12\" *ngIf=\"endArr.length\" >\n                        <table class=\"table table-striped table-hover\" >\n                          <thead>\n                              <tr>\n                                <th class=\"col-md-1\">#</th>\n                                <th class=\"col-md-4\">Endereço</th>\n                                <th class=\"col-md-2\">Bairro</th>\n                                <th class=\"col-md-2\">Cidade</th>\n                                <th class=\"col-md-1\">Estado</th>\n                                <th class=\"col-md-2\">CEP</th>\n                              </tr>\n                            </thead>\n                            <tbody>\n                              <tr *ngFor=\"let item of endArr; let i = index\">\n                                <td>{{i + 1}}</td>\n                                <td>{{item.endereco}}</td>\n                                <td>{{item.bairro}}</td>\n                                <td>{{item.cidade}}</td>\n                                <td>{{item.estado}}</td>\n                                <td class=\"cep\">{{item.cep}}</td>\n                                <td><a style=\"cursor:pointer;\" (click)=\"removeEndereco(item)\" ><span class=\"glyphicon glyphicon-minus\" style=\"color:red\"></span></a></td>\n                              </tr>\n                            </tbody>\n                          </table>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                          <div class=\"input-group\">\n                            <label for=\"\">Telefone</label>\n                            <input type=\"text\" class=\"phone form-control input-sm\" [(ngModel)]=\"telefone\" name=\"telefone\" placeholder=\"Telefone\" />\n                          </div>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                          <div class=\"input-group\">\n                            <label for=\"\">Contato</label>\n                            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"contato_tel\" name=\"contato_tel\" placeholder=\"Contato\" />\n                          </div>\n                        </div>\n                        <div class=\"form-group col-md-3\">\n                          <div class=\"input-group\">\n                            <label for=\"\">Operadora</label>\n                            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"operadora\" name=\"operadora\" placeholder=\"Operadora\" />\n                          </div>\n                        </div>\n                        <div class=\"col-md-1\">\n                          <label>Novo</label>\n                        <button class=\"btn btn-primary btn-sm btn-block\" (click)=\"adicionaTelefone()\"><span class=\"glyphicon glyphicon-plus-sign\"></span></button>\n                      </div>\n                      <div class=\" col-md-12\" *ngIf=\"telArr.length\" >\n                      <table class=\"table table-striped table-hover\" >\n                            <thead>\n                              <tr>\n                                <th class=\"col-md-1\">#</th>\n                                <th class=\"col-md-4\">Telefone</th>\n                                <th class=\"col-md-4\">Contato</th>\n                                <th class=\"col-md-3\">Operadora</th>\n                              </tr>\n                            </thead>\n                            <tbody>\n                              <tr *ngFor=\"let item of telArr; let i = index\">\n                                <td>{{i + 1}}</td>\n                                <td class=\"phone\">{{item.telefone}}</td>\n                                <td>{{item.contato_tel}}</td>\n                                <td>{{item.operadora}}</td>\n                                <td><a style=\"cursor:pointer;\" (click)=\"removeTelefone(item)\" ><span class=\"glyphicon glyphicon-minus\" style=\"color:red\"></span></a></td>\n                              </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                      <div class=\"form-group col-md-4\">\n                          <div class=\"input-group\">\n                            <label for=\"\">CPF</label>\n                            <input type=\"text\" class=\"cpf form-control input-sm\" [(ngModel)]=\"cpf\" name=\"cpf\" placeholder=\"CPF\" />\n                          </div>\n                        </div>\n                        <div class=\"form-group col-md-7\">\n                          <div class=\"input-group\">\n                            <label for=\"\">Nome</label>\n                            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"nome_cpf\" name=\"nome_cpf\" placeholder=\"Nome\" />\n                          </div>\n                        </div>\n                        <div class=\"col-md-1\">\n                          <label>Novo</label>\n                        <button class=\"btn btn-primary btn-sm btn-block\" (click)=\"adicionaCPF()\"><span class=\"glyphicon glyphicon-plus-sign\"></span></button>\n                        </div>\n                        <div class=\" col-md-12\" *ngIf=\"cpfArr.length\" >\n                          <table class=\"table table-striped table-hover\" >\n                            <thead>\n                              <tr>\n                                <th class=\"col-md-1\">#</th>\n                                <th class=\"col-md-3\">CPF</th>\n                                <th class=\"col-md-8\">Nome</th>\n                              </tr>\n                            </thead>\n                            <tbody>\n                              <tr *ngFor=\"let item of cpfArr; let i = index\">\n                                <td>{{i + 1}}</td>\n                                <td class=\"cpf\">{{item.cpf}}</td>\n                                <td>{{item.nome_cpf}}</td>\n                                <td><a style=\"cursor:pointer;\" class=\"warning\" (click)=\"removeCPF(item)\" ><span class=\"glyphicon glyphicon-minus\" style=\"color:red\"></span></a></td>\n                              </tr>\n                            </tbody>\n                          </table>\n                        </div>\n                        <div class=\"col-md-12\">\n                          <input class=\"btn btn-primary btn-block btn-sm\" (click)=\"modificaCliente()\" type=\"button\" value=\"CONFIRMAR\">\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n\n\n\n            <!--REMOVER-->\n\n\n            <div class=\"modal fade\" id=\"remove\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\n              <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\n                    <h4 class=\"modal-title custom_align\" id=\"Heading\">Remover Cadastro de Cliente</h4>\n                  </div>\n                  <div class=\"modal-body\">\n                    <div class=\"alert alert-danger\"><span class=\"glyphicon glyphicon-warning-sign\"></span> Deseja remover este cadastro de cliente?</div>\n                  </div>\n                  <div class=\"modal-footer \">\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"removeCliente(cliente)\" ><span class=\"glyphicon glyphicon-ok-sign\"> Sim</span></button>\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"><span class=\"glyphicon glyphicon-remove\"> Não</span></button>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n\n          </tbody>\n        </table>\n      </div>\n\n\n\n    </div>"

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\r\n  <div class=\"text-center\">\r\n    <h1 style=\"font-weight: bold;\">Sistema Intermax</h1>\r\n    <p class=\"lead\">Bem-Vindo ao Sistema de Vendas Intermax.<br>Faça Login para continuar.</p>\r\n    <div>\r\n      <a class=\"btn btn-info\" [routerLink]=\"['/login']\">Login</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-sm-2 sidenav navbar hidden-xs\">\n  <ul class=\"nav nav-pills nav-stacked\">\n    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/pedidos']\">Pedidos</a></li>\n    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/clientes']\">Clientes</a></li>\n    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/produtos']\">Produtos</a></li>\n    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/representantes']\">Representantes</a></li>\n    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/usuarios']\">Usuários</a></li>\n    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/regioes']\">Regiões</a></li>\n  </ul><br>\n</div>\n"

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"text-center\">\r\n                <h1 style=\"font-weight: bold;\">Sistema Intermax</h1>\r\n                <p class=\"lead hidden-xs\">Bem-Vindo ao Sistema de Vendas Intermax.</p>\r\n                \r\n            </div>\r\n\r\n\r\n        <div class=\"col-md-4 col-md-offset-4\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    <legend>Login</legend>\r\n                    <form class=\"form form-signup\" (submit)=\"onLoginSubmit()\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-user\"></span></span>\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Usuário\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-lock\"></span></span>\r\n                            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Senha\" />\r\n                        </div>\r\n                    </div>\r\n\r\n                <input type=\"submit\" class=\"btn btn-success btn-block\" value=\"ENTRAR\">\r\n              </form>\r\n              </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"authService.loggedIn()\" class=\"navbar navbar-default visible-xs\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\">Intermax</a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav\">\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/pedidos']\">Pedidos</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/clientes']\">Clientes</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/produtos']\">Produtos</a></li>\n        <li *ngIf=\"authService.admin\" class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">Admin<span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\" role=\"menu\">\n            <li *ngIf=\"authService.admin\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/representantes']\">Representantes</a></li>\n            <li *ngIf=\"authService.admin\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/regioes']\">Regiões</a></li>\n            <li *ngIf=\"authService.admin\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/usuarios']\">Usuários</a></li>\n          </ul>\n      </li>\n      <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<nav class=\"navbar navbar-default hidden-xs\" *ngIf=\"authService.loggedIn()\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\">Intermax</a>\n    </div>\n        <div id=\"navbar\" class=\"collapspe navbar-collapse\">\n          <div class=\"col-sm-offset-2\">\n          <ul class=\"nav navbar-nav navbar-left\">\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/pedidos']\">Pedidos</a></li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/clientes']\">Clientes</a></li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/produtos']\">Produtos</a></li>\n            <li *ngIf=\"authService.admin\" class=\"dropdown\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">Admin<span class=\"caret\"></span></a>\n                <ul class=\"dropdown-menu\" role=\"menu\">\n                  <li *ngIf=\"authService.admin\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/representantes']\">Representantes</a></li>\n                  <li *ngIf=\"authService.admin\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/regioes']\">Regiões</a></li>\n                  <li *ngIf=\"authService.admin\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/usuarios']\">Usuários</a></li>\n                </ul>\n            </li>\n          </ul>\n          </div>\n          <div>\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n            <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n          </ul>\n          </div>\n\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>\n\n       "

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = "<h3 class=\"page-header col-md-2\">Pedidos</h3>\r\n\r\n\r\n  <ul class=\"nav nav-tabs col-md-10\">\r\n    <li class=\"active\"><a href=\"#cadastrar_Pedido\" data-toggle=\"tab\" aria-expanded=\"false\">Cadastrar</a></li>\r\n    <li class=\"\"><a href=\"#consultar_Pedido\" data-toggle=\"tab\" aria-expanded=\"true\">Consultar</a></li>\r\n    <li class=\"\"><a href=\"#pedido_Amostras\" data-toggle=\"tab\" aria-expanded=\"true\">Solicitar Amostras</a></li>\r\n  </ul>\r\n\r\n\r\n<div id=\"myTabContent\" class=\"tab-content\">\r\n\r\n  <!--CADASTRAR PEDIDO-->\r\n  <div class=\"tab-pane fade active in\" id=\"cadastrar_Pedido\">\r\n    <div class=\"form-group col-md-11\">\r\n      <div class=\"input-group\">\r\n        <label for=\"\">Cliente</label>\r\n        <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"consulta_cliente\" name=\"consulta_cliente\" placeholder=\"Cliente\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-1\">\r\n      <label>Novo</label>\r\n      <button class=\"btn btn-primary btn-sm btn-block\" (click)=\"consultaCliente()\"><span class=\"glyphicon glyphicon-search\"></span></button>\r\n    </div>\r\n    <div *ngIf=\"clientePedido\">\r\n      <div class=\"col-md-4\">\r\n        <label for=\"\">CNPJ</label>\r\n        <p class=\"cnpj\">{{clientePedido.cnpj}}</p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <label for=\"\">Insc.Estadual</label>\r\n        <p>{{clientePedido.insc_estadual}}</p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <label for=\"\">Categoria</label>\r\n        <p>{{clientePedido.categoria}}</p>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <label for=\"\">Razão Social</label>\r\n        <p>{{clientePedido.razao}}</p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <label for=\"\">Região</label>\r\n        <p>{{clientePedido.regiao}}</p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <label for=\"\">Contato</label>\r\n        <p>{{clientePedido.contato}}</p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <label for=\"\">Cidade</label>\r\n        <p>{{clientePedido.contato}}</p>\r\n      </div>      \r\n    </div>\r\n    \r\n    <div class=\"col-md-12\">\r\n      <input class=\"btn btn-success btn-block btn-sm\" (click)=\"cadastraCliente()\" value=\"CONFIRMAR\">\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <!--Seleciona Cliente-->\r\n  <div class=\"modal fade\" id=\"select_cliente\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n      <div class=\"modal-content\" style=\"overflow: hidden\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\r\n          <h4 class=\"modal-title custom_align\" id=\"Heading\">Selecione o Cliente</h4>\r\n        </div>\r\n        <div class=\"modal-body\" style=\"overflow-y: auto; height: auto\">\r\n          <table class=\"table table-striped table-hover col-md-12\" *ngIf=\"clientes\">\r\n            <thead>\r\n              <tr>\r\n                <th>#</th>\r\n                <th>CNPJ</th>\r\n                <th>Nome</th>\r\n                <th>Local</th>\r\n                <th>Representante</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody *ngFor=\"let cliente of clientes; let i = index\" [attr.data-index]=\"i\">\r\n              <tr style=\"cursor:pointer;\" (click)=\"selectCliente(cliente)\">\r\n                <td>{{cliente._id}}</td>\r\n                <td class=\"cnpj\">{{cliente.cnpj}}</td>\r\n                <td>{{cliente.razao}}</td>\r\n                <td>{{cliente.enderecos[0].cidade}}/{{cliente.enderecos[0].estado}}</td>\r\n                <td>{{cliente.representante}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"modal-footer \">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"><span class=\"glyphicon glyphicon-remove\"> Sair</span></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <!--CONSULTAR PEDIDO-->\r\n  <div class=\"tab-pane fade\" id=\"consultar_Pedido\">\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <!--SOLICITAR AMOSTRAS-->\r\n  <div class=\"tab-pane fade\" id=\"pedido_Amostras\">\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "<h3 class=\"page-header col-md-2\">Produtos</h3>\n\n<ul class=\"nav nav-tabs col-md-10\">\n  <li id=\"abaConsulta\" class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" aria-expanded=\"false\">Consulta <span class=\"caret\"></span></a>\n    <ul class=\"dropdown-menu\">\n      <li class=\"active\"><a href=\"#tabela_Rev\" data-toggle=\"tab\" aria-expanded=\"true\">Revenda / Varejo</a></li>\n      <li class=\"\"><a href=\"#tabela_Eng\" data-toggle=\"tab\" aria-expanded=\"true\">Engenharia</a></li>\n      <li class=\"\"><a href=\"#tabela_HcKa\" data-toggle=\"tab\" aria-expanded=\"true\">Home Center / Key Account</a></li>\n      <li class=\"\"><a href=\"#tabela_AtDt\" data-toggle=\"tab\" aria-expanded=\"true\">Atacado / Distribuidores</a></li>\n    </ul>\n  </li>\n  <li id=\"abaCadastro\" class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" aria-expanded=\"true\">Cadastro <span class=\"caret\"></span></a>\n    <ul class=\"dropdown-menu\">\n      <li class=\"\"><a href=\"#cadastrar_Produto\" data-toggle=\"tab\" aria-expanded=\"true\">Novo Produto</a></li>\n      <li class=\"\"><a href=\"#descontos\" data-toggle=\"tab\" aria-expanded=\"true\">Descontos</a></li>\n      <li class=\"\"><a href=\"#estoque\" data-toggle=\"tab\" aria-expanded=\"true\">Estoque</a></li>\n    </ul>\n  </li>\n</ul>\n\n<div id=\"myTabContent\" class=\"tab-content\">\n\n\n\n  <!--CONSULTA-->\n      \n\n      <!--Tabela REV-->\n      <div class=\"tab-pane fade active in\" id=\"tabela_Rev\">\n        <table class=\"table table-striped table-hover col-md-12\">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>Linha</th>\n            <th>Formato</th>\n            <th>Descrição</th>\n            <th>Capa</th>\n            <th>Med.</th>\n            <th>Un/Cx</th>\n            <th>Cx/Pt</th>\n            <!--<th>Mt/Cx</th>\n            <th>Mt/Pt</th>\n            <th>Mt/Cn</th>-->\n            <th>Preço CD1</th>\n            <th>Preço CD3</th>\n          </tr>\n        </thead>\n        <tbody *ngFor=\"let produto of produtos; let i = index\" [attr.data-index]=\"i\">\n          <tr>\n            <td>{{i + 1}}</td>\n            <td>{{produto.linhaProduto}}</td>\n            <td>{{produto.formatoProduto}}</td>\n            <td>{{produto.descricaoProduto}}</td>\n            <td>{{produto.capaProduto}}</td>\n            <td>{{produto.medicaoProduto}}</td>\n            <td>{{produto.qtUnidCx}}</td>\n            <td>{{produto.qtCxPallet}}</td>\n            <!--<td class=\"money\">{{produto.qtMetroCx}}</td>\n            <td class=\"money\">{{produto.qtMetroPt}}</td>\n            <td class=\"money\">{{produto.qtMetroCn}}</td>-->\n            <td><span>R$ </span><span class=\"money\">{{produto.rev_cd1}}</span></td>\n            <td><span>R$ </span><span class=\"money\">{{produto.rev_cd3}}</span></td>\n          </tr>\n        </tbody>\n        </table>\n      </div>\n\n\n\n    <!--Tabela ENG-->\n      <div class=\"tab-pane fade\" id=\"tabela_Eng\">\n        <table class=\"table table-striped table-hover col-md-12\">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>Linha</th>\n            <th>Formato</th>\n            <th>Descrição</th>\n            <th>Capa</th>\n            <th>Med.</th>\n            <th>Un/Cx</th>\n            <th>Cx/Pt</th>\n            <!--<th>Mt/Cx</th>\n            <th>Mt/Pt</th>\n            <th>Mt/Cn</th>-->\n            <th>Preço CD1</th>\n            <th>Preço CD3</th>\n          </tr>\n        </thead>\n        <tbody *ngFor=\"let produto of produtos; let i = index\" [attr.data-index]=\"i\">\n          <tr>\n            <td>{{i + 1}}</td>\n            <td>{{produto.linhaProduto}}</td>\n            <td>{{produto.formatoProduto}}</td>\n            <td>{{produto.descricaoProduto}}</td>\n            <td>{{produto.capaProduto}}</td>\n            <td>{{produto.medicaoProduto}}</td>\n            <td>{{produto.qtUnidCx}}</td>\n            <td>{{produto.qtCxPallet}}</td>\n            <!--<td class=\"money\">{{produto.qtMetroCx}}</td>\n            <td class=\"money\">{{produto.qtMetroPt}}</td>\n            <td class=\"money\">{{produto.qtMetroCn}}</td>-->\n            <td><span>R$ </span><span class=\"money\">{{produto.eng_cd1}}</span></td>\n            <td><span>R$ </span><span class=\"money\">{{produto.eng_cd3}}</span></td>\n          </tr>\n        </tbody>\n        </table>\n      </div>\n\n\n\n    <!--Tabela HC/KA-->\n      <div class=\"tab-pane fade\" id=\"tabela_HcKa\">\n        <table class=\"table table-striped table-hover col-md-12\">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>Linha</th>\n            <th>Formato</th>\n            <th>Descrição</th>\n            <th>Capa</th>\n            <th>Med.</th>\n            <th>Un/Cx</th>\n            <th>Cx/Pt</th>\n            <!--<th>Mt/Cx</th>\n            <th>Mt/Pt</th>\n            <th>Mt/Cn</th>-->\n            <th>Preço CD1</th>\n            <th>Preço CD3</th>\n          </tr>\n        </thead>\n        <tbody *ngFor=\"let produto of produtos; let i = index\" [attr.data-index]=\"i\">\n          <tr>\n            <td>{{i + 1}}</td>\n            <td>{{produto.linhaProduto}}</td>\n            <td>{{produto.formatoProduto}}</td>\n            <td>{{produto.descricaoProduto}}</td>\n            <td>{{produto.capaProduto}}</td>\n            <td>{{produto.medicaoProduto}}</td>\n            <td>{{produto.qtUnidCx}}</td>\n            <td>{{produto.qtCxPallet}}</td>\n            <!--<td class=\"money\">{{produto.qtMetroCx}}</td>\n            <td class=\"money\">{{produto.qtMetroPt}}</td>\n            <td class=\"money\">{{produto.qtMetroCn}}</td>-->\n            <td><span>R$ </span><span class=\"money\">{{produto.hcka_cd1}}</span></td>\n            <td><span>R$ </span><span class=\"money\">{{produto.hcka_cd3}}</span></td>\n          </tr>\n        </tbody>\n        </table>\n      </div>\n\n\n\n    <!--Tabela AT/DT-->\n      <div class=\"tab-pane fade\" id=\"tabela_AtDt\">\n        <table class=\"table table-striped table-hover col-md-12\">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>Linha</th>\n            <th>Formato</th>\n            <th>Descrição</th>\n            <th>Capa</th>\n            <th>Med.</th>\n            <th>Un/Cx</th>\n            <th>Cx/Pt</th>\n            <!--<th>Mt/Cx</th>\n            <th>Mt/Pt</th>\n            <th>Mt/Cn</th>-->\n            <th>Preço CD1</th>\n            <th>Preço CD3</th>\n          </tr>\n        </thead>\n        <tbody *ngFor=\"let produto of produtos; let i = index\" [attr.data-index]=\"i\">\n          <tr>\n            <td>{{i + 1}}</td>\n            <td>{{produto.linhaProduto}}</td>\n            <td>{{produto.formatoProduto}}</td>\n            <td>{{produto.descricaoProduto}}</td>\n            <td>{{produto.capaProduto}}</td>\n            <td>{{produto.medicaoProduto}}</td>\n            <td>{{produto.qtUnidCx}}</td>\n            <td>{{produto.qtCxPallet}}</td>\n            <!--<td class=\"money\">{{produto.qtMetroCx}}</td>\n            <td class=\"money\">{{produto.qtMetroPt}}</td>\n            <td class=\"money\">{{produto.qtMetroCn}}</td>-->\n            <td><span>R$ </span><span class=\"money\">{{produto.atdt_cd1}}</span></td>\n            <td><span>R$ </span><span class=\"money\">{{produto.atdt_cd3}}</span></td>\n          </tr>\n        </tbody>\n        </table>\n      </div>\n\n\n\n\n\n  <!--CADASTRO-->\n        \n\n      \n      <!--Novo Produto-->\n      <div class=\"tab-pane fade\" id=\"cadastrar_Produto\">\n        <h5 class=\"page-header\">Geral</h5>\n        <div class=\"form-group col-md-2\">\n          <div class=\"input-group\">\n            <label for=\"\">Tipo</label>\n            <select class=\"form-control input-sm\" id=\"tipoProduto\" [(ngModel)]=\"tipoProduto\">\n              <option value=\"\" disabled=true>Selecione:</option>\n              <option value=\"Piso\">Piso</option>\n              <option value=\"Rodapé\">Rodapé</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-group col-md-10\">\n          <div class=\"input-group\">\n            <label for=\"\">Nome</label>\n            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"nomeProduto\" name=\"nomeProduto\" placeholder=\"Nome do Produto\" />\n          </div>\n        </div>\n        <div class=\"form-group col-md-12\">\n          <div class=\"input-group\">\n            <label for=\"\">Descrição Detalhada</label>\n            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"descricaoProduto\" name=\"descricaoProduto\" placeholder=\"Descrição Detalhada\" />\n          </div>\n        </div>\n        <div class=\"form-group col-md-4\">\n          <div class=\"input-group\">\n            <label for=\"\">Código</label>\n            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"codigoProduto\" name=\"codigoProduto\" placeholder=\"Código do Produto\" />\n          </div>\n        </div>\n        <div class=\"form-group col-md-4\">\n          <div class=\"input-group\">\n            <label for=\"\">Linha</label>\n            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"linhaProduto\" name=\"linhaProduto\" placeholder=\"Linha do Produto\" />\n          </div>\n        </div>\n        <div class=\"form-group col-md-1\">\n          <div class=\"input-group\">\n            <label for=\"\">Medição</label>\n            <select class=\"form-control input-sm\" id=\"medicaoProduto\" [(ngModel)]=\"medicaoProduto\">\n              <option value=\"\" disabled=true>Selecione:</option>\n              <option value=\"linear\">m</option>\n              <option value=\"quadrado\">m²</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-group col-md-3\">\n          <div class=\"input-group\">\n            <label for=\"\">Capa de Uso - mm</label>\n            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"capaProduto\" name=\"capaProduto\" placeholder=\"Capa de Uso\" />\n          </div>\n        </div>\n        <h5 class=\"page-header\">Medidas do Produto</h5>\n        <div class=\"form-group col-md-4\" style=\"padding: 0\">\n          <div class=\"input-group\">\n            <label for=\"\" class=\"col-md-12\">Dimensões - mm (Comp x Larg x Esp)</label>\n            <div>\n              <div class=\"col-md-4\">\n                <input type=\"text\" class=\"form-control input-sm \" [(ngModel)]=\"compProduto\" name=\"compProduto\" placeholder=\"Comp.\" />\n              </div>\n              <div class=\"col-md-4\">\n                <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"largProduto\" name=\"largProduto\" placeholder=\"Larg.\" />\n              </div>\n              <div class=\"col-md-4\">\n                <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"espProduto\" name=\"espProduto\" placeholder=\"Esp.\" />\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group col-md-4\">\n          <div class=\"input-group\">\n            <label for=\"\">Unidades por Caixa</label>\n            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"unidCx\" name=\"unidCx\" placeholder=\"Unidades por Caixa\" />\n          </div>\n        </div>\n        <div class=\"form-group col-md-4\">\n          <div class=\"input-group\">\n            <label for=\"\">Caixas por Pallet</label>\n            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"cxPallet\" name=\"cxPallet\" placeholder=\"Caixas por Pallet\" />\n          </div>\n        </div>\n        <div class=\"form-group col-md-4\">\n          <div class=\"input-group\">\n            <label for=\"\">Metros por Caixa</label>\n            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"metroCx\" name=\"metroCx\" placeholder=\"Metros por Caixa\" />\n          </div>\n        </div>\n        <div class=\"form-group col-md-4\">\n          <div class=\"input-group\">\n            <label for=\"\">Metros por Pallet</label>\n            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"metroPallet\" name=\"metroPallet\" placeholder=\"Metros por Pallet\" />\n          </div>\n        </div>\n        <div class=\"form-group col-md-4\">\n          <div class=\"input-group\">\n            <label for=\"\">Metros por Container</label>\n            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"metroContainer\" name=\"metroContainer\" placeholder=\"Metros por Container\" />\n          </div>\n        </div>\n        <h5 class=\"page-header\">Preços</h5>\n        <table class=\"table table-striped table-hover\">\n          <thead>\n            <tr>\n              <th class=\"col-md-4\">Canal</th>\n              <th class=\"col-md-2\">Centro</th>\n              <th class=\"col-md-2\" style=\"text-align: right\">Fracionado</th>\n              <th class=\"col-md-1\" style=\"text-align: right\">Desc. 1</th>\n              <th class=\"col-md-1\" style=\"text-align: right\">Desc. 2</th>\n              <th class=\"col-md-1\" style=\"text-align: right\">Desc. 3</th>\n              <th class=\"col-md-1\" style=\"text-align: right\">Desc. 4</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>REVENDA / VAREJO</td>\n              <td>CD1</td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"money form-control input-sm\" [(ngModel)]=\"preco_rev_cd1\" name=\"preco_rev_cd1\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc1_rev_cd1\" name=\"desc1_rev_cd1\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc2_rev_cd1\" name=\"desc2_rev_cd1\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc3_rev_cd1\" name=\"desc3_rev_cd1\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc4_rev_cd1\" name=\"desc4_rev_cd1\" placeholder=\"\" /></td>\n            </tr>\n            <tr>\n              <td>REVENDA / VAREJO</td>\n              <td>CD3</td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"money form-control input-sm\" [(ngModel)]=\"preco_rev_cd3\" name=\"preco_rev_cd3\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc1_rev_cd3\" name=\"desc1_rev_cd3\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc2_rev_cd3\" name=\"desc2_rev_cd3\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc3_rev_cd3\" name=\"desc3_rev_cd3\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc4_rev_cd3\" name=\"desc4_rev_cd3\" placeholder=\"\" /></td>\n            </tr>\n            <tr>\n              <td>ENGENHARIA</td>\n              <td>CD1</td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"money form-control input-sm\" [(ngModel)]=\"preco_eng_cd1\" name=\"preco_eng_cd1\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc1_eng_cd1\" name=\"desc1_eng_cd1\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc2_eng_cd1\" name=\"desc2_eng_cd1\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc3_eng_cd1\" name=\"desc3_eng_cd1\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc4_eng_cd1\" name=\"desc4_eng_cd1\" placeholder=\"\" /></td>\n            </tr>\n            <tr>\n              <td>ENGENHARIA</td>\n              <td>CD3</td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"money form-control input-sm\" [(ngModel)]=\"preco_eng_cd3\" name=\"preco_eng_cd3\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc1_eng_cd3\" name=\"desc1_eng_cd3\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc2_eng_cd3\" name=\"desc2_eng_cd3\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc3_eng_cd3\" name=\"desc3_eng_cd3\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc4_eng_cd3\" name=\"desc4_eng_cd3\" placeholder=\"\" /></td>\n            </tr>\n            <tr>\n              <td>HOME CENTER / KEY ACCOUNT</td>\n              <td>CD1</td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"money form-control input-sm\" [(ngModel)]=\"preco_hcka_cd1\" name=\"preco_hcka_cd1\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc1_hcka_cd1\" name=\"desc1_hcka_cd1\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc2_hcka_cd1\" name=\"desc2_hcka_cd1\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc3_hcka_cd1\" name=\"desc3_hcka_cd1\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc4_hcka_cd1\" name=\"desc4_hcka_cd1\" placeholder=\"\" /></td>\n            </tr>\n            <tr>\n              <td>HOME CENTER / KEY ACCOUNT</td>\n              <td>CD3</td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"money form-control input-sm\" [(ngModel)]=\"preco_hcka_cd3\" name=\"preco_hcka_cd3\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc1_hcka_cd3\" name=\"desc1_hcka_cd3\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc2_hcka_cd3\" name=\"desc2_hcka_cd3\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc3_hcka_cd3\" name=\"desc3_hcka_cd3\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc4_hcka_cd3\" name=\"desc4_hcka_cd3\" placeholder=\"\" /></td>\n            </tr>\n            <tr>\n              <td>DISTRIBUIDORAS / ATACADO</td>\n              <td>CD1</td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"money form-control input-sm\" [(ngModel)]=\"preco_dist_cd1\" name=\"preco_dist_cd1\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc1_dist_cd1\" name=\"desc1_dist_cd1\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc2_dist_cd1\" name=\"desc2_dist_cd1\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc3_dist_cd1\" name=\"desc3_dist_cd1\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc4_dist_cd1\" name=\"desc4_dist_cd1\" placeholder=\"\" /></td>\n            </tr>\n            <tr>\n              <td>DISTRIBUIDORAS / ATACADO</td>\n              <td>CD3</td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"money form-control input-sm\" [(ngModel)]=\"preco_dist_cd3\" name=\"preco_dist_cd3\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc1_dist_cd3\" name=\"desc1_dist_cd3\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc2_dist_cd3\" name=\"desc2_dist_cd3\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc3_dist_cd3\" name=\"desc3_dist_cd3\" placeholder=\"\" /></td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"percent form-control input-sm\" [(ngModel)]=\"desc4_dist_cd3\" name=\"desc4_dist_cd3\" placeholder=\"\" /></td>\n            </tr>\n          </tbody>\n        </table>\n        <div class=\"col-md-12\" style=\"padding: 0\">\n          <input class=\"btn btn-primary btn-block btn-sm\" (click)=\"adicionaProduto()\" value=\"CONFIRMAR\">\n        </div>\n      </div>\n\n\n\n\n      <!--Descontos-->\n\n      <div class=\"tab-pane fade\" id=\"descontos\">\n        <h4 class=\"page-header\" style=\"padding-left: 30px\">Tabela de Descontos</h4>\n        <div class=\"form-group col-md-6\">\n          <div class=\"input-group\">\n            <select class=\"form-control input-sm\" [disabled]=\"disable_select\" [(ngModel)]=\"cons_nomeProduto\" name=\"cons_nomeProduto\" id=\"cons_nomeProduto\" (change)=\"funcao_desc(desc_nome, cons_nomeProduto)\" >\n              <option value=\"\" disabled=true>Nome do Produto:</option> \n              <option *ngFor=\"let produto of produtos\" [value]=\"produto._id\" >{{produto.descricaoProduto}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-group col-md-2\">\n          <div class=\"input-group\">\n            <select class=\"form-control input-sm\" id=\"cons_tipoProduto\" [disabled]=\"disable_select\" [(ngModel)]=\"cons_tipoProduto\" (change)=\"funcao_desc(desc_tipo, cons_tipoProduto)\">\n              <option value=\"\">Tipo de Produto:</option>\n              <option value=\"Piso\">Piso</option>\n              <option value=\"Rodapé\">Rodapé</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-group col-md-4\">\n          <div class=\"input-group\">\n            <select class=\"form-control input-sm\" [disabled]=\"disable_select\" [(ngModel)]=\"cons_linhaProduto\" name=\"cons_linhaProduto\" id=\"cons_linhaProduto\" (change)=\"funcao_desc(desc_linha, cons_linhaProduto)\">\n              <option value=\"\" disabled=true>Linha do Produto:</option> \n              <option *ngFor=\"let linha of linhas\" [value]=\"linha\">{{linha}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-group col-md-2 col-md-offset-10\">\n          <button *ngIf=\"select_desc\" class=\"btn btn-danger btn-sm btn-block\" (click)=\"limpaBuscaDesconto()\">Nova Consulta</button>\n        </div>\n        <table *ngIf=\"select_desc\" class=\"table table-striped table-hover\">\n          <thead>\n            <tr>\n              <th class=\"col-md-8\"># Desconto</th>\n              <th class=\"col-md-2\" style=\"text-align: right\">Quantidade</th>\n              <th class=\"col-md-2\" style=\"text-align: right\">Medida</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>Desconto 1</td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"form-control input-sm\" [(ngModel)]=\"quant_desc1\" name=\"quant_desc1\" placeholder=\"\" /></td>\n              <td>\n                <select class=\"form-control input-sm\" [(ngModel)]=\"medida_desc1\" name=\"medida_desc1\" id=\"medida_desc1\" >\n                  <option value=\"\" disabled=true>Selecione:</option> \n                  <option value=\"linear\">m</option>\n                  <option value=\"quadrado\">m²</option>\n                  <option value=\"caixa\">Caixa</option>\n                  <option value=\"pallet\">Pallet</option>\n                </select>\n              </td>\n            </tr>\n            <tr>\n              <td>Desconto 2</td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"form-control input-sm\" [(ngModel)]=\"quant_desc2\" name=\"quant_desc2\" placeholder=\"\" /></td>\n              <td>\n                <select class=\"form-control input-sm\" [(ngModel)]=\"medida_desc2\" name=\"medida_desc2\" id=\"medida_desc2\" >\n                  <option value=\"\" disabled=true>Selecione:</option> \n                  <option value=\"linear\">m</option>\n                  <option value=\"quadrado\">m²</option>\n                  <option value=\"caixa\">Caixa</option>\n                  <option value=\"pallet\">Pallet</option>\n                </select>\n              </td>\n            </tr>\n            <tr>\n              <td>Desconto 3</td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"form-control input-sm\" [(ngModel)]=\"quant_desc3\" name=\"quant_desc3\" placeholder=\"\" /></td>\n              <td>\n                <select class=\"form-control input-sm\" [(ngModel)]=\"medida_desc3\" name=\"medida_desc3\" id=\"medida_desc3\" >\n                  <option value=\"\" disabled=true>Selecione:</option> \n                  <option value=\"linear\">m</option>\n                  <option value=\"quadrado\">m²</option>\n                  <option value=\"caixa\">Caixa</option>\n                  <option value=\"pallet\">Pallet</option>\n                </select>\n              </td>\n            </tr>\n            <tr>\n              <td>Desconto 4</td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"form-control input-sm\" [(ngModel)]=\"quant_desc4\" name=\"quant_desc4\" placeholder=\"\" /></td>\n              <td>\n                <select class=\"form-control input-sm\" [(ngModel)]=\"medida_desc4\" name=\"medida_desc4\" id=\"medida_desc4\" >\n                  <option value=\"\" disabled=true>Selecione:</option> \n                  <option value=\"linear\">m</option>\n                  <option value=\"quadrado\">m²</option>\n                  <option value=\"caixa\">Caixa</option>\n                  <option value=\"pallet\">Pallet</option>\n                </select>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <div *ngIf=\"select_desc\" class=\"col-md-12\" style=\"padding: 0\">\n          <input class=\"btn btn-primary btn-block btn-sm\" (click)=\"cadastraDesconto()\" value=\"CONFIRMAR\">\n        </div>\n\n      </div>\n\n\n\n\n      <!--Estoque-->\n\n      <div class=\"tab-pane fade\" id=\"estoque\">\n        <h4 class=\"page-header\" style=\"padding-left: 30px\">Controle de Estoque</h4>\n        <div class=\"form-group col-md-12\">\n          <div class=\"input-group\">\n            <select class=\"form-control input-sm\" [disabled]=\"disable_select\" [(ngModel)]=\"cons_nomeProduto\" name=\"cons_nomeProduto\" id=\"cons_nomeProduto\" (change)=\"funcao_desc(desc_nome, cons_nomeProduto)\" >\n              <option value=\"\" disabled=true>Nome do Produto:</option> \n              <option *ngFor=\"let produto of produtos\" [value]=\"produto._id\" >{{produto.descricaoProduto}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-group col-md-2 col-md-offset-10\">\n          <button *ngIf=\"select_desc\" class=\"btn btn-danger btn-sm btn-block\" (click)=\"limpaBuscaEstoque()\">Nova Consulta</button>\n        </div>\n        <table *ngIf=\"select_desc\" class=\"table table-striped table-hover\">\n          <thead>\n            <tr>\n              <th class=\"col-md-8\">Produto</th>\n              <th class=\"col-md-2\" style=\"text-align: right\">Quantidade</th>\n              <th class=\"col-md-2\" style=\"text-align: right\">Medida</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>Produto</td>\n              <td><input type=\"text\" style=\"text-align: right\" class=\"form-control input-sm\" [(ngModel)]=\"quant_estoque\" name=\"quant_estoque\" placeholder=\"\" /></td>\n              <td>\n                <select class=\"form-control input-sm\" [(ngModel)]=\"medida_estoque\" name=\"medida_estoque\" id=\"medida_estoque\" >\n                  <option value=\"\" disabled=true>Selecione:</option> \n                  <option value=\"linear\">m</option>\n                  <option value=\"quadrado\">m²</option>\n                  <option value=\"caixa\">Caixa</option>\n                  <option value=\"pallet\">Pallet</option>\n                </select>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <div *ngIf=\"select_desc\" class=\"col-md-12\" style=\"padding: 0\">\n          <input class=\"btn btn-primary btn-block btn-sm\" (click)=\"cadastraDesconto()\" value=\"CONFIRMAR\">\n        </div>\n      </div>\n\n\n\n</div>\n"

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = "<h3 class=\"page-header col-md-12\">Regiões</h3>\n\n\n<div class=\"tab-pane fade active in\" id=\"consultar\">\n  <div class=\"col-md-2 div\">\n    <button class=\"btn btn-primary btn-sm btn-block adicionar\" data-toggle=\"modal\" data-target=\"#adicionar\">Nova Região</button>\n  </div>        \n  <input type=\"text\" class=\"form-control input-sm col-md-12\" [(ngModel)]=\"consulta_regiao\" name=\"consulta_regiao\" placeholder=\"Digite a Região, UF ou Município\" (keyup)=\"consultaRegiao()\" />\n  <table class=\"table table-striped table-hover col-md-12\" *ngIf=\"regioes\">\n    <thead>\n      <tr>\n        <th class=\"col-md-1\">#</th>\n        <th class=\"col-md-2\">Região</th>\n        <th class=\"col-md-7\">Cidades</th>\n        <th class=\"col-md-2\"></th>\n      </tr>\n    </thead>\n    <tbody *ngFor=\"let regiao of regioes; let i = index\" [attr.data-index]=\"i\">\n      <tr>\n        <td>{{regiao._id}}</td>\n        <td>{{regiao.nome}}</td>\n        <td><span *ngFor=\"let item of regiao.locais; let isLast=last\">{{item.cidade}}/{{item.estado}}{{isLast ? '' : ', '}}</span></td>\n        <td><a style=\"cursor:pointer;\" data-title=\"Visualizar\" data-toggle=\"modal\" data-target=\"#view\" title=\"Visualizar\" (click)=\"infoRegiao(regiao)\"><span class=\"glyphicon glyphicon-info-sign\" style=\"color:blue\"></span></a> &nbsp;&nbsp;&nbsp;\n          <a style=\"cursor:pointer;\" data-title=\"Editar\" data-toggle=\"modal\" data-target=\"#edit\" title=\"Editar\" (click)=\"editRegiao(regiao)\" ><span class=\"glyphicon glyphicon-pencil\" style=\"color:green\"></span></a> &nbsp;&nbsp;&nbsp;\n          <a style=\"cursor:pointer;\" data-title=\"Remover\" data-toggle=\"modal\" data-target=\"#remove\" title=\"Excluir\" ><span class=\"glyphicon glyphicon-trash\" style=\"color:red\"></span></a></td>\n      </tr>\n      \n\n      <!--INFO-->\n        <div class=\"modal fade\" id=\"view\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\n          <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\n                <h4 class=\"modal-title custom_align\" id=\"Heading\">Cadastro de Região</h4>\n              </div>\n              <div class=\"modal-body\" style=\"overflow-y: auto; height: auto\">\n                <div class=\"col-md-4\">\n                  <label for=\"\">ID da Região</label>\n                  <p>{{info._id}}</p>\n                </div>\n                <div class=\"col-md-8\">\n                  <label for=\"\">Nome da Região</label>\n                  <p>{{info.nome}}</p>\n                </div>\n                <div class=\" col-md-12\" >\n                  <table class=\"table table-striped table-hover\" >\n                    <thead>\n                      <tr>\n                        <th class=\"col-md-2\">#</th>\n                        <th class=\"col-md-2\">Estado</th>\n                        <th class=\"col-md-8\">Cidade</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let item of info.locais; let i = index\">\n                        <td>{{i + 1}}</td>\n                        <td>{{item.estado}}</td>\n                        <td>{{item.cidade}}</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n            <div class=\"modal-footer \">\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"><span class=\"glyphicon glyphicon-remove\"> Sair</span></button>\n            </div>\n          </div>\n        </div>\n\n\n\n        <!--EDITAR-->\n        <div class=\"modal fade\" id=\"edit\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\" >\n          <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\" style=\"overflow: hidden\">\n              <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\n                <h4 class=\"modal-title custom_align\" id=\"Heading\">Editar Cadastro de Região</h4>\n              </div>\n              <div class=\"modal-body\" style=\"overflow-y: auto; height: auto\">\n                <div class=\"form-group col-md-2\">\n                  <div class=\"input-group\">\n                    <label for=\"id_regiao\">ID da Região</label>\n                    <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"id_regiao\" name=\"id_regiao\" placeholder=\"ID da Região\" />\n                  </div>\n                </div>\n                <div class=\"form-group col-md-10\">\n                  <div class=\"input-group\">\n                    <label for=\"nome\">Nome da Região</label>\n                    <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"nome\" name=\"nome\" placeholder=\"Nome da Região\" />\n                  </div>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div class=\"input-group\">\n                    <label for=\"estado\">Estado</label>\n                    <select class=\"form-control input-sm\" [(ngModel)]=\"estado\" name=\"estado\" >\n                      <option value=\"\" disabled=true>Selecione o Estado</option> \n                      <option *ngFor=\"let uf of estados\" [value]=\"uf.value\">{{uf.value}}</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"form-group col-md-6\">\n                  <div class=\"input-group\">\n                    <label for=\"nome_regiao\">Cidade</label>\n                    <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"cidade\" name=\"cidade\" placeholder=\"Cidade\" />\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n                    <label>Novo</label>\n                  <button class=\"btn btn-primary btn-sm btn-block\" (click)=\"adicionaLocal()\"><span class=\"glyphicon glyphicon-plus-sign\"></span></button>\n                </div>\n                <div class=\" col-md-12\" *ngIf=\"locArr.length\" >\n                  <table class=\"table table-striped table-hover\" >\n                    <thead>\n                      <tr>\n                        <th class=\"col-md-1\">#</th>\n                        <th class=\"col-md-3\">Estado</th>\n                        <th class=\"col-md-8\">Cidade</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let item of locArr; let i = index\">\n                        <td class=\"col-md-1\">{{i + 1}}</td>\n                        <td class=\"col-md-3\">{{item.estado}}</td>\n                        <td class=\"col-md-8\">{{item.cidade}}</td>\n                        <td><a style=\"cursor:pointer;\" (click)=\"removeLocal(item)\" ><span class=\"glyphicon glyphicon-minus\" style=\"color:red\"></span></a></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                <div class=\"col-md-12\">\n                  <input class=\"btn btn-primary btn-block btn-sm\" (click)=\"modificaRegiao()\" value=\"CONFIRMAR\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n\n        <!--DELETE-->\n        <div class=\"modal fade\" id=\"remove\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\n          <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\n                <h4 class=\"modal-title custom_align\" id=\"Heading\">Remover Cadastro de Cliente</h4>\n              </div>\n              <div class=\"modal-body\">\n                <div class=\"alert alert-danger\"><span class=\"glyphicon glyphicon-warning-sign\"></span> Deseja remover este cadastro de região?</div>\n              </div>\n              <div class=\"modal-footer \">\n                <button type=\"button\" class=\"btn btn-success\" ><span class=\"glyphicon glyphicon-ok-sign\" (click)=\"removeRegiao(regiao)\"> Sim</span></button>\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"><span class=\"glyphicon glyphicon-remove\"> Não</span></button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n\n\n    </tbody>\n  </table>\n</div>\n\n\n\n<!--ADICIONAR NOVA REGIÃO-->\n\n<div class=\"modal fade\" id=\"adicionar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\n        <h4 class=\"modal-title custom_align\" id=\"Heading\">Adicionar Região</h4>\n      </div>\n      <div class=\"modal-body\" style=\"overflow-y: auto; height: auto\">\n        <div class=\"form-group col-md-12\">\n          <div class=\"input-group\">\n            <label for=\"nome\">Nome da Região</label>\n            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"nome\" name=\"nome\" placeholder=\"Nome da Região\" />\n          </div>\n        </div>\n        <div class=\"form-group col-md-4\">\n          <div class=\"input-group\">\n            <label for=\"estado\">Estado</label>\n            <select class=\"form-control input-sm\" [(ngModel)]=\"estado\" name=\"estado\" >\n              <option value=\"\" disabled=true>Selecione o Estado</option> \n              <option *ngFor=\"let uf of estados\" [value]=\"uf.value\">{{uf.value}}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <div class=\"input-group\">\n            <label for=\"cidade\">Cidade</label>\n            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"cidade\" id=\"cidade\" name=\"cidade\" placeholder=\"Cidade\" />\n          </div>\n        </div>\n        <div class=\"col-md-2\">\n            <label>Novo</label>\n          <button class=\"btn btn-primary btn-sm btn-block\" (click)=\"adicionaLocal()\"><span class=\"glyphicon glyphicon-plus-sign\"></span></button>\n        </div>\n        <div class=\" col-md-12\" *ngIf=\"locArr.length\" >\n          <table class=\"table table-striped table-hover\" >\n            <thead>\n              <tr>\n                <th class=\"col-md-1\">#</th>\n                <th class=\"col-md-3\">Estado</th>\n                <th class=\"col-md-8\">Cidade</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of locArr; let i = index\">\n                <td class=\"col-md-1\">{{i + 1}}</td>\n                <td class=\"col-md-3\">{{item.estado}}</td>\n                <td class=\"col-md-8\">{{item.cidade}}</td>\n                <td><a style=\"cursor:pointer;\" (click)=\"removeLocal(item)\" ><span class=\"glyphicon glyphicon-minus\" style=\"color:red\"></span></a></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"col-md-12\">\n          <input class=\"btn btn-primary btn-block btn-sm\" (click)=\"adicionaRegiao()\" value=\"CONFIRMAR\">\n        </div>\n      </div>\n      <div class=\"modal-footer \">\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = "<h3 class=\"page-header\" style=\"margin-top: 0px;\">Cadastrar Novo Usuário</h3>\n<div class=\"row\">\n  <form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group col-md-6\">\n      <label>Nome:</label>\n      <input type=\"text\" [(ngModel)]=\"firstName\" name=\"firstName\" class=\"form-control input-sm\" placeholder=\"Nome\">\n    </div>\n  <div class=\"form-group col-md-6\">\n      <label>Sobrenome:</label>\n      <input type=\"text\" [(ngModel)]=\"lastName\" name=\"lastName\" class=\"form-control input-sm\" placeholder=\"Sobrenome\">\n  </div>\n  <div class=\"form-group col-md-6\">\n      <label>E-mail:</label>\n      <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control input-sm\" placeholder=\"E-mail\">\n  </div>\n  <div class=\"form-group col-md-6\">\n      <label>Telefone:</label>\n      <input type=\"text\" [(ngModel)]=\"telefone\" name=\"telefone\" class=\"phone form-control input-sm\" placeholder=\"Telefone\">\n  </div>\n  <div class=\"col-md-12\" style=\"padding: 0\">\n    <div class=\"form-group col-md-6\">\n        <label>Acesso:</label>\n        <select class=\"form-control input-sm\" [(ngModel)]=\"acesso\" name=\"acesso\" id=\"acesso\" (change)=\"admin()\" >\n          <option value=\"\" disabled=true >Selecione a Empresa:</option>\n          <option value=\"consulta\">Consulta</option>\n          <option value=\"cadastro\">Cadastro</option>\n          <option value=\"admin\" >Admin</option>\n        </select>\n    </div>\n    <div *ngIf=\"!if_admin\" class=\"form-group col-md-6\">\n        <label for=\"\">Empresa</label>\n        <select class=\"form-control input-sm\" [(ngModel)]=\"idEmpresa\" name=\"idEmpresa\" id=\"idEmpresa\" >\n          <option value=\"\" disabled=true label=\"Selecione a Empresa:\" ></option> \n          <option *ngFor=\"let representante of representantes; let i = index\" [value]=\"representante._id\">{{representante.razao}}</option>\n        </select>\n    </div>\n  </div>\n  <div class=\"form-group col-md-6\">\n      <label>Username:</label>\n      <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control input-sm\" placeholder=\"Username\">\n  </div>\n  <div class=\"form-group col-md-6\">\n      <label>Senha:</label>\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control input-sm\" placeholder=\"Senha\">\n  </div>\n  <div class=\"col-md-12\">\n    <input type=\"submit\" class=\"btn btn-primary btn-block btn-sm\" value=\"Cadastrar\">\n  </div>\n</form>\n</div>\n"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = "\n<!--HEADER-->\n\n<h3 class=\"page-header col-md-3\">Representantes</h3>\n\n\n\n        <!--ABAS-->\n\n\n        <ul class=\"nav nav-tabs col-md-9\">\n          <li class=\"active\"><a href=\"#cadastrar_Representante\" data-toggle=\"tab\" aria-expanded=\"false\" (click)=\"limpa()\" >Cadastrar</a></li>\n          <li class=\"\"><a href=\"#consultar_Representante\" data-toggle=\"tab\" aria-expanded=\"true\" (click)=\"limpa()\">Consultar</a></li>\n        </ul>\n\n\n\n<!--DIV PRINCIPAL-->\n\n\n<div id=\"myTabContent\" class=\"tab-content\">\n\n\n\n        <!--CADASTRO DE REPRESENTANTE-->\n\n\n        <div class=\"tab-pane fade active in\" id=\"cadastrar_Representante\">\n            <div class=\"form-group col-md-4\">\n              <div class=\"input-group\" >\n                <label for=\"\">CNPJ</label>\n                <input type=\"text\" class=\"cnpj form-control input-sm\" [(ngModel)]=\"cnpj\" name=\"cnpj\" placeholder=\"CNPJ\" />\n              </div>\n            </div>\n            <div class=\"form-group col-md-4\">\n              <div class=\"input-group\">\n                <label for=\"\">Insc. Estadual</label>\n                <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"insc_estadual\" name=\"insc_estadual\" placeholder=\"Inscrição Estadual\" />\n              </div>\n            </div>\n            <div class=\"form-group col-md-4\">\n              <div class=\"input-group\">\n                <label for=\"\">Contato</label>\n                <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"contato\" name=\"contato\" placeholder=\"Nome para Contato\" />\n              </div>\n            </div>\n            <div class=\"form-group col-md-12\">\n              <div class=\"input-group\">\n                <label for=\"\">Razão Social</label>\n                <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"razao\" name=\"razao\" placeholder=\"Razão Social\" />\n              </div>\n            </div>\n            <div class=\"form-group col-md-8\">\n              <div class=\"input-group\">\n                <label for=\"\">Endereço</label>\n                <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"endereco\" name=\"endereco\" placeholder=\"Endereço\" />\n              </div>\n            </div>\n            <div class=\"form-group col-md-4\">\n              <div class=\"input-group\">\n                <label for=\"\">Bairro</label>\n                <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"bairro\" name=\"bairro\" placeholder=\"Bairro\" />\n              </div>\n            </div>\n            <div class=\"form-group col-md-5\">\n              <div class=\"input-group\">\n                <label for=\"\">Cidade</label>\n                <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"cidade\" name=\"cidade\" placeholder=\"Cidade\" />\n              </div>\n            </div>\n            <div class=\"form-group col-md-3\">\n              <div class=\"input-group\">\n                <label for=\"\">UF</label>\n                <select class=\"form-control input-sm\" [(ngModel)]=\"estado\" name=\"estado\" id=\"estado\" >\n                  <option value=\"\" disabled=true>Selecione o Estado</option> \n                  <option *ngFor=\"let uf of estados\" [value]=\"uf.value\">{{uf.value}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group col-md-4\">\n              <div class=\"input-group\">\n                <label for=\"\">CEP</label>\n                <input type=\"text\" class=\"cep form-control input-sm\" [(ngModel)]=\"cep\" name=\"cep\" placeholder=\"CEP\" />\n              </div>\n            </div>\n            <div class=\"form-group col-md-11\">\n              <div class=\"input-group\">\n                <label for=\"\">Região</label>\n                <select class=\"form-control input-sm\" [(ngModel)]=\"regiao\" name=\"regiao\" id=\"regiao\" >\n                  <option value=\"\" disabled=true label=\"Selecione a Região:\" ></option> \n                  <option *ngFor=\"let regiao of regioes; let i = index\" [value]=\"i\">{{regiao.nome}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-md-1\">\n              <label>Novo</label>\n              <button class=\"btn btn-primary btn-sm btn-block\" (click)=\"adicionaRegiao()\"><span class=\"glyphicon glyphicon-plus-sign\"></span></button>\n            </div>\n            <div class=\" col-md-12\" *ngIf=\"regArr.length\" >\n              <table class=\"table table-striped table-hover\" >\n                  <thead>\n                    <tr>\n                      <th class=\"col-md-1\">ID</th>\n                      <th class=\"col-md-11\">Região</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let item of regArr; let i = index\">\n                      <td>{{item._id}}</td>\n                      <td>{{item.nome}}</td>\n                      <td><a style=\"cursor:pointer;\" (click)=\"removeRegiao(item)\" ><span class=\"glyphicon glyphicon-minus\" style=\"color: red\"></span></a></td>\n                    </tr>\n                </tbody>\n              </table>\n            </div>\n            <div class=\"form-group col-md-11\">\n              <div class=\"input-group\">\n                <label for=\"\">Categoria</label><br>\n                <select class=\"form-control input-sm\" [(ngModel)]=\"categoria\" name=\"categoria\" id=\"categoria\">\n                  <option value=\"\" disabled=true>Selecione uma ou mais opções:</option>\n                  <option value=\"Revenda\">Revenda</option>\n                  <option value=\"Varejo\">Varejo</option>\n                  <option value=\"Engenharia\">Engenharia</option>\n                  <option value=\"Homecenter\">Home Center</option>\n                  <option value=\"Key Account\">Key Account</option>\n                  <option value=\"Distribuidor\">Distribuidor</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-md-1\">\n              <label>Novo</label>\n              <button class=\"btn btn-primary btn-sm btn-block\" (click)=\"adicionaCategoria()\"><span class=\"glyphicon glyphicon-plus-sign\"></span></button>\n            </div>\n            <div class=\" col-md-12\" *ngIf=\"catArr.length\" >\n              <table class=\"table table-striped table-hover\" >\n                  <thead>\n                    <tr>\n                      <th class=\"col-md-1\">#</th>\n                      <th class=\"col-md-11\">Categoria</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let item of catArr; let i = index\">\n                      <td>{{i + 1}}</td>\n                      <td>{{item.categoria}}</td>\n                      <td><a style=\"cursor:pointer;\" (click)=\"removeCategoria(item)\" ><span class=\"glyphicon glyphicon-minus\" style=\"color: red\"></span></a></td>\n                    </tr>\n                </tbody>\n              </table>\n            </div>\n            <div class=\"form-group col-md-4\">\n              <div class=\"input-group\">\n                <label for=\"\">Telefone</label>\n                <input type=\"text\" class=\"phone form-control input-sm\" [(ngModel)]=\"telefone\" name=\"telefone\" placeholder=\"Telefone\" />\n              </div>\n            </div>\n            <div class=\"form-group col-md-4\">\n              <div class=\"input-group\">\n                <label for=\"\">Contato</label>\n                <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"contato_tel\" name=\"contato_tel\" placeholder=\"Contato\" />\n              </div>\n            </div>\n            <div class=\"form-group col-md-3\">\n              <div class=\"input-group\">\n                <label for=\"\">Operadora</label>\n                <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"operadora\" name=\"operadora\" placeholder=\"Operadora\" />\n              </div>\n            </div>\n            <div class=\"col-md-1\">\n              <label>Novo</label>\n              <button class=\"btn btn-primary btn-sm btn-block\" (click)=\"adicionaTelefone()\"><span class=\"glyphicon glyphicon-plus-sign\"></span></button>\n            </div>\n            <div class=\" col-md-12\" *ngIf=\"telArr.length\" >\n              <table class=\"table table-striped table-hover\" >\n                <thead>\n                  <tr>\n                    <th class=\"col-md-1\">#</th>\n                    <th class=\"col-md-4\">Telefone</th>\n                    <th class=\"col-md-4\">Contato</th>\n                    <th class=\"col-md-3\">Operadora</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let item of telArr; let i = index\">\n                    <td>{{i + 1}}</td>\n                    <td class=\"phone\">{{item.telefone}}</td>\n                    <td>{{item.contato_tel}}</td>\n                    <td>{{item.operadora}}</td>\n                    <td><a style=\"cursor:pointer;\" (click)=\"removeTelefone(item)\" ><span class=\"glyphicon glyphicon-minus\" style=\"color:red\"></span></a></td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <div class=\"col-md-12\">\n              <input class=\"btn btn-primary btn-block btn-sm\" (click)=\"adicionaRepresentante()\" value=\"CONFIRMAR\">\n            </div>\n        </div>\n\n\n\n        <!--CONSULTA DE REPRESENTANTES-->\n\n\n        <div class=\"tab-pane fade\" id=\"consultar_Representante\">\n          <div class=\"form-group col-md-2\">\n            <input type=\"text\" class=\"form-control input-sm\" name=\"consulta_id\" [(ngModel)]=\"consulta_id\" placeholder=\"ID Representante\" (keyup.enter)=\"consultaRepresentanteID()\" />\n          </div>\n          <div class=\"form-group col-md-6\">\n            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"consulta_representante\" name=\"consulta_representante\" placeholder=\"CNPJ ou Razão Social\" (keyup)=\"consultaRepresentante()\" />\n          </div>\n          <div class=\"form-group col-md-4\">\n            <select class=\"form-control input-sm\" [(ngModel)]=\"consulta_categoria\" name=\"consulta_categoria\">\n              <option value=\"\">Categoria</option>\n              <option value=\"Revenda\">Revenda</option>\n              <option value=\"Varejo\">Varejo</option>\n              <option value=\"Engenharia\">Engenharia</option>\n              <option value=\"Home Center\">Home Center</option>\n              <option value=\"Key Account\">Key Account</option>\n              <option value=\"Distribuidor\">Distribuidor</option>\n            </select>\n          </div>\n          <div class=\"form-group col-md-4\">\n            <select class=\"form-control input-sm\" [(ngModel)]=\"consulta_regiao\" name=\"consulta_regiao\">\n              <option value=\"\" >Região</option>\n              <option *ngFor=\"let regiao of regioes\" [value]=\"regiao._id\">{{regiao.nome}}</option>\n            </select>\n          </div>\n          <div class=\"form-group col-md-4\">\n            <input type=\"text\" class=\"form-control input-sm\" name=\"consulta_cidade\" [(ngModel)]=\"consulta_cidade\" placeholder=\"Cidade\" />\n          </div>\n          <div class=\"form-group col-md-2\">\n            <select class=\"form-control input-sm\" [(ngModel)]=\"consulta_estado\" name=\"consulta_estado\" >\n              <option value=\"\">Estado</option> \n              <option *ngFor=\"let uf of estados\" [value]=\"uf.value\">{{uf.value}}</option> \n            </select>\n          </div>\n          <div class=\"form-group col-md-2\">\n            <button *ngIf=\"!representantes\" class=\"btn btn-primary btn-sm btn-block\" (click)=\"consultaRepresentanteMulti()\"><span class=\"glyphicon glyphicon-search\"></span></button>\n            <button *ngIf=\"representantes\" class=\"btn btn-danger btn-sm btn-block\" (click)=\"limpaBusca()\">Nova Consulta</button>\n          </div>\n          <table class=\"table table-striped table-hover col-md-12\" *ngIf=\"representantes\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>CNPJ</th>\n                <th>Nome</th>\n                <th>Local</th>\n                <th>Ação</th>\n              </tr>\n            </thead>\n            <tbody *ngFor=\"let representante of representantes; let i = index\" [attr.data-index]=\"i\">\n              <tr>\n                <td>{{representante._id}}</td>\n                <td class=\"cnpj\">{{representante.cnpj}}</td>\n                <td>{{representante.razao}}</td>\n                <td>{{representante.cidade}}/{{representante.estado}}</td>\n                <td><a style=\"cursor:pointer;\" data-title=\"Visualizar\" data-toggle=\"modal\" data-target=\"#view\" title=\"Visualizar\" (click)=\"infoRepresentante(representante)\"><span class=\"glyphicon glyphicon-info-sign\" style=\"color:blue\"></span></a> &nbsp;&nbsp;&nbsp;\n                <a style=\"cursor:pointer;\" data-title=\"Editar\" data-toggle=\"modal\" data-target=\"#edit\" title=\"Editar\" (click)=\"editRepresentante(representante)\" ><span class=\"glyphicon glyphicon-pencil\" style=\"color:green\"></span></a> &nbsp;&nbsp;&nbsp;\n                <a style=\"cursor:pointer;\" data-title=\"Remover\" data-toggle=\"modal\" data-target=\"#remove\" title=\"Excluir\" ><span class=\"glyphicon glyphicon-trash\" style=\"color:red\"></span></a></td>\n              </tr>\n\n\n            <!--INFO-->\n              <div class=\"modal fade\" id=\"view\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\n                <div class=\"modal-dialog modal-lg\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\n                      <h4 class=\"modal-title custom_align\" id=\"Heading\">Cadastro de Representante</h4>\n                    </div>\n                    <div class=\"modal-body\" style=\"overflow-y: auto; height: auto\">\n                      <div class=\"col-md-4\">\n                        <label for=\"\">ID</label>\n                        <p>{{info._id}}</p>\n                      </div>\n                      <div class=\"col-md-4\">\n                        <label for=\"\">CNPJ</label>\n                        <p class=\"cnpj\">{{info.cnpj}}</p>\n                      </div>\n                      <div class=\"col-md-4\">\n                        <label for=\"\">Insc.Estadual</label>\n                        <p>{{info.insc_estadual}}</p>\n                      </div>\n                      <div class=\"col-md-12\">\n                        <label for=\"\">Razão Social</label>\n                        <p>{{info.razao}}</p>\n                      </div>\n                      <div class=\"col-md-4\">\n                        <label for=\"\">Contato</label>\n                        <p>{{info.contato}}</p>\n                      </div>\n                      <div class=\"col-md-4\">\n                        <label for=\"\">Categoria</label>\n                        <p>{{info.categoria}}</p>\n                      </div>\n                      <div class=\"col-md-4\">\n                        <label for=\"\">Região</label>\n                        <p>{{info.regiao}}</p>\n                      </div>\n                      <div>\n                        <table class=\"table table-striped table-hover\" >\n                          <thead>\n                            <tr>\n                              <th class=\"col-md-4\">Endereço</th>\n                              <th class=\"col-md-2\">Bairro</th>\n                              <th class=\"col-md-2\">Cidade</th>\n                              <th class=\"col-md-1\">Estado</th>\n                              <th class=\"col-md-2\">CEP</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr>\n                              <td>{{info.endereco}}</td>\n                              <td>{{info.bairro}}</td>\n                              <td>{{info.cidade}}</td>\n                              <td>{{info.estado}}</td>\n                              <td class=\"cep\">{{info.cep}}</td>\n                              </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                      <div>\n                        <table class=\"table table-striped table-hover\" >\n                          <thead>\n                            <tr>\n                              <th class=\"col-md-1\">#</th>\n                              <th class=\"col-md-4\">Telefone</th>\n                              <th class=\"col-md-4\">Contato</th>\n                              <th class=\"col-md-3\">Operadora</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr *ngFor=\"let item of info.telefones; let i = index\">\n                              <td>{{i + 1}}</td>\n                              <td class=\"phone\">{{item.telefone}}</td>\n                              <td>{{item.contato_tel}}</td>\n                              <td>{{item.operadora}}</td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                      <div>\n                        <table class=\"table table-striped table-hover\" >\n                          <thead>\n                            <tr>\n                              <th class=\"col-md-1\">#</th>\n                              <th class=\"col-md-11\">Região</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr *ngFor=\"let item of info.regioes; let i = index\">\n                              <td>{{item._id}}</td>\n                              <td>{{item.nome}}</td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                      <div>\n                        <table class=\"table table-striped table-hover\" >\n                          <thead>\n                            <tr>\n                              <th class=\"col-md-1\">#</th>\n                              <th class=\"col-md-11\">Categoria</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr *ngFor=\"let item of info.categorias; let i = index\">\n                              <td>{{i + 1}}</td>\n                              <td>{{item.categoria}}</td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                    </div>\n                    <div class=\"modal-footer \">\n                      <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"><span class=\"glyphicon glyphicon-remove\"> Sair</span></button>\n                    </div>\n                  </div>  \n                </div>\n              </div>\n\n\n\n              <!--EDITAR-->\n              <div class=\"modal fade\" id=\"edit\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\" >\n                <div class=\"modal-dialog modal-lg\">\n                  <div class=\"modal-content\" style=\"overflow: hidden\">\n                    <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\n                      <h4 class=\"modal-title custom_align\" id=\"Heading\">Editar Cadastro de Representante</h4>\n                    </div>\n                    <div class=\"modal-body\" style=\"overflow-y: auto; height: auto\">\n                      <div>\n                      <div class=\"form-group col-md-4\">\n                        <div class=\"input-group\" >\n                          <label for=\"\">CNPJ</label>\n                          <input type=\"text\" class=\"cnpj form-control input-sm\" [(ngModel)]=\"cnpj\" name=\"cnpj\" placeholder=\"CNPJ\" />\n                        </div>\n                      </div>\n                      <div class=\"form-group col-md-4\">\n                        <div class=\"input-group\">\n                          <label for=\"\">Insc. Estadual</label>\n                          <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"insc_estadual\" name=\"insc_estadual\" placeholder=\"Inscrição Estadual\" />\n                        </div>\n                      </div>\n                      <div class=\"form-group col-md-4\">\n                        <div class=\"input-group\">\n                          <label for=\"\">Contato</label>\n                          <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"contato\" name=\"contato\" placeholder=\"Nome para Contato\" />\n                        </div>\n                      </div>\n                      <div class=\"form-group col-md-12\">\n                        <div class=\"input-group\">\n                          <label for=\"\">Razão Social</label>\n                          <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"razao\" name=\"razao\" placeholder=\"Razão Social\" />\n                        </div>\n                      </div>\n                      <div class=\"form-group col-md-8\">\n                        <div class=\"input-group\">\n                          <label for=\"\">Endereço</label>\n                          <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"endereco\" name=\"endereco\" placeholder=\"Endereço\" />\n                        </div>\n                      </div>\n                      <div class=\"form-group col-md-4\">\n                        <div class=\"input-group\">\n                          <label for=\"\">Bairro</label>\n                          <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"bairro\" name=\"bairro\" placeholder=\"Bairro\" />\n                        </div>\n                      </div>\n                      <div class=\"form-group col-md-5\">\n                        <div class=\"input-group\">\n                          <label for=\"\">Cidade</label>\n                          <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"cidade\" name=\"cidade\" placeholder=\"Cidade\" />\n                        </div>\n                      </div>\n                        <div class=\"form-group col-md-3\">\n                        <div class=\"input-group\">\n                          <label for=\"\">UF</label>\n                          <select class=\"form-control input-sm\" [(ngModel)]=\"estado\" name=\"estado\" id=\"estado\" >\n                              <option value=\"\" disabled=true>Selecione o Estado</option> \n                              <option *ngFor=\"let uf of estados\" [value]=\"uf.value\">{{uf.value}}</option> \n                            </select>\n                        </div>\n                      </div>\n                      <div class=\"form-group col-md-4\">\n                        <div class=\"input-group\">\n                          <label for=\"\">CEP</label>\n                          <input type=\"text\" class=\"cep form-control input-sm\" [(ngModel)]=\"cep\" name=\"cep\" placeholder=\"CEP\" />\n                        </div>\n                      </div>\n                      <div class=\"form-group col-md-11\">\n                        <div class=\"input-group\">\n                          <label for=\"\">Região</label>\n                          <select class=\"form-control input-sm\" [(ngModel)]=\"regiaoEdit\" name=\"regiaoEdit\" id=\"regiaoEdit\" >\n                            <option value=\"\" disabled=true label=\"Selecione a Região:\" ></option> \n                            <option *ngFor=\"let regiao of regioes; let i = index\" [value]=\"i\">{{regiao.nome}}</option>\n                          </select>\n                        </div>\n                      </div>\n                      <div class=\"col-md-1\">\n                        <label>Novo</label>\n                        <button class=\"btn btn-primary btn-sm btn-block\" (click)=\"adicionaRegiaoEdit()\"><span class=\"glyphicon glyphicon-plus-sign\"></span></button>\n                      </div>\n                      <div class=\" col-md-12\" *ngIf=\"regArr.length\" >\n                        <table class=\"table table-striped table-hover\" >\n                            <thead>\n                              <tr>\n                                <th class=\"col-md-1\">ID</th>\n                                <th class=\"col-md-11\">Região</th>\n                              </tr>\n                            </thead>\n                            <tbody>\n                              <tr *ngFor=\"let item of regArr; let i = index\">\n                                <td>{{item._id}}</td>\n                                <td>{{item.nome}}</td>\n                                <td><a style=\"cursor:pointer;\" (click)=\"removeRegiaoEdit(item)\" ><span class=\"glyphicon glyphicon-minus\" style=\"color: red\"></span></a></td>\n                              </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                      <div class=\"form-group col-md-11\">\n                        <div class=\"input-group\">\n                          <label for=\"\">Categoria</label><br>\n                          <select class=\"form-control input-sm\" [(ngModel)]=\"categoriaEdit\" name=\"categoriaEdit\" id=\"categoriaEdit\">\n                            <option value=\"\" disabled=true>Selecione uma ou mais opções:</option>\n                            <option value=\"Revenda\">Revenda</option>\n                            <option value=\"Varejo\">Varejo</option>\n                            <option value=\"Engenharia\">Engenharia</option>\n                            <option value=\"Homecenter\">Home Center</option>\n                            <option value=\"Key Account\">Key Account</option>\n                            <option value=\"Distribuidor\">Distribuidor</option>\n                          </select>\n                        </div>\n                      </div>\n                      <div class=\"col-md-1\">\n                        <label>Novo</label>\n                        <button class=\"btn btn-primary btn-sm btn-block\" (click)=\"adicionaCategoriaEdit()\"><span class=\"glyphicon glyphicon-plus-sign\"></span></button>\n                      </div>\n                      <div class=\" col-md-12\" *ngIf=\"catArr.length\" >\n                      <table class=\"table table-striped table-hover\" >\n                            <thead>\n                              <tr>\n                                <th class=\"col-md-1\">#</th>\n                                <th class=\"col-md-11\">Categoria</th>\n                              </tr>\n                            </thead>\n                            <tbody>\n                              <tr *ngFor=\"let item of catArr; let i = index\">\n                                <td>{{i + 1}}</td>\n                                <td>{{item.categoria}}</td>\n                                <td><a style=\"cursor:pointer;\" (click)=\"removeCategoriaEdit(item)\" ><span class=\"glyphicon glyphicon-minus\" style=\"color: red\"></span></a></td>\n                              </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                      <div class=\"form-group col-md-4\">\n                        <div class=\"input-group\">\n                          <label for=\"\">Telefone</label>\n                          <input type=\"text\" class=\"phone form-control input-sm\" [(ngModel)]=\"telefone\" name=\"telefone\" placeholder=\"Telefone\" />\n                        </div>\n                      </div>\n                      <div class=\"form-group col-md-4\">\n                        <div class=\"input-group\">\n                          <label for=\"\">Contato</label>\n                          <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"contato_tel\" name=\"contato_tel\" placeholder=\"Contato\" />\n                        </div>\n                      </div>\n                      <div class=\"form-group col-md-3\">\n                        <div class=\"input-group\">\n                          <label for=\"\">Operadora</label>\n                          <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"operadora\" name=\"operadora\" placeholder=\"Operadora\" />\n                        </div>\n                      </div>\n                      <div class=\"col-md-1\">\n                        <label>Novo</label>\n                        <button class=\"btn btn-primary btn-sm btn-block\" (click)=\"adicionaTelefone()\"><span class=\"glyphicon glyphicon-plus-sign\"></span></button>\n                      </div>\n                      <div class=\" col-md-12\" *ngIf=\"telArr.length\" >\n                      <table class=\"table table-striped table-hover\" >\n                            <thead>\n                              <tr>\n                                <th class=\"col-md-1\">#</th>\n                                <th class=\"col-md-4\">Telefone</th>\n                                <th class=\"col-md-4\">Contato</th>\n                                <th class=\"col-md-3\">Operadora</th>\n                              </tr>\n                            </thead>\n                            <tbody>\n                              <tr *ngFor=\"let item of telArr; let i = index\">\n                                <td>{{i + 1}}</td>\n                                <td class=\"phone\">{{item.telefone}}</td>\n                                <td>{{item.contato_tel}}</td>\n                                <td>{{item.operadora}}</td>\n                                <td><a style=\"cursor:pointer;\" (click)=\"removeTelefone(item)\" ><span class=\"glyphicon glyphicon-minus\" style=\"color:red\"></span></a></td>\n                              </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                      <div class=\"col-md-12\">\n                        <input class=\"btn btn-primary btn-block btn-sm\" (click)=\"modificaRepresentante()\" value=\"CONFIRMAR\">\n                      </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              \n              \n              <!--DELETE-->\n              <div class=\"modal fade\" id=\"remove\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit\" aria-hidden=\"true\">\n                <div class=\"modal-dialog\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\n                      <h4 class=\"modal-title custom_align\" id=\"Heading\">Remover Cadastro de Representante</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                      <div class=\"alert alert-danger\"><span class=\"glyphicon glyphicon-warning-sign\"></span> Deseja remover este cadastro de representante?</div>\n                    </div>\n                    <div class=\"modal-footer \">\n                      <button type=\"button\" class=\"btn btn-success\" ><span class=\"glyphicon glyphicon-ok-sign\" (click)=\"removeRepresentante(representante)\"> Sim</span></button>\n                      <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"><span class=\"glyphicon glyphicon-remove\"> Não</span></button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n\n\n\n            </tbody>\n          </table>\n        </div>\n\n\n\n</div>"

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.firstName}}</h2>\n  <ul>\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n    <li class=\"list-group-item\">Empresa: {{user.idEmpresa}}</li>\n    <li class=\"list-group-item\">Telefone: {{user.telefone}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(396);


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostService = (function () {
    function PostService(http) {
        this.http = http;
    }
    PostService.prototype.adicionaProduto = function (produto) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/produtos/adiciona', produto, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.modificaDesconto = function (desconto) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/produtos/desconto', desconto, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.adicionaCliente = function (cliente) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/clientes/adiciona', cliente, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.consultaClientes = function (consulta_cliente) {
        return this.http.post('http://localhost:3000/clientes/consulta', consulta_cliente)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.consultaClientesID = function (consulta_id) {
        return this.http.post('http://localhost:3000/clientes/consultaid', consulta_id)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.consultaClientesMulti = function (consulta_tmp) {
        return this.http.post('http://localhost:3000/clientes/consultamulti', consulta_tmp)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.modificaCliente = function (cliente) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/clientes/modifica', cliente, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.removeCliente = function (cliente) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/clientes/remove', cliente, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.adicionaRepresentante = function (representante) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/representantes/adiciona', representante, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.consultaRepresentante = function (consulta_representante) {
        return this.http.post('http://localhost:3000/representantes/consulta', consulta_representante)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.consultaRepresentantesID = function (consulta_id) {
        return this.http.post('http://localhost:3000/representantes/consultaid', consulta_id)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.consultaRepresentantesMulti = function (consulta_tmp) {
        return this.http.post('http://localhost:3000/representantes/consultamulti', consulta_tmp)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.modificaRepresentante = function (representante) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/representantes/modifica', representante, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.removeRepresentante = function (representante) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/representantes/remove', representante, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.adicionaRegiao = function (regiao) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/regioes/adiciona', regiao, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.consultaRegiao = function (consulta_regiao) {
        return this.http.post('http://localhost:3000/regioes/consulta', consulta_regiao)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.modificaRegiao = function (regiao) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/regioes/modifica', regiao, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.removeRegiao = function (regiao) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/regioes/remove', regiao, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], PostService);
    return PostService;
    var _a;
}());
//# sourceMappingURL=C:/tmp/intermax/angular-src/src/post.service.js.map

/***/ })

},[735]);
//# sourceMappingURL=main.bundle.map