import {Page, NavController} from 'ionic/ionic';
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
        this.data = dataServices.dest;
    }
}
