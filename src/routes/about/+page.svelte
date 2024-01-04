<svelte:head>
	<title>WebDev</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div>
    {#each data.cart as { id, quantity } (id)}
        <div>{id} - {quantity}</div>
    {/each}
</div>

<script lang=ts>

    import gif from '$lib/images/123.gif';

    import logo22 from '$lib/images/logo22.webp';

    export let data;

</script>


<img alt="The project logo" src={gif} />

<img alt="The project logo" src={logo22} />



