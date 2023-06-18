Page({
  data: {
    messages: [],        // 消息列表
    inputValue: ''  ,
    chatHistory:[]    // 输入框内容
  },

  inputChange: function(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },
  sendMessage: function() {
    var newMessage = {
      sender: 'AllianceTing',
      text: this.data.inputValue,
      avatarUrl:"/images/avatar2.png"
    };
    var messages = this.data.messages;
    if(messages.text == "") return;
    else{
      messages.push(newMessage);
    }
    this.setData({
      messages: messages,
      inputValue: ''
    });
  }
});