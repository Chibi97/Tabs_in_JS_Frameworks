<template>
  <div v-show="isActive">
      <slot />
  </div>
</template>

<script>
export default {
  props: ['title'],
  data() {
    return {
      isActive: false,
      header: this.title,
    }
  }
}
</script>