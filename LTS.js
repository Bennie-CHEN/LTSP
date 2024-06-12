// 解析响应体
let body = $response.body;
let obj = JSON.parse(body);

// 修改 "purchased" 字段为 ["3"]
if (obj.data && obj.data.purchased) {
  obj.data.purchased = ["3"];
}

// 转换回 JSON 字符串
body = JSON.stringify(obj);

// 返回修改后的响应体
$done({body});
