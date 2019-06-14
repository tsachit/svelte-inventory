<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let name;
    export let quantity;
    let showControls = false;

	const addPoint = () => (quantity += 1);
	const removePoint = () => (quantity -= 1);
	const toggleControls = () => (showControls = !showControls);
	const onDelete = () => dispatch("removeitem", name);
</script>

<style>
	h1 {
		color: #204f6e;
	}
	h3 {
		margin-bottom: 10px;
	}
</style>

<div class="card">
    <h1>
        {name}
        <button class="btn btn-sm" on:click={toggleControls}>
            {#if showControls}-{:else}+{/if}
        </button>
        <button class="btn btn-danger btn-sm" on:click={onDelete}>x</button>
    </h1>
  <h3>Quantity: {quantity}</h3>
    {#if showControls}
        <button class="btn" on:click={addPoint}>+1</button>
        <button class="btn btn-dark" on:click={removePoint}>-1</button>
        <input type="number" bind:value={quantity} />
    {/if}
</div>
