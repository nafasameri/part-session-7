function printPath(data, item, path) {
    if (data[item] == null || data[item] == undefined) {
        path += item;
        console.log(path);
    }
    else if (data[item] == 'value' || data[item] == 'undefined' || data[item] == 'null') {
        return;
    }
    else {
        const Root = data[item];
        for (let item2 in Root) {
            if (Root[item2] == 'value' || Root[item2] == 'undefined' || Root[item2] == 'null' || Root[item2] == null || Root[item2] == undefined);
            else
                path += item2 + " ";
            printPath(Root, item2, path);
        }
    }
}


const data = {
    key1: 'value',
    key2: {
        key21: 'value',
        key22: null,
        key23: {
            key211: 'value',
            key212: null,
            key213: {
                key2131: 'value',
                key2132: null,
                key2133: {
                    key21331: "undefined",
                    key21332: {
                        key213321: undefined
                    },
                    key21333: null,
                    key21334: {
                        key213341: null,
                        key213342: undefined,
                        key213343: "null",
                    },
                },
            },
        },
    },
    key3: 'value',
    key4: null,
    key5: {
        key51: {
            key511: {
                key5111: null,
                key5112: undefined,
                key5113: null,
                key5114: {
                    key51141: "null",
                    key51142: null,
                    key51143: {
                        key511431: {
                            key5114311: {
                                key51143111: {
                                    key511431111: undefined,
                                    key511431112: null,
                                    key511431113: 'value'
                                },
                                key51143112: {
                                    key511431121: null,
                                    key511431122: {
                                        key5114311221: null,
                                        key5114311222: undefined,
                                        key5114311223: 'value'
                                    },
                                    key511431123: 'value'
                                },
                                key51143113: null,
                            }
                        }
                    }
                },
                key5115: "value"
            },
            key512: undefined,
            key513: {
            }
        },
        key52: {},
        key53: null,
        key54: 'value'
    }
};

for (let item in data) {
    let path = "";
    if (data[item] == 'value' || data[item] == 'undefined' || data[item] == 'null' || data[item] == null || data[item] == undefined);
    else
        path += item + " ";
    printPath(data, item, path);
}
