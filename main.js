var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL('BirthdayImage',function(Img){
        block_image_object=Img;

        image_object.scaleToWidth(700);
    image_object.scaleToHeight(510);
    image_object.set({
          top:0
          left:0
      });

      canvas.add(block_image_object)
    }  );
  }
    
    
     
	


function playSound(){

    x.play();
	
}
