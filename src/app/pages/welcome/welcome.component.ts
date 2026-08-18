import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class WelcomeComponent {
  constructor(private readonly router: Router) {}

  start(): void {
    void this.router.navigateByUrl('/home');
  }

  signIn(): void {
    // Cambia esta ruta por '/login' cuando exista la pantalla de acceso.
    void this.router.navigateByUrl('/home');
  }
}
