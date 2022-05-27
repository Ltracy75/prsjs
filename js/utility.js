const parseUrl = (url) => {
let urlParts = url.split("?");
let parms = urlParts[1];
parms = parms.split("&");
//console.log(urlParts);

let json = {};
for (let p of parms) {
    let kv = p.split("=");
    console.log(kv);
    json[kv[0]] = kv [1];
}
console.log(json);
return json;
}
