import {App, Platform} from 'ionic/ionic';
import {PostageDestinationPage} from './pages/postage-destination/postage-destination';
import {PostalRateServices} from './providers/postal-rate-services/postal-rate-services';


@App({
    template: '<ion-nav [root]="rootPage"></ion-nav>',
    providers: [PostalRateServices],
    config: {} // http://ionicframework.com/docs/v2/api/config/Config/

})
export class MyApp {
    constructor(platform: Platform) {
        this.rootPage = PostageDestinationPage;

        platform.ready().then(() => {
            // The platform is now ready. Note: if this callback fails to fire, follow
            // the Troubleshooting guide for a number of possible solutions:
            //
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //
            // First, let's hide the keyboard accessory bar (only works natively) since
            // that's a better default:
            //
            // Keyboard.setAccessoryBarVisible(false);
            //
            // For example, we might change the StatusBar color. This one below is
            // good for dark backgrounds and light text:
            // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
        });
    }
}
