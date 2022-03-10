const locationNameFilter =
  /수암도서관|도서관|WCC홀|방송실|체육관관람석|체육관|언어치료센터|글로벌잡스테이션|잡스테이션|대림아트홀|에이스스테이션|대림학보사|학보사|입학팀|교육행정팀|산학협력단|링크사업단|보건실|스마트스테이션|매점|교내서점|안경점|교내카페|카페/;
let locationCodeFilter = /[ABCDEFGHJKLMNPV]0\d{3}/;
const checkLocationEnding = (temp) => {
  const lastLetter = temp[temp.length - 1];
  if (lastLetter.charAt(0) < 44032 || lastLetter.charAt(0) > 55203) {
    return /[136780]/.test(lastLetter.charAt(0));
  } else {
    return lastLetter.charAt(0) - (44032 % 28) != 0;
  }
};

export const userInputFilter = (userInput) => {
  let isFilter = "0";
  //공백 제거 및 소문자 대문자로 변경
  let input = userInput.toUpperCase().replace(/ /g, "");

  let message = "";
  //"어디" 키워드 확인
  if (/어디/.test(input)) {
    //로케이션 필터링
    if (locationNameFilter.test(input) || locationCodeFilter.test(input)) {
      isFilter = "1";
      //로케이션 필터 우선순위 Code > Name
      let temp = locationCodeFilter.test(input)
        ? locationCodeFilter.exec(input).toString()
        : locationNameFilter.exec(input).toString();
      message = `${temp}${checkLocationEnding(temp) ? "은" : "는"} 어디에 있나요?`;
    }
  }
  return { isFilter: isFilter, message: message || userInput };
};
