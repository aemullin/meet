Feature: Specify Number of Events

    Scenario: When a user hasn’t specified a number, 32 is the default
        Given a user opens the events page
        When a user hasn’t set how many events they would like to view
        Then the user will see 32 events


    Scenario: User can change the number of events they want to see
        Given a user would like to see more or less events than 32
        When a user sets a filter
        Then the user will see more or less than 32 events
