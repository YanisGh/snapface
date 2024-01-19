import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor(private http: HttpClient) {}

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

    getAllFaceSnaps(): Observable<FaceSnap[]> {
      return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

    getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
      return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
  }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        // const faceSnap = this.getFaceSnapById(faceSnapId);
        // snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
    
    addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) {
      const faceSnap: FaceSnap = {
          ...formValue,
          snaps: 0,
          createdDate: new Date(),
          id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
      };
      this.faceSnaps.push(faceSnap);
    }
}