//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: {},
    storaArr: wx.getStorageSync("arr")||[]
  },
  shopping:function(){
    let index = this.data.storaArr.findIndex((item) => item.item == this.data.logs.item)
    console.log(index);
    if (index==-1){
      console.log("!");
      console.log(this.data.storaArr);
      this.data.logs.count++
      this.data.storaArr.push(this.data.logs)
      console.log(this.data.storaArr);
    }
    else{
      console.log("+");
      this.data.storaArr[index].count++
    }
    wx.setStorageSync("arr",this.data.storaArr)
  },
  goShopping:function(){
    wx.navigateTo({
      url: '/pages/shopping/shopping',
    })
  },
  onLoad: function (options) {
    this.setData({
      logs: JSON.parse(options.data)
    })
  }
})
