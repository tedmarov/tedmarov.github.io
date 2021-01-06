// var options = {
//   strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
//   typeSpeed: 40,
// };

// var typed = new Typed(".typed_title", options);
///COME BACK TO THIS IF NOT WORK
// var typed = new Typed(".typed_title", {
//   // Waits 1000ms after typing "First"
//   strings: [
//     "^200Athlete.^1000",
//     "Musician.^1000",
//     "Software^100 Developer.^1000",
//   ],
//   smartBackspace: true, //Default value
//   typeSpeed: 50,
// });

var typed = new Typed(".typed_title", {
    /**
     * @property {array} strings strings to be typed
     * @property {string} stringsElement ID of element containing string children
     */
    strings: [
        "Ana^60lyst.^400",
        "Perf^60or^60mer.^400",
        "Soft^60ware^100 Developer.^3000",
    ],
    stringsElement: null,

    /**
     * @property {number} typeSpeed type speed in milliseconds
     */
    typeSpeed: 75,

    /**
     * @property {number} startDelay time before typing starts in milliseconds
     */
    startDelay: 400,

    /**
     * @property {number} backSpeed backspacing speed in milliseconds
     */
    backSpeed: 50,

    /**
     * @property {boolean} smartBackspace only backspace what doesn't match the previous string
     */
    smartBackspace: true,

    /**
     * @property {boolean} shuffle shuffle the strings
     */
    shuffle: false,

    /**
     * @property {number} backDelay time before backspacing in milliseconds
     */
    backDelay: 700,

    /**
     * @property {boolean} fadeOut Fade out instead of backspace
     * @property {string} fadeOutClass css class for fade animation
     * @property {boolean} fadeOutDelay Fade out delay in milliseconds
     */
    fadeOut: false,
    fadeOutClass: "typed-fade-out",
    fadeOutDelay: 500,

    /**
     * @property {boolean} loop loop strings
     * @property {number} loopCount amount of loops
     */
    loop: true,
    loopCount: Infinity,

    /**
     * @property {boolean} showCursor show cursor
     * @property {string} cursorChar character for cursor
     * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
     */
    showCursor: true,
    cursorChar: "|",
    autoInsertCss: true,

    /**
     * @property {string} attr attribute for typing
     * Ex: input placeholder, value, or just HTML text
     */
    attr: null,

    /**
     * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
     */
    bindInputFocusEvents: false,

    /**
     * @property {string} contentType 'html' or 'null' for plaintext
     */
    contentType: "html",

    /**
     * Before it begins typing
     * @param {Typed} self
     */
    onBegin: (self) => { },

    /**
     * All typing is complete
     * @param {Typed} self
     */
    onComplete: (self) => { },

    /**
     * Before each string is typed
     * @param {number} arrayPos
     * @param {Typed} self
     */
    preStringTyped: (arrayPos, self) => { },

    /**
     * After each string is typed
     * @param {number} arrayPos
     * @param {Typed} self
     */
    onStringTyped: (arrayPos, self) => { },

    /**
     * During looping, after last string is typed
     * @param {Typed} self
     */
    onLastStringBackspaced: (self) => { },

    /**
     * Typing has been stopped
     * @param {number} arrayPos
     * @param {Typed} self
     */
    onTypingPaused: (arrayPos, self) => { },

    /**
     * Typing has been started after being stopped
     * @param {number} arrayPos
     * @param {Typed} self
     */
    onTypingResumed: (arrayPos, self) => { },

    /**
     * After reset
     * @param {Typed} self
     */
    onReset: (self) => { },

    /**
     * After stop
     * @param {number} arrayPos
     * @param {Typed} self
     */
    onStop: (arrayPos, self) => { },

    /**
     * After start
     * @param {number} arrayPos
     * @param {Typed} self
     */
    onStart: (arrayPos, self) => { },

    /**
     * After destroy
     * @param {Typed} self
     */
    onDestroy: (self) => { },
});

  // var typed = new Typed('.typed_title', {
  //   // Waits 1000ms after typing "First"
  //   strings: ['First ^1000 sentence.', 'Second sentence.']
  // });

  ////////////THE SLIDE TYPED LOOK
  // jQuery(document).ready(function ($) {
  //   //set animation timing
  //   var animationDelay = 2500,
  //     //loading bar effect
  //     barAnimationDelay = 3800,
  //     barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
  //     //letters effect
  //     lettersDelay = 50,
  //     //type effect
  //     typeLettersDelay = 150,
  //     selectionDuration = 500,
  //     typeAnimationDelay = selectionDuration + 800,
  //     //clip effect
  //     revealDuration = 600,
  //     revealAnimationDelay = 1500;

  //   initHeadline();

  //   function initHeadline() {
  //     //insert <i> element for each letter of a changing word
  //     singleLetters($(".cd-headline.letters").find("b"));
  //     //initialise headline animation
  //     animateHeadline($(".cd-headline"));
  //   }

  //   function singleLetters($words) {
  //     $words.each(function () {
  //       var word = $(this),
  //         letters = word.text().split(""),
  //         selected = word.hasClass("is-visible");
  //       for (i in letters) {
  //         if (word.parents(".rotate-2").length > 0)
  //           letters[i] = "<em>" + letters[i] + "</em>";
  //         letters[i] = selected
  //           ? '<i class="in">' + letters[i] + "</i>"
  //           : "<i>" + letters[i] + "</i>";
  //       }
  //       var newLetters = letters.join("");
  //       word.html(newLetters).css("opacity", 1);
  //     });
  //   }

  //   function animateHeadline($headlines) {
  //     var duration = animationDelay;
  //     $headlines.each(function () {
  //       var headline = $(this);

  //       if (headline.hasClass("loading-bar")) {
  //         duration = barAnimationDelay;
  //         setTimeout(function () {
  //           headline.find(".cd-words-wrapper").addClass("is-loading");
  //         }, barWaiting);
  //       } else if (headline.hasClass("clip")) {
  //         var spanWrapper = headline.find(".cd-words-wrapper"),
  //           newWidth = spanWrapper.width() + 10;
  //         spanWrapper.css("width", newWidth);
  //       } else if (!headline.hasClass("type")) {
  //         //assign to .cd-words-wrapper the width of its longest word
  //         var words = headline.find(".cd-words-wrapper b"),
  //           width = 0;
  //         words.each(function () {
  //           var wordWidth = $(this).width();
  //           if (wordWidth > width) width = wordWidth;
  //         });
  //         headline.find(".cd-words-wrapper").css("width", width);
  //       }

  //       //trigger animation
  //       setTimeout(function () {
  //         hideWord(headline.find(".is-visible").eq(0));
  //       }, duration);
  //     });
  //   }

  //   function hideWord($word) {
  //     var nextWord = takeNext($word);

  //     if ($word.parents(".cd-headline").hasClass("type")) {
  //       var parentSpan = $word.parent(".cd-words-wrapper");
  //       parentSpan.addClass("selected").removeClass("waiting");
  //       setTimeout(function () {
  //         parentSpan.removeClass("selected");
  //         $word
  //           .removeClass("is-visible")
  //           .addClass("is-hidden")
  //           .children("i")
  //           .removeClass("in")
  //           .addClass("out");
  //       }, selectionDuration);
  //       setTimeout(function () {
  //         showWord(nextWord, typeLettersDelay);
  //       }, typeAnimationDelay);
  //     } else if ($word.parents(".cd-headline").hasClass("letters")) {
  //       var bool =
  //         $word.children("i").length >= nextWord.children("i").length
  //           ? true
  //           : false;
  //       hideLetter($word.find("i").eq(0), $word, bool, lettersDelay);
  //       showLetter(nextWord.find("i").eq(0), nextWord, bool, lettersDelay);
  //     } else if ($word.parents(".cd-headline").hasClass("clip")) {
  //       $word.parents(".cd-words-wrapper").animate(
  //         {
  //           width: "2px",
  //         },
  //         revealDuration,
  //         function () {
  //           switchWord($word, nextWord);
  //           showWord(nextWord);
  //         }
  //       );
  //     } else if ($word.parents(".cd-headline").hasClass("loading-bar")) {
  //       $word.parents(".cd-words-wrapper").removeClass("is-loading");
  //       switchWord($word, nextWord);
  //       setTimeout(function () {
  //         hideWord(nextWord);
  //       }, barAnimationDelay);
  //       setTimeout(function () {
  //         $word.parents(".cd-words-wrapper").addClass("is-loading");
  //       }, barWaiting);
  //     } else {
  //       switchWord($word, nextWord);
  //       setTimeout(function () {
  //         hideWord(nextWord);
  //       }, animationDelay);
  //     }
  //   }

  //   function showWord($word, $duration) {
  //     if ($word.parents(".cd-headline").hasClass("type")) {
  //       showLetter($word.find("i").eq(0), $word, false, $duration);
  //       $word.addClass("is-visible").removeClass("is-hidden");
  //     } else if ($word.parents(".cd-headline").hasClass("clip")) {
  //       $word.parents(".cd-words-wrapper").animate(
  //         {
  //           width: $word.width() + 10,
  //         },
  //         revealDuration,
  //         function () {
  //           setTimeout(function () {
  //             hideWord($word);
  //           }, revealAnimationDelay);
  //         }
  //       );
  //     }
  //   }

  //   function hideLetter($letter, $word, $bool, $duration) {
  //     $letter.removeClass("in").addClass("out");

  //     if (!$letter.is(":last-child")) {
  //       setTimeout(function () {
  //         hideLetter($letter.next(), $word, $bool, $duration);
  //       }, $duration);
  //     } else if ($bool) {
  //       setTimeout(function () {
  //         hideWord(takeNext($word));
  //       }, animationDelay);
  //     }

  //     if ($letter.is(":last-child") && $("html").hasClass("no-csstransitions")) {
  //       var nextWord = takeNext($word);
  //       switchWord($word, nextWord);
  //     }
  //   }

  //   function showLetter($letter, $word, $bool, $duration) {
  //     $letter.addClass("in").removeClass("out");

  //     if (!$letter.is(":last-child")) {
  //       setTimeout(function () {
  //         showLetter($letter.next(), $word, $bool, $duration);
  //       }, $duration);
  //     } else {
  //       if ($word.parents(".cd-headline").hasClass("type")) {
  //         setTimeout(function () {
  //           $word.parents(".cd-words-wrapper").addClass("waiting");
  //         }, 200);
  //       }
  //       if (!$bool) {
  //         setTimeout(function () {
  //           hideWord($word);
  //         }, animationDelay);
  //       }
  //     }
  //   }

  //   function takeNext($word) {
  //     return !$word.is(":last-child")
  //       ? $word.next()
  //       : $word.parent().children().eq(0);
  //   }

  //   function takePrev($word) {
  //     return !$word.is(":first-child")
  //       ? $word.prev()
  //       : $word.parent().children().last();
  //   }

  //   function switchWord($oldWord, $newWord) {
  //     $oldWord.removeClass("is-visible").addClass("is-hidden");
  //     $newWord.removeClass("is-hidden").addClass("is-visible");
  //   }
  // });