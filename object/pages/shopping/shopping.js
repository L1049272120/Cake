// pages/shopping/shopping.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:[],
    total:0
  },
  add:function(e){
    let {title,child} =e.target.dataset;
    let index = this.data.arr.findIndex((item) => item.item == title)
    if(child=="-"){
          if (this.data.arr[index].count==1){
            this.data.arr.splice(index,1)
            wx.setStorageSync("arr", this.data.arr)
            if(this.data.arr.length==0){
              wx.clearStorage()
            }
          }
          else{
            this.data.arr[index].count--
          }
    }
    else{
      this.data.arr[index].count++
    }
    let total = this.data.arr.length==0?0:this.data.arr.reduce(function (prev, cur, index, arr) {
      return prev + cur.price * cur.count
    }, 0);
    this.setData({
      arr: this.data.arr,
      total
    })
    wx.setStorageSync("arr",this.data.arr)
  },
  home:function(){
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      arr: wx.getStorageSync("arr")
    })
    let total = this.data.arr==0?0:this.data.arr.reduce(function (prev, cur, index, arr){
      return prev + cur.price*cur.count
    },0);
    this.setData({
      total
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})