function copy(a, b) {
    let c = { ...a };
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

let c = copy(a, b);
console.log(a);
console.log(b);
console.log(c);