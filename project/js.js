function oldPeople(arr){

    var newArray = [];
    for(var x =0; x<arr.length;x++){
        if(arr[x][0] >= 55 && arr[x][1]>7){
            newArray.push("Senior");
        }
        else {
            newArray.push("open");
        }

    }
    return newArray;

}
oldPeople([[15, 24], [15, 24], [15, 24],[56, 24]]);
