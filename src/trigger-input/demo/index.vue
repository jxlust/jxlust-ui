<template>
  <div class="test-block">
    <div>
      <p>test1:</p>
      <TriggerInput></TriggerInput>
    </div>
  </div>
</template>

<script setup lang="ts">
import TriggerInput from '../TriggerInput';
</script>

<style>
.test-block {
  display: grid;
  row-gap: 20px;
}
</style>
