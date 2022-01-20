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

Use this section to recap over some of your major learnings while working
through this project. Writing these out and providing code samples of areas you
want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
const proudOfThisFunc = () => {
  console.log("🎉");
};
```

For this project, I made use of Framer Motion's staggering children functionality. By  
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
            Award-winning custom designs and digital branding solutions
          </motion.h1>
            <motion.button
              variants={introVariants}
              whileHover={{
                backgroundColor: "#FFAD9B",
                color: "white",
                scale: 1.1,
              }}
            >
             ...
            </motion.button>
        </motion.article>
        <motion.div
          variants={introVariants}
          className='h-72 t:h-96 t:mb-20 d:mb-0'
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
