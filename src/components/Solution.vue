<template>
  <div class="card mb-4" id="solution">
    <div class="card-header">Megoldás</div>
    <div class="card-body">
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>Válasz</th>
            <th>Megoldás</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="label">Infinitiv</td>
            <td class="answer" :class="getColor(0)">{{actualAnswer[0] || "&empty;"}}</td>
            <td>{{expectedAnswer[0].join(", ")}}</td>
          </tr>
          <tr>
            <td class="label">Presens</td>
            <td class="answer" :class="getColor(1)">{{actualAnswer[1] || "&empty;"}}</td>
            <td>{{expectedAnswer[1].join(", ")}}</td>
          </tr>
          <tr>
            <td class="label">Preteritum</td>
            <td class="answer" :class="getColor(2)">{{actualAnswer[2] || "&empty;"}}</td>
            <td>{{expectedAnswer[2].join(", ")}}</td>
          </tr>
          <tr>
            <td class="label">Perfektum</td>
            <td class="answer" :class="getColor(3)">{{actualAnswer[3] || "&empty;"}}</td>
            <td>{{expectedAnswer[3].join(", ")}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Solution',
  props: {
    expectedAnswer: Object,
    actualAnswer: Object,
    fixedIndex: Number
  },
  methods: {
    getColor(rowIndex) {
      if (rowIndex == this.fixedIndex) {
        return ""
      } else if (this.expectedAnswer[rowIndex].includes(this.actualAnswer[rowIndex])) {
        return "green"
      } else {
        return "red"
      }
    }
  }
}

</script>

<style scoped>

.card-header {
  font-weight: bold;
}

td.label {
  font-weight: bold;
}

td.answer {
  font-weight: bold;
}

.green {
  color: green;
}

.red {
  color: red;
}

</style>
