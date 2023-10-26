export function extractEndpoints(fileContents) {
    // 엔드포인트 추출 로직을 여기에 추가
    // 파일 내용을 분석하고 정규식 또는 다른 방법을 사용하여 엔드포인트를 추출
    const regex = /app\.[a-z]+\(\'([^\']+)\'/g;
    const matches = [];
    let match;
  
    while ((match = regex.exec(fileContents))) {
      matches.push(match[1]);
    }
  
    return matches;
  }
  