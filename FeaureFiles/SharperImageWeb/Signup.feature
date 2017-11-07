#Author: prashanth.veldandi@valuelabs.com(QA 20)
@SIRegression @Desktop   @Signup @Thread3
Feature: Signup account Validations(Desktop)

  @Signup
  Scenario: Signup account (desktop)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the login
    Then User check that the browser title contains "Login"
    When User Click the Create an Account
    Then User check that the browser title contains "Register"
    When User enter First Name,Last Name,Email, Confirm Email ,Password,Confirm Password
      | TestFirst | TestLast | @gmail.com | same | Qwerty_1 | Qwerty_1 |  |
    Then User check that the browser title contains "My Account"
    Then User logout from application
    Then User check that the browser title contains "The Sharper Image - Official Site"
    When User click the login
    Then User check that the browser title contains "Login"
    When User Click the Create an Account
    Then User check that the browser title contains "Register"
    When User enter First Name,Last Name,Email, Confirm Email ,Password,Confirm Password
      | TestFirst | TestLast | @gmail.com | different | Qwerty_1 | Qwerty_1 | Please enter your confirm email address as your login |
      | TestFirst | TestLast | @gmail.com | same      | Qwerty_1 | Qwerty_2 | Password and Confirm Password values must match       |
      | TestFirst | TestLast | @gmail.com | same      | Qwe      | Qwe      | Password must be six characters long                  |


  Scenario: login account (desktop)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    Given User login to the application
    Then User logout from application
    When User click the login
    Then User check that the browser title contains "Login"
    When User Click the button "Sign In To My Account"
    Then User able to see below text on page
      | Please enter valid login ID |
      | Please enter password       |
    When User enter invalid user credentials
    And User Click the button "Sign In To My Account"
    Then User able to see below text on page
      | The entered username or password is invalid |

  Scenario: User wants to change his/her password and login with new password successfully (desktop)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the login
    Then User check that the browser title contains "Login"
    When User Click the Create an Account
    Then User check that the browser title contains "Register"
    When User enter First Name,Last Name,Email, Confirm Email ,Password,Confirm Password
      | TestFirst | TestLast | @gmail.com | same | Qwerty_1 | Qwerty_1 |  |
    Then User check that the browser title contains "My Account"
    When User click the  "Change My Password"
    And User changes old,New and confirm passwords
      |          |          |          | Please enter your old password                                                                           | Please enter your password |
      | Qwerty   | Qwerty_2 | Qwerty_2 | Password not updated. The supplied original password does not match the current password in the profile. |                            |
      |          | Qwerty_2 | Qwerty_2 | Please enter your old password                                                                           |                            |
      | Qwerty_1 | Qwerty_2 |          | Password and Confirm Password values must match                                                          |                            |
      | Qwerty_1 |          | Qwerty_2 | Please enter your password                                                                               |                            |
      | Qwerty_1 | Qwerty_3 | Qwerty_2 | Password and Confirm Password values must match                                                          |                            |
      | Qwerty_1 | Qwerty_1 | Qwerty_1 | The new password is the same as the old password                                                         |                            |
      | Qwerty_1 | Qwe     | Qwe     | Password must be six characters long                                                                     |                            |
      | Qwerty_1 | Qwerty_2 | Qwerty_2 |                                                                                                          |                            |
    Then User check that the browser title contains "My Account"
    Then User logout from application
    Then User check that the browser title contains "The Sharper Image - Official Site"
    When User click the login
    Then User check that the browser title contains "Login"
    When User relogin to the application
    Then User check that the browser title contains "My Account"
    Then User logout from application
    
    @P2
    Scenario: User forgets his/her password to login and users forgot password feature to get new password and performs successful login with new password (desktop)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the login
    Then User check that the browser title contains "Login"
    When User Click the Create an Account
    Then User check that the browser title contains "Register"
    When User enter First Name,Last Name,Email, Confirm Email ,Password,Confirm Password
      | TestFirst | TestLast | @mailinator.com | same | Qwerty_1 | Qwerty_1 |  |
    Then User check that the browser title contains "My Account"
    Then User logout from application
    Then User check that the browser title contains "The Sharper Image - Official Site"
    When User click the login
    Then User check that the browser title contains "Login"
    When User click the  "Forgot Your Password?"
    Then User check that the browser title contains "Forgot Password"
    And User enter Email
    When User Click the button "Send"
    Then User able to see below text on page
      | New password generated                                                                                    |
      | The new password has been sent to your email address. You must change the generated password after login. |
    When User click the  "Login"
    Then User check that the browser title contains "Login"
    When User get the reset password
    #And User click the login link
		#Given User navigate to sharperimage website
		Then User able to see the Homepage with Categories
    When User click the login
    Then User check that the browser title contains "Login"
    When User enter login with reset password
    Then User check that the browser title contains "Change Password"
    When User reset password
    And User Click the button "Submit"
    Then User check that the browser title contains "My Account"
    Then User logout from application
    
    
 Scenario: Existing user trying to create account(desktop)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the login
    Then User check that the browser title contains "Login"
    When User Click the Create an Account
    Then User check that the browser title contains "Register"
    When User enter First Name,Last Name,Email, Confirm Email ,Password,Confirm Password
      | TestFirst | TestLast | @gmail.com | same | Qwerty_1 | Qwerty_1 |  |
    Then User check that the browser title contains "My Account"
    Then User logout from application
    Then User check that the browser title contains "The Sharper Image - Official Site"
    When User click the login
    Then User check that the browser title contains "Login"
    When User Click the Create an Account
    Then User check that the browser title contains "Register"
    When User enter First Name,Last Name,Email, Confirm Email ,Password,Confirm Password
      | TestFirst | TestLast | relogin | same | Qwerty_1 | Qwerty_1 | A user already exists with the login |
    
