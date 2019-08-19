import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { MascotasModule } from '../models/mascotas/mascotas.module';
import { TratamientosModule } from '../models/tratamientos/tratamientos.module';
import { MascotasService } from '../services/mascotas.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss'],
})


export class ListPage implements OnInit {
 
  list: MascotasModule[];
  list2: TratamientosModule[];
  constructor(public alertController: AlertController,private service: MascotasService,
    private firestore: AngularFirestore) { }
    
    async presentAlert(messagex) {
      const alert = await this.alertController.create({
        header: 'Tratamiento Actual',
        subHeader: 'Rp./',
        message: messagex,
        buttons: ['OK']
      });
  
      await alert.present();
    }
  ngOnInit() {
    this.service.getMascotas().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as MascotasModule;
      })
    console.log(this.list)
    });
    
  }

  // onEdit(emp: Employee) {
  //   this.service.formData = Object.assign({}, emp);
  // }

  // onDelete(id: string) {
  //   if (confirm("Are you sure to delete this record?")) {
  //     this.firestore.doc('employees/' + id).delete();
  //     this.toastr.warning('Deleted successfully','EMP. Register');
  //   }
  // }

}

