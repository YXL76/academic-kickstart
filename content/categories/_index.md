+++
title = "Categories"
+++

<link rel="stylesheet" href="../../css/APlayer.min.css">
<div id="aplayer">
	<pre class="aplayer-lrc-content">
        [00:00.000]Instrumental
    </pre>
</div>
<script src="../../js/APlayer.min.js"></script>

<script>
const ap = new APlayer({
    container: document.getElementById('aplayer'),
	fixed: false,
	mini: false,
	autoplay: false,
	theme: '#b7daff',
	loop: 'all',
	order: 'list',
	preload: 'auto',
	volume: 0.8,
    audio: [{
		name: 'White Magic',
		artist: 'Ujico Snail s house',
        //url: '../../music/White Magic-Ujico Snail s house.mp3',
		//cover: '../../music/White Magic-Ujico Snail s house.jpg',
		url: 'http://pop5orv74.bkt.clouddn.com/music/White%20Magic-Ujico%20Snail%20s%20house.mp3',
		cover: 'https://dev.tencent.com/u/YXL-76/p/academic-kickstart/git/raw/master/static/music/White%20Magic-Ujico%20Snail%20s%20house.jpg',
		mutex: true,
		listFolded: true,
    }],
	lrcType: 2,
});
</script>
