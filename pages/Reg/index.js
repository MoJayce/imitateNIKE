// pages/Reg/index.js
import util from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Iscountry: false,
    phoneNumber: "",
    verificationNum: "",
    region: ['浙江省', '杭州市', '江干区'],
    customItem: '全部',
    toastMsg:"发送验证码",
    daojs:true,
    checkStyle:false,//检查手机号码格式
  },
  PhoneNum(e) {
    // console.log(e.detail.value)
    const reg = 11 && /^((13|14|15|16|17|18|19)[0-9]{1}\d{8})$/;
    // console.log(reg.test(e.detail.value))
    this.setData({
      phoneNumber: e.detail.value
    })
    if (reg.test(e.detail.value)) {
      this.setData({
        checkStyle: false
      })
    } else {
      this.setData({
        checkStyle: true
      })
    }
  },
  setVerificationCode() {
    let that = this
    const reg = 11 && /^((13|14|15|16|17|18|19)[0-9]{1}\d{8})$/;
    // console.log(reg.test(that.data.phoneNumber))
    if (reg.test(that.data.phoneNumber) && that.data.daojs == true){//验证手机号码没问题
      let parmas = {
        Wid: util.wid,
        Mobile: that.data.phoneNumber
      }
      wx.request({
        url: util.host + '/api/admin/Manager/GetCode',
        method: "GET",
        data: parmas,
        success: res => {
          console.log(res)
          if (res.data.Code == 0) {
            if (that.data.daojs == true) {
              let i = 60
              let timer = setInterval(() => {
                i--;
                if (i == -1) {
                  that.setData({
                    daojs:true,
                    toastMsg: "发送验证码"
                  })
                  clearInterval(timer)
                } else {
                  that.setData({
                    daojs: false,
                    toastMsg: i + "秒后重试"
                  })
                }
              }, 1000)
            } else {
              console.log("不能点l")
            } 
            // that.setData({
            //   daojs: false
            // })
            // return
            wx.showToast({
              title: '验证码发送成功!',
              icon: 'succes',
              duration: 1000,
              mask: true
            })
          }
        }
      })
    } else if (reg.test(that.data.phoneNumber) && that.data.daojs == false){
      console.log("不能点l")
    }else{
      console.log("没有号码")
      that.setData({
        checkStyle: true
      })
    }
   
  },
  verificationCode(e) {
    console.log(e.detail.value)
    this.setData({
      verificationNum: e.detail.value
    })
  },
  next() {
    // console.log(111)

    // wx.navigateTo({
    //   url: '../RegSuccess/index',
    // })
    // return
    let that = this
    const reg = 11 && /^((13|14|15|16|17|18|19)[0-9]{1}\d{8})$/;
    if (reg.test(that.data.phoneNumber) && that.data.verificationNum != ""){//为输入手机号和验证码是不能点击的
      let data = {
        sessionId: util.sessionId,
        mobile: that.data.phoneNumber,
        yzm: that.data.verificationNum,
        wid: util.wid
      }
      wx.request({
        url: util.host + '/api/weixin/WxLogin/Bind',
        method: "POST",
        data: JSON.stringify(data),
        success: res => {
          console.log(res)
          if (res.data.Code == 0) {
            if (res.data.Data.errcode == 0) {
              util.IsBind = res.data.Data.IsBing
              util.IsLogin = res.data.Data.IsReg
              wx.showToast({
                title: '注册成功!',
                icon: 'success',
                duration: 1000,
                mask: true
              })
              // wx.navigateTo({
              //   url: '../RegSuccess/index',
              // })记录客户生日
              wx.switchTab({
                url: '../index/index',
              })//直接跳转到首页
            }
          }else {
            console.log('绑定失败')
            wx.showToast({
              title: '验证码错误或失效!',
              icon: 'none',
              duration: 1000,
              mask: true
            })
          }
        }
      })
    }else{
      wx.showToast({
        title: '请检查是否输入完整!',
        icon: 'none',
        duration: 1000,
        mask: true
      })
    }
  },
  toLogin() {
    wx.navigateTo({
      url: '../Logining/index',
    })
  },

  bindRegionChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    console.log(options.rid)
    if (options.rid) {
      that.setData({
        Iscountry: true
      })
    } else {
      that.setData({
        Iscountry: false
      })
    }
    if (options.mid == '1') {
      that.setData({
        phoneNumber: util.phoneNum
      })
    }else{
      that.setData({
        phoneNumber: ""
      })
    }
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
    // console.log(util.phoneNum)
   
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