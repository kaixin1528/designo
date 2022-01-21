# Designo Agency Website

## Table of contents

- [Overview](#overview)
  - [Getting Started](#getting-started)
  - [Project Summary](#project-summary)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### Getting Started 

First, install all the necessary dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### Project Summary

Designo is an imaginative design agency that is experienced in creating responsive websites, app, and graphic designs. 
As a multipage responsive website, it has a page designated for each design category where one can browse through the 
previews for the past projects designed by Designo. It also has a About, Location, and Contact page for users to learn 
more about the agency.

### Links

- Live Site URL: [https://kaixin-designo.netlify.app](https://kaixin-designo.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) 
- [Tailwind CSS](https://tailwindcss.com/) 

### What I learned

I was able to blend together the background image with the background color, in this case dark grey with 75% opacity. This allows the background color to 
overlap nicely with the background image while allowing the main text to be legible.

```html
<motion.li
  className={`bg-blend-multiply transition duration-300 ease-in-out transform hover:scale-105 bg-dark-grey hover:bg-peach bg-opacity-75 bg-center bg-cover bg-m-graphic-design t:bg-t-graphic-design d:bg-d-graphic-design rounded-xl`}
>
```

One of the biggest components of this project is to make well-responsive layouts for different screen sizes. As shown in the code snippet below, 
the background image component is placed atop for mobile and tablet, but is then switched to the right for desktop. The location component for 
desktop is stretched to 2 columns, and the contact info component is separated into 2 columns for tablet and above. To adjust for this responsiveness,
this whole component is switched to 3 columns to make more room for the location description for the desktop version.

```html
<article className='grid d:grid-cols-3 t:gap-8 t:mx-10 d:mx-40'>
  <div className='t:rounded-lg d:order-last bg-no-repeat bg-center bg-cover bg-t-canada d:bg-d-canada h-96 w-full'></div>
  <article className='grid t:rounded-lg d:col-span-2 p-20 d:py-28 gap-6 text-center bg-very-light-peach bg-no-repeat d:bg-[center_top_2rem] bg-cover bg-locations'>
    ...
    <section className='grid t:grid-cols-2 t:text-left text-sm gap-6'>
      ...
    </section>
  </article>
</article>
```

I made use of Framer Motion's staggering children functionality. By creating a variant for the intro component and applying 
the variant on subsequent descendants, I was able to make the components appear in sequence with a certain delay. 
effect 
```html
  <motion.section
    variants={introVariants}
    initial='hidden'
    animate='visible'
  >
    <motion.article
      variants={introVariants}
    >
      <motion.h1
        variants={introVariants}
      >
       ...
      </motion.h1>
      <motion.button
        variants={introVariants}
      >
       ...
      </motion.button>
    </motion.article>
    <motion.div
      variants={introVariants}
    >
      ...
    </motion.div>
  </motion.section>
```

### Continued development

Use this section to outline areas that you want to continue focusing on in
future projects. These could be concepts you're still not completely comfortable
with or techniques you found useful that you want to refine and perfect.



**Note: Delete this note and the content within this section and replace with
your own plans for continued development.**

## Author

- Portfolio Website - [Kaixin Huang](https://kaixin-portfolio.netlify.app)
