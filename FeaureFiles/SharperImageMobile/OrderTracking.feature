#Author: prashanth.veldandi@valuelabs.com(QA3)

@SIRegression @Mobile @Order
Feature: Sharper Image Order validation (Mobile)

 Scenario: User arriving at order tracking options page (Mobile) QA41
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    When User click the Return Center
    Then User check that the browser title contains "Order Tracking"
    And User able to see below text on page
      | Order Tracking and Online Return Center                              |
      | Tracking and returning your Sharper Image orders is simple and easy! |
    And User should able to see below buttons
      | My Sharper Image Account           |
      | Email and Shipping Zip Code        |
      | Order Number and Shipping Zip Code |
      | Phone Number and Shipping Zip Code |

      
  Scenario: As a guest user track orders using sharper image account (Mobile)QA42
    Given User navigate to sharperimage website
       When User Click the button "navButton" by "id"
    When User click the Return Center
    Then User check that the browser title contains "Order Tracking"
    And User able to see below text on page
      | Order Tracking and Online Return Center                              |
      | Tracking and returning your Sharper Image orders is simple and easy! |
    When User Click the button "My Sharper Image Account" by "text"
    Then User should enter  details for Order search
      |  |  |
    When User Click the button "Find My Orders" by "text"
    Then User able to see below text on page
      | Please enter valid login ID |
    Then User should enter  details for Order search
     | ORDEREMAIL | ORDERPASSWORD |
    When User Click the button "Find My Orders" by "text"
    Then User able to see below text on page
      | Order Tracking and Online Return Center                                     |
      | The information below shows your order number, order date and order status. |
    When User is able to see and click the order
    Then User able to see the Order details
    When User Click the button "navButton" by "id"
    And User logout from application
    
    
     Scenario: As a login member track orders using sharper image account (Mobile-QA 43)
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    Given User login to the application as order user
    When User click the Return Center
    Then User check that the browser title contains "Order Tracking"
    And User able to see below text on page
      | Order Tracking and Online Return Center                              |
      | Tracking and returning your Sharper Image orders is simple and easy! |
    When User Click the button "My Sharper Image Account" by "text"
    Then User able to see below text on page
      | Order Tracking and Online Return Center                                     |
      | The information below shows your order number, order date and order status. |
    When User is able to see and click the order
    Then User able to see the Order details
    When User Click the button "navButton" by "id"
    And User logout from application
  
  @P1
  Scenario: Track orders using email and shipping zip code as guest user or login member (Mobile QA-44)
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    When User click the Return Center
    Then User check that the browser title contains "Order Tracking"
    And User able to see below text on page
      | Order Tracking and Online Return Center                              |
      | Tracking and returning your Sharper Image orders is simple and easy! |
    When User Click the button "Email and Shipping Zip Code" by "text"
    Then User should enter  details for Order search
      |  EMAIL|  |
    When User Click the button "Find My Orders" by "text"
    Then User able to see below text on page
      | Please check email address and zip code for accuracy. |
    Then User should enter  details for Order search
    | ORDEREMAIL | OrderZIPCODE |
    When User Click the button "Find My Orders" by "text"
    Then User able to see below text on page
      | Order Tracking and Online Return Center                                     |
      | The information below shows your order number, order date and order status. |
    When User is able to see and click the order
    Then User able to see the Order details
  
   
  Scenario: Track orders using order number and shipping zip code as guest user or login member(Mobile QA-45)
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
   When User click the Return Center
    Then User check that the browser title contains "Order Tracking"
    And User able to see below text on page
      | Order Tracking and Online Return Center                              |
      | Tracking and returning your Sharper Image orders is simple and easy! |
    When User Click the button "Email and Shipping Zip Code" by "text"
    Then User should enter  details for Order search
      | ORDEREMAIL | OrderZIPCODE |
    When User Click the button "Find My Orders" by "text"
    When User is able to see and click the order
    Then User able to see the Order details
    When User Click the button "Order Number and Shipping Zip Code" by "text"
    Then User should enter  details for Order search
      | Order |  |
    When User Click the button "Find My Orders" by "text"
    Then User able to see below text on page
      | Please check order number and zip code for accuracy. |
    Then User should enter  details for Order search
      | Order | OrderZIPCODE |
    When User Click the button "Find My Orders" by "text"
    Then User able to see below text on page
      | Order Tracking and Online Return Center                                     |
      | The information below shows your order number, order date and order status. |
    When User is able to see and click the order
    Then User able to see the Order details
  
  
  
  Scenario: Track orders using phone number and shipping zip code as guest user or login member(Mobile QA-45)
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
   When User click the Return Center
    Then User check that the browser title contains "Order Tracking"
    And User able to see below text on page
      | Order Tracking and Online Return Center                              |
      | Tracking and returning your Sharper Image orders is simple and easy! |
    When User Click the button "Phone Number and Shipping Zip Code" by "text"
    Then User should enter  details for Order search
      | PHONE |  |
    When User Click the button "Find My Orders" by "text"
    Then User able to see below text on page
      | Please check phone number and zip code for accuracy |
    Then User should enter  details for Order search
     | ORDERPHONENUMBER | ORDERZIPCODE |
    When User Click the button "Find My Orders" by "text"
    When User is able to see and click the order
    Then User able to see the Order details
  
    Scenario: Order tracking as login member (Mobile) (QA51)
    Given User navigate to sharperimage website
  When User Click the button "navButton" by "id"
    Given User login to the application as order user
    When User click the Track Order
    Then User check that the browser title contains "Order Tracking"
     And User able to see below text on page
      | Order Tracking and Online Return Center                              |
      | Tracking and returning your Sharper Image orders is simple and easy! |
    And User should able to see below buttons
      | My Sharper Image Account           |
      | Email and Shipping Zip Code        |
      | Order Number and Shipping Zip Code |
      | Phone Number and Shipping Zip Code |
    When User Click the button "navButton" by "id"
    And User logout from application
  
  
    Scenario: Order tracking from my account as login member (Mobile) QA52
    Given User navigate to sharperimage website
   When User Click the button "navButton" by "id"
   Given User login to the application as order user
    When User click the My Account
    Then User check that the browser title contains "My Account"
   When User click the Track Order in my account
    Then User check that the browser title contains "Order Tracking"
    And User able to see below text on page
      | Order Tracking and Online Return Center                              |
      | Tracking and returning your Sharper Image orders is simple and easy! |
    And User should able to see below buttons
      | My Sharper Image Account           |
      | Email and Shipping Zip Code        |
      | Order Number and Shipping Zip Code |
      | Phone Number and Shipping Zip Code |
    When User Click the button "navButton" by "id"
    And User logout from application
    
    
      Scenario: Order tracking as login member from footer (desktop) (Desktop-QA49)
    Given User navigate to sharperimage website
    When User Click the "Customer Service" by "dropdown"
    When User click the  "Track Order"
    Then User check that the browser title contains "Order Tracking"
    And User able to see below text on page
      | Order Tracking and Online Return Center |
    And User should able to see below buttons
      | My Sharper Image Account           |
      | Email and Shipping Zip Code        |
      | Order Number and Shipping Zip Code |
      | Phone Number and Shipping Zip Code |
      
      
   @ignore 
   Scenario: Order tracking as guest user with Email and password (Mobile)
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    When User click the Track Order
    Then User check that the browser title contains "Order Tracking"
    And User able to see below text on page
      | Order Tracking              |
      | Tracking your order is easy |
    Then User should not enter  details for "Sharper Image Account"
    When User Click the button "Sign In To My Account"
    Then User able to see below text on page
      | Please enter valid login ID |
      | Please enter password       |
    When User Click the button "navButton" by "id"
    When User click the Track Order
    Then User should enter  details for "Sharper Image Account"
    When User Click the button "Sign In To My Account"
    Then User able to see below text on page
      | Order History and Tracking                                                                                           |
      | Below is your order history. The information below shows your order date, order number, ship date, and order status. |
    When User is able to see and click the order as user
    Then User is able to see the order details page open in next window
    Then User able to see the Order details
    When User close child window and switch back to main window
    When User Click the button "navButton" by "id"
    And User logout from application
    
    @ignore
    Scenario: As a guest user come to order tracking options page with OrderNumber and ZIPcode (Mobile)
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    When User click the Track Order
    Then User check that the browser title contains "Order Tracking"
    And User able to see below text on page
      | Order Tracking              |
      | Tracking your order is easy |
    Then User should not enter  details for "Email Address and Zip Code"
    When User Click the button "Use My Email Address" by "text"
    Then User able to see below text on page
      | Please check the zip code and email address for accuracy. |
    When User Click the button "navButton" by "id"
    When User click the Track Order
    Then User should enter  details for "Email Address and Zip Code"
    When User Click the button "Use My Email Address" by "text"
    Then User able to see below text on page
      | Order History and Tracking                                                                                           |
      | Below is your order history. The information below shows your order date, order number, ship date, and order status. |
    When User is able to see and click the order as user
    Then User is able to see the order details page open in next window
    Then User able to see the Order details
    When User close child window and switch back to main window
    When User Click the button "navButton" by "id"
    When User click the Track Order
    Then User check that the browser title contains "Order Tracking"
    Then User should not enter  details for "Order Number and Zip Code"
    When User Click the button "Use My Order Number" by "text"
    Then User able to see below text on page
      | Please check the zip code and order number for accuracy. |
    Then User should enter  details for "Order Number and Zip Code"
    When User Click the button "Use My Order Number" by "text"
    Then User able to see below text on page
      | Order Detail |
    Then User able to see the Order details
    
    @ignore
  Scenario:   User is able to get InComplete order number with Single Item (Desktop)QA65
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    And User click the link contains "More Categories"
    When User click the  "Gadgets"
    Then User check that the browser title contains "Gadgets"
    When User click the link contains "Smartphone Photo Printer"
    Then User check that the browser title contains "Smartphone Photo Printer"
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 1
        When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Checkout as a guest"
    When User click the Track Order
    Then User check that the browser title contains "Order Tracking"
    And User able to see below text on page
      | Order Tracking              |
      | Tracking your order is easy |
    Then User should enter  details for Email and Zip Code
    When User Click the button "Use My Email Address" by "text"
    Then User able to see below text on page
      | Order History and Tracking                                                                                           |
      | Below is your order history. The information below shows your order date, order number, ship date, and order status. |
    When User is able to see and click the order as user
    Then User is able to see the order details page open in next window
    Then User able to see the Order details
     And User able to see below text on page
     |Smartphone Photo Printer|
    When User close child window and switch back to main window
       @ignore
  Scenario:   User is able to get InComplete order number with Multiple Items(Desktop)QA65
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    And User click the link contains "More Categories"
    When User click the  "Gadgets"
    Then User check that the browser title contains "Gadgets"
    When User click the link contains "Smartphone Photo Printer"
    Then User check that the browser title contains "Smartphone Photo Printer"
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User should select quantity as 1
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
    When User click the Track Order
    Then User check that the browser title contains "Order Tracking"
    And User able to see below text on page
      | Order Tracking              |
      | Tracking your order is easy |
    Then User should enter  details for Email and Zip Code
    When User Click the button "Use My Email Address" by "text"
    Then User able to see below text on page
      | Order History and Tracking                                                                                           |
      | Below is your order history. The information below shows your order date, order number, ship date, and order status. |
    When User is able to see and click the order as user
    Then User is able to see the order details page open in next window
    Then User able to see the Order details
     And User able to see below text on page
     |Smartphone Photo Printer|
    When User close child window and switch back to main window
    
    Scenario: Guest User not able see the in complete orders
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    When User click the Return Center
    Then User check that the browser title contains "Order Tracking"
    And User able to see below text on page
      | Order Tracking and Online Return Center                              |
      | Tracking and returning your Sharper Image orders is simple and easy! |
    When User Click the button "My Sharper Image Account" by "text"
    Then User should enter  details for Order search
      | ORDEREMAIL | ORDERPASSWORD |
    When User Click the button "Find My Orders" by "text"
    Then User is not able to seethe incomplete order

  Scenario: User not able to see the  in complete orders in order history in my account page
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    Given User login to the application as order user
    When User click the My Account
    Then User check that the browser title contains "My Account"
    When User click the Track Order in my account
    Then User check that the browser title contains "Order Tracking"
    When User Click the button "My Sharper Image Account" by "text"
    Then User is not able to seethe incomplete order

    Scenario: User not able to see the  in complete orders in order  from order tracking
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    When User click the Track Order
    Then User check that the browser title contains "Order Tracking"
    When User Click the button "Email and Shipping Zip Code" by "text"
    Then User should enter  details for Order search
      | ORDEREMAIL | OrderZIPCODE |
    When User Click the button "Find My Orders" by "text"
    Then User is not able to seethe incomplete order
   
     Scenario: User not able to see the  in complete orders in order  from order tracking
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    When User click the Return Center
    Then User check that the browser title contains "Order Tracking"
    When User Click the button "Email and Shipping Zip Code" by "text"
    Then User should enter  details for Order search
      | ORDEREMAIL | OrderZIPCODE |
    When User Click the button "Find My Orders" by "text"
    Then User is not able to seethe incomplete order
   
   Scenario: User is able to get InComplete order number with Single Item
    Given User navigate to sharperimage website
    When User Click the button "navButton" by "id"
    And User click the link contains "More Categories"
    When User click the  "Gadgets"
    Then User check that the browser title contains "Gadgets"
    When User click the link contains "Smartphone Photo Printer"
    Then User check that the browser title contains "Smartphone Photo Printer"
    When User Click the button "Add To Cart"
    Then User check that the browser title contains "Shopping Cart"
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Checkout as a guest"
    When User Click the button "navButton" by "id"
    When User click the Track Order
    Then User check that the browser title contains "Order Tracking"
    When User Click the button "Email and Shipping Zip Code" by "text"
    Then User should enter  details for Email and Zip Code
    When User Click the button "Find My Orders" by "text"
    Then User able to see below text on page
      | find your order. Please check email address and zip code for accuracy. |
   