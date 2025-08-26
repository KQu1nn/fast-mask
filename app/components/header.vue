<template>
    <div class="w-full flex flex-row justify-between px-8 py-4 border-b">
        <NuxtLink to="/"><h1 class="text-2xl font-bold">FAST MASK</h1></NuxtLink>
        <ul class="flex flex-row gap-8 font-medium items-center">
            <div class="flex flex-row gap-8 font-medium items-center text-gray-800">
                <li>
                    <NuxtLink to="/produtos">Produtos</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/sobre">Sobre</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contato">Contato</NuxtLink>
                </li>
            </div>
            <button class="flex flex-row items-center border border-gray-300 rounded-lg px-3 py-1.5 gap-4 cursor-pointer">
                <Icon name="lucide:shopping-cart" width="32" height="32" />
                <NuxtLink class="text-[14px]" to="/carrinho">Carrinho</NuxtLink>
            </button>
        </ul>
    </div>
    <hero />
</template>
<script setup>

</script>