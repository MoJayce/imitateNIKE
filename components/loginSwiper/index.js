// pages/loginSwiper/index.js
import util from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentSwiper: 0,
    vertical: false,
    interval: 5000,
    duration: 800,
    autoplay: true,
    hidden1: false,
    adList: [{
        "picUrl": "https://img.zcool.cn/community/016ee4592fbc6aa8012193a33f70d1.jpg@1280w_1l_0o_100sh.jpg"
      },
      {
        "picUrl": "https://img.zcool.cn/community/01ef7f57a201120000012e7e5de9c7.jpg@1280w_1l_2o_100sh.jpg"
      },
      {
        "picUrl": "https://img.zcool.cn/community/018096592fbc6aa8012193a3ab2995.jpg@1280w_1l_0o_100sh.jpg"
      }
    ],
    url: "",
  },
  // 轮播图切换
  swiperChange: function(e) {
    this.setData({
      currentSwiper: e.detail.current
    })
  },
  // 注册登录按钮
  onLogin: function(e) {
    // console.log("注册登录")
    wx.showModal({
      title: '注册登录',
      content: '是否已经是会员？',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          // 跳转至登录页面。直接手机和密码
          wx.navigateTo({
            url: '../../pages/Logining/index',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
          wx.showModal({
            title: '获取手机号',
            content: '是否获取手机号',
            success(res) {
              if (res.confirm) {
                console.log('用户点击确定')
                // 跳转至注册页面
                wx.navigateTo({
                  url: '../../pages/login/index',
                })
              } else if (res.cancel) {
                console.log('用户点击取消')
                wx.navigateTo({
                  url: '../../pages/Reg/index',
                })
                // this.getPhoneNumber()
                // 先获取手机号,授权跳转注册姓名性别页面,
                // 未授权,跳转至获取验证码页面，然后再跳转注册姓名等
              }
            }
          })
        }
      }
    })
    
  },
  getPhoneNumber:function(e){
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  },
  // 返回按钮
  back(){
    wx.reLaunch({
      url: '../../pages/index/index'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    console.log(options.lid)
    if (options.lid == 1){
      util.url = 'pages/mine/index'
    }else{
      util.url = getCurrentPages()[0].route;
    }
    
    console.log(util.url)
    that.setData({
      url: util.url
    })
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
    // console.log(getCurrentPages()[0].route) //获取当前页面url
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

    // 判断如果没有注册，就强制返回首页
    wx.reLaunch({
      url: '../index/index'
    })
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