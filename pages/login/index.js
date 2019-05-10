// pages/login/index.js
import util from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneNum:"",
    isPassword: true,
    itemChecked: "Checked",
  },
  showPassword: function (e) {
    var isPassword = !this.data.isPassword;
    this.setData({
      isShow: false,
      isPassword: isPassword
    })
  },
  checkboxChange(e){
    console.log(e)
  },
  reg(){
    wx.navigateTo({
      url: '../RegSuccess/index',
    })
  },
  back(){
    wx.navigateTo({
      url: '../Reg/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(util.phoneNum)
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
      this.setData({
        phoneNum: util.phoneNum
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