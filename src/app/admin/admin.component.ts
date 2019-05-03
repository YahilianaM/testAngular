import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  

  public data: Object[];
  public filterSettings:Object;

  constructor(private User: UserService, 
    private router: Router) { }
  ngOnInit() {
    this.filterSettings = { type: 'Menu' };

    
  /*
      this.User.getDataUser().subscribe(data => {
        if(data.success) {
          this.data=data.data;
        } else {
          this.router.navigate(['home'])
        }
      })*/
    
    this.data = [
      { BookingId: 10248, firstName: 'VINET', bookingTime: 32.38, streetAddress: 'France', bookingPrice: '2'  },
      { BookingId: 10249, firstName: 'TOMSP', bookingTime: 11.61, streetAddress: ' Germany', bookingPrice: '3'},
      { BookingId: 10250, firstName: 'HANAR', bookingTime: 65.83, streetAddress: 'Brazil', PrecbookingPriceio: '4' },
      { BookingId: 10251, firstName: 'VICTE', bookingTime: 41.34, streetAddress: 'France', bookingPrice: '5' },
      { BookingId: 10252, firstName: 'SUPRD', bookingTime: 51.3, streetAddress: 'Belgium', bookingPrice: '6' },
      ];
  }

}
