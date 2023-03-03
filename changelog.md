[Hw3 Site](https://startling-cactus-c5aa04.netlify.app/)
<br>
[Hw4 Site](https://spectacular-hamster-3992c3.netlify.app/)

# Change log
I changed a lot... I went ham on the changes of the site. Check the repo history and completed github issues for more details.

## Refactors and additions
- Flexbox -> grid
  - I felt that grid is more reliable and looks nicer. 
  - Flex can be very... finicky and I felt that this refactor is cleaner. 
- Multi-page -> single-page
  - I felt that it was very unnessary to have multiple pages since there isn't very much to put on each page. 
  - It looks a lot cleaner and simpler to scroll through all my experiences
  -  This idea was heavily inspired by reference sites I've been exploring
-  Changed the home animation to slide in with delay
   -  I liked this animation more
-  Styled the Resume button and moved the contact button to be it's own section
   -  I really like these buttons because the animation is identical to the other links, but it doesn't fill it from left to right, it just auto fills
- Contact is now it's own section 
  - I felt that this was a nice way to end the site when the user scrolls to the end 
- Used font awesome icons for github and linkedin
- Created my own personal logo with figma
---

## Future changes and fixes
- Remove native dialog, custom dialogs, crud, and style crud
- Most likely will remove blog
  - I don't think I'm interested in keeping a blog portion to my site, but this could change. 
- Add animations to all sections: experience, projects, and contact
  - Need to use js to detect scrolling. Currently the landing page and about both have animations, but when you scroll down, you will not see the animation for about because it does it on page load rather than user scroll. 
- Will need to fill out my about, experience and projects with real text
- Make the website look nicer. Right now, it looks pretty flat
- Need to fix the jump to projects
  - When clicked, it cuts out the title
  
---
## Third party script
Full import: 
`<script src="https://cdn.jsdelivr.net/npm/smooth-scroll@16.1.3/dist/smooth-scroll.polyfills.min.js"></script>`

The script: `smooth-scroll.polyfills.min.js`

I imported smooth scroll because it was most applicable to my site so far. This was actually one of the main reasons I chose to refactor it to be a single page site because I really like the smooth scroll animation.