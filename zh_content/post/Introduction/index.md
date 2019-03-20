+++
title = "介绍"
subtitle = ""
summary = "第一篇博客"

date = 2019-03-15T21:56:56+08:00
draft = false

authors = ["YXL"]

featured = false

tags = ["杂谈"]
categories = ["杂谈"]

[image]
  caption = ""
  focal_point = ""
  preview_only = true

[header]
  image = "Connection-746661664-by-wlop.webp"
  caption = "图片来源： [**wlop**](https://www.deviantart.com/wlop/art/Connection-746661664/)"
+++

[![Netlify Status](https://api.netlify.com/api/v1/badges/1008d0ba-6d9b-4a11-9b41-2326f3c096f2/deploy-status)](https://app.netlify.com/sites/yxl/deploys)

<link rel="stylesheet" href="../../../css/APlayer.min.css">
<div id="aplayer">
	<pre class="aplayer-lrc-content">
        [00:00.000]纯音乐
    </pre>
</div>
<script src="../../../js/APlayer.min.js"></script>

<script>
const ap = new APlayer({
    container: document.getElementById('aplayer'),
	fixed: false,
	mini: false,
	autoplay: true,
	theme: '#b7daff',
	loop: 'all',
	order: 'list',
	preload: 'auto',
	volume: 0.8,
    audio: [{
		name: 'NEXT TO YOU',
		artist: 'Ken Arai',
        url: '../../../music/NEXT TO YOU-Ken Arai.mp3',
		cover: '../../../music/NEXT TO YOU-Ken Arai.jpg',
		mutex: true,
		listFolded: true,
    }],
	lrcType: 2,
});
</script>

大家好，我是YXL。

这是我的第一篇博客。

从今天开始，我将在[www.yxl76.top](https://www.yxl76.top/)发布我的博文。