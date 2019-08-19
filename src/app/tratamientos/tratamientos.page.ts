import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MascotasModule } from '../models/mascotas/mascotas.module';
import { TratamientosModule } from '../models/tratamientos/tratamientos.module';
import { MascotasService } from '../services/mascotas.service';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-tratamientos',
  templateUrl: './tratamientos.page.html',
  styleUrls: ['./tratamientos.page.scss'],
})
export class TratamientosPage implements OnInit {

  constructor(public alertController: AlertController,private service: MascotasService,
    private firestore: AngularFirestore,private rutaActiva: ActivatedRoute) { }
    list: TratamientosModule [];
   
  ngOnInit() {
    
      this.service.getTratamientos(this.rutaActiva.snapshot.params.id).subscribe(actionArray => {
        this.list = actionArray.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          } as TratamientosModule;
        })
        
      });
     
  }

}
