import MyComponent from '../../../../slices/FeatureSlider';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/FeatureSlider'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"feature_slider","items":[{"title":"integrate transparent systems","subtitle":[{"type":"paragraph","text":"Sunt labore dolore occaecat fugiat ipsum minim nostrud consequat mollit.","spans":[]}],"description":[{"type":"paragraph","text":"Esse elit aute officia exercitation commodo id voluptate deserunt nostrud ullamco exercitation. Ad labore adipisicing reprehenderit veniam cillum.","spans":[]}],"iconFirst":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=900&h=500&fit=crop"},"textFirst":"embrace out-of-the-box schemas","iconSecond":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=900&h=500&fit=crop"},"textSecond":"architect virtual interfaces","iconThird":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=500&fit=crop"},"textThird":"orchestrate granular e-markets","iconFourth":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=500&fit=crop"},"textFourth":"empower best-of-breed solutions","iconFifth":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=900&h=500&fit=crop"},"textFifth":"strategize transparent e-tailers"},{"title":"drive robust functionalities","subtitle":[{"type":"paragraph","text":"Ipsum duis deserunt dolore excepteur deserunt. Cillum anim nisi eiusmod esse reprehenderit consequat dolor occaecat eiusmod exercitation veniam tempor velit occaecat.","spans":[]}],"description":[{"type":"paragraph","text":"Non officia cupidatat laboris cillum proident ut exercitation mollit elit. Laboris ipsum tempor minim consequat adipisicing non aliquip velit commodo proident sint tempor proident. Non minim nulla ex id eu irure velit cupidatat in voluptate exercitation id minim.","spans":[]}],"iconFirst":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=500&fit=crop"},"textFirst":"integrate e-business eyeballs","iconSecond":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=900&h=500&fit=crop"},"textSecond":"transition next-generation systems","iconThird":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?w=900&h=500&fit=crop"},"textThird":"maximize e-business applications","iconFourth":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=900&h=500&fit=crop"},"textFourth":"incentivize clicks-and-mortar mindshare","iconFifth":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547082299-de196ea013d6?w=900&h=500&fit=crop"},"textFifth":"visualize end-to-end e-commerce"}],"primary":{"slug":"engineer wireless models","autoplaySpeed":6627,"video":"orchestrate best-of-breed paradigms"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
