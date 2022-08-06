function math(obj) {
    for (let item in obj)
        if (!Number.isFinite(obj[item]))
            delete obj[item];

    const values = Object.values(obj);
    console.log(values);
    const output = {
        min: Math.min(...values),
        max: Math.max(...values),
        avg: values.reduce((a, b) => a + b, 0) / values.length
    };
    return output;
}


const menu = {
    espresso: 24,
    icedCoffee: 25,
    mocha: 35,
    latte: 30,
    cappuccino: false,
    tea: 18,
    icedTea: "",
    americano: undefined,
    ghjfkdl: "758"
}

const output = math(menu);
console.log(output);