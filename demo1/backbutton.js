AFRAME.registerComponent('backbutton', 
  {    
        schema:
      {
        active: {type: 'bool', default: false}
      },
      init: function () 
      {
        var active = this.data.active;
        var self = this.el;
        var sound = document.getElementById("audio");
        var lighticon = document.getElementById("lighting");
        var planeicon = document.getElementById("archive");
        var constructionicon = document.getElementById("construction");
        
        
      self.addEventListener('click', function(evt)
            {
              lighticon.emit('backButtonClick', {}, false);
              planeicon.emit('backButtonClick', {}, false);
              constructionicon.emit('backButtonClick', {}, false);
              sound.play();
        
              var animations = self.children;

              var shrink = animations[0];
              var fadeout = animations[1];

              var shrinkTrigger = shrink.attributes.begin.nodeValue;
              var fadeoutTrigger = fadeout.attributes.begin.nodeValue;

              shrink.el.emit(shrinkTrigger,{}, false);
              fadeout.el.emit(fadeoutTrigger, {}, false);
              active = false;
          });
      self.addEventListener('IconClicked', function(evt)
            {
              if(!active)
              {
              active = true;
              var animations = self.children;

              var enlarge = animations[2];
              var fadein = animations[3];

              var enlargeTrigger = enlarge.attributes.begin.nodeValue;
              var fadeinTrigger = fadein.attributes.begin.nodeValue;

              enlarge.el.emit(enlargeTrigger,{}, false);
              fadein.el.emit(fadeinTrigger, {}, false);
              }

            });
      }

});