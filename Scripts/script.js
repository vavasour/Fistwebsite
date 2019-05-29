/*

    function myFunction() {
       
      
      document.body.style.backgroundColor = "white";
      }
*/

      function colour(){

        if (backgroundColor ="black" ){
          document.body.style.backgroundColor = "white";
      
        }           
      }

      
      function scecondcol(){
        if (backgroundColor = "white" ){
          document.body.style.backgroundColor = "black";
           
        }

      }
    
      $(document).ready(function(){

      $("#btnClick").click(function(){


        alert("clicked");      
      });


      $("#btnhide").click(function(){
        $("#txtPAR").toggle();

      });
    });