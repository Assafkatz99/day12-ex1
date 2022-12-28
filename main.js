matrix = []
let count = 1
for (let i = 0; i < 3; i++){
    matrix.push([])
    for (let x = 0; x < 3; x++){
        matrix[i].push(count)
        count ++
    }
}

// console.table(matrix)

function sumOfColumns (arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        console.log(`${arr[0][i]} + ${arr[1][i]} + ${arr[2][i]} = ${arr[0][i]+arr[1][i]+arr[2][i]}`)
    }
}

sumOfColumns(matrix)