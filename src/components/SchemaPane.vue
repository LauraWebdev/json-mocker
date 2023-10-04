<template>
  <Pane :size="40" :min-size="25" class="pane-schema">
    <VAceEditor
      v-model:value="schemaValue"
      @change="emit('schemaInput', schemaValue)"
      lang="json"
      theme="one-dark"
      :options="{
        showPrintMargin: false,
        wrapBehavioursEnabled: true,
        wrap: 'free',
        tabSize: 2,
      }"
    />
  </Pane>
</template>

<script setup>
import { Pane } from 'splitpanes';
import {ref} from "vue";

const emit = defineEmits(['schemaInput']);

const schemaValue = ref(`{}`);

const setValue = (newValue) => {
  schemaValue.value = newValue;
};

defineExpose({
  setValue
});
</script>

<style lang="scss" scoped>
.pane-schema {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}
</style>