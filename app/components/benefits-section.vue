<template>
    <div class="w-full text-black bg-gray-50 pt-24 flex flex-col items-center">
        <div class="w-full flex flex-col items-center justify-center gap-4">
            <h1 class="text-5xl text-center font-bold">TECNOLOGIA AVANÇADA</h1>
            <p class="text-lg text-gray-600">Desenvolvido para máxima performance em esportes extremos</p>
        </div>
        <div class="w-5/6 py-12 flex flex-row justify-center gap-8 flex-wrap">
            <SmallCard :beneficios="beneficios" />
        </div>
        <div class="w-3/6 text-center flex flex-col items-center gap-8 py-15">
            <p class="text-lg text-gray-500">Fast Mask oferece proteção superior e conforto incomparável durante suas atividades mais intensas.</p>
            <Button/>
        </div>
    </div>
</template>
<script setup>
const beneficios = ref([
    {icon: '💨', title: 'RESPIRÁVEL', sub: 'Tecido ultra respirável'},
    {icon: '💧', title: 'ANTI-SUOR', sub: 'Tecnologia anti-umidade'},
    {icon: '🛡️', title: 'PROTEÇÃO UV', sub: 'Proteção solar completa'},
    {icon: '⚡', title: 'FLEXÍVEL', sub: 'Máxima flexibilidade'},
    {icon: '🏃', title: 'PERFORMANCE', sub: 'Para atletas de elite'},
    {icon: '🎯', title: 'PRECISÃO', sub: 'Ajuste perfeito'},
])
</script>