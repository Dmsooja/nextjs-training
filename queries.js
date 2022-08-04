export const menuGraphQuery =
    `
{
    menu{
        ...on menuLinks{
            
        }
    }
}
`


export const blogArticlesGraphQuery = `
{
homepage {
slices {
...on hero_section{
variation {
...on default {
items {
...itemsFields
}
primary {
...primaryFields
}
}
}
}
...on features{
variation {
...on default {
items {
...itemsFields
}
primary {
...primaryFields
}
}
}
}
...on cta{
variation {
...on default {
items {
...itemsFields
}
primary {
...primaryFields
}
}
}
}
...on faq{
variation {
...on default {
items {
...itemsFields
}
primary {
...primaryFields
}
}
}
}
...on scrolling_cards{
variation {
...on default {
items {
...itemsFields
}
primary {
...primaryFields
}
}
}
}
...on reassurance{
variation {
...on default {
items {
...itemsFields
}
primary {
...primaryFields
}
}
}
}
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