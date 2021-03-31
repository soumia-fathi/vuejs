<template>
    <div class="dashboard">
       <sidebar/>
    <div class="content">
      <router-view/>
    </div>
    </div>

</template>
<script>
import sidebar from '@/components/sidebar'
export default {
    name:'Home',
components:{
        sidebar
    }
}
</script>
<style scoped>
.dashboard{
    display:grid;
    grid-template-columns: 1fr 5fr;
    background:rgb(2, 82, 82);
    height: 100vh;
    width: 100%;
   

}
.content{
    background:whitesmoke;
    border-radius: 20px;
   margin: 6px 6px 6px 0px;
   text-align: center;
   color:black;
   
}
</style>