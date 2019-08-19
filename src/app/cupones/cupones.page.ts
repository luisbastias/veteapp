import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MascotasModule } from '../models/mascotas/mascotas.module';
import { MascotasService } from '../services/mascotas.service';
import { AlertController } from '@ionic/angular';
import { CuponesModule } from '../models/cupones/cupones/cupones.module';
import { CuponesuModule } from '../models/cuponesu/cuponesu.module';
import { CuponesService } from '../services/cupones.service';
import { RouterModule, Router } from '@angular/router';
import { timeout } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cupones',
  templateUrl: './cupones.page.html',
  styleUrls: ['./cupones.page.scss'],
})

export class CuponesPage implements OnInit {
  list: MascotasModule[];
  list2: CuponesModule[];
  list3: CuponesuModule[];
  list4: any[];
  
  constructor(public alertController: AlertController, private service: MascotasService,
              private firestore: AngularFirestore, private service2: CuponesService,private router:Router) {

  }
  
  makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 
 cuponnumber(cupx,messagex,desdecup,hastacup,nombrecup,valorcup) {
  Swal.fire({title:'Su cupon es:',text:cupx,
  onClose: () => {
    
    this.canjeocupon(messagex,cupx,desdecup,hastacup,nombrecup,valorcup)
    
  }
  })
  

}

canjearcupon(messagex,desdecup,hastacup,nombrecup,valorcup){
Swal.fire({
 
  title: 'Obtener Cupon',
  text: "Atencion recomendamos utilizar este cupon al momento de realizar la compra",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, adelante',
  cancelButtonText: 'Cancelar'
}).then((result) => {
  
  if (result.value)
   {
          
      this.cuponnumber(this.makeid(8),messagex,desdecup,hastacup,nombrecup,valorcup)
     
    }
})
}
  
  getcuo() {
  return this.list2;

}

canjeocupon(cuponx,cupx,desdecup,hastacup,nombrecup,valorcup) {
  
  const value: string = localStorage.getItem('email');
  const idusuario: string = localStorage.getItem('idlocal');
  const date: any = new Date();

  this.firestore.collection('cuponusado').add({usado: false, codigo: cupx, idcupon: cuponx, usuariomail: value, fecha: date, idusuario: idusuario,desde:desdecup, hasta:hastacup,nombre:nombrecup,valor:valorcup})
  .then(function(){window.location.reload()})
 
 
}

ngOnInit() {
  const result2: any[] = [];
  this.service.getMascotas().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as MascotasModule;
      });
    });
  this.service2.getCuponesusados().subscribe(actionArray => {
      this.list3 = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as CuponesuModule;
      });
    });
  this.service2.getcupones().subscribe(actionArray => {
      this.list2 = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as CuponesModule;
      });
      const yFilter = this.list3.map(itemY => itemY.idcupon);
      this.list4 = this.list2.filter(idx => !yFilter.includes(idx.id));
      console.log(this.list4);
    });


  }

}


