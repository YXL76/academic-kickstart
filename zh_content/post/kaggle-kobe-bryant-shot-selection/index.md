+++
title = "[Kaggle]Kobe Bryant Shot Selection"
subtitle = "科比·布莱恩特投篮选择"
summary = "利用20年来科比投球和失误的数据，你能预测出哪些球能命中吗？"

date = 2019-03-20T17:26:47+08:00
draft = false

authors = ["YXL"]

featured = false

tags = ["二元分类"]
categories = ["Kaggle"]

[image]
  caption = ""
  focal_point = ""
  preview_only = true

[header]
  # image = "【pixivファンタジアLS】「【PFLS】 -冻土の彼方 st.1.7-」「超凶の狄璐卡」[pid=73392971].webp"
  image = "https://gitee.com/YXL76/academic-kickstart/raw/master/static/img/%E3%80%90pixiv%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B8%E3%82%A2LS%E3%80%91%E3%80%8C%E3%80%90PFLS%E3%80%91%20-%E5%86%BB%E5%9C%9F%E3%81%AE%E5%BD%BC%E6%96%B9%20st.1.7-%E3%80%8D%E3%80%8C%E8%B6%85%E5%87%B6%E3%81%AE%E7%8B%84%E7%92%90%E5%8D%A1%E3%80%8D%5Bpid=73392971%5D.webp"
  caption = "图片来源： [**超凶の狄璐卡**](https://www.pixiv.net/member_illust.php?mode=medium&illust_id=73392971)"

+++

[![Netlify Status](https://api.netlify.com/api/v1/badges/1008d0ba-6d9b-4a11-9b41-2326f3c096f2/deploy-status)](https://app.netlify.com/sites/yxl/deploys)

<link rel="stylesheet" href="../../../kosugi-maru.css">
<link rel="stylesheet" href="../../../css/APlayer.min.css">
<div id="aplayer">
	<pre class="aplayer-lrc-content">
        [00:00.000] 作曲 : 织田哲郎
        [00:01.000] 作词 : 上杉升
        [00:11.50]
        [00:38.65]大都会に 僕はもう一人で
        [00:47.97]投げ捨てられた 空きカンのようだ
        [00:55.25]互いのすべてを 知りつくすまでが
        [01:04.38]愛ならば いっそ永久に眠ろうか．．．
        [01:13.15]世界が終わるまでは 離れる事もない
        [01:22.81]そう願っていた 幾千の夜と
        [01:31.51]戻らない時だけが 何故輝いては
        [01:41.25]やつれ切った 心までも 壊す．．．
        [01:49.99]はかなき想い．．．  この Tragedy Night
        [02:01.61]
        [02:06.48]そして人は 形（こたえ）を求めて
        [02:15.60]かけがえのない 何かを失う
        [02:22.99]欲望だらけの 街じゃ 夜空の
        [02:32.13]星屑も 僕らを灯せない
        [02:40.83]世界が終わる前に 聞かせておくれよ
        [02:50.67]満開の花が 似合いのCatastrophe
        [02:59.15]誰もが望みながら 永遠を信じない
        [03:08.91]なのにきっと 明日を夢見てる
        [03:17.67]はかなき日々と．．． この Tragedy Night
        [03:28.35]
        [03:50.07]世界が終わるまでは 離れる事もない
        [03:59.79]そう願っていた 幾千の夜と
        [04:08.49]戻らない時だけが 何故輝いては
        [04:18.24]やつれ切った 心までも 壊す．．．
        [04:26.97]はかなき想い．．．  この Tragedy Night
        [04:36.47]この Tragedy Night
        [04:44.45]
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
		name: '世界が终わるまでは…',
		artist: 'WANDS',
        //url: '../../../music/世界が终わるまでは…-WANDS.mp3',
		//cover: '../../../music/世界が终わるまでは…-WANDS.jpg',
		url: 'http://pop5orv74.bkt.clouddn.com/music/%E4%B8%96%E7%95%8C%E3%81%8C%E7%BB%88%E3%82%8F%E3%82%8B%E3%81%BE%E3%81%A7%E3%81%AF%E2%80%A6-WANDS.mp3',
		cover: 'https://dev.tencent.com/u/YXL-76/p/academic-kickstart/git/raw/master/static/music/%E4%B8%96%E7%95%8C%E3%81%8C%E7%BB%88%E3%82%8F%E3%82%8B%E3%81%BE%E3%81%A7%E3%81%AF%E2%80%A6-WANDS.jpg',
		mutex: true,
		listFolded: true,
    }],
	lrcType: 2,
});
</script>