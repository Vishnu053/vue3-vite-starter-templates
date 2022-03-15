<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: { type: String; required: false } }>();

const count = ref(0);
const variants = [
  "default",
  "primary",
  "info",
  "success",
  "warning",
  "error",
];
const options= [
        {
          label: 'Rubber Soul',
          key: 'Rubber Soul',
          children: [
            {
              label:
                "Everybody's Got Something to Hide Except Me and My Monkey",
              key: "Everybody's Got Something to Hide Except Me and My Monkey"
            },
            {
              label: 'Drive My Car',
              key: 'Drive My Car',
              disabled: true
            },
          ]
        },
        {
          label: 'Let It Be',
          key: 'Let It Be Album',
          children: [
            {
              label: 'Two Of Us',
              key: 'Two Of Us'
            },
            {
              label: 'Dig A Pony',
              key: 'Dig A Pony'
            }
          ]
        }
      ]
</script>

<template>
  <h1>{{ msg }}</h1>
  <hr />
  <n-button
    tag="a"
    type="primary"
    href="https://www.naiveui.com/en-US/os-theme/docs/introduction"
    target="_blank"
    >Naive UI For Vue</n-button
  >
  <hr>
  <h2>Buttons</h2>
  <!-- loop n-button with variants -->
  <n-button
    v-for="(variant, index) in variants"
    :key="'btn-variant' + index"
    :type="variant"
    @click="count++"
    >{{ variant }}</n-button
  >
  <hr />
  <h2>Gradient Text</h2>
  <n-gradient-text v-for="(variant, index) in variants"
    :key="'gradient-text-variant' + index"
    :type="variant">
    <h3>This is a gradient text</h3>
  </n-gradient-text>
  <hr>
  <hr>
  <h2>Ellipsis</h2>
  <n-ellipsis :line-clamp="2">
    Lorem ipsum dolor sit amet,<br>
    consectetur adipiscing elit,<br>
    sed do eiusmod tempor incididunt<br>
    ut labore et dolore magna aliqua.<br>
    Ut enim ad minim veniam,<br>
    quis nostrud exercitation ullamco
  </n-ellipsis>
  <br>
  <n-ellipsis expand-trigger="click" line-clamp="2" :tooltip="false">
    Lorem ipsum dolor sit amet,<br>
    consectetur adipiscing elit,<br>
    sed do eiusmod tempor incididunt<br>
    ut labore et dolore magna aliqua.<br>
    Ut enim ad minim veniam,<br>
    quis nostrud exercitation ullamco
  </n-ellipsis>
  <hr>
  <h2>TreeSelect</h2>
  <n-space vertical>
    <n-tree-select
      filterable
      :options="options"
      default-value="Drive My Car"
      clearable
    />
    <n-tree-select
      multiple
      checkable
      filterable
      :clear-filter-after-select="false"
      :options="options"
      :default-value="['Norwegian Wood']"
      clearable
    />
  </n-space>
  <hr>
  <div>
    <n-button>Get Started</n-button>
  </div>
</template>

