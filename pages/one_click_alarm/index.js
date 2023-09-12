const api = require("../../utils/api")
const bmap = require('../../libs/bmap-wx.min.js');
var wxMarkerData = [];


Page({

    /**
     * 页面的初始数据
     */
    data: {
        telNumber: "",
        qrcode_info:{},
        markers: [],
        latitude: '',
        longitude: '',
        rgcData: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // wx.showToast({
        //   title: options.zh,
        //   icon : 'none'
        // })

        this.data.qrcode_info.pileNumber = 'k93+200'
        this.data.qrcode_info.direction = '上行'
        this.data.qrcode_info.address = '湖南省长沙市那个嘎达'

        // qrcode_info.pileNumber = options.zh
        // qrcode_info.direction = options.direction
        // qrcode_info.address = options.address
        
        wx.setStorageSync('qrcode_info', this.data.qrcode_info)

        // const key = 'F3TBZ-JQCCF-WNQJP-J2W2C-OZVNK-S7FSM'; //使用在腾讯位置服务申请的key
        // const referer = '湘高驿行'; //调用插件的app的名称
        // const location = JSON.stringify({
        //   latitude: 39.89631551,
        //   longitude: 116.323459711
        // });
        // const category = '生活服务,娱乐休闲';
        
        // wx.navigateTo({
        //   url: `plugin://chooseLocation/index?key=${key}&referer=${referer}&location=${location}&category=${category}`
        // });
        // let that = this
        // wx.getLocation({
        //     type: 'wgs84',
        //     success (res) {
        //       const latitude = res.latitude
        //       const longitude = res.longitude
        //       const speed = res.speed
        //       const accuracy = res.accuracy
        //     //   that.jumpMap(res)
        //     }
        //    })

        var that = this;
        var BMap = new bmap.BMapWX({
            ak: 'GQq4v5dqYg4dckWF1Bq2MgBvSnWpE90s'
        });
        var fail = function(data) {
            console.log(data)
        };
        var success = function(data) {
            wxMarkerData = data.wxMarkerData;
            that.setData({
                markers: wxMarkerData
            });
            that.setData({
                latitude: wxMarkerData[0].latitude
            });
            that.setData({
                longitude: wxMarkerData[0].longitude
            });
        }
        BMap.regeocoding({
            fail: fail,
            success: success,
            iconPath: '../../img/marker_red.png',
            iconTapPath: '../../img/marker_red.png'
        });


    },

    jumpMap(e){
        // const key = 'F3TBZ-JQCCF-WNQJP-J2W2C-OZVNK-S7FSM'; //使用在腾讯位置服务申请的key
        // const referer = '湘高驿行'; //调用插件的app的名称
        // const location = JSON.stringify({
        //   latitude: e.latitude,
        //   longitude: e.longitude
        // });
        // const category = '生活服务,娱乐休闲';
        
        // wx.navigateTo({
        //   url: `plugin://chooseLocation/index?key=${key}&referer=${referer}&location=${location}&category=${category}`
        // });
    },

    inputBtn(){
        wx.login({
          success: (res) => {
            
          },
        })
    },

    alarm_click(){
        wx.navigateTo({
          url: '../event_detail/index',
        })
    },

    getPhoneNumber(e){
        let that = this
        let detail = e.detail;
        console.log(detail);
        if (detail.errMsg === "getPhoneNumber:ok") {
            console.log('用户同意授权');
            let code = detail.code; // 动态令牌
            console.log(code);
            wx.request({
                url: api.getUserTel,
                method: 'POST',
                data: {
                    code : code
                },
                success(res) {
                    console.log(res.data); // 后端返回解析出的手机号，或者直接返回登录成功的信息
                    wx.setStorageSync('phone', res.data.phone_info.phoneNumber)
                    that.setData({
                        telNumber : res.data.phone_info.phoneNumber
                    })
                }
            })

        } else {
            console.log('用户拒绝授权');
        }
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


})