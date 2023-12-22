import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Audi R8',
      'cool car',
      'https://www.automobile-club.org/content/image/resize/1200/original/AUDI_R8_GT_RWD_5.jpg',
      new Date(),
      0
    );
    this.myOtherSnap = new FaceSnap(
      'Another Audi R8',
      'Cool car, again',
      'https://images.caradisiac.com/images/8/7/3/3/198733/S1-audi-r8-gt-rwd-732551.jpg',
      new Date(),
      0
    );
  }
}