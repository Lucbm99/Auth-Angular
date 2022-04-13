import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  public formAuth: FormGroup = this._formBuilder.group(
    {
      email: ['dener@vidafullstack.com.br', [Validators.required, Validators.email]],
      password: ['123', [Validators.required]],
    }
  );

  public msgError!: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  public submitForm() {
    if(this.formAuth.valid) {
      this._authService.sign({
        email: this.formAuth.value.email,
        password: this.formAuth.value.password,
      }).subscribe({
        next: (res) => res,
        error: (e) => (this.msgError = e),
      })
    }
  }
}
