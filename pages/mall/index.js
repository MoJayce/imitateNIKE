// pages/mall/index.js
import util from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 1,
    nums: 1,
    currentSwiper: 0,
    vertical: false,
    interval: 3000,
    duration: 800,
    autoplay: true,
    toView: "",
    toViews: false,
    imgUrl: util.imgUrl,
    list: [],
    humanList: [],
    adList: [{
        "picUrl": "https://content.nike.com/content/dam/one-nike/zh-cn/season-2019-sp/MLP/PWH/0318/190315_Category_PWH_MB_01.jpg.transform/full-screen-phone/190315_Category_PWH_MB_01.jpg"
      },
      {
        "picUrl": "https://content.nike.com/content/dam/one-nike/zh-cn/season-2019-sp/MLP/PWH/0318/190315_Category_PWH_MB_03.jpg.transform/full-screen-phone/190315_Category_PWH_MB_03.jpg"
      },
      {
        "picUrl": "https://content.nike.com/content/dam/one-nike/zh-cn/season-2019-sp/MLP/PWH/0318/190315_Category_PWH_MB_02.jpg.transform/full-screen-phone/190315_Category_PWH_MB_02.jpg"
      }
    ],
    adLists: [{
      id: 'shoes',
      src: 'https://img.zcool.cn/community/01ae88582c08b4a84a0e282bc76781.jpg@1280w_1l_2o_100sh.jpg',
      open: false,
      pages: [{
          type: '所有鞋类',
          url: "all"
        }, {
          type: '健身训练',
          url: "fitness"
        },
        {
          type: '休闲',
          url: 'leisure'
        }, {
          type: 'Jordan',
          url: 'Jordan'
        },
        {
          type: '跑步',
          url: 'running'
        }, {
          type: 'React',
          url: 'React'
        },
        {
          type: '篮球',
          url: "basketball"
        }, {
          type: 'Air Force1',
          url: 'AirForce1'
        },
        {
          type: '足球',
          url: "football"
        }, {
          type: 'Air Max',
          url: 'AirMax'
        }
      ]
    }, {
      id: 'clothes',
      src: 'https://img.zcool.cn/community/010f2858d2546fa801219c779a0552.jpg@1280w_1l_2o_100sh.jpg',
      open: false,
      pages: [{
          type: '所有服饰',
          url: "all"
        }, {
          type: '上衣/T恤',
          url: "TShit"
        },
        {
          type: '连帽衫/套头衫',
          url: 'pullover'
        }, {
          type: '短裤',
          url: 'shorts'
        },
        {
          type: '外套/夹克',
          url: 'coat'
        }, {
          type: '紧身运动服/Nike Pro',
          url: 'NikePro'
        },
        {
          type: '长裤',
          url: "pants"
        }, {
          type: '袜子',
          url: 'socks'
        }
      ]
    }, {
      id: 'fittings',
      src: 'https://img.zcool.cn/community/01de63598bcb9e0000002129954907.jpg@1280w_1l_2o_100sh.jpg',
      open: false,
      pages: [{
          type: "所有配件",
          url: 'all'
        }, {
          type: "球",
          url: "ball"
        },
        {
          type: "包",
          url: "bag"
        }, {
          type: "帽子/头带",
          url: "hat"
        }
      ]
    }],
    // -------------------------------分割线-------------------------------------------------
    human: ["男子", "女子", "儿童"],
    mans: "",
    offsetTop: "", //当距离顶部高度变化时去掉classA
    animationData: "",
  },
  // 点击切换tab
  // man(e) {
  //   let that = this
  //   let man = e.currentTarget.dataset.name
  //   let humanLists = []
  //   let Listsa = []
  //   if (man == that.data.human[0]) {
  //     humanLists = that.data.adList,
  //       Listsa = that.data.adLists
  //   } else if (man == that.data.human[1]) {
  //     humanLists = that.data.ladyList,
  //       Listsa = that.data.ladyLists
  //   } else if (man == that.data.human[2]) {
  //     humanLists = that.data.childList
  //     Listsa = that.data.childLists
  //   }
  //   console.log(humanLists)
  //   console.log(Listsa)
  //   that.setData({
  //     mans: man,
  //     humanList: humanLists,
  //     list: Listsa
  //   })
  // },
  // 轮播图切换
  swiperChange: function(e) {
    this.setData({
      num: e.detail.current + 1
    })
  },
  // 到顶部
  // toTop(e) {
  //   const id = e.currentTarget.id
  //   let that = this
  //   console.log(that.data.toViews)
  //   that.setData({
  //     toView: id,
  //     toViews: true,
  //     offsetTop: e.currentTarget.offsetTop
  //   })
  // },
  // 滚动事件
  onPageScroll: function(e) {
   

  },
  // 点击事件
  kindToggle(e) {
    const id = e.currentTarget.id
    console.log(id)
    wx.navigateTo({
      url: '../goodslist/index?gid='+id,
    })
  },
  /**
   * 收缩核心代码
   */
  // kindToggle(e) {
  //   const id = e.currentTarget.id
  //   const list = this.data.list
  //   for (let i = 0, len = list.length; i < len; ++i) {
  //     if (list[i].id === id) {
  //       list[i].open = !list[i].open
  //     } else {
  //       list[i].open = false
  //     }
  //   }

  //   /**
  //    * key和value名称一样时，可以省略
  //    * 
  //    * list:list=>list
  //    */
  //   this.setData({
  //     list
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this
    let parmas = {
      wid:util.wid,
      ParentId:0
    }
    wx.request({
      url: util.host+'/api/weixin/WxShopCategory/WxShopCategoryRank',
      method:"GET",
      data: parmas,
      success:res=>{
        console.log(res)
        let list = Object.assign([],res.data.Data)
        // console.log(list)
        // var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        // var n = 2, s = "";
        // for (var i = 0; i < n; i++) {
        //   var rand = Math.floor(Math.random() * str.length);
        //   s += str.charAt(rand);
        // }
        // // console.log(s);
        // for(let i of list){
        //   i.Id = s+i.Id
        // }
        console.log(list)
        that.setData({
          list: list
        })
      }
    })
    // util.promise('/api/weixin/WxShopCategory/WxShopCategoryRank',"GET",parmas).then((res) => {
    //   console.log(res.data)
    // }).catch((err) => {
    //   console.log(err)
    // })
    // 
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