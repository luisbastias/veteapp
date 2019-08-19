import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MascotasModule } from '../models/mascotas/mascotas.module';
import { VacunasModule } from '../models/vacunas/vacunas.module';
import { MascotasService } from '../services/mascotas.service';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-vacunas',
  templateUrl: './vacunas.page.html',
  styleUrls: ['./vacunas.page.scss'],
})
export class VacunasPage implements OnInit {

  constructor(public alertController: AlertController,private service: MascotasService,
    private firestore: AngularFirestore,private rutaActiva: ActivatedRoute) { }
    list: VacunasModule [];
   
  ngOnInit() {
    
      this.service.getVacunas(this.rutaActiva.snapshot.params.id).subscribe(actionArray => {
        this.list = actionArray.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          } as VacunasModule;
        })
        
      });
     
  }

}
