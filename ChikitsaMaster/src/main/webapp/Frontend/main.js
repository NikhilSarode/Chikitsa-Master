(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(userServices) {
        this.userServices = userServices;
        this.title = 'Chikitsa Master';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.userServices.getUsersUrls();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserServices"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_11__);












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing__WEBPACK_IMPORTED_MODULE_5__["routing"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_11__["FlashMessagesModule"]
            ],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserServices"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_11__["FlashMessagesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: r, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");




var r = [
    { path: "", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: "signup", component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(r);


/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\t\t<header class=\"container\">\n        <div class=\"logo\">\n          <img src=\"../../../assets/css/img/logo.png\">\n        </div>\n        <nav>\n          <ul>\n            <li><a [routerLink]=\"['/login']\">Login</a>\n            <li><a [routerLink]=\"['/signup']\" id=\"signup\">Sign Up</a></li>\t\n          </ul>\n        </nav>\n      </header>\n  \n      <!-- MODAL STARTS -->\n      <!-- \t<div class=\"modal\" id=\"modal_role\">\n      <div class=\"custom_modal\">\n        <h1>Whats your role ?</h1>\n        <div class=\"modal_content\">\n          <a href=\"#\">\n            <img src=\"../../../assets/css/img/role_patient.png\">\n            <h3>Patient</h3>\n          </a>\n          <a href=\"#\">\n            <img src=\"../../../assets/css/img/role_clerk.png\">\n            <h3>Clerk</h3>\n          </a>\n          <a href=\"#\">\n            <img src=\"../../../assets/css/img/role_doctor.png\">\n            <h3>Doctor</h3>\n          </a>\n        </div>\n      </div>\n    </div> -->\n      <!-- MODAL ENDS -->\n      <main class=\"container content\" >\n          \n          <section class=\"hero\">\n              <h1>Best in class treatment, in your neighbourhood</h1>\n              <p>Get a quick checkup at your nearest Chikitsa centre,and get consulted by the emiment doctors of the country, Track status, ask queries hassle free.</p>\n              <a  data-toggle=\"modal\" data-target=\"#modalSocial\">Get Started- It's Free</a>\n            </section>\n            <div class=\"device\">\n              <figure>\n                <img src=\"../../../assets/css/img/landing_graphic.png\" alt=\"iconography\">\n              </figure>\n            </div>\n          \n      \n          <!--Modal: modalSocial-->\n      <div class=\"modal fade\" id=\"modalSocial\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog cascading-modal\" role=\"document\">\n      \n          <!--Content-->\n          <div class=\"modal-content\" >\n      \n            <!--Header-->\n            <div class=\"modal-header light-blue darken-3 white-text\">\n              <h4 class=\"title\"><i class=\"fa fa-users\"></i> Choose Your Role</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n            </div>\n      \n            <!--Body-->\n            <div class=\"modal-body mb-0 text-center\" style=\"display: flex;\">\n      \n                <!-- Card -->\n      <a href=\"#!/signup\" >          \n      <div class=\"card\" style=\"margin-right:1.5em\">\n      \n        <!-- Card image -->\n        <img class=\"card-img-top\" src=\"../../../assets/css/img/patienticon.png\">\n      \n        <!-- Card content -->\n        <div class=\"card-body\">\n      \n          <!-- Title -->\n          <h4 class=\"card-title\"><a>Patient</a></h4>\n          <!-- Text -->\n          <!-- Button -->\n         <!--  <a href=\"#\" class=\"btn btn-primary\">Button</a> -->\n      \n        </div>\n      \n      </div>\n      </a>\n      <!-- Card -->\n             \n      <!-- Card -->\n      <div class=\"card\" style=\"margin-right:1.5em\">\n      \n        <!-- Card image -->\n        <img class=\"card-img-top\"  src=\"../../../assets/css/img/clerkicon.png\">\n      \n        <!-- Card content -->\n        <div class=\"card-body\">\n      \n          <!-- Title -->\n          <h4 class=\"card-title\"><a>Executive</a></h4>\n          <!-- Text -->\n         \n          <!-- Button -->\n         \n      \n        </div>\n      \n      </div>\n      <!-- Card -->\n      \n      <!-- Card -->\n      <div class=\"card\">\n      \n        <!-- Card image -->\n        <img class=\"card-img-top\"  src=\"../../../assets/css/img/doctoricon.png\">\n      \n        <!-- Card content -->\n        <div class=\"card-body\">\n      \n          <!-- Title -->\n          <h4 class=\"card-title\"><a>Doctor</a></h4>\n          <!-- Text -->\n          \n          <!-- Button -->\n         \n      \n        </div>\n      \n      </div>\n      <!-- Card -->\n      \n            </div>\n      \n          </div>\n          <!--/.Content-->\n      \n        </div>\n      </div>\n      <!--Modal: modalSocial-->\n      \n        <!-- <section class=\"hero\">\n          <h1>Best in class treatment, in your neighbourhood</h1>\n          <p>Get a quick checkup at your nearest Chikitsa centre,and get consulted by the emiment doctors of the country, Track status, ask queries hassle free.</p>\n          <a  data-toggle=\"modal\" data-target=\"#modalSocial\">Get Started- It's Free</a>\n        </section>\n        <div class=\"device\">\n          <figure>\n            <img src=\"../../../assets/css/img/landing_graphic.png\" alt=\"iconography\">\n          </figure>\n        </div> -->\n      </main>\n  "

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parentsignup\" >\n  <!-- Default form login -->\n  <form class=\"text-center border border-light p-5\" [formGroup]=\"loginForm\">\n  \n    <p class=\"h4 mb-4\">Sign in</p>\n\n    <!-- Email -->\n    <input type=\"email\" id=\"defaultLoginFormEmail\" class=\"form-control mb-4\" placeholder=\"Email\" formControlName=\"username\">\n    <!-- Password -->\n    <input type=\"password\" id=\"defaultLoginFormPassword\" class=\"form-control mb-4\" placeholder=\"Password\" formControlName=\"password\">\n\n    <div class=\"d-flex justify-content-around\">\n        <div>\n            <!-- Remember me -->\n            <div class=\"custom-control custom-checkbox\">\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"defaultLoginFormRemember\">\n                <label class=\"custom-control-label\" for=\"defaultLoginFormRemember\">Remember me</label>\n            </div>\n        </div>\n        <div>\n            <!-- Forgot password -->\n            <a href=\"\">Forgot password?</a>\n        </div>\n    </div>\n\n    <!-- Sign in button -->\n    <button class=\"btn btn-info btn-block my-4\" type=\"submit\" (click)=\"onSubmit()\">Sign in</button>\n\n    <!-- Register -->\n    <!-- <p>Not a member?\n        <a href=\"\">Register</a>\n    </p> -->\n\n    <!-- Social login -->\n    <!-- <p>or sign in with:</p>\n\n    <a type=\"button\" class=\"light-blue-text mx-2\">\n        <i class=\"fa fa-facebook\"></i>\n    </a>\n    <a type=\"button\" class=\"light-blue-text mx-2\">\n        <i class=\"fa fa-twitter\"></i>\n    </a>\n    <a type=\"button\" class=\"light-blue-text mx-2\">\n        <i class=\"fa fa-linkedin\"></i>\n    </a>\n    <a type=\"button\" class=\"light-blue-text mx-2\">\n        <i class=\"fa fa-github\"></i>\n    </a> -->\n\n</form>\n</div>\n<!-- Default form login -->"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, userService) {
        this.fb = fb;
        this.userService = userService;
        this.loginForm = fb.group({
            "username": [],
            'password': [],
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        console.log(this.loginForm.value);
        this.userService.login(this.loginForm.value).subscribe(function (res) {
            console.log(res);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserServices"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Default form register -->\n<div class=\"parentsignup\" >\n  <form class=\"text-center border border-light p-5\" [formGroup]=\"signupForm\">\n  \n      <p class=\"h4 mb-4\">Sign up</p>\n   \n      <div class=\"form-row mb-4\" >\n          <div class=\"col\">\n              <!-- First name -->\n              <input type=\"text\" id=\"defaultRegisterFormFirstName\" class=\"form-control\" placeholder=\"First name\" formControlName=\"fname\">\n          </div>\n          <div class=\"col\">\n              \n              <input type=\"text\" id=\"defaultRegisterFormLastName\" class=\"form-control\" placeholder=\"Last name\" formControlName=\"lname\">\n          </div>\n      </div>\n  \n      <!--AdharID -->\n      <input type=\"text\" id=\"defaultRegisterFormAadhar\" class=\"form-control mb-4\" placeholder=\"AadharID\" formControlName=\"aadharID\">\n\n      \n      <!-- E-mail -->\n      <input type=\"text\" id=\"defaultRegisterFormEmail\" class=\"form-control mb-4\" placeholder=\"Email\" formControlName=\"email\">\n  \n      <!-- Password -->\n      <input type=\"password\" id=\"defaultRegisterFormPassword\" class=\"form-control\" placeholder=\"Password\" aria-describedby=\"defaultRegisterFormPasswordHelpBlock\" formControlName=\"password\">\n      <small id=\"defaultRegisterFormPasswordHelpBlock\" class=\"form-text text-muted mb-4\">\n          At least 8 characters and 1 digit\n      </small>\n  \n      <!-- Phone number -->\n      <input type=\"text\" id=\"defaultRegisterPhonePassword\" class=\"form-control\" placeholder=\"Phone number\" aria-describedby=\"defaultRegisterFormPhoneHelpBlock\" formControlName=\"phone\">\n      <small id=\"defaultRegisterFormPhoneHelpBlock\" class=\"form-text text-muted mb-4\">\n          Optional - for two step authentication\n      </small>\n  \n      <!-- Newsletter -->\n      <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"defaultRegisterFormNewsletter\">\n          <label class=\"custom-control-label\" for=\"defaultRegisterFormNewsletter\">Subscribe to our newsletter</label>\n      </div>\n  \n      <!-- Sign up button -->\n      <button class=\"btn btn-info my-4 btn-block\" type=\"submit\" (click)=\"onSubmit()\">Sign up</button>\n  \n      <!-- Social register -->\n      <!-- <p>or sign up with:</p>\n  \n      <a type=\"button\" class=\"light-blue-text mx-2\">\n          <i class=\"fa fa-facebook\"></i>\n      </a>\n      <a type=\"button\" class=\"light-blue-text mx-2\">\n          <i class=\"fa fa-twitter\"></i>\n      </a>\n      <a type=\"button\" class=\"light-blue-text mx-2\">\n          <i class=\"fa fa-linkedin\"></i>\n      </a>\n      <a type=\"button\" class=\"light-blue-text mx-2\">\n          <i class=\"fa fa-github\"></i>\n      </a> -->\n  \n      <hr>\n  \n      <!-- Terms of service -->\n      <!-- <p>By clicking\n          <em>Sign up</em> you agree to our\n          <a href=\"\" target=\"_blank\">terms of service</a> and\n          <a href=\"\" target=\"_blank\">terms of service</a>. </p> -->\n          <flash-messages></flash-messages>\n  </form>\n  <!-- Default form register -->\n</div>\n "

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, userServices, flashMessage) {
        this.fb = fb;
        this.userServices = userServices;
        this.flashMessage = flashMessage;
        this.signupForm = fb.group({
            'fname': [],
            'lname': [],
            'aadharID': [],
            'phone': [],
            'password': [],
            'email': []
        });
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        var result = this.userServices.signup(this.signupForm.value).subscribe(function (res) {
            _this.flashMessage.show(res.toString());
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserServices"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/config/config.ts":
/*!**********************************!*\
  !*** ./src/app/config/config.ts ***!
  \**********************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.API_ENDPOINT = "http://localhost:8080/SpringMVCSecurity";
    Constants.API_ENDPOINT_users = "http://localhost:8080/SpringMVCSecurity/users";
    Constants.signup = "signup";
    return Constants;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServices", function() { return UserServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");




var UserServices = /** @class */ (function () {
    function UserServices(http) {
        this.http = http;
    }
    UserServices.prototype.getUsersUrls = function () {
        var _this = this;
        return this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_3__["Constants"].API_ENDPOINT_users).subscribe(function (res) {
            var arr = res;
            for (var i = 0; i < arr.length; i++) {
                if (res[i] !== undefined) {
                    if (res[i].rel == _config_config__WEBPACK_IMPORTED_MODULE_3__["Constants"].signup) {
                        _this.signupURL = res[i].href;
                    }
                }
            }
        });
    };
    UserServices.prototype.signup = function (user) {
        //let headers=new HttpHeaders();
        return this.http.post(this.signupURL, user);
    };
    UserServices.prototype.login = function (loginDetails) {
        var loginURL = _config_config__WEBPACK_IMPORTED_MODULE_3__["Constants"].API_ENDPOINT + "/login?username=" + loginDetails.username + "&password=" + loginDetails.password;
        return this.http.post(loginURL, {}, { responseType: 'text', observe: 'response' });
    };
    UserServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserServices);
    return UserServices;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ChikitsaMaster\FrontEnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map