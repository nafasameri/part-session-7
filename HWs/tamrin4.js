function print(linkedList) {
    if (linkedList.next != null)
        print(linkedList.next);
    console.log(linkedList.value);
}

linkedList = {
    value: 20,
    next:{
        value: 95,
        next:{
            value: "test",
            next:{
                value: true,
                next:{
                    value : {},
                    next:{
                        value: [1,2,3],
                        next: {
                            value: 20,
                            next: null
                        }
                    }
                }
            }
        }
    }
};

print(linkedList);