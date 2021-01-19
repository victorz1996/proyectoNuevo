<template>
<div>
 <ul>
    <li v-for="item of items" :key="item.id">{{item.name}}</li>
  </ul>
</div>
 
</template>
<script>
import axios from "axios";
export default {
  data:()=>({
    items:[]
  }),
  mounted(){
    this.datos()
  },
  methods:{
    async datos(){
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      console.log(res)
      this.items = res.data
    }
  }
}
</script>