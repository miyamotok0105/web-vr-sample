AFRAME.registerComponent('partinteraction', 
  {
  
      schema:
      {
        state: {type: 'string', default: 'imploded'},
        playing: {type: 'bool', dafault: false}
      },
  
      init: function () 
      {
      var self = this.el;
      var state = this.data.state;

      self.addEventListener('constructionClicked', function (evt) 
            {
              var animations = self.children;
              var explodeAnimation = animations[0];
              var implodeAnimation = animations[1];
              
              var explodeAnimationTrigger = explodeAnimation.attributes.begin.nodeValue;
              var implodeAnimationTrigger = implodeAnimation.attributes.begin.nodeValue;
        
              if(state === 'imploded')
              {
                explodeAnimation.el.emit(explodeAnimationTrigger,{}, false);
                state = 'exploded';
              }
              else if(state === 'exploded')
              {
                implodeAnimation.el.emit(implodeAnimationTrigger,{},false);
                state = 'imploded';
              }

            });

      } 
});