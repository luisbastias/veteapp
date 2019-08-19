import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MascotasService } from '../services/mascotas.service';
import { AlertController } from '@ionic/angular';
import { CuponesService } from '../services/cupones.service';
let CuponesPage = class CuponesPage {
    constructor(alertController, service, firestore, service2) {
        this.alertController = alertController;
        this.service = service;
        this.firestore = firestore;
        this.service2 = service2;
    }
    ngOnInit() {
        this.service.getMascotas().subscribe(actionArray => {
            this.list = actionArray.map(item => {
                return Object.assign({ id: item.payload.doc.id }, item.payload.doc.data());
            });
        });
        this.service2.getcupones().subscribe(actionArray => {
            this.list2 = actionArray.map(item => {
                return Object.assign({ id: item.payload.doc.id }, item.payload.doc.data());
            });
        });
    }
};
CuponesPage = tslib_1.__decorate([
    Component({
        selector: 'app-cupones',
        templateUrl: './cupones.page.html',
        styleUrls: ['./cupones.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AlertController, MascotasService,
        AngularFirestore, CuponesService])
], CuponesPage);
export { CuponesPage };
//# sourceMappingURL=cupones.page.js.map