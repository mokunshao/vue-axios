<template>
  <div id="app">
    <div>json1:{{json1}}</div>
    <div>json2:{{json2}}</div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      json1: "",
      json2: ""
    };
  },
  mounted() {
    this.qa.v(this).json1({data:{q:11}});
    this.qa.v(this).json2();
  }
};
</script>