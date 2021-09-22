<!-- 遍历数组 -->
<template>
  <div id="demo">
    <input
      type="text"
      name="searchName"
      placeholder="搜索指定用户名"
      v-model="searchName"
    />
    <ul>
      <li v-for="(p, index) in filterPerson" :key="index">
        {{ index }}--{{ p.name }}--{{ p.age }}
      </li>
    </ul>
    <button @click="setOrderType(1)">年龄升序</button>
    <button @click="setOrderType(2)">年龄降序</button>
    <button @click="setOrderType(0)">原本顺序</button>
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
        { id: 3, name: "Bob", age: 17 },
        { id: 4, name: "Cat", age: 14 },
        { id: 4, name: "Mike", age: 14 },
        { id: 4, name: "Monica", age: 16 },
      ],
      orderType: 0, //0代表不排序, 1为升序, 2为降序
      searchName: "",
    };
  },
  methods: {
    setOrderType(orderType) {
      this.orderType = orderType;
    },
  },
  mounted() {},
  created() {},
  computed: {
    filterPerson() {
      let { orderType, searchName, persons } = this;
      persons = persons.filter((p) => p.name.indexOf(searchName) != -1);
      if (orderType !== 0) {
        persons = persons.sort(function (p1, p2) {
          if (orderType === 1) {
            return p1.age - p2.age;
          } else {
            console.log(orderType);
            return p2.age - p1.age;
          }
        });
      }
      return persons;
    },
  },
};
</script>
<style scoped></style>
