const customerDate = [
    {
      "id": 1,
      "name": "홍길동",
      "email": "moko@mokokoworld.com",
      "phone": "010-111-2222",
      "address": "모코코"
    },
    {
      "id": 2,
      "name": "춘향이",
      "email": "abc@naver.com",
      "phone": "010-123-4567",
      "address": "어딘가"
    },
    {
      "id": 3,
      "name": "덕지덕지",
      "email": "douckG@gmail.com",
      "phone": "010-987-6543",
      "address": null
    },
    {
      "id": 4,
      "name": "을지문덕",
      "email": "abc@naver.com",
      "phone": "123-4567-7891",
      "address": "어딘가"
    },
    {
      "id": 8,
      "name": "김김김",
      "email": "abc@naver.com",
      "phone": "010-1111-1234",
      "address": "어딘가"
    },
    {
      "id": 9,
      "name": "유관순",
      "email": "b@b.b",
      "phone": "123-4567-7891",
      "address": "중구"
    },
    {
      "id": 11,
      "name": "테스트01",
      "email": "abc@gmail.com",
      "phone": "010-444-5555",
      "address": "어딘가"
    }
  ];
//반복 : 함수의 리턴값을 모아서 새로운 배열을 만듬
let ids = customerDate.map(ele => ele.name);
console.log(ids);