import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MascotasModule  } from "../models/mascotas/mascotas.module";

@Injectable({
  providedIn: 'root'
})
export class MascotasService {
  formData: MascotasModule;

  constructor(private firestore: AngularFirestore) { }

  getMascotas() {
    let value:string = localStorage.getItem('email')
    
    return this.firestore.collection('clientes', ref => ref.where("usuario","==",value)).snapshotChanges();
    
  }
  getTratamientos(idmascota) {
    return this.firestore.collection('clientes/'+idmascota+'/tratamientos',ref => 
    ref.orderBy('ultimav','desc')).snapshotChanges();
    
  }
  getVacunas(idmascota) {
    return this.firestore.collection('clientes/'+idmascota+'/vacunas',ref => 
    ref.orderBy('fecha','desc')).snapshotChanges();
    
  }
}

