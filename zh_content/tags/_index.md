+++
title = "标签"
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
		name: 'The Voice in My Heart',
		artist: 'Evan Call',
        //url: '../../music/The Voice in My Heart-Evan Call.mp3',
		//cover: '../../music/The Voice in My Heart-Evan Call.jpg',
		url: 'https://yxl-blog.oss-cn-beijing.aliyuncs.com/music/The%20Voice%20in%20My%20Heart-Evan%20Call.mp3',
		cover: 'https://yxl-blog.oss-cn-beijing.aliyuncs.com/music/The%20Voice%20in%20My%20Heart-Evan%20Call.jpg',
		mutex: true,
		listFolded: true,
    }],
	lrcType: 2,
});
</script>
