import {Injectable} from 'angular2/core';

/*
 Generated class for the PostalRateServices provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class PostalRateServices {
    constructor() {
        this.data = {
            canada: {
                name: 'Canada',
                standard: {},
                other: {}
            },
            usa: {
                name: 'USA',
                standard: {},
                other: {}
            },
            international: {
                name: 'International',
                standard: {},
                other: {}
            }
        };
        this.dest = null;
        this.type = null;
        this.item = null;

    }

    setDest(dest) {
        this.dest = dest;
    };

    getError(dim) {
        if (dim.length < 140) return 'Length must be larger than 140 mm.';
        if (dim.thickness < 0.18) return 'Thickness must be larger than 0.18 mm.';
        if (dim.weight < 2) return 'Weight must be larger than 2 g.';
        if (dim.width < 90) return 'Width must be larger than 90 mm.';
        if (dim.length > 380) return 'Length must be smaller than 380 mm.';
        if (dim.width > 270) return 'Width must be smaller than 270 mm.';
        if (dim.thickness > 20) return 'Thickness must be smaller than 20 mm.';
        if (dim.weight > 500) return 'Weight must be smaller than 500 g.';
        else return '';
    }

    getStandard(dim) {
        if (140 < dim.length && dim.length < 245 && 90 < dim.width && dim.width < 156
            && 0.18 < dim.thickness && dim.thickness < 5 && 2 < dim.weight && dim.weight < 50) return true;
        else return false;
    }

    getPrice(dim, data, isStandard) {
        if (data.name === 'Canada') {
            if (isStandard) {
                if (dim.weight < 30) return 0.85;
                else return 1.2;
            } else {
                if (dim.weight < 100) return 1.8;
                else if (100 < dim.weight && dim.weight < 200) return 2.95;
                else if (200 < dim.weight && dim.weight < 300) return 4.1;
                else if (300 < dim.weight && dim.weight < 400) return 4.7;
                else return 5.05;
            }
        } else if (data.name === 'USA') {
            if (isStandard) {
                if (dim.weight < 30) return 1.2;
                else return 1.8;
            } else {
                if (dim.weight < 100) return 2.95;
                else if (100 < dim.weight && dim.weight < 200) return 5.15;
                else return 10.3;
            }
        } else if (data.name === 'International') {
            if (isStandard) {
                if (dim.weight < 30) return 2.5;
                else return 3.6;
            } else {
                if (dim.weight < 100) return 5.9;
                else if (100 < dim.weight && dim.weight < 200) return 10.3;
                else return 20.6;
            }
        }
        return 0;
    }
}

