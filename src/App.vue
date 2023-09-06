<!-- <template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row">
      
      <div>
        <center>
          <h1 class="text-5xl font-bold">RESUME</h1>
          <span class="loading loading-spinner text-primary"></span>
          <span class="loading loading-spinner text-secondary"></span>
          <span class="loading loading-spinner text-accent"></span>
          <span class="loading loading-spinner text-neutral"></span>
          <span class="loading loading-spinner text-info"></span>
          <span class="loading loading-spinner text-success"></span>
          <span class="loading loading-spinner text-warning"></span>
          <span class="loading loading-spinner text-error"></span>
        </center>
        <br />
  <center><div class="avatar">
  <div class="w-40 rounded-full ring ring-primary ring-offset-base-300 ring-offset-2 ">
    <img src="./assets/image/nuch.jpg" />
  </div>
</div></center><br>

        <h3 class="text-2xl">ABOUT ME</h3>
        <p>Name : Sirinapa Wongmasoh</p>
        <p>Nickname : Nuch&nbsp; &nbsp; Age : 21 Year</p>
        <br />

        <h3 class="text-2xl">EDUCATION</h3>
        <p>
          Bachelor of Science Informatioon Technology and Digital Innovation
        </p>
        <p>Mahanakorn University Of Technology (2020 - Present)</p>
        <br />

        <h3 class="text-2xl">EXPEREINCE</h3>
        <p>Intern System Analyst</p>
        <br />

  
        <h3 class="text-2xl">SKILL</h3>
        <div class="flex flex-col w-full lg:flex-row">
          <div
            class="grid flex-grow h-40 card bg-base-300 rounded-box place-items-center"> HARD SKILL
            <ul class="list-disc list-inside">
              <li>MySQL</li>
              <li>HTML</li>
              <li>Oracle</li>
              <li>Microsoft Office</li>
            </ul>
          </div>
          <div class="divider lg:divider-horizontal">&nbsp;AND</div>
          <div
            class="grid flex-grow h-40 card bg-base-300 rounded-box place-items-center">SOFT SKILL
            <ul class="list-disc list-inside">
              <li>Time management</li>
              <li>Teamwork</li>
              <li>Communication</li>
              <li>Adaptability</li>
            </ul>
          </div>
          
        </div>
        <div class="flex flex-col w-full border-opacity-50">
  <div class="divider">AND</div>
  
  <div class="grid card bg-base-300 rounded-box place-items-center">
    <br><center><p class="text-l place-items-center" >LANGUAGE</p><br> </center>
     
      <div class="radial-progress bg-primary text-primary-content border-4 border-primary" style="--value:90;">90% <p>Thai</p></div><br>
            <div class="radial-progress bg-primary text-primary-content border-4 border-primary" style="--value:30;">&nbsp;&nbsp;30%<p>English</p></div><br>
            

  </div><br>
<h3 class="text-2xl">CONTACT</h3>
        <div class="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div class="collapse-title text-l font-medium">
            &nbsp; &nbsp; EMAIL
          </div>
          <div class="collapse-content">
            <p>&nbsp; &nbsp; &nbsp; &nbsp; 6314110020@mut.ac.th</p>
          </div>
        </div>
        <div class="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div class="collapse-title text-l font-medium">
            &nbsp; &nbsp; PHONE NUMBER
          </div>
          <div class="collapse-content">
            <p>&nbsp; &nbsp; &nbsp; &nbsp; 097-170-XXXX</p>
          </div>
        </div>
       
      </div>
      <br>
      <center><div class="badge badge-secondary badge-outline">THANK FOR WATCHING !!</div></center>
      
    </div>
    
  </div>
   
</div>

<div class="section" data-theme="halloween"></div>
</template>

<script setup>
import axios from 'axios'
import {Ref} from 'vue';
</script>

<style scoped>
.section {
  height: 100vh;
}
</style> -->


<!-- <template>

    <table class="table">
  <thead>
    <tr>
      <td>ID</td>
      <td>Product name</td>
      <td>Product price</td>
    </tr>
  </thead>
  <tbody>
    <tr class="hover" v-for="(product, index) in products" :key="index">
  <td>{{index + 1}}</td>
  <td>{{ product.name }}</td>
  <td>{{ product.price }}</td>
</tr>
  </tbody>
</table> -->


<!-- {{ product.name }} -->

<!-- </template>

<script setup>
import axios from 'axios'
import {ref, onMounted} from 'vue';
let products = ref()
onMounted(async()=>{
  products.value = await getAllProduct();
  console.log(products);
})

const getAllProduct = async () => {
  let data =[];
  data = await axios.get('http://localhost:5000/getallproduct').then((response)=>{
    return  response.data;
  });
  return data;
}
</script>

<style scoped>

</style>  -->

<template>
  <header>
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li v-for="menu in menuList" :key="menu.name"><RouterLink :to="menu.path" >{{ menu.name }}</RouterLink></li>
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li v-for="menu in menuList" :key="menu.name"><RouterLink :to="menu.path" >{{ menu.name }}</RouterLink></li>
        </ul>
      </div>
      <!-- <div class="navbar-end">
        <a class="btn">Button</a>
      </div> -->
    </div>
  </header>
  <div class="container mx-auto">
    <RouterView :key="router.currentRoute.value.name"/>
  </div>
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router';
import router from './router';
const menuList = [
  { path:"/", name: "Home"},
  { path:"/create", name: "Create"}

]

</script>

<style scoped>

</style>
