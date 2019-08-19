import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
let MascotasService = class MascotasService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getMascotas() {
        return this.firestore.collection('clientes').snapshotChanges();
    }
};
MascotasService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFirestore])
], MascotasService);
export { MascotasService };
//# sourceMappingURL=mascotas.service.js.map