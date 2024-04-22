<template>
    <main v-if="currentExcuse">
        <!-- <h1 v-if="currentExcuse">{{ currentExcuse.http_code }}</h1> -->
        <p>{{ currentExcuse.message }}</p>
    </main>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { useRoute, useRouter } from 'vue-router'

    const route = useRoute();
    const router = useRouter();
    const currentExcuse = ref(null);

    const fetchExcuseByCode = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/excuses/${route.params.http_code}`);

            if (response.status === 404) {
                return router.push({ name: 'NotFound' });
            }
            
            currentExcuse.value = await response.json();
        } catch (error) {
            console.error('Failed to fetch excuses:', error);
        }
    };

    onMounted(async () => {
        await fetchExcuseByCode();
    })
</script>

<style scoped>
    main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    }
</style>