#Author: prashanth.veldandi@valuelabs.com

@SIRegression @Desktop  @ABTEST
Feature: AB Testing for sharperImage(desktop)
 Background: Navigate to url
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories

  Scenario: AB testing with "ABTest_Banner_Version" cookie value "B_ALTERNATE"
    Given User set the "ABTest_Banner_Version" cookie value "B_ALTERNATE"
     Given User navigate to sharperimage website
    Then User able to "see" mystery banner
    When User click the  "Gadgets"
    Then User check that the browser title contains "Gadgets"
    When User select the "Price" with filter "100-150"
    When User selected the item from list
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 2
    Then Price need to update by Quantity
    Then User enter mystery code
    When User Click the button "Apply"
    Then User able to see below text on page
      | Promotions: |
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Checkout as a guest"
    Then User check that the browser title contains "Payment"
    And User should enter valid card details
     Given User Deleted all cookies
   
 Scenario: AB testing with "ABTest_Banner_Version" cookie value "A_STANDARD"
    Given User set the "ABTest_Banner_Version" cookie value "A_STANDARD"
    Given User navigate to sharperimage website
    Then User able to "not see" mystery banner
    When User click the  "Gadgets"
    Then User check that the browser title contains "Gadgets"
    When User selected the item from list
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 2
    Then Price need to update by Quantity
    When User enter Valid promo code
    When User Click the button "Apply"
    Then User able to see below text on page
      | Promotions: |
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Checkout as a guest"
    Then User check that the browser title contains "Payment"
    And User should enter valid card details
    Given User Deleted all cookies