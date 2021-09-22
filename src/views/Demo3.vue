<!--  -->
<template>
  <div>
    <h2>1. 绑定监听</h2>
    <button v-on:click="test1">Greet</button>
    <button @click="test1">Greet2</button>
    <button @click="test2($event, 'hello')">Greet3</button>
    <h2>2. 事件修饰符</h2>
  <!-- 阻止事件默认行为 -->
  <a href="http://www.baidu.com" @click.prevent="test3">百度一下</a>
  <br/>
  <br/>
  <!-- 停止事件冒泡 -->
  <div style="width: 200px;height: 200px;background: red" @click="test4">
    <div style="width: 100px;height: 100px;background: green" @click.stop="test5"></div>
  </div>

  <h2>3. 按键修饰符</h2>
  <input @keyup.8="test6">
  <input @keyup.enter="test6">
</div>

  </div>
</template>

<script>
export default {
  name: "demo3",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    test1(e) {
      console.log(e.target);
      alert(e.target.innerText);
    },
    test2(e, str) {
      alert(str);
    },
    test3() {
      alert("阻止事件的默认行为");
    },

    test4() {
      alert("out");
    },
    test5() {
      alert("inner");
    },

    test6(event) {
      alert(event.keyCode + "---" + event.target.value);
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
