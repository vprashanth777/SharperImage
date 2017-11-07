#Author: prashanth.veldandi@valuelabs.com(QA18)
@SIRegression @Mobile
Feature: Validate Payment Page(Mobile)

  @Payment
  Scenario: Edit shipping address from Payment Method page (Mobile)
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    And User click the link contains "More Categories"
    When User click the  "Gadgets"
    Then User check that the browser title contains "Gadgets"
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
    When User click the edit of "Shipping Address"
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like updatefirstname,updatedlastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Checkout as a guest"
    Then User check that the browser title contains "Payment"
    And User able to see below text on page
      | updatefirstname |
      | updatedlastname |
    And User should enter valid card details

  @Payment
  Scenario: Edit billing address from Payment Method page (Mobile)
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    And User click the link contains "More Categories"
    When User click the  "Gadgets"
    Then User check that the browser title contains "Gadgets"
    When User selected the item from list
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 1
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User choose the option "No, the address on record with my credit card is different" in the Billing
    Then User should enter Mandatory fields like first,last,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test123@gmail.com
    When User enter the password
    And User enter the conform password
    When User Click the button "Create an Account & Continue"
    Then User check that the browser title contains "Payment"
    When User click the edit of "Shipping Address"
    Then User check that the browser title contains "Billing Address"
    Then User should enter Mandatory fields like updatefirstname,updatedlastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Checkout as a guest"
    Then User check that the browser title contains "Payment"
    And User able to see below text on page
      | updatefirstname |
      | updatedlastname |
    And User should enter valid card details

  @Payment
  Scenario: Edit Shipping Method from Payment Method page (Mobile)
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    Given User login to the application
    When User click the cart
    And User clear the cart items
    When User Click the button "navButton" by "id"
    And User click the link contains "More Categories"
    When User click the  "Man Cave"
    Then User check that the browser title contains "Man Cave"
    When User selected the item from list
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 1
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Continue to payment"
    Then User check that the browser title contains "Payment"
    When User click the edit of "Shipping Method"
    Then User check that the browser title contains "Billing Address"
    And User should able to change the Shipping Options
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    When User Click the button "Continue to payment"
    Then User check that the browser title contains "Payment"
    And User able to see shippingtype update
    And User should enter valid card details
    When User Click the button "navButton" by "id"
    And User logout from application

  @Payment @Coupon @P1
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

  @Payment @Coupon
  Scenario: Apply Gift certificate/cash back coupon from Payment Method page (mobile,S-ND-2222)
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
    When User click the  giftcard
    When User enter inValid Gift code and click Apply
    Then User able to see below text on page
      | Gift Certificate 12345678 is not a valid certificate |
      | Please check your number and try again.              |
    When User enter Valid Gift code and click Apply
    Then User able to see below text on page
      | Certificate 3286216869860747 has |
      | Gift Certificates:               |
