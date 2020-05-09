import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private zone: NgZone,
    private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    // this.authService.authenticate()
    //   .then(() => {
    //     this.zone.run(() => {
    //       this.router.navigate(['/dashboard'], { replaceUrl: true });
    //     });
    //   });
  }

}
