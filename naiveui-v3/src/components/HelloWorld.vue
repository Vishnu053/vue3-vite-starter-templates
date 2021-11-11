<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
<n-button tag="a" type="primary" href="https://next.antdv.com/index" target="_blank">Naive UI For Vue</n-button>
<hr/>
<div>
  <n-button>Get Started</n-button>
  </div>
</template>

