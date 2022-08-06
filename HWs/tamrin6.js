function union (...arraies) {
    let output = [];
    for (const arr of arraies) {
        output.push(...arr);
    }
    return output;
}

a = [4, 7, 8];
b = [5, 9, 2, 7];

console.log(union(a, b));