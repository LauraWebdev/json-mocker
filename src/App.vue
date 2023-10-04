<template>
    <TitleBar
        @fileNew="fileNew"
        @fileSave="fileSave"
        @fileOpen="fileOpen"
        @toggleUseables="showUseables = !showUseables"
        @toggleSchema="showSchema = !showSchema"
        @togglePreview="showPreview = !showPreview"
        :useablesActive="showUseables"
        :schemaActive="showSchema"
        :previewActive="showPreview"
    />

    <Splitpanes class="default-theme">
      <UseablesPane
          v-if="showUseables"
      />
      <SchemaPane
          ref="schemaPane"
          v-if="showSchema"
          @schemaInput="(newSchema) => dataSchema = newSchema"
      />
      <PreviewPane
          ref="previewPane"
          v-if="showPreview"
          :data="dataSchema"
      />
    </Splitpanes>

    <!-- Required to prompt user for a file -->
    <input type="file" accept="application/json" ref="fileInput" @change="processFile" style="display: none" />
</template>

<script setup>
import {nextTick, ref} from "vue";
import {Splitpanes} from 'splitpanes';
import UseablesPane from "./components/UseablesPane.vue";
import SchemaPane from "./components/SchemaPane.vue";
import PreviewPane from "./components/PreviewPane.vue";
import TitleBar from "./components/TitleBar.vue";

const showUseables = ref(true);
const showSchema = ref(true);
const showPreview = ref(true);

const dataSchema = ref(`{}`);

const schemaPane = ref(null);
const previewPane = ref(null);
const fileInput = ref(null);

const fileNew = () => {
  if(dataSchema.value === '{}') {
    forceSetSchema('{}');
  } else if(window.confirm('Are you sure that you want to reset your Schema? This cannot be undone.')) {
    forceSetSchema('{}');
  }
};

const fileSave = () => {
  const a = document.createElement('a');
  const file = new Blob([dataSchema.value], {type: 'application/json'});
  const url = URL.createObjectURL(file);

  a.href = url;
  a.download = 'schema.json';
  a.click();

  URL.revokeObjectURL(url);
};

const fileOpen = () => {
  if(dataSchema.value === '{}') {
    fileInput.value.click();
  } else if(window.confirm('Are you sure that you want to load a new Schema? This cannot be undone.')) {
    fileInput.value.click();
  }
};

const processFile = (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = (event) => {
      forceSetSchema(event.target.result);
      fileInput.value.value = '';
    };

    reader.readAsText(file);
  }
};

const forceSetSchema = (newSchema) => {
  dataSchema.value = newSchema;

  nextTick(() => {
    schemaPane.value.setValue(dataSchema.value);
    previewPane.value.generatePreview();
  });
};
</script>

<style lang="scss" scoped>
</style>