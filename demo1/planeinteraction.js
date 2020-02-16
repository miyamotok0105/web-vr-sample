AFRAME.registerComponent('planeinteraction', 
  {
  
      schema:
      {
        state: {type: 'string', default: 'fadedOut'}
      },
  
      init: function () 
      {
      var self = this.el;
      var state = this.data.state;

    self.addEventListener('planeIconClicked', function (evt) 
            {
              var animations = self.children;
              var fadeinAnimation = animations[0];
              var fadeoutAnimation = animations[1];
              
              var fadeinAnimationTrigger = fadeinAnimation.attributes.begin.nodeValue;
              var fadeoutAnimationTrigger = fadeoutAnimation.attributes.begin.nodeValue;
        
              if(state === 'fadedOut')
              {
                fadeinAnimation.el.emit(fadeinAnimationTrigger,{}, false);
                state = 'fadedIn';
              }
              else if(state === 'fadedIn')
              {
                
                fadeoutAnimation.el.emit(fadeoutAnimationTrigger,{},false);
                state = 'fadedOut';
              }

            });

      } 
});