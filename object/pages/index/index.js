//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    imgUrls: [
      {
        imgs: "http://www.wfboy.com/themes/default/imagesnew/lunbo/20190410bdg.jpg",
        child: [
          {
            imgs: "http://www.wfboy.com/images/201904/goods_img/35227_G_1554902755969.jpg",
            item:"法式磅蛋糕",
            price:"106",
            count:0,
            detail:"天然黄油、低筋小麦粉、全蛋液、白砂糖、食用盐、可可粉、南瓜、芒果、百香果酱",
            img: ["http://www.wfboy.com/images/upload/Image/newbdg.jpg", "http://www.wfboy.com/images/upload/Image/newbdg.jpg", "http://www.wfboy.com/images/upload/Image/newbdg.jpg","http://www.wfboy.com/images2/xqxts332.jpg"]
          }
        ]
      },
      {
        imgs:"http://www.wfboy.com/themes/default/imagesnew/lunbo/20190410gzdg.jpg",
        child:[
          {
            imgs: "http://www.wfboy.com/images/201904/goods_img/35229_G_1554903764484.jpg",
            item:"网红罐子蛋糕",
            price:"59",
            count: 0,
            detail:"低筋小麦粉、全蛋液、天然黄油、稀奶油、迷你奥利奥饼干、可可粉、抹茶粉、蔓越莓干、牛奶、糖粉",
            img: ["http://www.wfboy.com/images/upload/Image/newgzdg.jpg", 'http://www.wfboy.com/images/upload/Image/newgzdg.jpg', 'http://www.wfboy.com/images/upload/Image/newgzdg.jpg','http://www.wfboy.com/images/upload/Image/newgzdg.jpg']
          }
        ]
      },
      {
      imgs: 'http://www.wfboy.com/themes/default/imagesnew/lunbo/zmmbz.jpg',
      child: [
          {
            imgs: "http://www.wfboy.com/images/201901/goods_img/35191_G_1547702716113.jpg",
          item:"猪满满.裸蛋糕",
          price:"379",
          count: 0,
          detail:"乳脂奶油、芝士、巧克力酱、草莓酱、新鲜草莓、新鲜蓝莓",
          img: ["http://www.wfboy.com/images/upload/Image/jfzmm.jpg", "http://www.wfboy.com/images/upload/Image/jfzmm.jpg", "http://www.wfboy.com/images/upload/Image/jfzmm.jpg","http://www.wfboy.com/images/upload/Image/jfzmm.jpg"]
          }
        ]
      } 
    ],
    itemArr: [
      {
        img: "http://www.wfboy.com/themes/default/imagesnew/19/20190523xpc.jpg",
        item: "小瓢虫双莓慕斯",
        price: "179",
        count: 0,
        detail: "稀奶油、草莓果泥、蓝莓酱、酸奶、蜂蜜、低筋小麦粉、全蛋液",
        section: "4℃代表最佳品尝温度，4℃的慕斯，细腻得用舌头一推就融于口中"
      },
      {
        img: "http://www.wfboy.com/themes/default/imagesnew/19/20190430yzgln.jpg",
        item: "扬枝甘露小鲜肉",
        price: "269",
        count: 0,
        detail:"稀奶油、白砂糖、杨枝甘露酱、低筋小麦粉、全蛋液、抹茶粉、火龙果酱、芒果酱、草莓酱",
        section: "4℃代表最佳品尝温度，4℃的慕斯，细腻得用舌头一推就融于口中"
      },
      {
        img: "http://www.wfboy.com/themes/default/imagesnew/19/mtzsxx.jpg",
        item: "蜜桃芝心慕斯",
        price: "179",
        count: 0,
        detail: "稀奶油、白砂糖、杨枝甘露酱、低筋小麦粉、全蛋液、抹茶粉、火龙果酱、芒果酱、草莓酱",
        section: "4℃代表最佳品尝温度，4℃的慕斯，细腻得用舌头一推就融于口中"
      },
      {
        img: "http://www.wfboy.com/themes/default/imagesnew/18/20181213txn.jpg",
        item: "童趣数字蛋糕",
        price: "199",
        count: 0,
        detail: "法国淡奶油、 翻糖跑道、小汽车造型巧克力、石头糖",
        section: "4℃代表最佳品尝温度，4℃的慕斯，细腻得用舌头一推就融于口中"
      },
      {
        img: "http://www.wfboy.com/themes/default/imagesnew/18/201808zzgs.jpg",
        item: "脏脏够",
        price: "128",
        count: 0,
        detail: "瑞士黑巧克力、法国淡奶",
        section: "4℃代表最佳品尝温度，4℃的慕斯，细腻得用舌头一推就融于口中"
      },
      {
        img: "http://www.wfboy.com/themes/default/imagesnew/16/1608mctlms.jpg",
        item: "提拉米苏",
        price: "99",
        count: 0,
        detail: "稀奶油、白砂糖、杨枝甘露酱、低筋小麦粉、全蛋液、抹茶粉、火龙果酱、芒果酱、草莓酱",
        section: "4℃代表最佳品尝温度，4℃的慕斯，细腻得用舌头一推就融于口中"
      },
      {
        img: "http://www.wfboy.com/themes/default/imagesnew/16/1612cmkzs2.jpg",
        item: "草莓芝士",
        price: "179",
        count: 0,
        detail: "稀奶油、白砂糖、杨枝甘露酱、低筋小麦粉、全蛋液、抹茶粉、火龙果酱、芒果酱、草莓酱",
        section: "4℃代表最佳品尝温度，4℃的慕斯，细腻得用舌头一推就融于口中"
      },
      {
        img: "http://www.wfboy.com/themes/default/imagesnew/16/1607ydltlms.jpg",
        item: "意大利提拉米苏",
        price: "179",
        count: 0,
        detail: "马斯卡波尼芝士（意大利）可可粉（法国）淡奶（法国）砂糖（韩国）朗姆酒（巴西）"
      },
      {
        img: "http://www.wfboy.com/themes/default/imagesnew/16/1607xxhm.jpg",
        item: "小熊很芒",
        price: "199",
        count: 0,
        detail: "乳脂奶油（新西兰）、台农芒、泰国椰蓉、安佳黄油、幼砂糖（韩国）、全蛋液（德青源）、可可粉、巧克力、牛奶",
        section: "4℃代表最佳品尝温度，4℃的慕斯，细腻得用舌头一推就融于口中"
      },
      {
        img: "http://www.wfboy.com/themes/default/imagesnew/18/201810hsrng.jpg",
        item: "红丝绒蛋糕",
        price: "199",
        count: 0,
        detail: "淡奶,可可粉,黄油,低粉,砂糖",
        section: "4℃代表最佳品尝温度，4℃的慕斯，细腻得用舌头一推就融于口中"
      }
    ],
    colorArr: [
      {
        img: "http://www.blackswan.cn/data/wapimg/201903/1552671004436944497.jpg",
        item: "玫瑰涟漪",
        price: "699",
        count: 0,
        detail:"法国纯脂牛奶巧克力、法国纯脂黑巧克力、云南玫瑰、法国树莓果溶、韩国幼砂糖、欧洲天然淡奶油、德国树莓酒、荷兰荔枝酒",
        section:"冷藏保存2-7摄氏度"
      },
      {
        img: "http://www.blackswan.cn/data/wapimg/201811/1543527310020715573.jpg",
        item: "水晶梦",
        price: "1299",
        count: 0,
        detail:"欧洲天然淡奶油、云南玫瑰、法国树莓果溶、韩国幼砂糖、荔枝酒、法国葡萄糖浆、果冻、法国依索玛特糖",
        section:"冷藏保存2-7摄氏度"
      },
      {
        img: "http://www.blackswan.cn/data/wapimg/201903/1552240638032332089.jpg",
        item: "致爱",
        price: "599",
        count: 0,
        detail:"法国纯脂牛奶巧克力、法国纯脂白巧克力、云南糖渍玫瑰、欧洲天然淡奶油、奶油芝士、法国树莓果溶、进口纯牛奶、法国柠檬蛋白脆",
        section:"冷藏保存2-7摄氏度"
      },
      {
        img: "http://www.blackswan.cn/data/wapimg/201811/1543529212063532768.jpg",
        item: "黑天鹅玫瑰",
        price: "2999",
        count: 0,
        detail:"法国伊索玛特糖，单一产地马达加斯加黑巧克力;马达加斯加牛奶巧克力，云南玫瑰,意大利西西里岛开心果酱",
        section:"蛋糕冷藏保存、拉糖玫瑰和天鹅避光阴凉干燥储存2-7℃"
      },
      {
        img: "http://www.blackswan.cn/data/wapimg/201904/1554484092040088614.jpg",
        item: "纯爱",
        price: "599",
        count: 0,
        detail: "法国纯脂牛奶巧克力、法国纯脂白巧克力、云南糖渍玫瑰、欧洲天然淡奶油、奶油芝士、法国树莓果溶、进口纯牛奶、法国柠檬蛋白脆",
        section: "冷藏保存2-7摄氏度"
      },
      {
        img: "http://www.blackswan.cn/data/wapimg/201903/1553127368837719169.jpg",
        item: "天使之爱",
        price: "399",
        count: 0,
        detail: "法国纯脂黑巧克力、法国纯脂牛奶巧克力，新西兰天然淡奶油，奶油芝士、美国提子、朗姆酒",
        section: "冷藏保存2-7摄氏度"
      },
      {
        img: "http://www.blackswan.cn/data/wapimg/201903/1553202953499689120.jpg",
        item: "心舞",
        price: "599",
        count: 0,
        detail: "欧洲天然淡奶油、云南玫瑰、法国树莓果溶、韩国幼砂糖、荔枝酒、法国葡萄糖浆、果冻、法国依索玛特糖",
        section: "冷藏保存2-7摄氏度"
      },
      {
        img: "http://www.blackswan.cn/data/wapimg/201811/1543526908371715951.jpg",
        item: "白天鹅",
        price: "2999",
        count: 0,
        detail: "欧洲天然淡奶油、云南玫瑰、法国树莓果溶、韩国幼砂糖、荔枝酒、法国葡萄糖浆、果冻、法国依索玛特糖",
        section: "冷藏保存2-7摄氏度"
      },
      {
        img: "http://www.blackswan.cn/data/wapimg/201811/1543527188723835387.jpg",
        item: "美好生活",
        price: "999",
        count: 0,
        detail: "欧洲天然淡奶油、云南玫瑰、法国树莓果溶、韩国幼砂糖、荔枝酒、法国葡萄糖浆、果冻、法国依索玛特糖",
        section: "冷藏保存2-7摄氏度"
      },
      {
        img: "http://www.blackswan.cn/data/wapimg/201811/1543527362961490232.jpg",
        item: "天鵝湖",
        price: "1299",
        count: 0,
        detail: "欧洲天然淡奶油、云南玫瑰、法国树莓果溶、韩国幼砂糖、荔枝酒、法国葡萄糖浆、果冻、法国依索玛特糖",
        section: "冷藏保存2-7摄氏度"
      }
    ]
  },
  linkBanner:function(e){
    let bannerArr=this.data.imgUrls.find((item) => item.imgs == e.target.dataset.child)
    wx.navigateTo({
      url: '/pages/banner/banner?data=' + JSON.stringify(bannerArr.child),
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  linkDetail:function(e){
    let child=e.target.dataset.child
    let newArr = this.data.colorArr.find((item) => item.item === child) ? this.data.colorArr.find((item) => item.item === child) :            this.data.itemArr.find((item) => item.item === child)
    wx.navigateTo({
      url: '/pages/logs/logs?data=' + JSON.stringify(newArr),
    })
  },
  shopping:function(){
    wx.navigateTo({
      url: '/pages/shopping/shopping',
    })
  },
  onReady:function(e){
    this.audioCtx = wx.createAudioContext('myAudio')
    // this.audioCtx.play()
  },
  audioPlay() {
      this.audioCtx.play()
  },
  audioPause() {
    this.audioCtx.pause()
  },
  
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
