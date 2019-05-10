const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
};
//获取当前时间戳
function getNowTime() {
  var timestamp = Date.parse(new Date());
  timestamp = timestamp / 1000;

  //获取当前时间
  var n = timestamp * 1000;
  var date = new Date(n);
  //年
  var Y = date.getFullYear();
  //月
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  //日
  var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  //时
  var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  //分
  var m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  //秒
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  var timeString = Y + "-" + M + "-" + D + " " + h + ":" + m + ":" + s;
  return timeString
};
//转换时间
function formatDate(time) {
  var t = time.slice(6, 19)
  var dt = new Date(parseInt(t));
  var year = dt.getFullYear();
  var month = (dt.getMonth() + 1 < 10 ? "0" + (dt.getMonth() + 1) : dt.getMonth() + 1);
  var date = (dt.getDate() < 10 ? "0" + dt.getDate() : dt.getDate());
  var hour = (dt.getHours() < 10 ? "0" + dt.getHours() : dt.getHours());
  var minute = (dt.getMinutes() < 10 ? "0" + dt.getMinutes() : dt.getMinutes());
  var second = (dt.getSeconds() < 10 ? "0" + dt.getSeconds() : dt.getSeconds());
  var FormatTime = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
  return FormatTime
};
// 获取当前页面url
function getUrl() {
  var pages = getCurrentPages() //获取加载的页面
  var currentPage = pages[pages.length - 1] //获取当前页面的对象
  var url = currentPage.route //当前页面url
  return url
};
// 获取当前页面url的参数
function getUrlOption() {
  var pages = getCurrentPages() //获取加载的页面
  var currentPage = pages[pages.length - 1] //获取当前页面的对象
  var url = currentPage.route //当前页面url
  var options = currentPage.options //如果要获取url中所带的参数可以查看options

  //拼接url的参数
  var urlWithArgs = ''
  for (var key in options) {
    var value = options[key]
    urlWithArgs += key + '=' + value + '&'
  }
  urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length - 1)

  return urlWithArgs
};
// 获取手机设备信息
function getPhoneInfo() {
  var info = ''
  try {
    var res = wx.getSystemInfoSync()
    info = res.brand + ',' + res.model + ',' + res.system + ',' + res.platform
  } catch (e) { }
  return info
};
//用户行为记录
function bindUserAction(that, page) {
  var item = {
            sessionId: module.exports.sessionId || '',
            openid: module.exports.openid || '',
            Fromid: module.exports.Fromid || '',
            url: module.exports.host + '/' + getUrl() + '?' + getUrlOption(),
            pageName: getUrl(),
            pid: that.data.utilpid || -1,
            parameter: getUrlOption(),
            startDate: that.data.startDate,
            endDate: getNowTime(),
            city: '',
            wid: module.exports.wid,
            telVersion: getPhoneInfo(),
            sceneId: module.exports.sceneId || '',
            fromId: module.exports.fromId || '',
            extId: module.exports.extId || ''
          }
  return item
  // wx.request({
  //   url: module.exports.host + '/api/weixin/WxShopVisitoraction/InsertActionRecord',
  //   method: 'POST',
  //   data: JSON.stringify({
  //     "model": item
  //   }),
  //   success: function (res) {
  //   },
  //   error: function (err) {
  //     console.log(err)
  //   }
  // })
};
function promise(ajaxurl,method,item){
   return new Promise((resolve,reject)=>{
     wx.request({
       url: module.exports.host + ajaxurl,
       method: method,
       data: method == "POST" ? JSON.stringify(item):item,
       success: function (res) {
         resolve(res)
       },
       error: function (err) {
         console.log(err)
         reject(err)
       }
     })
   })
}
//每个页面的登录判断
function IsLoginReg(that, rukou) {
  var IsUcard = module.exports.IsUcard
  var IsLogin = module.exports.IsLogin
  if (IsLogin == 0 && IsUcard == 0) {
    wx.navigateTo({
      url: '../userinfo/userinfo?pid=login',
    })
  } else if (IsLogin == 1 && IsUcard == 0) {
    wx.navigateTo({
      url: '../register/register',
    })
  } else if (IsLogin == 1 && IsUcard == 1) {
    if (rukou == 'onlogin') {

    } else {
      that.cz()
    }

  }
};
//微信登录，如果islogin=0 flag==1 是代表页面要刷新，2不用
function getUserLogin(that, flag) {
  wx.login({
    success: function (res) {
      if (res.code) {
        //发起网络请求
        wx.request({
          url: module.exports.host + '/api/weixin/WxLogin/OnLogin',
          data: {
            code: res.code,
            wid: module.exports.wid
          },
          method: 'POST',
          success: function (res) {
            if (res.data.Code == 0) {
              if (res.data.Data.errcode == 0) {
                module.exports.sessionId = res.data.Data.sessionId
                module.exports.IsBind = res.data.Data.IsBing
                module.exports.IsLogin = res.data.Data.IsReg
                util.IsLoginReg(that, 'onlogin')
                if (flag == 1) {
                  that.onShow()
                } else if (flag == 3) {
                  wx.showToast({
                    title: '操作出错，请稍后重试',
                    icon: 'none',
                    duration: 1000
                  })
                  setTimeout(function () {
                    that.onShow()
                  }, 1000)
                }
              } else if (res.data.d.errcode == 1) {
                wx.navigateTo({
                  url: '../register/register',
                })
              }
            }
          }
        })
      } else {
        console.log('登录失败！' + res.errMsg)
      }
    }
  });
};
let url = "";
let phoneNum = "";
let address = "";
module.exports = {
  formatTime: formatTime, 
  host: 'http://192.168.0.138',
  imgUrl: 'http://192.168.0.138',
  sessionId:"",
  sceneId: wx.getLaunchOptionsSync().scene,
  wid:1,
  openid:"",
  url:"",
  promise,
  VisitorId: "",//用户行为记录所需的VisitorId
  Fromid: "",//用户行为记录所需的Fromid
  Sceneid: "",//用户行为记录所需的Sceneid
  userInfo:"",//用户信息记录头像，id等
  phoneNum:"",//手机号码记录
  address,
  IsBind:"",//是否绑定手机号
  IsLogin:"",//是否登录
  bindUserAction: bindUserAction, //用户行为记录
}
