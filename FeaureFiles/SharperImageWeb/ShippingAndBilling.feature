#Author: prashanth.veldandi@valuelabs.com(QA11)
@SIRegression @Desktop @shopping @Thread1
Feature: Validate Shipping and Billing Page(Desktop)

  @shopping
  Scenario: Validate Shipping and Billing Page as guest with and without shipping Address(Desktop)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "For Her"
    Then User check that the browser title contains "For Her"
    When User selected the item from list
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    When User Click the button "Checkout as a guest"
    Then User check that the browser title contains "Shipping Billing"
    Then User able to see below text on page
      | Please see fields below that need to be corrected.                |
      | Please enter a First Name                                         |
      | Please enter a Last Name                                          |
      | Please enter Street Address                                       |
      | Please enter your City                                            |
      | Please choose your State                                          |
      | Please enter your Zip/Postal code                                 |
      | Please enter a valid phone number.                                |
      | Your email address is required for order & shipping notifications |
      | There are errors in the form.                                     |
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Checkout as a guest"
    Then User check that the browser title contains "Payment"
    Then User able to see below text on page
      | Shipping Address |
      | Billing Address  |
      | Shipping Method  |

  Scenario: Validate Shipping and Billing Page as guest with different shipping and billing  Address(Desktop)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "For Her"
    Then User check that the browser title contains "For Her"
    When User selected the item from list
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    When User choose the option "No, the address on record with my credit card is different" in the Billing
    When User Click the button "Checkout as a guest"
    Then User check that the browser title contains "Shipping Billing"
    Then User able to see below text on page
      | Please see fields below that need to be corrected.                |
      | Please enter a First Name                                         |
      | Please enter a Last Name                                          |
      | Please enter Street Address                                       |
      | Please enter your City                                            |
      | Please choose your State                                          |
      | Please enter your Zip/Postal code                                 |
      | Please enter a valid phone number.                                |
      | Your email address is required for order & shipping notifications |
      | There are errors in the form.                                     |
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User choose the option "No, the address on record with my credit card is different" in the Billing
    Then User should enter Mandatory fields like first,last,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test123@gmail.com
    When User Click the button "Checkout as a guest"
    Then User check that the browser title contains "Payment"
    Then User able to see below text on page
      | Shipping Address |
      | Billing Address  |
      | Shipping Method  |
      | firstname        |
      | lastname         |
      | first            |
      | last             |

  @shopping @P2
  Scenario: Validate Shipping and Billing Page as guest with and without shipping Address(Desktop) with user login
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
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
    Then User should not enter Mandatory fields
    When User Click the button "Continue to payment"
    Then User able to see below text on page
      | Please enter a First Name          |
      | Please enter a Last Name           |
      | Please enter Street Address        |
      | Please enter your City             |
      | Please choose your State           |
      | Please enter your Zip/Postal code  |
      | Please enter a valid phone number. |
      | There are errors in the form.      |
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Continue to payment"
    Then User check that the browser title contains "Payment"
    Then User able to see below text on page
      | Shipping Address |
      | Billing Address  |
      | Shipping Method  |

  @shopping
  Scenario: Come to shipping & billing page as a guest user and login as member from shipping & billing page and fill the form with option the address on record with my credit card is different and continue to payment as member (desktop)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
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
    Then User should not enter Mandatory fields
    When User choose the option "No, the address on record with my credit card is different" in the Billing
    When User Click the button "Continue to payment"
    Then User check that the browser title contains "Shipping Billing"
    Then User able to see below text on page
      | Please see fields below that need to be corrected. |
      | Please enter a First Name                          |
      | Please enter a Last Name                           |
      | Please enter Street Address                        |
      | Please enter your City                             |
      | Please choose your State                           |
      | Please enter your Zip/Postal code                  |
      | Please enter a valid phone number.                 |
      | There are errors in the form.                      |
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User choose the option "No, the address on record with my credit card is different" in the Billing
    Then User should enter Mandatory fields like first,last,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test123@gmail.com
    When User Click the button "Continue to payment"
    Then User check that the browser title contains "Payment"
    Then User able to see below text on page
      | Shipping Address |
      | Billing Address  |
      | Shipping Method  |
      | firstname        |
      | lastname         |
      | first            |
      | last             |

  @shopping
  Scenario: Come to shipping & billing page as member and fill the form with option billing address is the same as the shipping address and continue to payment as member (desktop)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    Given User login to the application
    When User click the cart
    And User clear the cart items
    When User click the  "Electronics" and "Speakers"
    Then User check that the browser title contains "Speakers"
    When User click the  "Wireless TV Speaker"
    Then User check that the browser title contains "Wireless TV Speaker"
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 2
    Then Price need to update by Quantity
    And User should able to choose Shipping Options
    When User Click the button "Checkout"
    When User choose the option "Yes, my BILLING address is the same as the shipping address" in the Billing
    Then User check that the browser title contains "Shipping Billing"
    When User Click the button "Continue to payment"
    Then User check that the browser title contains "Payment"
    Then User able to see below text on page
      | Shipping Address |
      | Billing Address  |
      | Shipping Method  |
    And User logout from application
    Then User able to see the Homepage with Categories

  @shopping
  Scenario: Come to shipping & billing page as member and fill the form with option the address on record with my credit card is different and continue to payment as member (desktop)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    Given User login to the application
    When User click the cart
    And User clear the cart items
    When User click the  "Electronics" and "Speakers"
    Then User check that the browser title contains "Speakers"
    When User click the  "Wireless TV Speaker"
    Then User check that the browser title contains "Wireless TV Speaker"
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 2
    Then Price need to update by Quantity
    When User Click the button "Checkout"
    When User choose the option "No, the address on record with my credit card is different" in the Billing
    Then User should enter Mandatory fields like first,last,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test123@gmail.com
    Then User check that the browser title contains "Shipping Billing"
    When User Click the button "Continue to payment"
    Then User check that the browser title contains "Payment"
    Then User able to see below text on page
      | Shipping Address |
      | Billing Address  |
      | Shipping Method  |
    And User logout from application
    Then User able to see the Homepage with Categories

  @shopping
  Scenario: Come to shipping & billing page as a guest user and fill the form with the option the address on record with my credit card is different and checkout as member (desktop,ND-2218)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Electronics" and "Speakers"
    Then User check that the browser title contains "Speakers"
    When User click the  "Wireless TV Speaker"
    Then User check that the browser title contains "Wireless TV Speaker"
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 2
    Then Price need to update by Quantity
    When User Click the button "Checkout"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test123@gmail.com
    When User choose the option "No, the address on record with my credit card is different" in the Billing
    Then User should enter Mandatory fields like first,last,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test123@gmail.com
    When User enter the password
    And User enter the conform password
    When User Click the button "Create an Account & Continue"
    Then User check that the browser title contains "Payment"
    And User should enter valid card details
    When User Click the button "Place Order"
    Then User must login automatically
    And User logout from application
    Then User able to see the Homepage with Categories

  @shopping
  Scenario: Come to shipping & billing page as a guest user and fill the form with option billing address is the same as the shipping address and checkout as member (desktop,ND-2218)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Electronics" and "Speakers"
    Then User check that the browser title contains "Speakers"
    When User click the  "Wireless TV Speaker"
    Then User check that the browser title contains "Wireless TV Speaker"
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
    Then User must login automatically
    And User logout from application
    Then User able to see the Homepage with Categories
