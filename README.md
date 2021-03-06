[![Netlify Status](https://api.netlify.com/api/v1/badges/69322c88-9b45-4bb6-90e2-d6e601fb92f9/deploy-status)](https://app.netlify.com/sites/vigilant-sammet-370319/deploys)

<h1 align="center">
  Gatsby's CV starter
</h1>

Create your resume in a few minutes with this totally responsive starter using React. Show off your skills, work experiences and activities in github.

### Sections

- About
- Skills
- Job experiences
- Github repositories
- Portifolio

### Features

- Responsive Design, optimized for Mobile devices
- Google Analytics
- SEO
- PWA
- Dark mode
- Animations

## 📷 Preview

### Mobile

![Preview mobile](./preview-mobile.gif)

### Desktop

![Preview desktop](./preview-desktop.gif)

## Configuration

Update the configuration file with your data. The configuration file is in ```data/siteConfig.js```

:warning: NOTE: Please change googleAnalyticsId to your ID.  See https://analytics.google.com for details.

> **Skills** is a set of your personal skills and their respective levels ranging from > 0 to 100.
> **jobs** is a set of your work experiences

```js
  module.exports = {
    siteTitle: 'Hi! I\'m David Nguyen!',
    siteDescription: `Create your online curriculum in just a few minutes with this starter`,
    keyWords: ['gatsbyjs', 'react', 'curriculum'],
    authorName: 'David Nguyen',
    twitterUsername: 'vietroadie',
    githubUsername: 'DavidTNguyen',
    authorAvatar: '/images/david.jpg',
    authorDescription: `Traveler. Investor. Woodworker. Biker. Videographer. Chef.`,
    skills: [
      {
        name: 'HTML',
        level: 70
      },
      {
        name: 'CSS',
        level: 60
      },
      {
        name: 'Javascript',
        level: 50
      },
      {
        name: 'NodeJs',
        level: 40
      },
      {
        name: 'React',
        level: 60
      },
      {
        name: 'Git',
        level: 70
      },
      /* more skills here */
    ],
    jobs: [
      /* more jobs here */
      {
        company: "Gympass",
        begin: {
          month: 'sep',
          year: '2019'
        },
        duration: null,
        occupation: "Frontend developer",
        description: "I am part of the Corporate team, responsible for the development and maintenance of the employee management platform, giving more and more autonomy to partner companies."
      },  {
        company: "Lendico",
        begin: {
          month: 'apr',
          year: '2018'
        },
        duration: null,
        occupation: "Frontend developer",
        description: "I integrate the Frontend team responsible for developing and maintaining the online lending platform."  
      }, {
        company: "Anapro",
        begin: {
          month: 'dec',
          year: '2016'
        },
        duration: '1 yr e 5 mos',
        occupation: "Fullstack developer",
        description: "Development and maintenance, corrective and preventive, of web applications for the real estate market."
      }, {
        company: "Anapro",
        begin: {
          month: 'set',
          year: '2012'
        },
        duration: '4 yrs e 3 mos',
        occupation: "Support Technician",
        description: "Responsible for the implementation and parameterization of the system, training and customer support. Acting also in person in real estate launches guaranteeing the success and good use of the tool."
      },
    ],
    portifolio: [
      {
        image: "/images/gatsby-starter-cv.png",
        description: "Gatsby starter CV template",
        url: "https://www.gatsbyjs.org/starters/santosfrancisco/gatsby-starter-cv/"
      },
      {
        image: "/images/awesome-grid.png",
        description: "Responsive grid for ReactJS",
        url: "https://github.com/santosfrancisco/react-awesome-styled-grid"
      },
      /* more portifolio items here */
    ],
    social: {
      twitter: "https://twitter.com/_franciscodf",
      linkedin: "https://www.linkedin.com/in/santos-francisco",
      github: "https://github.com/santosfrancisco",
      email: "yoshi.df@gmail.com"
    },
    siteUrl: 'https://santosfrancisco.github.io/gatsbystarter-cv',
    pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
    siteCover: '/images/cover.jpeg',
    googleAnalyticsId: 'UA-000000000-1',
    background_color: '#ffffff',
    theme_color: '#25303B',
    fontColor: "#000000cc",
    enableDarkmode: true, // If true, enables dark mode switch
    display: 'minimal-ui',
    icon: 'src/assets/gatsby-icon.png',
    headerLinks: [
      {
        label: 'Home',
        url: '/',
      },
      {
        label: 'Portifolio',
        url: '/portifolio',
      }
    ]
  }

```
