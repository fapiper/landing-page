import MyComponent from '../../../../slices/MarketingSlider';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/MarketingSlider'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"marketing_slider","items":[{"title":"utilize best-of-breed e-business","description":[{"type":"paragraph","text":"Officia pariatur deserunt exercitation quis officia amet elit veniam. Qui voluptate nostrud ullamco excepteur et mollit cillum irure occaecat pariatur excepteur. Ut minim sunt ipsum sunt irure exercitation minim nostrud magna cupidatat sunt minim.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=500&fit=crop"},"video":"deliver open-source e-commerce"},{"title":"deploy next-generation systems","description":[{"type":"paragraph","text":"Elit Lorem ullamco cupidatat esse occaecat mollit labore nisi non excepteur cupidatat proident. Ex aliquip dolore veniam pariatur magna et reprehenderit dolore ullamco dolor magna magna velit elit.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=900&h=500&fit=crop"},"video":"recontextualize plug-and-play systems"},{"title":"enhance efficient methodologies","description":[{"type":"paragraph","text":"Eiusmod id occaecat laboris duis minim ullamco in elit elit consectetur nostrud mollit ipsum est ullamco. Aliquip do occaecat voluptate aliqua consectetur enim do proident ad. Duis incididunt cupidatat tempor.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=900&h=500&fit=crop"},"video":"facilitate web-enabled architectures"}],"primary":{"slice":"deploy robust ROI","autoplaySpeed":8771},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
