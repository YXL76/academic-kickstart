+++
title = "日志"
+++
<link rel="stylesheet" href="../../kosugi-maru.css">
<link rel="stylesheet" href="../../css/APlayer.min.css">
<div id="aplayer">
	<pre class="aplayer-lrc-content">
        [00:00.000] 作曲 : 飛内将大
        [00:01.000] 作词 : aimerrhythm
        [00:03.33]编曲 : 玉井健二, 飛内将大
        [00:04.83]
        [00:06.40]Raining 夏の午後に
        [00:09.55]通り雨 傘の下
        [00:12.74]Kissing 濡れた頬に
        [00:15.70]そっと口づけた
        [00:19.73]あの季節に まだ焦がれている
        [00:27.97]        [00:31.24]Miss you 窓の外に
        [00:34.25]遠ざかる景色たち
        [00:37.36]Breezing 虹が見えた
        [00:40.42]すぐに消えそうで
        [00:44.41]雨 明日は降らなければいい
        [00:52.50]
        [00:54.69]何も手につかずに 上の空の日々
        [01:00.90]Nothing but you're the part of me
        [01:05.59]
        [01:05.82]まだ 足りなくて
        [01:08.71]まだ 消えなくて
        [01:11.95]重ねた手のひらから幼さが
        [01:18.02]What a good thing we lose?
        [01:21.15]What a bad thing we knew
        [01:24.26]そんなフレーズに濡れてく 雨の中
        [01:30.15]
        [01:30.24]ただ 足りなくて
        [01:33.19]まだ 言えなくて
        [01:36.56]数えた日の夢からさよならが
        [01:42.61]What a good thing we lose?
        [01:45.60]What a bad thing we knew
        [01:48.75]触れられずにいれたら 笑えたかな?
        [01:56.96]
        [01:57.15]Calling 白い息が
        [02:00.36]舞いあがる 空の下
        [02:03.46]Freezing 強い風に
        [02:06.50]少しかじかんだ手と
        [02:11.86]弱さをポケットの中に
        [02:19.49]
        [02:20.81]どこを見渡しても 通り過ぎた日々
        [02:26.81]Nothing but you're the part of me
        [02:31.73]
        [02:31.89]また 触れたくて
        [02:34.88]ただ 眩しくて
        [02:38.07]思わず目をそらした優しさに
        [02:44.25]I wanna sleep in your feel
        [02:47.31]I wanna see you in the deep
        [02:50.40]そんなフレーズを並べた詩を 今
        [02:56.35]
        [02:56.39]あの帰り道 バスに揺られて
        [03:02.71]叶うはずもない様な夢を見た
        [03:08.79]I wanna sleep in your feel
        [03:11.79]I wanna see you in the deep
        [03:14.91]繰り返す季節に 慣れないまま
        [03:22.78]
        [03:23.34]もう少しくらい大人いれたら
        [03:29.78]何て言えただろう?
        [03:35.69]
        [03:37.69]まだ 足りなくて
        [03:41.14]まだ 消えなくて
        [03:44.34]重ねた手のひらから幼さが
        [03:50.25]What a good thing we lose?
        [03:53.52]What a bad thing we knew
        [03:56.44]そんなフレーズに濡れてく 雨の中
        [04:02.53]
        [04:02.64]ただ 足りなくて
        [04:05.74]まだ 言えなくて
        [04:08.87]数えた日の夢からさよならが
        [04:14.96]What a good thing we lose?
        [04:18.01]What a bad thing we knew
        [04:21.04]触れられずにいれたら 笑えたかな?
        [04:30.94]
        [04:44.74]
    </pre>
</div>
<script src="../../js/APlayer.min.js"></script>

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
		name: 'Ref:rain',
		artist: 'Aimer',
        //url: '../../music/Ref-rain-Aimer.mp3',
		//cover: '../../music/Ref-rain-Aimer.jpg',
		url: 'https://yxl-blog.oss-cn-beijing.aliyuncs.com/music/Ref-rain-Aimer.mp3',
		cover: 'https://yxl-blog.oss-cn-beijing.aliyuncs.com/music/Ref-rain-Aimer.jpg',
		mutex: true,
		listFolded: true,
    }],
	lrcType: 2,
});
</script>

- 2019/03/20  完成了对网站的个性化。

- 2019/03/19  发表了第一篇博客。

- 2019/03/15  建站。

