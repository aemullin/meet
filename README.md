# Meet App
In this project, I have built a serverless, progressive web application (PWA) with React using test-driven development (TDD. The application uses the Google Calendar API to fetch upcoming events. Here is a link to the live app: https://aemullin.github.io/meet/.

## User stories and Scenarios

### Feature/Story 1: As a user, I would like to be able to view details of an event so that I can learn more about an event.

#### Scenario 1: An event element is collapsed by default
-	Given: a user is on the events page
-	When: nothing has been viewed
-	Then: the event details will be hidden (collapsed)

#### Scenario 2: User can expand an event to see its details
-	Given: the user wants to learn more about an event
-	When: a user clicks an event
-	Then: the event details will show (expand)

#### Scenario 3:	User can collapse an event to hide its details
-	Given: a user is done learning about an event
-	When: a user clicks an expanded event
-	Then: the event details will be hidden (collapsed)

### Feature/Story 2: As a user, I would like to be able to change the amount of events I see so that I am not overwhelmed by the amount of events I am being shown.

#### Scenario 1: When a user hasn’t specified a number, 32 is the default
-	Given: a user hasn’t set how many events they would like to view
-	When: a user opens the events page
- Then: the user will see 32 events

#### Scenario 2: User can change the number of events they want to see
-	Given: a user would like to see more or less events
-	When: a user clicks a filter
-	Then: the user will see more or less than 32 events

### Feature/Story 4: As a user, I would like to use the app while offline so I can view previously viewed events when I am no longer online. 

#### Scenario 1: Show cached data when there is no internet connection
- Given: a user is offline, whatever the reason may be
-	When: a user opens the events page
-	Cached: events will be available to view

#### Scenario 2:	Show an error when a user changes the settings (city, time range)
-	Given: a user tries to perform a new event search
-	When: a user performs a new event search while offline
-	Then: the user will see an error

### Feature/Story 4: As a user, I would like to quickly see how many events each city is hosting to determine which city I would like to visit.

#### Scenario 1:	Show a chart with the number of upcoming events in each city
- Given: a user opens the app
-	When: a user wants to visually see how many upcoming events there are
-	Then: they will have access to a chart showing the number of events per city
