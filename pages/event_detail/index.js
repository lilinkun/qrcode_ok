const api = require("../../utils/api")

// pages/event_detail/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        event : "请选择",
        type : 0,
        content:"",
        source:['../../static/event/add_photo.webp'],
        isPhoto:false,
        telNumber:"",
        eventInfo:{},
    },

    /**
     * 事件描述
     */
    getInputValue(e){
        let value = e.detail.value 
        this.setData({
            content : value
        })
    },

    choose_type(e){
        this.setData({
            type : e.currentTarget.dataset.type
        })
    },
   
       /**
        * 上传图片
        */
    uploadimg:function(e){
        
        if (e.currentTarget.dataset.value != "../../static/event/add_photo.webp") {
            return
        }


        var that = this;
        wx.chooseImage({ //从本地相册选择图片或使用相机拍照
         count: 3, // 默认9
         sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
         sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
         success:function(res){

            switch (res.tempFilePaths.length) {
                case 1:
                    res.tempFilePaths[1] = '../../static/event/add_photo.webp'
                    break;
                case 2:
                    res.tempFilePaths[2] = '../../static/event/add_photo.webp'
                    break;
            
                default:
                    break;
            }

         //console.log(res)
         //前台显示
         that.setData({
          source: res.tempFilePaths,
          isPhoto:false
         })
         // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
         var tempFilePaths = res.tempFilePaths
        //   wx.uploadFile({
        //   url: api.uploadImg,
        //   filePath: tempFilePaths[0],
        //   name: 'multipartFile',
          
        //   success:function(res){
        //   //打印
        //   console.log(res.data)
        //   }
        //  })
         
         }
        })
        },

    submit(){
        // wx.navigateTo({
        //     url: '../event_success/index',
        //   })

        

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            telNumber : wx.getStorageSync('phone') ,
            eventInfo : wx.getStorageSync('qrcode_info')
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

 

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

   
})