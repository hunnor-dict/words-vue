<template>
  <div class="card">
    <div class="card-header">Feladat</div>
    <div class="card-body">
      <form @submit.prevent="onSubmit">
        <div class="form-group row">
          <label for="inf" class="col-sm-2 control-label">Infinitiv</label>
          <div class="col-sm-10">
            <input autocomplete="off" class="form-control" name="inf" type="text" v-model="forms[0]" :disabled="formIndex == 0"/>
          </div>
        </div>
        <div class="form-group row">
          <label for="pres" class="col-sm-2 control-label">Presens</label>
          <div class="col-sm-10">
            <input autocomplete="off" class="form-control" name="pres" type="text" v-model="forms[1]" :disabled="formIndex == 1"/>
          </div>
        </div>
        <div class="form-group row">
          <label for="pret" class="col-sm-2 control-label">Preteritum</label>
          <div class="col-sm-10">
            <input autocomplete="off" class="form-control" name="pret" type="text" v-model="forms[2]" :disabled="formIndex == 2"/>
          </div>
        </div>
        <div class="form-group row">
          <label for="perf" class="col-sm-2 control-label">Perfektum</label>
          <div class="col-sm-10">
            <input autocomplete="off" class="form-control" name="perf" type="text" v-model="forms[3]" :disabled="formIndex == 3"/>
          </div>
        </div>
        <div class="form-group row">
          <div class="offset-sm-2 col-sm-10">
            <input class="btn btn-primary" type="submit" value="Mehet"/>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Question',
  emits: ["answer-submitted"],
  data() {
    this.forms = ["", "", "", ""]
    this.forms[this.formIndex] = this.form
    return {
      forms: this.forms
    }
  },
  props: {
    form: String,
    formIndex: Number
  },
  methods: {
    onSubmit() {
      this.$emit('answer-submitted', this.forms)
    }
  },
  watch: {
    form() {
      this.forms = ["", "", "", ""]
      this.forms[this.formIndex] = this.form
    }
  }
}

</script>

<style scoped>

label {
  font-weight: bold;
  text-align: right;
}

.card-header {
  font-weight: bold;
}

</style>
