#Author: prashanth.veldandi@valuelabs.com(QA3)

@SIRegression @Desktop @Sidebar @Thread2
Feature: User able to clcik and View side bar options for web (desktop)

  Scenario: User is able to see the best seller products(desktop)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Electronics" and "Speakers"
    Then User check that the browser title contains "Speakers"
    When User able to click the "Best Sellers"from sidetab
    Then User check that the browser title contains "Best Sellers"
    And User able to see below text on page
      | Best Sellers                                               |
      | Shop Sharper Image Best Sellers to discover                |
    When User click the  "View All"
    Then User should able to see all the items

@P2
 Scenario: User is able to see the Sale option of SI Web(desktop)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Massage" and "Massage Chairs"
    Then User check that the browser title contains "Massage Chairs"
    When User able to click the "Sale"from sidetab
    Then User check that the browser title contains "Sale"
    And User able to see below text on page
      | Sale                      |
      | Looking for a great deal? |
    When User click the  "View All"
    Then User should able to see all the items
    
    
  
  Scenario: User is able to see the JustAdded option of SI Web(desktop)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Massage" and "Massage Chairs"
    Then User check that the browser title contains "Massage Chairs"
    When User able to click the "Just Added"from sidetab
    Then User check that the browser title contains "New Arrivals"
    And User able to see below text on page
      | New Arrivals                              |
      | Looking for the newest gadgets and gifts? |
    When User click the  "View All"
    Then User should able to see all the items
  
 