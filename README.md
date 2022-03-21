# Portfolio

This is my portfolio website written in GatsbyJS, with TailwindCSS.

It is a Single Page Application website with a blog and contact us.

## Pages

1. ### Home

   - Home

     - This section contains the landing of the website.

   - About

     - This section contains a short write up of myself.

   - Works

     - This section contains a few of my featured works done previously.

2. ### Blog

   - This page contains all the blog posts that I have posted.

3. ### Contact

   - This page contains a form to contact me.

## Specifications

1. ### Typography

   - Brand

     - `font-dm-mono`, `text-slate-900`, `font-bold`, `text-3xl`

   - Headings

     - `font-poppins`, `text-slate-900`, `font-bold`
     - H1
       - `text-3xl`
     - H2
       - `text-3xl`

   - Body

     - `font-poppins`, `text-slate-700`, `text-base`

2. ### Components

   - NavBar

     - `font-poppins`, `text-slate-900`, `text-base`, `hover:text-sky-500`

```javascript
    slate: {
        css: {
        '--tw-prose-body': colors.slate[700],
        '--tw-prose-headings': colors.slate[900],
        '--tw-prose-lead': colors.slate[600],
        '--tw-prose-links': colors.slate[900],
        '--tw-prose-bold': colors.slate[900],
        '--tw-prose-counters': colors.slate[500],
        '--tw-prose-bullets': colors.slate[300],
        '--tw-prose-hr': colors.slate[200],
        '--tw-prose-quotes': colors.slate[900],
        '--tw-prose-quote-borders': colors.slate[200],
        '--tw-prose-captions': colors.slate[500],
        '--tw-prose-code': colors.slate[900],
        '--tw-prose-pre-code': colors.slate[200],
        '--tw-prose-pre-bg': colors.slate[800],
        '--tw-prose-th-borders': colors.slate[300],
        '--tw-prose-td-borders': colors.slate[200],
        },
    },
```

```javascript
{
    purple: "#6366f1",
    blue: "#519df3",
    "light-purple": "#b496fa",
    "light-blue": "#cae2fe",
}
```
