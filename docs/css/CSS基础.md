---
sidebar_position: 2
---

# CSS基础

CSS基础知识回顾

> 通过阅读mdn web docs快速回顾，概括记录要点

## 定义

CSS （Cascading Style Sheets，层叠样式表）是用来控制网页在浏览器中的显示外观的声明式语言。



## CSS选择器

### 定义

CSS 选择器，是 CSS 规则的一部分，用于匹配文档中的元素。匹配的元素将会应用规则指定的样式。

### 选择器的种类

所有CSS选择器，参考文档，不必一一列举。

https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_selectors

### 选择器优先级

当多个css规则对同一元素应用了相同的属性，但具有不同的值时，优先级决定应用哪些CSS规则。

根据选择器权重计算：https://www.w3.org/TR/selectors/#specificity-rules

> **权重高位具有绝对地位**
>
> Due to storage limitations, implementations may have limitations on the size of A, B, or C. If so, values higher than the limit must be clamped to that limit, and not overflow.
>
> （由于存储限制，实现可能对A、B或C的大小有限制。如果是这样，大于限制的值必须被限制在该限制内，而不会溢出。）

**tips**

- 权重相同时，由资源加载顺序影响，后面的覆盖前面的。
- 不会覆盖所有规则，只覆盖相同的属性。

- 内联样式，即  `style` 属性内的样式声明，优先于所有普通的样式，无论其优先级如何。

#### CSS位置的影响

相互冲突的声明将按以下顺序应用，后一种声明将覆盖前一种声明：

1. 用户代理样式表中的声明（例如，浏览器的默认样式，在没有设置其他样式时使用）。
2. 用户样式表中的常规声明（由用户设置的自定义样式）。
3. 作者样式表中的常规声明（这些是我们 web 开发人员设置的样式）。
4. 作者样式表中的 !important 声明
5. 用户样式表中的 !important 声明
6. 用户代理样式表中的 !important 声明

>  **备注：** 
>
>  标记为 `!important` 的样式的优先级顺序是颠倒的。
>
>  web 开发人员的样式表覆盖用户的样式表是有意义的，因此设计可以按预期进行，但是有时用户有充足的理由覆盖 web 开发人员的样式，正如上面提到的——这可以通过在他们的规则中使用 `!important` 来实现。

**那么我作为普通用户如何修改 `user agent stylesheet` ？**



### 相关链接

> 漫画 specifishity：https://specifishity.com/specifishity.pdf
>



## CSS盒模型

### 定义

模型定义了盒的每个部分 —— margin, border, padding, and content —— 合在一起就可以创建我们在页面上看到的内容。

> https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model



### **四个部分**

CSS 中组成一个块级盒子需要：

- **Content box**: 这个区域是用来显示内容，大小可以通过设置 `width` 和 `height`。
- **Padding box**: 包围在内容区域外部的空白区域；大小通过 `padding`相关属性设置。
- **Border box**: 边框盒包裹内容和内边距。大小通过 `border` 相关属性设置。
- **Margin box**: 这是最外面的区域，是盒子和其他元素之间的空白区域。大小通过 `margin` 相关属性设置。

### **两个模型**

通过 `box-sizing` 属性修改

- 标准盒模型：对应 `context-box`
- 替代（IE）盒模型：对应 `border-box`

**如何设置所有元素的box-sizing？**

```css
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
```

### 块级盒子和内联盒子

一个被定义成块级的（block）盒子会表现出以下行为：

- 盒子会在内联的方向上扩展并占据父容器在该方向上的所有可用空间，在绝大数情况下意味着盒子会和父容器一样宽
- 每个盒子都会换行
- `width` 和 `height` 属性可以发挥作用
- 内边距（padding）, 外边距（margin）和 边框（border）会将其他元素从当前盒子周围“推开”

除非特殊指定，诸如标题 (`<h1>`等) 和段落 (`<p>`) 默认情况下都是块级的盒子。

如果一个盒子对外显示为 `inline`，那么他的行为如下：

- 盒子不会产生换行。
- `width` 和 `height` 属性将不起作用。
- 垂直方向的内边距、外边距以及边框会被应用但是不会把其他处于 `inline` 状态的盒子推开。
- 水平方向的内边距、外边距以及边框会被应用且会把其他处于 `inline` 状态的盒子推开。

用做链接的 `<a>` 元素、 `<span>`、 `<em>` 以及 `<strong>` 都是默认处于 `inline` 状态的。



### 内部和外部显示类型

`CSS display` 属性设置元素的内部或外部显示类型。

外部：是否被视为块或者内联元素

内部：用于子元素的布局，例如流式布局（block、inline）、网格布局（gird）或弹性布局（flex）。

> 关于CSS布局，后续单独整理



### BFC块级格式化上下文

**定义**

区块格式化上下文（Block Formatting Context，BFC）是 Web 页面的可视 CSS 渲染的一部分，是块级盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

一块独立渲染区域，内部元素的渲染不会影响边界以外的元素。

**作用**

格式化上下文影响布局，通常，我们会为定位和清除浮动创建新的 BFC，而不是更改布局

- 处理浮动相关
- 阻止外边距重叠

**相关文档**

> mdn-区块格式化上下文（Block Formatting Context，BFC）
>
> https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context


### 一些问题

#### 外边距折叠

定义：区块的上下外边距有时会合并（折叠）为单个边距，其大小为两个边距中的最大值

为什么：设计如此？

处理：可以创建BFC解决

> MDN-掌握外边距折叠
>
> https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing


## CSS布局

### 定义

CSS 页面布局技术允许我们拾取网页中的元素，并且控制它们相对正常布局流、周边元素、父容器或者主视口/窗口的位置。

> 简单概述不同布局，常用的单独专栏记录

### 正常布局流

浏览器正常的布局模式，根据html元素默认盒子类型（block/inline-block）排列。

一些CSS属性可以覆盖默认布局行为：
- display 块的内外部显示类型
- float 浮动（实际没用过）
- position 定位
- column-*：多列布局（纯粹没用过）

### 弹性盒子

设置 `display: flex;`

flex一把梭！！！

### 网格布局

设置 `display: grid;`

设计横向或纵向的布局，使用会方便很多

### 浮动

`float相关`

一些存量项目有，需要时再看，或者直接flex

新代码写 review 会被喷吧

### 定位

设置 `position` 属性

有五种主要的定位类型

- 静态定位（Static）默认位置
- 相对定位（Relative）保留之前的占位块，相对自身移动位置。
- 绝对定位（Absolute）脱离文档流。相对于最近被定位的父元素固定。
- 固定定位（Fixed）脱离文档流。与绝对定位类似，相对浏览器视口固定，而不是相对另外一个元素。
- 粘性定位（Sticky）设置它的相对视口位置达到某一个预设值时，`static` 和 `fixed` 之间切换。

### 表格布局/多列布局

- display: table;
- column-* 

没用过，业务需要再看吧。


## CSS 对象模型 (CSSOM)

CSS 对象模型（CSS Object Model） 是树形形式的所有 CSS 选择器和每个选择器的相关属性的映射，具有树的根节点，同级，后代，子级和其他关系。

CSSOM 与 文档对象模型 (DOM) 非常相似。两者都是关键渲染路径的一部分，也是正确渲染一个网站必须采取的一系列步骤。

CSSOM 与 DOM 一起构建渲染树，浏览器依次使用渲染树来布局和绘制网页。

### CSSOM API

CSS 对象模型是一组允许用 JavaScript 操纵 CSS 的 API。它很像 DOM，但针对的是 CSS 而不是 HTML。它允许用户动态地读取和修改 CSS 样式。

> MDN-CSS Object Modal
> https://developer.mozilla.org/zh-CN/docs/Web/API/CSS_Object_Model

