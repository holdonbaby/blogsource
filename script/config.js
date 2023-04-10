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
        sidebar: {'/algorithm/':[''],'/code/':['','golang','python','rust'],'/code/golang/':['','type.md'],'/code/python/':['','type.md'],'/code/rust/':['','type.md'],'/guide/':['','about.md','config.md','contact.md'],'/interview/':['','record.md','skill.md'],'/play/':[''],'/ppt/':[''],'/ubuntu/':['','operation.md','tools.md','wsl.md'],'/work/':['','bytedance','xiaomi'],'/work/bytedance/':['','status.md'],'/work/xiaomi/':['','status.md']},
        nav: [
          {
            text: 'Code',
            ariaLabel: 'Code Menu',
            items: [{ text: 'golang', link: '/code/golang/' },{ text: 'python', link: '/code/python/' },{ text: 'rust', link: '/code/rust/' }]
          },
          {
            text: 'Work',
            ariaLabel: 'Work Menu',
            items: [{ text: 'bytedance', link: '/work/bytedance/' },{ text: 'xiaomi', link: '/work/xiaomi/' }]
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