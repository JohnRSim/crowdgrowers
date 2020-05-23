<script>
	
	//svelte
	import { onDestroy, onMount, tick } from 'svelte';

	//export let segment;

	
	//on mount set defaults
	onMount(async() => {
		console.info('[Layout][Mount]');
		
		window.lazyLoader();
	});
</script>

<style>
#CG-siteWrapper {

}
</style>

<div id="CG-siteWrapper">
	<main>
		<slot></slot>
	</main>
</div>
