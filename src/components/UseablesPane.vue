<template>
  <Pane
      :size="20"
      :min-size="15"
  >
    <Splitpanes
        horizontal
    >
      <Pane
          :size="85"
          :min-size="50"
          class="pane-useable-list"
      >
        <div class="search-box">
          <span class="ri-search-line"></span>
          <input
              type="search"
              placeholder="Search..."
              v-model="searchQuery"
              @input="updateResults"
          />
        </div>

        <div class="useable-list">
          <div
              class="group"
              v-for="(items, groupKey) in groupedUseables"
              :key="groupKey"
          >
            <header>{{ groupKey }}</header>
            <div class="items">
              <button
                  v-for="(item, itemKey) in items"
                  :key="itemKey"
                  @click="useableInfo = { 'key': itemKey, ...item }"
                  :class="{'active': itemKey === useableInfo?.key}"
              >
                {{ itemKey }}
              </button>
            </div>
          </div>
        </div>
      </Pane>
      <Pane
          :size="25"
          :min-size="10"
          class="pane-useable-detail"
      >
        <UseableDetail
          v-if="useableInfo !== null"
          :useableInfo="useableInfo"
        />
      </Pane>
    </Splitpanes>
  </Pane>
</template>

<script setup>
import {onMounted, ref} from "vue";
import { Splitpanes, Pane } from 'splitpanes';
import {useablesMap} from "../useables/index.js";
import UseableDetail from "./UseableDetail.vue";

const useableInfo = ref(null);
const searchQuery = ref("");
const groupedUseables = ref({});

onMounted(() => {
  updateResults();
});

const updateResults = () => {
  groupedUseables.value = {};

  useablesMap.loop = {
    group: 'General',
    usage: 'loop(min, max?)',
    explanation: 'Loops the next object within an array, either a fixed or random amount of times.',
  };

  Object.keys(useablesMap).forEach(key => {
    if(searchQuery.value !== "" && !key.toLowerCase().includes(searchQuery.value.toLowerCase())) return;

    let group = useablesMap[key].group;
    if (!groupedUseables.value[group]) {
      groupedUseables.value[group] = {};
    }
    groupedUseables.value[group][key] = useablesMap[key];
  });
};
</script>

<style lang="scss" scoped>
.pane-useable-list {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  position: relative;

  & .search-box {
    position: relative;
    z-index: 2;
    background: #23262b;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    height: 40px;

    &:focus-within {
      & span {
        color: #222;
      }
      & input {
        outline: 0;
        background: #fff;
        color: #222;
      }
    }

    & span {
      height: 40px;
      font-size: 18px;
      display: flex;
      align-items: center;
      position: absolute;
      left: 20px;
      pointer-events: none;
      transition: 0.15s ease-in-out all;
    }

    & input {
      appearance: none;
      padding: 0 20px 0 50px;
      background: transparent;
      border: 0;
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 1rem;
      color: #ffffff;
      transition: 0.15s ease-in-out all;

      &:not(:focus):hover {
        background: rgba(255,255,255,0.05);
      }
    }
  }

  & .useable-list {
    z-index: 1;
    position: absolute;
    top: 40px;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: scroll;
  }

  & .group {
    &:not(:last-of-type) {
      margin-bottom: 20px;
    }

    & header {
      background: rgba(152, 194, 122, 0.07);
      font-size: 0.75rem;
      font-weight: bold;
      color: #98c27a;
      text-transform: uppercase;
      padding: 10px 20px;
    }
    & .items {
      display: grid;
      grid-template-columns: 1fr;
      gap: 0;

      & button {
        appearance: none;
        border: 0;
        text-align: left;
        background: transparent;
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 1rem;
        color: rgba(255,255,255,0.8);
        padding: 10px 20px;
        transition: 0.15s ease-in-out all;

        &:not(.active):hover {
          cursor: pointer;
          background: rgba(255, 255, 255, 0.05);
        }
        &.active {
          background: rgba(255, 255, 255, 0.1);
        }
      }
    }
  }
}
.pane-useable-detail {
  overflow-y: scroll;
  background: #1e2126 !important;
}
</style>