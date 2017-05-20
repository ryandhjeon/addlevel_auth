import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']

})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private alertService: AlertService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.email, this.model.password, this.model.rememberme)
        .subscribe(
            data => {
              this.router.navigate([this.returnUrl]);
            },
            error => {
              this.alertService.error(error);
              this.loading = false;
            });
  }
}

 /*
  authenticate(data) {
    var rootUrl = "ServerURL";

    $(document).ready(function () {
      $('#login-form').on('submit', function (ev) {
        ev.preventDefault();
        var url = rootUrl + $(this).attr("action");
        var data = $(this).serializeArray();
        $.ajax({
          url: url,
          type: "POST",
          dataType: "json",
          data: data,
          contentType: "application/x-www-form-urlencoded; charset=utf-8",
          success: function (qjXHR) {
            // move to another page
          },
          error: function (qjXHR) {
            var errorData = qjXHR.responseJSON;
            // do soemthing with the errors
          }
        });
      });
    });
  }
  */

