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
      name: 'Unicorn', // 歌曲名
      artist: '泽野弘之', // 演唱者
      url: '//ys-d.ysepan.com/wap/kuroha/D9N5Ie9UQ25FkgG/PAK0Le3a79kGkJvM7c5ARST76Lr4UN/unicorn.mp3', //音乐文件
      cover: '//ys-d.ysepan.com/wap/kuroha/D9N5Ie9UQ25FkgG/NAK0Le3a79kGlfvM8c5ARST77hr4UN/unicorn.png', //音乐封面
      // lrc: 'lrc1.lrc', // 歌词文件
      // theme: '#00FFFF', // 主题色 会覆盖全局设置
      // type: auto // 歌曲类型 auto hls normal 或 自定义
    },
    {
      name: 'Swordland', // 歌曲名
      artist: '梶浦由记', // 演唱者
      url: '//ys-d.ysepan.com/wap/kuroha/D9N5Ie9UQ25FkgG/PAK0Le3a79kGkJv9Sc5ARST76Kr4UN/swordland.mp3', //音乐文件
      cover: '//ys-d.ysepan.com/wap/kuroha/D9N5Ie9UQ25FkgG/NAK0Le3a79kGkIv9Rc5ARST76Jr4UN/swordland.jpg', //音乐封面
      // lrc: 'lrc1.lrc', // 歌词文件
      // theme: '#00FFFF', // 主题色 会覆盖全局设置
      // type: auto // 歌曲类型 auto hls normal 或 自定义
    },
    {
      name: 'Light your sword', // 歌曲名
      artist: '梶浦由记', // 演唱者
      url: '//ys-d.ysepan.com/wap/kuroha/D9N5Ie9UQ25FkgG/NAK0Le3a79iXKuh62DO8QWCL1veBR/light-your-sword.mp3', //音乐文件
      cover: '//ys-d.ysepan.com/wap/kuroha/D9N5Ie9UQ25FkgG/NAK0Le3a79kGkIv9Qc5ARST76Ir4UN/light-your-sword.jpg', //音乐封面
      // lrc: 'lrc1.lrc', // 歌词文件
      // theme: '#00FFFF', // 主题色 会覆盖全局设置
      // type: auto // 歌曲类型 auto hls normal 或 自定义
    },
    {
      name: 'A Tender Feeling', // 歌曲名
      artist: '梶浦由记', // 演唱者
      url: '//ys-d.ysepan.com/wap/kuroha/D9N5Ie9UQ25FkgG/NAK0Le3a79kGkIv9Oc5ARST76lr4UN/a-tender-feeling.mp3', //音乐文件
      cover: '//ys-d.ysepan.com/wap/kuroha/D9N5Ie9UQ25FkgG/NAK0Le3a79kGkIv9Pc5ARST76Hr4UN/a-tender-feeling.png', //音乐封面
      // lrc: 'lrc1.lrc', // 歌词文件
      // theme: '#00FFFF', // 主题色 会覆盖全局设置
      // type: auto // 歌曲类型 auto hls normal 或 自定义
    }
  ]
});