// pages/mine/index.js
import util from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin:"",
    userMsg:"",
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
    console.log(util.userInfo)
    if (util.userInfo){
      let user = JSON.parse(util.userInfo)
      console.log(user)
      this.setData({
        userMsg: user
      })
    } 
    if (util.IsBind == 0) {
      wx.navigateTo({
        url: '/components/loginSwiper/index',
      })
    }
    console.log(util.IsLogin)
    this.setData({
      isLogin: util.IsLogin == 0 ? true : false
    })
  },
  // 注册登录按钮
  bindGetUserInfo: function (e) {
    // console.log("注册登录")
    let that = this
    // 获取用户信息
    wx.getSetting({
      success: (res) => {
        // console.log(res)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            lang: 'zh_CN',
            success: (res) => {
              // console.log(res)
              // util.userInfo = res.rawData
              this.setData({
                userMsg: JSON.parse(res.rawData)
              })
            }
          })
        } else {
          console.log("未授权")
        }
      }
    })
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