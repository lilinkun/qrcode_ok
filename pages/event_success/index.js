// pages/event_success/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

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

    
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
        wx.navigateBack({
            delta:2
        })
    },

})