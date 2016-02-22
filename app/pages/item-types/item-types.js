import {Page, NavController, Alert} from 'ionic/ionic';
import {PostalRateServices} from '../../providers/postal-rate-services/postal-rate-services'


/*
 Generated class for the ItemTypesPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Page({
    templateUrl: 'build/pages/item-types/item-types.html',
})
export class ItemTypesPage {
    constructor(nav:NavController, dataServices: PostalRateServices) {
        this.nav = nav;
        this.service = dataServices;
        this.data = dataServices.dest;
        this.dimensions = {
            length: 0,
            thickness: 0,
            width: 0,
            weight: 0,
        }
        this.price = 0;
        this.isStandard = true;
        this.error = '';
    }


    calculatePrice(form) {
        if (form.valid) {
            this.error = this.service.getError(this.dimensions);
            if (this.error === '') {
                this.isStandard = this.service.getStandard(this.dimensions);
                this.price = this.service.getPrice(this.dimensions, this.data, this.isStandard);
                let alert = Alert.create({
                    title: 'PRICE',
                    subTitle: 'The price to ship your package is $' + this.price.toFixed(2) + '.',
                    buttons: ['Ok']
                });
                this.nav.present(alert);
            } else {
                let alert = Alert.create({
                    subTitle: this.error,
                    buttons: ['Ok']
                });
                this.nav.present(alert);
            }
        } else {
            let alert = Alert.create({
                subTitle: 'Please fill in all fields!',
                buttons: ['Ok']
            });
            this.nav.present(alert);
        }
    }
}
