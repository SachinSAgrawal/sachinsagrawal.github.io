const BLOGS_DATA = [
  {
    key: 'update',
    title: 'Site Update',
    date: 'February 2026',
    paragraphs: [
      'As you might have noticed, this website has undergone a significant transformation. While I have kept the same color scheme and underlying styling, I have touched basically every page. The code is all still just HTML, CSS, and JavaScript, but it has been significantly refactored. I have transitioned to a more modular approach, such as separating the header and footer components into their own files for reuse. This makes it easier to both maintain the code and add new pages. The content within the header has also been swapped around with some of the content on the home page. Additionally, I have finally published my blogs, which I had been meaning to do for a while as they were just sitting as drafts. Going forward, I plan to keep the posts relatively up-to-date, but no promises. Lastly, I wanted to make you aware of the proper legal page for this site that is accessible through the link in the footer. I hope you enjoy the new look and feel of the site, and although the rating on the home page may be a joke, I welcome any feedback, so please do contact me.',
      'I would also like to take this opportunity to plug some of my other projects that I\'ve worked on that don\'t have their own dedicated blog posts. You can find links to them on my GitHub page, and they include two games made with Ruby, some Arduino projects, a few fun Python scripts, and a custom Device Details plugin for YOURLS.'
    ],
    link: {
      url: '',
      displayText: '',
      icon: ''
    }
  },
  {
    key: 'kwizlet',
    title: 'Kwizlet',
    date: 'January 2026',
    paragraphs: [
      'I grew up using Quizlet to study vocabulary and terms for almost all of my classes in middle school and high school. There was nothing more fun than a quick but competitive game of Quizlet Live. However, as the years progress, I got more and more annoyed as they started requiring a paid subscription for some features, placed ads everywhere, and generally made the experience worse by incorporating AI.',
      'I needed to memorize some vocabulary for a quiz, so rather than actually do that with some paper flashcards or use Quizlet itself, I spent much longer making my own version of Quizlet from scratch. I\'ve tried to mimic most of the core functionality as best as possible, including the Gravity game that apparently no longer exists. My Kwizlet has four modes: the aforementioned Gravity, simple flashcards, Learn and Match. I am unlikely to add any new features in the future, but may fix bugs, so please let me know if you find any. You can upload your own CSV file, but I\'ve also included a generator for making sets. Have fun, and don\'t get me sued!'
    ],
    link: {
      url: 'https://pagedeploy.github.io/kwizlet',
      displayText: 'github.io/kwizlet',
      icon: 'https://github.com/pagedeploy/cdn/blob/main/kwizlet/favicon.png?raw=true'
    }
  },
  {
    key: 'appicon',
    title: 'MacOS App Icon Maker',
    date: 'November 2025',
    paragraphs: [
      'MacOS Tahoe brought dark mode icons for Macs, and while many developers updated their app icons to support it, some did not. This displeased me, as I like visual consistency across my dock. I created a simple command line-based generator to make it easier for myself to create the dark mode app icons, which must be a .icns file and have a certain amount of padding.',
      'While the Icon Composer app makes it easy to incorporate Liquid Glass into the design and position the various elements of the icon, it only allows for the export of a .png file without the correct padding. This program uses ffmpeg to automatically add the required padding, convert the icon into different sizes, and package them all into a single .icns file. You can view the icons I made with this tool using the link below.'
    ],
    link: {
      url: 'https://macosicons.com/#/u/sachinsagrawal',
      displayText: 'macosicons.com/sachinsagrawal',
      icon: 'https://www.svgrepo.com/show/463936/app-store-square.svg'
    }
  },
  {
    key: 'visualqr',
    title: 'Visual QR Codes',
    date: 'October 2025',
    paragraphs: [
      'I was randomly going through old files on my computer when I stumbled upon a visual QR code I had made for another project. I vividly remember making it in Photoshop, going pixel by pixel to manually adjust its opacity. I went through this cumbersome process because the only visual QR code generator I could find online was not free. Although I have no use for this currently, I might in the future. I also went down the rabbit hole making this website so other people, not just myself, can generate these visual QR codes automatically, and more importantly, for free.',
      'I made this generator quite customizable in terms of formatting the QR code, which is something that I wish I could have done in Photoshop. I have also provided instructions and a few examples on the website, which is linked below.'
    ],
    link: {
      url: 'https://pagedeploy.github.io/visualqrcode',
      displayText: 'github.io/visualqrcode',
      icon: 'https://github.com/pagedeploy/cdn/blob/main/visualqr/qrcode.png?raw=true'
    }
  },
  {
    key: 'extensions',
    title: 'Chrome Extensions',
    date: 'July 2025',
    paragraphs: [
      'YouTube sadly does not provide an easy way to add Shorts to the watch later playlist. Regular videos have a little button that pops up upon hovering over the video thumbnail, but the Shorts on a channel page do not. The extension listed first adds in this missing button and is meant to make it look as native as possible.',
      'I was tired of being rickrolled, so I installed an extension by Daniel Norhøj to block them. However, it was not quite done, so I undertook the task of finishing it myself, and the result is the extension listed second. I also added some extra features such as an updated design, working database, and better popup.',
      'Both extensions are unfortunately not available on the Chrome Web Store but can be compiled directly using the links provided.'
    ],
    link: [
      {
        url: 'https://github.com/SachinSAgrawal/Shorts-Watch-Later',
        displayText: 'github.com/shortswatchlater',
        icon: 'https://github.com/SachinSAgrawal/Shorts-Watch-Later/raw/main/icons/128.png?raw=true'
      },
      {
        url: 'https://github.com/SachinSAgrawal/Anti-Rickroll',
        displayText: 'github.com/antirickroll',
        icon: 'https://github.com/SachinSAgrawal/Anti-Rickroll/blob/main/icons/icon128.png?raw=true'
      }]
  },
  {
    key: '3dprinting',
    title: '3D Printing',
    date: 'January 2025',
    paragraphs: [
      'My high school had a makerspace, and although it wasn\'t super big or fancy, I spent almost all of my free periods using the 3D printers in there. The following summer, I got my own 3D printer which I had running practically all the time, to the dismay of everyone else in the house. At first, I printed things other people designed, but after a while, I decided to design my own objects. I started with Tinkercad making a Continuity Camera iPhone Mount, then moved on to Blender and Fusion 360 to make things like a custom USB/SD Holder as I got more experienced. Although I wouldn\'t consider myself an expert at CAD, it was very helpful when it came to building Arduino vehicles for my robotics and Science Olympiad teams.',
      'The specific printer I have is a Prusa i3 MK3S+ with the MMU3 upgrade. It has never disappointed me in terms of print quality or ease of use, but does not have a camera. I had a spare one lying around so I designed and printed one myself. You can find the file for that, along with my other designs, on Printables.'
    ],
    link: {
      url: 'https://www.printables.com/@sachinsagrawal',
      displayText: 'printables.com/@sachinsagrawal',
      icon: 'https://www.svgrepo.com/show/53747/3d-printer.svg'
    }
  },
  {
    key: 'calculator',
    title: 'TI-84 Calculator Programs',
    date: 'November 2024',
    paragraphs: [
      'I got my TI-84 Plus CE in middle school, and didn\'t even realize that it could run programs until my cousin told me about how he used to play games in class on it. I immediately filled mine up with classics such as 2048, Flappy Bird, and Tetris, but didn\'t think much about how they worked, much less how to make my own, until high school.',
      'When I did have the realization that I could make my own programs, I figured I would start small, creating ones that I could use in math class. I focused mostly on improving functionality and speeding up calculations in single- and multi-variable calculus. I also made some for chemistry and others for fun, including one I used to rickroll my math teacher (yes, I\'m being serious).',
      'The programs I made slowly got more complicated as I learned more about programming capabilities of the calculator such as menus. I can neither confirm nor deny whether or not I got calculators banned during tests in some of my classes because of programs you can find listed on the website below.',
    ],
    link: {
      url: 'https://pagedeploy.github.io/ti84calcdev',
      displayText: 'github.io/ti84calcdev',
      icon: 'https://www.svgrepo.com/show/474754/calculator.svg'
    }
  },
  {
    key: 'arapps',
    title: 'Augmented Reality',
    date: 'September 2024',
    paragraphs: [
      'I was tasked with creating an augmented reality (AR) iOS application for an internship. In order to first learn AR, I looked at previous projects and tutorials to understand the basics of ARKit, such as how to set up a scene, detect planes, and spawn objects. AR Stack by Xander Xu was perfect for this, so I took it and immediately started improving upon it, including modernizing the UI and making the start of the game more intuitive. You can check out my updated version using the first link below.',
      'I\'m glad that I took the time to learn the fundamentals of AR because it allowed me to incorporate quite advanced features into the app for my internship. One of those capabilities is pose estimation, which uses the LiDAR sensor on Pro iPhones to detect the location and orientation of an object in 3D space, using eigendecomposition to find its major axis. It is quite complicated, and that is why I created a separate app accessible through the second link to test and refine the algorithm before integrating it into the main app.',
      'The last app that is linked below was actually made for my final project in multivariable calculus. It allows you to enter a vector field and then visualize it in 3D space. Getting all the math working was more of a challenge than I would have first imagined, especially since the base of the app I could basically just copy-paste from the one for my internship, but it was not long before I got this one working.'
    ],
    link: [
      {
        url: 'https://github.com/SachinSAgrawal/AR-Stack',
        displayText: 'github.com/arstack',
        icon: 'https://github.com/SachinSAgrawal/AR-Stack/blob/main/ARStack/Assets.xcassets/AppIcon.appiconset/icon.png?raw=true'
      },
      {
        url: 'https://github.com/SachinSAgrawal/Pose-Estimation',
        displayText: 'github.com/poseestimation',
        icon: 'https://developer.apple.com/assets/elements/icons/arkit/arkit-128x128_2x.png'
      },
      {
        url: 'https://github.com/SachinSAgrawal/AR-Vector-Fields',
        displayText: 'github.com/arvectorfields',
        icon: 'https://github.com/SachinSAgrawal/AR-Vector-Fields/blob/main/VectorFields/Assets.xcassets/AppIcon.appiconset/iconlight.png?raw=true'
      }
    ]
  },
  {
    key: 'youtube',
    title: 'YouTube & Minecraft',
    date: 'May 2024',
    paragraphs: [
      'I\'ve always wanted to make YouTube videos, and I had multiple ideas for my channel, but I eventually decided to settle with the popular block-based videogame Minecraft since I like to play it in my free time. I\'ve actually never beaten the game before because I spend most of my time in creative mode building and doing redstone. I am also a member of a few SMP servers.',
      'When it came to choosing my username, I went with Scinovus Crafted. "Scinovus" is completely made up, which may explain why people have a hard time pronouncing it, and it is meant to sound techy. As for "Crafted," that is just the second half of the game\'s name itself.',
      'My YouTube channel is nearing 80,000 views in total, with a majority of them coming from short form content. Some of my most popular videos are in the Minecraft Logic series, where I point out flaws in game mechanics. I just posted my last video on season one of Artisan\'s SMP, and I plan to post about season two once it starts up.',
      'I also have a second channel for non-Minecraft content. I haven\'t posted much there yet, but may revive it in the next year or so. Content consists of airplanes, animals, and technology. Follow the link below for more information about my channels.',
    ],
    link: {
      url: 'https://pagedeploy.github.io/scinovuscrafted',
      displayText: 'github.io/scinovuscrafted',
      icon: 'https://www.svgrepo.com/show/452138/youtube.svg'
    }
  },
  {
    key: 'sketchy',
    title: 'Sketchy Website Mac',
    date: 'October 2023',
    paragraphs: [
      'Years ago, me and my friends were bored in school, so we decided to Google "sketchy site". The first result was sketchywebsite.net, and we clicked on it curiously. Whether or not that was wise is up for debate, but at the time we didn\'t care. As we were watching the Windows 7 error messages pop up on screen, one of my friends jokingly said that someone should make it with MacOS error messages instead. That comment stuck with me, and I recently acted upon it.',
      'I now present sketchywebsite.net designed for Macs. This version uses the same underlying code, but has a lot of added functionality. Double clicking opens up a shortcuts menu that allows you to see and use all the features I implemented, including the option to rotate between all the latest default MacOS background, which makes the site more convincing if you use it to prank others. It works best in full screen, and you can check it out using the link below.'
    ],
    link: {
      url: 'https://pagedeploy.github.io/sketchywebsitemac',
      displayText: 'github.io/sketchywebsitemac',
      icon: 'https://github.com/pagedeploy/cdn/blob/main/sketchy/src/favicon.png?raw=true'
    }
  },
  {
    key: 'discord',
    title: "Discord Bots",
    date: 'July 2023',
    paragraphs: [
      'Two things occurred at the perfect time to cause me to get into Discord bot development. First, I was spending a lot of time on Discord during the pandemic in order to communicate with friends, and second, rickrolling made a resurgence in popularity as everyone was online more. I decided to capitalize on the opportunity and created my first bot, Rickroller, which mainly gives you a number of different ways to rickroll people. The bot soon gained popularity and was able to be verified quickly.',
      'I created my second bot, Games Bot, which allows users to play a variety of games directly in Discord, after seeing a friend\'s bot that had a few similar commands. It too got quickly verified.',
      'Both bots were hosted with Heroku, but they recently discontinued their free tier, so the bots are currently offline. Additionally, even though both bots are verified, I need to apply for some more permissions so they can join more than 100 servers. It is unlikely I will bring them back online anytime in the near future, but you can learn about them using the link below.'
    ],
    link: {
      url: 'https://pagedeploy.github.io/scisdiscordbots',
      displayText: 'github.io/scisdiscordbots',
      icon: 'https://www.svgrepo.com/show/312968/robot.svg'
    }
  },
  {
    key: 'fitbit',
    title: 'Fitbit Development',
    date: 'August 2022',
    paragraphs: [
      'I got the original Fitbit Versa smartwatch a little less than a year after it was released, and while there was a good amount of apps and clockfaces for it at the time, I could not find any that were exactly what I wanted, so I started to develop my own. I was unfortunately too inexperienced at that time to complete what I had started, so I got discouraged and stopped working on it for a while. However, once the pandemic hit, I suddenly had a lot of free time, and that\'s when I decided I would try to pick up where I left off.',  
      'I\'m glad I did, because it helped me improve my programming skills a lot and over the next year or so, I created several apps, games, and clockfaces. Some of my creations include a recreation of the Chrome Dino Game and a scheduler app. However, there was one idea that kept nagging at me: recreating the Modular and Infograph clockfaces from the Apple Watch. I eventually made them, and Modular is my most popular clockface based on the review count.',
      'Unfortunately my apps are only compatible with the older generation of Versas and I don\'t plan on updating them anymore since I just got an actual Apple Watch. Also, Google bought out Fitbit not long ago and has made the development process unnecessarily complicated. You can check out all of my apps using the link below, some of which are open source on GitHub as well.'
    ],
    link: {
      url: 'https://pagedeploy.github.io/sagrawal8fitbitdev',
      displayText: 'github.io/sagrawal8fitbitdev',
      icon: 'https://github.com/pagedeploy/cdn/blob/main/fitbit.png?raw=true'
    }
  }
];
