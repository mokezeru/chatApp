import { Component, OnInit, OnDestroy } from '@angular/core';
import { Registration, avaliableChatRooms } from '../models/registration.model';
import { RegisterService } from 'src/app/services/register.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registration-view',
  templateUrl: './registration-view.component.html',
  styleUrls: ['./registration-view.component.css']
})
export class RegistrationViewComponent implements OnInit, OnDestroy {

  registration: Registration = {
    screenName: ''
  };
  templateChatRooms = avaliableChatRooms;

  regSubscription: Subscription;
  constructor(private regService: RegisterService) { }

  ngOnInit() {
    this.regSubscription =
    this.regService.registration$.subscribe(reg=>{
      console.log("Registration Subscription", reg);
      this.registration=reg;
    });
  }

  registerChatter(){
    console.log("For Form Submit", this.registration);
  }

  ngOnDestroy(){
  this.regSubscription.unsubscribe;
}
}
