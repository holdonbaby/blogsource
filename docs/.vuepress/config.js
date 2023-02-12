module.exports = {
    title: 'wry丶hx',
    description: 'Just playing around',
    themeConfig: {
        logo: '/icon.png',
        sidebar: {
            '/code/': [
              '',     /* /foo/ */
              'golang',  /* /foo/one.html */
              'python'   /* /foo/two.html */
            ],
      
            '/food/': [
              '',      /* /bar/ */
              'peking', /* /bar/three.html */
              'xian'   /* /bar/four.html */
            ],
      
            // fallback
            '/': [
              '',        /* / */
              'contact', /* /contact.html */
              'about'    /* /about.html */
            ]
          },
        nav: [
            { text: 'Code', link: '/code/' },
            { text: 'Work', link: '/work/' },
            { text: 'Interview', link: '/interview/' },
            { text: 'Food', link: '/food/' },
            { text: 'Play', link: '/play' },
            { text: 'Guide', link: '/guide/' },
            { text: '友链', link: 'https://go.dev/' },
          ],
        
    },
    

}