// pages/loginSwiper/index.js
import util from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden1: true,
    currentSwiper: 0,
    vertical: false,
    interval: 5000,
    duration: 800,
    autoplay: true,
    hidden2: false,
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
    logined: false, //用户是否已登录
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  // 轮播图切换
  swiperChange: function(e) {
    this.setData({
      currentSwiper: e.detail.current
    })
  },
  getPhoneNumber(e) {
    if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {
      console.log(e.detail.errMsg)
      console.log("号码授权失败")
      wx.navigateTo({
        url: '../../pages/Reg/index?mid=0',
      }) 
      this.setData({
        hidden1: true,
        hidden2: false
      })
    } else {
      console.log(e)
      let phone = {
        sessionId: util.sessionId,
        encryptedData: e.detail.encryptedData,
        iv: e.detail.iv
      }
      wx.request({
        url: util.host + '/api/weixin/WxLogin/DecryptPhoneNumber',
        method: "POST",
        data: JSON.stringify(phone),
        success: res => {
          console.log(res.data.mobile)
          if (res.data.returnCode == 0) {
            util.phoneNum = res.data.mobile
            wx.navigateTo({
              url: '../../pages/Reg/index?mid=1',
            })
            this.setData({
              hidden1: true,
              hidden2: false
            })
          } else {
            console.log("号码获取失败")
            console.log(util.phoneNum)
          }
        }
      })
    }
  },
  IsSure() {
    this.setData({
      hidden1: true,
      hidden2: false
    })
    // wx.navigateTo({
    //   url: '../../pages/Logining/index',
    // })
  },
  // 注册登录按钮
  bindGetUserInfo: function(e) {
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
              util.userInfo = res.rawData
              var reg = new Object();
              reg.sessionId = util.sessionId;
              reg.encryptedData = res.encryptedData;
              reg.iv = res.iv;
              reg.rawData = res.rawData
              reg.signature = res.signature
              reg.wid = 1

              wx.request({
                url: util.host + '/api/weixin/WxLogin/Reg',
                method: "POST",
                data: JSON.stringify(reg),
                success: res => {
                  console.log(res)
                  let regData = res.data.Data
                  if (regData.errcode == 0) {
                    util.IsBind = regData.IsBing;
                    util.IsLogin = regData.IsReg;
                    if (util.IsLogin == 1 && util.IsBind == 0) {
                      console.log("登录成功,但未注册")
                      that.setData({
                        hidden1: false,
                        hidden2:true
                      })
                    } else if (util.IsLogin == 1 && util.IsBind == 1) {
                      console.log("流程全部走完，跳首页")
                      // 跳转至首页
                      wx.switchTab({
                        url: '../../pages/mine/index',
                      })
                    } else if (regData.IsReg == 0 && util.IsLogin == 0) {
                      console.log("已授权，但登录失败")
                    }
                  }

                }
              })
            }
          })
        } else {
          console.log("未授权")
        }
      }
    })
  },
  // 返回按钮
  back() {
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
    if (options.lid == 1) {
      util.url = 'pages/mine/index'
    } else {
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