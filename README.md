# Daelimi

### this repository is part of Daelimi Project

### 본 레포지토리는 [대림이 프로젝트](https://github.com/Hod0ri/Daelimi)의 웹 클라이언트용 레포지토리 입니다.

### 배포시 환경변수 설정이 필요합니다

- 개발환경 : .env.development.local
- 배포환경 : .env.production.local
  위 파일에 아래 내용 작성

```
NEXT_PUBLIC_API_SERVER_URL = api 주소
```

#### 커밋 메시지는 `[ 구현 기능 ] (컴포넌트 경로)` 메시지로 올려주세요.

```
    //예시
    [UI구성] (pages/index.js)
    Header , message Components
```

---

<br/>

## Dependencies

```json
"dependencies": {
    "axios": "^0.26.0",
    "next": "12.1.0",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "recoil": "^0.6.1",
    "sass": "^1.49.9"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.2",
    "eslint": "8.9.0",
    "eslint-config-next": "12.1.0",
    "postcss": "^8.4.6",
    "tailwindcss": "^3.0.23"
  }
```
