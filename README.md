# 🙌 Icon, UploadButton UI Component 

>피그마 시안을 제공받아 리액트로 버튼 UI 를 구현하는 실습입니다. <br>완성된 모습입니다.

![버튼UI](https://user-images.githubusercontent.com/89028068/199477295-c2e02f47-d801-48d2-8e10-43a6911507ec.gif)


---

## 💡 사용법 


1. 버튼 UI 라이브러리를 저장할 폴더를 만들고, 터미널 창을 열어 밑의 주소를 복사하여 git clone 합니다. 

```javascript
https://github.com/CHAERYEON-LEE/icon-button-UI.git
```

2. 버튼을 실행시키기 위해 필요한 모듈을 설치하려면 해당 명령어를 터미널에 입력합니다. 

```javascript
npm i 
```

3. 버튼을 local에서 실행시키려면 해당 명령어를 터미널에 입력합니다.

```javascript
npm run dev
```


---

## 💡 UploadButton 컴포넌트 사용법 


>기본 제공되는 버튼의 종류는 5가지 입니다. 


|**status**|idle|pending|resolved|rejected|disabled|
|:---:|:---:|:---:|:---:|:---:|:---:|
|**상태**|업로드|업로드 중|완료|업로드실패|실패|
|**출력**|![업로드](https://user-images.githubusercontent.com/89028068/199479402-ef43e38c-0cc6-42e3-812b-329ff1f6e098.png)|![업로드중](https://user-images.githubusercontent.com/89028068/199479449-df48e9e7-410d-4bb3-9e2a-82f13060df9d.png)|![완료](https://user-images.githubusercontent.com/89028068/199479484-0f74b97e-29b3-44c1-a30c-2322f0d9e53d.png)|![업로드실패](https://user-images.githubusercontent.com/89028068/199479650-d217b608-e0b1-42ac-951b-9fccde63c35c.png)|![실패](https://user-images.githubusercontent.com/89028068/199479692-c207b79f-9b47-4170-9c0b-5b3aeab7c751.png)|


### 코드 작성 시 

```javascript
<UploadButton status="idle"></UploadButton>
<UploadButton status="pending"></UploadButton>
<UploadButton status="resolved"></UploadButton>
<UploadButton status="rejected"></UploadButton>
<UploadButton status="disabled"></UploadButton>
```


### UploadButton 기본 상태 

>status 를 입력해주지 않아도 버튼의 기본 status 는 idle(입력중)으로 되어 있습니다. 

```javascript
<UploadButton></UploadButton>
```

출력

![업로드](https://user-images.githubusercontent.com/89028068/199479402-ef43e38c-0cc6-42e3-812b-329ff1f6e098.png)


---
## 💡 버튼에 텍스트나, 아이콘을 추가하고 싶을 때 

>src/components/UploadButton.js 파일의 uploadStatus 객체에 프로퍼티를 추가합니다. 



src/components/UploadButton.js 파일의 uploadStatus 객체예시 

```javascript
const uploadStatus = {
    idle:{
        text: "업로드",
        path: "../assets/icons/type=up-arrow.svg"
    },
    pending:{
        text: "업로드 중",
        path: "../assets/icons/type=spinner-animate.svg"
    },
    resolved:{
        text: "완료",
        path: "../assets/icons/type=check-mark.svg"
    },
    rejected:{
        text: "실패",
        path: "../assets/icons/type=cross.svg"
    },
    disabled:{
        text: "업로드",
        path: "../assets/icons/type=not-allowed.svg",
        style: {
            filter:'invert(76%) sepia(8%) saturate(202%) hue-rotate(196deg) brightness(92%) contrast(89%)'
        }
    }
}
```


프로퍼티 추가

```javascript
const uploadStatus = {
    sayYeah:{
        text: "안녕",
        path: "../assets/icons/type=up-arrow.svg"
    }
}
```


사용 예시

```javascript
<UploadButton status="sayYeah"></UploadButton>
```


출력

<img width="200" alt="안녕버튼" src="https://user-images.githubusercontent.com/89028068/199481430-16a9b076-6f23-4079-b18a-b5ef40c37ca1.png">







