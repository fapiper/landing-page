import MyComponent from '../../../../slices/Qualifier';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Qualifier'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"qualifier","items":[{"tag":"iterate rich paradigms"},{"tag":"synergize 24/7 eyeballs"},{"tag":"orchestrate impactful models"},{"tag":"deploy global solutions"},{"tag":"matrix B2B schemas"}],"primary":{"slug":"disintermediate cross-platform e-markets","title":"deliver enterprise functionalities","description":[{"type":"paragraph","text":"Aliqua ullamco dolor ad dolore culpa laboris minim laborum irure dolore aliqua sunt. Esse labore enim aute exercitation Lorem quis tempor ex culpa labore cupidatat ea et qui.","spans":[]}],"tagStepTitle":"repurpose frictionless experiences","contactStepTitle":"repurpose e-business supply-chains","budgetLowerLimit":3047,"budgetUpperLimit":4148,"prevLabel":"scale mission-critical mindshare","nextLabel":"scale killer infomediaries","submitLabel":"incubate one-to-one channels"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
