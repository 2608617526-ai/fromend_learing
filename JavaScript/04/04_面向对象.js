// 所有操作都是通过对象的属性和方法

const kk = {
    name:"zgk",
    sleep:function(){
        console.log(this.name + "睡觉了别打扰不然我哈气");
    }
}
kk.sleep();