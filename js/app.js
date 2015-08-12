$(document).ready(function() {

// 	$("[name='my-checkbox']").bootstrapSwitch();


// function elementSupportsAttribute(element,attribute) {
//  var testEl = document.createElement(element);
//  testEl.setAttribute('type',attribute);
//  if (testEl.type=="text") {
//   return false;
//  } else {
//   return true;
//  }
// }

// if (!elementSupportsAttribute('input','tel')) {
// // Write custom telephone number validation here.
// }
// if (!elementSupportsAttribute('input','range')) {
// // JavaScript for custom slider/range control goes here.
// }


/*CREATING SPARKLES BECAUSE EVERYTHING IS BETTER WHEN IT SHINES! */

$(".sparkley").sparkle({
  color: "#FFFFFF",
  count: 50,
  overlap: 0,
  speed: 1,
  minSize: 4,
  maxSize: 10,
  direction: "both"
});


// first we need an element with sparkles
$(".sparkley").sparkle();

// here we can remove the default mouse/keyboard triggers for sparkles,
//  we don't want them to trigger on interaction
$(".sparkley")
    .off("mouseover.sparkle")
    .off("mouseout.sparkle")
    .off("focus.sparkle")
    .off("blur.sparkle")

// we can also trigger the start/stop events on the element
// which has the sparkles bound to it!
$(".sparkley")
    .trigger("start.sparkle")
    .on("click", function() {
        $(this).trigger("stop.sparkle");
    });

// it's also possible to resize teh canvas and reposition 
// the sparkles whenever the browser is resized...
var timer;
$(window).on("resize", function(){
    clearTimeout(timer);
    timer = setTimeout(function(){
        $(".sparkley").trigger("resize.sparkle");
    },200);
});


});