// quantumult_response_rewriter.js
let body = $response.body;
let obj = JSON.parse(body);

if (obj.data) {
    if (obj.data.purchased) {
        obj.data.purchased = ["3"];
    }
    if (obj.data.stateName) {
        obj.data.stateName = "完场";
    }
}

body = JSON.stringify(obj);
$done({body});
