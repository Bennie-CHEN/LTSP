let body = $response.body;
let obj = JSON.parse(body);

if (obj.data) {
    if (obj.data.purchased) {
        obj.data.purchased = ["3"];
    }
    if (obj.data.state !== undefined) {
        obj.data.state = 6;
    }
}

body = JSON.stringify(obj);
$done({body});
