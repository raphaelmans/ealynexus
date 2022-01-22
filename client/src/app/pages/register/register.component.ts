import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  firstName=''
  lastName=''
  email = '';
  password = ''
  confirmPassword = ''
  err =''
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  register(){
    if(this.password !== this.confirmPassword){
      this.err = 'Passwords do not match'
    }else{
      this.apiService.registerUser(this.firstName,this.lastName,this.email,this.password)
      this.router.navigate(['/login'])
    }
  }

}
