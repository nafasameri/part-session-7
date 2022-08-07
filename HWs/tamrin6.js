function union(...arraies) {
    let output = [];
    for (const arr of arraies) {
        output.push(...arr);
    }
    return output;
}

const a = [4, 7, 8];
const b = [5, 9, 2, 7];
const c = [3, 8, 5, 4, 2];


let output = union(a, b, c);
console.log(output);
output = output.filter((value, index, array) => {
    return array.indexOf(value) == index;
});
console.log(output);