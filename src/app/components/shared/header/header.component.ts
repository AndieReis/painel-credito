import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() title = '';

  isOffline = false;

  ngOnInit(): void {
    this.isOffline = !navigator.onLine;
  }

  @HostListener('window:online')
  onOnline(): void {
    this.isOffline = false;
  }

  @HostListener('window:offline')
  onOffline(): void {
    this.isOffline = true;
  }
}
