<template>
    <div class="main-component">
      <h1>Les Excuses de Dev</h1>
      <p>{{ currentExcuse }}</p>
      <ButtonComponent @generateExcuse="generateExcuse" />
    </div>
</template>
  
<script>
  import ButtonComponent from './ButtonComponent.vue';
  
  export default {
    components: {
      ButtonComponent,
    },
    data() {
      return {
        currentExcuse: '',
      };
    },
    methods: {
        generateExcuse() {
            fetch('/excuses/random') 
                .then(response => response.json())
                .then(data => {
                
                this.currentExcuse = data.message;
                })
                .catch(error => {
                console.error('Failed to fetch excuse:', error);
                });
        }
    },
  };

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
  