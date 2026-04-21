let kk = {};
console.log(kk);
kk.length = 173;
kk.weigth = 66;
kk.name = "张罡锟";
console.log(kk.name);
kk.name = "kk";
console.log(kk.name);
console.log(kk);
console.log(kk["length"]);
console.log("weigth" in kk);
console.log(typeof kk);
kk.name = {};
kk.name.smallname = "坤坤"
console.log(kk["name"]["smallname"]);