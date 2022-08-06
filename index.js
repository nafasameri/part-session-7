function copy(a, b) {
    for (let item in a) {
        b[item] = a[item];
    }
    return b;
}

const a = {
    title: "fhjkdcl"
};

const b = {
    artist: "fghdjksla",
    duration: 25
};

let c = copy(a, b);
console.log(c);