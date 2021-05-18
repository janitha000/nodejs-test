import Color from '../Color'

const BRANDS = [
    {
        name: "BMW",
        founded: 1990,

    },
    {
        name: "AUDI",
        founded: 1982,

    },
    {
        name: "BENZ",
        founded: 1800,

    }
]

export const getAllBrands = () => {
    return BRANDS;
}

export const getBrandByName = (name) => {
    let brand = BRANDS.filter(x => x.name === name)[0];
    let color = Color.getColorByName(name)
    let res = { brand, color }
    return res;
}
