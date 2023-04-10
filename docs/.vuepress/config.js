module.exports = {
    title: 'wry丶hx',
    description: 'Just playing around',
    head:[
      [
        'link',{rel:'icon',href:'/favicon.ico'}
      ]
    ],
    themeConfig: {
        logo: '/pilot-bust.svg',
        sidebar: {'/work/xiaomi/':['','status'],'/work/bytedance/':['','status'],'/work/':['','bytedance/','xiaomi/'],'/ubuntu/':['','operation','tools','wsl'],'/ppt/':[''],'/play/':[''],'/interview/':['','record','skill'],'/guide/':['','about','config','contact'],'/code/rust/':['','type'],'/code/python/':['','type'],'/code/golang/':['','type'],'/code/':['','golang/','python/','rust/'],'/algorithm/':['']},
        nav: [
          {
            text: 'Code',
            ariaLabel: 'Code Menu',
            items: [{ text: 'rust', link: '/code/rust/' },{ text: 'python', link: '/code/python/' },{ text: 'golang', link: '/code/golang/' }]
          },
          {
            text: 'Work',
            ariaLabel: 'Work Menu',
            items: [{ text: 'xiaomi', link: '/work/xiaomi/' },{ text: 'bytedance', link: '/work/bytedance/' }]
          },
            { text: 'Algorithm', link: '/algorithm/' },
            { text: 'Interview', link: '/interview/' },
            { text: 'Ubuntu', link: '/ubuntu/' },
            { text: '玩乐', link: '/play/' },
            { text: 'Guide', link: '/guide/' },
            { text: '友链', link: 'https://go.dev/' },
          ],
        
    },
    

}