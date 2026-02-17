function reverseRightAngledTriangle(rows){
    for(i = rows; i>0; i--){
        let row = ""
        for(j=1; j<=i; j++){
            row += "*"
        }
        console.log(row)
    }  
}


const noOfRows = 5
reverseRightAngledTriangle(noOfRows)