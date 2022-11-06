function myEach(collection, callback){
let array = Object.values(collection)

//    array.forEach(element => {callback(element)});
//    return collection;
    for (let el of array){
        callback(el)
    }
return collection;

}

function myMap(collection, callback){
    let array = Object.values(collection);
    //    return array.map((el) => callback(el));
    let newArray = [];
    
    for (let el of array){
        newArray.push(callback(el))
    }
return newArray;
    
}

function myReduce(collection,callback,acc){
    let array = Object.values(collection);
    let accum = 0;
    let total;
    
        if (acc == undefined){
            total = array[0];
            array.shift();
            
            for (let el of array){
                total += callback(accum,el);
            }
        }
        else{
            total = acc;
            for (let el of array){
                total += callback(accum,el);
             }
        }
        return total;
}

function myFind(collection, predicate){
    let array = Object.values(collection);

    for (let el of array){
        if(predicate(el)){
            return el;
        }
    }

}


let testArr = [1, 2, 3, 4];
let testObj = {one: 1, two: 2, three: 3, four: 4}
const callback = (acc, val) => (acc + (val * 3))
console.log(myReduce(testArr,callback))

