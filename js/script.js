const $ = document;

let DisplayOff = $.querySelector("#displa-of");
let DisplayOn = $.querySelector("#displa-on");
let EventKeyElem = $.querySelector("#event-key");
let EventLocationElem = $.querySelector("#event-location");
let EventWhichElem = $.querySelector("#event-which");
let EventcodeElem = $.querySelector("#event-code");
let KeyCodeElem = $.querySelector("#keycode");

$.body.addEventListener("keydown", function (event) {

    DisplayOff.style.display = "none";
    DisplayOn.style.display = "flex";
    EventKeyElem.innerHTML = event.key;
    EventLocationElem.innerHTML = event.location;
    EventWhichElem.innerHTML = event.which;
    KeyCodeElem.innerHTML = event.which;
    EventcodeElem.innerHTML = event.code;

});
