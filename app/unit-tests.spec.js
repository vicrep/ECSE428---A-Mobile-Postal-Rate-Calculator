import {PostalRateServices} from './providers/postal-rate-services/postal-rate-services';

let service = new PostalRateServices();
let data = service.data;


describe('Service data initialization test', () => {

    let dest = service.dest;
    let type = service.type;
    let item = service.item;

    it('Loaded data is defined', () => expect(data).toBeDefined());
    it('Destination object is null', () => expect(dest).toBeNull());
    it('Type Object is null', () => expect(type).toBeNull());
    it('Item Object is null', () => expect(item).toBeNull());
});

describe('Destination Test', () => {
    service.setDest(data.canada);

    let dest = service.dest;

    it('Selected Destination is Canada', () => expect(dest.name).toEqual('Canada'));
});