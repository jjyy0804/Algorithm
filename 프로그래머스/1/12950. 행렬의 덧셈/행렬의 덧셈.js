function solution(arr1, arr2) {
    const result = Array.from({length:arr1.length},()=>[]);
    for(let i=0;i<arr1.length;i++){
        for(let j = 0;j<arr1[i].length;j++){
            result[i][j]=arr1[i][j]+arr2[i][j];
        }
    }
    return result;
}