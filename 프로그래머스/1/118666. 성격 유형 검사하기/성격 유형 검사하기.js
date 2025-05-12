function solution(survey, choices) {
    const object = {};
    for(let i = 0;i<choices.length;i++){
        if(choices[i]>4){
            const key=survey[i][1];
            object[key]=(object[key]||0)+choices[i]-4;
        }else if(choices[i]<4){
            const key=survey[i][0];
            object[key]=(object[key]||0)+4-choices[i];
        }
    }
      const indicators = ["RT", "CF", "JM", "AN"];
        let result = "";

        for (let pair of indicators) {
            const [a, b] = pair;
            const aScore = object[a] || 0;
            const bScore = object[b] || 0;

            result += aScore >= bScore ? a : b;
        }

        return result;
}