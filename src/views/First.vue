<template>
  <div class="about">
        <span>STEP1</span>
        <h4>お客様の情報を入力してください</h4>
    <label for="sex">-性別-</label><br>
    <input type="radio" name="gender" value="male">男性
    <input type="radio" name="gender" value="female">女性<br>
    
    <label for="birthday">生年月日:
      <input
        type="date"
        id="birthday"
        v-bind:value="birthday"
        v-on:input="$emit('update:birthday', $event.target.value)">
    </label><br>

<button><router-link to="/Second">次に進む</router-link></button> 

</div>
</template>
 <script>

</script>