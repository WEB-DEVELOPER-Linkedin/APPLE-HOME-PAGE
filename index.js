var arr = [];
function fibonacciGenerator(n){
    if(n==1){
        arr.push(0);
        return arr;
    }
    if(n==2){
        arr.push(0);
        arr.push(1);
        return arr;
    }
    else{
        arr.push(0);
        arr.push(1);
        var j=1;
        for(var i=0;i<n-2;i++){
           var c = arr[i]+arr[j];
           j++;
           arr.push(c);
        }
        return arr;
    }
}
var res = fibonacciGenerator(5);
alert("[" + res +"]");
console.log(res);