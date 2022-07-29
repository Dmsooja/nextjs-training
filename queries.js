export const menuGraphQuery =
`{
menu{
dropdownMenu{
menuItems{
...onmenu-dropdown-links{
title
}
}
}
}
}`