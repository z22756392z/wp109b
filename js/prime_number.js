function Prime(a ,b){  
    if(a > b){//swap
        var temp;
        temp = a;
        a = b;
        b = temp;
    }

    
    
    for(var i = a ; i <= b ; i++){
        if(i == 1);
        else if(i == 2) console.log("Prime number: 2");
        else if(i == 3) console.log("Prime number: 3");
        else{
            var isPrime = 0;
            for(var j = 2; j <= i/2 ; j++){
                if(i % j == 0){
                    isPrime = 0;
                    break;
                }else{
                    isPrime = 1;
                }
            }
            if(isPrime){
                console.log("Prime number: %d",i);
            }
        }
        
    }
}

Prime(3, 15);