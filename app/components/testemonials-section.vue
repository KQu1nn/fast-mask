<template>
    <div class="w-full min-h-screen text-black bg-gray-50 pt-18 flex flex-col px-8 items-center gap-15">
        <h1 class="w-3/6 text-center text-5xl font-bold">AMANTES DE ESPORTES RADICAIS PENSAM QUE SÃO ÓTIMOS!</h1>
        <div class="w-full flex flex-row flex-wrap gap-6 justify-start">
            <TestemonialsCard :depoimentos="depoimentos" />
        </div>
        <div class="pb-10">
            <Button />
        </div>
    </div>
</template>
<script setup>
const depoimentos = ref([
    { id: 1, name: 'Joaquim André', depoimento: 'Ótimo negócio e chegou bem rápido...' },
    { id: 2, name: 'João Carlos', depoimento: 'Ótimo ajuste sob meu capacete e super confortável...' },
    { id: 3, name: 'Maria Santos', depoimento: 'É o melhor para usar contra o sol! Obrigada!' },
    { id: 4, name: 'Luiz Henrique', depoimento: 'Vale a pena! Pegue vários!!' },
    { id: 5, name: 'Jorge Santana', depoimento: 'Estou muito satisfeito com o produto. Obrigada pela qualidade!' },
])
</script>