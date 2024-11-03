function solution(new_id) {
    var answer = '';
    answer=new_id.toLowerCase().replace(/[^a-z0-9-_.]/g, '').replace(/\.{2,}/g, '.').replace(/^\.+|\.+$/g, '');
    if(answer === '') answer = "a";
    answer = answer.slice(0,15);
    answer = answer.replace(/\.$/, '');
    while (answer.length < 3) {
    answer += answer[answer.length - 1];
}
    
    return answer;
}