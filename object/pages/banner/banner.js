// pages/banner/banner.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:{},
    storaArr: wx.getStorageSync("arr") || []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      arr: JSON.parse(options.data)[0]
    })
  },
  goshopping:function(){
    let index = this.data.storaArr.findIndex((item) => item.item == this.data.arr.item)
    console.log(index);
    if (index == -1) {
      console.log("!");
      console.log(this.data.storaArr);
      this.data.arr.count++
      this.data.storaArr.push(this.data.arr)
      console.log(this.data.storaArr);
    }
    else {
      console.log("+");
      this.data.storaArr[index].count++
    }
    wx.setStorageSync("arr", this.data.storaArr)
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