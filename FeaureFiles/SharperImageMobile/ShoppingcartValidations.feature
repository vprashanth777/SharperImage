#Author: prashanth.veldandi@valuelabs.com(QA8)
@SIRegression @Mobile
Feature: Shopping cart Validations(Mobile)

  @Shoppingcart @P1
  Scenario: user can add and delete the item from shoppeing cart(Mobile)
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    And User click the link contains "More Categories"
    When User click the  "Man Cave"
    Then User check that the browser title contains "Man Cave"
    When User click the  "Electronic Return Putting Mat"
    Then User check that the browser title contains "Electronic Return Putting Mat"
    When User Click the button "Add To Cart"
    When User should select quantity as 3
    Then Price need to update by Quantity
    When User Click the button "navButton" by "id"
    And User click the link contains "More Categories"
    When User click the  "For Her"
    Then User check that the browser title contains "For Her"
    When User click the  "Hair Straightening Brush"
    Then User check that the browser title contains "Hair Straightening Brush"
    When User Click the button "Add To Cart"
    When User should select quantity as 1
    Then Price need to update by Quantity
    When User click the  "Remove"
    And User should select quantity as 0
    And User clear the cart items
      And User clear the cart items
    When User Click the button "Checkout"
    Then User should  able to see the Error "There are no items to purchase in the order."

  @Shoppingcart
 Scenario: Click on checkout button and arriving on Shipping & Billing page (Mobile)
   Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    And User click the link contains "More Categories"
    When User click the  "Man Cave"
    Then User check that the browser title contains "Man Cave"
    When User click the  "Electronic Return Putting Mat"
    Then User check that the browser title contains "Electronic Return Putting Mat"
    When User Click the button "Add To Cart"
    When User should select quantity as 3
    Then Price need to update by Quantity
    And User should able to choose Shipping Options
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    When User click the cart
    Then User check that the browser title contains "Shopping Cart"
    And User able to see "Electronic Return Putting Mat" and quantity as 3
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"

  @Shoppingcart
  Scenario: Click on checkout with PayPal button and arriving on PayPal page (Mobile)
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    And User click the  "Electronics"
    And User click the  "Speakers"
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

  
