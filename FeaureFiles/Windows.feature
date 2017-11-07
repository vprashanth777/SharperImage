@functional_test @other_meta_tag
Feature: this is the first feature name
  this is an example additional feature description

  
  Scenario: Apply Promo/Coupon code from Payment Method page (Mobile)
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    And User click the link contains "More Categories"
    When User click the  "For Her"
    Then User check that the browser title contains "For Her"
    When User selected the item from list
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 1
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Checkout as a guest"
    Then User check that the browser title contains "Payment"
    When User enter inValid promo code
    When User Click the button "Apply"
    Then User able to see below text on page
      | Promotion Code SDFFAF is not a valid promotion code |
    When User enter Valid promo code
    When User Click the button "Apply"
    Then User able to see below text on page
      | Promotions: |
    And User should able to see the promotion code price