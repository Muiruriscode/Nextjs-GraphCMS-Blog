# Blog Application

This is project involves the development of a blog website. The blog enables the owner to create posts, and other users to view and comment on the posts. The backend uses GraphCMS a headless CMS that enable the access of data using GraphQL. The project was guided by javascript Mastery

## Development

The Project utilised the following frameworks and technologies.

- Next.js
- Tailwind CSS
- GraphCMS
- GraphQL

## Features of the Blog

### Post Categories

The posts are grouped into categories where a the relationship is a single post can belong to many categories.
The categories can be accesses at the top right of the blog and also in the categories component.

### Author

The blog allows an author tho create their own content and share it. An author can create as many posts as they want.

### Related and Recent posts

The blog allows a user to access related posts and recent posts. On the firs page the blog will show the Recent posts and on clicking on the blog the posts related to the post will be shown on the posts widget from the latest one to be published.

### Comments

The blog allows users to comment on a post. Once the user has commented on the post the post will be reviewed by the owner Once reviewed, if the owner publishes the comment the comment will appear in the comments section.

## Project

### Components

- [] contains all components of the project
- [] componets accessed though the index.js of components folder for scalability

### pages

- [] contains all the pages that a user can navigate to.
- [] next js provides inbuilt link that enables routing no need for react-router

```js
import Link from 'next/link'
```

### sevices

- [] contains all the graphQl queries and mutations.
- [] Queries interact with graphCMS to provide the data.

### Section

- [] Contains data for the featured posts

### GraphCMS

A Headless CMS that enables one to manage their content.

- [] create a schema: Post schema, Author schema, Categories Schema, Comments schema
- [] create content
- [] Initialize defaults
- [] Authorize access using a token
- [] Give access to CRUD capabilities to data accesses

## Installation

### To install Next.js

```bash
npx create-react-app ./
```

### To use tailwind with Next.js

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -P
```

Add all paths to taiwind.config.js

```js
content: [
"./pages/**/*.{js,ts,jsx,tsx}",
"./components/**/*.{js,ts,jsx,tsx}",
],
theme:
```

Add tailwind directive to global css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Next Js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
