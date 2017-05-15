$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeaureFiles/SharperImage_Placeorder.feature");
formatter.feature({
  "line": 2,
  "name": "Validate the sharper imagae website by placing an order",
  "description": "",
  "id": "validate-the-sharper-imagae-website-by-placing-an-order",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@PlaceOrder"
    }
  ]
});
formatter.before({
  "duration": 127819397,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Place an order in sharperimage Website",
  "description": "",
  "id": "validate-the-sharper-imagae-website-by-placing-an-order;place-an-order-in-sharperimage-website",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User navigate to sharperimage website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User able to see the Homepage with Categories",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User clicks on gadgets",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should redirect to gadgets page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User able to  filter by Price",
  "keyword": "And "
});
formatter.match({
  "location": "SharperImage.user_navigate_to_sharperimage_website()"
});
formatter.result({
  "duration": 5822534409,
  "status": "passed"
});
formatter.match({
  "location": "SharperImage.user_able_to_see_the_Homepage_with_Categories()"
});
formatter.result({
  "duration": 12957168022,
  "status": "passed"
});
formatter.match({
  "location": "SharperImage.user_clicks_on_gadgets()"
});
formatter.result({
  "duration": 5129331341,
  "status": "passed"
});
formatter.match({
  "location": "SharperImage.user_should_redirect_to_gadgets_page()"
});
formatter.result({
  "duration": 280577042,
  "status": "passed"
});
formatter.match({
  "location": "SharperImage.user_able_to_filter_by_Price()"
});
formatter.result({
  "duration": 2951858361,
  "status": "passed"
});
formatter.after({
  "duration": 68968,
  "status": "passed"
});
});