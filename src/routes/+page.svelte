<svelte:head>
	<title>WebDev</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang=ts>
    import logo1 from '$lib/images/logo1.webp';
    import logo from '$lib/images/logo.png';
    </script>

<div>

	<video><
		poster="https://pub-c1de1cb456e74d6bbbee111ba9e6c757.r2.dev/logo.bwLuQSmC.png"
		src="https://pub-c1de1cb456e74d6bbbee111ba9e6c757.r2.dev/fish.mp4"
		on:mousemove={handleMove}
		on:touchmove|preventDefault={handleMove}
		on:mousedown={handleMousedown}
		on:mouseup={handleMouseup}
		bind:currentTime={time}
		bind:duration
		bind:paused
	>
		<track kind="captions" />


	</video>
		<div class="info">
			<span class="time">{format(time)}</span>
			<span>click anywhere to {paused ? 'play' : 'pause'} / drag to seek</span>
			<span class="time">{format(duration)}</span>
		</div>

<style>
	div {
		position: relative;
	}

	.controls {
		position: absolute;
		top: 0;
		width: 100%;
		transition: opacity 1s;
	}

	.info {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}

	span {
		padding: 0.2em 0.5em;
		color: white;
		text-shadow: 0 0 8px black;
		font-size: 1.4em;
		opacity: 0.7;
	}

	.time {
		width: 3em;
	}

	.time:last-child {
		text-align: right;
	}

	progress {
		display: block;
		width: 100%;
		height: 10px;
		-webkit-appearance: none;
		appearance: none;
	}

	progress::-webkit-progress-bar {
		background-color: rgba(0, 0, 0, 0.2);
	}

	progress::-webkit-progress-value {
		background-color: rgba(255, 255, 255, 0.6);
	}

	video {
		width: 100%;
	}
</style>

    
<img alt="The project logo" src={logo} />
<img alt="The project logo" src={logo1} />
<textarea rows="4" cols="8" readonly>

((̲̅ ̲̅(̲̅SVELTE)( ̲̅((> BoomBox ♫♪.ılılıll|̲̅̅●̲̅̅|̲̅̅=̲̅̅|̲̅̅●̲̅̅|llılılı.♫♪ 


__̴ı̴̴̡̡̡ ̡͌l̡̡̡ ̡͌l̡*̡̡ ̴̡ı̴̴̡ ̡̡͡|̲̲̲͡͡͡ ̲▫̲͡ ̲̲̲͡͡π̲̲͡͡ ̲̲͡▫̲̲͡͡ ̲|̡̡̡ ̡ ̴̡ı̴̡̡ ̡͌l̡̡̡̡̡._


</textarea>




<h1><pre><a href="https://wurdle.jessejesse.com/">CO-OP Wurdle</a>&nbsp;&nbsp;</pre></h1>




<h1>Aqua Nemo</h1>


