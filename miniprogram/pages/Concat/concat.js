Page({
  data: {
    letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '#'],
    contacts: [
      {
        avatar: "/images/avatar2.png",
        name: "张三",
        phone: "13712345678"
      },
      {
        avatar: "/images/avatar2.png",
        name: "李四",
        phone: "13898765432"
      },
      {
        avatar: "/images/avatar2.png",
        name: "王五",
        phone: "13987654321"
      }
    ],
    searchResult: []
  },
  onInputChange: function(e) {
    this.setData({
      searchResult: [] // 清空搜索结果
    });
  },
  onSearch: function() {
    // 在实际应用中，可以进行搜索请求，将搜索结果存储在searchResult数组中
    this.setData({
      searchResult: ['搜索结果1', '搜索结果2', '搜索结果3']
    });
  }
})