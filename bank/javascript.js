$("#zipCode").bind("input", function() {

    var datazip = $("#zipCode").val();

    var count =  datazip.length;
   
   if(count == 5){
      
        $.getJSON( "https://raw.githubusercontent.com/earthchie/jquery.Thailand.js/master/jquery.Thailand.js/database/raw_database/raw_database.json?fbclid=IwAR30z1Cml3fnbXjQ1MHusnHwGrgDxEOGo9ttLu8933E70ikg3BtMandaA0o", function( data ) {

        
                 
                  $.each(data, function(key, value) {
                        
                        if( datazip == value.zipcode){
                       
                            console.log(value.district);
                                                                                     
                        }             
                     });
                                    
        });
        

   }


  });



