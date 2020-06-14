import { Component, OnInit } from '@angular/core';
import { MessagingService } from '@core/services/messaging.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'personal-assistant';
  message: BehaviorSubject<any>;
  constructor(private messagingService: MessagingService) {}

  ngOnInit() {
    this.messagingService.requestPermission();
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;
  }
}
