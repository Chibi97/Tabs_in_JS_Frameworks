<template>
  <div>
    <div class="tabs">
      <ul>
        <li :class="{'is-active': tab.isActive}"
            :key="idx"
            v-for="(tab, idx) in tabs"
        >
          <a href="#" @click="setActiveTab(idx)">
            {{ tab.header }}
          </a>
        </li>
      </ul>
    </div>

    <slot />
  </div>
</template>

<script>

export default {
  data() {
    return {
      tabs: [],
    }
  },
  mounted() {
    this.tabs = this.$children;
    this.tabs[0].isActive = true;
  },

  methods: {
    setActiveTab(idx) {
      const tab = this.tabs[idx];
      this.tabs.forEach(tab => tab.isActive = false);
      tab.isActive = true;
    },
  },
}
</script>
