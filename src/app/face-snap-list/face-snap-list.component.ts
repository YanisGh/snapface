import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  ngOnInit() {
    this.faceSnaps = [
      {
        title : 'Audi R8',
        description : 'cool car',
        imageUrl : 'https://cdn.drivek.com/configurator-imgs/cars/fr/Original/AUDI/R8/38695_COUPE-2-DOORS/audi-r8-coupe-2018-front-1.jpg',
        createdDate: new Date(),
        snaps: 0,
        location : 'Zarzis'
      },
      {
        title : 'Another Audi R8',
        description : 'cool car, again',
        imageUrl : 'https://images.caradisiac.com/images/8/7/3/3/198733/S1-audi-r8-gt-rwd-732551.jpg',
        createdDate: new Date(),
        snaps: 0,
      }
    ]
  }
}
