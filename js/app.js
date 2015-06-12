$Document.Ready(function) {

	$("[name='my-checkbox']").bootstrapSwitch();


function elementSupportsAttribute(element,attribute) {
 var testEl = document.createElement(element);
 testEl.setAttribute('type',attribute);
 if (testEl.type=="text") {
  return false;
 } else {
  return true;
 }
}

if (!elementSupportsAttribute('input','tel')) {
// Write custom telephone number validation here.
}
if (!elementSupportsAttribute('input','range')) {
// JavaScript for custom slider/range control goes here.
}






















});