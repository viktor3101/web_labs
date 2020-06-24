window.addEventListener('load', function () {

    var arr = [
        {value: 100, type: 'USD'},
        {value: 215, type: 'EUR'},
        {value: 7, type: 'EUR'},	
        {value: 99, type: 'USD'},
        {value: 354, type: 'USD'},
        {value: 12, type: 'EUR'},
        {value: 77, type: 'USD'},
    ];
    
    let sum=0;
    let EUR=[];

    for(let i =0; i<arr.length; i++){
        if(arr[i].type === 'USD' && arr[i].value<100){
            sum+=arr[i].value;
        }
    }
    console.log(sum); 
    
    for(let j =0; j<arr.length; j++){
        if(arr[j].type === 'EUR'){
            arr[j].value*=2;
            EUR.push(arr[j]);
        }
    }
    console.log(EUR); 
})