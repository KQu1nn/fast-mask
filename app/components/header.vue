<template>
    <div class="w-full flex flex-row justify-between px-8 py-4 border-b border-gray-300">
        <NuxtLink to="/"><h1 class="flex flex-row items-center gap-2 text-2xl font-bold">
            <img src="@/assets/images/mask.png" class="w-7 h-7">
            FAST MASK
        </h1></NuxtLink>
        <ul class="flex flex-row gap-8 font-medium items-center">
            <div class="hidden md:flex flex-row gap-8 font-medium items-center text-gray-800">
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
            <button class="flex flex-row gap-4 px-3 py-1 items-center border border-gray-300 rounded-lg cursor-pointer">
                <Icon name="lucide:shopping-cart" width="32" height="32" />
                <NuxtLink class="text-[14px]" to="/carrinho">Carrinho</NuxtLink>
            </button>
        </ul>
    </div>
</template>
<script setup>

</script>