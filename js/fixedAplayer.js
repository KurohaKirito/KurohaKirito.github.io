const aplayer_fixed = new APlayer({
  container: document.getElementById('aplayer_fixed'),
  fixed: true, // 吸底模式
  // mini: false, // 迷你模式
  autoplay: false, // 自动播放
  theme: 'red', // 主题色
  loop: 'all', // 循环模式: all one none
  order: 'list', // 循环顺序: list random
  preload: 'none', // 预加载: auto none metadata
  volume: 0.7, // 音量设置 会导致用户设置的自定义音量失效
  // customAudioType: mysudio, // 自定义音乐类型
  mutex: true, // 播放器之间互斥 当一个在播放时 暂停其他所有播放器
  // lrcType: 3, // 歌词类型
  listFolded: false, // false: 列表默认展开 true: 列表默认折叠
  listMaxHeight: 90, // 列表最大数目
  audio: 
  [
    {
      name: 'A Tender Feeling', // 歌曲名
      artist: '梶浦由记', // 演唱者
      url: 'https://od.lk/s/NzNfMTA0OTUyMzQ1Xw/a-tender-feeling.mp3', //音乐文件
      cover: 'https://od.lk/s/NzNfMTA0OTUyMzQ2Xw/a-tender-feeling.png', //音乐封面
      // lrc: 'lrc1.lrc', // 歌词文件
      // theme: '#00FFFF', // 主题色 会覆盖全局设置
      // type: auto // 歌曲类型 auto hls normal 或 自定义
    },
    {
      name: 'Unicorn', // 歌曲名
      artist: '泽野弘之', // 演唱者
      url: 'https://od.lk/s/NzNfMTA0OTUyMzQzXw/unicorn.mp3', //音乐文件
      cover: 'https://od.lk/s/NzNfMTA0OTUyMzQ0Xw/unicorn.png', //音乐封面
      // lrc: 'lrc1.lrc', // 歌词文件
      // theme: '#00FFFF', // 主题色 会覆盖全局设置
      // type: auto // 歌曲类型 auto hls normal 或 自定义
    },
    {
      name: 'Swordland', // 歌曲名
      artist: '梶浦由记', // 演唱者
      url: 'https://od.lk/s/NzNfMTA0OTUyMzQxXw/swordland.mp3', //音乐文件
      cover: 'https://od.lk/s/NzNfMTA0OTUyMzQyXw/swordland.jpg', //音乐封面
      // lrc: 'lrc1.lrc', // 歌词文件
      // theme: '#00FFFF', // 主题色 会覆盖全局设置
      // type: auto // 歌曲类型 auto hls normal 或 自定义
    },
    {
      name: 'Light your sword', // 歌曲名
      artist: '梶浦由记', // 演唱者
      url: 'https://od.lk/s/NzNfMTA0OTUyMzM5Xw/light-your-sword.mp3', //音乐文件
      cover: 'https://od.lk/s/NzNfMTA0OTUyMzQwXw/light-your-sword.jpg', //音乐封面
      // lrc: 'lrc1.lrc', // 歌词文件
      // theme: '#00FFFF', // 主题色 会覆盖全局设置
      // type: auto // 歌曲类型 auto hls normal 或 自定义
    },
    {
      name: '光るなら', // 歌曲名
      artist: 'Goose house', // 演唱者
      url: 'https://od.lk/s/NzNfMTA0OTUyMzUyXw/001.mp3', //音乐文件
      cover: 'https://od.lk/s/NzNfMjUyMzcyNzhf/001.jpg', //音乐封面
      // lrc: 'lrc1.lrc', // 歌词文件
      // theme: '#00FFFF', // 主题色 会覆盖全局设置
      // type: auto // 歌曲类型 auto hls normal 或 自定义
    },
    {
      name: '緋色の空', // 歌曲名
      artist: '川田まみ', // 演唱者
      url: 'https://od.lk/s/NzNfMTA0OTUyMzU0Xw/002.mp3', //音乐文件
      cover: 'https://od.lk/s/NzNfMTA0OTUyMzUzXw/002.jpg', //音乐封面
      // lrc: 'lrc1.lrc', // 歌词文件
      // theme: '#00FFFF', // 主题色 会覆盖全局设置
      // type: auto // 歌曲类型 auto hls normal 或 自定义
    },
  ]
});