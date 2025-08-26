<template>
    <div v-for="product in props.products" :key="product.id" class=" w-60 h-auto border border-gray-300 rounded-lg cursor-pointer">
        <div class="w-full h-64">
            <img class="w-full h-full rounded-t-lg object-cover" :src="product.img">
        </div>
        <div class=" px-5 py-3 flex flex-col gap-3 ">
            <h2 class="font-bold text-center">{{ product.title }}</h2>
            <div class="flex flex-col gap-2 text-center">
                <p>{{ product.price }}</p>
                <button class="bg-black w-full text-1xl text-white font-medium py-1.5 px-4 rounded-lg">VER PRODUTO</button>
            </div>
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