$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/resources/features/GETBookingAPI.feature");
formatter.feature({
  "name": "GetBooking - Booking ID",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@GetBookingApi"
    }
  ]
});
formatter.scenarioOutline({
  "name": "1)Returns a specific booking based upon the booking id provided",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetBookingbyId"
    }
  ]
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
        "Accept",
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
  "name": "I perform GET operation \"\u003cresourceName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I should get response \"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.step({
  "name": "response Body contains",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "firstname"
      ]
    },
    {
      "cells": [
        "lastname"
      ]
    },
    {
      "cells": [
        "totalprice"
      ]
    },
    {
      "cells": [
        "depositpaid"
      ]
    },
    {
      "cells": [
        "additionalneeds"
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "status",
        "resourceName",
        "id"
      ]
    },
    {
      "cells": [
        "200",
        "GetBooking",
        "7"
      ]
    },
    {
      "cells": [
        "200",
        "GetBooking",
        "8"
      ]
    },
    {
      "cells": [
        "200",
        "GetBooking",
        "17"
      ]
    }
  ]
});
formatter.scenario({
  "name": "1)Returns a specific booking based upon the booking id provided",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetBookingApi"
    },
    {
      "name": "@GetBookingbyId"
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
        "Accept",
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
        "7"
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
  "name": "I perform GET operation \"GetBooking\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.invokeGETOperation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get response \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.verifyHTTPStatusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.verifyResponseContentType()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response Body contains",
  "rows": [
    {
      "cells": [
        "firstname"
      ]
    },
    {
      "cells": [
        "lastname"
      ]
    },
    {
      "cells": [
        "totalprice"
      ]
    },
    {
      "cells": [
        "depositpaid"
      ]
    },
    {
      "cells": [
        "additionalneeds"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.verifyResponseBodyValues(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "1)Returns a specific booking based upon the booking id provided",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetBookingApi"
    },
    {
      "name": "@GetBookingbyId"
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
        "Accept",
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
        "8"
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
  "name": "I perform GET operation \"GetBooking\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.invokeGETOperation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get response \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.verifyHTTPStatusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.verifyResponseContentType()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response Body contains",
  "rows": [
    {
      "cells": [
        "firstname"
      ]
    },
    {
      "cells": [
        "lastname"
      ]
    },
    {
      "cells": [
        "totalprice"
      ]
    },
    {
      "cells": [
        "depositpaid"
      ]
    },
    {
      "cells": [
        "additionalneeds"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.verifyResponseBodyValues(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "1)Returns a specific booking based upon the booking id provided",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetBookingApi"
    },
    {
      "name": "@GetBookingbyId"
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
        "Accept",
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
        "17"
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
  "name": "I perform GET operation \"GetBooking\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.invokeGETOperation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get response \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.verifyHTTPStatusCode(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c200\u003e but was \u003c404\u003e.\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:105)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:263)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:78)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:126)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:134)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:89)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$statusCode(ValidatableResponseImpl.groovy)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:78)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy:142)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy)\r\n\tat com.java.stepdefs.CommonSteps.verifyHTTPStatusCode(CommonSteps.java:286)\r\n\tat ✽.I should get response \"200\"(file:src/test/java/resources/features/GETBookingAPI.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.verifyResponseContentType()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "response Body contains",
  "rows": [
    {
      "cells": [
        "firstname"
      ]
    },
    {
      "cells": [
        "lastname"
      ]
    },
    {
      "cells": [
        "totalprice"
      ]
    },
    {
      "cells": [
        "depositpaid"
      ]
    },
    {
      "cells": [
        "additionalneeds"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.verifyResponseBodyValues(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "2)Returns a specific booking based upon the First and Last Name provided",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetBookingbyNames"
    }
  ]
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
        "Accept",
        "application/json"
      ]
    }
  ]
});
formatter.step({
  "name": "I pass queryParametres",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "firstname",
        "\u003cfirstname\u003e"
      ]
    },
    {
      "cells": [
        "lastname",
        "\u003clastname\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "I perform GET operation \"\u003cresourceName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I should get response \"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.step({
  "name": "response Body contains",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "bookingid"
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "status",
        "resourceName",
        "firstname",
        "lastname"
      ]
    },
    {
      "cells": [
        "200",
        "GetBookingId",
        "Rupam",
        "CH"
      ]
    }
  ]
});
formatter.scenario({
  "name": "2)Returns a specific booking based upon the First and Last Name provided",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetBookingApi"
    },
    {
      "name": "@GetBookingbyNames"
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
        "Accept",
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
  "name": "I pass queryParametres",
  "rows": [
    {
      "cells": [
        "firstname",
        "Rupam"
      ]
    },
    {
      "cells": [
        "lastname",
        "CH"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.setQueryParam(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I perform GET operation \"GetBookingId\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.invokeGETOperation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get response \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.verifyHTTPStatusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.verifyResponseContentType()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response Body contains",
  "rows": [
    {
      "cells": [
        "bookingid"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.verifyResponseBodyValues(DataTable)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.java.stepdefs.CommonSteps.verifyResponseBodyValues(CommonSteps.java:271)\r\n\tat ✽.response Body contains(file:src/test/java/resources/features/GETBookingAPI.feature:41)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "3) Returns a specific booking based upon All ids",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetBookingbyAllIds"
    }
  ]
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
        "Accept",
        "application/json"
      ]
    }
  ]
});
formatter.step({
  "name": "I perform GET operation \"\u003cresourceName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I should get response \"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.step({
  "name": "response Body contains",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "bookingid"
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "status",
        "resourceName"
      ]
    },
    {
      "cells": [
        "200",
        "GetBookingId"
      ]
    }
  ]
});
formatter.scenario({
  "name": "3) Returns a specific booking based upon All ids",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetBookingApi"
    },
    {
      "name": "@GetBookingbyAllIds"
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
        "Accept",
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
  "name": "I perform GET operation \"GetBookingId\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.invokeGETOperation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get response \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.verifyHTTPStatusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.verifyResponseContentType()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response Body contains",
  "rows": [
    {
      "cells": [
        "bookingid"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.verifyResponseBodyValues(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "4)Returns a specific booking based upon time provided",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetBookingbyCheckinAndOut"
    }
  ]
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
        "Accept",
        "application/json"
      ]
    }
  ]
});
formatter.step({
  "name": "I pass queryParametres",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "checkin",
        "\u003ccheckin\u003e"
      ]
    },
    {
      "cells": [
        "checkout",
        "\u003ccheckout\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "I perform GET operation \"\u003cresourceName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I should get response \"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.step({
  "name": "response Body contains",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "bookingid"
      ]
    }
  ]
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
        "checkin",
        "checkout"
      ]
    },
    {
      "cells": [
        "Get Id for both checkin and checkout",
        "200",
        "GetBookingId",
        "2018-11-01",
        "2021-09-25"
      ]
    },
    {
      "cells": [
        "Get Id for only checkin",
        "200",
        "GetBookingId",
        "2018-09-01",
        ""
      ]
    },
    {
      "cells": [
        "Get Id for only checkout",
        "200",
        "GetBookingId",
        "2018-04-01",
        "2021-07-01"
      ]
    }
  ]
});
formatter.scenario({
  "name": "4)Returns a specific booking based upon time provided",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetBookingApi"
    },
    {
      "name": "@GetBookingbyCheckinAndOut"
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
        "Accept",
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
  "name": "I pass queryParametres",
  "rows": [
    {
      "cells": [
        "checkin",
        "2018-11-01"
      ]
    },
    {
      "cells": [
        "checkout",
        "2021-09-25"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.setQueryParam(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I perform GET operation \"GetBookingId\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.invokeGETOperation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get response \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.verifyHTTPStatusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.verifyResponseContentType()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response Body contains",
  "rows": [
    {
      "cells": [
        "bookingid"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.verifyResponseBodyValues(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "4)Returns a specific booking based upon time provided",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetBookingApi"
    },
    {
      "name": "@GetBookingbyCheckinAndOut"
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
        "Accept",
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
  "name": "I pass queryParametres",
  "rows": [
    {
      "cells": [
        "checkin",
        "2018-09-01"
      ]
    },
    {
      "cells": [
        "checkout",
        ""
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.setQueryParam(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I perform GET operation \"GetBookingId\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.invokeGETOperation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get response \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.verifyHTTPStatusCode(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c200\u003e but was \u003c500\u003e.\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:105)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:78)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:126)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:134)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:89)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$statusCode(ValidatableResponseImpl.groovy)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:78)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy:142)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy)\r\n\tat com.java.stepdefs.CommonSteps.verifyHTTPStatusCode(CommonSteps.java:286)\r\n\tat ✽.I should get response \"200\"(file:src/test/java/resources/features/GETBookingAPI.feature:73)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.verifyResponseContentType()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "response Body contains",
  "rows": [
    {
      "cells": [
        "bookingid"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.verifyResponseBodyValues(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "4)Returns a specific booking based upon time provided",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GetBookingApi"
    },
    {
      "name": "@GetBookingbyCheckinAndOut"
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
        "Accept",
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
  "name": "I pass queryParametres",
  "rows": [
    {
      "cells": [
        "checkin",
        "2018-04-01"
      ]
    },
    {
      "cells": [
        "checkout",
        "2021-07-01"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.setQueryParam(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I perform GET operation \"GetBookingId\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.invokeGETOperation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get response \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.verifyHTTPStatusCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.verifyResponseContentType()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response Body contains",
  "rows": [
    {
      "cells": [
        "bookingid"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.verifyResponseBodyValues(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});