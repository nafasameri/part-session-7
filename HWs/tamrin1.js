function jabja(obj) {
    for (let item in obj) {
        const key = obj[item];
        const value = item;
        obj[key] = value;
        delete obj[item];
    }
}

const obj = {
    ghfjkdl: "jgfdh",
    jghfg: "fjndkms"
}

jabja(obj);
console.log(obj);