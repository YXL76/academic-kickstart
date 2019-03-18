+++
title = "字符串匹配 ①"
subtitle = "KMP算法"
summary = "一个对KMP算法的介绍"

date = 2019-03-18T00:48:50+08:00
draft = false

authors = ["YXL"]

featured = false

tags = ["模式匹配"]
categories = ["算法"]

[image]
  caption = ""
  focal_point = ""
  preview_only = true

[header]
  image = "【東方】「はかなき夢ぞ命なりける」「KiTA」[pid=62341877].webp"
  caption = "图片来源： [**KiTA**](https://www.pixiv.net/member_illust.php?mode=medium&illust_id=62341877)"

+++

我们先来看三段代码：

``` c++
int BF()
{
    auto pattern_size = pattern.size();
    auto text_size = text.size();
    auto pattern_index = 0;
    auto text_index = 0;
    
    while (pattern_index < pattern_size && text_index < text_size)
    {
        if (pattern[pattern_index] == text[text_index])
        {
            ++pattern_index;
            ++text_index;
        }
        else
        {
            text_index -= pattern_index - 1;
            pattern_index = 0;
        }
    }
    if (pattern_index == pattern_size)    return index_pattern - index_text;
    return -1;
}
```

``` c++
int KMP()
{
    auto pattern_size = pattern.size();
    auto text_size = text.size();
    auto pattern_index = 0;
    auto text_index = 0;
    
    while (pattern_index < pattern_size && text_index < text_size)
    {
        if (text_index == -1 || pattern[pattern_index] == text[text_index])
        {
            ++pattern_index;
            ++text_index;
        }
        else    text_index = next_[text_index];
    }
    if (pattern_index == pattern_size)    return index_pattern - index_text;
    return -1;
}
```

``` c++
int GetNext()
{
    next[0] = -1;
    auto left = -1;
    auto right = 0;
    while (right < pattern_size - 1)
    {
        if (left == -1 || pattern[left] == pattern[right])
        {
            ++left;
            ++right;
            if (pattern[left] != pattern[right])    next[right] = left;
            else    next[right] = next[left];
        }
        else    left = next[left];
	}
}
```

上面的三段代码分别是**BF算法**、**KMP算法**、**适配函数构造算法**

通过观察我们可以发现，这三段代码惊人的相似（假装是）。

我们通过模拟算法执行的过程来发现他们之间的关系吧。