<template>
  <div class="Third">
    <span>STEP3</span>
    <h4>ご相談内容をご記入ください</h4>
    <p>-ご相談内容-</p>
    <textarea
      class="textarea"
      placeholder="10 lines of textarea"
      rows="10"
      v-model="Consultation"
    ></textarea>
    <div class="button">
      <button><router-link to="/Second">前へ戻る</router-link></button>
      <button><router-link to="/Fourth">次に進む</router-link></button> <br />
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    Consultation: {
      get() {
        return this.$store.getters.getConsultation;
      },
      set(val) {
        this.$store.dispatch("setConsultation", val);
      },
    },
  },
};
</script>
