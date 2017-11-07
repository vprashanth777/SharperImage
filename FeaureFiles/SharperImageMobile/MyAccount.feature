#Author: prashanth.veldandi@valuelabs.com
@SIRegression @Mobile    @Thread3
Feature: My account Page Validations(Desktop)

 @MyAccount
  Scenario: My account page validation(desktop)
    Given User navigate to sharperimage website
     When User Click the button "navButton" by "id"
    Given User login to the application with user
    Then User check that the browser title contains "My Account"
    Then User able to see below text on page
      | Change My Password  |
      | My Address Book     |
      | My Gift Certificate |
      | Order History       |
      | Returns History     |

    
  Scenario: User able to reset password My account page validation(desktop)
     Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    When User click the login
    Then User check that the browser title contains "Login"
    When User Click the Create an Account
    Then User check that the browser title contains "Register"
    When User enter First Name,Last Name,Email, Confirm Email ,Password,Confirm Password
      | TestFirst | TestLast | @gmail.com | same | Qwerty_1 | Qwerty_1 |  |
    Then User check that the browser title contains "My Account"
    When User click the  "Change My Password"
    And User changes old,New and confirm passwords
      | Qwerty_1 | Qwerty_2 | Qwerty_2 |                                                                                                          |                            |
    Then User check that the browser title contains "My Account"
    When User Click the button "navButton" by "id"
    Then User logout from application
    Then User check that the browser title contains "The Sharper Image - Official Site"
    When User click the login
    Then User check that the browser title contains "Login"
    When User relogin to the application
    Then User check that the browser title contains "My Account"
    When User Click the button "navButton" by "id"
    Then User logout from application  
    
  
  Scenario: User able to save address in My account page validation(desktop)
    Given User navigate to sharperimage website
  When User Click the button "navButton" by "id"
    When User click the login
    Then User check that the browser title contains "Login"
    When User Click the Create an Account
    Then User check that the browser title contains "Register"
    When User enter First Name,Last Name,Email, Confirm Email ,Password,Confirm Password
      | TestFirst | TestLast | @gmail.com | same | Qwerty_1 | Qwerty_1 |  |
    Then User check that the browser title contains "My Account"
    When User click the  "My Address Book"
    Then User check that the browser title contains "My Address Book"
    When User able to enter address
    Then User check that the browser title contains "My Account"
    When User Click the button "navButton" by "id"
    Then User logout from application
    Then User check that the browser title contains "The Sharper Image - Official Site"
  
  
  Scenario: My account page "My Gift Certificate balance" validation(desktop)
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    Given User login to the application with user
    Then User check that the browser title contains "My Account"
    When User click the  My Gift Certificate
    Then User able to see below text on page
      | Gift Certificate/Cash Back Balance |
      | Get Balance Right Now              |
      | Get Balance By Email               |
    When User enter "invalid" giftcard
    And User Click the button "Check Balance" by "Text"
    Then User able to see below text on page
      | Please check your number and try again       |
      | 3286216869860747 is not a valid certificate. |
    When User enter "valid" giftcard
    And User Click the button "Check Balance" by "Text"
    Then User should able to see the gift card balance
    When User Click the button "navButton" by "id"
    Then User logout from application
    Then User check that the browser title contains "The Sharper Image - Official Site"
  
  Scenario: My account page "Order Tracking" validation(desktop)
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    Given User login to the application with user
    Then User check that the browser title contains "My Account"
    When User click the  "Order History"
    Then User check that the browser title contains "Order Tracking"
    And User able to see below text on page
      | Order Tracking and Online Return Center                              |
    When User is able to see and click the order
    Then User able to see below text on page
      | Order Tracking and Online Return Center                                     |
      | The information below shows your order number, order date and order status. |
    Then User able to see the Order details
    When User Click the button "navButton" by "id"
    Then User logout from application
    Then User check that the browser title contains "The Sharper Image - Official Site"
  
  
  Scenario: My account page "Returns History" validation(desktop)
    Given User navigate to sharperimage website
   When User Click the button "navButton" by "id"
    Given User login to the application with user
    Then User check that the browser title contains "My Account"
    When User click the  "Returns History"
    Then User check that the browser title contains "Order Tracking"
    And User able to see below text on page
      | Order Tracking and Online Return Center |
    When User Click the button "My Sharper Image Account" by "text"
    When User is able to see and click the order
    Then User able to see below text on page
      | Order Tracking and Online Return Center                                     |
      | The information below shows your order number, order date and order status. |
    Then User able to see the Order details
    When User Click the button "navButton" by "id"
    Then User logout from application
    Then User check that the browser title contains "The Sharper Image - Official Site"
  