// pages/chat/multichat.js
import { CbEvents, OpenIMSDK } from "open-im-sdk";

const im = new OpenIMSDK();

Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  imLogin(){
    const options = {
      userID:"940974738",
      token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVSUQiOiI5NDA5NzQ3MzgiLCJQbGF0Zm9ybSI6IldlYiIsImV4cCI6MTY5NTAyNDg2NSwibmJmIjoxNjg3MjQ4NTY1LCJpYXQiOjE2ODcyNDg4NjV9.4t4f5VtiXLWdj0TfHIRvbNj_45HFqjWsBI3dMrbkflY",
      url:"ws://121.5.182.23:10003",
      platformID:5,
    }
    im.login(options).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
    im.on(CbEvents.ONRECVNEWMESSAGE,()=>{
      console.log("new msg::::::");
    })
    im.on(CbEvents.ONRECVC2CREADRECEIPT,()=>{
      console.log("c2c msg:::::");
    })
    im.on(CbEvents.ONTOTALUNREADMESSAGECOUNTCHANGED,()=>{
      console.log("total change::::::");
    })
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
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},
  onShareAppMessage() {},
  sendMessage(){ 
    }
})