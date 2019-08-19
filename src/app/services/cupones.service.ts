import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CuponesModule  } from "../models/cupones/cupones/cupones.module";
import { MascotasModule  } from "../models/mascotas/mascotas.module";
@Injectable({
  providedIn: 'root'
})
export class CuponesService {
  formData:CuponesModule;
  formDatam:MascotasModule;
  constructor(private firestore: AngularFirestore) { }
  getCuponesusados() {
    return this.firestore.collection('cuponusado').snapshotChanges();
    
  }
  getMiscupones() {
    return this.firestore.collection('cuponusado',ref => ref.where('usado', '==', false)).snapshotChanges();
    
  }
  getcupones() {
    return this.firestore.collection('cupones').snapshotChanges();
    
  }
  getMascotas() {
    let value:string = localStorage.getItem('email')
    return this.firestore.collection('clientes', ref => ref.where("usuario","==",value)).snapshotChanges();
    
  }
  
 
}