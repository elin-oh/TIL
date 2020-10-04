let url = require('url');



//주소 문자열 URL 객체로 만들기
var curlURL = url.parse('https://m.search.naver.com/serach.naver?query=steve+jobs&where=m&sm=mtp_hty');

// URL 객체를 주소 문자열로 만들기
var curlStr = url.format(curlURL);

console.log(curlURL);
console.log(curlStr);

//쿼리스트링

let querystring = require('querystring');
let param = querystring.parse(curlURL.query);


console.log('요청 파라미터', param);
console.log('요청 파라미터 중 query의 값', param.query);
console.log('원본 요청 파라미터 : ', querystring.stringify(param));