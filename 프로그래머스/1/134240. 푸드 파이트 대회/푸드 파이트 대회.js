function solution(food) {
    let order = ""
    for (let i =1;i<food.length;i++){
        order+=String(i).repeat(Math.floor(food[i]/2));
    }
    const reversedOrder=order.split("").reverse().join("");
    
    return order+"0"+reversedOrder;
}