#Author: prashanth
Feature: VIP Program 2017

@ND2201
  Scenario: User validate VIP member content
    Given User navigate to SharperImage web
    When User login as VIP member
    Then user should able to see VIP specific content on below pages
      | My account Page |
      | Payment Page    |
      | Shopping cart   |
      |product detail page|
    And user should able to see the  below information on my account page
      | Cash Back certificate number |
      | Cash Back balance            |
      | Cash Back expiration date    |

  Scenario: User validate not VIP member content
    Given User navigate to SharperImage web
    When User login as  member
    Then user should not able to see VIP specific content on below pages
      | My account Page |
      | Payment Page    |
      | Shopping cart   |

      Scenario: User validate not VIP member content  ***
    Given User navigate to SharperImage web
    When User login as  VIP member
    Then User must able to see  list all benefits of a VIP member
    
   @ND-2205
   Scenario: VIP - auto cashback gift certs email and generation after order conformation
   Given User navigate to SharperImage web
    And User login as VIP member
    When User add an item  to the cart
    And User enter shipping address and payment details
    When User place the order
    Then User navigated to Thank you page
    Then User should not able to get cask back cert before shipping conformed
    
    Scenario: VIP - auto cashback gift certs email and generation after shipping confirmation
     Given User navigate to SharperImage web
    And User login as VIP member
    When User add an item  to the cart
    And User enter shipping address and payment details
    When User place the order
    Then User navigated to Thank you page
    When Shippling the order is conformed user should get an email with cash back cert
    
    Scenario: VIP - auto cashback gift certs email and generation after shipping confirmation and return
     Given User navigate to SharperImage web
    And User login as VIP member
    When User add an item  to the cart
    And User enter shipping address and payment details
    When User place the order
    Then User navigated to Thank you page
    When Shippling the order is conformed user should get an email with cash back cert
    
    Scenario: VIP -  cancelled the complete order after auto cashback gift certs email and generation 
     Given User navigate to SharperImage web
    And User login as VIP member
    When User add an item  to the cart
    And User enter shipping address and payment details
    When User place the order
    Then User navigated to Thank you page
    When Shippling the order is conformed user should get an email with cash back cert
    When User cancelled the complete order
    Then user should not able to use cash back cert 
    
    
     Scenario: VIP -  cancelled the complete order after auto cashback gift certs email and generation 
     Given User navigate to SharperImage web
    And User login as VIP member
    When User add an item  to the cart
    And User enter shipping address and payment details
    When User place the order
    Then User navigated to Thank you page
    When Shippling the order is conformed user should get an email with cash back cert
    When User cancelled the one item in  order
    Then cash back cert amout reduce as per cost of cancelled item
   
   
    Scenario: VIP - auto cashback gift certs prefix on email and generation after shipping confirmation and return
     Given User navigate to SharperImage web
    And User login as VIP member
    When User add an item  to the cart
    And User enter shipping address and payment details
    When User place the order
    Then User navigated to Thank you page
    When Shippling the order is conformed user should get an email with cash back cert with pre fix "***"
    
    @ND2206
    Scenario:VIP - Badge and marketing content changes (front end) user side banner
    Given User navigate to SharperImage web
    When User login as VIP member
    Then user able to see marketing sitewide banners should be configurable separate from non-VIP banners
    
     Scenario: Non VIP - Badge and marketing content changes (front end) user side banner
    Given User navigate to SharperImage web
    When User login as non VIP member
    Then user able not able see marketing sitewide banners for VIP user
    
    
    Scenario: VIP User prodcut detail page ***
    Given User navigate to SharperImage web
    When User login as VIP member
    And User add an item to cart
    Then User should able to see the product details page
    And user is able to see sitewide marketing message on product detail pages (right below price, call out cashback as vip benefit in gold and meeple)
    
    Scenario: VIP User Payment page
     Given User navigate to SharperImage web
    And User login as VIP member
    When User add an item  to the cart
    And User enter shipping address and payment details
    Then User is able to see sitewide cart message on cash back message using gold color coding and meeple icon at existing promotion message where the benefit is
    
    Scenario: VIP User profile dropdown
     Given User navigate to SharperImage web
     When user click the login icon
     Then User should able to see the "VIP Member - Active" along with login,track order and return center
     
     @ND-2210
     Scenario: Existing user convertion to VIP
    Given User navigate to SharperImage web
    And User login as  member
    When User add an item  to the cart
    And User enter shipping address and payment details
    When User place the order
    Then application reach to order page(thank you)
    Then Application should throw an  popup/ slide open invitation  on the Thank You page
    And Customer will see a list of benefits and be invited to join so that they can be enrolled in the future
     
     Scenario: Guest user convertion to VIP
    Given User navigate to SharperImage web
    When User add an item  to the cart
    And User enter shipping address and payment details as guest
    When User place the order
    Then application reach to order page(thank you)
    Then Application should throw an  popup/ slide open on invitation  the Thank You page
    And Customer will see a list of benefits and be invited to join so that they can be enrolled in the future
    
     Scenario: Existing user convertion to VIP experiance 
    Given User navigate to SharperImage web
    And User login as  member
    When User add an item  to the cart
    And User enter shipping address and payment details
    When User place the order
    Then application reach to order page(thank you)
    Then Application should throw an  popup/ slide open invitation  on the Thank You page
    And Customer will see a list of benefits and be invited to join so that they can be enrolled in the future
    Then User email id need to be autopopulate
    When user enter existing password(4 digit) 
		And when user select change account's VIP flag to 'yes'
		And click OK
    Then User will convert to VIP member
    
      Scenario: Guest user convertion to VIP experiance
    Given User navigate to SharperImage web
    When User add an item  to the cart
    And User enter shipping address and payment details as guest
    When User place the order
    Then application reach to order page(thank you)
    Then Application should throw an  popup/ slide open on invitation  the Thank You page
    And Customer will see a list of benefits and be invited to join so that they can be enrolled in the future
    When User nee to enter (email id not to  autopopulate)
    When user enter password(4 digit) and accept
    And when user select "create the account"
		When click OK
    Then User will convert to VIP member
    
    @ND-2198
  Scenario: VIP - new CMS page for disclaimer and benefits (front end)
   Given User navigate to SharperImage web
    And User login as VIP member
    When User add an item (Which is not eligibile for cash back,price is less <100$) to the cart
    And User enter shipping address and payment details
    Then User should able to see the cash back amount while payment
    And User place the order
    Then application reach to order page(thank you)
    And User should get the 10% cash back once item got shipped

  Scenario: User validate double VIP cash back for an item which is  eligibile for cash back
    Given User navigate to SharperImage web
    And User login as VIP member
    When User add an item (Which is  eligibile for cash back) to the cart
    And User enter shipping address and payment details
    Then User should able to see the cash back amount while payment
    And User place the order
    Then application reach to order page(thank you)
    And User should get the 20% cash back once item got shipped
    
    Scenario: User utilize the VIP cash back amount
    Given User navigate to sharperimage website
    When User selected the item from list
    And User added an item to the cart
    Then User check that the browser title contains "Shopping Cart"
    When User Apply the cash back
    Then User able to see the cash back was applied to the item price
    Then User able to apply only one cash back

  Scenario: Existing user convertion to VIP
    Given User navigate to SharperImage web
    And User login as VIP member
    When User add an item  to the cart
    And User enter shipping address and payment details
    When User place the order
    Then application reach to order page(thank you)
    Then Application should throw an  popup on the Thank You page
    And Customer will see a list of benefits and be invited to join so that they can be enrolled in the future
    
      Scenario: User validate VIP cash back for an item previous order
    Given User navigate to SharperImage web
    And User login as  member
    When User add an item to the cart
    And User enter shipping address and payment details
    Then User should able to see the cash back amount while payment
    And User place the order
    Then application reach to order page(thank you)
    When User accept the pop up for VIP member
    And user convert to VIP member
    And User should not get the VIP cash back on previous and present order items
    Then User should able see an message when he is tring to modify current order items for VIP cash back
    
      Scenario: User validate not VIP member content
    Given User navigate to SharperImage web
    When User login as  VIP member
    Then User must able to see  list all benefits of a VIP member
    