<!-- 遍历数组 -->
<template>
  <div class="demo1">
    <h2>测试遍历数组</h2>
    <ul>
      <li v-for="(item, index) in persons" :key="index">
        {{ index }}: 姓名{{ item.name }},年龄{{ item.age }}
        <button @click="deleteItem(index)">删除</button>
        <button @click="updateItem(index, {name:'Jok',age:15})">更新</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "demo1",
  data() {
    return {
      persons: [
        { id: 1, name: "Tom", age: 13 },
        { id: 2, name: "Jack", age: 12 },
        { id: 3, name: "Bob", age: 14 }
      ]
    };
  },
  methods:{
    deleteItem(index) {
      this.persons.splice(index,1)
    },
    updateItem(index,person) {
      this.persons.splice(index,1,person)
  
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped></style>
