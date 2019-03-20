+++
title = "类别"
+++

<link rel="stylesheet" href="../../css/APlayer.min.css">
<div id="aplayer">
	<pre class="aplayer-lrc-content">
        [00:00.000]纯音乐
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
        url: '../../music/White Magic-Ujico Snail s house.mp3',
		cover: '../../music/White Magic-Ujico Snail s house.jpg',
		mutex: true,
		listFolded: true,
    }],
	lrcType: 2,
});
</script>
