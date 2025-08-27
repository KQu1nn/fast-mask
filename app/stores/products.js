import { defineStore } from "pinia";
import { ref } from "vue";

import img1 from '@/assets/images/img1.webp'
import img2 from '@/assets/images/img2.jpg'
import img3 from '@/assets/images/img3.webp'
import img4 from '@/assets/images/img4.webp'
import img5 from '@/assets/images/img5.webp'


export const useProductsStore = defineStore("products", () => {
    const products = ref([
    {id: 1, img: img1, title: 'BLACK FACE MASK', price: '$29.99 USD'},
    {id: 2, img: img2, title: 'UNDERGROUND MASK', price: '$10.99 USD'},
    {id: 3, img: img3, title: 'SIMPLE BANDANA MASK', price: '$23.99 USD'},
    {id: 4, img: img4, title: 'PROTECTION MASK', price: '$67.99 USD'},
    {id: 5, img: img5, title: 'CLASSIC FACE MASK', price: '$12.99 USD'},
    {id: 6, img: img1, title: 'BLACK FACE MASK', price: '$29.99 USD'},
    {id: 7, img: img2, title: 'UNDERGROUND MASK', price: '$10.99 USD'},
    {id: 8, img: img3, title: 'SIMPLE BANDANA MASK', price: '$23.99 USD'},
    {id: 9, img: img4, title: 'PROTECTION MASK', price: '$67.99 USD'},
    {id: 10, img: img5, title: 'CLASSIC FACE MASK', price: '$12.99 USD'},
])


const limitedItems = computed(() => {
    return products.value.slice(0, 5)
})

    return { products, limitedItems, showBtn }
})