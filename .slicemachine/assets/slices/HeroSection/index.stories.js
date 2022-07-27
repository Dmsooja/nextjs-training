import MyComponent from '../../../../slices/HeroSection';

export default {
  title: 'slices/HeroSection'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"hero_section","items":[],"primary":{"title":[{"type":"heading1","text":"Maximize clicks-and-mortar convergence","spans":[]}],"description":[{"type":"paragraph","text":"Ea est ut pariatur laboris laborum aliquip qui Lorem dolor amet do non reprehenderit voluptate. Nisi Lorem pariatur in anim occaecat occaecat dolor incididunt proident.","spans":[]}],"primaryCta":{"link_type":"Web","url":"http://google.com"},"primaryCtaText":[{"type":"paragraph","text":"Labore labore nisi sint. Cillum reprehenderit quis non officia.","spans":[]}],"secondaryCta":{"link_type":"Web","url":"https://prismic.io"},"secondaryCtaText":[{"type":"paragraph","text":"Exercitation incididunt sint minim. Consequat irure ea Lorem.","spans":[]}],"primaryImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=900&h=500&fit=crop"}},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _HeroSectionNoCta = () => <MyComponent slice={{"variation":"heroSectionNoCta","name":"HeroSection - no CTA","slice_type":"hero_section","items":[],"primary":{"title":[{"type":"heading1","text":"Target extensible action-items","spans":[]}],"description":[{"type":"paragraph","text":"Dolor enim eu eu ullamco eu. Nostrud sunt incididunt officia in velit aliquip laboris qui eiusmod qui Lorem culpa sunt cupidatat.","spans":[]}],"primaryImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=900&h=500&fit=crop"}},"id":"_HeroSectionNoCta"}} />
_HeroSectionNoCta.storyName = 'HeroSection - no CTA'

export const _Twoimages = () => <MyComponent slice={{"variation":"twoimages","name":"twoimages","slice_type":"hero_section","items":[],"primary":{"title":[{"type":"heading1","text":"Orchestrate innovative channels","spans":[]}],"description":[{"type":"paragraph","text":"Dolore enim labore ipsum duis fugiat non excepteur aliqua nostrud commodo amet. Aliqua laborum laborum pariatur Lorem aliquip in tempor dolor ullamco.","spans":[]}],"primaryCta":{"link_type":"Web","url":"https://prismic.io"},"primaryCtaText":[{"type":"paragraph","text":"Ut ipsum incididunt esse proident ut velit velit quis excepteur eiusmod magna occaecat voluptate exercitation deserunt.","spans":[]}],"secondaryCta":{"link_type":"Web","url":"https://prismic.io"},"secondaryCtaText":[{"type":"paragraph","text":"Enim irure est velit sit laboris.","spans":[]}],"primaryImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560762484-813fc97650a0?w=900&h=500&fit=crop"},"secondaryImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=900&h=500&fit=crop"}},"id":"_Twoimages"}} />
_Twoimages.storyName = 'twoimages'
