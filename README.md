# 원티드 프리온보딩 코스

<br />

## [👉 배포 페이지 바로가기](https://deluxe-medovik-f1f89e.netlify.app/)

<br />
<br />

## 구현

- 그동안 주로 MVVM 패턴으로 아키텍처를 구성 하였는데 이번엔 MVC패턴으로 진행해보았다.
  - service라는 폴더를 만들어 ui hooks와 api hooks를 분리
  - 신기술 공부도 해볼 겸 storybook과 jset, React Hooks Testing library를 사용해보았다.

---

### :: 1. 로그인 / 회원가입

- `/` 경로에 로그인 / 회원가입 기능 구현
  - 페이지 안에 이메일 입력창, 비밀번호 입력창, 제출 버튼이 포함
  - 로그인, 회원가입을 별도의 경로로 분리
  - 이메일과 비밀번호의 유효성 검사
  - 이메일 조건: `@` 포함
  - 비밀번호 조건: 8자 이상
  - 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화
  - 로그인 API를 호출하고, 올바른 응답을 받았을 때 `/todo` 경로로 이동
  - 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답
  - 응답받은 JWT는 로컬 스토리지에 저장
  - 로그인 여부에 따른 리다이렉트 처리
  - 로컬 스토리지에 토큰이 있는 상태로 `/` 페이지에 접속한다면 `/todo` 경로로 리다이렉트
  - 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/` 경로로 리다이렉트

---

### :: 2. 투두 리스트

- `/todo`경로에 투두 리스트 구현
- 리스트 페이지에는 투두 리스트의 내용과 완료 여부 표시
- 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가
- 투두 리스트의 수정, 삭제 기능 구현
  - 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리스트의 내용 수정 가능
  - 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소 가능
  - 투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제

## 설치

1. 프로젝트 클론

```console
$ git clone https://github.com/Leejha/wanted-pre-onboarding-fe
```

2. 패키지 설치

```console
$ cd wanted-pre-onboarding-fe
$ npm install / yarn
```

## Frontend 서버 실행

```console
$ cd wanted-pre-onboarding-fe
$ npm start / yarn start
```

---

## 후기

- CRUD와 typescript를 사용함에 있어서 어려움이 전혀 없을 줄 알았는데 생각보다 쉽지 않았다.
