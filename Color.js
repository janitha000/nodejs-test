const COLORS = [
    {
        name: "BMW",
        color: "RED",

    },
    {
        name: "AUDI",
        color: "WHITE",

    },
    {
        name: "BENZ",
        color: "BLACK",

    }
]

const getColorByName = (name) => {
    let color = COLORS.filter(x => x.name === name)[0];
    return color.color;
}

export default {
    getColorByName
}