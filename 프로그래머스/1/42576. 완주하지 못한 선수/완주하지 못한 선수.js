function solution(participant, completion) {
  const participantMap = new Map();
  
  // 1. 참가자를 해시맵에 추가 (이름별 등장 횟수 저장)
  participant.forEach(name => {
    participantMap.set(name, (participantMap.get(name) || 0) + 1);
  });
  
  // 2. 완주자를 해시맵에서 차감
  completion.forEach(name => {
    participantMap.set(name, participantMap.get(name) - 1);
  });

  // 3. 해시맵에서 값이 0이 아닌 사람을 찾음 (완주하지 못한 사람)
  for (let [name, count] of participantMap) {
    if (count > 0) {
      return name;
    }
  }
}
