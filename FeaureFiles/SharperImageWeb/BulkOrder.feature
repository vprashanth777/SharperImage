#Author: prashanth.veldandi@valuelabs.com(QA3)
@SIRegression @Desktop @Thread1
Feature: User able to buy bulk items by phone call

@P1
  Scenario: User able to buy bulk items by phone call(Desktop) QA63
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Gadgets"
    Then User check that the browser title contains "Gadgets"
    When User selected the item from list
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as bulk
    Then User able to see the popup with phonenumber
    And User Close the popup

  Scenario: User should not able to buy bulk items by checkout(Desktop) QA63
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Gadgets"
    Then User check that the browser title contains "Gadgets"
    When User selected the item from list
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as bulk
    Then User able to see the popup with phonenumber
    And User Close the popup
    When User Click the button "Checkout"
    Then User able to see below text on page
      | The quantity entered is invalid. |
