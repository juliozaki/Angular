import { ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})


export class AuthPageComponent implements OnInit {
  errorSession: boolean = false
  formLogin: UntypedFormGroup = new UntypedFormGroup({});

  constructor(private authService: AuthService, private cookie: CookieService,
    private router: Router) { }

  ngOnInit(): void {
    this.formLogin = new UntypedFormGroup(
      {
        email: new UntypedFormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new UntypedFormControl('',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(12)
          ])
      }
    )
  }

  /// user:          pass:
  /// test@test.com  12345678
  sendLogin(): void {
    const { email, password } = this.formLogin.value
    this.authService.sendCredentials(email, password)
      //TODO: 200 <400
      .subscribe(responseOk => { //TODO: Cuando el usuario credenciales Correctas ✔✔
        console.log('Session iniciada correcta', responseOk);
        const { tokenSession, data } = responseOk
        this.cookie.set('token', tokenSession, 4, '/') //TODO:📌📌📌📌
        this.router.navigate(['/', 'tracks'])
      },
        err => {//TODO error 400>=
          this.errorSession = true
          console.log('Ocurrio error con tu email o password');
        })

  }

}