---
position: 1
slug: /css/css-layout/history
---

# web布局发展史

## web布局演变过程

web布局设计的发展主要表现在，Web 布局的适配性更强、美感更强、用户体验更好等等。

小册作者对web布局发展分为三个阶段
 - web design 1.0：设计元素按照文档流排列。
 - web design 2.0：划分单元格/网格，更多自由性。
 - web design 3.0：网页可以像平面设计工具一样，自由地定位元素、堆叠、排布，到达“新的维度”。

**Web Design History Timeline**

接下来根据timeline，逐一概述布局演变过程

![Web Design History Timeline](/img/WebDesignHistoryTimeline.png)

> Web Design History Timeline
>
> https://www.webdesignmuseum.org/web-design-history

## 无布局/流布局（1991~1994）

早期的 Web 设计时代，仅仅依靠 HTML 文档的顺序来组织和展示 Web 页面信息

> 互联网上第一个网站
>
> https://info.cern.ch/hypertext/WWW/TheProject.html

## 表格布局（1995~2000）

**开启**

随着web发展，1995年 HTML 2.0 发布，就新增了图片`<img>`表单 `<form>` 和表格 `<table>` 等标签。

`<table>` 可以让 Web 页面以一定的结构性来呈现页面信息，且越来越受欢迎，表格布局模式就随之开启了。

**变革**

- Web 布局这样的一个概念的诞生
- 苹果公司（Apple）在其计算机系统会议上创造了 “用户体验” 一词

**落幕**

1996 年，层叠样式表（CSS）面世。CSS 的诞生，让 Web 逐渐告别表格布局模式，开始迎来新的布局模式。

HTML 和 CSS 这一强大的组合，将 Web 设计和开发推入到新的一个时代！！！

## 浮动、定位、框架布局（2000~2009）

1998年，CSS2.0发布，提供大量新的特性，web页面开始拥有了“美感”。

**浮动布局**

- 浮动布局指的是使用 CSS 的浮动（float属性）特性来构建 Web 页面。
- 初衷：用来处理文本围绕图片（或某个元素）的一种排版方式。
- 浮动布局的经历时间最长，直到flex的出现和移动端的兴起才退出历史舞台。
- 经典“圣杯”和“双飞燕”布局，两边定宽，中间自适应。

**定位布局**

- 利用 `position` 快速实现效果
- 出现了一些利用定位将设计稿转页面的工具

**框架布局**

- 一些CSS框架的出现，bootstrap等

## 响应式布局（2010~2017）

响应式这个词源自于建筑学领域，原本指的是建筑物本身会“响应”实际的使用情况，来自我调整。

在Web开发领域，“响应式”的意思就变成了，我们开发的 Web 页面会“响应”用户的设备尺寸而自动调整布局。

![ResponsiveWebDesign](/img/ResponsiveWebDesign.png)

## 内在 Web 设计（2018~2020）

内在 Web 设计（"Intrinsic Web Design"）2018 年由 Jen Simmons（ Apple Evangelist on the Web Developer Experience team for Safari & @webkit. Member of CSS Working Group. ） 提出的一个概念。

> 内在 Web 设计（Intrinsic Web Design）不是内容以设计为导向（Content Design-Driven），而是只专注于让设计受内容驱动（Design Content-Driven）。
>
> 能够以最少的 Hack 和技巧构建任何你想要的 Web 布局（或设计）！

**内容驱动设计，总之给用户更好的体验。**

*（总的来说，太抽象了）*

## 组件驱动式 Web 设计（2020~至今）

简单地说， 组件驱动 Web 设计（Component-Driven Web Design），基于组件驱动的开发，即 CSS 新增的特性将直接基于组件而不是基于页面注入样式响应能力 。

*（也很抽象）*

## 相关链接

> State Of CSS：https://stateofcss.com/en-US
