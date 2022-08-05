import MyComponent from '../../../../slices/MenuLink';

export default {
  title: 'slices/MenuLink'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"menu_link","items":[{"link":{"link_type":"Web","url":"http://google.com"},"linkLabel":[{"type":"paragraph","text":"Culpa veniam pariatur reprehenderit. Amet duis labore excepteur adipisicing nulla magna veniam aliqua dolor mollit irure sint commodo.","spans":[]}]},{"link":{"link_type":"Web","url":"https://slicemachine.dev"},"linkLabel":[{"type":"paragraph","text":"Aute deserunt irure ipsum.","spans":[]}]}],"primary":{"linkLabel":[{"type":"paragraph","text":"Id fugiat nisi eiusmod fugiat proident dolor ut ea velit incididunt incididunt anim proident exercitation reprehenderit.","spans":[]}],"link":{"link_type":"Web","url":"http://google.com"}},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _DropdownMenuLink = () => <MyComponent slice={{"variation":"dropdownMenuLink","name":"Dropdown Menu Link","slice_type":"menu_link","items":[{"dropdownLevel2Label":[{"type":"paragraph","text":"Qui ea veniam laboris adipisicing est minim ea adipisicing.","spans":[]}],"dropdownLevel2Link":{"link_type":"Web","url":"https://slicemachine.dev"}},{"dropdownLevel2Label":[{"type":"paragraph","text":"Sit enim adipisicing officia minim sint reprehenderit deserunt tempor aliqua aliquip culpa aliquip nulla.","spans":[]}],"dropdownLevel2Link":{"link_type":"Web","url":"http://google.com"}}],"primary":{"dropdownLevel1Label":[{"type":"paragraph","text":"Sint Lorem labore reprehenderit do.","spans":[]}],"dropdownLevel1Link":{"link_type":"Web","url":"https://prismic.io"}},"id":"_DropdownMenuLink"}} />
_DropdownMenuLink.storyName = 'Dropdown Menu Link'
