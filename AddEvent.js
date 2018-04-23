function save()
                {
                  var dataToSave1 = document.getElementById("myInput").value;
                  var dataToSave2 = document.getElementById("type").value;
                  var dataToSave3 = document.getElementById("area").value;

                  localStorage.setItem("data1", dataToSave1);
                  localStorage.setItem("data2", dataToSave2);
                  localStorage.setItem("data3", dataToSave3);


                  var dataToShow1 = localStorage.getItem("data1");
                var dataToShow3 = localStorage.getItem("data3");
            
                var dataToShow2 = localStorage.getItem("data2");
                
                     

                           
                    if(document.getElementById("h").checked)
                    {     var checks = document.getElementsByName('checks');
                var str = '';
                 
                for ( i = 0; i < 3; i++) {
                     
                    if ( checks[i].checked === true ) {
                        str += checks[i].value +  ",";
                    }
                     
                }
                         
                        var val = document.getElementById("h").value;
                                    document.write("<p> Title: "+dataToShow1);
                                    document.write(" <p> Description: "+dataToShow3);
                                    document.write("<p> Type: "+dataToShow2);
                                    document.write(" <p> Committees: "+str);
                                    document.write("<p> Event requires fee");




                    }
                    
                    else if(document.getElementById("r").checked)
                    {var checks = document.getElementsByName('checks');
                var str = '';
                 
                for ( i = 0; i < 3; i++) {
                     
                    if ( checks[i].checked === true ) {
                        str += checks[i].value +  ",";
                    }
                     
                }
                       
                        var val = document.getElementById("r").value;
                                   document.write("<p> Title: "+dataToShow1);
                                    document.write(" <p> Description: "+dataToShow3);
                                    document.write("<p> Type: "+dataToShow2);
                                    document.write(" <p> Committees: "+str);
                                    document.write("<p> Event not requires fee");


                    }
                    
                  
                }