<template>
    <div v-for="beneficio in beneficios" class=" w-72 h-44 flex flex-col justify-center items-center gap-2 rounded-lg bg-white shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
        <div class=" w-16 h-16 rounded-full bg-violet-100 flex justify-center items-center">
            <p class="text-2xl">{{ beneficio.icon }}</p>
        </div>
        <h3 class="font-bold text-md">{{ beneficio.title }}</h3>
        <p class="text-gray-600 text-sm">{{ beneficio.sub }}</p>
    </div>
</template>
<script setup>
defineProps(['beneficios'], {
    type: Array,
})
</script>