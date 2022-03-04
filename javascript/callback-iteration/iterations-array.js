const numbers=[2,3,5,6,8];
const doubled =numbers.map((n)=>n*2);
console.log(doubled,numbers);


let grades=[30,50,77,38,44,80];

grades=grades.map(grade)=>(grade)








//?modified

const gradeInfo= grades.map((grade,index)=>{
    const newgrade=(grade>50 ? grade*1.1: grade*1.2).toFixed(2);
    return '${index+1}'
    return 
})