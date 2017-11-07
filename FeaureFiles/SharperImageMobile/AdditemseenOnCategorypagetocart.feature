#Author: prashanth.veldandi@valuelabs.com(QA2)
@SIRegression
Feature: Add item seen on category page to cart (Mobile)

  @Mobile @PDP
  Scenario: Link to Product detail page (Mobile)
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    And User click the  "Electronics"
    And User click the  "Headphones & Earbuds"
    Then User check that the browser title contains "Headphones & Earbuds"
    When User click the  "TV Wireless Headphones"
    Then User check that the browser title contains "TV Wireless Headphones"
    And User should be taken to the product details page for that item "TV Wireless Headphones"

  @Mobile @PDP @P1
  Scenario: Add an item to cart from PDP (Mobile)
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    And User click the link contains "More Categories"
    When User click the  "Gadgets"
    Then User check that the browser title contains "Gadgets"
    When User click the link contains "Smartphone Photo Printer"
    Then User check that the browser title contains "Smartphone Photo Printer"
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 2
    Then Price need to update by Quantity
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Checkout as a guest"
    Then User check that the browser title contains "Payment"
    And User should enter valid card details
    When User Click the button "Place Order"
    Then User able to see below text on page
      | Thank You For Your Order! |
      | Your Order Number is      |

Scenario: View all items in gardget category (Mobile)
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    And User click the link contains "More Categories"
    When User click the  "Gadgets"