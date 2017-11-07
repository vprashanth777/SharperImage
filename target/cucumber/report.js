$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeaureFiles/SharperImageWeb/FooterLinkValidation.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: prashanth.veldandi@valuelabs.com"
    }
  ],
  "line": 3,
  "name": "User is able to sharper Image  page footer",
  "description": "",
  "id": "user-is-able-to-sharper-image--page-footer",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@SIRegression"
    },
    {
      "line": 2,
      "name": "@Desktop"
    },
    {
      "line": 2,
      "name": "@Thread3"
    },
    {
      "line": 2,
      "name": "@Footer"
    }
  ]
});
formatter.before({
  "duration": 1206627925,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should able click the Gift Certificate/Cashback Balance and validate the content(Desktop)",
  "description": "",
  "id": "user-is-able-to-sharper-image--page-footer;user-should-able-click-the-gift-certificate/cashback-balance-and-validate-the-content(desktop)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User click the  \"Gift Certificate/Cashback Balance\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User check that the browser title contains \"My Account\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "Gift Certificate/Cash Back Balance"
      ],
      "line": 11
    },
    {
      "cells": [
        "Get Balance Right Now"
      ],
      "line": 12
    },
    {
      "cells": [
        "Get Balance By Email"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enter \"invalid\" giftcard",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User Click the button \"Check Balance\" by \"Text\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "Please check your number and try again"
      ],
      "line": 17
    },
    {
      "cells": [
        "3286216869860747 is not a valid certificate."
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User enter \"valid\" giftcard",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User Click the button \"Check Balance\" by \"Text\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should able to see the gift card balance",
  "keyword": "Then "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "duration": 20841875150,
  "status": "passed"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "duration": 257960594,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Certificate/Cashback Balance",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "duration": 4941655341,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Account",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "duration": 43823823,
  "status": "passed"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "duration": 1388141925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 12
    }
  ],
  "location": "SharperImage.user_enter_something_giftcard(String)"
});
formatter.result({
  "duration": 1834406301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check Balance",
      "offset": 23
    },
    {
      "val": "Text",
      "offset": 42
    }
  ],
  "location": "MobileStepDefinations.muser_click_the_button_something_by_something(String,String)"
});
formatter.result({
  "duration": 4844527422,
  "status": "passed"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "duration": 1292903217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 12
    }
  ],
  "location": "SharperImage.user_enter_something_giftcard(String)"
});
formatter.result({
  "duration": 1359407345,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check Balance",
      "offset": 23
    },
    {
      "val": "Text",
      "offset": 42
    }
  ],
  "location": "MobileStepDefinations.muser_click_the_button_something_by_something(String,String)"
});
formatter.result({
  "duration": 4147614866,
  "status": "passed"
});
formatter.match({
  "location": "SharperImage.user_should_able_to_see_the_gift_card_balance()"
});
formatter.result({
  "duration": 28887,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1360078413,
  "status": "passed"
});
formatter.before({
  "duration": 19216317963,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should able click the \"Online Return Center\" and validate the content(Desktop)",
  "description": "",
  "id": "user-is-able-to-sharper-image--page-footer;user-should-able-click-the-\"online-return-center\"-and-validate-the-content(desktop)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User click the  \"Online Return Center\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User check that the browser title contains \"Order Tracking\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "Order Tracking and Online Return Center"
      ],
      "line": 29
    },
    {
      "cells": [
        "Tracking and returning your Sharper Image orders is simple and easy!"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User should able to see below buttons",
  "rows": [
    {
      "cells": [
        "My Sharper Image Account"
      ],
      "line": 32
    },
    {
      "cells": [
        "Email and Shipping Zip Code"
      ],
      "line": 33
    },
    {
      "cells": [
        "Order Number and Shipping Zip Code"
      ],
      "line": 34
    },
    {
      "cells": [
        "Phone Number and Shipping Zip Code"
      ],
      "line": 35
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User Click the button \"Email and Shipping Zip Code\" by \"text\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User handle mystery popup",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User should enter  details for Order search",
  "rows": [
    {
      "cells": [
        "ORDEREMAIL",
        "OrderZIPCODE"
      ],
      "line": 39
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "User Click the button \"Find My Orders\" by \"text\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        formatter.result({
  "duration": 5586150410,
  "status": "passed"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "duration": 935643288,
  "status": "passed"
});
formatter.match({
  "location": "commonStepDefinations.user_should_able_to_see_below_buttons(String\u003e)"
});
formatter.result({
  "duration": 214686514,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 909403656,
  "status": "passed"
});
formatter.formatter.result({
  "duration": 18135565426,
  "status": "passed"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "duration": 55581282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Online Return Center",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "duration": 33233691947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Order Tracking",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "duration": 5544283793,
  "status": "passed"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "duration": 825415329,
  "status": "passed"
});
formatter.match({
  "location": "commonStepDefinations.user_should_able_to_see_below_buttons(String\u003e)"
});
formatter.result({
  "duration": 252161860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email and Shipping Zip Code",
      "offset": 23
    },
    {
      "val": "text",
      "offset": 56
    }
  ],
  "location": "MobileStepDefinations.muser_click_the_button_something_by_something(String,String)"
});
formatter.result({
  "duration": 1081498267,
  "status": "passed"
});
formatter.match({
  "location": "commonStepDefinations.user_handle_mystery_popup()"
});
formatter.result({
  "duration": 29775,
  "status": "passed"
});
formatter.match({
  "location": "commonStepDefinations.user_should_enter_details_for_order_search_somethingsomething(String\u003e)"
});
formatter.result({
  "duration": 3116445333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find My Orders",
      "offset": 23
    },
    {
      "val": "text",
      "offset": 43
    }
  ],
  "location": "MobileStepDefinations.muser_click_the_button_something_by_something(String,String)"
});
formatter.result({
  "duration": 1158990127,
  "status": "passed"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "duration": 1675197520,
  "status": "passed"
});
formatter.match({
  "location": "commonStepDefinations.user_is_able_to_see_and_click_the_order()"
});
formatter.result({
  "duration": 923412081,
  "status": "passed"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_order_details()"
});
formatter.result({
  "duration": 55397095566,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1426230564,
  "status": "passed"
});
formatter.before({
  "duration": 7420604707,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 31 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir11176_11881}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: fef966262470fc9dd63c3a578e0d46c0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getWindowHandle(RemoteWebDriver.java:555)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initializatioformatter.result({
  "duration": 1119948661,
  "status": "passed"
});
formatter.match({
  "location": "commonStepDefinations.user_is_able_to_see_and_click_the_order()"
});
formatter.result({
  "duration": 635333441,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:302)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$1(ExpectedConditions.java:301)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:1)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:653)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:1)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:238)\r\n\tat BDD.Cucumber.StepDefinations.commonStepDefinations.user_is_able_to_see_and_click_the_order(commonStepDefinations.java:1315)\r\n\tat ✽.When User is able to see and click the order(FeaureFiles/SharperImageWeb/OrderTracking.feature:36)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_order_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_logout_from_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 40892457,
  "status": "passed"
});
formatter.before({
  "duration": 49595449,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 39 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir6636_25203}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchromformatter.result({
  "duration": 5377305739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eGift Card",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "duration": 10256493134,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 14 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir11096_18515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1cdd203874edf4b57cf3de3650bd0717\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:320)\r\n\tat BDD.Cucumber.StepDefinations.commonStepDefinations.user_check_that_the_browser_title_contains_something(commonStepDefinations.java:545)\r\n\tat ✽.Then User check that the browser title contains \"eGift Card\"(FeaureFiles/SharperImageWeb/GiftCard.feature:38)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_the_deliver_yourself()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add to Cart",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    }
  ],
  "location": "SharperImage.user_should_select_quantity_as(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Continue to payment",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_enter_valid_card_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Place Order",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_logout_from_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 13226698,
  "status": "passed"
});
formatter.before({
  "duration": 18248149,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 8 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir11096_18515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1cdd203874edf4b57cf3de3650bd0717\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 55,
  "name": "User not able to buy the gift card with promo code(Desktop)",
  "description": "",
  "id": "user-able-to-buy-the-gift-card(desktop)-(qa69);user-not-able-to-buy-the-gift-card-with-promo-code(desktop)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 56,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "User click the  Gift Guide",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "User check that the browser title contains \"Gift Cards\"",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "User select the \"Price\" with filter \"100-150\"",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "User click the  \"Gift Card\"",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "User check that the browser title contains \"Gift Card\"",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "User Click the button \"Add To Cart\"",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "User should select quantity as 2",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "Price need to update by Quantity",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "User click the  \"Gadgets\"",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "User check that the browser title contains \"Gadgets\"",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Click the button \"Add To Cart\"",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "User should select quantity as 1",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "Price need to update by Quantity",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "User enter Valid promo code",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "User Click the button \"Apply\"",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "Promotions:"
      ],
      "line": 77
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "User should able to see the promotion code price",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "User should able to see promocode is not applied on Giftcard",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "User Click the button \"Checkout\"",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com",
  "keyword": "Then "
});
formatter.step({
  "line": 83,
  "name": "User Click the button \"Checkout as a guest\"",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "User check that the browser title contains \"Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "User should enter valid card details",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "User Click the button \"Place Order\"",
  "keyword": "When "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_the_gift_guide()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Price",
      "offset": 17
    },
    {
      "val": "100-150",
      "offset": 37
    }
  ],
  "location": "commonStepDefinations.user_select_the_something_with_filter_something(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Card",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Card",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    }
  ],
  "location": "SharperImage.user_should_select_quantity_as(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.price_need_to_update_by_Quantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    }
  ],
  "location": "SharperImage.user_should_select_quantity_as(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.price_need_to_update_by_Quantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Valid",
      "offset": 11
    }
  ],
  "location": "commonStepDefinations.user_enter_promo_code(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Apply",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_should_able_to_see_the_promotion_code_price()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_should_able_to_see_promocode_is_not_applied_on_giftcard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "firstname",
      "offset": 40
    },
    {
      "val": "lastname",
      "offset": 50
    },
    {
      "val": "2444 Merchant Ave 103",
      "offset": 59
    },
    {
      "val": "Odessa",
      "offset": 82
    },
    {
      "val": "FL",
      "offset": 89
    },
    {
      "val": "33556",
      "offset": 92
    },
    {
      "val": "7272648454",
      "offset": 98
    },
    {
      "val": "test@gmail.com",
      "offset": 109
    }
  ],
  "location": "SharperImage.user_should_enter_mandatory_fields_like_(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout as a guest",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_enter_valid_card_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Place Order",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 14906588,
  "status": "passed"
});
formatter.before({
  "duration": 20738654,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 8 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir11096_18515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1cdd203874edf4b57cf3de3650bd0717\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 88,
  "name": "User not able to buy the gift card with Giftcard(Desktop)",
  "description": "",
  "id": "user-able-to-buy-the-gift-card(desktop)-(qa69);user-not-able-to-buy-the-gift-card-with-giftcard(desktop)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 89,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "User click the  Gift Guide",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "User check that the browser title contains \"Gift Cards\"",
  "keyword": "Then "
});
formatter.step({
  "line": 93,
  "name": "User select the \"Price\" with filter \"100-150\"",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "User click the  \"Gift Card\"",
  "keyword": "When "
});
formatter.step({
  "line": 95,
  "name": "User check that the browser title contains \"Gift Card\"",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "User Click the button \"Add To Cart\"",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "User should select quantity as 2",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "Price need to update by Quantity",
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "User click the  \"Gadgets\"",
  "keyword": "When "
});
formatter.step({
  "line": 101,
  "name": "User check that the browser title contains \"Gadgets\"",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "User Click the button \"Add To Cart\"",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "User should select quantity as 1",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "User click the  giftcard",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "User enter Valid Gift code and click Apply",
  "keyword": "When "
});
formatter.step({
  "line": 108,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "Were sorry, but the method of payment for an electronic gift certificate must be in the form of a valid credit card or debit card. Please remove the gift certificate below to continue checking out."
      ],
      "line": 109
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 110,
  "name": "User Click the button \"Checkout\"",
  "keyword": "When "
});
formatter.step({
  "line": 111,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "User Click the button \"Checkout as a guest\"",
  "keyword": "When "
});
formatter.step({
  "line": 114,
  "name": "User check that the browser title contains \"Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 115,
  "name": "User click the  giftcard",
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "User enter Valid Gift code and click Apply",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "Were sorry, but the method of payment for an electronic gift certificate must be in the form of a valid credit card or debit card. Please remove the gift certificate below to continue checking out."
      ],
      "line": 118
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 119,
  "name": "User should enter valid card details",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "User Click the button \"Place Order\"",
  "keyword": "When "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_the_gift_guide()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Price",
      "offset": 17
    },
    {
      "val": "100-150",
      "offset": 37
    }
  ],
  "location": "commonStepDefinations.user_select_the_something_with_filter_something(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Card",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Card",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    }
  ],
  "location": "SharperImage.user_should_select_quantity_as(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.price_need_to_update_by_Quantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    }
  ],
  "location": "SharperImage.user_should_select_quantity_as(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_click_the_giftcard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Valid",
      "offset": 11
    }
  ],
  "location": "commonStepDefinations.user_enter_invalid_gift_code(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "firstname",
      "offset": 40
    },
    {
      "val": "lastname",
      "offset": 50
    },
    {
      "val": "2444 Merchant Ave 103",
      "offset": 59
    },
    {
      "val": "Odessa",
      "offset": 82
    },
    {
      "val": "FL",
      "offset": 89
    },
    {
      "val": "33556",
      "offset": 92
    },
    {
      "val": "7272648454",
      "offset": 98
    },
    {
      "val": "test@gmail.com",
      "offset": 109
    }
  ],
  "location": "SharperImage.user_should_enter_mandatory_fields_like_(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout as a guest",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_click_the_giftcard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Valid",
      "offset": 11
    }
  ],
  "location": "commonStepDefinations.user_enter_invalid_gift_code(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_enter_valid_card_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Place Order",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 21295507,
  "status": "passed"
});
formatter.before({
  "duration": 20195134,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 8 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir11096_18515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1cdd203874edf4b57cf3de3650bd0717\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 123,
  "name": "User able to order item with Gift pack -Single Item(desktop,ND-2365) QA67",
  "description": "",
  "id": "user-able-to-buy-the-gift-card(desktop)-(qa69);user-able-to-order-item-with-gift-pack--single-item(desktop,nd-2365)-qa67",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 124,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 125,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 126,
  "name": "User click the  \"Gadgets\"",
  "keyword": "When "
});
formatter.step({
  "line": 127,
  "name": "User check that the browser title contains \"Gadgets\"",
  "keyword": "Then "
});
formatter.step({
  "line": 128,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 129,
  "name": "User Click the button \"Add To Cart\"",
  "keyword": "When "
});
formatter.step({
  "line": 130,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 131,
  "name": "User should select quantity as 1",
  "keyword": "When "
});
formatter.step({
  "line": 132,
  "name": "Price need to update by Quantity",
  "keyword": "Then "
});
formatter.step({
  "line": 133,
  "name": "User select the GiftBag Option",
  "keyword": "When "
});
formatter.step({
  "line": 134,
  "name": "User enter his comments",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "User Click the button \"Approve\"",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "User able to validate the Giftbag Price",
  "keyword": "Then "
});
formatter.step({
  "line": 137,
  "name": "User Click the button \"Checkout\"",
  "keyword": "When "
});
formatter.step({
  "line": 138,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 139,
  "name": "User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com",
  "keyword": "Then "
});
formatter.step({
  "line": 140,
  "name": "User Click the button \"Checkout as a guest\"",
  "keyword": "When "
});
formatter.step({
  "line": 141,
  "name": "User check that the browser title contains \"Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 142,
  "name": "User should enter valid card details",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "User Click the button \"Place Order\"",
  "keyword": "When "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    }
  ],
  "location": "SharperImage.user_should_select_quantity_as(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.price_need_to_update_by_Quantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_select_the_giftbag_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_enter_his_comments()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Approve",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_validate_the_giftbag_price()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "firstname",
      "offset": 40
    },
    {
      "val": "lastname",
      "offset": 50
    },
    {
      "val": "2444 Merchant Ave 103",
      "offset": 59
    },
    {
      "val": "Odessa",
      "offset": 82
    },
    {
      "val": "FL",
      "offset": 89
    },
    {
      "val": "33556",
      "offset": 92
    },
    {
      "val": "7272648454",
      "offset": 98
    },
    {
      "val": "test@gmail.com",
      "offset": 109
    }
  ],
  "location": "SharperImage.user_should_enter_mandatory_fields_like_(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout as a guest",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_enter_valid_card_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Place Order",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 11842787,
  "status": "passed"
});
formatter.before({
  "duration": 17756626,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 8 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir11096_18515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1cdd203874edf4b57cf3de3650bd0717\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 146,
  "name": "User able to order item with Gift pack -Mutiple Items(desktop,ND-2365) QA67",
  "description": "",
  "id": "user-able-to-buy-the-gift-card(desktop)-(qa69);user-able-to-order-item-with-gift-pack--mutiple-items(desktop,nd-2365)-qa67",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 147,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 148,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 149,
  "name": "User click the  \"Gadgets\"",
  "keyword": "When "
});
formatter.step({
  "line": 150,
  "name": "User check that the browser title contains \"Gadgets\"",
  "keyword": "Then "
});
formatter.step({
  "line": 151,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 152,
  "name": "User Click the button \"Add To Cart\"",
  "keyword": "When "
});
formatter.step({
  "line": 153,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 154,
  "name": "User should select quantity as 1",
  "keyword": "When "
});
formatter.step({
  "line": 155,
  "name": "Price need to update by Quantity",
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "User select the GiftBag Option",
  "keyword": "When "
});
formatter.step({
  "line": 157,
  "name": "User enter his comments",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "User Click the button \"Approve\"",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "User able to validate the Giftbag Price",
  "keyword": "Then "
});
formatter.step({
  "line": 160,
  "name": "User click the  \"For Her\"",
  "keyword": "When "
});
formatter.step({
  "line": 161,
  "name": "User check that the browser title contains \"For Her\"",
  "keyword": "Then "
});
formatter.step({
  "line": 162,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 163,
  "name": "User Click the button \"Add To Cart\"",
  "keyword": "When "
});
formatter.step({
  "line": 164,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 165,
  "name": "User should select quantity as 1",
  "keyword": "When "
});
formatter.step({
  "line": 166,
  "name": "User select the GiftBag Option",
  "keyword": "When "
});
formatter.step({
  "line": 167,
  "name": "User Click the button \"Approve\"",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "User Click the button \"Checkout\"",
  "keyword": "When "
});
formatter.step({
  "line": 169,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 170,
  "name": "User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com",
  "keyword": "Then "
});
formatter.step({
  "line": 171,
  "name": "User Click the button \"Checkout as a guest\"",
  "keyword": "When "
});
formatter.step({
  "line": 172,
  "name": "User check that the browser title contains \"Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 173,
  "name": "User should enter valid card details",
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "User Click the button \"Place Order\"",
  "keyword": "When "
});
formatter.step({
  "line": 175,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "Thank You For Your Order!"
      ],
      "line": 176
    },
    {
      "cells": [
        "Your Order Number is"
      ],
      "line": 177
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    }
  ],
  "location": "SharperImage.user_should_select_quantity_as(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.price_need_to_update_by_Quantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_select_the_giftbag_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_enter_his_comments()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Approve",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_validate_the_giftbag_price()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "For Her",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "For Her",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    }
  ],
  "location": "SharperImage.user_should_select_quantity_as(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_select_the_giftbag_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Approve",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "firstname",
      "offset": 40
    },
    {
      "val": "lastname",
      "offset": 50
    },
    {
      "val": "2444 Merchant Ave 103",
      "offset": 59
    },
    {
      "val": "Odessa",
      "offset": 82
    },
    {
      "val": "FL",
      "offset": 89
    },
    {
      "val": "33556",
      "offset": 92
    },
    {
      "val": "7272648454",
      "offset": 98
    },
    {
      "val": "test@gmail.com",
      "offset": 109
    }
  ],
  "location": "SharperImage.user_should_enter_mandatory_fields_like_(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout as a guest",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_enter_valid_card_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Place Order",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 10190450,
  "status": "passed"
});
formatter.before({
  "duration": 17861508,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 8 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir11096_18515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1cdd203874edf4b57cf3de3650bd0717\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 180,
  "name": "User not able to buy the gift card with Giftcard after adding gift card to cart(Desktop)",
  "description": "",
  "id": "user-able-to-buy-the-gift-card(desktop)-(qa69);user-not-able-to-buy-the-gift-card-with-giftcard-after-adding-gift-card-to-cart(desktop)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 181,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 182,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 183,
  "name": "User click the  \"Gadgets\"",
  "keyword": "When "
});
formatter.step({
  "line": 184,
  "name": "User check that the browser title contains \"Gadgets\"",
  "keyword": "Then "
});
formatter.step({
  "line": 185,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 186,
  "name": "User Click the button \"Add To Cart\"",
  "keyword": "When "
});
formatter.step({
  "line": 187,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 188,
  "name": "User should select quantity as 1",
  "keyword": "When "
});
formatter.step({
  "line": 189,
  "name": "Price need to update by Quantity",
  "keyword": "Then "
});
formatter.step({
  "line": 190,
  "name": "User click the  giftcard",
  "keyword": "When "
});
formatter.step({
  "line": 191,
  "name": "User enter Valid Gift code and click Apply",
  "keyword": "When "
});
formatter.step({
  "line": 192,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "Certificate 3286216869860747 has"
      ],
      "line": 193
    },
    {
      "cells": [
        "Gift Certificates:"
      ],
      "line": 194
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 195,
  "name": "User click the  Gift Guide",
  "keyword": "When "
});
formatter.step({
  "line": 196,
  "name": "User check that the browser title contains \"Gift Cards\"",
  "keyword": "Then "
});
formatter.step({
  "line": 197,
  "name": "User click the  \"Gift Card\"",
  "keyword": "When "
});
formatter.step({
  "line": 198,
  "name": "User check that the browser title contains \"Gift Card\"",
  "keyword": "Then "
});
formatter.step({
  "line": 199,
  "name": "User Click the button \"Add To Cart\"",
  "keyword": "When "
});
formatter.step({
  "line": 200,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "You cannot add a Gift Certificate to an Order where a Gift Certificate has been entered as a payment type."
      ],
      "line": 201
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    }
  ],
  "location": "SharperImage.user_should_select_quantity_as(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.price_need_to_update_by_Quantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_click_the_giftcard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Valid",
      "offset": 11
    }
  ],
  "location": "commonStepDefinations.user_enter_invalid_gift_code(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_the_gift_guide()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Card",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Card",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 11639245,
  "status": "passed"
});
formatter.before({
  "duration": 17957946,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 8 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir11096_18515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1cdd203874edf4b57cf3de3650bd0717\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 206,
  "name": "User able to buy the egift card for others(Desktop)",
  "description": "",
  "id": "user-able-to-buy-the-gift-card(desktop)-(qa69);user-able-to-buy-the-egift-card-for-others(desktop)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 207,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 208,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 209,
  "name": "User login to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 210,
  "name": "User click the cart",
  "keyword": "When "
});
formatter.step({
  "line": 211,
  "name": "User clear the cart items",
  "keyword": "And "
});
formatter.step({
  "line": 212,
  "name": "User click the  Gift Guide",
  "keyword": "When "
});
formatter.step({
  "line": 213,
  "name": "User check that the browser title contains \"Gift Cards\"",
  "keyword": "Then "
});
formatter.step({
  "line": 214,
  "name": "User click the  \"eGift Card\"",
  "keyword": "When "
});
formatter.step({
  "line": 215,
  "name": "User check that the browser title contains \"eGift Card\"",
  "keyword": "Then "
});
formatter.step({
  "line": 216,
  "name": "User click the  \"200\"",
  "keyword": "When "
});
formatter.step({
  "line": 217,
  "name": "User enter message for Giftcard",
  "keyword": "When "
});
formatter.step({
  "line": 218,
  "name": "User Enter Email Delivery",
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "User Click the button \"Add to Cart\"",
  "keyword": "When "
});
formatter.step({
  "line": 220,
  "name": "User Click the button \"Checkout\"",
  "keyword": "When "
});
formatter.step({
  "line": 221,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 222,
  "name": "User Click the button \"Continue to payment\"",
  "keyword": "When "
});
formatter.step({
  "line": 223,
  "name": "User check that the browser title contains \"Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 224,
  "name": "User should enter valid card details",
  "keyword": "And "
});
formatter.step({
  "line": 225,
  "name": "User Click the button \"Place Order\"",
  "keyword": "When "
});
formatter.step({
  "line": 226,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "Thank You For Your Order!"
      ],
      "line": 227
    },
    {
      "cells": [
        "Your Order Number is"
      ],
      "line": 228
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_login_to_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_clear_the_cart_items()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_the_gift_guide()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "eGift Card",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "eGift Card",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_enter_message_for_giftcard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_enter_email_delivery()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add to Cart",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Continue to payment",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_enter_valid_card_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Place Order",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 12074772,
  "status": "passed"
});
formatter.before({
  "duration": 17574416,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 8 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir11096_18515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1cdd203874edf4b57cf3de3650bd0717\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 231,
  "name": "User able to buy corporate gift cards",
  "description": "",
  "id": "user-able-to-buy-the-gift-card(desktop)-(qa69);user-able-to-buy-corporate-gift-cards",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 232,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 233,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 234,
  "name": "User click the  \"Corporate Gifts\"",
  "keyword": "When "
});
formatter.step({
  "line": 235,
  "name": "User check that the browser title contains \"Corporate Gifts\"",
  "keyword": "Then "
});
formatter.step({
  "line": 236,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 237,
  "name": "User Click the button \"Add To Cart\"",
  "keyword": "When "
});
formatter.step({
  "line": 238,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 239,
  "name": "User should select quantity as 2",
  "keyword": "When "
});
formatter.step({
  "line": 240,
  "name": "Price need to update by Quantity",
  "keyword": "Then "
});
formatter.step({
  "line": 241,
  "name": "User Click the button \"Checkout\"",
  "keyword": "When "
});
formatter.step({
  "line": 242,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 243,
  "name": "User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com",
  "keyword": "Then "
});
formatter.step({
  "line": 244,
  "name": "User Click the button \"Checkout as a guest\"",
  "keyword": "When "
});
formatter.step({
  "line": 245,
  "name": "User check that the browser title contains \"Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 246,
  "name": "User should enter valid card details",
  "keyword": "And "
});
formatter.step({
  "line": 247,
  "name": "User Click the button \"Place Order\"",
  "keyword": "When "
});
formatter.step({
  "line": 248,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "Thank You For Your Order!"
      ],
      "line": 249
    },
    {
      "cells": [
        "Your Order Number is"
      ],
      "line": 250
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Corporate Gifts",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Corporate Gifts",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    }
  ],
  "location": "SharperImage.user_should_select_quantity_as(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.price_need_to_update_by_Quantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "firstname",
      "offset": 40
    },
    {
      "val": "lastname",
      "offset": 50
    },
    {
      "val": "2444 Merchant Ave 103",
      "offset": 59
    },
    {
      "val": "Odessa",
      "offset": 82
    },
    {
      "val": "FL",
      "offset": 89
    },
    {
      "val": "33556",
      "offset": 92
    },
    {
      "val": "7272648454",
      "offset": 98
    },
    {
      "val": "test@gmail.com",
      "offset": 109
    }
  ],
  "location": "SharperImage.user_should_enter_mandatory_fields_like_(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout as a guest",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_enter_valid_card_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Place Order",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 11598803,
  "status": "passed"
});
formatter.uri("FeaureFiles/SharperImageWeb/MiniCart.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: prashanth.veldandi@valuelabs.com"
    }
  ],
  "line": 5,
  "name": "Mini cart validations",
  "description": "",
  "id": "mini-cart-validations",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@SIRegression"
    },
    {
      "line": 3,
      "name": "@Desktop"
    },
    {
      "line": 3,
      "name": "@Thread2"
    },
    {
      "line": 3,
      "name": "@MiniCart"
    }
  ]
});
formatter.before({
  "duration": 16665141,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 7 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir11096_18515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1cdd203874edf4b57cf3de3650bd0717\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 8,
  "name": "User able to add an item to cart with out moved to shopping cart page",
  "description": "",
  "id": "mini-cart-validations;user-able-to-add-an-item-to-cart-with-out-moved-to-shopping-cart-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User click the  \"Gadgets\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User check that the browser title contains \"Gadgets\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User click Add to Cart button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User able to add an item to mini cart",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User able to validate item details and Subtotal",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User Click the view cart in mini cart",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User able to see the item with quantity",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User Click the button \"Checkout\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User Click the button \"Checkout as a guest\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User check that the browser title contains \"Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User should enter valid card details",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User Click the button \"Place Order\"",
  "keyword": "When "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_add_to_cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_add_an_item_to_mini_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_validate_item_details_and_subtotal()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_the_view_cart_in_mini_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_see_the_item_with_quantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "firstname",
      "offset": 40
    },
    {
      "val": "lastname",
      "offset": 50
    },
    {
      "val": "2444 Merchant Ave 103",
      "offset": 59
    },
    {
      "val": "Odessa",
      "offset": 82
    },
    {
      "val": "FL",
      "offset": 89
    },
    {
      "val": "33556",
      "offset": 92
    },
    {
      "val": "7272648454",
      "offset": 98
    },
    {
      "val": "test@gmail.com",
      "offset": 109
    }
  ],
  "location": "SharperImage.user_should_enter_mandatory_fields_like_(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout as a guest",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_enter_valid_card_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Place Order",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 9605154,
  "status": "passed"
});
formatter.before({
  "duration": 17304210,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 7 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir11096_18515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1cdd203874edf4b57cf3de3650bd0717\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 29,
  "name": "User able to add multiple items to card with out moved to shopping cart page",
  "description": "",
  "id": "mini-cart-validations;user-able-to-add-multiple-items-to-card-with-out-moved-to-shopping-cart-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User click the  \"Gadgets\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User check that the browser title contains \"Gadgets\"",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User click Add to Cart button",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User click the  \"For Her\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User check that the browser title contains \"For Her\"",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "User click Add to Cart button",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "User able to add an item to mini cart",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "User able to validate item details and Subtotal",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "User Click the view cart in mini cart",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "User able to see the item with quantity",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "User Click the button \"Checkout\"",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "User Click the button \"Checkout as a guest\"",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "User check that the browser title contains \"Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "User should enter valid card details",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User Click the button \"Place Order\"",
  "keyword": "When "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_add_to_cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "For Her",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "For Her",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_add_to_cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_add_an_item_to_mini_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_validate_item_details_and_subtotal()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_the_view_cart_in_mini_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_see_the_item_with_quantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "firstname",
      "offset": 40
    },
    {
      "val": "lastname",
      "offset": 50
    },
    {
      "val": "2444 Merchant Ave 103",
      "offset": 59
    },
    {
      "val": "Odessa",
      "offset": 82
    },
    {
      "val": "FL",
      "offset": 89
    },
    {
      "val": "33556",
      "offset": 92
    },
    {
      "val": "7272648454",
      "offset": 98
    },
    {
      "val": "test@gmail.com",
      "offset": 109
    }
  ],
  "location": "SharperImage.user_should_enter_mandatory_fields_like_(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout as a guest",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_enter_valid_card_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Place Order",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 10851296,
  "status": "passed"
});
formatter.before({
  "duration": 15278120,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 7 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir11096_18515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1cdd203874edf4b57cf3de3650bd0717\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 53,
  "name": "User is able to see the item price details in mini card",
  "description": "",
  "id": "mini-cart-validations;user-is-able-to-see-the-item-price-details-in-mini-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 54,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "User click the  \"Sale\"",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "User check that the browser title contains \"Sale\"",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "User click Add to Cart button with Sale",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "User able to add an item to mini cart",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "User able to validate item details and Subtotal",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "User Click the view cart in mini cart",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "User able to see the item with quantity",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "User Click the button \"Checkout\"",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "User Click the button \"Checkout as a guest\"",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "User check that the browser title contains \"Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "User should enter valid card details",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "User Click the button \"Place Order\"",
  "keyword": "When "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sale",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sale",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_add_to_cart_button_sale()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_add_an_item_to_mini_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_validate_item_details_and_subtotal()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_the_view_cart_in_mini_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_see_the_item_with_quantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "firstname",
      "offset": 40
    },
    {
      "val": "lastname",
      "offset": 50
    },
    {
      "val": "2444 Merchant Ave 103",
      "offset": 59
    },
    {
      "val": "Odessa",
      "offset": 82
    },
    {
      "val": "FL",
      "offset": 89
    },
    {
      "val": "33556",
      "offset": 92
    },
    {
      "val": "7272648454",
      "offset": 98
    },
    {
      "val": "test@gmail.com",
      "offset": 109
    }
  ],
  "location": "SharperImage.user_should_enter_mandatory_fields_like_(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout as a guest",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_enter_valid_card_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Place Order",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 11968556,
  "status": "passed"
});
formatter.before({
  "duration": 17587748,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 8 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir11096_18515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1cdd203874edf4b57cf3de3650bd0717\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 74,
  "name": "Quantity needs to be updated in mini cart display when add to cart in PDP",
  "description": "",
  "id": "mini-cart-validations;quantity-needs-to-be-updated-in-mini-cart-display-when-add-to-cart-in-pdp",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 75,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "User click the  \"Gadgets\"",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "User check that the browser title contains \"Gadgets\"",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "User click Add to Cart button",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "User click the  \"For Her\"",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "User check that the browser title contains \"For Her\"",
  "keyword": "Then "
});
formatter.step({
  "line": 83,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "User click Add to Cart button",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "User click Add to Cart button",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "User able to add an item to mini cart",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "User able to validate item details and Subtotal",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "User Click the view cart in mini cart",
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "User able to see the item with quantity",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "User Click the button \"Checkout\"",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 93,
  "name": "User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "User Click the button \"Checkout as a guest\"",
  "keyword": "When "
});
formatter.step({
  "line": 95,
  "name": "User check that the browser title contains \"Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "User should enter valid card details",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "User Click the button \"Place Order\"",
  "keyword": "When "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_add_to_cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "For Her",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "For Her",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_add_to_cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_add_to_cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_add_an_item_to_mini_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_validate_item_details_and_subtotal()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_the_view_cart_in_mini_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_see_the_item_with_quantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "firstname",
      "offset": 40
    },
    {
      "val": "lastname",
      "offset": 50
    },
    {
      "val": "2444 Merchant Ave 103",
      "offset": 59
    },
    {
      "val": "Odessa",
      "offset": 82
    },
    {
      "val": "FL",
      "offset": 89
    },
    {
      "val": "33556",
      "offset": 92
    },
    {
      "val": "7272648454",
      "offset": 98
    },
    {
      "val": "test@gmail.com",
      "offset": 109
    }
  ],
  "location": "SharperImage.user_should_enter_mandatory_fields_like_(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout as a guest",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_enter_valid_card_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Place Order",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 10191339,
  "status": "passed"
});
formatter.before({
  "duration": 19402741,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 8 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir11096_18515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1cdd203874edf4b57cf3de3650bd0717\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 126,
  "name": "User is able to view cart by clicking the \"view cart\" button",
  "description": "",
  "id": "mini-cart-validations;user-is-able-to-view-cart-by-clicking-the-\"view-cart\"-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 127,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 128,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 129,
  "name": "User click the  \"Gadgets\"",
  "keyword": "When "
});
formatter.step({
  "line": 130,
  "name": "User check that the browser title contains \"Gadgets\"",
  "keyword": "Then "
});
formatter.step({
  "line": 131,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 132,
  "name": "User click Add to Cart button",
  "keyword": "When "
});
formatter.step({
  "line": 133,
  "name": "User able to add an item to mini cart",
  "keyword": "Then "
});
formatter.step({
  "line": 134,
  "name": "User able to validate item details and Subtotal",
  "keyword": "Then "
});
formatter.step({
  "line": 135,
  "name": "User Click the view cart in mini cart",
  "keyword": "When "
});
formatter.step({
  "line": 136,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 137,
  "name": "User able to see the item with quantity",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "User Click the button \"Checkout\"",
  "keyword": "When "
});
formatter.step({
  "line": 139,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 140,
  "name": "User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com",
  "keyword": "Then "
});
formatter.step({
  "line": 141,
  "name": "User Click the button \"Checkout as a guest\"",
  "keyword": "When "
});
formatter.step({
  "line": 142,
  "name": "User check that the browser title contains \"Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 143,
  "name": "User should enter valid card details",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "User Click the button \"Place Order\"",
  "keyword": "When "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_add_to_cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_add_an_item_to_mini_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_validate_item_details_and_subtotal()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_the_view_cart_in_mini_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_see_the_item_with_quantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "firstname",
      "offset": 40
    },
    {
      "val": "lastname",
      "offset": 50
    },
    {
      "val": "2444 Merchant Ave 103",
      "offset": 59
    },
    {
      "val": "Odessa",
      "offset": 82
    },
    {
      "val": "FL",
      "offset": 89
    },
    {
      "val": "33556",
      "offset": 92
    },
    {
      "val": "7272648454",
      "offset": 98
    },
    {
      "val": "test@gmail.com",
      "offset": 109
    }
  ],
  "location": "SharperImage.user_should_enter_mandatory_fields_like_(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout as a guest",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_enter_valid_card_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Place Order",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 15381225,
  "status": "passed"
});
formatter.before({
  "duration": 24915716,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 11 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir11096_18515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1cdd203874edf4b57cf3de3650bd0717\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 148,
  "name": "User is able to continue the shopping by clicking the \"continue shopping\" link",
  "description": "",
  "id": "mini-cart-validations;user-is-able-to-continue-the-shopping-by-clicking-the-\"continue-shopping\"-link",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 149,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 150,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 151,
  "name": "User click the  \"Gadgets\"",
  "keyword": "When "
});
formatter.step({
  "line": 152,
  "name": "User check that the browser title contains \"Gadgets\"",
  "keyword": "Then "
});
formatter.step({
  "line": 153,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 154,
  "name": "User click Add to Cart button",
  "keyword": "When "
});
formatter.step({
  "line": 155,
  "name": "User able to add an item to mini cart",
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "User able to validate item details and Subtotal",
  "keyword": "Then "
});
formatter.step({
  "line": 157,
  "name": "User Click the Continue Shopping in mini cart",
  "keyword": "When "
});
formatter.step({
  "line": 158,
  "name": "User not able to see the mini cart",
  "keyword": "Then "
});
formatter.step({
  "line": 159,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_add_to_cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_add_an_item_to_mini_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_validate_item_details_and_subtotal()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_the_continue_shopping_in_mini_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_not_able_to_see_the_mini_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 10212671,
  "status": "passed"
});
formatter.before({
  "duration": 16719360,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 9 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir11096_18515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1cdd203874edf4b57cf3de3650bd0717\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.GeneratedMethodAccessor35.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 162,
  "name": "User able to add an personalized item to cart(ND-2461\t)",
  "description": "",
  "id": "mini-cart-validations;user-able-to-add-an-personalized-item-to-cart(nd-2461-)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 163,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 164,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 165,
  "name": "User search with \"200977\"",
  "keyword": "When "
});
formatter.step({
  "line": 166,
  "name": "User check that the browser title contains \"Wide Mouth Duffel Bag\"",
  "keyword": "Then "
});
formatter.step({
  "line": 167,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "Wide Mouth Duffel Bag"
      ],
      "line": 168
    },
    {
      "cells": [
        "Item # 200977"
      ],
      "line": 169
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "User choose the product color \"Tan\"",
  "keyword": "When "
});
formatter.step({
  "line": 171,
  "name": "User choose personalized option",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 172,
      "value": "#Then User able to add an item to mini cart"
    },
    {
      "line": 173,
      "value": "#Then User able to validate item details and Subtotal"
    },
    {
      "line": 174,
      "value": "#When User Click the view cart in mini cart"
    }
  ],
  "line": 175,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 176,
      "value": "#Then User able to see the item with quantity"
    }
  ],
  "line": 177,
  "name": "User Click the button \"Checkout\"",
  "keyword": "When "
});
formatter.step({
  "line": 178,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 179,
  "name": "User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com",
  "keyword": "Then "
});
formatter.step({
  "line": 180,
  "name": "User Click the button \"Checkout as a guest\"",
  "keyword": "When "
});
formatter.step({
  "line": 181,
  "name": "User check that the browser title contains \"Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 182,
  "name": "User should enter valid card details",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "User Click the button \"Place Order\"",
  "keyword": "When "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "200977",
      "offset": 18
    }
  ],
  "location": "commonStepDefinations.user_search_with_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Wide Mouth Duffel Bag",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tan",
      "offset": 31
    }
  ],
  "location": "SharperImage.user_choose_the_product_color_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_choose_personalized_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "firstname",
      "offset": 40
    },
    {
      "val": "lastname",
      "offset": 50
    },
    {
      "val": "2444 Merchant Ave 103",
      "offset": 59
    },
    {
      "val": "Odessa",
      "offset": 82
    },
    {
      "val": "FL",
      "offset": 89
    },
    {
      "val": "33556",
      "offset": 92
    },
    {
      "val": "7272648454",
      "offset": 98
    },
    {
      "val": "test@gmail.com",
      "offset": 109
    }
  ],
  "location": "SharperImage.user_should_enter_mandatory_fields_like_(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout as a guest",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_enter_valid_card_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Place Order",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 10144675,
  "status": "passed"
});
formatter.before({
  "duration": 15511438,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 7 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir11096_18515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1cdd203874edf4b57cf3de3650bd0717\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.GeneratedMethodAccessor35.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 186,
  "name": "user click on cart, need to redirect to shopping cart",
  "description": "",
  "id": "mini-cart-validations;user-click-on-cart,-need-to-redirect-to-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 187,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 188,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 189,
  "name": "User click the  \"Gadgets\"",
  "keyword": "When "
});
formatter.step({
  "line": 190,
  "name": "User check that the browser title contains \"Gadgets\"",
  "keyword": "Then "
});
formatter.step({
  "line": 191,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 192,
  "name": "User click Add to Cart button",
  "keyword": "When "
});
formatter.step({
  "line": 193,
  "name": "User able to add an item to mini cart",
  "keyword": "Then "
});
formatter.step({
  "line": 194,
  "name": "User able to validate item details and Subtotal",
  "keyword": "Then "
});
formatter.step({
  "line": 195,
  "name": "User Click the view cart in mini cart",
  "keyword": "When "
});
formatter.step({
  "line": 196,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 197,
  "name": "User able to see the item with quantity",
  "keyword": "Then "
});
formatter.step({
  "line": 198,
  "name": "User Click the button \"Checkout\"",
  "keyword": "When "
});
formatter.step({
  "line": 199,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 200,
  "name": "User click the cart",
  "keyword": "When "
});
formatter.step({
  "line": 201,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 202,
  "name": "User Click the button \"Checkout\"",
  "keyword": "When "
});
formatter.step({
  "line": 203,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 204,
  "name": "User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com",
  "keyword": "Then "
});
formatter.step({
  "line": 205,
  "name": "User Click the button \"Checkout as a guest\"",
  "keyword": "When "
});
formatter.step({
  "line": 206,
  "name": "User check that the browser title contains \"Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 207,
  "name": "User should enter valid card details",
  "keyword": "And "
});
formatter.step({
  "line": 208,
  "name": "User Click the button \"Place Order\"",
  "keyword": "When "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_add_to_cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_add_an_item_to_mini_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_validate_item_details_and_subtotal()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_the_view_cart_in_mini_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_see_the_item_with_quantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "firstname",
      "offset": 40
    },
    {
      "val": "lastname",
      "offset": 50
    },
    {
      "val": "2444 Merchant Ave 103",
      "offset": 59
    },
    {
      "val": "Odessa",
      "offset": 82
    },
    {
      "val": "FL",
      "offset": 89
    },
    {
      "val": "33556",
      "offset": 92
    },
    {
      "val": "7272648454",
      "offset": 98
    },
    {
      "val": "test@gmail.com",
      "offset": 109
    }
  ],
  "location": "SharperImage.user_should_enter_mandatory_fields_like_(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout as a guest",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_enter_valid_card_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Place Order",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 9047413,
  "status": "passed"
});
formatter.before({
  "duration": 15181238,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 8 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir11096_18515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1cdd203874edf4b57cf3de3650bd0717\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.GeneratedMethodAccessor35.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 210,
  "name": "User able to add an item image in mini cart",
  "description": "",
  "id": "mini-cart-validations;user-able-to-add-an-item-image-in-mini-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 211,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 212,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 213,
  "name": "User click the  \"Gadgets\"",
  "keyword": "When "
});
formatter.step({
  "line": 214,
  "name": "User check that the browser title contains \"Gadgets\"",
  "keyword": "Then "
});
formatter.step({
  "line": 215,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 216,
  "name": "User click Add to Cart button",
  "keyword": "When "
});
formatter.step({
  "line": 217,
  "name": "User able to add an item to mini cart",
  "keyword": "Then "
});
formatter.step({
  "line": 218,
  "name": "User able to validate item details and Subtotal",
  "keyword": "Then "
});
formatter.step({
  "line": 219,
  "name": "User able to see the item image in mini cart",
  "keyword": "Then "
});
formatter.step({
  "line": 220,
  "name": "User Click the view cart in mini cart",
  "keyword": "When "
});
formatter.step({
  "line": 221,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 222,
  "name": "User able to see the item with quantity",
  "keyword": "Then "
});
formatter.step({
  "line": 223,
  "name": "User Click the button \"Checkout\"",
  "keyword": "When "
});
formatter.step({
  "line": 224,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_add_to_cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_add_an_item_to_mini_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_validate_item_details_and_subtotal()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_see_the_item_image_in_mini_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_the_view_cart_in_mini_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_see_the_item_with_quantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 11231715,
  "status": "passed"
});
formatter.uri("FeaureFiles/SharperImageWeb/MysteryCoupon.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: prashanth.veldandi@valuelabs.com(QA3)"
    }
  ],
  "line": 4,
  "name": "User able to apply \"Mystery coupon\" (desktop)",
  "description": "",
  "id": "user-able-to-apply-\"mystery-coupon\"-(desktop)",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@SIRegression"
    },
    {
      "line": 3,
      "name": "@Desktop"
    },
    {
      "line": 3,
      "name": "@Thread2"
    },
    {
      "line": 3,
      "name": "@Mystery"
    }
  ]
});
formatter.before({
  "duration": 19779606,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 8 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir11096_18515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1cdd203874edf4b57cf3de3650bd0717\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.GeneratedMethodAccessor35.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 8,
  "name": "User able to apply \"Mystery coupon\" on single item",
  "description": "",
  "id": "user-able-to-apply-\"mystery-coupon\"-(desktop);user-able-to-apply-\"mystery-coupon\"-on-single-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User click the  \"For Her\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User check that the browser title contains \"For Her\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User Click the button \"Add To Cart\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User should select quantity as 1",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User Click the button \"Checkout\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User Click the button \"Checkout as a guest\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User check that the browser title contains \"Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User enter Valid promo code",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User Click the button \"Apply\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "Promotions:"
      ],
      "line": 25
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User should able to see the promotion code price",
  "keyword": "And "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "For Her",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "For Her",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    }
  ],
  "location": "SharperImage.user_should_select_quantity_as(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "firstname",
      "offset": 40
    },
    {
      "val": "lastname",
      "offset": 50
    },
    {
      "val": "2444 Merchant Ave 103",
      "offset": 59
    },
    {
      "val": "Odessa",
      "offset": 82
    },
    {
      "val": "FL",
      "offset": 89
    },
    {
      "val": "33556",
      "offset": 92
    },
    {
      "val": "7272648454",
      "offset": 98
    },
    {
      "val": "test@gmail.com",
      "offset": 109
    }
  ],
  "location": "SharperImage.user_should_enter_mandatory_fields_like_(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout as a guest",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Valid",
      "offset": 11
    }
  ],
  "location": "commonStepDefinations.user_enter_promo_code(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Apply",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_should_able_to_see_the_promotion_code_price()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 15583877,
  "status": "passed"
});
formatter.before({
  "duration": 15179015,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 7 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir11096_18515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1cdd203874edf4b57cf3de3650bd0717\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.GeneratedMethodAccessor35.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 29,
  "name": "User able to apply \"Mystery coupon\" on Multiple item",
  "description": "",
  "id": "user-able-to-apply-\"mystery-coupon\"-(desktop);user-able-to-apply-\"mystery-coupon\"-on-multiple-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User click the  \"For Her\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User check that the browser title contains \"For Her\"",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User Click the button \"Add To Cart\"",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User should select quantity as 1",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User click the  \"For Him\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "User check that the browser title contains \"For Him\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "User Click the button \"Add To Cart\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "User should select quantity as 1",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "User Click the button \"Checkout\"",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "User Click the button \"Checkout as a guest\"",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "User check that the browser title contains \"Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "User enter Valid promo code",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "User Click the button \"Apply\"",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "Promotions:"
      ],
      "line": 52
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "User should able to see the promotion code price",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User should enter valid card details",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User Click the button \"Place Order\"",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "Thank You For Your Order!"
      ],
      "line": 57
    },
    {
      "cells": [
        "Your Order Number is"
      ],
      "line": 58
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "For Her",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "For Her",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    }
  ],
  "location": "SharperImage.user_should_select_quantity_as(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "For Him",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "For Him",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    }
  ],
  "location": "SharperImage.user_should_select_quantity_as(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "firstname",
      "offset": 40
    },
    {
      "val": "lastname",
      "offset": 50
    },
    {
      "val": "2444 Merchant Ave 103",
      "offset": 59
    },
    {
      "val": "Odessa",
      "offset": 82
    },
    {
      "val": "FL",
      "offset": 89
    },
    {
      "val": "33556",
      "offset": 92
    },
    {
      "val": "7272648454",
      "offset": 98
    },
    {
      "val": "test@gmail.com",
      "offset": 109
    }
  ],
  "location": "SharperImage.user_should_enter_mandatory_fields_like_(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout as a guest",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Valid",
      "offset": 11
    }
  ],
  "location": "commonStepDefinations.user_enter_promo_code(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Apply",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_should_able_to_see_the_promotion_code_price()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_enter_valid_card_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Place Order",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 10908181,
  "status": "passed"
});
formatter.before({
  "duration": 12703176,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 5 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir11096_18515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1cdd203874edf4b57cf3de3650bd0717\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.GeneratedMethodAccessor35.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 61,
  "name": "User should able to continue shopping after item adding to the cart by clicking the \"Continue shopping\"",
  "description": "",
  "id": "user-able-to-apply-\"mystery-coupon\"-(desktop);user-should-able-to-continue-shopping-after-item-adding-to-the-cart-by-clicking-the-\"continue-shopping\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 62,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "User click the  \"For Her\"",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "User check that the browser title contains \"For Her\"",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "User Click the button \"Add To Cart\"",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "User should select quantity as 1",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User click the Continue Shopping",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "User check that the browser title contains \"For Her\"",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "User Click the button \"Add To Cart\"",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "User should select quantity as 3",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "User Click the button \"Checkout\"",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "User Click the button \"Checkout as a guest\"",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "User check that the browser title contains \"Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "User should enter valid card details",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "User Click the button \"Place Order\"",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "Thank You For Your Order!"
      ],
      "line": 84
    },
    {
      "cells": [
        "Your Order Number is"
      ],
      "line": 85
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "For Her",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "For Her",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    }
  ],
  "location": "SharperImage.user_should_select_quantity_as(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_the_continue_shopping()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "For Her",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 31
    }
  ],
  "location": "SharperImage.user_should_select_quantity_as(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "firstname",
      "offset": 40
    },
    {
      "val": "lastname",
      "offset": 50
    },
    {
      "val": "2444 Merchant Ave 103",
      "offset": 59
    },
    {
      "val": "Odessa",
      "offset": 82
    },
    {
      "val": "FL",
      "offset": 89
    },
    {
      "val": "33556",
      "offset": 92
    },
    {
      "val": "7272648454",
      "offset": 98
    },
    {
      "val": "test@gmail.com",
      "offset": 109
    }
  ],
  "location": "SharperImage.user_should_enter_mandatory_fields_like_(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout as a guest",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_enter_valid_card_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Place Order",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 8784319,
  "status": "passed"
});
formatter.before({
  "duration": 15183903,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 7 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir11096_18515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1cdd203874edf4b57cf3de3650bd0717\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.GeneratedMethodAccessor35.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 87,
  "name": "User save shopping cart by email to order later",
  "description": "",
  "id": "user-able-to-apply-\"mystery-coupon\"-(desktop);user-save-shopping-cart-by-email-to-order-later",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 88,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 89,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "User click the  \"For Her\"",
  "keyword": "When "
});
formatter.step({
  "line": 91,
  "name": "User check that the browser title contains \"For Her\"",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "User Click the button \"Add To Cart\"",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "User should select quantity as 1",
  "keyword": "When "
});
formatter.step({
  "line": 96,
  "name": "User Click the \"popup-start-saveCart\" by \"id\"",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "User enter email to save cart",
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "User navigate to email and click the cart link",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "User switch window",
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "User Click the button \"Checkout\"",
  "keyword": "When "
});
formatter.step({
  "line": 102,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 103,
  "name": "User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com",
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "User Click the button \"Checkout as a guest\"",
  "keyword": "When "
});
formatter.step({
  "line": 105,
  "name": "User check that the browser title contains \"Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 106,
  "name": "User close child window and switch back to main window",
  "keyword": "When "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "For Her",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "For Her",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    }
  ],
  "location": "SharperImage.user_should_select_quantity_as(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "popup-start-saveCart",
      "offset": 16
    },
    {
      "val": "id",
      "offset": 42
    }
  ],
  "location": "MobileStepDefinations.user_click_the_something_by_something(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_enter_email_to_save_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_navigate_to_email_and_click_the_cart_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_switch_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "firstname",
      "offset": 40
    },
    {
      "val": "lastname",
      "offset": 50
    },
    {
      "val": "2444 Merchant Ave 103",
      "offset": 59
    },
    {
      "val": "Odessa",
      "offset": 82
    },
    {
      "val": "FL",
      "offset": 89
    },
    {
      "val": "33556",
      "offset": 92
    },
    {
      "val": "7272648454",
      "offset": 98
    },
    {
      "val": "test@gmail.com",
      "offset": 109
    }
  ],
  "location": "SharperImage.user_should_enter_mandatory_fields_like_(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout as a guest",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_close_child_window_and_switch_back_to_main_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 10085123,
  "status": "passed"
});
formatter.before({
  "duration": 15712758,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 7 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir11096_18515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1cdd203874edf4b57cf3de3650bd0717\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.GeneratedMethodAccessor35.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 108,
  "name": "User able to order massage chair with auto promo code applied",
  "description": "",
  "id": "user-able-to-apply-\"mystery-coupon\"-(desktop);user-able-to-order-massage-chair-with-auto-promo-code-applied",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 109,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 110,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 111,
  "name": "User search with \"204399\"",
  "keyword": "When "
});
formatter.step({
  "line": 112,
  "name": "User check that the browser title contains \"Human Touch Zero Gravity\"",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "Human Touch Zero Gravity"
      ],
      "line": 114
    },
    {
      "cells": [
        "Item # 204399"
      ],
      "line": 115
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "User Click the button \"Add To Cart\"",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 118,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "One promo allowed per order  MCHAIRFS"
      ],
      "line": 119
    },
    {
      "cells": [
        "Use promo code MCHAIRFS at checkout."
      ],
      "line": 120
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "User Click the button \"Checkout\"",
  "keyword": "When "
});
formatter.step({
  "line": 122,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 123,
  "name": "User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com",
  "keyword": "Then "
});
formatter.step({
  "line": 124,
  "name": "User Click the button \"Checkout as a guest\"",
  "keyword": "When "
});
formatter.step({
  "line": 125,
  "name": "User check that the browser title contains \"Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 126,
  "name": "User should enter valid card details",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "User Click the button \"Place Order\"",
  "keyword": "When "
});
formatter.step({
  "line": 128,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "Thank You For Your Order!"
      ],
      "line": 129
    },
    {
      "cells": [
        "Your Order Number is"
      ],
      "line": 130
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "204399",
      "offset": 18
    }
  ],
  "location": "commonStepDefinations.user_search_with_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Human Touch Zero Gravity",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "firstname",
      "offset": 40
    },
    {
      "val": "lastname",
      "offset": 50
    },
    {
      "val": "2444 Merchant Ave 103",
      "offset": 59
    },
    {
      "val": "Odessa",
      "offset": 82
    },
    {
      "val": "FL",
      "offset": 89
    },
    {
      "val": "33556",
      "offset": 92
    },
    {
      "val": "7272648454",
      "offset": 98
    },
    {
      "val": "test@gmail.com",
      "offset": 109
    }
  ],
  "location": "SharperImage.user_should_enter_mandatory_fields_like_(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout as a guest",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_enter_valid_card_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Place Order",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 15479884,
  "status": "passed"
});
formatter.before({
  "duration": 19611616,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 6 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir11096_18515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1cdd203874edf4b57cf3de3650bd0717\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.GeneratedMethodAccessor35.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 133,
  "name": "User able to validate few items(massage chair) which have only ground mode delivery",
  "description": "",
  "id": "user-able-to-apply-\"mystery-coupon\"-(desktop);user-able-to-validate-few-items(massage-chair)-which-have-only-ground-mode-delivery",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 134,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 135,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 136,
  "name": "User search with \"204399\"",
  "keyword": "When "
});
formatter.step({
  "line": 137,
  "name": "User check that the browser title contains \"Human Touch Zero Gravity\"",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "Human Touch Zero Gravity"
      ],
      "line": 139
    },
    {
      "cells": [
        "Item # 204399"
      ],
      "line": 140
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "User Click the button \"Add To Cart\"",
  "keyword": "When "
});
formatter.step({
  "line": 142,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 143,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "One promo allowed per order  MCHAIRFS"
      ],
      "line": 144
    },
    {
      "cells": [
        "Use promo code MCHAIRFS at checkout."
      ],
      "line": 145
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "User able to see only groud shipping option",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "User Click the button \"Checkout\"",
  "keyword": "When "
});
formatter.step({
  "line": 148,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 149,
  "name": "User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com",
  "keyword": "Then "
});
formatter.step({
  "line": 150,
  "name": "User Click the button \"Checkout as a guest\"",
  "keyword": "When "
});
formatter.step({
  "line": 151,
  "name": "User check that the browser title contains \"Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 152,
  "name": "User should enter valid card details",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "User Click the button \"Place Order\"",
  "keyword": "When "
});
formatter.step({
  "line": 154,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "Thank You For Your Order!"
      ],
      "line": 155
    },
    {
      "cells": [
        "Your Order Number is"
      ],
      "line": 156
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "204399",
      "offset": 18
    }
  ],
  "location": "commonStepDefinations.user_search_with_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Human Touch Zero Gravity",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_see_only_groud_shipping_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "firstname",
      "offset": 40
    },
    {
      "val": "lastname",
      "offset": 50
    },
    {
      "val": "2444 Merchant Ave 103",
      "offset": 59
    },
    {
      "val": "Odessa",
      "offset": 82
    },
    {
      "val": "FL",
      "offset": 89
    },
    {
      "val": "33556",
      "offset": 92
    },
    {
      "val": "7272648454",
      "offset": 98
    },
    {
      "val": "test@gmail.com",
      "offset": 109
    }
  ],
  "location": "SharperImage.user_should_enter_mandatory_fields_like_(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout as a guest",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_enter_valid_card_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Place Order",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 14464840,
  "status": "passed"
});
formatter.uri("FeaureFiles/SharperImageWeb/PaymentMethodpage.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: prashanth.veldandi@valuelabs.com(QA16)"
    }
  ],
  "line": 3,
  "name": "Validate Payment Page(Desktop)",
  "description": "",
  "id": "validate-payment-page(desktop)",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@SIRegression"
    },
    {
      "line": 2,
      "name": "@Desktop"
    },
    {
      "line": 2,
      "name": "@Payment"
    },
    {
      "line": 2,
      "name": "@Thread2"
    }
  ]
});
formatter.before({
  "duration": 20511558,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir11096_18515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1cdd203874edf4b57cf3de3650bd0717\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.GeneratedMethodAccessor35.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 6,
  "name": "Edit shipping address from Payment Method page (desktop)",
  "description": "",
  "id": "validate-payment-page(desktop);edit-shipping-address-from-payment-method-page-(desktop)",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Payment"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click the  \"Gadgets\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User check that the browser title contains \"Gadgets\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User Click the button \"Add To Cart\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User should select quantity as 2",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Price need to update by Quantity",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User Click the button \"Checkout\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User Click the button \"Checkout as a guest\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User check that the browser title contains \"Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User click the edit of \"Shipping Address\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User should enter Mandatory fields like updatefirstname,updatedlastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User Click the button \"Checkout as a guest\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User check that the browser title contains \"Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "updatefirstname"
      ],
      "line": 27
    },
    {
      "cells": [
        "updatedlastname"
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User should enter valid card details",
  "keyword": "And "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    }
  ],
  "location": "SharperImage.user_should_select_quantity_as(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.price_need_to_update_by_Quantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "firstname",
      "offset": 40
    },
    {
      "val": "lastname",
      "offset": 50
    },
    {
      "val": "2444 Merchant Ave 103",
      "offset": 59
    },
    {
      "val": "Odessa",
      "offset": 82
    },
    {
      "val": "FL",
      "offset": 89
    },
    {
      "val": "33556",
      "offset": 92
    },
    {
      "val": "7272648454",
      "offset": 98
    },
    {
      "val": "test@gmail.com",
      "offset": 109
    }
  ],
  "location": "SharperImage.user_should_enter_mandatory_fields_like_(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout as a guest",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Address",
      "offset": 24
    }
  ],
  "location": "SharperImage.user_click_the_edit_of_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "updatefirstname",
      "offset": 40
    },
    {
      "val": "updatedlastname",
      "offset": 56
    },
    {
      "val": "2444 Merchant Ave 103",
      "offset": 72
    },
    {
      "val": "Odessa",
      "offset": 95
    },
    {
      "val": "FL",
      "offset": 102
    },
    {
      "val": "33556",
      "offset": 105
    },
    {
      "val": "7272648454",
      "offset": 111
    },
    {
      "val": "test@gmail.com",
      "offset": 122
    }
  ],
  "location": "SharperImage.user_should_enter_mandatory_fields_like_(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout as a guest",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_enter_valid_card_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 9656706,
  "status": "passed"
});
formatter.before({
  "duration": 13720888,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 6 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir11096_18515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1cdd203874edf4b57cf3de3650bd0717\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.GeneratedMethodAccessor35.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 32,
  "name": "Edit billing address from Payment Method page (desktop)",
  "description": "",
  "id": "validate-payment-page(desktop);edit-billing-address-from-payment-method-page-(desktop)",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@Payment"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User click the  \"Gadgets\"",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User check that the browser title contains \"Gadgets\"",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User Click the button \"Add To Cart\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "User should select quantity as 1",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "User Click the button \"Checkout\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "User choose the option \"No, the address on record with my credit card is different\" in the Billing",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "User should enter Mandatory fields like first,last,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test123@gmail.com",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "User enter the password",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "User enter the conform password",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User Click the button \"Create an Account \u0026 Continue\"",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "User check that the browser title contains \"Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "User click the edit of \"Shipping Address\"",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "User check that the browser title contains \"Billing Address\"",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "User should enter Mandatory fields like updatefirstname,updatedlastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "User Click the button \"Checkout as a guest\"",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "User check that the browser title contains \"Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "updatefirstname"
      ],
      "line": 56
    },
    {
      "cells": [
        "updatedlastname"
      ],
      "line": 57
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User should enter valid card details",
  "keyword": "And "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    }
  ],
  "location": "SharperImage.user_should_select_quantity_as(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "firstname",
      "offset": 40
    },
    {
      "val": "lastname",
      "offset": 50
    },
    {
      "val": "2444 Merchant Ave 103",
      "offset": 59
    },
    {
      "val": "Odessa",
      "offset": 82
    },
    {
      "val": "FL",
      "offset": 89
    },
    {
      "val": "33556",
      "offset": 92
    },
    {
      "val": "7272648454",
      "offset": 98
    },
    {
      "val": "test@gmail.com",
      "offset": 109
    }
  ],
  "location": "SharperImage.user_should_enter_mandatory_fields_like_(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "No, the address on record with my credit card is different",
      "offset": 24
    }
  ],
  "location": "SharperImage.user_choose_the_option_something_in_the_billing(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "first",
      "offset": 40
    },
    {
      "val": "last",
      "offset": 46
    },
    {
      "val": "2444 Merchant Ave 103",
      "offset": 51
    },
    {
      "val": "Odessa",
      "offset": 74
    },
    {
      "val": "FL",
      "offset": 81
    },
    {
      "val": "33556",
      "offset": 84
    },
    {
      "val": "7272648454",
      "offset": 90
    },
    {
      "val": "test123@gmail.com",
      "offset": 101
    }
  ],
  "location": "SharperImage.user_should_enter_mandatory_fields_like_(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_enter_the_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_enter_the_conform_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Create an Account \u0026 Continue",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Address",
      "offset": 24
    }
  ],
  "location": "SharperImage.user_click_the_edit_of_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Billing Address",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "updatefirstname",
      "offset": 40
    },
    {
      "val": "updatedlastname",
      "offset": 56
    },
    {
      "val": "2444 Merchant Ave 103",
      "offset": 72
    },
    {
      "val": "Odessa",
      "offset": 95
    },
    {
      "val": "FL",
      "offset": 102
    },
    {
      "val": "33556",
      "offset": 105
    },
    {
      "val": "7272648454",
      "offset": 111
    },
    {
      "val": "test@gmail.com",
      "offset": 122
    }
  ],
  "location": "SharperImage.user_should_enter_mandatory_fields_like_(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout as a guest",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_enter_valid_card_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 10428656,
  "status": "passed"
});
formatter.before({
  "duration": 15692760,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 7 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir11096_18515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1cdd203874edf4b57cf3de3650bd0717\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.GeneratedMethodAccessor35.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 61,
  "name": "Edit Shipping Method from Payment Method page (desktop)",
  "description": "",
  "id": "validate-payment-page(desktop);edit-shipping-method-from-payment-method-page-(desktop)",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 60,
      "name": "@Payment"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "User login to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "User click the cart",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "User clear the cart items",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "User click the  \"Man Cave\"",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "User check that the browser title contains \"Man Cave\"",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User Click the button \"Add To Cart\"",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "User should select quantity as 1",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "User should able to choose the Shipping Options",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "User Click the button \"Checkout\"",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "User Click the button \"Continue to payment\"",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "User check that the browser title contains \"Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "User click the edit of \"Shipping Method\"",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "User check that the browser title contains \"Billing Address\"",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "User should able to change the Shipping Options",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "User Click the button \"Checkout\"",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "User Click the button \"Continue to payment\"",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "User check that the browser title contains \"Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "User able to see shippingtype update",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "User should enter valid card details",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "User logout from application",
  "keyword": "And "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_login_to_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_clear_the_cart_items()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Man Cave",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Man Cave",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    }
  ],
  "location": "SharperImage.user_should_select_quantity_as(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_able_to_choose_the_shipping_options()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "firstname",
      "offset": 40
    },
    {
      "val": "lastname",
      "offset": 50
    },
    {
      "val": "2444 Merchant Ave 103",
      "offset": 59
    },
    {
      "val": "Odessa",
      "offset": 82
    },
    {
      "val": "FL",
      "offset": 89
    },
    {
      "val": "33556",
      "offset": 92
    },
    {
      "val": "7272648454",
      "offset": 98
    },
    {
      "val": "test@gmail.com",
      "offset": 109
    }
  ],
  "location": "SharperImage.user_should_enter_mandatory_fields_like_(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Continue to payment",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Method",
      "offset": 24
    }
  ],
  "location": "SharperImage.user_click_the_edit_of_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Billing Address",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_able_to_change_the_shipping_options()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Continue to payment",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_see_shippingtype_updated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_enter_valid_card_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_logout_from_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 8873202,
  "status": "passed"
});
formatter.before({
  "duration": 12770727,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 5 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir11096_18515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1cdd203874edf4b57cf3de3650bd0717\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.GeneratedMethodAccessor35.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 115,
  "name": "Apply Gift certificate/cash back coupon from Payment Method page (desktop,ND-2222)",
  "description": "",
  "id": "validate-payment-page(desktop);apply-gift-certificate/cash-back-coupon-from-payment-method-page-(desktop,nd-2222)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 116,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 117,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 118,
  "name": "User click the  \"For Her\"",
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "User check that the browser title contains \"For Her\"",
  "keyword": "Then "
});
formatter.step({
  "line": 120,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 121,
  "name": "User Click the button \"Add To Cart\"",
  "keyword": "When "
});
formatter.step({
  "line": 122,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 123,
  "name": "User should select quantity as 1",
  "keyword": "When "
});
formatter.step({
  "line": 124,
  "name": "User Click the button \"Checkout\"",
  "keyword": "When "
});
formatter.step({
  "line": 125,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 126,
  "name": "User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com",
  "keyword": "Then "
});
formatter.step({
  "line": 127,
  "name": "User Click the button \"Checkout as a guest\"",
  "keyword": "When "
});
formatter.step({
  "line": 128,
  "name": "User check that the browser title contains \"Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 129,
  "name": "User click the  giftcard",
  "keyword": "When "
});
formatter.step({
  "line": 130,
  "name": "User enter inValid Gift code and click Apply",
  "keyword": "When "
});
formatter.step({
  "line": 131,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "Gift Certificate 12345678 is not a valid certificate"
      ],
      "line": 132
    },
    {
      "cells": [
        "Please check your number and try again."
      ],
      "line": 133
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 134,
  "name": "User enter Valid Gift code and click Apply",
  "keyword": "When "
});
formatter.step({
  "line": 135,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "Certificate 3286216869860747 has"
      ],
      "line": 136
    },
    {
      "cells": [
        "Gift Certificates:"
      ],
      "line": 137
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "For Her",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "For Her",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    }
  ],
  "location": "SharperImage.user_should_select_quantity_as(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "firstname",
      "offset": 40
    },
    {
      "val": "lastname",
      "offset": 50
    },
    {
      "val": "2444 Merchant Ave 103",
      "offset": 59
    },
    {
      "val": "Odessa",
      "offset": 82
    },
    {
      "val": "FL",
      "offset": 89
    },
    {
      "val": "33556",
      "offset": 92
    },
    {
      "val": "7272648454",
      "offset": 98
    },
    {
      "val": "test@gmail.com",
      "offset": 109
    }
  ],
  "location": "SharperImage.user_should_enter_mandatory_fields_like_(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout as a guest",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_click_the_giftcard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "inValid",
      "offset": 11
    }
  ],
  "location": "commonStepDefinations.user_enter_invalid_gift_code(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Valid",
      "offset": 11
    }
  ],
  "location": "commonStepDefinations.user_enter_invalid_gift_code(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 8707435,
  "status": "passed"
});
formatter.uri("FeaureFiles/SharperImageWeb/SideBar.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: prashanth.veldandi@valuelabs.com(QA3)"
    }
  ],
  "line": 4,
  "name": "User able to clcik and View side bar options for web (desktop)",
  "description": "",
  "id": "user-able-to-clcik-and-view-side-bar-options-for-web-(desktop)",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@SIRegression"
    },
    {
      "line": 3,
      "name": "@Desktop"
    },
    {
      "line": 3,
      "name": "@Sidebar"
    },
    {
      "line": 3,
      "name": "@Thread2"
    }
  ]
});
formatter.before({
  "duration": 13956873,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 7 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir11096_18515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1cdd203874edf4b57cf3de3650bd0717\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.GeneratedMethodAccessor35.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 6,
  "name": "User is able to see the best seller products(desktop)",
  "description": "",
  "id": "user-able-to-clcik-and-view-side-bar-options-for-web-(desktop);user-is-able-to-see-the-best-seller-products(desktop)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click the  \"Electronics\" and \"Speakers\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User check that the browser title contains \"Speakers\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User able to click the \"Best Sellers\"from sidetab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User check that the browser title contains \"Best Sellers\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "Best Sellers"
      ],
      "line": 14
    },
    {
      "cells": [
        "Shop Sharper Image Best Sellers to discover"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User click the  \"View All\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User should able to see all the items",
  "keyword": "Then "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 17
    },
    {
      "val": "Speakers",
      "offset": 35
    }
  ],
  "location": "commonStepDefinations.user_click(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Speakers",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Best Sellers",
      "offset": 24
    }
  ],
  "location": "commonStepDefinations.user_able_to_click_the_somethingfrom_sidetab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Best Sellers",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "View All",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_should_able_to_see_all_the_items()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 9095854,
  "status": "passed"
});
formatter.before({
  "duration": 15610987,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 7 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir11096_18515}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1cdd203874edf4b57cf3de3650bd0717\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.GeneratedMethodAccessor35.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 35,
  "name": "User is able to see the JustAdded option of SI Web(desktop)",
  "description": "",
  "id": "user-able-to-clcik-and-view-side-bar-options-for-web-(desktop);user-is-able-to-see-the-justadded-option-of-si-web(desktop)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User click the  \"Massage\" and \"Massage Chairs\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "User check that the browser title contains \"Massage Chairs\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "User able to click the \"Just Added\"from sidetab",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "User check that the browser title contains \"New Arrivals\"",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "New Arrivals"
      ],
      "line": 43
    },
    {
      "cells": [
        "Looking for the newest gadgets and gifts?"
      ],
      "line": 44
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User click the  \"View All\"",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "User should able to see all the items",
  "keyword": "Then "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Massage",
      "offset": 17
    },
    {
      "val": "Massage Chairs",
      "offset": 31
    }
  ],
  "location": "commonStepDefinations.user_click(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Massage Chairs",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Just Added",
      "offset": 24
    }
  ],
  "location": "commonStepDefinations.user_able_to_click_the_somethingfrom_sidetab(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "New Arrivals",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "View All",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_should_able_to_see_all_the_items()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 8171026,
  "status": "passed"
});
.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Create an Account \u0026 Continue",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_enter_valid_card_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Place Order",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_is_able_to_see_the_order_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_see_and_validate_the_vip_popup(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "with",
      "offset": 22
    }
  ],
  "location": "SharperImage.user_sign_up_for_vip_something_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "START SAVING NOW",
      "offset": 16
    }
  ],
  "location": "SharperImage.user_clcik_the_close_vip_popup(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_see_vip_thankyou_pop_up(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_is_able_to_close_vip_thankyou_pop_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_refresh_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_logout_from_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 6629792,
  "status": "passed"
});
formatter.before({
  "duration": 14764820,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 5 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir6636_25203}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 6e37e749b905410081a862cb8637a434\r\n\tat sun.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.GeneratedMethodAccessor36.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 148,
  "name": "Validate as guest login during checkout convertion to VIP",
  "description": "",
  "id": "vip-feature-validation;validate-as-guest-login-during-checkout-convertion-to-vip",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 149,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 150,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 151,
  "name": "User click the  \"For Her\"",
  "keyword": "When "
});
formatter.step({
  "line": 152,
  "name": "User check that the browser title contains \"For Her\"",
  "keyword": "Then "
});
formatter.step({
  "line": 153,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 154,
  "name": "User Click the button \"Add To Cart\"",
  "keyword": "When "
});
formatter.step({
  "line": 155,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "User Click the button \"Checkout\"",
  "keyword": "When "
});
formatter.step({
  "line": 157,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 158,
  "name": "User should able to see \"Guest Checkout\" radio button and must be set to \"ON\"",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "User should able to see \"Returning Customer\" radio button and must be set to \"ON\"",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "User should able to see the login fields",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "User enter login details and click login button",
  "keyword": "When "
});
formatter.step({
  "line": 162,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 163,
  "name": "User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com",
  "keyword": "Then "
});
formatter.step({
  "line": 164,
  "name": "User Click the button \"Continue to payment\"",
  "keyword": "When "
});
formatter.step({
  "line": 165,
  "name": "User check that the browser title contains \"Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 166,
  "name": "User should enter valid card details",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "User Click the button \"Place Order\"",
  "keyword": "When "
});
formatter.step({
  "line": 168,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "Thank You For Your Order!"
      ],
      "line": 169
    },
    {
      "cells": [
        "Your Order Number is"
      ],
      "line": 170
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 171,
  "name": "User is able to see the order number",
  "keyword": "Then "
});
formatter.step({
  "line": 172,
  "name": "User able to see and validate the VIP popup",
  "rows": [
    {
      "cells": [
        "20% Cash Back on all future purchases"
      ],
      "line": 173
    },
    {
      "cells": [
        "Express checkout on future orders"
      ],
      "line": 174
    },
    {
      "cells": [
        "Exclusive email offers and pre-order opportunities"
      ],
      "line": 175
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "User click the \"close\" VIP popup",
  "keyword": "When "
});
formatter.step({
  "line": 177,
  "name": "User logout from application",
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "For Her",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "For Her",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Guest Checkout",
      "offset": 25
    },
    {
      "val": "ON",
      "offset": 74
    }
  ],
  "location": "commonStepDefinations.user_should_able_to_see_something_radio_button_and_must_be_set_to_something(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Returning Customer",
      "offset": 25
    },
    {
      "val": "ON",
      "offset": 78
    }
  ],
  "location": "commonStepDefinations.user_should_able_to_see_something_radio_button_and_must_be_set_to_something(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_able_to_see_the_login_fields()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_enter_login_details_and_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "firstname",
      "offset": 40
    },
    {
      "val": "lastname",
      "offset": 50
    },
    {
      "val": "2444 Merchant Ave 103",
      "offset": 59
    },
    {
      "val": "Odessa",
      "offset": 82
    },
    {
      "val": "FL",
      "offset": 89
    },
    {
      "val": "33556",
      "offset": 92
    },
    {
      "val": "7272648454",
      "offset": 98
    },
    {
      "val": "test@gmail.com",
      "offset": 109
    }
  ],
  "location": "SharperImage.user_should_enter_mandatory_fields_like_(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Continue to payment",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_enter_valid_card_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Place Order",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_is_able_to_see_the_order_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_see_and_validate_the_vip_popup(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "close",
      "offset": 16
    }
  ],
  "location": "SharperImage.user_clcik_the_close_vip_popup(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_logout_from_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 13190255,
  "status": "passed"
});
formatter.before({
  "duration": 7603952,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 4 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir6636_25203}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 6e37e749b905410081a862cb8637a434\r\n\tat sun.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.GeneratedMethodAccessor36.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 180,
  "name": "VIP - Badge and marketing content changes user side banner",
  "description": "",
  "id": "vip-feature-validation;vip---badge-and-marketing-content-changes-user-side-banner",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 181,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 182,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 183,
  "name": "User login to the application as VIP user",
  "keyword": "Given "
});
formatter.step({
  "line": 184,
  "name": "User click the cart",
  "keyword": "When "
});
formatter.step({
  "line": 185,
  "name": "User clear the cart items",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "User click the  \"For Him\"",
  "keyword": "When "
});
formatter.step({
  "line": 187,
  "name": "User check that the browser title contains \"For Him\"",
  "keyword": "Then "
});
formatter.step({
  "line": 188,
  "name": "User able to see the VIP badge",
  "keyword": "Then "
});
formatter.step({
  "line": 189,
  "name": "User logout from application",
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_login_to_the_application_as_vip_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_clear_the_cart_items()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "For Him",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "For Him",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_see_the_vip_badge()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_logout_from_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4321053,
  "status": "passed"
});
formatter.before({
  "duration": 6357365,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 3 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir6636_25203}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 6e37e749b905410081a862cb8637a434\r\n\tat sun.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.GeneratedMethodAccessor36.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 192,
  "name": "VIP - Thank you page for disclaimer and benefits through the email",
  "description": "",
  "id": "vip-feature-validation;vip---thank-you-page-for-disclaimer-and-benefits-through-the-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 193,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 194,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 195,
  "name": "User click the  \"Gadgets\"",
  "keyword": "When "
});
formatter.step({
  "line": 196,
  "name": "User check that the browser title contains \"Gadgets\"",
  "keyword": "Then "
});
formatter.step({
  "line": 197,
  "name": "User select the \"Price\" with filter \"100-150\"",
  "keyword": "When "
});
formatter.step({
  "line": 198,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 199,
  "name": "User Click the button \"Add To Cart\"",
  "keyword": "When "
});
formatter.step({
  "line": 200,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 201,
  "name": "User should select quantity as 2",
  "keyword": "When "
});
formatter.step({
  "line": 202,
  "name": "Price need to update by Quantity",
  "keyword": "Then "
});
formatter.step({
  "line": 203,
  "name": "User Click the button \"Checkout\"",
  "keyword": "When "
});
formatter.step({
  "line": 204,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 205,
  "name": "User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com",
  "keyword": "Then "
});
formatter.step({
  "line": 206,
  "name": "User Click the button \"Checkout as a guest\"",
  "keyword": "When "
});
formatter.step({
  "line": 207,
  "name": "User check that the browser title contains \"Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 208,
  "name": "User should enter valid card details",
  "keyword": "And "
});
formatter.step({
  "line": 209,
  "name": "User Click the button \"Place Order\"",
  "keyword": "When "
});
formatter.step({
  "line": 210,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "Thank You For Your Order!"
      ],
      "line": 211
    },
    {
      "cells": [
        "Your Order Number is"
      ],
      "line": 212
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 213,
  "name": "User is able to see the order number",
  "keyword": "Then "
});
formatter.step({
  "line": 214,
  "name": "User able to see and validate the VIP popup",
  "rows": [
    {
      "cells": [
        "20% Cash Back on all future purchases"
      ],
      "line": 215
    },
    {
      "cells": [
        "Express checkout on future orders"
      ],
      "line": 216
    },
    {
      "cells": [
        "Exclusive email offers and pre-order opportunities"
      ],
      "line": 217
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 218,
  "name": "User sign up for VIP \"with\" password",
  "keyword": "When "
});
formatter.step({
  "line": 219,
  "name": "User click the \"START SAVING NOW\" VIP popup",
  "keyword": "When "
});
formatter.step({
  "line": 220,
  "name": "User able to see VIP thankyou pop up",
  "rows": [
    {
      "cells": [
        "THANK YOU FOR SIGNING UP FOR OUR VIP PROGRAM!"
      ],
      "line": 221
    },
    {
      "cells": [
        "Check your inbox for a welcome email with further details. See you soon!"
      ],
      "line": 222
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 223,
  "name": "User is able to close VIP thankyou pop up",
  "keyword": "When "
});
formatter.step({
  "line": 224,
  "name": "User refresh the page",
  "keyword": "And "
});
formatter.step({
  "line": 225,
  "name": "User logout from application",
  "keyword": "And "
});
formatter.step({
  "line": 226,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 227,
  "name": "User get the VIP welcome Email",
  "keyword": "Then "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Price",
      "offset": 17
    },
    {
      "val": "100-150",
      "offset": 37
    }
  ],
  "location": "commonStepDefinations.user_select_the_something_with_filter_something(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    }
  ],
  "location": "SharperImage.user_should_select_quantity_as(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.price_need_to_update_by_Quantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "firstname",
      "offset": 40
    },
    {
      "val": "lastname",
      "offset": 50
    },
    {
      "val": "2444 Merchant Ave 103",
      "offset": 59
    },
    {
      "val": "Odessa",
      "offset": 82
    },
    {
      "val": "FL",
      "offset": 89
    },
    {
      "val": "33556",
      "offset": 92
    },
    {
      "val": "7272648454",
      "offset": 98
    },
    {
      "val": "test@gmail.com",
      "offset": 109
    }
  ],
  "location": "SharperImage.user_should_enter_mandatory_fields_like_(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout as a guest",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_enter_valid_card_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Place Order",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_is_able_to_see_the_order_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_see_and_validate_the_vip_popup(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "with",
      "offset": 22
    }
  ],
  "location": "SharperImage.user_sign_up_for_vip_something_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "START SAVING NOW",
      "offset": 16
    }
  ],
  "location": "SharperImage.user_clcik_the_close_vip_popup(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_see_vip_thankyou_pop_up(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_is_able_to_close_vip_thankyou_pop_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_refresh_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_logout_from_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_get_the_vip_welcome_email()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 5100558,
  "status": "passed"
});
formatter.before({
  "duration": 7765718,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 3 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir6636_25203}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 6e37e749b905410081a862cb8637a434\r\n\tat sun.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.GeneratedMethodAccessor36.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 229,
  "name": "User validate double VIP cash back for an item which is eligible for cash back",
  "description": "",
  "id": "vip-feature-validation;user-validate-double-vip-cash-back-for-an-item-which-is-eligible-for-cash-back",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 230,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 231,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 232,
  "name": "User login to the application as VIP user",
  "keyword": "Given "
});
formatter.step({
  "line": 233,
  "name": "User click the cart",
  "keyword": "When "
});
formatter.step({
  "line": 234,
  "name": "User clear the cart items",
  "keyword": "And "
});
formatter.step({
  "line": 235,
  "name": "User click the  \"Gadgets\"",
  "keyword": "When "
});
formatter.step({
  "line": 236,
  "name": "User check that the browser title contains \"Gadgets\"",
  "keyword": "Then "
});
formatter.step({
  "line": 237,
  "name": "User select the \"Price\" with filter \"100-150\"",
  "keyword": "When "
});
formatter.step({
  "line": 238,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 239,
  "name": "User Click the button \"Add To Cart\"",
  "keyword": "When "
});
formatter.step({
  "line": 240,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 241,
  "name": "User should select quantity as 2",
  "keyword": "When "
});
formatter.step({
  "line": 242,
  "name": "Price need to update by Quantity",
  "keyword": "Then "
});
formatter.step({
  "line": 243,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "Your Entire Order Qualifies for a 20% Cash Back coupon"
      ],
      "line": 244
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 245,
  "name": "User validated the VIP cashback",
  "keyword": "Then "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_login_to_the_application_as_vip_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_clear_the_cart_items()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Price",
      "offset": 17
    },
    {
      "val": "100-150",
      "offset": 37
    }
  ],
  "location": "commonStepDefinations.user_select_the_something_with_filter_something(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    }
  ],
  "location": "SharperImage.user_should_select_quantity_as(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.price_need_to_update_by_Quantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_validated_the_vip_cashback()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 7511069,
  "status": "passed"
});
formatter.before({
  "duration": 9208736,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 3 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir6636_25203}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 6e37e749b905410081a862cb8637a434\r\n\tat sun.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.GeneratedMethodAccessor36.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 247,
  "name": "Existing user convertion to VIP member with wrong password",
  "description": "",
  "id": "vip-feature-validation;existing-user-convertion-to-vip-member-with-wrong-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 248,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 249,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 250,
  "name": "User click the login",
  "keyword": "When "
});
formatter.step({
  "line": 251,
  "name": "User check that the browser title contains \"Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 252,
  "name": "User Click the Create an Account",
  "keyword": "When "
});
formatter.step({
  "line": 253,
  "name": "User check that the browser title contains \"Register\"",
  "keyword": "Then "
});
formatter.step({
  "line": 254,
  "name": "User enter First Name,Last Name,Email, Confirm Email ,Password,Confirm Password",
  "rows": [
    {
      "cells": [
        "TestFirst",
        "TestLast",
        "@gmail.com",
        "same",
        "Qwerty_1",
        "Qwerty_1",
        ""
      ],
      "line": 255
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 256,
  "name": "User check that the browser title contains \"My Account\"",
  "keyword": "Then "
});
formatter.step({
  "line": 257,
  "name": "User click the  \"For Her\"",
  "keyword": "When "
});
formatter.step({
  "line": 258,
  "name": "User check that the browser title contains \"For Her\"",
  "keyword": "Then "
});
formatter.step({
  "line": 259,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 260,
  "name": "User Click the button \"Add To Cart\"",
  "keyword": "When "
});
formatter.step({
  "line": 261,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 262,
  "name": "User should select quantity as 1",
  "keyword": "When "
});
formatter.step({
  "line": 263,
  "name": "Price need to update by Quantity",
  "keyword": "Then "
});
formatter.step({
  "line": 264,
  "name": "User Click the button \"Checkout\"",
  "keyword": "When "
});
formatter.step({
  "line": 265,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 266,
  "name": "User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com",
  "keyword": "Then "
});
formatter.step({
  "line": 267,
  "name": "User Click the button \"Continue to payment\"",
  "keyword": "When "
});
formatter.step({
  "line": 268,
  "name": "User check that the browser title contains \"Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 269,
  "name": "User should enter valid card details",
  "keyword": "And "
});
formatter.step({
  "line": 270,
  "name": "User Click the button \"Place Order\"",
  "keyword": "When "
});
formatter.step({
  "line": 271,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "Thank You For Your Order!"
      ],
      "line": 272
    },
    {
      "cells": [
        "Your Order Number is"
      ],
      "line": 273
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 274,
  "name": "User is able to see the order number",
  "keyword": "Then "
});
formatter.step({
  "line": 275,
  "name": "User able to see and validate the VIP popup",
  "rows": [
    {
      "cells": [
        "20% Cash Back on all future purchases"
      ],
      "line": 276
    },
    {
      "cells": [
        "Express checkout on future orders"
      ],
      "line": 277
    },
    {
      "cells": [
        "Exclusive email offers and pre-order opportunities"
      ],
      "line": 278
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 279,
  "name": "User sign up for VIP \"wrong\" password",
  "keyword": "When "
});
formatter.step({
  "line": 280,
  "name": "User click the \"START SAVING NOW\" VIP popup",
  "keyword": "When "
});
formatter.step({
  "line": 281,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "Oh no! Something went wrong!"
      ],
      "line": 282
    },
    {
      "cells": [
        "The password is incorrect"
      ],
      "line": 283
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 284,
  "name": "User is able to close VIP thankyou pop up",
  "keyword": "When "
});
formatter.step({
  "line": 285,
  "name": "User logout from application",
  "keyword": "And "
});
formatter.step({
  "line": 286,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_the_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_click_the_create_an_account()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_enter_first_namelast_nameemail_confirm_email_passwordconfirm_password(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "My Account",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "For Her",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "For Her",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    }
  ],
  "location": "SharperImage.user_should_select_quantity_as(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.price_need_to_update_by_Quantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "firstname",
      "offset": 40
    },
    {
      "val": "lastname",
      "offset": 50
    },
    {
      "val": "2444 Merchant Ave 103",
      "offset": 59
    },
    {
      "val": "Odessa",
      "offset": 82
    },
    {
      "val": "FL",
      "offset": 89
    },
    {
      "val": "33556",
      "offset": 92
    },
    {
      "val": "7272648454",
      "offset": 98
    },
    {
      "val": "test@gmail.com",
      "offset": 109
    }
  ],
  "location": "SharperImage.user_should_enter_mandatory_fields_like_(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Continue to payment",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_enter_valid_card_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Place Order",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_is_able_to_see_the_order_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_see_and_validate_the_vip_popup(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "wrong",
      "offset": 22
    }
  ],
  "location": "SharperImage.user_sign_up_for_vip_something_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "START SAVING NOW",
      "offset": 16
    }
  ],
  "location": "SharperImage.user_clcik_the_close_vip_popup(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_is_able_to_close_vip_thankyou_pop_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_logout_from_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4645032,
  "status": "passed"
});
formatter.before({
  "duration": 8112807,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 4 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir6636_25203}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 6e37e749b905410081a862cb8637a434\r\n\tat sun.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.GeneratedMethodAccessor36.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 288,
  "name": "Guest user convertion to VIP member able to login as VIP user",
  "description": "",
  "id": "vip-feature-validation;guest-user-convertion-to-vip-member-able-to-login-as-vip-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 289,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 290,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 291,
  "name": "User click the  \"Gadgets\"",
  "keyword": "When "
});
formatter.step({
  "line": 292,
  "name": "User check that the browser title contains \"Gadgets\"",
  "keyword": "Then "
});
formatter.step({
  "line": 293,
  "name": "User select the \"Price\" with filter \"100-150\"",
  "keyword": "When "
});
formatter.step({
  "line": 294,
  "name": "User selected the item from list",
  "keyword": "When "
});
formatter.step({
  "line": 295,
  "name": "User Click the button \"Add To Cart\"",
  "keyword": "When "
});
formatter.step({
  "line": 296,
  "name": "User check that the browser title contains \"Shopping Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 297,
  "name": "User should select quantity as 1",
  "keyword": "When "
});
formatter.step({
  "line": 298,
  "name": "Price need to update by Quantity",
  "keyword": "Then "
});
formatter.step({
  "line": 299,
  "name": "User Click the button \"Checkout\"",
  "keyword": "When "
});
formatter.step({
  "line": 300,
  "name": "User check that the browser title contains \"Shipping Billing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 301,
  "name": "User should enter Mandatory fields like firstname,lastname,2444 Merchant Ave 103, Odessa,FL,33556,7272648454,test@gmail.com",
  "keyword": "Then "
});
formatter.step({
  "line": 302,
  "name": "User Click the button \"Checkout as a guest\"",
  "keyword": "When "
});
formatter.step({
  "line": 303,
  "name": "User check that the browser title contains \"Payment\"",
  "keyword": "Then "
});
formatter.step({
  "line": 304,
  "name": "User should enter valid card details",
  "keyword": "And "
});
formatter.step({
  "line": 305,
  "name": "User Click the button \"Place Order\"",
  "keyword": "When "
});
formatter.step({
  "line": 306,
  "name": "User able to see below text on page",
  "rows": [
    {
      "cells": [
        "Thank You For Your Order!"
      ],
      "line": 307
    },
    {
      "cells": [
        "Your Order Number is"
      ],
      "line": 308
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 309,
  "name": "User is able to see the order number",
  "keyword": "Then "
});
formatter.step({
  "line": 310,
  "name": "User able to see and validate the VIP popup",
  "rows": [
    {
      "cells": [
        "20% Cash Back on all future purchases"
      ],
      "line": 311
    },
    {
      "cells": [
        "Express checkout on future orders"
      ],
      "line": 312
    },
    {
      "cells": [
        "Exclusive email offers and pre-order opportunities"
      ],
      "line": 313
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 314,
  "name": "User sign up for VIP \"with\" password",
  "keyword": "When "
});
formatter.step({
  "line": 315,
  "name": "User click the \"START SAVING NOW\" VIP popup",
  "keyword": "When "
});
formatter.step({
  "line": 316,
  "name": "User able to see VIP thankyou pop up",
  "rows": [
    {
      "cells": [
        "THANK YOU FOR SIGNING UP FOR OUR VIP PROGRAM!"
      ],
      "line": 317
    },
    {
      "cells": [
        "Check your inbox for a welcome email with further details. See you soon!"
      ],
      "line": 318
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 319,
  "name": "User is able to close VIP thankyou pop up",
  "keyword": "When "
});
formatter.step({
  "line": 320,
  "name": "User refresh the page",
  "keyword": "And "
});
formatter.step({
  "line": 321,
  "name": "User able to see the VIP badge",
  "keyword": "Then "
});
formatter.step({
  "line": 322,
  "name": "User logout from application",
  "keyword": "And "
});
formatter.step({
  "line": 323,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 324,
  "name": "User click the login",
  "keyword": "When "
});
formatter.step({
  "line": 325,
  "name": "User relogin to the application as VIP",
  "keyword": "When "
});
formatter.step({
  "line": 326,
  "name": "User check that the browser title contains \"My Account\"",
  "keyword": "Then "
});
formatter.step({
  "line": 327,
  "name": "User click the  \"Gadgets\"",
  "keyword": "When "
});
formatter.step({
  "line": 328,
  "name": "User able to see the VIP badge",
  "keyword": "Then "
});
formatter.step({
  "line": 329,
  "name": "User logout from application",
  "keyword": "And "
});
formatter.step({
  "line": 330,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Price",
      "offset": 17
    },
    {
      "val": "100-150",
      "offset": 37
    }
  ],
  "location": "commonStepDefinations.user_select_the_something_with_filter_something(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_selected_the_item_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 31
    }
  ],
  "location": "SharperImage.user_should_select_quantity_as(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.price_need_to_update_by_Quantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shipping Billing",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "firstname",
      "offset": 40
    },
    {
      "val": "lastname",
      "offset": 50
    },
    {
      "val": "2444 Merchant Ave 103",
      "offset": 59
    },
    {
      "val": "Odessa",
      "offset": 82
    },
    {
      "val": "FL",
      "offset": 89
    },
    {
      "val": "33556",
      "offset": 92
    },
    {
      "val": "7272648454",
      "offset": 98
    },
    {
      "val": "test@gmail.com",
      "offset": 109
    }
  ],
  "location": "SharperImage.user_should_enter_mandatory_fields_like_(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout as a guest",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Payment",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_enter_valid_card_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Place Order",
      "offset": 23
    }
  ],
  "location": "commonStepDefinations.user_click_the_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_below_text_on_page(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_is_able_to_see_the_order_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_see_and_validate_the_vip_popup(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "with",
      "offset": 22
    }
  ],
  "location": "SharperImage.user_sign_up_for_vip_something_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "START SAVING NOW",
      "offset": 16
    }
  ],
  "location": "SharperImage.user_clcik_the_close_vip_popup(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_see_vip_thankyou_pop_up(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_is_able_to_close_vip_thankyou_pop_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_refresh_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_see_the_vip_badge()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_logout_from_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_click_the_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_relogin_to_the_application_VIP()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "My Account",
      "offset": 44
    }
  ],
  "location": "commonStepDefinations.user_check_that_the_browser_title_contains_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gadgets",
      "offset": 17
    }
  ],
  "location": "commonStepDefinations.user_click1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_see_the_vip_badge()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_logout_from_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 5741849,
  "status": "passed"
});
formatter.before({
  "duration": 6695121,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d61.0.3163.100)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 3 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027SHVLSP3114F1L\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\PRASHA~1.VEL\\AppData\\Local\\Temp\\scoped_dir6636_25203}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d61.0.3163.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 6e37e749b905410081a862cb8637a434\r\n\tat sun.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:773)\r\n\tat BDD.Cucumber.Core.Initialization.GetDriverObject(Initialization.java:377)\r\n\tat BDD.Cucumber.Core.BeforeAfterHooks.deleteAllCookies(BeforeAfterHooks.java:31)\r\n\tat sun.reflect.GeneratedMethodAccessor36.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 360,
  "name": "VIP - Badge and marketing content changes (front end) user side banner",
  "description": "",
  "id": "vip-feature-validation;vip---badge-and-marketing-content-changes-(front-end)-user-side-banner",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 361,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 362,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 363,
  "name": "User login to the application as VIP user",
  "keyword": "Given "
});
formatter.step({
  "line": 364,
  "name": "User able to get side banner",
  "keyword": "Then "
});
formatter.step({
  "line": 365,
  "name": "User logout from application",
  "keyword": "And "
});
formatter.step({
  "line": 366,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 367,
  "name": "User should not able to see the VIP side banner",
  "keyword": "Then "
});
formatter.step({
  "line": 368,
  "name": "User login to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 369,
  "name": "User should not able to see the VIP side banner",
  "keyword": "Then "
});
formatter.step({
  "line": 370,
  "name": "User logout from application",
  "keyword": "And "
});
formatter.step({
  "line": 371,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.match({
  "location": "commonStepDefinations.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_login_to_the_application_as_vip_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_able_to_get_side_banner()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_logout_from_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_not_able_to_see_the_vip_side_banner()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_login_to_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SharperImage.user_should_not_able_to_see_the_vip_side_banner()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_logout_from_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "commonStepDefinations.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3598433,
  "status": "passed"
});
