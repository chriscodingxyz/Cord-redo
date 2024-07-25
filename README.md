# Cohire Coding Challenge (Frontend)

## Last Updated

18-06-2024

### Introduction

Welcome! This coding challenge is designed to explore your React & SCSS frontend skills. You will have to create a simple SPA based off the provided mockup and make a few API calls to a public web API.

### The challenge

You have to complete the test and write any necessary code so that the search page looks like this [mockup]. All the images/icons you need are already imported into this repository.

The discover page should enable the user to search for movies as keywords are typed into the search bar. Functionality for filtering does not need to be implemented, however the filter categories should still be expandable upon clicking. On mobile devices, the navigation bar should slide in from left to right when the user clicks on the hamburger icon.

As you may have noticed, there are a few TypeScript errors that need to be fixed. Also, there are some UI bugs that you should spot and fix. If time permits, you would want to add responsive stylesheets for the app to run smoothly on mobile devices.

Movie data can be queried via:

- [theMovieDB]

Packages & Technologies used in the repo:

- `axios`
- `node-sass`
- `react-router-dom`
- `styled-components`
- `typescript`

### Setup guide

1. Clone this repo
2. `npm i --legacy-peer-deps` to install dependencies. Node v16^ preferable

### Submission guide

Please create a git repository of your solution and send the link to your contact person once you are done.

### How we review

- **Design**: Were you able to translate the mockup into a web application that works well on various browsers and devices? Does the output match the mockup? This is the most important aspect. Weight: 50%
- **Functionality**: Does the search function work? Do the results load instantly as the user types? If the API backend has rate limiting enforced, how do you implement the aforementioned while also taking rate limiting into account? Weight: 25%
- **Code quality**: Is the code easy to understand and maintain? Is the coding style consistent with the language's best practices? Do you demonstrate a good grasp of JavaScript, especially ES6? Weight: 15%
- **Performance**: Does the UI render quickly? Are the choice of libraries etc appropriate for the web page? Weight: 10%

### Bonus points

- **Documentation** - Is the README well written? Are the commit messages clear?
- **Automated Tests** - Are there any automated frontend tests?
- **Reporting** - React Profiler report with demonstrated knowledge of reading / reporting performance data
- **Production-readiness** - Is there proper error handling? Is the code ready to put into production? Code-Splitting?
- **Future-readiness** - React Hooks? Web workers? PWA? Client-side caching?

[mockup]: https://cord-coding-challenges.s3-eu-west-1.amazonaws.com/frontend-test-mockups.zip
[theMovieDB]: https://www.themoviedb.org/documentation/api

# Steps taken

1. updated scripts for legacy and installed legacy deps
2. updated evertyhing to box-sizing: border box (more accepted standard)
3. Filled up fetcher data using axios
4. Added all types from movies/genres into lib/types.ts
5. Media queries and activeSideBar state for displaying/hiding sidenavbar. Also some spacing/margin updated. For now I will keep most state within app.tsx and move down or put into context/local storage later if needed
6. Sidebar components styled
7. Updated whole app, made MovieContext. Also temporarily fixed most of the errors by adding any type (temporary)
8. Fixed some issues with Genres, as there is a WHOLE genre list, and a movie specific one. Also the movie specific ones only mentioned Genre ID not name. Movielist and MovieItems have been styled. All filter/search components next. (padding/margin will still be updated towards the end)
9. Deleted MobileTitle component and extracted away a new component, MobileHeader.tsx, this will allow a title prop to be passed for different pages. This also places the open/close sidebarnav button to the left of it. Also I decided to add a white background and fix it to the top for when users scroll, they always have option to display sidebar. Also updated sidebar z-index after realising an error
10. Fixed MobileHeader and button. Have added conditional padding-left, no whitespace now when opening sidebar. Also button rotates 90degrees to keep the same spacing and no shift in design, except for intentional shift to the right when sidebar expands.
11. Getting closer to final layout of discover, currently have a flex display style for movie content and filters. I will likely also make the filters stay fixed on the screen, both for row and column displays.
12. Building out the search logic for now, adding values in context so it stays there on any re-renders
13. Added Search feature, will not search if ONLY year. Will not make a new search if year does not have 4 numbers. If search is cleared, it fetches popular movies. Will add some debounce or see if there is a more modern method online
14. Partiall built out ExpandableFilters, Checkbox, mapped over genres only for now. I have some type issues in MovieContext I will fix after this push.
