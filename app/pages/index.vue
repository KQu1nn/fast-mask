<template>
    <div class="w-full min-h-screen">
        <hero />
        <div class="bg-red-600 font-bold text-2xl md:text-4xl text-white px-10 md:px-0 py-8 text-center mt-15">
            <p>DESCUBRA NOSSOS INCRÍVEIS DESIGNS</p>
        </div>
        <ProductPreview :limit="5" />
        <BenefitsSection />
        <WhyChoose />
        <TestemonialsSection />
        <PairGlovesSection />
        <AboutSection />
    </div>
</template>
<script setup>

</script>