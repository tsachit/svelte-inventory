<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let item = {
        name: "",
        quantity: 0
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch("additem", item);
        item = {
            name: "",
            quantity: 0
        }
    }
</script>

<form on:submit={onSubmit} class="grid-3">
    <input type="text" placeholder="Item Name" bind:value={item.name}>
    <input type="number" placeholder="Item Quantity" bind:value={item.quantity}>
    <input type="submit" class="btn btn-primary" value="Add Item">
</form>