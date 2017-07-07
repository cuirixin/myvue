<template>
  
</template>

<script>
import router from '../router'
export default {
  name: 'hello',
  data () {
    return {
      msg: '我自己搭建的VUE项目'
    }
  },
  created(){
   
  },
  methods:{
  	routeHome(){
  		router.push('/')
  	}
  },
  watch:{
    xx(val){
      console.log(val)
    }
  },
  computed:{
    xx(){
      return this.$store.state.route
    }
  },
  mounted(){
    let x=_.difference(['2', 3,4,5], [2, 3,6]);
    
    console.log(this.$route,this.$store.state.route)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
 
</style>
