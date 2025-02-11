const aplayer_fixed = new APlayer({
  container: document.getElementById('aplayer_fixed'),
  fixed: true, // 吸底模式
  //mini: false, // 迷你模式
  autoplay: false, //自动播放
  theme: 'red', //主题色
  loop: 'all', //循环模式: all one none
  order: 'list', //循环顺序: list random
  preload: 'none', //预加载: auto none metadata
  volume: 0.7, //音量设置 会导致用户设置的自定义音量失效
  //customAudioType: mysudio, //自定义音乐类型
  mutex: true, //播放器之间互斥 当一个在播放时 暂停其他所有播放器
  //lrcType: 3, //歌词类型
  listFolded: false, //false: 列表默认展开 true: 列表默认折叠
  listMaxHeight: 90, //列表最大数目
  audio: 
  [
    {
      name: '绯色之空', //歌曲名
      artist: '川田真美', //演唱者
      url: 'https://od.lk/s/NzNfMjUyMzcyNzVf/%E7%B7%8B%E8%89%B2%E3%81%AE%E7%A9%BA.mp3', //音乐文件
      cover: 'https://od.lk/s/NzNfMjUyMzcyODFf/%E7%B7%8B%E8%89%B2%E3%81%AE%E7%A9%BA.jpg', //音乐封面
      //lrc: 'lrc1.lrc', //歌词文件
      //theme: '#00FFFF', //主题色 会覆盖全局设置
      //type: auto //歌曲类型 auto hls normal 或 自定义
    },
    {
      name: '光るなら', //歌曲名
      artist: 'Goose house', //演唱者
      url: 'https://od.lk/s/NzNfMjUyMzcyNzdf/%E5%85%89%E3%82%8B%E3%81%AA%E3%82%89.mp3', //音乐文件
      cover: 'https://od.lk/s/NzNfMjUyMzcyNzhf/%E5%85%89%E3%82%8B%E3%81%AA%E3%82%89.jpg', //音乐封面
      //lrc: 'lrc1.lrc', //歌词文件
      //theme: '#FF0000', //主题色 会覆盖全局设置
      //type: auto //歌曲类型 auto hls normal 或 自定义
    },
  ]
});