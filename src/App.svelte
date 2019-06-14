<script>
	import Navbar from './Navbar.svelte'
	import Item from './Item.svelte'
	import AddItem from './AddItem.svelte'

	let items = [
		{
			name: "Laptops",
			quantity: 18
		},
		{
			name: "Desktops",
			quantity: 5
		},
		{
			name: "Keyboards",
			quantity: 24
		}
	];
	let showControls = true;

	const addItem = e => {
		const newItem = e.detail;
		items = [...items, newItem];
	}

	const removeItem = e => {
		items = items.filter(item => item.name !== e.detail);
	}
</script>

<style>
	h1 {
		color: #204f6e;
	}
	h3 {
		margin-bottom: 10px;
	}
</style>

<Navbar/>
<div class="container">
	<AddItem on:additem={addItem}/>
	{#if items.length === 0}
		<p>No Items</p>
	{:else}
		{#each items as item}
			<Item name={item.name} quantity={item.quantity} on:removeitem={removeItem} />
		{/each}
	{/if}
</div>
