myApp.service('etymologyService', function(){

  this.findEtymology = function(word) {
      entry = word.entry_list.entry;
      if (entry.length) {
        return this.findCorrectSubEntry();
      } else {
        return entry.et;
      };
  };

  this.findCorrectSubEntry = function() {

    for (i = 0; i < entry.length; i++) {
      if (entry[i].et && typeof entry[i].et === "string") {
        return entry[i].et;
      };
    };
  };

  this.getValidHTML = function(etymology) {
    etymology = etymology.replace(/<it>/g , "<em>").replace(/<\/\it>/g , "</em>");
    etymology = etymology.replace(/<ma>/g , " (more at <em>").replace(/<\/\ma>/g , "</em>)");
    return etymology;
  };

});



myApp.service('originLanguageService', function() {

  this.getColor = function(etymology) {

    /*latin, greek, old english, french, old norse, japanese, chinese, other.... */

    if (etymology.includes("Old English")) {
      return "green";
    } else if (etymology.includes("Latin")) {
      return "blue";
    } else if (etymology.includes("Greek")) {
      return "pink";
    } else {
      return "yellow";
    };

  };

});
