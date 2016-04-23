myApp.service('etymologyService', function(){

  this.findEtymology = function(word) {

    // if (word.entry_list.entry) { // if word is a real word
      entry = word.entry_list.entry;
      if (entry.length) {
        return this.findCorrectSubEntry();
      } else {
        return entry.et;
      };
    // };
  };

  this.findCorrectSubEntry = function() {
    for (i = 0; i < entry.length; i++) {
      if (entry[i].et && typeof entry[i].et === "string") {
        return entry[i].et;
      };
    };
  };

});



myApp.service('originLanguageService', function() {

  this.getLanguage = function(etymology) {

    if (etymology.includes("Greek")) {
      return "Greek";
    };
    if (etymology.includes("Latin")) {
      return "Latin";
    };
    if (etymology.includes("Old English")) {
      return "Old English";
    };

  };

});
