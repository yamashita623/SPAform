<template>
  <div class="First">
        <span>STEP1</span>
        <h4>お客様の情報を入力してください</h4>
    <label for="gender">-性別-</label>
    <br>
    <input type="radio" name="gender" value="男性" v-model="gender">
    <label for="男性">男性</label>
    <br>
    <input type="radio" name="gender" value="女性" v-model="gender">
    <label for="女性">女性</label>
    <br>
    
    <label for="birthday">生年月日:
      <input
        type="date"
        id="birthday"
        v-model="birthday"
      >
    </label><br>

<button><router-link to="/Second">次に進む</router-link></button> 

</div>
</template>
 <script>
 export default {
     computed: {
       gender:{
         get(){
           return this.$store.getters.getGender;
         },
         set(val){
             this.$store.dispatch('setGender',val);
           }},
        birthday:{
          get(){
            return this.$store.getters.getBirthday;
          },
          set(val){
            this.$store.dispatch('setBirthday',val);
          }
        }   
     }};
 

</script>