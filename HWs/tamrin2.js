function copy(a, b) {
    for (let item in b) {
        a[item] = b[item];
    }
    return a;
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