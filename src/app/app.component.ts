import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-adriano';

  items: Observable<any[]>;

  constructor(private firestore: AngularFirestore) { }
  ngOnInit() {
  this.items = this.firestore.collection('Data').valueChanges();
  }

}
