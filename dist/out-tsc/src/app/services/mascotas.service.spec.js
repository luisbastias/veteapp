import { TestBed } from '@angular/core/testing';
import { MascotasService } from './mascotas.service';
describe('MascotasService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(MascotasService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=mascotas.service.spec.js.map