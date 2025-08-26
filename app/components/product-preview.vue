<template>
    <div class="w-full min-auto px-8 my-17">
        <div class="w-full flex flex-row justify-center gap-5 flex-wrap">
            <ProductCard :products="products" />
        </div>
        <div class="w-full flex justify-center py-10">
            <button class="bg-white text-red-500 border-2 border-red-500 text-sm font-medium py-2 px-6 rounded-lg cursor-pointer">Confira a coleção completa</button>
        </div>
    </div>
</template>
<script setup>
import img1 from '@/assets/images/img1.webp'
import img2 from '@/assets/images/img2.jpg'
import img3 from '@/assets/images/img3.webp'
import img4 from '@/assets/images/img4.webp'
import img5 from '@/assets/images/img5.webp'


const products = ref([
    {id: 1, img: img1, title: 'BLACK FACE MASK', price: '$29.99 USD'},
    {id: 2, img: img2, title: 'BLACK UNDERGROUND MASK', price: '$10.99 USD'},
    {id: 3, img: img3, title: 'SIMPLE BANDANA MASK', price: '$23.99 USD'},
    {id: 4, img: img4, title: 'PROTECTION MASK', price: '$67.99 USD'},
    {id: 5, img: img5, title: 'CLASSIC FACE MASK', price: '$12.99 USD'},
])
</script>