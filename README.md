## Today_Diary

## 📜 프로젝트 개요
기분상태를 표시할 수 있는 간단한 일기

## 🔗 프로젝트 배포

### 🔗 [바로가기]https://emotion-diary-project.netlify.app/

## ⚙ 기술 스택
  <img src="https://img.shields.io/badge/TypeScript-v4.4.2-blue"/>
  <img src="https://img.shields.io/badge/React-v18.1.0-blue"/>

```
그 외 추가 라이브러리
  - "use-local-storage-state": "17",
```

## 🎄 프로젝트 트리

```
src
 ┣ assets       // svg 저장
 ┣ hooks        
 ┣ routes       // 페이지들
 ┣ util         // modal 페이지
 ┣ styles       // 전역 style
 
 routes
 ┣ DiaryEditor
 ┃ ┣ diaryEditor.module.scss
 ┃ ┗ index.tsx
 ┣ DiaryList
 ┃ ┣ DiaryItem
 ┃ ┃ ┣ ItemDetail
 ┃ ┃ ┃ ┣ index.tsx
 ┃ ┃ ┃ ┗ itemDetail.module.scss
 ┃ ┃ ┣ diaryItem.module.scss
 ┃ ┃ ┗ index.tsx
 ┃ ┣ diaryList.module.scss
 ┃ ┗ index.tsx
 ┣ _shared
 ┃ ┣ Footer.tsx
 ┃ ┗ footer.module.scss
 ┣ index.tsx
 ┗ routes.module.scss
```

## 🖼 실행 이미지

![Jun-05-2022 01-56-28](https://user-images.githubusercontent.com/79175916/172017435-e1b218fd-fe4c-4fd8-9b04-97726b8ef5d9.gif)

## 🔧구현 방법
### 1. 다이어리 에디터
  다이어리 리스트에 올라갈 내용들을 적는 곳입니다. 제목, 일기 내용, 기분, 작성 시간을 포함합니다.
  작성자는 위 내용을 작성하고 난 다음 버튼을 클릭하면, 데이터가 로컬스토리지에 저장됩니다.
  작성자와 일기 내용은 빈 내용으로 작성할 수 없게 했습니다.
  일기 내용은 200자 이내로 작성할 수 있게 지정하였습니다.

### 2. 다이어리 리스트
  다이어리 리스트는 다이어리 에디터에서 저장된 데이터를 로컬스토리지에서 가져와 다이어리 아이템으로 전달해줍니다.

### 3. 다이어리 아이템
  다이어리 아이템은 다이어리 리스트에서 넘어온 정보를 받아 한 일기의 내용을 보여주는 컴포넌트입니다.
  Link 태그를 이용하여 다이어리 상세페이지로 넘어갈 수 있도록 하였습니다.
  
### 4. 다이어리 상세페이지
  다이어리 아이템들을 클릭하면 일기 내용을 상세하게 볼 수 있는 페이지로 이동이 됩니다. 다이어리 상세페이지에는 삭제/수정 기능이 있습니다.
  삭제 버튼을 클릭하였을 경우, 모달을 이용해서 삭제를 할 것인지 한번 더 확인하도록 하였습니다. 수정 버튼을 클릭하였을 경우 textarea태그로 다시 대체가 되고,
  textarea 태그 안에는 이전에 썼던 일기 내용이 보이도록 하였습니다. 수정을 완료하면 수정된 내용이 화면에 보여지도록 하였습니다.
  

## 🔥 어려웠던 점
1.  id 넘버링
- 로컬스토리지에 데이터를 저장하고 다시 꺼내오는 방식으로 구현하였는데, 임의로 만든 id가 새로고침 됐을 때 다시 0 부터 시작하는 경우가 있어 삭제버튼을 클릭했을 때 targetId와 id가 맞지않아 삭제가 되지 않는 오류가 있었습니다. 이에 id를 지정하는 방식을 삼항연산자로 구현하였고, 새로고침을 하고 난 다음에도 아이디가 마지막에 있는 가장 큰 id + 1인 로직을 따라가게 되었습니다.

2. 수정기능 구현
- 해당 상세페이지의 data를 로컬스토리지에서 따로 받아 구조 분해 할당으로 각각의 value를 할당 했는데, 동기적으로 처리가 되지 않아, useLayoutEffect를 이용하였습니다.

## 추가하고 싶은 것(기능 등 다양하게)
1. 리펙토링 꾸준히 진행
2. 기분 통계 만들기
3. 반응형 추가하기
