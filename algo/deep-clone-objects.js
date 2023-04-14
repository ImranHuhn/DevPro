console.clear();

const obj1 = {
    a: 1,
    b: {
        b1: 2,
        b2: {
            c1: {
                c2: 3
            }
        }
    }
}

function deepClone (obj) {
    return Object.keys(obj).reduce((acc, el) => {
        return {...acc, [el]: typeof(obj[el]) === "object" ? {...deepClone(obj[el])} : obj[el]}
    }, {})
};

const obj2 = deepClone(obj1)
obj2.b.b1 = 3

console.log(obj1, obj2);
