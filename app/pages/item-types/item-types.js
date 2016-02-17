import {Page, NavController, NavParams} from 'ionic/ionic';

/*
 Generated class for the ItemTypesPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Page({
    templateUrl: 'build/pages/item-types/item-types.html',
})
export class ItemTypesPage {
    constructor(nav:NavController, params:NavParams) {
        this.nav = nav;
        this.data = params.get('dest');
        this.name = params.get('name');
    }
}
