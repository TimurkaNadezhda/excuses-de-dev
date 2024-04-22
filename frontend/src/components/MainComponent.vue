<template>
    <div class="main-component">
      <h1>Les Excuses de Dev</h1>
      <p v-if="currentExcuse">{{ currentExcuse.message }}</p>
      <ButtonComponent @click="generateExcuse" />     
    </div>
</template> 
  
<script setup>
  import { ref, onMounted } from 'vue';
  import ButtonComponent from './ButtonComponent.vue';

  const excuses = ref([]);
  const currentExcuse = ref(null);

  const fetchExcuses = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/excuses`);
      excuses.value = await response.json();
    } catch (error) {
      console.error('Failed to fetch excuses:', error);
    }
  };

  const generateExcuse = () => {
    const index = Math.floor(Math.random() * excuses.value.length);

    currentExcuse.value = excuses.value[index];
    excuses.value.splice(index, 1);
  };

  onMounted(async () => {
    await fetchExcuses();
  })
</script>  

<style>
  .main-component {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh; 
  }
</style>