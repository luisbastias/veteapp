import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CuponesPage } from './cupones.page';
const routes = [
    {
        path: '',
        component: CuponesPage
    }
];
let CuponesPageModule = class CuponesPageModule {
};
CuponesPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [CuponesPage]
    })
], CuponesPageModule);
export { CuponesPageModule };
//# sourceMappingURL=cupones.module.js.map