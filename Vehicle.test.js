import { expect } from 'chai';
import Sinon, { stub } from 'sinon';
import { getFullVehicleByName, getAllVehicles, getVehicleByBrand } from './Vehicle';
import Brand from './Brand'

let brandStub;

describe("get all vehicles", () => {
    it("should return all vehicles", () => {
        const result = getAllVehicles();
        expect(result.length).to.equal(3);
    });
});

describe("get all vehicles by name", () => {
    const sandbox = Sinon.createSandbox()
    const brand = {
        name: 'BMW', founded: 1990
    }

    beforeEach(() => {
        brandStub = sandbox.stub(Brand, "getBrandByName").returns(brand)
    })

    afterEach(() => {
        sandbox.restore();
    });

    const vehicle = {
        name: '320i',
        year: 2020,
        price: 28000,
        type: 'BMW',
        brand: { name: 'BMW', founded: 1990 }
    }
    it("should return vehicle by name ", () => {
        const result = getFullVehicleByName("BMW");
        expect(Brand.getBrandByName.called).to.be.true;
        expect(Brand.getBrandByName.callCount).to.equal(1)
        // expect(Brand.getBrandByName.firstCall.args).to.equal(["BMW"])
        expect(result).deep.equal(vehicle)
    });

    it('should return null when no name provided', () => {
        const result = getFullVehicleByName();
        expect(result).to.be.null
    });

    it('should throw Vehicle error when thrown from stub', () => {
        brandStub.throws(new Error("Error from Vehicles stub"));
        expect(() => getFullVehicleByName('BMW')).to.throw(Error, "")
    })

    it('should throw Vehicle error', () => {
        expect(() => getFullVehicleByName("BM")).throws(Error, "Error from Vehicles")
    });
});