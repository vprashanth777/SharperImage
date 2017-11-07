#Author: prashanth.veldandi@valuelabs.com
@SIRegression @Desktop @Thread3 @Footer
Feature: User is able to sharper Image  page footer

  Scenario: User should able click the Gift Certificate/Cashback Balance and validate the content(Desktop)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Gift Certificate/Cashback Balance"
    Then User check that the browser title contains "My Account"
    Then User able to see below text on page
      | Gift Certificate/Cash Back Balance |
      | Get Balance Right Now    |
      | Get Balance By Email     |
    When User enter "invalid" giftcard
    And User Click the button "Check Balance" by "Text"
    Then User able to see below text on page
      | Please check your number and try again       |
      | 3286216869860747 is not a valid certificate. |
    When User enter "valid" giftcard
    And User Click the button "Check Balance" by "Text"
    Then User should able to see the gift card balance

  Scenario: User should able click the "Online Return Center" and validate the content(Desktop)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Online Return Center"
    Then User check that the browser title contains "Order Tracking"
    And User able to see below text on page
      | Order Tracking and Online Return Center                              |
      | Tracking and returning your Sharper Image orders is simple and easy! |
    And User should able to see below buttons
      | My Sharper Image Account           |
      | Email and Shipping Zip Code        |
      | Order Number and Shipping Zip Code |
      | Phone Number and Shipping Zip Code |
    When User Click the button "Email and Shipping Zip Code" by "text"
    Then User handle mystery popup
    Then User should enter  details for Order search
      | ORDEREMAIL | OrderZIPCODE |
    When User Click the button "Find My Orders" by "text"
    Then User able to see below text on page
      | Order Tracking and Online Return Center                                     |
      | The information below shows your order number, order date and order status. |
    When User is able to see and click the order
    Then User able to see the Order details

  Scenario: User should able click the "Track Order" and validate the content(ND-2486)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Track Order"
    Then User check that the browser title contains "Order Tracking"
     And User able to see below text on page
      | Order Tracking and Online Return Center                              |
      | Tracking and returning your Sharper Image orders is simple and easy! |
    And User should able to see below buttons
      | My Sharper Image Account           |
      | Email and Shipping Zip Code        |
      | Order Number and Shipping Zip Code |
      | Phone Number and Shipping Zip Code |

  Scenario: User should able click the "Retail Purchases" and validate the content
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Retail Purchases"
    Then User handle mystery popup
    And User able to see below text on page
      | Helpful Information                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
      | Retail Store Purchases                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
      | Literati Support                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
      | Gift Cards / Merchandise Certificates                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
      | For more information on gift cards, please visit here .                                                                                                                                                                                                                                                                                                                                                                                                                                    |
      | Warranties                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
      | For orders placed through ShaperImage.com after October 2009 please refer to the manufacturer instructions on the warranty card provided with your purchased product.                                                                                                                                                                                                                                                                                                                      |
      | Replacement Parts                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
      | SharperImage.com does not provide replacement part service at this time. We are not the product manufacturer and therefore do not have access to replacement parts. However, if your product is not working properly, or arrived defective, you can request a return within 60 days of purchasing by e-mailing our customer service department at customerservice@sharperimageonline.com. After the 60 days expires, you must refer to the manufacturer instructions on the warranty card. |
      | Ionic Breeze                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

  Scenario: User should able click the "Customer Service Center" and validate the content
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Customer Service Center"
    Then User check that the browser title contains "Customer Service"
    Then User able to see below text on page
      | Customer Service Center                         |
      | Order Management                                |
      | Returns                                         |
      | Account Management                              |
      | Helpful Links                                   |
      | Give Us Feedback                                |
      | Contact Us                                      |
      | Have Product Ideas?                             |
      | Email us at:productideas@sharperimageonline.com |
      | Have Website Feedback?                          |
      | Email us at:webfeedback@sharperimageonline.com  |
    Then User able to see the below links under "Order Management"
      | Check Order Status   |
      | Shipping Information |
      | Returns Information  |
    Then User able to see the below links under "Returns"
      | Start Your Return    |
      | Online Return Center |
      | View Return Policy   |
  
    Then User able to see the below links under "Account Management"
      | Reset Password      |
      | Gift Card Balance   |
      | Cash Back Balance   |
      | Request Catalog     |
      | Remove From Catalog |
    Then User able to see the below links under "Helpful Links"
      | Replacement Parts           |
      | Terms and Conditions        |
      | Retail Locations            |
      | Gift Cards/Gift Merchandise |
      | Return Policy               |
      | Privacy and Security        |
    Then User able to see the below links under "Give Us Feedback"
      | productideas@sharperimageonline.com |
      | webfeedback@sharperimageonline.com  |

  Scenario: User should able click the "Contact Us" and validate the content
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Contact Us"
    Then User check that the browser title contains "Contact Us"
    Then User able to see below text on page
      | Contact Us!                                                                                                          |
      | If you would like more information on a product or have a question about an order, please enter your question below. |
      | Please allow 24 business hours for an email response.                                                                |
      | You can also call us toll-free at 1-877-206-7862 Monday through Friday from 9:00 AM to 6:00 PM ET.                   |
      | Please click here to remove from catalog.                                                                            |
      | Your Contact Info                                                                                                    |
    When User Click the button "Submit"
    Then User able to see below text on page
      | Your email address is required |
      | Please enter a First Name      |
      | Please enter a Last Name       |
      | Please select a subject value  |
    When User should able to submit his contact info
    When User Click the button "Submit"
    Then User able to see below text on page
      | Contact Us!                                                                                                          |
      | If you would like more information on a product or have a question about an order, please enter your question below. |
      | Please allow 24 business hours for an email response.                                                                |
      | You can also call us toll-free at 1-877-206-7862 Monday through Friday from 9:00 AM to 6:00 PM ET.                   |

  Scenario: User should able click the "Frequently Asked Questions" and validate the content
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Frequently Asked Questions"
    Then User check that the browser title contains "Frequently Asked Questions"
    Then User able to see below text on page
      | Frequently Asked Questions |
    Then User able to see the below links under "Account Management" and Click

  Scenario: User should able click the "Mailing Preferences" and validate the content
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Mailing Preferences"
    Then User check that the browser title contains "Sharper Image Catalog Removal Survey"
    Then User able to see below text on page
      | Please fill out the following information to be removed from future catalog mailings |
      | First and Last Name:                                                                 |
    When User enter details for survey
    When User Click the button "Submit" by "Text"
    Then User able to see below text on page
      | Thank you and we will process your request! |

  #------------------------------------------------------------------------------------------------------------------------
  #---------------------------------------------------------------------------------------------------------------------
  Scenario: User should able click About Us and validate the content
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "About Us"
    Then User check that the browser title contains "About Us"
    Then User able to see below text on page
      | About SharperImage.com      |
      | About Camelot Venture Group |
      | About Us                    |

  Scenario: User should able click Camelot Venture Group and validate the content
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Camelot Venture Group"
    Then User check that the browser title contains "Camelot Venture Group"
    Then User able to see below text on page
      | About The Partners                               |
      | Steve Cicurel - Partner                          |
      | Nicholas Pyett - Partner/Chief Financial Officer |

  Scenario: User should able click Affiliate Program and validate the content
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Affiliate Program"
    Then User check that the browser title contains "Affiliate Program"
    Then User able to see below text on page
      | Affiliate Program                     |
      | About Our Affiliate Program           |
      | Tap Into the Power of a Leading Brand |
      | Earn Money                            |

  Scenario: User should able click Licensing Opportunities and validate the content
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Licensing Opportunities"
    Then User check that the browser title contains "Licensing Opportunities"
    Then User able to see below text on page
      | Licensing Opportunities    |
      | licensing@sharperimage.com |

  Scenario: User should able click Careers and validate the content
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Careers"
    Then User check that the browser title contains "Careers"
    Then User able to see below text on page
      | Looking for a fun, challenging career with a growing company marketing a nationally-known brand? If so, SharperImageOnline has opportunities for you. |
      | To express your interest in any of our current openings, please email your resume to hr@sharperimageonline.com.                                       |

  Scenario: User should able click Gift Cards and validate the content
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Gift Cards"
    Then User check that the browser title contains "Gift Cards"
    Then User able to see below text on page
      | Gift Card Info |
    Then User able to see the below links under "Gift Card Info" and Click

  Scenario: User should able click Press Releases and validate the content
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Press Releases"
    Then User check that the browser title contains "Press Releases"
    Then User able to see below text on page
      | Press Releases |
    Then User able to see the below links under "Press Releases" and Click

@ignore 

  Scenario: User should able click Press Releases and validate the content(sprint35)
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Sharper Image Blog"
    Then User switch window
    Then User check that the browser title contains "Sharper Image Blog"
    Then User able to see below text on page
      | First World Solutions |
      | Gadgets               |
      | Gift Guides           |
      | Lifestyle             |
      | Man Cave              |
      | Products              |
      | Tech                  |
      | Uncategorized         |
    When User close child window and switch back to main window

  #------------------------------------------------------------------------------------------------------------------------
  #---------------------------------------------------------------------------------------------------------------------
  Scenario: User should able click Return Policy and validate the content
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Return Policy"
    Then User check that the browser title contains "Return Policy"
    Then User able to see below text on page
      | Return Policy                                                                               |
      | General Return Policy                                                                       |
      | Exclusions apply, please see the Non-Returnable Items list below.                           |
      | Non-Returnable Items                                                                        |
      | Massage Chairs                                                                              |
      | Pac-Man/Arcade Game Returns                                                                 |
      | Returns Process                                                                             |
      | SharperImage.com reserves the right to modify its return and exchange policies at any time. |

  Scenario: User should able click Shipping Information and validate the content
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Shipping Information"
    Then User check that the browser title contains "Shipping Information"
    Then User able to see below text on page
      | Shipping Information                                                                         |
      | Shipping Methods                                                                             |
      | Pac-Man Arcade Machine, Pac Man Arcade Machine Cocktail Table and Arcade Legends games       |
      | Massage chairs                                                                               |
      | Please Note: 2nd Day & Next Day delivery are not eligible for shipments to Alaska or Hawaii. |
      | Note:                                                                                        |
      | If ordered by 4:30 PM ET on:                                                                 |
      | Expect Next Day Delivery                                                                     |
      | Expect 2-Day Delivery                                                                        |
      | Shipping Costs                                                                               |
      | APO/FPO Shipping                                                                             |

  Scenario: User should able click Corporate Gifts and validate the content
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Corporate Gifts"
    Then User check that the browser title contains "Corporate Gifts"
    Then User able to see below text on page
      | Corporate Gifts |
    When User click the  "View All"
    Then User should able to see all the items
    Then User able to see the gift card image

  Scenario: User should able click Catalog Request and validate the content
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Catalog Request"
    Then User check that the browser title contains "Catalog Request"
    Then User able to see below text on page
      | Sign Up Now!                                                                                     |
      | Sign up for a free SharperImage.com catalog now! You will receive your catalog within 7-10 days. |
    When User should able to submit his Catalog Request
    When User Click the button "Submit"
    Then User able to see below text on page
      | My Profile                                                                                     |
      | Catalog Request has been requested. Please allow 7 to 10 business days to process your request |

  Scenario: User should able click Retail Store Locations and validate the content
    Given User navigate to sharperimage website
    Then User able to see the Homepage with Categories
    When User click the  "Retail Store Locations"
    Then User check that the browser title contains "Retail Store Locations"
    Then User able to see below text on page
      | Retail Locations |
