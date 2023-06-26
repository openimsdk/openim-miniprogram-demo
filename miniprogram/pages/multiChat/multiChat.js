
import { CbEvents, OpenIMSDK } from "open-im-sdk";

const im = new OpenIMSDK();

Page({
  data: {
    talkBasicInfo:{
      createNowDateTime: "8月16日 16:09",
      createGroupUsrNickName:"guang",
      groupName:"讨论小组",
      groupNumber:23
    },
    messages:[],
    currentUsrNickName:2,
    currentSendMsgTime:"下午两点",
    messageReadFlag:false,
    inputValue: ''
  },
  handleInput: function (e) {
    return e.detail.value;
  },
  inputMessage(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },
  sendMessage() {
    console.log("我要发送消息啦");
    const newMessage = { 
      sender: 2, // 'me' 表示自己，'other' 表示对方
      content: 2
    };
    const messages = this.data.messages.concat(newMessage);
    if(messages == null) return;
    messages.push(newMessage);
    this.setData({
      messages,
      inputValue: ''
    });
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
  }
})