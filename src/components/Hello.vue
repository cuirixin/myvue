<template lang="pug">
  div  sdsadas
    <button @click=routeTest>dsds</button>
    chart(:autoResize="true" :options="polar")
</template>

<script>
import router from '../router'  // 使用路由功能必须引用路由 vue路由无法全局配置
import { mapState } from 'vuex' // 使用vuex的mapState功能必须 无法全局配置

export default {
  name: 'hello',
  data () {
     let data = []

    for (let i = 0; i <= 360; i++) {
        let t = i / 180 * Math.PI
        let r = Math.sin(2 * t) * Math.cos(2 * t)
        data.push([r, i])
    }

    return {
      polar: {
        title: {
          text: '极坐标双数值轴'
        },
        legend: {
          data: ['line']
        },
        polar: {
          center: ['50%', '54%']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 2000
      },
      msg: '了吗定时达',
      currentPage4:4
    }
  },
  created(){
    
     this.$store.dispatch('count',{'name':'lmr',"age":28})
     this.getProvince()
  },
  watch:{
    count(val){
      //console.log(val)
    }
    ,
    user(val,oldVal){

    // console.log(val)
    }
  },
  computed:mapState(['user','count']),
  methods:{
    xxx(param){  // 除第一个自定义事件名称参数的后面参数开始计数 其实param相当于$emit时的第二个参数 第一个为自定义事件名称
      console.log(param)
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    routeTest(){
      router.push('/test')
      //this.$router.push('/test')
    },
    getProvince(){
      this.$store.dispatch('user',{
        'method':'get',
        'url':'province',
        "param":{'_limit':1000,"_page":1}
      })
    },
    ps(){
      this.$store.dispatch('ps',{
        'method':'patch',
        'url':'province/43',
        "param":{'ry':'测试测试','lmr':'林毛绒',"wangli":'达大声道撒'},
        "RELOADGET":this.getProvince    // 如需重新加载数据(免刷新页面) 要把这个get方法传过去  （post patch delete put 需要写） 除了RELOADGET字段定义的方法也可以其他字段定义其他方法 看你的需求了
      })
      // $.ajax({
      //   type:'delete',
      //   url:'http://localhost:5004/province/45',
      //   // data:{'provincetest':'林茂荣000'},
      //   success:function(data){
      //     console.log(data)
      //   },
      //   error:function(data){
      //     console.log(data)
      //   }
      // })
    }
  },

  mounted(){
    
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css">

  /*loading的css*/
  .loading{
            width: 60px;
            height: 60px;
            margin: 0 auto;
            margin-top:100px;
            position: relative;
            -webkit-animation: load 3s linear infinite;
        }
        .loading div{
            width: 100%;
            height: 100%;
            position: absolute;
        }
        .loading span{
            display: inline-block;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #99CC66;
            position: absolute;
            left: 50%;
            margin-top: -10px;
            margin-left: -10px;
            -webkit-animation: changeBgColor 3s ease infinite;
        }
        @-webkit-keyframes load{
            0%{
                -webkit-transform: rotate(0deg);
            }
            33.3%{
                -webkit-transform: rotate(120deg);
            }
            66.6%{
                -webkit-transform: rotate(240deg);
            }
            100%{
                -webkit-transform: rotate(360deg);
            }
        }
        @-webkit-keyframes changeBgColor{
            0%,100%{
                background: #99CC66;
            }
            33.3%{
                background: #FFFF66;
            }
            66.6%{
                background: #FF6666;
            }
        }
        .loading div:nth-child(2){
            -webkit-transform: rotate(120deg);
        }
        .loading div:nth-child(3){
            -webkit-transform: rotate(240deg);
        }
        .loading div:nth-child(2) span{
            -webkit-animation-delay: 1s;
        }
        .loading div:nth-child(3) span{
            -webkit-animation-delay: 2s;
        }

   /*下拉加载的css*/
      .dropload-up {
      position: relative;
      height: 0;
      overflow: hidden;
      font-size: 12px;
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
    .dropload-refresh, .dropload-update, .dropload-load, .dropload-noData {
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
    .dropload-load .loading {
      display: inline-block;
      height: 15px;
      width: 15px;
      border-radius: 100%;
      margin: 6px;
      border: 2px solid #666;
      border-bottom-color: transparent;
      vertical-align: middle;
      -webkit-animation: rotate 0.75s linear infinite;
      animation: rotate 0.75s linear infinite;
    }
    @-webkit-keyframes rotate {
      from {-webkit-transform:rotate(0deg);}
      to {-webkit-transform:rotate(360deg);}
    }


</style>
<style lang="stylus" scoped>
div 
  color red
</style>
