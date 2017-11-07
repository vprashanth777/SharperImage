#Author: prashanth.veldandi@valuelabs.com(QA3)
@SIRegression @Desktop @Thread1 @Protection
Feature: Protection Plan (desktop)

  Background: 
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    Given User set the "ABTest_ProtectionPlan" cookie value "A_PROTECTION_PLAN"

@P1
  Scenario: User should able to add protection plan for single item(Desktop)
    When User search with "201697"
    Then User check that the browser title contains "Popcorn Trolley"
    And User able to see below text on page
      | Popcorn Trolley |
      | Item # 201697   |
    When User Click the protection plan 1
    When User Click the button "Add To Cart"
    When User should select quantity as 2
    Then User able to validate the total price with protection plan
    Then User check that the browser title contains "Shopping Cart"
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Checkout as a guest"
    Then User check that the browser title contains "Payment"
    And User should enter valid card details

  Scenario: User should able to add protection plan for multiple items(Desktop)
    When User search with "201697"
    Then User check that the browser title contains "Popcorn Trolley"
    And User able to see below text on page
      | Popcorn Trolley |
      | Item # 201697   |
    When User Click the protection plan 1
    When User Click the button "Add To Cart"
    When User should select quantity as 2
    Then User able to validate the total price with protection plan
    When User search with "203942"
    Then User check that the browser title contains "Five Mode Scorekeeper Watch"
    And User able to see below text on page
      | Five Mode Scorekeeper Watch |
      | Item # 203942               |
    When User Click the button "Add To Cart"
    When User Click the protection plan 2
    Then User check that the browser title contains "Shopping Cart"
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Checkout as a guest"
    Then User check that the browser title contains "Payment"
    And User should enter valid card details

  Scenario: User should able to add promo code to protection plan for item(Desktop)
    When User search with "201697"
    Then User check that the browser title contains "Popcorn Trolley"
    And User able to see below text on page
      | Popcorn Trolley |
      | Item # 201697   |
    When User Click the protection plan 1
    When User Click the button "Add To Cart"
    When User should select quantity as 2
    Then User able to validate the total price with protection plan
    Then User able to see the item with quantity with addon
    Then User check that the browser title contains "Shopping Cart"
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Checkout as a guest"
    Then User check that the browser title contains "Payment"
    When User enter Valid promo code
    When User Click the button "Apply"
    Then User able to see below text on page
      | Promotions: |
    And User should enter valid card details

  Scenario: VIP User should able to add promo code to protection plan for item(Desktop)
    Given User login to the application as VIP user
    When User click the cart
    And User clear the cart items
    When User search with "201697"
    Then User check that the browser title contains "Popcorn Trolley"
    And User able to see below text on page
      | Popcorn Trolley |
      | Item # 201697   |
    When User Click the protection plan 1
    When User Click the button "Add To Cart"
    When User should select quantity as 2
    Then User able to validate the total price with protection plan
    Then User able to see the item with quantity with addon
    Then User check that the browser title contains "Shopping Cart"
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Continue to payment"
    Then User check that the browser title contains "Payment"
    And User should enter valid card details
    When User logout from application
    Then User able to see the Homepage with Categories

  Scenario: User should able to add protection plan for personalized item(Desktop)
    When User search with "203942"
    Then User check that the browser title contains "Five Mode Scorekeeper Watch"
    And User able to see below text on page
      | Five Mode Scorekeeper Watch |
      | Item # 203942               |
    When User Click the protection plan 2
    When User Click the button "Add To Cart"
    When User should select quantity as 2
    Then User able to validate the total price with protection plan
    Then User able to see the item with quantity with addon
    Then User check that the browser title contains "Shopping Cart"
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Checkout as a guest"
    Then User check that the browser title contains "Payment"
    And User should enter valid card details
