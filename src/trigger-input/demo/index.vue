<template>
  <div class="test-block">
    <div>
      <p>test1 input @@ to trigger:</p>
      <TriggerInput placeholder="enter" trigger="@@"></TriggerInput>
    </div>

    <div>
      <p>test2 input auto to trigger:</p>
      <TriggerInput placeholder="enter"></TriggerInput>
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
