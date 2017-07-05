"use strict";
var surveyPage=require("../pages/surveyPage");
var { defineSupportCode } = require("cucumber");
var Utility = require('../common/selectBox');
var utility = new Utility();
var currTimeStampValue=getTimeStampValue();
var surveyName='surveyId'+currTimeStampValue;        


defineSupportCode(function({Given,When,Then}) {
    Given(/^HR on login page$/,{timeout: 80 * 1000}, function(){
            return  browser.get("http://simplycheer.uat01.nbos.io/");
    });
    When(/^HR fill's emailId,password and click signin$/,{timeout: 80 * 1000},function(){
            surveyPage.setUserName('vivekb@wavelabs.in')
            surveyPage.setPassword('test1234');
            browser.sleep(5000);
            return  surveyPage.clickSignButton();
    });
    Then(/^click on addSurvey button$/,{timeout: 80 * 1000},function(){
            browser.sleep(5000);
            return surveyPage.clickAddSurveyButton();
    });
    Given(/^surveyName,surveyDescription and Template$/,{timeout: 80 * 1000},function(){
            surveyPage.setSurveyDesc('Sample Survey for Care Client');
            browser.sleep(5000);
            surveyPage.clickTemplate();
            browser.sleep(5000);
            utility.selectOption(surveyPage.selectMenu, 'demo application');
            browser.sleep(5000);
            return surveyPage.setSurveyName(surveyName);
    });
    Then(/^click submit survey button$/,{timeout: 80 * 1000},function(){
            browser.sleep(5000);
            surveyPage.clickAddSurveySubmitButton();
            return browser.sleep(5000);
    });
    Then(/^sign off$/,{timeout:80*1000},function(){
            surveyPage.clickOpenMenuButton();
            var EC = protractor.ExpectedConditions;
            var  isLogoutButtonClickable = EC.elementToBeClickable(surveyPage.logoutButton);
		    browser.wait(isLogoutButtonClickable, 20000, 'waited 20 seconds for searching logout button');
		    surveyPage.clickLogoutButton();
            return browser.sleep(5000);
    });
});
    
















function getTimeStampValue() {
	    'use strict';
	    var date = new Date();
    	var year = date.getFullYear().toString();
    	var month = date.getMonth() + 1;
	    month = (month < 10 ? '0' : '') + month;
    	var day = date.getDate();
	    day = (day < 10 ? '0' : '') + day;
	    var hour = date.getHours();
	    hour = (hour < 10 ? '0' : '') + hour;
	    var min = date.getMinutes();
	    min = (min < 10 ? '0' : '') + min;
	    var sec = date.getSeconds();
	    sec = (sec < 10 ? '0' : '') + sec;
	    var dateString = year + month + day + hour + min + sec;
	    return  dateString;
}
