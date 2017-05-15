@PlaceOrder
Feature: Validate the sharper imagae website by placing an order

  Scenario: Place an order in sharperimage Website
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User clicks on gadgets
    Then User should redirect to gadgets page
    And User able to  filter by Price
    