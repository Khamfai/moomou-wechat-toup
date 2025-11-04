// pages/topup.js
Page({
  /**
   * Page initial data
   */
  data: {
    listAmounts: [{
      id: "10",
      amount: (10000).toLocaleString('en-US', {
        style: 'currency',
        currency: 'LAK',
      })
    }, {
      id: "20",
      amount: (20000).toLocaleString('en-US', {
        style: 'currency',
        currency: 'LAK',
      })
    }, {
      id: "50",
      amount: (50000).toLocaleString('en-US', {
        style: 'currency',
        currency: 'LAK',
      })
    }, {
      id: "100",
      amount: (100000).toLocaleString('en-US', {
        style: 'currency',
        currency: 'LAK',
      })
    }, {
      id: "200",
      amount: (200000).toLocaleString('en-US', {
        style: 'currency',
        currency: 'LAK',
      })
    }, {
      id: "500",
      amount: (500000).toLocaleString('en-US', {
        style: 'currency',
        currency: 'LAK',
      })
    }]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  },
})