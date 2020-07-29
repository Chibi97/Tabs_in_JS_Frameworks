<template>
  <div id="app">
    <div class="container">
      <Tabs>
        <Tab title="Vue">
          <VueTab />
        </Tab>
        <Tab title="React">
          <ReactTab />
        </Tab>
        <Tab title="Angular">
          <AngularTab />
        </Tab>
      </Tabs>
    </div>
  </div>
</template>

<script>
import Tab from "./components/Tab";
import Tabs from "./components/Tabs";
import VueTab from "./components/pages/VueTab";
import AngularTab from "./components/pages/AngularTab";
import ReactTab from "./components/pages/ReactTab";

export default {
  name: "App",
  components: {Tabs, Tab, VueTab, AngularTab, ReactTab},
};
</script>
