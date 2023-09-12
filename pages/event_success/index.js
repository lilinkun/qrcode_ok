// pages/event_success/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        telNumber : "",
        eventInfo: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            telNumber : wx.getStorageSync('phone'),
            eventInfo : wx.getStorageSync('qrcode_info')
        })
    },

    backtab(){
        wx.navigateBack({
            delta:2
        }
        )
    },

    freeTell:function(){
        wx.makePhoneCall({
          phoneNumber: '12122',
        })
       },

    recentAlarm(){
        wx.navigateTo({
            url: '../recent_alarm/index',
          })
    },

    again(){
        wx.navigateBack({
            delta:1
        }
        )
    },

})