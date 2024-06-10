# React + TypeScript + Vite + Scss

I used Vite to create the minimal setup to get this project working.

To run your project locally, follow those instructions:
- Run `npm install` to install all the necessary packages.
- Run `npm run dev` to start the app.
- Go to `http://localhost:5173/` to check the final result

Feedbacks, notes and thoughts about my work:
- The API fetch call doesn't take any UserId as parameter to retrieve Quests linked to the User. 
- On scss part, I made a desktop version for HD resolution and higher resolution. Quite a lot of sizes, margins and paddings are in px to follow as much as possible the figma. I would love to spend more time with other types of dimensions to make it more responsive.
- For the Icons, I imported directly the SVGs from Bootstrap. If I had more time, I would made specific components with them.
- On typescript, I followed a lot the linting feedbacks, I hope I did not make too much "gymnastics" for "easy" tasks. 
- To generate content and populate the dumb component, aka the Quest Tile, I made a `context.tsx` file, I'm not sure it's a good practice. 