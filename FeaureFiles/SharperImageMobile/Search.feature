#Author: prashanth.veldandi@valuelabs.com(QA3)

@SIRegression @Mobile
Feature: User should able to search an item (Mobile)
 @search
 
 @P1
  Scenario: User should able to search an item(Mobile)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User search with "200606"
    Then User check that the browser title contains "Towel Warmer"
    And User able to see below text on page
      | Towel Warmer  |
      | Item # 200606 |
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 2
    Then Price need to update by Quantity
    When User Click the button "Checkout"
    When User search with "Quickest Hair Straightening Brush"
    Then User check that the browser title contains "Search Results Page @ Sharper Image"
    When User click the  "Hair Straightening Brush"
    Then User check that the browser title contains "Quickest Hair Straightening Brush"
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 1
    Then Price need to update by Quantity
    When User Click the button "Checkout"
 
 
 
  Scenario: User should able to search an item from google(Mobile)
    Given User navigate to "https://www.google.com/" website
    When User search for an item from google
    Then User check that the browser title contains "Towel Warmer"
    And User able to see below text on page
      | Towel Warmer  |
      | Item # 200606 |
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
 
 @P1
 Scenario: User able to order Personalize item(Mobile)
    Given User navigate to sharperimage website
    When User search with "200977"
    Then User check that the browser title contains "Wide Mouth Duffel Bag"
    And User able to see below text on page
      | Wide Mouth Duffel Bag |
      | Item # 200977         |
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 2
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