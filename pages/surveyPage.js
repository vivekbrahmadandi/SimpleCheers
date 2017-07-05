// Page class for search page

var SurveyPage = function() {

	this.userNameElement=element(by.model('user.username'));
    this.passwordElement=element(by.model('user.password'));
    this.signButton=element(by.css('button[aria-label="Sign In"]'));

    this.openMenuButton=element.all(by.css('button[aria-owns="menu_container_2"]')).last();
    this.logoutButton=element(by.css('button[ng-click="userLogout()"]'));
    this.addSurveyButton=element(by.css('button[ng-click="addSurvey();"]'));
    this.closeDialog=element(by.css('button[ng-click="closeDialog()"]'));
    this.surveyNameElement=element(by.model('survey.name'));
    this.surveyDescElement=element(by.model('survey.description'));
    this.surveyTemplateId=element.all(by.model('survey.template_id')).first();
    this.addSurveySubmitButton=element(by.css('button[ng-click="saveDialog(survey);"]'));
    this.selectMenu=element.all(by.tagName('md-select-menu'));
    this.menuCount=element.all(by.css('md-select-menu'));
    this.isSurveyCheckBox=element(by.css('md-checkbox[ng-model="survey.status"]'));
    this.assignSurveyButton=element.all(by.css('md-icon[ng-click="showAssignPage(row.id)"]')).first();
    //this.assignSurveyButton=element(by.css('md-icon[ng-click="showAssignPage(row.id)"]'));

    this.rowList=element.all(by.css('tr[ng-repeat="row in datatable.data | orderBy: query.order | limitTo: query.limit : (query.page -1) * query.limit"]'));
    this.surveyMessage=element(by.binding(' toast.content '));

    this.clickAssignSurveyButton = function() {
         this.assignSurveyButton.click();
    };

    this.setUserName = function(value) {
        return this.userNameElement.clear().sendKeys(value);
    };
    this.setPassword = function(value) {
        this.passwordElement.clear().sendKeys(value);
    };
    this.clickSignButton = function() {
        return   this.signButton.click();
    };
    this.isRowListPresent=function(){
        return this.rowList.isPresent();
    }
    this.tableSize=function(){
        return this.rowList.count();
    }

    this.getRowValue=function(){
    var textRows = this.rowList.each(function(row){
            var zeo=row.get(0);
            zeo.getText().then(function(rows){
                console.log(rows);
            });
        });
    return textRows;
    }

    this.clickIsSurveyCheckBox = function() {
         this.isSurveyCheckBox.click();
    };

    this.getMenuCount = function() {
        return this.selectMenu.count();
    };
    this.clickCloseDialog = function() {
         this.closeDialog.click();
    };
    this.setSurveyName = function(value) {
        return this.surveyNameElement.clear().sendKeys(value);
    };
    this.setSurveyDesc = function(value) {
        this.surveyDescElement.clear().sendKeys(value);
    };
    this.clickAddSurveySubmitButton = function() {
         this.addSurveySubmitButton.click();
    };
    this.getSurveyMessage = function() {
        return this.surveyMessage.getText();
    };
    this.clickAddSurveyButton = function() {
         return this.addSurveyButton.click();
    };
    this.clickOpenMenuButton = function() {
         this.openMenuButton.click();
    };
    this.clickLogoutButton = function() {
         this.logoutButton.click();
    };
    this.clickTemplate = function() {
         this.surveyTemplateId.click();
    };
};

module.exports = new SurveyPage();
