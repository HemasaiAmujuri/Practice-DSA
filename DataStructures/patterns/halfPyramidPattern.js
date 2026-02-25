function halfPyramidPattern(rows){
    for(i=1; i<=rows; i++){
        let row = ""
        for(j = 1 ; j <= 2*i - 1; j++){
           row += "*"
        }
        console.log(row)
    }
}


const noOfRows = 5

halfPyramidPattern(noOfRows)