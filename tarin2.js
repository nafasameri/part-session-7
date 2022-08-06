function merge(a, b) {
    const c = {};
    for (let item in a) {
        c[item] = a[item];
    }
    for (let item in b) {
        c[item] = b[item];
    }
    return c;
}

const a = {
    title: "fhjkdcl"
};

const b = {
    artist: "fghdjksla",
    duration: 25
};

const c = merge(a, b);
console.log(a);
console.log(b);
console.log(c);