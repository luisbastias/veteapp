import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
let CuponesService = class CuponesService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getcupones() {
        return this.firestore.collection('cupones').snapshotChanges();
    }
    getMascotas() {
        return this.firestore.collection('clientes').snapshotChanges();
    }
};
CuponesService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFirestore])
], CuponesService);
export { CuponesService };
//# sourceMappingURL=cupones.service.js.map