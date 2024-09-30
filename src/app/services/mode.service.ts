import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class ModeService {

  public darkMode: ColorsPalette;
  public lightMode: ColorsPalette;
  public Mode: string;
  // BehaviorSubject per tenere traccia del tema attuale
  private modeSubject = new BehaviorSubject<string>('dark');
  private themeSubject = new BehaviorSubject<string>('#1E52D9');
  // Observable che i componenti possono sottoscrivere per ottenere aggiornamenti del tema
  public mode$ = this.modeSubject.asObservable();
  public theme$ = this.themeSubject.asObservable();

  constructor() {
    this.darkMode =  {
      toolbar: '#0F172A',
      content: '#1E293B',
      sidenav: '#FFFFFF',
      icon: '#94A3B8',
      text: '#FFFFFF',
      button: '#293445',
      button1: '',
      button2: '',
      card: '#334155',
      div1: '#0F172A',
    }
    this.lightMode = {
      toolbar: '#FFFFFF',
      // content: '#F1F5F9',
      content: '#E2E8F0',
      sidenav: '#FFFFFF',
      icon: '#94A3B8',
      text: '#1E293B',
      button: '#F2F4F6',
      button1: '',
      button2: '',
      card:'#FFFFFF',
      div1: '#E2E8F0',
    }
    this.Mode = 'light';
  }

  // Cambia il tema e aggiorna il BehaviorSubject
  setMode(newMode: string): void {
    this.modeSubject.next(newMode);
  }

  // Restituisce la palette di colori in base al tema attuale
  getMode(): ColorsPalette {
    const currentMode = this.modeSubject.getValue();
    return currentMode === 'light' ? this.lightMode : this.darkMode;
  }

  setTheme(newTheme: string): void {
    this.themeSubject.next(newTheme);
  }

  getTheme(): string {
    const currentTheme = this.themeSubject.getValue();
    return currentTheme;
  }

}
