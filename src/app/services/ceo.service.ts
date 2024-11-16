import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CeoService {
  private ceos = [
    {
      name: 'Elon Musk',
      company: 'Tesla, SpaceX',
      financials: '$1.2 trillion',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg'
    },
    {
      name: 'Tim Cook',
      company: 'Apple',
      financials: '$2.9 trillion',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Visit_of_Tim_Cook_to_the_European_Commission_-_P061904-946789.jpg/480px-Visit_of_Tim_Cook_to_the_European_Commission_-_P061904-946789.jpg'
    },
    // Add more CEOs here...
  ];

  getCeos() {
    return this.ceos;
  }
}
