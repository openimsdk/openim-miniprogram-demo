import { OpenIMSDK } from 'open-im-sdk'
App({
  globalData: {
    openIM: new OpenIMSDK()
  },
  async onLaunch() {
    wx.reLaunch({
      url: '/pages/login',
    })
  }
})
