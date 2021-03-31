<template>
   <div class="sidebar">
       <div class="title">  <h1> Sidebar</h1>
          </div>
       <div class="menu-item">
 <router-link to ='/' active-class="active" tag="button" class="side-btn">
<div class="link-container">
    File
</div>
     </router-link>
     <router-link to ='/Message' active-class="active" tag="button"  class="side-btn">
     <div class="link-container">
 Messages
</div>
</router-link>
<router-link to ='/Settings' active-class="active" tag="button"  class="side-btn">
     <div class="link-container">
Settings 
</div>
     </router-link>
       </div>
    
   </div>
</template>

<script>

export default {
 name:'sidebar',
 
 }
    

</script>
<style scoped>
.title{
    text-align: center;
    color: whitesmoke;
}
.menu-item{
    display: flex;
    flex-direction: column;
    margin-top: 40px;
}
.menu-item >*{
    margin-top: 60px;


}
.side-btn:focus{
    outline-style: none;
    outline: none;
    
}
.side-btn{
    border: none;
    padding:15px 0px;
    font-size: 20px;
}
.side-item.active{
    background: white;
    color:teal;
}

</style>