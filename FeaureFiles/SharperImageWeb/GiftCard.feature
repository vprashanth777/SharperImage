#Author: prashanth.veldandi@valuelabs.com(QA69)
@SIRegression @Desktop @Thread2
Feature: User able to buy the gift card(Desktop) (QA69)

@P1
  Scenario: User able to buy the gift card(Desktop)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  Gift Guide
    Then User check that the browser title contains "Gift Cards"
    When User select the "Price" with filter "100-150"
    When User click the  "Gift Card"
    Then User check that the browser title contains "Gift Card"
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

  Scenario: User able to buy the egift card(Desktop)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    Given User login to the application
    When User click the cart
    And User clear the cart items
    When User click the  Gift Guide
    Then User check that the browser title contains "Gift Cards"
    When User click the  "eGift Card"
    Then User check that the browser title contains "eGift Card"
    When User click the  "200"
    And User Click the Deliver Yourself and Enter email
    When User Click the button "Add to Cart"
    When User should select quantity as 2
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    When User Click the button "Continue to payment"
    Then User check that the browser title contains "Payment"
    And User should enter valid card details
    When User Click the button "Place Order"
    Then User able to see below text on page
      | Thank You For Your Order! |
      | Your Order Number is      |
    And User logout from application
    Then User able to see the Homepage with Categories

  Scenario: User not able to buy the gift card with promo code(Desktop)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  Gift Guide
    Then User check that the browser title contains "Gift Cards"
    When User select the "Price" with filter "100-150"
    When User click the  "Gift Card"
    Then User check that the browser title contains "Gift Card"
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 2
    Then Price need to update by Quantity
    When User click the  "Gadgets"
    Then User check that the browser title contains "Gadgets"
    When User selected the item from list
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 1
    Then Price need to update by Quantity
    When User enter Valid promo code
    When User Click the button "Apply"
    Then User able to see below text on page
      | Promotions: |
    And User should able to see the promotion code price
    Then User should able to see promocode is not applied on Giftcard
     When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Checkout as a guest"
    Then User check that the browser title contains "Payment"
    And User should enter valid card details
    When User Click the button "Place Order"
    
 Scenario: User not able to buy the gift card with Giftcard(Desktop)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  Gift Guide
    Then User check that the browser title contains "Gift Cards"
    When User select the "Price" with filter "100-150"
    When User click the  "Gift Card"
    Then User check that the browser title contains "Gift Card"
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 2
    Then Price need to update by Quantity
    When User click the  "Gadgets"
    Then User check that the browser title contains "Gadgets"
    When User selected the item from list
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 1
    When User click the  giftcard
    When User enter Valid Gift code and click Apply
    Then User able to see below text on page
      | Were sorry, but the method of payment for an electronic gift certificate must be in the form of a valid credit card or debit card. Please remove the gift certificate below to continue checking out. |
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Checkout as a guest"
    Then User check that the browser title contains "Payment"
    When User click the  giftcard
    When User enter Valid Gift code and click Apply
    Then User able to see below text on page
      | Were sorry, but the method of payment for an electronic gift certificate must be in the form of a valid credit card or debit card. Please remove the gift certificate below to continue checking out. |
    And User should enter valid card details
    When User Click the button "Place Order"
   

  Scenario: User able to order item with Gift pack -Single Item(desktop,ND-2365) QA67
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Gadgets"
    Then User check that the browser title contains "Gadgets"
    When User selected the item from list
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 1
    Then Price need to update by Quantity
    When User select the GiftBag Option
    And User enter his comments
    And User Click the button "Approve"
    Then User able to validate the Giftbag Price
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Checkout as a guest"
    Then User check that the browser title contains "Payment"
    And User should enter valid card details
    When User Click the button "Place Order"

    
  Scenario: User able to order item with Gift pack -Mutiple Items(desktop,ND-2365) QA67
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Gadgets"
    Then User check that the browser title contains "Gadgets"
    When User selected the item from list
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 1
    Then Price need to update by Quantity
    When User select the GiftBag Option
    And User enter his comments
    And User Click the button "Approve"
    Then User able to validate the Giftbag Price
    When User click the  "For Her"
    Then User check that the browser title contains "For Her"
     When User selected the item from list
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 1
    When User select the GiftBag Option
    And User Click the button "Approve"
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
      
  
  Scenario: User not able to buy the gift card with Giftcard after adding gift card to cart(Desktop)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Gadgets"
    Then User check that the browser title contains "Gadgets"
    When User selected the item from list
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 1
    Then Price need to update by Quantity
    When User click the  giftcard
    When User enter Valid Gift code and click Apply
    Then User able to see below text on page
      | Certificate 3286216869860747 has |
      | Gift Certificates:               |
    When User click the  Gift Guide
    Then User check that the browser title contains "Gift Cards"
    When User click the  "Gift Card"
    Then User check that the browser title contains "Gift Card"
    When User Click the button "Add To Cart"
  Then User able to see below text on page
      |You cannot add a Gift Certificate to an Order where a Gift Certificate has been entered as a payment type. |




  Scenario: User able to buy the egift card for others(Desktop)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    Given User login to the application
    When User click the cart
    And User clear the cart items
    When User click the  Gift Guide
    Then User check that the browser title contains "Gift Cards"
    When User click the  "eGift Card"
    Then User check that the browser title contains "eGift Card"
    When User click the  "200"
    When User enter message for Giftcard
    And User Enter Email Delivery
    When User Click the button "Add to Cart"
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    When User Click the button "Continue to payment"
    Then User check that the browser title contains "Payment"
    And User should enter valid card details
    When User Click the button "Place Order"
    Then User able to see below text on page
      | Thank You For Your Order! |
      | Your Order Number is      |

  
Scenario:User able to buy corporate gift cards
 Given User navigate to sharperimage website
Then User able to see the Homepage with Categories
When User click the  "Corporate Gifts"
Then User check that the browser title contains "Corporate Gifts"
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