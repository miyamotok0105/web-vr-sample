AFRAME.registerComponent('lastanimationimplode', 
  {
      init: function () 
      {
        var self = this.el;
        var icon = document.querySelector('#construction');

      self.addEventListener('animationend', function (evt)                            
            {
              if(evt.srcElement.data.begin === 'implode')
              {
                icon.emit('lastAnimationImplode',{},false);
              }
            });      
      }
});