<template>
  <demo-block title="基础用法">
    <MyText :text="textContent" />
  </demo-block>
</template>

<script setup>
import MyText from '../index';
import { ref } from 'vue';

const textContent = ref('jxl test test..');
</script>
