//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    swiper:{
      userInfo: {},
      imgUrls: [
          {
              id:1,
           
              name:"../img/2.jpg"
          },
          {
              id: 1,
            
             name:"../img/4.jpg"
          },
          {
              id: 1,
            
             name:"../img/3.png"
          },
          {
              id: 1,
           
              name:"../img/6.png"
          } 
      ],
      indicatorDots: true,//是否显示面板指示点
      indicatorColor:'rgba(249,245,236,0.6)',
      indicatorActiveColor:'#FFCC66',
      autoplay: true,//是否自动切换
      interval: 5000,//自动切换时间间隔
      duration: 500,//滑动动画时长
      circular: true//是否自动切换
    },
    todayListArr:[
      {
        imgUrl:'../img/7.jpg',
        text:'鸡扒饭',
        author: '￥10',
        id:1
      }, 
      {
        imgUrl: '../img/zhupa.jpg',
        text: '猪扒饭',
        author: '￥10',
        id: 1
      },
      {
        imgUrl: '../img/zhuzha.jpg',
        text: '猪杂汤饭',
        author: '￥10',
        id: 1
      }, 
      {
        imgUrl: '../img/timg.jpg',
        text: '猪杂汤粉',
        author: '￥10',
        id: 1
      },
      {
        imgUrl: '../img/yatui.jpg',
        text: '鸭腿饭',
        author: '￥10',
        id: 1
      },
      {
        imgUrl: '../img/shaoya.jpg',
        text: '烧鸭饭',
        author: '￥10',
        id: 1
      },
       {
         imgUrl: '../img/huadan.jpg',
         text: '滑蛋饭',
         author: '￥10',
        id: 1
       },
       {
         imgUrl: '../img/ji.jpg',
         text: '黄焖鸡',
         author: '￥10',
         id: 1
       }
    ],
    isLoading:false,//正在加载中
    noMore:true//是否还有更多数据
  },  //事件处理函数
  upper: function (e) {
      console.log(e)
  },
  lower: function (e) {
      console.log(e)
  },
  scroll: function (e) {
      console.log(e)
  },
  onReachBottom: function () {
      if(!this.data.noMore){
          var that = this;
          console.log('circle 下一页');
          this.setData({
              isLoading: true
          })
          var timer = setTimeout(function () {
              console.log(888);
              that.setData({
                  isLoading: false
              })
              clearTimeout(timer);
          }, 1000)
      }
      
      
    //   wx.request({
    //       url: '',
    //       data: {},
    //       method: 'GET',
    //       // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    //       // header: {}, // 设置请求的 header
    //       success: function (res) {
    //           // success
    //       },
    //       fail: function () {
    //           // fail
    //       },
    //       complete: function () {
    //           // complete
    //           wx.hideNavigationBarLoading() //完成停止加载
    //           wx.stopPullDownRefresh() //停止下拉刷新
    //       }
    //   })
  }
  
})
