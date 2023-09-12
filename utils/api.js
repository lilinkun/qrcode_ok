//根地址
const prefix = 'http://192.168.120.44:7078';


//图片上传
const uploadImg = prefix +  '/qrCode/upPic'
//获取电话号码
const getUserTel = prefix + '/event/getPhoneNumber'
//提交事件
const submitEvent = prefix + '/event'


/**
 * 数据接口
 */
let commonRequest = (methodType,url,data,callback,header)=>{
    wx.request({
      url: url,
      method:methodType,
      data:data,
      header : header,
      success:function(res){
          if(res.data.code == 200){
            callback.success(res.data)
        }else if(res.data.code == 500){
            callback.fail(res.data.msg)
        }else{
            callback.fail()
        }
      },
      fail:function(res){
          if(callback.fail){
              
              if(res.data && res.data.code == 500){
                callback.fail(res.data.msg)
              }else{
                callback.fail(res.errMsg)  
              }
          }
      }
    })
}


module.exports={
    uploadImg : uploadImg,
    getUserTel: getUserTel,
    submitEvent : submitEvent,
}