import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isActiveMenu: boolean = true;

  accionMenu(){
    this.isActiveMenu ? (document.getElementById('menu')?.classList.add('mover-contenedor'),
    this.isActiveMenu = false,
    setTimeout(() => {
      document.getElementById('menu')?.classList.add('index')
    }, 500)) : 
    ((document.getElementById('menu')?.classList.remove('index')),
    this.isActiveMenu = true,
    setTimeout(() => {
      document.getElementById('menu')?.classList.remove('mover-contenedor')
    }, 100)
    )
  }
}
