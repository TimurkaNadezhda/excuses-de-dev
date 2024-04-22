<template>
    <h1 v-if="currentExcuse">{{ currentExcuse.message }}</h1>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router'

    const route = useRoute();
    const excuses = ref([]);
    const currentExcuse = ref(null);

    const fetchExcuses = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/excuses`);
        excuses.value = await response.json();

        excuses.value.forEach(excuse => {
            console.log(excuse);
        });
        console.log(route.params.http_code); 

        currentExcuse.value = excuses.value.find((item) => item.http_code === route.params.http_code);
    } catch (error) {
        console.error('Failed to fetch excuses:', error);
    }
    };

    onMounted(async () => {
    await fetchExcuses();
    })
</script>