export const menuGraphQuery =
`
{
menu{
dropdownMenu{
menuItems{
...onmenu-dropdown-links{
...menu-dropdown-linksFields
}
}
}
}
}
`

export const blogArticlesGraphQuery = `
{
homepage {
slices {
...on featured_blog_posts {
variation {
...on featuredArticlesCr {
items {
articleLink {
...on blog-article {
...blog-articleFields
}
}
}
}
}
}
}
}
}
`