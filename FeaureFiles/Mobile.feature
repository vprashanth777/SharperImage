Feature: this is the first feature name
  this is an example additional feature description

    Scenario: Add an item to cart from PDP (desktop)
 Given User navigate to sharperimage website
Then User able to see the Homepage with Categories
When User click the  "Gadgets"
Then User check that the browser title contains "Gadgets"
When User select the "Price" with filter "100-150"
#And User select the "By Category" with filter "Best Sellers"
#When User click the  "HoverKart"
#Then User check that the browser title contains "HoverKart"
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
