$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/resources/features/DELETEBooking.feature");
formatter.feature({
  "name": "DELETE Booking",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@DeleteBooking"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Update Partial booking in the API",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Testing environment",
  "keyword": "Given "
});
formatter.step({
  "name": "I pass headers",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ]
});
formatter.step({
  "name": "I pass PathParametres",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "bookingId",
        "\u003cid\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "I set Authorisation token",
  "keyword": "And "
});
formatter.step({
  "name": "I perform DELETE operation \"\u003cresourceName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I should get response \"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "scenario",
        "status",
        "resourceName",
        "id"
      ]
    },
    {
      "cells": [
        "Delete Booking for Johnny",
        "201",
        "DeleteBooking",
        "3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Update Partial booking in the API",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DeleteBooking"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Testing environment",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.getBaseURI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass headers",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CommonSteps.setHeaders(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass PathParametres",
  "rows": [
    {
      "cells": [
        "bookingId",
        "3"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.setPathParam(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I set Authorisation token",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.setAuthorisationToken()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I perform DELETE operation \"DeleteBooking\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.invokeDELETEOperation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get response \"201\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.verifyHTTPStatusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});