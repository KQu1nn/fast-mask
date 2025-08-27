<template>
    <div class="w-full min-auto px-8 my-17">
        <div class="w-full flex flex-row justify-center gap-5 flex-wrap">
            <ProductCard
            v-for="product in props.products"
            :key="product.id"
            :product="product"
            />
        </div>
        <div class="w-full flex justify-center py-10">
            <NuxtLink to="/produtos">
                <button class="bg-white text-red-500 border-2 border-red-500 text-sm font-medium py-2 px-6 rounded-lg cursor-pointer">Confira a coleção completa</button>
            </NuxtLink>
        </div>
    </div>
</template>
<script setup>

const props = defineProps({
    products: {
        type: Array,
        required: true
    }
})

</script>