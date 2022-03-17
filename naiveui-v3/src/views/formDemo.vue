<script>
import { ref } from "vue";

  export default {
    setup() {
        const model=ref({ child: {} })
        return {
            model
        }
    }
  }
</script>

<template>
  <div>
    <n-row gutter="12">
      <n-col :span="4">
        <n-input v-model:value="model.name" clearable></n-input>
      </n-col>
      <n-col :span="4">
        <n-input type="number" clearable v-model:value="model.amount">
          <template #prefix> $ </template>
        </n-input>
      </n-col>
      <n-col :span="6">
        <n-input v-model:value="model.child.name" clearable></n-input>
      </n-col>
      <n-col :span="12">
        {{ model }}
      </n-col>
    </n-row>
  </div>
</template>