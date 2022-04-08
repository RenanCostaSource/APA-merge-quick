const  fs =  require('fs');
const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

const algorithm = 0; // change this if you want to change the sort type 0 = quick | 1 = merge

//Just change the name of the file to change the test case
const file = fs.readFileSync('num.100000.4.in', 'utf-8');
const array = file.split('\r\n').map(it=>{
    return Number.parseInt(it);
}).filter(it =>{
    return it !== undefined;
});
array.shift()


//################### QuickSort #############################
const quickSort = function quickSort (arrayInit, arrayEnd) {

   if(arrayInit<arrayEnd){
        let q = partition(arrayInit, arrayEnd);
        quickSort(arrayInit, q-1);
        quickSort(q+1, arrayEnd);
   }

   return array;

}
const partition = (arrayInit, arrayEnd) => {
    let x = array[arrayInit];
    let a = arrayInit+1;
    let b = arrayEnd;
    while(1){
        while(array[b]>x){
            b--
        }
        while(array[a]<x){
            a++
        }
        if(a<=b){
            if(array[a] == undefined || array[b]== undefined){
                process.exit(1);
            }
            let aux = array[a]
            array[a] = array[b]
            array[b]= aux
        } else {
            if(array[arrayInit] == undefined || array[b]== undefined){
                process.exit(1);
            }
            let aux = array[arrayInit]
            array[arrayInit] = array[b]
            array[b]= aux
            return b
        }
    }

}
//################################################

const timeStart = performance.now();
const sorted = algorithm===0 
    ? quickSort(0, array.length-1).filter(it =>{
        return it !== undefined;
    })
    : []; 
const timeEnd = performance.now();
//validates
let worked = true;
for(let i = 0; i< sorted.length-1; i++){
    if(sorted[i] > sorted[i+1]){
        worked = false;
    }
}
console.log("it worked? "+ worked);
console.log("time spent:"+ (timeEnd-timeStart));



process.exit(1);
