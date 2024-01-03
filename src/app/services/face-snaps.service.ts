import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
        id : 1,
        title : 'Audi R8',
        description : 'cool car',
        imageUrl : 'https://cdn.drivek.com/configurator-imgs/cars/fr/Original/AUDI/R8/38695_COUPE-2-DOORS/audi-r8-coupe-2018-front-1.jpg',
        createdDate: new Date(),
        snaps: 0,
        location : 'Zarzis'
      },
      {
        id: 2,
        title : 'Another Audi R8',
        description : 'cool car, again',
        imageUrl : 'https://images.caradisiac.com/images/8/7/3/3/198733/S1-audi-r8-gt-rwd-732551.jpg',
        createdDate: new Date(),
        snaps: 0,
      }
  ]

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
      }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
}