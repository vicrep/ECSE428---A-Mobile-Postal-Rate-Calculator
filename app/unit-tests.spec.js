import {PostalRateServices} from './providers/postal-rate-services/postal-rate-services';

let service = new PostalRateServices();
let data = service.data;


describe('Service data initialization test', () => {

    it('Loaded data is defined', () => expect(data).toBeDefined());
});

describe('Destination test', () => {
    service.setDest(data.canada);
    let dest = service.dest;

    it('Selected Destination is Canada', () => expect(dest.name).toEqual('Canada'));
});

describe('Incorrect parameters test', () => {
    let dimensions = {
        length: 139,
        thickness: 0.2,
        width: 100,
        weight: 10,
    };
    let err = service.getError(dimensions);
    it('Length is too small', () => expect(err).toEqual('Length must be larger than 140 mm.'));
});

describe('Incorrect parameters test', () => {
    let dimensions = {
        length: 160,
        thickness: 0.17,
        width: 100,
        weight: 10,
    };
    let err = service.getError(dimensions);
    it('Thickness is too small', () => expect(err).toEqual('Thickness must be larger than 0.18 mm.'));
});

describe('Incorrect parameters test', () => {
    let dimensions = {
        length: 160,
        thickness: 0.2,
        width: 100,
        weight: 1,
    };
    let err = service.getError(dimensions);
    it('Weight is too small', () => expect(err).toEqual('Weight must be larger than 2 g.'));
});

describe('Incorrect parameters test', () => {
    let dimensions = {
        length: 160,
        thickness: 0.2,
        width: 89,
        weight: 10,
    };
    let err = service.getError(dimensions);
    it('Width is too small', () => expect(err).toEqual('Width must be larger than 90 mm.'));
});

describe('Incorrect parameters test', () => {
    let dimensions = {
        length: 381,
        thickness: 0.2,
        width: 100,
        weight: 10,
    };
    let err = service.getError(dimensions);
    it('Length is too large', () => expect(err).toEqual('Length must be smaller than 380 mm.'));
});

describe('Incorrect parameters test', () => {
    let dimensions = {
        length: 150,
        thickness: 0.2,
        width: 271,
        weight: 10,
    };
    let err = service.getError(dimensions);
    it('Width is too large', () => expect(err).toEqual('Width must be smaller than 270 mm.'));
});

describe('Incorrect parameters test', () => {
    let dimensions = {
        length: 150,
        thickness: 21,
        width: 100,
        weight: 10,
    };
    let err = service.getError(dimensions);
    it('Thickness is too large', () => expect(err).toEqual('Thickness must be smaller than 20 mm.'));
});

describe('Incorrect parameters test', () => {
    let dimensions = {
        length: 150,
        thickness: 10,
        width: 100,
        weight: 501,
    };
    let err = service.getError(dimensions);
    it('Weight is too large', () => expect(err).toEqual('Weight must be smaller than 500 g.'));
});

describe('Check if standard', () => {
    let dimensions = {
        length: 150,
        thickness: 1,
        width: 100,
        weight: 3,
    };
    let isStandard = service.getStandard(dimensions);
    it('Is standard', () => expect(isStandard).toBeTruthy());
});

describe('Check if not standard', () => {
    let dimensions = {
        length: 300,
        thickness: 1,
        width: 100,
        weight: 3,
    };
    let isStandard = service.getStandard(dimensions);
    it('Is standard', () => expect(isStandard).toBeFalsy());
});

describe('Canada, Standard, W<30', () => {
    let dimensions = {
        weight: 3,
    };
    let isStandard = true;
    data.name = 'Canada';
    let price = service.getPrice(dimensions, data, isStandard);
    it('Is 0.85', () => expect(price).toBe(0.85));
});

describe('Canada, Standard, 30<W<50', () => {
    let dimensions = {
        weight: 40,
    };
    let isStandard = true;
    data.name = 'Canada';
    let price = service.getPrice(dimensions, data, isStandard);
    it('Is 1.2', () => expect(price).toBe(1.2));
});

describe('Canada, Non-Standard, W<100', () => {
    let dimensions = {
        weight: 40,
    };
    let isStandard = false;
    data.name = 'Canada';
    let price = service.getPrice(dimensions, data, isStandard);
    it('Is 1.8', () => expect(price).toBe(1.8));
});

describe('Canada, Non-Standard, 100<W<200', () => {
    let dimensions = {
        weight: 150,
    };
    let isStandard = false;
    data.name = 'Canada';
    let price = service.getPrice(dimensions, data, isStandard);
    it('Is 2.95', () => expect(price).toBe(2.95));
});

describe('Canada, Non-Standard, 200<W<300', () => {
    let dimensions = {
        weight: 250,
    };
    let isStandard = false;
    data.name = 'Canada';
    let price = service.getPrice(dimensions, data, isStandard);
    it('Is 4.1', () => expect(price).toBe(4.1));
});

describe('Canada, Non-Standard, 300<W<400', () => {
    let dimensions = {
        weight: 350,
    };
    let isStandard = false;
    data.name = 'Canada';
    let price = service.getPrice(dimensions, data, isStandard);
    it('Is 4.7', () => expect(price).toBe(4.7));
});

describe('Canada, Non-Standard, 400<W<500', () => {
    let dimensions = {
        weight: 450,
    };
    let isStandard = false;
    data.name = 'Canada';
    let price = service.getPrice(dimensions, data, isStandard);
    it('Is 5.05', () => expect(price).toBe(5.05));
});

describe('USA, Standard, W<30', () => {
    let dimensions = {
        weight: 20,
    };
    let isStandard = true;
    data.name = 'USA';
    let price = service.getPrice(dimensions, data, isStandard);
    it('Is 1.2', () => expect(price).toBe(1.2));
});

describe('USA, Standard, 30<W<50', () => {
    let dimensions = {
        weight: 40,
    };
    let isStandard = true;
    data.name = 'USA';
    let price = service.getPrice(dimensions, data, isStandard);
    it('Is 1.8', () => expect(price).toBe(1.8));
});

describe('USA, Non-Standard, W<100', () => {
    let dimensions = {
        weight: 40,
    };
    let isStandard = false;
    data.name = 'USA';
    let price = service.getPrice(dimensions, data, isStandard);
    it('Is 2.95', () => expect(price).toBe(2.95));
});

describe('USA, Non-Standard, 100<W<200', () => {
    let dimensions = {
        weight: 150,
    };
    let isStandard = false;
    data.name = 'USA';
    let price = service.getPrice(dimensions, data, isStandard);
    it('Is 5.15', () => expect(price).toBe(5.15));
});

describe('USA, Non-Standard, 200<W', () => {
    let dimensions = {
        weight: 300,
    };
    let isStandard = false;
    data.name = 'USA';
    let price = service.getPrice(dimensions, data, isStandard);
    it('Is 10.3', () => expect(price).toBe(10.3));
});

describe('International, Standard, W<30', () => {
    let dimensions = {
        weight: 20,
    };
    let isStandard = true;
    data.name = 'International';
    let price = service.getPrice(dimensions, data, isStandard);
    it('Is 2.5', () => expect(price).toBe(2.5));
});

describe('International, Standard, 30<W<50', () => {
    let dimensions = {
        weight: 45,
    };
    let isStandard = true;
    data.name = 'International';
    let price = service.getPrice(dimensions, data, isStandard);
    it('Is 3.6', () => expect(price).toBe(3.6));
});

describe('International, Non-Standard, W<100', () => {
    let dimensions = {
        weight: 85,
    };
    let isStandard = false;
    data.name = 'International';
    let price = service.getPrice(dimensions, data, isStandard);
    it('Is 5.9', () => expect(price).toBe(5.9));
});

describe('International, Non-Standard, 100<W<200', () => {
    let dimensions = {
        weight: 155,
    };
    let isStandard = false;
    data.name = 'International';
    let price = service.getPrice(dimensions, data, isStandard);
    it('Is 10.3', () => expect(price).toBe(10.3));
});

describe('International, Non-Standard, 200<W', () => {
    let dimensions = {
        weight: 355,
    };
    let isStandard = false;
    data.name = 'International';
    let price = service.getPrice(dimensions, data, isStandard);
    it('Is 20.6', () => expect(price).toBe(20.6));
});