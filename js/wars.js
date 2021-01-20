function createPhoneNumber(numbers){
    return '('+ numbers[0] + numbers[1] + numbers[2] + ') ' + numbers[3] + numbers[4] + numbers[5] + '-' + numbers[6] + numbers[7] + numbers[8] + numbers[9] 
    }
    console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));

function positiveSum(arr) { 
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
        suma += arr[i];
    }
    }
    return suma
}
    console.log(positiveSum([2, -5, 8, 9]));
