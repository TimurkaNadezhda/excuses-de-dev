<template>
  <div class="lost-container">
    <h1>I'm lost</h1>
    <img src="https://i.gifer.com/2DhW.gif" alt="Lost gif">
  </div>
</template>frontend\src\assets\lost.gif

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter();
const interval = ref(null);

onMounted(() => {
    interval.value = setInterval(() => {
        router.push('/');
    }, 5000);
});
onUnmounted(() => {
    interval.value = null;
});
</script>

<style scoped>
.lost-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>