import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CeoService {
  private ceos = [
    { 
      company: 'Tesla, SpaceX', 
      name: 'Elon Musk', 
      financials: '$298.4 B', 
      country: 'United States',
      profilePicture: 'https://via.placeholder.com/100?text=Elon+Musk', // Ide cseréld az igazi képet
      companyLogo: 'https://via.placeholder.com/80?text=Tesla+Logo' // Ide cseréld az igazi logót
    },
    { 
      company: 'Oracle', 
      name: 'Larry Ellison', 
      financials: '$227.9 B', 
      country: 'United States',
      profilePicture: 'https://via.placeholder.com/100?text=Larry+Ellison',
      companyLogo: 'https://via.placeholder.com/80?text=Oracle+Logo'
    },
    { 
      company: 'Amazon', 
      name: 'Jeff Bezos', 
      financials: '$227.6 B', 
      country: 'United States',
      profilePicture: 'https://via.placeholder.com/100?text=Jeff+Bezos',
      companyLogo: 'https://via.placeholder.com/80?text=Amazon+Logo'
    },
    { 
      company: 'Facebook', 
      name: 'Mark Zuckerberg', 
      financials: '$199.6 B', 
      country: 'United States',
      profilePicture: 'https://via.placeholder.com/100?text=Mark+Zuckerberg',
      companyLogo: 'https://via.placeholder.com/80?text=Facebook+Logo'
    },
    { 
      company: 'LVMH', 
      name: 'Bernard Arnault & family', 
      financials: '$158.5 B', 
      country: 'France',
      profilePicture: 'https://via.placeholder.com/100?text=Bernard+Arnault',
      companyLogo: 'https://via.placeholder.com/80?text=LVMH+Logo'
    },
    { 
      company: 'Berkshire Hathaway', 
      name: 'Warren Buffett', 
      financials: '$146.9 B', 
      country: 'United States',
      profilePicture: 'https://via.placeholder.com/100?text=Warren+Buffett',
      companyLogo: 'https://via.placeholder.com/80?text=Berkshire+Hathaway+Logo'
    },
    { 
      company: 'Google', 
      name: 'Larry Page', 
      financials: '$145.6 B', 
      country: 'United States',
      profilePicture: 'https://via.placeholder.com/100?text=Larry+Page',
      companyLogo: 'https://via.placeholder.com/80?text=Google+Logo'
    },
    { 
      company: 'Google', 
      name: 'Sergey Brin', 
      financials: '$139.2 B', 
      country: 'United States',
      profilePicture: 'https://via.placeholder.com/100?text=Sergey+Brin',
      companyLogo: 'https://via.placeholder.com/80?text=Google+Logo'
    },
    { 
      company: 'Semiconductors', 
      name: 'Jensen Huang', 
      financials: '$128.0 B', 
      country: 'United States',
      profilePicture: 'https://via.placeholder.com/100?text=Jensen+Huang',
      companyLogo: 'https://via.placeholder.com/80?text=Semiconductors+Logo'
    },
    { 
      company: 'Microsoft', 
      name: 'Steve Ballmer', 
      financials: '$125.5 B', 
      country: 'United States',
      profilePicture: 'https://via.placeholder.com/100?text=Steve+Ballmer',
      companyLogo: 'https://via.placeholder.com/80?text=Microsoft+Logo'
    },
    { 
      company: 'Zara', 
      name: 'Amancio Ortega', 
      financials: '$121.8 B', 
      country: 'Spain',
      profilePicture: 'https://via.placeholder.com/100?text=Amancio+Ortega',
      companyLogo: 'https://via.placeholder.com/80?text=Zara+Logo'
    },
    { 
      company: 'Dell Technologies', 
      name: 'Michael Dell', 
      financials: '$109.5 B', 
      country: 'United States',
      profilePicture: 'https://via.placeholder.com/100?text=Michael+Dell',
      companyLogo: 'https://via.placeholder.com/80?text=Dell+Technologies+Logo'
    },
    { 
      company: 'Microsoft', 
      name: 'Bill Gates', 
      financials: '$104.8 B', 
      country: 'United States',
      profilePicture: 'https://via.placeholder.com/100?text=Bill+Gates',
      companyLogo: 'https://via.placeholder.com/80?text=Microsoft+Logo'
    },
    { 
      company: 'Bloomberg LP', 
      name: 'Michael Bloomberg', 
      financials: '$104.7 B', 
      country: 'United States',
      profilePicture: 'https://via.placeholder.com/100?text=Michael+Bloomberg',
      companyLogo: 'https://via.placeholder.com/80?text=Bloomberg+LP+Logo'
    },
    { 
      company: 'Walmart', 
      name: 'Rob Walton & family', 
      financials: '$103.4 B', 
      country: 'United States',
      profilePicture: 'https://via.placeholder.com/100?text=Rob+Walton',
      companyLogo: 'https://via.placeholder.com/80?text=Walmart+Logo'
    },
    { 
      company: 'Walmart', 
      name: 'Jim Walton & family', 
      financials: '$102.2 B', 
      country: 'United States',
      profilePicture: 'https://via.placeholder.com/100?text=Jim+Walton',
      companyLogo: 'https://via.placeholder.com/80?text=Walmart+Logo'
    },
    { 
      company: 'Diversified', 
      name: 'Mukesh Ambani', 
      financials: '$99.7 B', 
      country: 'India',
      profilePicture: 'https://via.placeholder.com/100?text=Mukesh+Ambani',
      companyLogo: 'https://via.placeholder.com/80?text=Diversified+Logo'
    },
    { 
      company: 'Walmart', 
      name: 'Alice Walton', 
      financials: '$94.6 B', 
      country: 'United States',
      profilePicture: 'https://via.placeholder.com/100?text=Alice+Walton',
      companyLogo: 'https://via.placeholder.com/80?text=Walmart+Logo'
    },
    { 
      company: 'Telecom', 
      name: 'Carlos Slim Helu & family', 
      financials: '$79.9 B', 
      country: 'Mexico',
      profilePicture: 'https://via.placeholder.com/100?text=Carlos+Slim',
      companyLogo: 'https://via.placeholder.com/80?text=Telecom+Logo'
    },
    { 
      company: 'Koch, Inc.', 
      name: 'Julia Koch & family', 
      financials: '$74.2 B', 
      country: 'United States',
      profilePicture: 'https://via.placeholder.com/100?text=Julia+Koch',
      companyLogo: 'https://via.placeholder.com/80?text=Koch+Logo'
    }
  ];

  getCeos() {
    return this.ceos;
  }
}
