#Author: prashanth.veldandi@valuelabs.com(QA3)
@SIRegression @Mobile @Thread2 @Mystery
Feature: User able to apply "Mystery coupon" (desktop)

  Scenario: User able to apply "Mystery coupon" on single item
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
    When User enter Valid promo code
    When User Click the button "Apply"
    Then User able to see below text on page
      | Promotions: |
    And User should able to see the promotion code price

  Scenario: User able to apply "Mystery coupon" on Multiple item
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    And User click the link contains "More Categories"
    When User click the  "For Her"
    Then User check that the browser title contains "For Her"
    When User selected the item from list
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 1
    When User Click the button "navButton" by "id"
    And User click the link contains "More Categories"
    When User click the  "For Him"
    Then User check that the browser title contains "For Him"
    When User selected the item from list
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 1
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Checkout as a guest"
    Then User check that the browser title contains "Payment"
    When User enter Valid promo code
    When User Click the button "Apply"
    Then User able to see below text on page
      | Promotions: |
    And User should able to see the promotion code price
    And User should enter valid card details
    When User Click the button "Place Order"
    Then User able to see below text on page
      | Thank You For Your Order! |
      | Your Order Number is      |

  Scenario: User should able to continue shopping after item adding to the cart by clicking the "Continue shopping"
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    And User click the link contains "More Categories"
    When User click the  "For Her"
    Then User check that the browser title contains "For Her"
    When User selected the item from list
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 1
    When User click the Continue Shopping
    Then User check that the browser title contains "For Her"
    When User selected the item from list
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 3
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

  Scenario: User save shopping cart by email to order later
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    And User click the link contains "More Categories"
    When User click the  "For Her"
    Then User check that the browser title contains "For Her"
    When User selected the item from list
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 1
    When User Click the "popup-start-saveCart" by "id"
    Then User enter email to save cart
    When User navigate to email and click the cart link
    Then User switch window
    Then User check that the browser title contains "Shopping Cart"
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Checkout as a guest"
    Then User check that the browser title contains "Payment"
    When User close child window and switch back to main window

  Scenario: User able to order massage chair with auto promo code applied
    Given User navigate to sharperimage website
    When User search with "204399"
    Then User check that the browser title contains "Human Touch Zero Gravity"
    And User able to see below text on page
      | Human Touch Zero Gravity |
      | Item # 204399            |
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    And User able to see below text on page
      | One promo allowed per order          |
      | Use promo code MCHAIRFS at checkout. |
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

  Scenario: User able to validate few items(massage chair) which have only ground mode delivery
    Given User navigate to sharperimage website
    When User search with "204399"
    Then User check that the browser title contains "Human Touch Zero Gravity"
    And User able to see below text on page
      | Human Touch Zero Gravity |
      | Item # 204399            |
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    And User able to see below text on page
      | One promo allowed per order          |
      | Use promo code MCHAIRFS at checkout. |
    And User able to see only groud shipping option
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
