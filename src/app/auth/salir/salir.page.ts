import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salir',
  templateUrl: './salir.page.html',
  styleUrls: ['./salir.page.scss'],
})
export class SalirPage implements OnInit {

  constructor( private auth: AuthService,
    private router: Router ) { }

  ngOnInit() {
    this.auth.logout();
      this.router.navigateByUrl('/login');
  
  }

}
