function concat(arr, seprate) {
    return arr.join(seprate);
    // let str = "";
    // for (const item of arr) {
    //     const temp = item + seprate;
    //     str += temp;
    // }
    // return str;
}

a = [1, 3, 4, 6, 8];
console.log(concat(a, ','));