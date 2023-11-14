---
sidebar_position: 3
---

# CSS 基础


## 行级内容与块级内容

- 行级内容：https://developer.mozilla.org/zh-CN/docs/Glossary/Inline-level_content
- 块级内容：https://developer.mozilla.org/zh-CN/docs/Glossary/Block-level_content


## BFC块级格式化上下文

一块独立渲染区域，内部元素的渲染不会影响边界以外的元素

格式化上下文影响布局，通常，我们会为定位和清除浮动创建新的 BFC，而不是更改布局，因为它将：
- 包含内部浮动。
- 排除外部浮动。
- 阻止外边距重叠。

我选择flex一把梭...

> MDN-区块格式化上下文（Block Formatting Context，BFC）
>
> https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context
