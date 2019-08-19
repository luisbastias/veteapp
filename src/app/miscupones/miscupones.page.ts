import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MascotasModule } from '../models/mascotas/mascotas.module';
import { MascotasService } from '../services/mascotas.service';
import { AlertController } from '@ionic/angular';
import { CuponesModule } from '../models/cupones/cupones/cupones.module';
import { CuponesuModule } from '../models/cuponesu/cuponesu.module';
import { CuponesService } from '../services/cupones.service';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-miscupones',
  templateUrl: './miscupones.page.html',
  styleUrls: ['./miscupones.page.scss'],
})
export class MiscuponesPage implements OnInit {
  list: CuponesuModule[];
  constructor(public alertController: AlertController, private service: MascotasService,
    private firestore: AngularFirestore, private service2: CuponesService,private router:Router) {

}

  ngOnInit() {

    this.service2.getMiscupones().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as CuponesuModule;
      });
      console.log(this.list)
    });
  }

}
