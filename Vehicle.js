import Brand from './Brand'

export const VEHICLES = [
    {
        name: "A4",
        year: 2020,
        type: "AUDI",
        price: 25000
    },
    {
        name: "320i",
        year: 2020,
        type: "BMW",
        price: 28000
    },
    {

        name: "C Class",
        year: 2020,
        type: "BENZ",
        price: 31000
    }

]

export const getAllVehicles = () => {
    return VEHICLES
}

export const getVehicleByBrand = (type) => {
    const result = VEHICLES.filter(x => x.type === type);
    return result;
}

export const getFullVehicleByName = (name) => {
    if (!name) return null;
    try {
        let vehicle = VEHICLES.filter(x => x.type === name)[0]
        let brand = Brand.getBrandByName(vehicle.type)
        return { ...vehicle, brand: { ...brand } }
    }
    catch (err) {
        throw new Error("Error from Vehicles")
    }
}

export const getAllVehicleDetails = () => {
    const brands = Brand.getAllBrands();
    let vehicles = VEHICLES;
    let result = vehicles.map(vechicle => {
        let brand = brands.filter(x => x.name === vechicle.type)[0]
        return { ...vechicle, brand: { ...brand } }
    })

    return result
}