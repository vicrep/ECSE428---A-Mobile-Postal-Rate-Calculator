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

    getPrice(item, weight) {
                if (weight < 0) return 0;
                for(var i = 0; i < item.length; i++) {
                    if(weight > item[i].minWeight && weight <= item[i].maxWeight) return item[i].price;
                }
        return 0;

            };

}

