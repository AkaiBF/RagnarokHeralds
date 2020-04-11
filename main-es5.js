function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _components_warframes_warframes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/warframes/warframes.component */
    "./src/app/components/warframes/warframes.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_primaries_primaries_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/primaries/primaries.component */
    "./src/app/components/primaries/primaries.component.ts");
    /* harmony import */


    var _components_secondaries_secondaries_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/secondaries/secondaries.component */
    "./src/app/components/secondaries/secondaries.component.ts");
    /* harmony import */


    var _components_melees_melees_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/melees/melees.component */
    "./src/app/components/melees/melees.component.ts");
    /* harmony import */


    var _components_users_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/users/users.component */
    "./src/app/components/users/users.component.ts");
    /* harmony import */


    var _components_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/user-home/user-home.component */
    "./src/app/components/user-home/user-home.component.ts");

    var routes = [{
      path: '',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'portal',
      component: _components_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_9__["UserHomeComponent"]
    }, {
      path: 'warframes',
      component: _components_warframes_warframes_component__WEBPACK_IMPORTED_MODULE_3__["WarframesComponent"]
    }, {
      path: 'primaries',
      component: _components_primaries_primaries_component__WEBPACK_IMPORTED_MODULE_5__["PrimariesComponent"]
    }, {
      path: 'secondaries',
      component: _components_secondaries_secondaries_component__WEBPACK_IMPORTED_MODULE_6__["SecondariesComponent"]
    }, {
      path: 'melees',
      component: _components_melees_melees_component__WEBPACK_IMPORTED_MODULE_7__["MeleesComponent"]
    }, {
      path: 'users',
      component: _components_users_users_component__WEBPACK_IMPORTED_MODULE_8__["UsersComponent"]
    }, {
      path: '**',
      pathMatch: 'full',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'warframe-front';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.sass']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _components_warframes_warframes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/warframes/warframes.component */
    "./src/app/components/warframes/warframes.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_primaries_primaries_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/primaries/primaries.component */
    "./src/app/components/primaries/primaries.component.ts");
    /* harmony import */


    var _components_secondaries_secondaries_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/secondaries/secondaries.component */
    "./src/app/components/secondaries/secondaries.component.ts");
    /* harmony import */


    var _components_users_users_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/users/users.component */
    "./src/app/components/users/users.component.ts");
    /* harmony import */


    var _components_melees_melees_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/melees/melees.component */
    "./src/app/components/melees/melees.component.ts");
    /* harmony import */


    var _components_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/user-home/user-home.component */
    "./src/app/components/user-home/user-home.component.ts");
    /* harmony import */


    var _components_user_navbar_user_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/user-navbar/user-navbar.component */
    "./src/app/components/user-navbar/user-navbar.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_warframes_warframes_component__WEBPACK_IMPORTED_MODULE_6__["WarframesComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _components_primaries_primaries_component__WEBPACK_IMPORTED_MODULE_8__["PrimariesComponent"], _components_secondaries_secondaries_component__WEBPACK_IMPORTED_MODULE_9__["SecondariesComponent"], _components_users_users_component__WEBPACK_IMPORTED_MODULE_10__["UsersComponent"], _components_melees_melees_component__WEBPACK_IMPORTED_MODULE_11__["MeleesComponent"], _components_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_12__["UserHomeComponent"], _components_user_navbar_user_navbar_component__WEBPACK_IMPORTED_MODULE_13__["UserNavbarComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_warframes_warframes_component__WEBPACK_IMPORTED_MODULE_6__["WarframesComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _components_primaries_primaries_component__WEBPACK_IMPORTED_MODULE_8__["PrimariesComponent"], _components_secondaries_secondaries_component__WEBPACK_IMPORTED_MODULE_9__["SecondariesComponent"], _components_users_users_component__WEBPACK_IMPORTED_MODULE_10__["UsersComponent"], _components_melees_melees_component__WEBPACK_IMPORTED_MODULE_11__["MeleesComponent"], _components_user_home_user_home_component__WEBPACK_IMPORTED_MODULE_12__["UserHomeComponent"], _components_user_navbar_user_navbar_component__WEBPACK_IMPORTED_MODULE_13__["UserNavbarComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(userSrv, router) {
        _classCallCheck(this, LoginComponent);

        this.userSrv = userSrv;
        this.router = router;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          var _this = this;

          this.userSrv.login(this.user, this.password).subscribe(function (res) {
            localStorage.setItem('rhusr', res.token);

            _this.router.navigate(['/portal']);
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 20,
      vars: 2,
      consts: [[1, "container"], [1, "row"], [1, "col-md-3"], [1, "col-md-6"], [1, "card"], [1, "card-title", "card-header"], [1, "card-body"], [1, "form-label-group"], ["for", "user"], ["type", "text", "id", "user", "placeholder", "Usuario", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "id", "password", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Usuario:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.user = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Contrase\xF1a:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_17_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Iniciar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: [".card[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown)    ~ label[_ngcontent-%COMP%] {\n  padding-top: calc(var(--input-padding-y) / 3);\n  padding-bottom: calc(var(--input-padding-y)/3);\n  font-size: 12px;\n  color: #777;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9FOlxcUHJveWVjdG9zXFxXZWJcXFdhcmZyYW1lXFxmcm9udFxcd2FyZnJhbWUtZnJvbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGdCQUFBO0FDQ0Q7O0FERUM7RUFDQyw2Q0FBQTtFQUNBLDhDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCBcclxuXHRtYXJnaW4tdG9wOiAyMHB4XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cFxyXG5cdGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIH4gbGFiZWxcclxuXHRcdHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgLyAzKVxyXG5cdFx0cGFkZGluZy1ib3R0b206IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KS8zKVxyXG5cdFx0Zm9udC1zaXplOjEycHhcclxuXHRcdGNvbG9yOiM3NzciLCIuY2FyZCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIH4gbGFiZWwge1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkvMyk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM3Nzc7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.sass']
        }]
      }], function () {
        return [{
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/melees/melees.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/melees/melees.component.ts ***!
    \*******************************************************/

  /*! exports provided: MeleesComponent */

  /***/
  function srcAppComponentsMeleesMeleesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeleesComponent", function () {
      return MeleesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_melee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/melee.service */
    "./src/app/services/melee.service.ts");
    /* harmony import */


    var _user_navbar_user_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user-navbar/user-navbar.component */
    "./src/app/components/user-navbar/user-navbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function MeleesComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MeleesComponent_li_2_Template_select_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var weapon_r16 = ctx.$implicit;
          return weapon_r16.obtained = $event;
        })("change", function MeleesComponent_li_2_Template_select_change_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.saveChanges();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "NUEVA");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "No me interesa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "En b\xFAsqueda");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "En fundici\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Leveando");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Vendido");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Leveada");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Maxeada");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var weapon_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://cdn.warframestat.us/img/" + weapon_r16.imageName, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", weapon_r16.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("form-control option" + weapon_r16.obtained);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", weapon_r16.obtained);
      }
    }

    var MeleesComponent =
    /*#__PURE__*/
    function () {
      function MeleesComponent(redir, meleeSrv) {
        _classCallCheck(this, MeleesComponent);

        this.redir = redir;
        this.meleeSrv = meleeSrv;
        this.data = {
          melees: []
        };
      }

      _createClass(MeleesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          if (!localStorage.getItem('rhusr')) {
            this.redir.navigate(['/login']);
          } else {
            this.meleeSrv.getSaved().subscribe(function (res) {
              _this2.data = res;
            });
            this.meleeSrv.getMelees().subscribe(function (res) {
              var melees = res;
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                var _loop = function _loop() {
                  var melee = _step.value;

                  if (!_this2.data.melees.some(function (x) {
                    return x.name == melee.name;
                  })) {
                    _this2.data.melees.push({
                      name: melee.name,
                      imageName: melee.imageName,
                      obtained: 0
                    });
                  }
                };

                for (var _iterator = melees[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  _loop();
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                    _iterator["return"]();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }

              _this2.data.melees.sort(function (a, b) {
                if (a.name < b.name) return -1;
                return 1;
              });
            });
          }
        }
      }, {
        key: "saveChanges",
        value: function saveChanges() {
          this.meleeSrv.save(this.data).subscribe(function (res) {});
        }
      }]);

      return MeleesComponent;
    }();

    MeleesComponent.ɵfac = function MeleesComponent_Factory(t) {
      return new (t || MeleesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_melee_service__WEBPACK_IMPORTED_MODULE_2__["MeleeService"]));
    };

    MeleesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MeleesComponent,
      selectors: [["app-melees"]],
      decls: 3,
      vars: 1,
      consts: [[1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "row"], [1, "col-md-4"], [3, "src"], [1, "col-md-8"], [3, "ngModel", "ngModelChange", "change"], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"]],
      template: function MeleesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MeleesComponent_li_2_Template, 23, 5, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.melees);
        }
      },
      directives: [_user_navbar_user_navbar_component__WEBPACK_IMPORTED_MODULE_3__["UserNavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]],
      styles: ["img[_ngcontent-%COMP%] {\n  max-height: 50px;\n}\n\n.option4[_ngcontent-%COMP%] {\n  background-color: #00ffff;\n}\n\n.option2[_ngcontent-%COMP%] {\n  background-color: #ffaa00;\n}\n\n.option3[_ngcontent-%COMP%] {\n  background-color: #dadada;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZWxlZXMvRTpcXFByb3llY3Rvc1xcV2ViXFxXYXJmcmFtZVxcZnJvbnRcXHdhcmZyYW1lLWZyb250L3NyY1xcYXBwXFxjb21wb25lbnRzXFxtZWxlZXNcXG1lbGVlcy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tZWxlZXMvbWVsZWVzLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQUE7QUNDRDs7QURDQTtFQUNDLHlCQUFBO0FDRUQ7O0FEQUE7RUFDQyx5QkFBQTtBQ0dEOztBRERBO0VBQ0MseUJBQUE7QUNJRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVsZWVzL21lbGVlcy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ1xyXG5cdG1heC1oZWlnaHQ6NTBweFxyXG5cclxuLm9wdGlvbjRcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZmZmXHJcblxyXG4ub3B0aW9uMlxyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmFhMDBcclxuXHJcbi5vcHRpb24zXHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYSIsImltZyB7XG4gIG1heC1oZWlnaHQ6IDUwcHg7XG59XG5cbi5vcHRpb240IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZmZmZjtcbn1cblxuLm9wdGlvbjIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhYTAwO1xufVxuXG4ub3B0aW9uMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeleesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-melees',
          templateUrl: './melees.component.html',
          styleUrls: ['./melees.component.sass']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_melee_service__WEBPACK_IMPORTED_MODULE_2__["MeleeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/primaries/primaries.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/primaries/primaries.component.ts ***!
    \*************************************************************/

  /*! exports provided: PrimariesComponent */

  /***/
  function srcAppComponentsPrimariesPrimariesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrimariesComponent", function () {
      return PrimariesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_primaries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/primaries.service */
    "./src/app/services/primaries.service.ts");
    /* harmony import */


    var _user_navbar_user_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user-navbar/user-navbar.component */
    "./src/app/components/user-navbar/user-navbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function PrimariesComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PrimariesComponent_li_2_Template_select_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var weapon_r6 = ctx.$implicit;
          return weapon_r6.obtained = $event;
        })("change", function PrimariesComponent_li_2_Template_select_change_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.saveChanges();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "NUEVA");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "No me interesa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "En b\xFAsqueda");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "En fundici\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Leveando");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Vendido");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Leveada");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Maxeada");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var weapon_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://cdn.warframestat.us/img/" + weapon_r6.imageName, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", weapon_r6.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("form-control option" + weapon_r6.obtained);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", weapon_r6.obtained);
      }
    }

    var PrimariesComponent =
    /*#__PURE__*/
    function () {
      function PrimariesComponent(redir, primariesSrv) {
        _classCallCheck(this, PrimariesComponent);

        this.redir = redir;
        this.primariesSrv = primariesSrv;
        this.data = {
          primaries: []
        };
      }

      _createClass(PrimariesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          if (!localStorage.getItem('rhusr')) {
            this.redir.navigate(['/login']);
          } else {
            this.primariesSrv.getSaved().subscribe(function (res) {
              _this3.data = res;
            });
            this.primariesSrv.getPrimaries().subscribe(function (res) {
              var primaries = res;
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                var _loop2 = function _loop2() {
                  var primary = _step2.value;

                  if (!_this3.data.primaries.some(function (x) {
                    return x.name == primary.name;
                  })) {
                    _this3.data.primaries.push({
                      name: primary.name,
                      imageName: primary.imageName,
                      obtained: 0
                    });
                  }
                };

                for (var _iterator2 = primaries[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  _loop2();
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                    _iterator2["return"]();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }

              _this3.data.primaries.sort(function (a, b) {
                if (a.name < b.name) return -1;
                return 1;
              });
            });
          }
        }
      }, {
        key: "saveChanges",
        value: function saveChanges() {
          this.primariesSrv.save(this.data).subscribe(function (res) {});
        }
      }]);

      return PrimariesComponent;
    }();

    PrimariesComponent.ɵfac = function PrimariesComponent_Factory(t) {
      return new (t || PrimariesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_primaries_service__WEBPACK_IMPORTED_MODULE_2__["PrimariesService"]));
    };

    PrimariesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PrimariesComponent,
      selectors: [["app-primaries"]],
      decls: 3,
      vars: 1,
      consts: [[1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "row"], [1, "col-md-4"], [3, "src"], [1, "col-md-8"], [3, "ngModel", "ngModelChange", "change"], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"]],
      template: function PrimariesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PrimariesComponent_li_2_Template, 23, 5, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.primaries);
        }
      },
      directives: [_user_navbar_user_navbar_component__WEBPACK_IMPORTED_MODULE_3__["UserNavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]],
      styles: ["img[_ngcontent-%COMP%] {\n  max-height: 50px;\n}\n\n.option4[_ngcontent-%COMP%] {\n  background-color: #00ffff;\n}\n\n.option2[_ngcontent-%COMP%] {\n  background-color: #ffaa00;\n}\n\n.option3[_ngcontent-%COMP%] {\n  background-color: #dadada;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmltYXJpZXMvRTpcXFByb3llY3Rvc1xcV2ViXFxXYXJmcmFtZVxcZnJvbnRcXHdhcmZyYW1lLWZyb250L3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcmltYXJpZXNcXHByaW1hcmllcy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcmltYXJpZXMvcHJpbWFyaWVzLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQUE7QUNDRDs7QURDQTtFQUNDLHlCQUFBO0FDRUQ7O0FEQUE7RUFDQyx5QkFBQTtBQ0dEOztBRERBO0VBQ0MseUJBQUE7QUNJRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJpbWFyaWVzL3ByaW1hcmllcy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ1xyXG5cdG1heC1oZWlnaHQ6NTBweFxyXG5cclxuLm9wdGlvbjRcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZmZmXHJcblxyXG4ub3B0aW9uMlxyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmFhMDBcclxuXHRcclxuLm9wdGlvbjNcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhIiwiaW1nIHtcbiAgbWF4LWhlaWdodDogNTBweDtcbn1cblxuLm9wdGlvbjQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZmZmO1xufVxuXG4ub3B0aW9uMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmFhMDA7XG59XG5cbi5vcHRpb24zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrimariesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-primaries',
          templateUrl: './primaries.component.html',
          styleUrls: ['./primaries.component.sass']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_primaries_service__WEBPACK_IMPORTED_MODULE_2__["PrimariesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/secondaries/secondaries.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/secondaries/secondaries.component.ts ***!
    \*****************************************************************/

  /*! exports provided: SecondariesComponent */

  /***/
  function srcAppComponentsSecondariesSecondariesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecondariesComponent", function () {
      return SecondariesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_secondaries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/secondaries.service */
    "./src/app/services/secondaries.service.ts");
    /* harmony import */


    var _user_navbar_user_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user-navbar/user-navbar.component */
    "./src/app/components/user-navbar/user-navbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function SecondariesComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SecondariesComponent_li_2_Template_select_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var weapon_r11 = ctx.$implicit;
          return weapon_r11.obtained = $event;
        })("change", function SecondariesComponent_li_2_Template_select_change_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.saveChanges();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "NUEVA");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "No me interesa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "En b\xFAsqueda");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "En fundici\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Leveando");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Vendido");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Leveada");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Maxeada");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var weapon_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://cdn.warframestat.us/img/" + weapon_r11.imageName, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", weapon_r11.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("form-control option" + weapon_r11.obtained);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", weapon_r11.obtained);
      }
    }

    var SecondariesComponent =
    /*#__PURE__*/
    function () {
      function SecondariesComponent(redir, secondariesSrv) {
        _classCallCheck(this, SecondariesComponent);

        this.redir = redir;
        this.secondariesSrv = secondariesSrv;
        this.data = {
          secondaries: []
        };
      }

      _createClass(SecondariesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          if (!localStorage.getItem('rhusr')) {
            this.redir.navigate(['/login']);
          } else {
            this.secondariesSrv.getSaved().subscribe(function (res) {
              _this4.data = res;
            });
            this.secondariesSrv.getSecondaries().subscribe(function (res) {
              var secondaries = res;
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                var _loop3 = function _loop3() {
                  var secondary = _step3.value;

                  if (!_this4.data.secondaries.some(function (x) {
                    return x.name == secondary.name;
                  })) {
                    _this4.data.secondaries.push({
                      name: secondary.name,
                      imageName: secondary.imageName,
                      obtained: 0
                    });
                  }
                };

                for (var _iterator3 = secondaries[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  _loop3();
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                    _iterator3["return"]();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }

              _this4.data.secondaries.sort(function (a, b) {
                if (a.name < b.name) return -1;
                return 1;
              });
            });
          }
        }
      }, {
        key: "saveChanges",
        value: function saveChanges() {
          this.secondariesSrv.save(this.data).subscribe(function (res) {});
        }
      }]);

      return SecondariesComponent;
    }();

    SecondariesComponent.ɵfac = function SecondariesComponent_Factory(t) {
      return new (t || SecondariesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_secondaries_service__WEBPACK_IMPORTED_MODULE_2__["SecondariesService"]));
    };

    SecondariesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SecondariesComponent,
      selectors: [["app-secondaries"]],
      decls: 3,
      vars: 1,
      consts: [[1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "row"], [1, "col-md-4"], [3, "src"], [1, "col-md-8"], [3, "ngModel", "ngModelChange", "change"], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"]],
      template: function SecondariesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SecondariesComponent_li_2_Template, 23, 5, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.secondaries);
        }
      },
      directives: [_user_navbar_user_navbar_component__WEBPACK_IMPORTED_MODULE_3__["UserNavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]],
      styles: ["img[_ngcontent-%COMP%] {\n  max-height: 50px;\n}\n\n.option4[_ngcontent-%COMP%] {\n  background-color: #00ffff;\n}\n\n.option2[_ngcontent-%COMP%] {\n  background-color: #ffaa00;\n}\n\n.option3[_ngcontent-%COMP%] {\n  background-color: #dadada;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWNvbmRhcmllcy9FOlxcUHJveWVjdG9zXFxXZWJcXFdhcmZyYW1lXFxmcm9udFxcd2FyZnJhbWUtZnJvbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNlY29uZGFyaWVzXFxzZWNvbmRhcmllcy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZWNvbmRhcmllcy9zZWNvbmRhcmllcy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGdCQUFBO0FDQ0Q7O0FEQ0E7RUFDQyx5QkFBQTtBQ0VEOztBREFBO0VBQ0MseUJBQUE7QUNHRDs7QUREQTtFQUNDLHlCQUFBO0FDSUQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlY29uZGFyaWVzL3NlY29uZGFyaWVzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nXHJcblx0bWF4LWhlaWdodDo1MHB4XHJcblxyXG4ub3B0aW9uNFxyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMGZmZmZcclxuXHJcbi5vcHRpb24yXHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmYWEwMFxyXG5cdFxyXG4ub3B0aW9uM1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGEiLCJpbWcge1xuICBtYXgtaGVpZ2h0OiA1MHB4O1xufVxuXG4ub3B0aW9uNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGZmZmY7XG59XG5cbi5vcHRpb24yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWEwMDtcbn1cblxuLm9wdGlvbjMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecondariesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-secondaries',
          templateUrl: './secondaries.component.html',
          styleUrls: ['./secondaries.component.sass']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_secondaries_service__WEBPACK_IMPORTED_MODULE_2__["SecondariesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/user-home/user-home.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/user-home/user-home.component.ts ***!
    \*************************************************************/

  /*! exports provided: UserHomeComponent */

  /***/
  function srcAppComponentsUserHomeUserHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserHomeComponent", function () {
      return UserHomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _user_navbar_user_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../user-navbar/user-navbar.component */
    "./src/app/components/user-navbar/user-navbar.component.ts");

    var UserHomeComponent =
    /*#__PURE__*/
    function () {
      function UserHomeComponent() {
        _classCallCheck(this, UserHomeComponent);
      }

      _createClass(UserHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserHomeComponent;
    }();

    UserHomeComponent.ɵfac = function UserHomeComponent_Factory(t) {
      return new (t || UserHomeComponent)();
    };

    UserHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserHomeComponent,
      selectors: [["app-user-home"]],
      decls: 3,
      vars: 0,
      template: function UserHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bienvenid@!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_user_navbar_user_navbar_component__WEBPACK_IMPORTED_MODULE_1__["UserNavbarComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1ob21lL3VzZXItaG9tZS5jb21wb25lbnQuc2FzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-home',
          templateUrl: './user-home.component.html',
          styleUrls: ['./user-home.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/user-navbar/user-navbar.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/user-navbar/user-navbar.component.ts ***!
    \*****************************************************************/

  /*! exports provided: UserNavbarComponent */

  /***/
  function srcAppComponentsUserNavbarUserNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserNavbarComponent", function () {
      return UserNavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/warframes"];
    };

    var _c1 = function _c1() {
      return ["/primaries"];
    };

    var _c2 = function _c2() {
      return ["/secondaries"];
    };

    var _c3 = function _c3() {
      return ["/melees"];
    };

    var UserNavbarComponent =
    /*#__PURE__*/
    function () {
      function UserNavbarComponent() {
        _classCallCheck(this, UserNavbarComponent);
      }

      _createClass(UserNavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserNavbarComponent;
    }();

    UserNavbarComponent.ɵfac = function UserNavbarComponent_Factory(t) {
      return new (t || UserNavbarComponent)();
    };

    UserNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserNavbarComponent,
      selectors: [["app-user-navbar"]],
      decls: 19,
      vars: 8,
      consts: [[1, "navbar", "navbar-dark", "bg-dark", "navbar-expand-lg"], ["href", "#", 1, "navbar-brand"], ["src", "/docs/4.0/assets/brand/bootstrap-solid.svg", "width", "30", "height", "30", "alt", ""], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], ["routerLinkActive", "warframes", 1, "nav-link", 3, "routerLink"], ["routerLinkActive", "primaries", 1, "nav-link", 3, "routerLink"], ["routerLinkActive", "secondaries", 1, "nav-link", 3, "routerLink"], ["routerLinkActive", "melees", 1, "nav-link", 3, "routerLink"]],
      template: function UserNavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Warframes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Primarias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Secundarias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Melee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1uYXZiYXIvdXNlci1uYXZiYXIuY29tcG9uZW50LnNhc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserNavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-navbar',
          templateUrl: './user-navbar.component.html',
          styleUrls: ['./user-navbar.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/users/users.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/users/users.component.ts ***!
    \*****************************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppComponentsUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var UsersComponent =
    /*#__PURE__*/
    function () {
      function UsersComponent(userSrv) {
        _classCallCheck(this, UsersComponent);

        this.userSrv = userSrv;
      }

      _createClass(UsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "register",
        value: function register() {
          this.userSrv.register(this.user, this.password).subscribe(function (res) {});
        }
      }]);

      return UsersComponent;
    }();

    UsersComponent.ɵfac = function UsersComponent_Factory(t) {
      return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
    };

    UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UsersComponent,
      selectors: [["app-users"]],
      decls: 10,
      vars: 2,
      consts: [[1, "list-group"], [1, "list-group-item"], [1, "row"], [1, "col-md-4"], ["type", "text", "id", "user", "placeholder", "Usuario", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "id", "password", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 3, "click"]],
      template: function UsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.user = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_8_listener() {
            return ctx.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Guardar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNhc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-users',
          templateUrl: './users.component.html',
          styleUrls: ['./users.component.sass']
        }]
      }], function () {
        return [{
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/warframes/warframes.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/warframes/warframes.component.ts ***!
    \*************************************************************/

  /*! exports provided: WarframesComponent */

  /***/
  function srcAppComponentsWarframesWarframesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WarframesComponent", function () {
      return WarframesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_warframes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/warframes.service */
    "./src/app/services/warframes.service.ts");
    /* harmony import */


    var _user_navbar_user_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user-navbar/user-navbar.component */
    "./src/app/components/user-navbar/user-navbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function WarframesComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WarframesComponent_li_2_Template_select_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var warframe_r1 = ctx.$implicit;
          return warframe_r1.obtained = $event;
        })("change", function WarframesComponent_li_2_Template_select_change_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.saveChanges();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "NUEVO");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "No me interesa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "En b\xFAsqueda");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "En fundici\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Leveando");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Vendido");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Leveado");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Maxeado");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var warframe_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://cdn.warframestat.us/img/" + warframe_r1.imageName, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", warframe_r1.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("form-control option" + warframe_r1.obtained);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", warframe_r1.obtained);
      }
    }

    var WarframesComponent =
    /*#__PURE__*/
    function () {
      function WarframesComponent(redir, warframesSrv) {
        _classCallCheck(this, WarframesComponent);

        this.redir = redir;
        this.warframesSrv = warframesSrv;
        this.data = {
          warframes: []
        };
      }

      _createClass(WarframesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          if (!localStorage.getItem('rhusr')) {
            this.redir.navigate(['/login']);
          } else {
            this.warframesSrv.getSaved().subscribe(function (res) {
              _this5.data = res;
            });
            this.warframesSrv.getWarframes().subscribe(function (res) {
              var warframes = res;
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                var _loop4 = function _loop4() {
                  var warframe = _step4.value;

                  if (!_this5.data.warframes.some(function (x) {
                    return x.name == warframe.name;
                  })) {
                    _this5.data.warframes.push({
                      name: warframe.name,
                      imageName: warframe.imageName,
                      obtained: 0
                    });
                  }
                };

                for (var _iterator4 = warframes[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  _loop4();
                }
              } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                    _iterator4["return"]();
                  }
                } finally {
                  if (_didIteratorError4) {
                    throw _iteratorError4;
                  }
                }
              }

              _this5.data.warframes.sort(function (a, b) {
                if (a.name < b.name) return -1;
                return 1;
              });
            });
          }
        }
      }, {
        key: "saveChanges",
        value: function saveChanges() {
          this.warframesSrv.save(this.data).subscribe(function (res) {});
        }
      }]);

      return WarframesComponent;
    }();

    WarframesComponent.ɵfac = function WarframesComponent_Factory(t) {
      return new (t || WarframesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_warframes_service__WEBPACK_IMPORTED_MODULE_2__["WarframesService"]));
    };

    WarframesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WarframesComponent,
      selectors: [["app-warframes"]],
      decls: 3,
      vars: 1,
      consts: [[1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "row"], [1, "col-md-4"], [3, "src"], [1, "col-md-8"], [3, "ngModel", "ngModelChange", "change"], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"]],
      template: function WarframesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WarframesComponent_li_2_Template, 23, 5, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.warframes);
        }
      },
      directives: [_user_navbar_user_navbar_component__WEBPACK_IMPORTED_MODULE_3__["UserNavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]],
      styles: ["img[_ngcontent-%COMP%] {\n  max-height: 50px;\n}\n\n.option4[_ngcontent-%COMP%] {\n  background-color: #00ffff;\n}\n\n.option2[_ngcontent-%COMP%] {\n  background-color: #ffaa00;\n}\n\n.option3[_ngcontent-%COMP%] {\n  background-color: #dadada;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93YXJmcmFtZXMvRTpcXFByb3llY3Rvc1xcV2ViXFxXYXJmcmFtZVxcZnJvbnRcXHdhcmZyYW1lLWZyb250L3NyY1xcYXBwXFxjb21wb25lbnRzXFx3YXJmcmFtZXNcXHdhcmZyYW1lcy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy93YXJmcmFtZXMvd2FyZnJhbWVzLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQUE7QUNDRDs7QURDQTtFQUNDLHlCQUFBO0FDRUQ7O0FEQUE7RUFDQyx5QkFBQTtBQ0dEOztBRERBO0VBQ0MseUJBQUE7QUNJRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2FyZnJhbWVzL3dhcmZyYW1lcy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ1xyXG5cdG1heC1oZWlnaHQ6NTBweFxyXG5cdFxyXG4ub3B0aW9uNFxyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMGZmZmZcclxuXHJcbi5vcHRpb24yXHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmYWEwMFxyXG5cdFxyXG4ub3B0aW9uM1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGEiLCJpbWcge1xuICBtYXgtaGVpZ2h0OiA1MHB4O1xufVxuXG4ub3B0aW9uNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGZmZmY7XG59XG5cbi5vcHRpb24yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWEwMDtcbn1cblxuLm9wdGlvbjMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WarframesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-warframes',
          templateUrl: './warframes.component.html',
          styleUrls: ['./warframes.component.sass']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_warframes_service__WEBPACK_IMPORTED_MODULE_2__["WarframesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/melee.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/melee.service.ts ***!
    \*******************************************/

  /*! exports provided: MeleeService */

  /***/
  function srcAppServicesMeleeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeleeService", function () {
      return MeleeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var MeleeService =
    /*#__PURE__*/
    function () {
      function MeleeService(net) {
        _classCallCheck(this, MeleeService);

        this.net = net;
      }

      _createClass(MeleeService, [{
        key: "getMelees",
        value: function getMelees() {
          return this.net.get('https://ragnarokheralds.herokuapp.com/rhapi/v1/melees/list');
        }
      }, {
        key: "save",
        value: function save(data) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', localStorage.getItem('rhusr'));
          return this.net.post('https://ragnarokheralds.herokuapp.com/rhapi/v1/melees/save', {
            data: data
          }, {
            headers: headers
          });
        }
      }, {
        key: "getSaved",
        value: function getSaved() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', localStorage.getItem('rhusr'));
          return this.net.get('https://ragnarokheralds.herokuapp.com/rhapi/v1/melees/getmine', {
            headers: headers
          });
        }
      }]);

      return MeleeService;
    }();

    MeleeService.ɵfac = function MeleeService_Factory(t) {
      return new (t || MeleeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    MeleeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MeleeService,
      factory: MeleeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeleeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/primaries.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/primaries.service.ts ***!
    \***********************************************/

  /*! exports provided: PrimariesService */

  /***/
  function srcAppServicesPrimariesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrimariesService", function () {
      return PrimariesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var PrimariesService =
    /*#__PURE__*/
    function () {
      function PrimariesService(net) {
        _classCallCheck(this, PrimariesService);

        this.net = net;
      }

      _createClass(PrimariesService, [{
        key: "getPrimaries",
        value: function getPrimaries() {
          return this.net.get('https://ragnarokheralds.herokuapp.com/rhapi/v1/primaries/list');
        }
      }, {
        key: "save",
        value: function save(data) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', localStorage.getItem('rhusr'));
          return this.net.post('https://ragnarokheralds.herokuapp.com/rhapi/v1/primaries/save', {
            data: data
          }, {
            headers: headers
          });
        }
      }, {
        key: "getSaved",
        value: function getSaved() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', localStorage.getItem('rhusr'));
          return this.net.get('https://ragnarokheralds.herokuapp.com/rhapi/v1/primaries/getmine', {
            headers: headers
          });
        }
      }]);

      return PrimariesService;
    }();

    PrimariesService.ɵfac = function PrimariesService_Factory(t) {
      return new (t || PrimariesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    PrimariesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PrimariesService,
      factory: PrimariesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrimariesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/secondaries.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/secondaries.service.ts ***!
    \*************************************************/

  /*! exports provided: SecondariesService */

  /***/
  function srcAppServicesSecondariesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecondariesService", function () {
      return SecondariesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SecondariesService =
    /*#__PURE__*/
    function () {
      function SecondariesService(net) {
        _classCallCheck(this, SecondariesService);

        this.net = net;
      }

      _createClass(SecondariesService, [{
        key: "getSecondaries",
        value: function getSecondaries() {
          return this.net.get('https://ragnarokheralds.herokuapp.com/rhapi/v1/secondaries/list');
        }
      }, {
        key: "save",
        value: function save(data) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', localStorage.getItem('rhusr'));
          return this.net.post('https://ragnarokheralds.herokuapp.com/rhapi/v1/secondaries/save', {
            data: data
          }, {
            headers: headers
          });
        }
      }, {
        key: "getSaved",
        value: function getSaved() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', localStorage.getItem('rhusr'));
          return this.net.get('https://ragnarokheralds.herokuapp.com/rhapi/v1/secondaries/getmine', {
            headers: headers
          });
        }
      }]);

      return SecondariesService;
    }();

    SecondariesService.ɵfac = function SecondariesService_Factory(t) {
      return new (t || SecondariesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    SecondariesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SecondariesService,
      factory: SecondariesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecondariesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(net) {
        _classCallCheck(this, UserService);

        this.net = net;
      }

      _createClass(UserService, [{
        key: "login",
        value: function login(user, pwd) {
          return this.net.post('https://ragnarokheralds.herokuapp.com/rhapi/v1/users/login', {
            user: user,
            password: pwd
          });
        }
      }, {
        key: "register",
        value: function register(user, pwd) {
          return this.net.post('https://ragnarokheralds.herokuapp.com/rhapi/v1/users/register', {
            user: user,
            password: pwd
          });
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/warframes.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/warframes.service.ts ***!
    \***********************************************/

  /*! exports provided: WarframesService */

  /***/
  function srcAppServicesWarframesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WarframesService", function () {
      return WarframesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var WarframesService =
    /*#__PURE__*/
    function () {
      function WarframesService(net) {
        _classCallCheck(this, WarframesService);

        this.net = net;
      }

      _createClass(WarframesService, [{
        key: "getWarframes",
        value: function getWarframes() {
          return this.net.get('https://ragnarokheralds.herokuapp.com/rhapi/v1/warframes/list');
        }
      }, {
        key: "save",
        value: function save(data) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', localStorage.getItem('rhusr'));
          return this.net.post('https://ragnarokheralds.herokuapp.com/rhapi/v1/warframes/save', {
            data: data
          }, {
            headers: headers
          });
        }
      }, {
        key: "getSaved",
        value: function getSaved() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', localStorage.getItem('rhusr'));
          return this.net.get('https://ragnarokheralds.herokuapp.com/rhapi/v1/warframes/getmine', {
            headers: headers
          });
        }
      }]);

      return WarframesService;
    }();

    WarframesService.ɵfac = function WarframesService_Factory(t) {
      return new (t || WarframesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    WarframesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: WarframesService,
      factory: WarframesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WarframesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Proyectos\Web\Warframe\front\warframe-front\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map