import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CeoService } from './services/ceo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'ceo-dashboard';
  ceos: any[] = [];

  constructor(private ceoService: CeoService) {}

  ngOnInit() {
    this.ceos = this.ceoService.getCeos();
  }
}
