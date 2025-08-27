<template>
    <div class="w-full min-h-screen">
        <div class="w-full flex flex-col items-center justify-center gap-3 bg-[#1e2127] text-white py-25">
            <h1 class="text-6xl font-bold">TODOS OS PRODUTOS</h1>
            <p class="w-2/4 text-center text-2xl">Descubra nossa coleção completa de máscaras para esportes extremos</p>
        </div>

        <div class="w-full flex flex-row items-center justify-center gap-4 py-10">
            <button class="text-gray-800 border border-gray-200 rounded-lg px-2 py-1 font-medium cursor-pointer">Todos</button>
            <button class="text-gray-800 border border-gray-200 rounded-lg px-2 py-1 font-medium cursor-pointer">Clássicas</button>
            <button class="text-gray-800 border border-gray-200 rounded-lg px-2 py-1 font-medium cursor-pointer">Temáticas</button>
            <button class="text-gray-800 border border-gray-200 rounded-lg px-2 py-1 font-medium cursor-pointer">Esportivas</button>
            <button class="text-gray-800 border border-gray-200 rounded-lg px-2 py-1 font-medium cursor-pointer">Premium</button>
        </div>

        <div>
            <ProductPreview :products="productsStore.products"/>
        </div>

        <div class="w-full flex flex-col items-center justify-center gap-3 bg-gray-50 py-25">
            <h1 class="text-4xl font-bold">Não encontrou o que procura?</h1>
            <p class="w-3/6 text-center text-lg text-gray-500">Entre em contato conosco para produtos personalizados ou dúvidas sobre nossa coleção</p>
            <div class="w-full flex flex-row items-center justify-center gap-4 py-2">
                <button class="text-sm font-medium px-6 py-3 border border-gray-300 rounded-xl cursor-pointer">Contato</button>
                <button class="bg-blue-700 text-white text-sm font-medium px-6 py-3 border border-gray-300 rounded-xl cursor-pointer">Produtos personalizados</button>
            </div>
        </div>
    </div>    
</template>
<script setup>
import { useProductsStore } from '@/stores/products';

const productsStore = useProductsStore();
</script>