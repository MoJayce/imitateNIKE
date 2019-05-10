// pages/Logining/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Timer:false,
    phone:"",
  },
  toJoin(){
      wx.navigateTo({
        url: '../Reg/index?rid=1',
      })
  },
  phone(e){
    clearTimeout(this.data.Timer)
    this.setData({
      Timer:setTimeout(() => {
        this.setData({
          phone:e.detail.value
        })
      }, 300)
    })
  },
  next(){
    console.log(this.data.phone)
    let phoneNumber = this.data.phone.replace(/\s+/g, "")
    if (phoneNumber === ''){
        console.log("没有填手机号")
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    wx.reLaunch({
      url: '../../components/loginSwiper/index?lid=1'
    })
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