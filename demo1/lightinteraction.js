AFRAME.registerComponent('lightinteraction', 
    {
      schema: 
      {
        direction: {type: 'string', default: "forward"},
        playing: {type: 'bool', dafault: "false"}
      },
      
      init: function () 
      {
      var el = this.el;
      var direction = this.data.direction;
      var playing = this.data.playing;
      var backButton = document.getElementById('back'); 
      var lighticon = document.getElementById("lighting");
      var planeicon = document.getElementById("archive");
      var constructionicon = document.getElementById("construction");
        
      var video = document.getElementById("video");
      var clipDuration = video.duration/2;
      
        el.addEventListener('backButtonClick', function(evt)
        {
              if(direction === "backward" && !playing)
              {
                playing = true;
                video.play();
              }
        }); 
        
      el.addEventListener('lightIconClicked', function (evt)                            
      {
              if(direction === "forward" && !playing)
              {
                playing = true;
                video.play();
              }
              if(direction === "backward" && !playing)
              {
                playing = true;
                video.play();
              }
      });
      
       video.addEventListener('ended', function (evt)                            
      {
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

       video.pause();
       direction = "forward";
       playing = false;
       video.currentTime = 0;
      });
        
      video.addEventListener("timeupdate", function(){
        
            
            if(video.currentTime >= clipDuration && direction === "forward") 
            {   
                video.pause();
                direction = "backward";
                playing = false;
                backButton.emit('IconClicked', {}, false);
            }
        });
      } 
});

