import { Component } from '@angular/core';
import { ModeService } from '../../services/mode.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';


interface ColorsPalette {
  toolbar: string,
  content: string,
  sidenav: string,
  icon: string,
  text: string,
  button: string,
  button1: string,
  button2: string,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  isExpanded: boolean;
  settingsColor: ColorsPalette;
  themeColor: string;

  constructor(private modeService: ModeService, public iconRegistry: MatIconRegistry, public sanitizer: DomSanitizer, private router: Router) {
    this.iconRegistry.addSvgIcon("user", this.sanitizer.bypassSecurityTrustResourceUrl('assets/icon/user.svg'));
    this.iconRegistry.addSvgIcon("project", this.sanitizer.bypassSecurityTrustResourceUrl('assets/icon/project.svg'));
    this.iconRegistry.addSvgIcon("cv", this.sanitizer.bypassSecurityTrustResourceUrl('assets/icon/cv.svg'));

    var root = document.documentElement;
    root.style.setProperty('--color-sf-primary', '#385AE9');
    this.isExpanded = false;
    this.themeColor = '#1E52D9';
    this.settingsColor = this.modeService.getMode();
  }

  NavigateHome() {
    this.router.navigate(['/Home']);
  }

  NavigateCV() {
    this.router.navigate(['/Curriculum']);
  }

  ExpandSidenav() {
    // Sidenav is closed
    if(!this.isExpanded){
      this.isExpanded = true;
    }
    else {
      this.isExpanded = false;
    }
  }

  ChangeMode(newMode: string){
    this.modeService.setMode(newMode);
    this.settingsColor = this.modeService.getMode();
  }

  ChangeColor(color: string) {
    this.modeService.setTheme(color);
    var root = document.documentElement;
    this.themeColor = color;
    root.style.setProperty('--color-sf-primary', color);
    
  }
}
