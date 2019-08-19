import * as tslib_1 from "tslib";
import { AngularFirestore } from '@angular/fire/firestore';
import { Component } from '@angular/core';
import { MascotasService } from '../services/mascotas.service';
import { AlertController } from '@ionic/angular';
let ListPage = class ListPage {
    constructor(alertController, service, firestore) {
        this.alertController = alertController;
        this.service = service;
        this.firestore = firestore;
    }
    presentAlert(messagex) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Tratamiento Actual',
                subHeader: 'Rp./',
                message: messagex,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    ngOnInit() {
        this.service.getMascotas().subscribe(actionArray => {
            this.list = actionArray.map(item => {
                return Object.assign({ id: item.payload.doc.id }, item.payload.doc.data());
            });
        });
    }
};
ListPage = tslib_1.__decorate([
    Component({
        selector: 'app-list',
        templateUrl: 'list.page.html',
        styleUrls: ['list.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AlertController, MascotasService,
        AngularFirestore])
], ListPage);
export { ListPage };
//# sourceMappingURL=list.page.js.map