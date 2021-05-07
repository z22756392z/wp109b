class Vector{
    constructor(array){
        this.array = array;
    }

    add(vector){
        var r = [];
        var x = this;
        for(var i = 0 ; i < x.array.length; i++){
            r[i] = x.array[i] + vector.array[i];
        }
        return new Vector(r);
    }

    sub(vector){
        var r = [];
        var x = this;
        for(var i = 0 ; i < x.array.length; i++){
            r[i] = x.array[i] - vector.array[i];
        }
        return new Vector(r);
    }

    dot(vector){
        var r  = 0;
        var x = this;
        for(var i = 0 ; i < x.array.length; i++){
            r += x.array[i] * vector.array[i];
        }
        return r;
    }

    neg(){
        var r = [];
        var x = this;
        for(var i = 0 ; i < x.array.length; i++){
            r[i] = -x.array[i]
        }
        return new Vector(r);
    }
}

var x = new Vector([1,2,3]);
var y = new Vector([1,1,1]);

console.log("x.add(y):=",x.add(y));
console.log("x.sub(y):=",x.sub(y));
console.log("x.dot(y):=",x.dot(y));
console.log("x.neg(y):=",x.neg());