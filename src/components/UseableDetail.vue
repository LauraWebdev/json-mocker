<template>
  <div class="useable-detail">
    <h1>{{ useableInfo?.key }}</h1>
    <p>{{ useableInfo?.explanation }}</p>

    <h2>Usage</h2>
    <code class="usage" v-if="useableInfo?.key !== 'loop'">"{{ useableInfo?.key }}": "&#123;<span>{{ useableInfo?.usage }}</span>&#125;"</code>
    <code class="usage" v-else><span>"{{ useableInfo?.usage }}",</span><br />{<br />&nbsp;&nbsp;"id": "{uuid()}"<br />}</code>

    <template v-if="useableInfo?.key !== 'loop'">
      <h2>Example</h2>
      <div class="example">{{ useableInfo?.example }}</div>
    </template>
  </div>
</template>

<script setup>
defineProps({
  useableInfo: Object,
});
</script>

<style lang="scss" scoped>
.useable-detail {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  & h1 {
    font-size: 1.25rem;
    font-weight: bold;
  }
  & p {
    margin-bottom: 15px;
    color: rgba(255,255,255,0.6);
    line-height: 1.5rem;
  }
  & h2 {
    font-size: 1rem;
    font-weight: bold;
  }
  & .usage {
    font-size: 12px;
    margin-bottom: 15px;
    color: rgba(255,255,255,0.4);

    & span {
      color: #98c27a;
    }
  }
  & .example {
    color: rgba(255,255,255,0.6);
  }
}
</style>