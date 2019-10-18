<template>
  <v-container>
    <v-card>
      <v-card-title>A1 -> R1C1</v-card-title>
      <v-card-text>
        <span>A1:</span>
        <v-text-field v-model="a1" label="ABC..." data-a1></v-text-field>
        <span class="toR1C1">R1C1 : {{ toR1C1 }}</span>
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-title>R1C1 -> A1</v-card-title>
      <v-card-text>
        <span>R1C1:</span>
        <v-text-field v-model="r1c1" label="1234..."></v-text-field>
        <span class="toA1">A1 : {{ toA1 }}</span>
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-title>Convert Table</v-card-title>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">A1</th>
              <th class="text-left">R1C1</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in lists" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </v-container>
</template>

<script>
const baseNumber = 26
const baseCharCode = 64

export default {
  data () {
    return {
      a1: '',
      r1c1: '',
      lists: []
    }
  },
  mounted () {
    for (let i = 1; i < 100; i++) {
      this.lists.push({
        name: this.convertR1C1toA1(i),
        calories: i
      })
    }
  },
  computed: {
    toR1C1 () {
      let result = 0
      Array.from(this.a1).forEach(element => {
        result += element.charCodeAt(0) - baseCharCode
        result *= baseNumber
      })
      return result / baseNumber
    },
    toA1 () {
      return this.convertR1C1toA1(this.r1c1)
    }
  },
  methods: {
    convertR1C1toA1 (r1c1) {
      let result = []
      let work = r1c1
      do {
        let remainder = work % baseNumber
        let isDDD = remainder === 0
        result.unshift(String.fromCharCode((isDDD ? baseNumber : remainder) + baseCharCode))
        work = Math.floor(work / baseNumber)
        if (isDDD) work -= 1
      } while (work > 0)
      return result.join('')
    }
  }
};
</script>
