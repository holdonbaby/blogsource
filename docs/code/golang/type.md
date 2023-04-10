---
title: Type
lang: en-US
sidebarDepth: 2
---

# Type
Golang有一点非常重要，没有泛型概念，导致他开发起来会写大量重复代码，期待未来增加泛型，完善语言结构

## 类型转化
类型转化分为四种:类型断言，强制类型转化，显式类型转化，隐式类型转化
- x.(T) x是接口，T是实现接口的struct
- (*T)(nil) T是struct，强制类型转化，一般用于判断接口实现 var _ x = (*T)(nil) ,如果*T没有实现x会报错
- string(123) []byte("asjkdha") 强制将括号内的值转化为括号前的类型
- 下方说明

```go
type CNNumber int64
func()CNNumber{return 64}
```

## noPointer
实例

## pointer
指向实例的指针

