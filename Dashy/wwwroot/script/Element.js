var getElement = function (element) {
    return document.getElementsByTagName(element)[0];
}

var setCssClassOfElement = function (element,cssClass) {
    getElement(element).className = cssClass;
}

var addCssClassToElement = function (element,cssClass) {
    var element = getElement(element);

    if (!element.classList.contains(cssClass)) {
        element.classList.add(cssClass);
    }
}

var removeCssClassFromElement = function (element,cssClass) {
    var element = getElement(element);
    if (element.classList.contains(cssClass))
        element.classList.remove(cssClass);
}

var toggleCssClassOfElement = function (element, cssClass) {
    
    var elementItem = getElement(element);
    if (elementItem.classList.contains(cssClass)) {
        removeCssClassFromElement(element,cssClass);
    }
    else {
        addCssClassToElement(element,cssClass);
    }
}

var setLanguageOfElement = function (element,language) {
    var element = getElement(element);
    element.lang = language;
}

var setTextDirectionOfElement = function (element,direction) {
    var element = getElement(element);
    element.dir = direction;
}