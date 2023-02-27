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
        sidebar: {
          // code group
            '/code/golang/': [
              '',     /* /foo/ */
              'type'  /* /foo/one.html */
            ],

            '/code/python/': [
              '',     /* /foo/ */
              'type'  /* /foo/one.html */
            ],

            '/code/': [
              '',     /* /foo/ */
              'golang/',  /* /foo/one.html */
              'python/'
            ],
            '/ubuntu/': [
              '',     /* /foo/ */
              'operation',  /* /foo/one.html */
              'wsl',
              'tools'
            ],
            
            // food group
            '/food/': [
              '',      /* /bar/ */
              'peking', /* /bar/three.html */
              'xian'   /* /bar/four.html */
            ],

            // work group
            '/work/xiaomi/': [
              '',     /* /foo/ */
              'status'  /* /foo/one.html */
            ],
            '/work/bytedance/': [
              '',     /* /foo/ */
              'status'  /* /foo/one.html */
            ],
            
            // interview group
            '/interview/': [
              '',      /* /bar/ */
              'record', /* /bar/three.html */
              'skill'   /* /bar/four.html */
            ],

            // play group
            '/play/': [
              '',      /* /bar/ */
              // 'record', /* /bar/three.html */
              // 'skill'   /* /bar/four.html */
            ],


            '/guide/': [
              '',     /* /foo/ */
              'about',  /* /foo/one.html */
              'contact',
              'config',
            ],
            // fallback
            // '/': [
            //   '',        /* / */
            //   'contact', /* /contact.html */
            //   'about'    /* /about.html */
            // ]
          },
        nav: [
          {
            text: 'Code',
            ariaLabel: 'Code Menu',
            items: [
              { text: 'Golang', link: '/code/golang/' },
              { text: 'Python', link: '/code/python/' }
            ]
          },
          {
            text: 'Work',
            ariaLabel: 'Work Menu',
            items: [
              { text: 'XiaoMi', link: '/work/xiaomi/' },
              { text: 'ByteDance', link: '/work/bytedance/' }
            ]
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