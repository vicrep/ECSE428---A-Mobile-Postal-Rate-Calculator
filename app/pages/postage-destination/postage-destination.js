import {Page, NavController} from 'ionic/ionic';
import {ItemTypesPage} from '../item-types/item-types';
import {PostalRateServices} from '../../providers/postal-rate-services/postal-rate-services'

/*
 Generated class for the PostageDestinationPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Page({
    templateUrl: 'build/pages/postage-destination/postage-destination.html',
})
export class PostageDestinationPage {
    constructor(nav: NavController, dataServices: PostalRateServices) {
        this.nav = nav;
        this.service = dataServices;
        this.data = this.service.data;
        console.log(this.data);
    }
    setDestination(dest) {
        this.service.setDest(dest);
        this.nav.push(ItemTypesPage, {dest: dest});
    }
}
