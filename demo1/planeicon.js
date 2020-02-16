AFRAME.registerComponent('planeicon', 
  {
    
      schema:
      {
        active: {type: 'bool', default: true},
        state: {type: 'bool', default: true}
      },
      init: function () 
      {
        var self = this.el;
        var active = this.data.active;
        var fadeimages = $('.fadeimage');
        var sound = document.getElementById("audio");
        var backButton = document.getElementById('back');
        var lighticon = document.getElementById("lighting");
        var constructionicon = document.getElementById("construction");
        var faded = this.data.state;
        
        self.addEventListener('click', function(evt)
            {
                for(var i = 0; i < fadeimages.length; i++)
                {
                  fadeimages[i].emit('planeIconClicked', {}, false);
                }
                faded = false;
                backButton.emit('IconClicked', {}, false);
                lighticon.emit('IconClicked', {}, false);
                constructionicon.emit('IconClicked', {}, false);
        
                sound.play();
                var animations = self.children;

                var shrink = animations[0];
                var fadeout = animations[1];

                var shrinkTrigger = shrink.attributes.begin.nodeValue;
                var fadeoutTrigger = fadeout.attributes.begin.nodeValue;

                shrink.el.emit(shrinkTrigger,{}, false);
                fadeout.el.emit(fadeoutTrigger, {}, false);
                
          });
        
        self.addEventListener('backButtonClick', function(evt)
        {
          if(!faded)
          {
             for(var i = 0; i < fadeimages.length; i++)
                {
                  fadeimages[i].emit('planeIconClicked', {}, false);
                }
              
              var animations = self.children;

              var enlarge = animations[2];
              var fadein = animations[3];

              var enlargeTrigger = enlarge.attributes.begin.nodeValue;
              var fadeinTrigger = fadein.attributes.begin.nodeValue;

              enlarge.el.emit(enlargeTrigger,{}, false);
              fadein.el.emit(fadeinTrigger, {}, false);
          
          
              var animations1 = lighticon.children;

              var enlarge1 = animations1[2];
              var fadein1 = animations1[3];

              var enlargeTrigger1 = enlarge1.attributes.begin.nodeValue;
              var fadeinTrigger1 = fadein1.attributes.begin.nodeValue;

              enlarge1.el.emit(enlargeTrigger1,{}, false);
              fadein1.el.emit(fadeinTrigger1, {}, false);

              var animations2 = constructionicon.children;
          
              var enlarge2 = animations2[2];
              var fadein2 = animations2[3];

              var enlargeTrigger2 = enlarge2.attributes.begin.nodeValue;
              var fadeinTrigger2 = fadein2.attributes.begin.nodeValue;

              enlarge2.el.emit(enlargeTrigger2,{}, false);
              fadein2.el.emit(fadeinTrigger2, {}, false);
              faded = true;
          }
        });
        
        self.addEventListener('IconClicked', function(evt)
       {
        var animations = self.children;

        var shrink = animations[0];
        var fadeout = animations[1];

        var shrinkTrigger = shrink.attributes.begin.nodeValue;
        var fadeoutTrigger = fadeout.attributes.begin.nodeValue;

        shrink.el.emit(shrinkTrigger,{}, false);
        fadeout.el.emit(fadeoutTrigger, {}, false);    
      });
      }

});