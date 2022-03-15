<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: {type:String,required:false} }>()

const count = ref(0)
const variants=["primary","secondary","success","error","warning","info","light","dark"]
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>Buttons</h2>
  <!-- loop n-button with variants -->
  <n-button v-for="(variant,index) in variants" :key="'btn-variant'+index"  :type="variant" @click="count++">{{count}}</n-button>
  <hr>
<n-button tag="a" type="primary" href="https://www.naiveui.com/en-US/os-theme/docs/introduction" target="_blank">Naive UI For Vue</n-button>
<hr/>
<div>
  <n-button>Get Started</n-button>
  </div>
</template>

