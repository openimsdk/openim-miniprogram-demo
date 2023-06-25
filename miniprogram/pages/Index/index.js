import { CbEvents, OpenIMSDK } from "open-im-sdk";

const im = new OpenIMSDK();

Page({
  data: {
    messages: [
      {
        avatar: "../images/avatar1.png",
        nickname: "张三",
        lastMessage: "你好，最近怎么样？",
        time: "09:00"
      },
      {
        avatar: "../images/avatar2.png",
        nickname: "李四",
        lastMessage: "明天下午有空吗？我们聚一下",
        time: "昨天"
      }
      // 其他消息...
    ],
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
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
  onLoad() {
    this.setData({
      nbTitle: 'OpenIM',
      nbLoading: true,
      nbFrontColor: '#ffffff',
      nbBackgroundColor: '#000000',
    })
  }
})