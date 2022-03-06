Feature: Show and Hide an Events Details

    Scenario: An event element is collapsed by default
        Given a user is on the events page
        When details have not been viewed
        Then the event details will be hidden (collapsed)

    Scenario: User can expand an event to see its details
        Given the user wants to learn more about an event
        When a user clicks view details
        Then the event details will show (expand)

    Scenario: User can collapse an event to hide its details
        Given a user wants to collapse expanded details
        When a user clicks hide details
        Then the event details will be hidden (collapsed)