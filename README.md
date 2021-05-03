## Orgtomic Front end test (SpaceX API)

Orgtomic is an API first company. as a matter of fact we rely on APIs in everything we do.

As a Front end developer you will be required to deal with different APIs on a daily basis.

## Test Objective

Use the SpaceX v4 API to build a React web app (with routing) that shows launches, ships and crew members.

You are expected to provide clean code in your JS and CSS

### API docs

https://github.com/r-spacex/SpaceX-API/tree/master/docs/v4 

## Layout

The layout should be present for all views. You are expected to have the following components

- Header - Includes the routes to "Launches" (main view), "Ships" and "Crew Members" (depending on the current route you should highlight the respective title)
- Current view ( Route dependant)

## Launches (main view)

route: `/launches`

Here you'll need to display a date range picker (defaults to this year)

based on the date picker value you should list details about launches that ocurred in the given date period.

Each item of the list should occupy an entire row in the UI and it should provide the following details

- A banner image of the launch
- On the banner image you should have the launch name as `<h2>` bold title and the launch date as a subtitle `launch.name` and `launch.date_local`
- Under the title and the subtitle you should have a badge showing the launch success state `launch.success`
- Under the banner image you should have the launch details in a paragraph.
- under the paragraph show the ships names and crew members used in launch ( optionally make each of those a hyperlink to their respective views, as detailed below )
- Paginate the list by showing no more than 5 launches per view and add pagination buttons at the bottom

##### Bonus task

At the top of the view (above the date range picker) show a time series line chart showing the number of launches per year from the start of time till today 

## Ships

route: `/ships`

This view should display all SpaceX ships in a responsive grid 

- 3 Ships on laptop screens and above 
- 2 on tablet size
- 1 on mobile devices

Each ship item on the grid should be a background image of the ship (can be acquired from the API response). On each of the images you should have the following

- Name of the ship
- A badge showing if the ship is active (`ship.active`)
- Tags showing the roles of the ship (`ship.roles[]`)
- Home port
- Each item should be a link to `ships/:id` (the view contents' are optional)

## Crew Members

route: `/crew`

Similar to the ships view in terms of the responsive grid. You need to support the following on each crew member item:

- Name and Agency
- A button link to `crew/:id` (the view contents' are optional)
- A button link to the respective launches `launces/:id` (the view contents' are optional)

##### Bonus task

Add a search bar to search for crew members by name


## Important notes

The aim of the test is to measure your current technical skill and pace, Therefore it's okay if you're unable to finish everything on time.

You will be graded by the following measures:

- Functionality baed on given requirements.
- Readable code.
- HTML / CSS best practices 
- React best practices
- User experience

## Submission

- Clone this repo 
- Build your app 
- Submit a PR with source code or provide a link to a working codesanbox instance or equivalent
