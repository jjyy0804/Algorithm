function solution(record) {
      // userId와 userName을 저장하는 Map 생성
    const userMap = new Map();
    const actions = [];

    for (const entry of record) {
        const parts = entry.split(" ");  // 명령어와 userId, userName을 구분
        const command = parts[0];
        const userId = parts[1];
        const userName = parts[2];

        if (command === "Enter") {
            // Map에 userId와 userName을 최신으로 저장
            userMap.set(userId, userName);
            actions.push({ userId, message: "님이 들어왔습니다." });
        } else if (command === "Leave") {
            // Leave 시에도 actions 배열에 userId와 메시지를 추가
            actions.push({ userId, message: "님이 나갔습니다." });
        } else if (command === "Change") {
            // Change의 경우 Map에서 userName을 최신으로 갱신
            userMap.set(userId, userName);
        }
    }

    // 최종 출력 메시지 생성
    return actions.map(({ userId, message }) => {
        const userName = userMap.get(userId);  // 가장 최신의 userName 가져오기
        return userName + message;
    });

}