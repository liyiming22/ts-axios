import axios from '../../src/index'

/**
 * 设置headers的post请求
 */
axios({
  method: "post",
  url: "/base/post",
  headers: {
    "content-type": "application/json",
    "Accept": "application/json, text/plain, */*"
  },
  data: {
    a: 1,
    b: 2
  }
});

/**
 * 发送FormData的post请求
 */
axios({
  method: "post",
  url: "/base/post",
  data: new URLSearchParams("q=URLUtils.searchParams&topic=api")
});

/**
 * 发送json对象的post请求，设置返回数据类型为json，并通过.then()获取返回数据
 */
axios({
  method: "post",
  url: "/base/post",
  // responseType: "json",
  data: {
    a: 3,
    b: 4
  }
}).then(response => {
  console.log(response);
});
