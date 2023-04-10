package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

const (
	Root = "./docs"
)

type SideBarItem struct {
	Key  string
	List []string
}

// Read All File.md Then Add In Config.js
func main() {
	fmt.Println("生成新的router")
	oneLvlList := make([]string, 0)
	sonDirList, err := getAllDirFromFather(Root)
	if err != nil {
		panic(err)
	}
	var grandSonDirMap = make(map[string][]string)
	for _, sonName := range sonDirList {
		if isMarkDownFile(sonName) || sonName == `.vuepress` {
			continue
		}
		oneLvlList = append(oneLvlList, "/"+sonName+"/")
		grandSonDirList, err := getAllDirFromFather(Root + "/" + sonName)
		if err != nil {
			panic(err)
		}
		grandSonDirMap[sonName] = grandSonDirList
		for _, grandson := range grandSonDirList {
			if !isMarkDownFile(grandson) && sonName != `.vuepress` {
				oneLvlList = append(oneLvlList, "/"+sonName+"/"+grandson+"/")
			}
		}
	}

	for i := 0; i < len(oneLvlList)/2; i++ {
		oneLvlList[i], oneLvlList[len(oneLvlList)-1-i] = oneLvlList[len(oneLvlList)-1-i], oneLvlList[i]
	}

	sidebarItem := make([]*SideBarItem, 0)
	var workSub []string
	var codeSub []string
	for _, key := range oneLvlList {
		list, err := getAllDirFromFather(Root + key)
		if err != nil {
			panic(err)
		}
		item := &SideBarItem{
			Key:  key,
			List: list,
		}
		sidebarItem = append(sidebarItem, item)

		if len(strings.Split(key, `/`)) >= 4 && strings.Contains(key, "code") {
			codeSub = append(codeSub, fmt.Sprintf(navItem, strings.Split(key, `/`)[2], key))
		}
		if len(strings.Split(key, `/`)) >= 4 && strings.Contains(key, "work") {
			workSub = append(workSub, fmt.Sprintf(navItem, strings.Split(key, `/`)[2], key))
		}
	}
	var itemList []string
	for _, item := range sidebarItem {
		itemList = append(itemList, genItem(item))
	}
	configJ1 := strings.Replace(configJs, "useScriptGenSidebar", genRoute(itemList), 1)
	configJ2 := strings.Replace(configJ1, "codeThemeConfig", genNav(codeSub), 1)
	configJ3 := strings.Replace(configJ2, "workThemeConfig", genNav(workSub), 1)
	file, err := os.OpenFile("./docs/.vuepress/config.js", os.O_CREATE|os.O_WRONLY|os.O_TRUNC, 0666)
	if err != nil {
		panic(err)
	}
	defer file.Close()
	writer := bufio.NewWriter(file)
	writer.WriteString(configJ3)
	writer.Flush()
	fmt.Println("router降临")
}

func getAllDirFromFather(path string) ([]string, error) {
	var sonDirName []string
	sonDirList, err := os.ReadDir(path)
	if err != nil {
		return nil, err
	}
	for _, sonDir := range sonDirList {
		sonDirName = append(sonDirName, sonDir.Name())
	}
	return sonDirName, nil
}

func isMarkDownFile(name string) bool {
	return strings.Contains(name, ".md")
}

func genRoute(tem []string) string {
	var ret string
	for _, t := range tem {
		ret += t + ","
	}
	return ret[:len(ret)-1]
}
func genNav(nav []string) string {
	var ret string
	for _, i := range nav {
		ret += i + ","
	}
	return ret[:len(ret)-1]
}

func genItem(item *SideBarItem) string {
	template := `'%s':[`
	template = fmt.Sprintf(template, item.Key)
	for _, file := range item.List {
		if file == "README.md" {
			template += `''` + ","
			continue
		}
		if strings.Contains(file, ".md") {
			template += genPath(file[:len(file)-3]) + `,`
		} else {
			template += genPath(file+`/`) + `,`
		}

	}
	template = template[:len(template)-1]
	template += `]`
	return template
}

func genPath(name string) string {
	prefix := `'`
	suffix := `'`
	return prefix + name + suffix
}

var configJs = `module.exports = {
    title: 'wry丶hx',
    description: 'Just playing around',
    head:[
      [
        'link',{rel:'icon',href:'/favicon.ico'}
      ]
    ],
    themeConfig: {
        logo: '/pilot-bust.svg',
        sidebar: {useScriptGenSidebar},
        nav: [
          {
            text: 'Code',
            ariaLabel: 'Code Menu',
            items: [codeThemeConfig]
          },
          {
            text: 'Work',
            ariaLabel: 'Work Menu',
            items: [workThemeConfig]
          },
            { text: 'Algorithm', link: '/algorithm/' },
            { text: 'Interview', link: '/interview/' },
            { text: 'Ubuntu', link: '/ubuntu/' },
            { text: '玩乐', link: '/play/' },
            { text: 'Guide', link: '/guide/' },
            { text: '友链', link: 'https://go.dev/' },
          ],
        
    },
    

}`

var navItem = `{ text: '%s', link: '%s' }`
