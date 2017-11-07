#Author: prashanth.veldandi@valuelabs.com(QA3)

@SIRegression @Desktop @Thread2
Feature: Add item seen on category page to cart (desktop)
 @PDP
Scenario: Link to Product detail page (desktop)
Given User navigate to sharperimage website
Then User able to see the Homepage with Categories
When User click the  "Electronics" and "Headphones & Earbuds"
Then User check that the browser title contains "Headphones & Earbuds"
When User click the  "TV Wireless Headphones"
Then User check that the browser title contains "TV Wireless Headphones"
And User should be taken to the product details page for that item "TV Wireless Headphones"

 @PDP @P1
Scenario: Add an item to cart from PDP (desktop)
 Given User navigate to sharperimage website
Then User able to see the Homepage with Categories
When User click the  "Gadgets"
Then User check that the browser title contains "Gadgets"
When User select the "Price" with filter "100-150"
#And User select the "By Category" with filter "Best Sellers"
#When User click the  "HoverKart"
#Then User check that the browser title contains "HoverKart"
 When User selected the item from list
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


Scenario: Add an item to cart from PDP with UserLogin (desktop)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    Given User login to the application
    When User click the cart
    And User clear the cart items
    When User click the  "Gadgets"
    Then User check that the browser title contains "Gadgets"
    When User select the "Price" with filter "100-150"
    When User selected the item from list
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 2
    Then Price need to update by Quantity
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    #Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User choose the option "Yes, my BILLING address is the same as the shipping address" in the Billing
    When User Click the button "Continue to payment"
    Then User check that the browser title contains "Payment"
    And User should enter valid card details
    When User Click the button "Place Order"
    Then User able to see below text on page
      | Thank You For Your Order! |
      | Your Order Number is      |
    And User logout from application
    Then User able to see the Homepage with Categories
