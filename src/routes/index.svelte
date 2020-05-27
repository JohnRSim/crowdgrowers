<script>
  import { onMount } from 'svelte';

	//transitions
	import { send, receive } from '@cg/transition/crossfade';
	import { fade } from 'svelte/transition';

  onMount(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  });
</script>

<style>
	.overview {
		width: 300px;
		margin: 0px auto;
	}
	button {
		color: rgba(255,255,255,0.5);
		text-transform: uppercase;
		background: rgba(255,255,255,0.05);
		border-radius: 60px;
		padding:8px 16px;
		border:0px;
		letter-spacing: 1px;
		font-size: 0.8em;
	}
	h1 {
		overflow: hidden;
		position: relative;
	}
	h1 span {
		position: absolute;
		left:-9999px;
	}
</style>

<svelte:head>
	<title>🍎 CrowdGrowers - Helping to combat food waste</title>
	<meta name="description" content="Help combat food waste with CrowdGrowers; a new sustainable way to source fresh organic food - cultivated just for you straight from the source.">
</svelte:head>

<div class="overview">
	<h1>
		<span>CrowdGrowers</span>
		<img src="/img/logo_crowdgrowers_flat_white.svg" width="250" height="111" alt="logo CrowdGrowers"/>
	</h1>
	
	<button>Coming soon...</button>
</div>