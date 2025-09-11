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
      url: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvYy8xNWRlOGNlODk2MmJjODM5L0lRVDdHMDFvN1Z6eFRJMWFFWFhtZGNoS0FiNUk5M3VkekFoR25oMC1YdUV0MkZJ.mp3', //音乐文件
      cover: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvYy8xNWRlOGNlODk2MmJjODM5L0lRVGMxeWZSWVhmYVJZVnRxa2VwZlBMR0FSLWg1aVZ2TE9FR0syWFpiQWRkaGVn.png', //音乐封面
      // lrc: 'lrc1.lrc', // 歌词文件
      // theme: '#00FFFF', // 主题色 会覆盖全局设置
      // type: auto // 歌曲类型 auto hls normal 或 自定义
    },
    {
      name: 'Unicorn', // 歌曲名
      artist: '泽野弘之', // 演唱者
      url: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvYy8xNWRlOGNlODk2MmJjODM5L0lRVGJyMWgwS3dJc1Rva1FQSUxqTWoza0FTVHVlSElLZlVyM2VFVjV6RGVwMk1F.mp3', //音乐文件
      cover: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvYy8xNWRlOGNlODk2MmJjODM5L0lRVFV4T3RfV0lOTVRLd05PRUhaNENCMEFZMDF0ODd4ZzBQQ2xPeG9lNG9wTTMw.png', //音乐封面
      // lrc: 'lrc1.lrc', // 歌词文件
      // theme: '#00FFFF', // 主题色 会覆盖全局设置
      // type: auto // 歌曲类型 auto hls normal 或 自定义
    },
    {
      name: 'Swordland', // 歌曲名
      artist: '梶浦由记', // 演唱者
      url: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvYy8xNWRlOGNlODk2MmJjODM5L0lRU1hyWk1URVBwd1JJLVRkRDc0ZEpBckFRbmFBZ3BQclVvV25ZUjYzbnd0dkNz.mp3', //音乐文件
      cover: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvYy8xNWRlOGNlODk2MmJjODM5L0lRUU9GUzJvNDRvZ1JaNFR1SEttMG5WZEFXRUFmSXF0LUI4ZlB3enhwNWFkZ2E0.jpg', //音乐封面
      // lrc: 'lrc1.lrc', // 歌词文件
      // theme: '#00FFFF', // 主题色 会覆盖全局设置
      // type: auto // 歌曲类型 auto hls normal 或 自定义
    },
    {
      name: 'Light your sword', // 歌曲名
      artist: '梶浦由记', // 演唱者
      url: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvYy8xNWRlOGNlODk2MmJjODM5L0lRUTJpY3dDaHFsNFM1X2VXRlRQb24yOEFYbUEydGVNU3JRY0toWmo3S1lVSXVN.mp3', //音乐文件
      cover: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvYy8xNWRlOGNlODk2MmJjODM5L0lRUVBBX1hoM1k0MVQ1UmdNaEYwbUJIcUFkSk1jR1BNSG9sODlpWTk0eEQ0Rkw0.jpg', //音乐封面
      // lrc: 'lrc1.lrc', // 歌词文件
      // theme: '#00FFFF', // 主题色 会覆盖全局设置
      // type: auto // 歌曲类型 auto hls normal 或 自定义
    }
  ]
});