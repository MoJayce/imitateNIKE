// pages/mall/index.js
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
    ladyList: [{
        "picUrl": "https://content.nike.com/content/dam/one-nike/zh-cn/season-2019-sp/WLP/PWH/0227/0226_WM_FENOM_PWH_MB1.jpg.transform/full-screen-phone/0226_WM_FENOM_PWH_MB1.jpg"
      },
      {
        "picUrl": "https://content.nike.com/content/dam/one-nike/zh-cn/season-2019-sp/WLP/PWH/0227/0226_WM_FENOM_PWH_MB2.jpg.transform/full-screen-phone/0226_WM_FENOM_PWH_MB2.jpg"
      },
      {
        "picUrl": "https://content.nike.com/content/dam/one-nike/zh-cn/season-2019-sp/WLP/PWH/0227/0226_WM_FENOM_PWH_MB3.jpg.transform/full-screen-phone/0226_WM_FENOM_PWH_MB3.jpg"
      }
    ],
    ladyLists: [{
      id: 'shoes',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555065788550&di=b8ec0579f05439df37b6013efb6e5307&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01bc5e5a502303a8012180c5602af9.jpg%401280w_1l_2o_100sh.jpg',
      open: false,
      pages: [{
          type: '所有',
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
          type: 'Air Force1',
          url: 'AirForce1'
        },
        {
          type: '滑板',
          url: "football"
        }, {
          type: 'Air Max',
          url: 'AirMax'
        }
      ]
    }, {
      id: 'clothes',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555065788549&di=28fd5592c7cdc0e7e3e686704da16ec5&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F015c90574557586ac72525aecfc398.jpg%40900w_1l_2o_100sh.jpg',
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
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555065788548&di=d18dcac344c2fb9f68b35144d950e9b3&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F015b485897fc06a801219c7778692f.jpg',
      open: false,
      pages: [{
          type: "所有配件",
          url: 'all'
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
    childList: [{
        "picUrl": "https://content.nike.com/content/dam/one-nike/zh-cn/season-2019-su/YA/PWH/0401/SU19_0329_YA_PWH_APP_MB_BOY1.jpg.transform/full-screen-phone/SU19_0329_YA_PWH_APP_MB_BOY1.jpg"
      },
      {
        "picUrl": "https://content.nike.com/content/dam/one-nike/zh-cn/season-2019-su/YA/PWH/0401/SU19_0329_YA_PWH_APP_MB_BOY2.jpg.transform/full-screen-phone/SU19_0329_YA_PWH_APP_MB_BOY2.jpg"
      },
      {
        "picUrl": "https://content.nike.com/content/dam/one-nike/zh-cn/season-2019-su/YA/PWH/0401/SU19_0329_YA_PWH_APP_MB_BOY3.jpg.transform/full-screen-phone/SU19_0329_YA_PWH_APP_MB_BOY3.jpg"
      }
    ],
    childLists: [{
      id: 'boys',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555325536263&di=cb3d824ae18fd1d26d2b62f16622ed1e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F0022c7f76d001eb2bf54e45a33336243251804c78e285-gMX8Bh_fw658',
      open: false,
      pages: [{
          type: '鞋类',
          url: "shoes"
        }, {
          type: '衣服',
          url: "Clothes"
        },
        {
          type: '婴童(17-27欧码)',
          url: 'badyShoes'
        }, {
          type: '婴童(0-3岁)',
          url: 'badyClothes'
        },
        {
          type: '幼童(27.5-35欧码)',
          url: 'toddlerShoes'
        }, {
          type: '幼童(4-6岁)',
          url: 'toddlerClothes'
        },
        {
          type: '大童(35.5-40欧码)',
          url: "childsShoes"
        }, {
          type: '大童(7岁以上)',
          url: 'childsClothes'
        }
      ]
    }, {
      id: 'grils',
      src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555325269432&di=fd1812425462951c3a8e67b0bf217887&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0181c159d66162a80120446355b1e7.jpg%401280w_1l_2o_100sh.jpg',
      open: false,
      pages: [{
          type: '鞋类',
          url: "shoes"
        }, {
          type: '衣服',
          url: "Clothes"
        },
        {
          type: '婴童(17-27欧码)',
          url: 'badyShoes'
        }, {
          type: '婴童(0-3岁)',
          url: 'badyClothes'
        },
        {
          type: '幼童(27.5-35欧码)',
          url: 'toddlerShoes'
        }, {
          type: '幼童(4-6岁)',
          url: 'toddlerClothes'
        },
        {
          type: '大童(35.5-40欧码)',
          url: "childsShoes"
        }, {
          type: '大童(7岁以上)',
          url: 'childsClothes'
        }
      ]
    }],
    human: ["男子", "女子", "儿童"],
    mans: "",
    offsetTop: "", //当距离顶部高度变化时去掉classA
    animationData: "",
  },
  // 点击切换tab
  man(e) {
    let that = this
    let man = e.currentTarget.dataset.name
    let humanLists = []
    let Listsa = []
    if (man == that.data.human[0]) {
      humanLists = that.data.adList,
        Listsa = that.data.adLists
    } else if (man == that.data.human[1]) {
      humanLists = that.data.ladyList,
        Listsa = that.data.ladyLists
    } else if (man == that.data.human[2]) {
      humanLists = that.data.childList
      Listsa = that.data.childLists
    }
    console.log(humanLists)
    console.log(Listsa)
    that.setData({
      mans: man,
      humanList: humanLists,
      list: Listsa
    })
  },
  // 轮播图切换
  swiperChange: function(e) {
    this.setData({
      num: e.detail.current + 1
    })
  },
  // 到顶部
  toTop(e) {
    const id = e.currentTarget.id
    let that = this 
    console.log(that.data.toViews)
    that.setData({
      toView: id,
      toViews: true,
      offsetTop: e.currentTarget.offsetTop
    })
  },
  // 滚动事件
  onPageScroll: function(e) {
    // console.log(e);//{scrollTop:99}
    // console.log(e.detail.scrollTop)
    let that = this
    let scrollTop = e.detail.scrollTop
    let offsetTop = that.data.offsetTop
    // console.log(scrollTop)
    // console.log(offsetTop)
    console.log(that.data.toViews)
    if (scrollTop < 200) {
      that.setData({
        toViews: false
      })
    }

  },
  /**
   * 收缩核心代码
   */
  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }

    /**
     * key和value名称一样时，可以省略
     * 
     * list:list=>list
     */
    this.setData({
      list
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this
    let humanLists = []
    let Lists = []
    humanLists = that.data.adList
    Lists = that.data.adLists
    // console.log("每次点击都会执行")
    that.setData({
      mans: that.data.human[0],
      humanList: humanLists,
      list: Lists
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