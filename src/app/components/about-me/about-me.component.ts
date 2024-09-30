import { Component } from '@angular/core';
import { ModeService } from '../../services/mode.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

interface ColorsPalette {
  toolbar: string,
  content: string,
  sidenav: string,
  icon: string,
  text: string,
  button: string,
  button1: string,
  button2: string,
  card: string,
  div1: string,
}

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  settingsColor: ColorsPalette;
  themeColor: string;

  constructor(private modeService: ModeService, public iconRegistry: MatIconRegistry, public sanitizer: DomSanitizer) {
    this.iconRegistry.addSvgIcon("email", this.sanitizer.bypassSecurityTrustResourceUrl('assets/icon/email.svg'));
    this.iconRegistry.addSvgIcon("github", this.sanitizer.bypassSecurityTrustResourceUrl('assets/icon/github.svg'));
    this.iconRegistry.addSvgIcon("linkedin", this.sanitizer.bypassSecurityTrustResourceUrl('assets/icon/linkedin.svg'));

    this.settingsColor = this.modeService.getMode();
    this.themeColor = '#1E52D9';
  }

  ngOnInit(): void {
    this.modeService.mode$.subscribe(mode => {
      this.settingsColor = this.modeService.getMode();
    });

    this.modeService.theme$.subscribe(theme => {
      this.themeColor = this.modeService.getTheme();
    });
  }

  RedirectLinkedin() {
    window.open("https://www.linkedin.com/in/laura-scigliano2001");
  }

  RedirectGitHub() {
    window.open("https://github.com/LauraS2001");
  }

}
