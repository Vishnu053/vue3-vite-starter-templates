<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ msg: string }>()
const title = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
   <a-button type="primary" link href="https://next.antdv.com/index" target="_blank">Ant Design For Vue</a-button>
  
</template>


