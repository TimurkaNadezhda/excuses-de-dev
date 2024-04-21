<!-- <template>
    <div class="main-component">
      <h1>Les Excuses de Dev</h1>
      <p>{{ currentExcuse }}</p>
      <ButtonComponent @generateExcuse="generateExcuse" />
    </div>
</template> -->
  

<!-- <script>
import ButtonComponent from './ButtonComponent.vue';

export default {
  components: {
    ButtonComponent,
  },
  data() {
    return {
      currentExcuse: '',
      allExcuses: [],
    };
  },
  created() {
    this.getAllExcuses();
  },
  methods: {
    getAllExcuses() {
      fetch('http://localhost:3010/api/excuses') 
        .then(response => response.json())
        .then(data => {
          this.allExcuses = data;
          this.generateExcuse(); 
        })
        .catch(error => {
          console.error('Failed to fetch excuses:', error);
        });
    },
    generateExcuse() {
      if (this.allExcuses.length === 0) {
        this.currentExcuse = 'No excuses available'; 
        return;
      }
      const randomIndex = Math.floor(Math.random() * this.allExcuses.length);
      this.currentExcuse = this.allExcuses[randomIndex].message;
    }
  },
};
</script>  -->




<template>
    <div class="main-component">
      <h1>Les Excuses de Dev</h1>
      <ButtonComponent @click="generateExcuse" />
      <p v-if="currentExcuse">{{ currentExcuse }}</p>
    </div>
</template> 
  
<script setup>
import { ref, onMounted } from 'vue';
import ButtonComponent from './ButtonComponent.vue';

const excuses = ref([]);
const currentExcuse = ref(null);

const fetchExcuses = async () => {
  try {
    const response = await fetch('http://localhost:3010/api/excuses');
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