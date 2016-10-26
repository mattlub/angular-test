angular.module('personalityPoints', [])

  .controller('PersonalityPointsController', function() {
  
    var personalityPoints = this;
    
    personalityPoints.attributes = [
      {text:'kindness', points:0},
      {text:'creativity', points:0},
      {text:'angular knowledge', points:0},
      ];
 
    personalityPoints.addAttribute = function() {
      personalityPoints.attributes.push({text:personalityPoints.attributeText, points:0});
      personalityPoints.attributeText = '';
    };
 	
 	personalityPoints.changePoints = function(index, x) {
 		personalityPoints.attributes[index].points += x; 		
 	};
 	
    personalityPoints.remaining = function() {
      var count = 0;
      angular.forEach(personalityPoints.attributes, function(attribute) {
        count += attribute.points;
      });
      return 20 - count;
    };
    
  });