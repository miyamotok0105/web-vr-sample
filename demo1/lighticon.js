AFRAME.registerComponent('lighticon', 
  {
    
      schema:
      {
        active: {type: 'bool', default: true}
      },
      init: function () 
      {
        var self = this.el;
        var active = this.data.active;
        //var leftsphere = document.getElementById("leftsphere");
        var sound = document.getElementById("audio");
        var backButton = document.getElementById('back');
        var planeicon = document.getElementById("archive");
        var constructionicon = document.getElementById("construction");
        var leftsky = document.getElementById("sky-night-left");
        var rightsky = document.getElementById("sky-night-right");
        
        
      self.addEventListener('click', function(evt)
            {
                console.log("INSIDE LIGHTICON CLICK");
                leftsky.emit('lightIconClicked', {}, false);
                rightsky.emit('lightIconClicked', {}, false);
                //backButton.emit('IconClicked', {}, false);
                constructionicon.emit('IconClicked', {}, false);
                planeicon.emit('IconClicked', {}, false);
        
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
        
        self.addEventListener('backButtonClick', function(evt)
        {
            leftsky.emit('backButtonClick', {}, false);
            rightsky.emit('backButtonClick', {}, false);
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