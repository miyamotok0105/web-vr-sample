AFRAME.registerComponent('imagelightinteraction', 
  {
      schema:
      {
        fadedOut: {type: 'bool', default: true}
      },
      init: function () 
      {
        var fadedOut = this.data.fadedOut;
        var self = this.el;
        var animations = self.children;
        var fadeinAnimation = animations[0];
        var fadeoutAnimation = animations[1];
        var backButton = document.getElementById('back'); 
        var lighticon = document.getElementById("lighting");
        var planeicon = document.getElementById("archive");
        var constructionicon = document.getElementById("construction");

        var fadeinAnimationTrigger = fadeinAnimation.attributes.begin.nodeValue;
        var fadeoutAnimationTrigger = fadeoutAnimation.attributes.begin.nodeValue;
        self.addEventListener('lightIconClicked', function (evt) 
              {
                console.log("inside lighticonclicked on sky");
                  fadeinAnimation.el.emit(fadeinAnimationTrigger,{}, false);
              });
        fadeoutAnimation.addEventListener('animationend', function(evt)
            { 
              fadedOut = true;
              var animations1 = lighticon.children;

              var enlarge1 = animations1[2];
              var fadein1 = animations1[3];

              var enlargeTrigger1 = enlarge1.attributes.begin.nodeValue;
              var fadeinTrigger1 = fadein1.attributes.begin.nodeValue;

              enlarge1.el.emit(enlargeTrigger1,{}, false);
              fadein1.el.emit(fadeinTrigger1, {}, false);
              

              var animations2 = planeicon.children;

              var enlarge2 = animations2[2];
              var fadein2 = animations2[3];

              var enlargeTrigger2 = enlarge2.attributes.begin.nodeValue;
              var fadeinTrigger2 = fadein2.attributes.begin.nodeValue;

              enlarge2.el.emit(enlargeTrigger2,{}, false);
              fadein2.el.emit(fadeinTrigger2, {}, false);

              var animations3 = constructionicon.children;

              var enlarge3 = animations3[2];
              var fadein3 = animations3[3];

              var enlargeTrigger3 = enlarge3.attributes.begin.nodeValue;
              var fadeinTrigger3 = fadein3.attributes.begin.nodeValue;

              enlarge3.el.emit(enlargeTrigger3,{}, false);
              fadein3.el.emit(fadeinTrigger3, {}, false);
        
            });
        
        fadeinAnimation.addEventListener('animationend', function(evt)
        {
          fadedOut = false;
          backButton.emit('IconClicked', {}, false);
        });
        
        self.addEventListener('backButtonClick', function(evt)
        {
          if(!fadedOut)
          {
           fadeoutAnimation.el.emit(fadeoutAnimationTrigger,{},false);    
          }
        });
      }
});