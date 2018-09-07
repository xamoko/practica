import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  constructor( private router:Router){}
  ngOnInit() {
  }
  handleClick() {
    
  }
  /* En esta parte estamos validando los datos para poder loguearnos */
  login(form: NgForm){
    console.log(form.value);
    if(form.value.usuario==='Admin' && form.value.password==='Admin')
    {
      localStorage.setItem('Admin', form.value.usuario);
      this.router.navigate(['inicio']);
    }
  }
}
