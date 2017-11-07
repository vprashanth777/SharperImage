@PlaceOrder123

Feature: this is the first feature name
  this is an example additional feature description

  Background: 
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    Given set cookie value to "Yes" mini cart

  Scenario: User should able to search an item(Desktop)
    When User add below product to cart
      | 200977|