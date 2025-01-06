let array =[[1,2,3,4]]
let array2=[]

function printMultiplicationTable(n) {
    let sum=[]
      let k=1
      while (10>=k) {
          sum.push(`${n}*${k}=${n*k}`)
          k++
  
          
      }
      return sum
  }

let result=printMultiplicationTable(2)


console.log(result);