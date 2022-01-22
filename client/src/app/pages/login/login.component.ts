import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  err = '';
  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async login() {
    try {
      const res = (await this.apiService
        .loginUser(this.email, this.password)
        .toPromise()) as any;

      if (res.success && res.data) {
        const data = res.data as any;
        this.userService.setUser(
          data._id,
          data.firstName,
          data.lastName,
          data.email
        );

        this.router.navigate(['/scholarships']);
      }
    } catch (e) {
      this.err = (e as any).error.error;
    }
  }
}
