# ๐ Icon, UploadButton UI Component 

>ํผ๊ทธ๋ง ์์์ ์ ๊ณต๋ฐ์ ๋ฆฌ์กํธ๋ก ๋ฒํผ UI ๋ฅผ ๊ตฌํํ๋ ์ค์ต์๋๋ค. <br>์์ฑ๋ ๋ชจ์ต์๋๋ค.

![แแฅแแณแซUI](https://user-images.githubusercontent.com/89028068/199477295-c2e02f47-d801-48d2-8e10-43a6911507ec.gif)


---

## ๐ก ์ฌ์ฉ๋ฒ 


1. ๋ฒํผ UI ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ ์ฅํ  ํด๋๋ฅผ ๋ง๋ค๊ณ , ํฐ๋ฏธ๋ ์ฐฝ์ ์ด์ด ๋ฐ์ ์ฃผ์๋ฅผ ๋ณต์ฌํ์ฌ git clone ํฉ๋๋ค. 

```javascript
https://github.com/CHAERYEON-LEE/icon-button-UI.git
```

2. ๋ฒํผ์ ์คํ์ํค๊ธฐ ์ํด ํ์ํ ๋ชจ๋์ ์ค์นํ๋ ค๋ฉด ํด๋น ๋ช๋ น์ด๋ฅผ ํฐ๋ฏธ๋์ ์๋ ฅํฉ๋๋ค. 

```javascript
npm i 
```

3. ๋ฒํผ์ local์์ ์คํ์ํค๋ ค๋ฉด ํด๋น ๋ช๋ น์ด๋ฅผ ํฐ๋ฏธ๋์ ์๋ ฅํฉ๋๋ค.

```javascript
npm run dev
```


---

## ๐ก UploadButton ์ปดํฌ๋ํธ ์ฌ์ฉ๋ฒ 


>๊ธฐ๋ณธ ์ ๊ณต๋๋ ๋ฒํผ์ ์ข๋ฅ๋ 5๊ฐ์ง ์๋๋ค. 


|**status**|idle|pending|resolved|rejected|disabled|
|:---:|:---:|:---:|:---:|:---:|:---:|
|**์ํ**|์๋ก๋|์๋ก๋ ์ค|์๋ฃ|์๋ก๋์คํจ|์คํจ|
|**์ถ๋ ฅ**|![แแฅแธแแฉแแณ](https://user-images.githubusercontent.com/89028068/199479402-ef43e38c-0cc6-42e3-812b-329ff1f6e098.png)|![แแฅแธแแฉแแณแแฎแผ](https://user-images.githubusercontent.com/89028068/199479449-df48e9e7-410d-4bb3-9e2a-82f13060df9d.png)|![แแชแซแแญ](https://user-images.githubusercontent.com/89028068/199479484-0f74b97e-29b3-44c1-a30c-2322f0d9e53d.png)|![แแฅแธแแฉแแณแแตแฏแแข](https://user-images.githubusercontent.com/89028068/199479650-d217b608-e0b1-42ac-951b-9fccde63c35c.png)|![แแตแฏแแข](https://user-images.githubusercontent.com/89028068/199479692-c207b79f-9b47-4170-9c0b-5b3aeab7c751.png)|


### ์ปดํฌ๋ํธ ์ฌ์ฉ ์ 

```javascript
<UploadButton status="idle"></UploadButton>
<UploadButton status="pending"></UploadButton>
<UploadButton status="resolved"></UploadButton>
<UploadButton status="rejected"></UploadButton>
<UploadButton status="disabled"></UploadButton>
```


### UploadButton ๊ธฐ๋ณธ ์ํ 

>status ๋ฅผ ์๋ ฅํด์ฃผ์ง ์์๋ ๋ฒํผ์ ๊ธฐ๋ณธ status ๋ idle(์๋ ฅ์ค)์ผ๋ก ๋์ด ์์ต๋๋ค. 

```javascript
<UploadButton></UploadButton>
```

์ถ๋ ฅ

![แแฅแธแแฉแแณ](https://user-images.githubusercontent.com/89028068/199479402-ef43e38c-0cc6-42e3-812b-329ff1f6e098.png)


---
## ๐ก ๋ฒํผ์ ํ์คํธ๋, ์์ด์ฝ์ ์ถ๊ฐํ๊ณ  ์ถ์ ๋ 

>src/components/UploadButton.js ํ์ผ์ uploadStatus ๊ฐ์ฒด์ ํ๋กํผํฐ๋ฅผ ์ถ๊ฐํฉ๋๋ค. 



src/components/UploadButton.js ํ์ผ์ uploadStatus ๊ฐ์ฒด์์ 

```javascript
const uploadStatus = {
    idle:{
        text: "์๋ก๋",
        path: "../assets/icons/type=up-arrow.svg"
    },
    pending:{
        text: "์๋ก๋ ์ค",
        path: "../assets/icons/type=spinner-animate.svg"
    },
    resolved:{
        text: "์๋ฃ",
        path: "../assets/icons/type=check-mark.svg"
    },
    rejected:{
        text: "์คํจ",
        path: "../assets/icons/type=cross.svg"
    },
    disabled:{
        text: "์๋ก๋",
        path: "../assets/icons/type=not-allowed.svg",
        style: {
            filter:'invert(76%) sepia(8%) saturate(202%) hue-rotate(196deg) brightness(92%) contrast(89%)'
        }
    }
}
```


ํ๋กํผํฐ ์ถ๊ฐ

```javascript
const uploadStatus = {
    sayYeah:{
        text: "์๋",
        path: "../assets/icons/type=up-arrow.svg"
    }
}
```


์ฌ์ฉ ์์

```javascript
<UploadButton status="sayYeah"></UploadButton>
```


์ถ๋ ฅ

<img width="200" alt="แแกแซแแงแผแแฅแแณแซ" src="https://user-images.githubusercontent.com/89028068/199481430-16a9b076-6f23-4079-b18a-b5ef40c37ca1.png">







