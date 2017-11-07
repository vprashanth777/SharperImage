#Author: prashanth.veldandi@valuelabs.com
@SIRegression @Mobile @VIP
Feature: VIP Feature Validation

  Scenario: VIP User popup validation in order thank you page
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    And User click the link contains "More Categories"
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
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Checkout as a guest"
    Then User check that the browser title contains "Payment"
    And User should enter valid card details
    When User Click the button "Place Order"
    Then User able to see below text on page
      | Thank You For Your Order! |
      | Your Order Number is      |
    Then User is able to see the order number
    And User able to see and validate the VIP popup
      | 20% Cash Back on all future purchases              |
      | Express checkout on future orders                  |
      | Exclusive email offers and pre-order opportunities |

  Scenario: Guest user convertion to VIP member
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    And User click the link contains "More Categories"
    When User click the  "Gadgets"
    Then User check that the browser title contains "Gadgets"
    When User select the "Price" with filter "100-150"
    When User selected the item from list
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 1
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
    Then User is able to see the order number
    And User able to see and validate the VIP popup
      | 20% Cash Back on all future purchases              |
      | Express checkout on future orders                  |
      | Exclusive email offers and pre-order opportunities |
    When User sign up for VIP "with" password
    When User click the "START SAVING NOW" VIP popup
    Then User able to see VIP thankyou pop up
      | THANK YOU FOR SIGNING UP FOR OUR VIP PROGRAM!                            |
      | Check your inbox for a welcome email with further details. See you soon! |
    When User is able to close VIP thankyou pop up
    And User refresh the page
    When User Click the button "navButton" by "id"
    And User logout from application
    Then User able to see the Homepage with Categories

  Scenario: Existing user convertion to VIP member
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    When User click the login
    Then User check that the browser title contains "Login"
    When User Click the Create an Account
    Then User check that the browser title contains "Register"
    When User enter First Name,Last Name,Email, Confirm Email ,Password,Confirm Password
      | TestFirst | TestLast | @gmail.com | same | Qwerty_1 | Qwerty_1 |  |
    Then User check that the browser title contains "My Account"
    When User click the  "For Her"
    Then User check that the browser title contains "For Her"
    When User selected the item from list
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 1
    Then Price need to update by Quantity
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Continue to payment"
    Then User check that the browser title contains "Payment"
    And User should enter valid card details
    When User Click the button "Place Order"
    Then User able to see below text on page
      | Thank You For Your Order! |
      | Your Order Number is      |
    Then User is able to see the order number
    And User able to see and validate the VIP popup
      | 20% Cash Back on all future purchases              |
      | Express checkout on future orders                  |
      | Exclusive email offers and pre-order opportunities |
    When User sign up for VIP "with" password
    When User click the "START SAVING NOW" VIP popup
    Then User able to see VIP thankyou pop up
      | THANK YOU FOR SIGNING UP FOR OUR VIP PROGRAM!                            |
      | Check your inbox for a welcome email with further details. See you soon! |
    When User is able to close VIP thankyou pop up
    And User refresh the page
    When User Click the button "navButton" by "id"
    And User logout from application
    Then User able to see the Homepage with Categories

Scenario: As a guest user checkout as member convertion to VIP
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
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test123@gmail.com
    When User enter the password
    And User enter the conform password
    When User Click the button "Create an Account & Continue"
    Then User check that the browser title contains "Payment"
    And User should enter valid card details
    When User Click the button "Place Order"
    Then User able to see below text on page
      | Thank You For Your Order! |
      | Your Order Number is      |
    Then User is able to see the order number
    And User able to see and validate the VIP popup
      | 20% Cash Back on all future purchases              |
      | Express checkout on future orders                  |
      | Exclusive email offers and pre-order opportunities |
    When User sign up for VIP "with" password
    When User click the "START SAVING NOW" VIP popup
    Then User able to see VIP thankyou pop up
      | THANK YOU FOR SIGNING UP FOR OUR VIP PROGRAM!                            |
      | Check your inbox for a welcome email with further details. See you soon! |
    When User is able to close VIP thankyou pop up
    And User refresh the page
    When User Click the button "navButton" by "id"
    And User logout from application
    Then User able to see the Homepage with Categories

  Scenario: Validate as guest login during checkout convertion to VIP
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    And User click the link contains "More Categories"
    When User click the  "For Her"
    Then User check that the browser title contains "For Her"
    When User selected the item from list
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    And User should able to see "Guest Checkout" radio button and must be set to "ON"
    And User should able to see "Returning Customer" radio button and must be set to "ON"
    And User should able to see the login fields
    When User enter login details and click login button
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Continue to payment"
    Then User check that the browser title contains "Payment"
    And User should enter valid card details
    When User Click the button "Place Order"
    Then User able to see below text on page
      | Thank You For Your Order! |
      | Your Order Number is      |
    Then User is able to see the order number
    And User able to see and validate the VIP popup
      | 20% Cash Back on all future purchases              |
      | Express checkout on future orders                  |
      | Exclusive email offers and pre-order opportunities |
    When User click the "close" VIP popup
    When User Click the button "navButton" by "id"
    And User logout from application
    Then User able to see the Homepage with Categories

   Scenario: VIP User profile drop  down
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    Given User login to the application as VIP user
    When User click the cart
    And User clear the cart items
    When User click the  "For Him"
    Then User check that the browser title contains "For Him"
    Then User able to see the VIP badge
    And User logout from application
    Then User able to see the Homepage with Categories



  Scenario: VIP - Thank you page for disclaimer and benefits through the email
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    And User click the link contains "More Categories"
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
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Checkout as a guest"
    Then User check that the browser title contains "Payment"
    And User should enter valid card details
    When User Click the button "Place Order"
    Then User able to see below text on page
      | Thank You For Your Order! |
      | Your Order Number is      |
    Then User is able to see the order number
    And User able to see and validate the VIP popup
      | 20% Cash Back on all future purchases              |
      | Express checkout on future orders                  |
      | Exclusive email offers and pre-order opportunities |
    When User sign up for VIP "with" password
    When User click the "START SAVING NOW" VIP popup
    Then User able to see VIP thankyou pop up
      | THANK YOU FOR SIGNING UP FOR OUR VIP PROGRAM!                            |
      | Check your inbox for a welcome email with further details. See you soon! |
    When User is able to close VIP thankyou pop up
    And User refresh the page
    When User Click the button "navButton" by "id"
    And User logout from application
    Then User able to see the Homepage with Categories
    Then User get the VIP welcome Email

    
    
Scenario: User validate double VIP cash back for an item which is eligible for cash back
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    Given User login to the application as VIP user
    When User click the cart
    And User clear the cart items
    When User Click the button "navButton" by "id"
    And User click the link contains "More Categories"
    When User click the  "Gadgets"
    Then User check that the browser title contains "Gadgets"
    When User select the "Price" with filter "100-150"
    When User selected the item from list
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 2
    Then Price need to update by Quantity
    Then User able to see below text on page
      | You Choose Your Savings! See Site Banner for Details.  |
      | Your Entire Order Qualifies for a 20% Cash Back coupon |
    Then User validated the VIP cashback
   
 	
Scenario: Existing user convertion to VIP member with wrong password
    Given User navigate to sharperimage website
     When User Click the button "navButton" by "id"
    When User click the login
    Then User check that the browser title contains "Login"
    When User Click the Create an Account
    Then User check that the browser title contains "Register"
    When User enter First Name,Last Name,Email, Confirm Email ,Password,Confirm Password
      | TestFirst | TestLast | @gmail.com | same | Qwerty_1 | Qwerty_1 |  |
    Then User check that the browser title contains "My Account"
    When User click the  "For Her"
    Then User check that the browser title contains "For Her"
    When User selected the item from list
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 1
    Then Price need to update by Quantity
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Continue to payment"
    Then User check that the browser title contains "Payment"
    And User should enter valid card details
    When User Click the button "Place Order"
    Then User able to see below text on page
      | Thank You For Your Order! |
      | Your Order Number is      |
    Then User is able to see the order number
    And User able to see and validate the VIP popup
      | 20% Cash Back on all future purchases              |
      | Express checkout on future orders                  |
      | Exclusive email offers and pre-order opportunities |
    When User sign up for VIP "wrong" password
    When User click the "START SAVING NOW" VIP popup
    Then User able to see below text on page
      | Oh no! Something went wrong! |
      | The password is incorrect    |
     When User is able to close VIP thankyou pop up
     When User Click the button "navButton" by "id"
    And User logout from application
    Then User able to see the Homepage with Categories  
    
     
  Scenario: Guest user convertion to VIP member able to login as VIP user
    Given User navigate to sharperimage website
     When User Click the button "navButton" by "id"
    And User click the link contains "More Categories"
    When User click the  "Gadgets"
    Then User check that the browser title contains "Gadgets"
    When User select the "Price" with filter "100-150"
    When User selected the item from list
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 1
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
    Then User is able to see the order number
    And User able to see and validate the VIP popup
      | 20% Cash Back on all future purchases              |
      | Express checkout on future orders                  |
      | Exclusive email offers and pre-order opportunities |
    When User sign up for VIP "with" password
    When User click the "START SAVING NOW" VIP popup
    Then User able to see VIP thankyou pop up
      | THANK YOU FOR SIGNING UP FOR OUR VIP PROGRAM!                            |
      | Check your inbox for a welcome email with further details. See you soon! |
    When User is able to close VIP thankyou pop up
    And User refresh the page
    Then User able to see the VIP badge
    When User Click the button "navButton" by "id"
    And User logout from application
  When User Click the button "navButton" by "id"
    When User click the login
    When User relogin to the application as VIP
    Then User check that the browser title contains "My Account"
    When User click the  "Gadgets"
    When User Click the button "navButton" by "id"
    Then User able to see the VIP badge
    And User logout from application
    Then User able to see the Homepage with Categories
    
    
  Scenario: VIP cash back message in PDP page
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    Given User login to the application as VIP user
    When User click the cart
    And User clear the cart items
    When User Click the button "navButton" by "id"
    And User click the link contains "More Categories"
    When User click the  "Gadgets"
    Then User check that the browser title contains "Gadgets"
    When User selected the item from list
    Then User able to see below text on page
      | VIP|
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 1
    Then Price need to update by Quantity
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Continue to payment"
    Then User check that the browser title contains "Payment"
    And User should enter valid card details
    When User Click the button "navButton" by "id"
    And User logout from application
    Then User able to see the Homepage with Categories
    
    
  Scenario: VIP - Badge and marketing content changes (front end) user side banner
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    Given User login to the application as VIP user
    Then User able to get side banner
    When User Click the button "navButton" by "id"
    And User logout from application
    Then User able to see the Homepage with Categories
    Then User should not able to see the VIP side banner
    When User Click the button "navButton" by "id"
    Given User login to the application
    Then User should not able to see the VIP side banner
    When User Click the button "navButton" by "id"
    And User logout from application
    Then User able to see the Homepage with Categories
    