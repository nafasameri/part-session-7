function copy(a, b) {
    for (let item in a) {
        b[item] = a[item];
    }
    return b;
}

function merge(a, b) {
    const c = {};
    copy(a, c);
    copy(b, c);
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