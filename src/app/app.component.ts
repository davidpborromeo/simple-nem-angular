import { Component, OnInit } from '@angular/core';
import {AccountHttp, NEMLibrary, NetworkTypes, Address} from "nem-library";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nem-app';

  ngOnInit() {
    // Initialize NEMLibrary for TEST_NET Network
    NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

    const address = new Address("TBU64P26SEY3OJ6FEBPEVOZR237ZWY2GJMHMKR7W");

    const accountHttp = new AccountHttp();

    accountHttp.getFromAddress(address).subscribe(accountInfoWithMetaData => {
        console.log(accountInfoWithMetaData);
    });
  }
}
