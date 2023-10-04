<template>
  <Pane :size="40" :min-size="25" class="pane-preview">
    <VAceEditor
      v-model:value="dataPreview"
      lang="json"
      theme="one-dark"
      :options="{
        readOnly: true,
        highlightActiveLine: false,
        behavioursEnabled: false,
        showPrintMargin: false,
        displayIndentGuides: false,
        wrapBehavioursEnabled: true,
        wrap: 'free',
      }"
    />

    <section class="actions">
      <MButton
        @click="generatePreview"
        class="primary"
        icon="refresh-line"
        label="Generate"
      />
      <MButton
          @click="copyPreview"
          icon="clipboard-line"
          label="Copy"
      />
      <MButton
          @click="clearPreview"
          icon="delete-bin-line"
          label="Clear"
      />
    </section>
  </Pane>
</template>

<script setup>
import {onMounted, ref} from "vue";
import { Pane } from 'splitpanes';
import {interpretUseables} from "../useables/index.js";
import MButton from "./MButton.vue";

const props = defineProps({
  data: String,
});

const dataPreview = ref('{}');

const generatePreview = () => {
  try {
    let intermediate = JSON.parse(props.data ?? '');
    let result = interpretUseables(intermediate);
    dataPreview.value = JSON.stringify(result, null, 2);
  } catch (e) {
    dataPreview.value = `Error name: ${e.name}\nMessage: ${e.message}\nStack trace:\n${e.stack}`;
  }
};
const copyPreview = () => {
  navigator.clipboard.writeText(dataPreview.value);
};
const clearPreview = () => {
  dataPreview.value = '';
};

defineExpose({
  generatePreview
});
</script>

<style lang="scss" scoped>
.pane-preview {
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;

  & .actions {
    background: #1e2126;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 10px;
    align-items: center;
  }
}
</style>