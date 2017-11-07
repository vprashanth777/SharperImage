#Author: prashanth.veldandi@valuelabs.com(QA 7,9)
@SIRegression @Desktop   @Shoppingcart @Thread1
Feature: Shopping cart Validations(Desktop)

  @Shoppingcart
  Scenario: user can add and delete the item from shoppeing cart(Desktop)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Man Cave"
    Then User check that the browser title contains "Man Cave"
     When User selected the item from list
    When User Click the button "Add To Cart"
    When User should select quantity as 3
    Then Price need to update by Quantity
    When User click the  "Gadgets"
    Then User check that the browser title contains "Gadgets"
    When User select the "Price" with filter "100-150"
    When User selected the item from list
    When User Click the button "Add To Cart"
    When User should select quantity as 1
    Then Price need to update by Quantity
    When User click the  "Remove"
    And User should select quantity as 0
     And User clear the cart items
    When User Click the button "Checkout"
    Then User should  able to see the Error "There are no items to purchase in the order."

  @Shoppingcart
  Scenario: Click on checkout with PayPal button and arriving on PayPal page (desktop)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Electronics" and "Speakers"
    Then User check that the browser title contains "Speakers"
    When User click the  "Wireless TV Speaker"
    Then User check that the browser title contains "Wireless TV Speaker"
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    And User able to see below text on page
      | Wireless TV Speaker |
    When User Click the Paypal Button
    Then User check that the browser title contains "PayPal"
     And User able to see below text on page
      | PayPal Checkout            |



  @Shoppingcart @P2
  Scenario: Click on checkout button and arriving on Shipping & Billing page (desktop)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Electronics" and "Speakers"
    Then User check that the browser title contains "Speakers"
    When User click the  "Wireless TV Speaker"
    Then User check that the browser title contains "Wireless TV Speaker"
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 2
    Then Price need to update by Quantity
    And User should able to choose Shipping Options
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    When User click the cart
    Then User check that the browser title contains "Shopping Cart"
    And User able to see "Wireless TV Speaker" and quantity as 2
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
