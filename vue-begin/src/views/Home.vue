<template>
  <div class="hello">
    <div class="left">
      <h2> 客户订单 </h2>
      <form v-if="isShow">
        <label for="name">商品名称</label>
        <input type="text" name="name" id="" v-model="goodsList.name">
        <label for="name">商品Url</label>
        <input type="text" name="name" id="" v-model="goodsList.url">
        <label for="name">商品价格</label>
        <input type="text" name="name" id="" v-model="goodsList.price">

        <input type="button" @click="submit" value="提交">
      </form>
      <form v-else>
        {{goodsList.name}}-{{goodsList.url}}-{{goodsList.price}}
        <input type="button" value="添加" @click="add">
        <input type="button" value="取消" @click="cancel">
      </form>
    </div>
    <div class="right">
      <h2> 提交订单 </h2>
      <ul>
        <li v-for="(item,index) in lists " :key="index">
          {{item.name}}--{{item.url}}-{{item.price}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data: function () {
    return {
      isShow: true,
      goodsList: {
        name: '',
        url: '',
        price: ''
      },
      lists: [

      ]
    }
  },
  methods: {
    submit () {
      this.isShow = !this.isShow
    },
    add () {
      this.lists.push({ ...this.goodsList })
      this.$store.commit('setList', this.lists)
      this.goodsList.name = ''
      this.goodsList.url = ''
      this.goodsList.price = ''
      this.isShow = true
    },
    cancel () {
      this.isShow = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
