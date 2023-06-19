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
  onLoad() {
    this.setData({
      nbTitle: 'OpenIM',
      nbLoading: true,
      nbFrontColor: '#ffffff',
      nbBackgroundColor: '#000000',
    })
  }
})