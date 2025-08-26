<template>
    <div v-for="item in depoimentos" class=" w-[411px] h-auto p-5 flex flex-col justify-between gap-2 bg-white border border-gray-200 rounded-lg">
        <p class="text-gray-700 italic">"{{ item.depoimento }}"</p>
        <p class="text-gray-900 font-medium">- {{ item.name }}</p>
    </div>
</template>
<script setup>
defineProps(['depoimentos'], {
    type: Array
})
</script>