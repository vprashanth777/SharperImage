#Author: prashanth.veldandi@valuelabs.com

@SIRegression @Desktop @Thread2 @MiniCart

Feature: Mini cart validations


Scenario: User able to add an item to cart with out moved to shopping cart page
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Gadgets"
    Then User check that the browser title contains "Gadgets"
    When User selected the item from list
    When User click Add to Cart button
    Then User able to add an item to mini cart
    Then User able to validate item details and Subtotal
    When User Click the view cart in mini cart
    Then User check that the browser title contains "Shopping Cart"
    Then User able to see the item with quantity
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Checkout as a guest"
    Then User check that the browser title contains "Payment"
    And User should enter valid card details
    When User Click the button "Place Order"

   
  Scenario: User able to add multiple items to card with out moved to shopping cart page
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Gadgets"
    Then User check that the browser title contains "Gadgets"
    When User selected the item from list
    When User click Add to Cart button
    When User click the  "For Her"
    Then User check that the browser title contains "For Her"
    When User selected the item from list
    When User click Add to Cart button
    Then User able to add an item to mini cart
    Then User able to validate item details and Subtotal
    When User Click the view cart in mini cart
    Then User check that the browser title contains "Shopping Cart"
    Then User able to see the item with quantity
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Checkout as a guest"
    Then User check that the browser title contains "Payment"
    And User should enter valid card details
    When User Click the button "Place Order"
 
 Scenario: User is able to see the item price details in mini card
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Sale"
    Then User check that the browser title contains "Sale"
    When User selected the item from list
    When User click Add to Cart button with Sale
    Then User able to add an item to mini cart
    Then User able to validate item details and Subtotal
    When User Click the view cart in mini cart
    Then User check that the browser title contains "Shopping Cart"
    Then User able to see the item with quantity
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Checkout as a guest"
    Then User check that the browser title contains "Payment"
    And User should enter valid card details
    When User Click the button "Place Order" 
    
 
Scenario: Quantity needs to be updated in mini cart display when add to cart in PDP
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Gadgets"
    Then User check that the browser title contains "Gadgets"
    When User selected the item from list
    When User click Add to Cart button
    When User click the  "For Her"
    Then User check that the browser title contains "For Her"
    When User selected the item from list
    When User click Add to Cart button
     When User click Add to Cart button
    Then User able to add an item to mini cart
    Then User able to validate item details and Subtotal
    When User Click the view cart in mini cart
    Then User check that the browser title contains "Shopping Cart"
    Then User able to see the item with quantity
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Checkout as a guest"
    Then User check that the browser title contains "Payment"
    And User should enter valid card details
    When User Click the button "Place Order" 
    
 @P2
Scenario: User add an item with color selection in PDP page
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User search with "200977"
    Then User check that the browser title contains "Wide Mouth Duffel Bag"
    And User able to see below text on page
      | Wide Mouth Duffel Bag |
      | Item # 200977         |
    When User choose the product color "Tan"
   When User Click the button "Add To Cart"
    #Then User able to add an item to mini cart
    #Then User able to validate item details and Subtotal
    #When User Click the view cart in mini cart
    Then User check that the browser title contains "Shopping Cart"
    And User able to see below text on page
      | Personalization cost |
    #Then User able to see the item with quantity
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Checkout as a guest"
    Then User check that the browser title contains "Payment"
    And User should enter valid card details
    When User Click the button "Place Order"
    
  
Scenario:User is able to view cart by clicking the "view cart" button
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Gadgets"
    Then User check that the browser title contains "Gadgets"
    When User selected the item from list
    When User click Add to Cart button
    Then User able to add an item to mini cart
    Then User able to validate item details and Subtotal
    When User Click the view cart in mini cart
    Then User check that the browser title contains "Shopping Cart"
    Then User able to see the item with quantity
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Checkout as a guest"
    Then User check that the browser title contains "Payment"
    And User should enter valid card details
    When User Click the button "Place Order"
    


  Scenario: User is able to continue the shopping by clicking the "continue shopping" link
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Gadgets"
    Then User check that the browser title contains "Gadgets"
    When User selected the item from list
    When User click Add to Cart button
    Then User able to add an item to mini cart
    Then User able to validate item details and Subtotal
    When User Click the Continue Shopping in mini cart
    Then User not able to see the mini cart
    Then User able to see the Homepage with Categories
    
    
   Scenario: User able to add an personalized item to cart(ND-2461	)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User search with "200977"
    Then User check that the browser title contains "Wide Mouth Duffel Bag"
    And User able to see below text on page
      | Wide Mouth Duffel Bag |
      | Item # 200977         |
    When User choose the product color "Tan"
    When User choose personalized option
    #Then User able to add an item to mini cart
    #Then User able to validate item details and Subtotal
    #When User Click the view cart in mini cart
    Then User check that the browser title contains "Shopping Cart"
    #Then User able to see the item with quantity
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Checkout as a guest"
    Then User check that the browser title contains "Payment"
    And User should enter valid card details
    When User Click the button "Place Order" 
  
  
  Scenario: user click on cart, need to redirect to shopping cart
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Gadgets"
    Then User check that the browser title contains "Gadgets"
    When User selected the item from list
    When User click Add to Cart button
    Then User able to add an item to mini cart
    Then User able to validate item details and Subtotal
    When User Click the view cart in mini cart
    Then User check that the browser title contains "Shopping Cart"
    Then User able to see the item with quantity
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    When User click the cart
    Then User check that the browser title contains "Shopping Cart"
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"
    Then User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com
    When User Click the button "Checkout as a guest"
    Then User check that the browser title contains "Payment"
    And User should enter valid card details
    When User Click the button "Place Order"
  
   Scenario: User able to add an item image in mini cart
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Gadgets"
    Then User check that the browser title contains "Gadgets"
    When User selected the item from list
    When User click Add to Cart button
    Then User able to add an item to mini cart
    Then User able to validate item details and Subtotal
    Then User able to see the item image in mini cart
    When User Click the view cart in mini cart
    Then User check that the browser title contains "Shopping Cart"
    Then User able to see the item with quantity
    When User Click the button "Checkout"
    Then User check that the browser title contains "Shipping Billing"