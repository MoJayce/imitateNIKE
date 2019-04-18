// pages/addressList/index.js
import util from '../../utils/util.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAddress: true,
    addressList: [{
      name: "我我",
      phone: "18279183711",
      Provinces: "浙江省，杭州市，江干区",
      detailedAddress: "九环路12号"
    }]
  },
  // 修改地址
  editAddress() {
    wx.navigateTo({
      url: '../Addaddress/index?wxad=3',
    })
  },
  // 新增地址
  AddNew() {
    wx.navigateTo({
      url: '../Addaddress/index?wxad=1',
    })
  },
  // 获取微信地址
  GetWxAd() {
    wx.chooseAddress({
      success(res) {
        // console.log(res.userName)
        // console.log(res.postalCode)
        // console.log(res.provinceName)
        // console.log(res.cityName)
        // console.log(res.countyName)
        // console.log(res.detailInfo)
        // console.log(res.nationalCode)
        // console.log(res.telNumber)
        wx.navigateTo({
          url: '../Addaddress/index?wxad=2',
        })
      }
    })
  },
  // 选取地址
  choseAdd(){
    util.address = this.data.addressList
    wx.setStorage({
      key: 'address',
      data: this.data.addressList,
    })
    wx.navigateBack({
      url: '../goodsdetail/index?adid=1',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})