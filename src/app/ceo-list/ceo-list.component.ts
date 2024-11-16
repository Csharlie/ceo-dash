import { Component, OnInit } from '@angular/core';
import { CeoService } from '../services/ceo.service';

@Component({
  selector: 'app-ceo-list',
  standalone: true,
  imports: [],
  templateUrl: './ceo-list.component.html',
  styleUrl: './ceo-list.component.css'
})

export class CeoListComponent implements OnInit {
  ceos: any[] = [];

  constructor(private ceoService: CeoService) {}

  ngOnInit() {
    this.ceos = this.ceoService.getCeos();
  }
}
