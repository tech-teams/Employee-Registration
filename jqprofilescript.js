$(document).ready(function(){
//=-=-====-=-==============================================
	//-------------namevalidation------------------------
	$.fn.nameval=function ()
	{
		var name = $("#iname").val();
			if(name.length==0)
							{    
							$("#iname").css({"borderColor":"red"})
							$("#nlabel").text("*");
							return false;
							}
			else 
							{
							$("#iname").css({"borderColor":"green"})
							$("#nlabel").text("");	
							return true;						
							}

	}
    //--------------mailvalidation----------------------------
	$.fn.mailval=function ()
    {
              var email = $("#imail").val();
              var mregex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(!(email.match(mregex)&&email!="") )
              {    
							$("#imail").css({"borderColor":"red"})
							$("#elabel").text("*");

              return false;

              }else
              {
							$("#imail").css({"borderColor":"green"})
							$("#elabel").text("");
              return true;
              } 
      }
    //---------------GenderValidation---------------------------
    $.fn.genderval=function ()
    {
    	//var gen = $('input[name=rd]:checked').val();
    	var mcheck = $('#imale:checked').val()?true:false;
    	var fcheck = $('#ifemale:checked').val()?true:false;
    	if ((mcheck==true) || (fcheck==true) ) 
    	{
			$("#glabel").text("");
			if (mcheck==true) 
				{
					var gen = "Male";
				}
			if (fcheck==true) 
				{
					var gen = "Female";
				}				

    	}
    	else
		{
			$("#glabel").text("*");
			return false;
		}
			return gen;

    }
    //----------------ContactValidation------------------------
    $.fn.contactval=function ()
    {
    	var contact = $("#icontact").val();
		if (contact == "" || (contact.length < 10 || contact.length > 10))
			   {
		     $("#icontact").css({"borderColor":"red"});
			$("#clabel").text("*");
        return false;
		     	}
			else
			{
		     $("#icontact").css({"borderColor":"green"});
			$("#clabel").text("");
		return true;
			}			
    }
    //-----------------Passwordvalidation-----------------------
    $.fn.pasval=function ()
    {
	var password = $("#ipassword").val();
		if(password.length==0)
				{    
					$("#ipassword").css({"borderColor":"red"});
					$("#plabel").text("*");
					return false;
				}
		else 
				{
					$("#ipassword").css({"borderColor":"green"})
					$("#plabel").text("");	
					return true;						
				}
    }
    //-------------------ConfirmPassword---------------------------
    $.fn.cpasval=function ()
    {
    	var password = $("#ipassword").val();
    	var cpassword = $("#icpassword").val();
  		 if(cpassword==""|| (password!=cpassword) )
			{    
					$("#icpassword").css({"borderColor":"red"})
					$("#cplabel").text("*");
				return false;
			}				
		else
			{
					$("#icpassword").css({"borderColor":"green"})
					$("#cplabel").text("");	
				return true;
			} 	

    }
    //--------------------qualification----------------------------
    $.fn.qual=function ()
    {
    	var qualification = $("#iqualification").val();
		if(qualification=="SSC")
			{
				$("#tech").hide();
				$('.tech').each(function()
				{
					$(this).prop('checked', false)
					$(this).prop('disabled', false)

				})
			}   
		if(qualification=="High School")
			{
				$("#tech").show();
				$('.tech').each(function()
				{
					$(this).prop('checked', false)
					$(this).prop('disabled', false)

				})
			}		
		if(qualification=="Graduation")
			{

				$("#tech").show();
				$('.tech').each(function()
				{
					$(this).prop('checked', true)
					$(this).prop('disabled', true)

				})				
			}			

    }
    //-------------------------Technology-------------------------
       $.fn.techval=function () 
       {
       		var technologies = "";
       		var qualification = $("#iqualification").val();
	       		if( qualification =="SSC")
				   {
				   	return "Not Applicable"
				   }
		    if(qualification=="High School")
		   	   {
				var technologies=[];
				$.each($(".tech:checked"),function(){
					technologies.push($(this).val());
				}); 
					technologies=technologies.join(",");
					if(technologies!="")
					{
						$("#tlabel").text("")
						return technologies;
					}  
					else
					{
						$("#tlabel").text("*")
						return false;
					}
								  

			   }
      		if( qualification =="Graduation")
			   {
			   	return "Java Javascript Angular Jquery"
			   }				   

      
       }
   //---------------------Addressvalidation--------------------
    $.fn.addval=function ()
    {
	var address = $("#iaddress").val();
		if(address.length==0)
				{    
					$("#iaddress").css({"borderColor":"red"})
					$("#alabel").text("*");
					return false;
				}
		else 
				{
					$("#iaddress").css({"borderColor":"green"})
					$("#alabel").text("");	
					return true;						
				}
    }
//--------------------------Salary Validation--------------------
    $.fn.salval=function ()
    {
	var salary = $("#isalary").val();
		if(salary.length==0)
				{    
					$("#isalary").css({"borderColor":"red"})
					$("#slabel").text("*");
					return false;
				}
		else 
				{
					$("#isalary").css({"borderColor":"green"})
					$("#slabel").text("");	
					return true;						
				}
    }


//--===========================Cancel Function===============================----
    $.fn.cancelfun=function ()
    {
    	$("#dtable").find('input[class="chkbox"]').each(function()
    	{
    		if($(this).is(":checked")){$(this).prop("checked", false); }
    	})
		if($('#ichkhead').is(':checked'))
			{ 
				$('#ichkhead').prop('checked',false);
			}
	$('#icancel').hide();$('#iupbutton').hide();
	$('#iupdate').hide();$('#idelete').hide();
	$('#iregister').show();$('#iclear').show();    
}
//-----=============================CheckBox Function===========================
    $.fn.chkfun=function ()
    {    
var numch=  $('#dtable input[type=checkbox]:checked').length>0

	if(numch==true)
	{
		$("#iupdate").show();$("#idelete").show();
	}
		else
		{
			$("#icancel").hide();$("#iupbutton").hide();
			$("#iupdate").hide();$("#idelete").hide();
			$("#iregister").show();$("#iclear").show(); 
		}
    }
//-----------------------------------------------------

	
//=======================================Events Firing==============================
	$("#iname").blur(function(){
		$.fn.nameval();
	})

	$("#imail").blur(function(){
		$.fn.mailval();
	})
	$("#imale, #ifemale").click(function(){
		$.fn.genderval();
	})
	$("#icontact").blur(function(){
		$.fn.contactval();
	})	
	$("#ipassword").blur(function(){
		$.fn.pasval();
	})
	$("#icpassword").blur(function(){
		$.fn.cpasval();
	})
	$("#iqualification").change(function(){
		$.fn.qual();
	})
	$("#ijava, #ijavascript, #iangular, #ijquery").click(function(){
		$.fn.techval();
	})	
	$("#iaddress").blur(function(){
		$.fn.addval();
	})
	$("#isalary").blur(function(){
		$.fn.salval();
	})
	$("#iregister").click(function(){
		$.fn.empvalidate();
	})
	$("#iclear").click(function(){
		$.fn.clr();
	})	
	$("#icancel").click(function(){
	$.fn.cancelfun();
	})
	$("#iupdate").click(function(){
		$.fn.upfun();
	})
	$("#iupbutton").click(function(){
		$.fn.updatefun();
	})
	$("#idelete").click(function(){
		$.fn.deletefun();
	})	
	//-------------------------------------------------------
	var emparray=[];
	//======================================================
	//-=================================-Register--============================-
	$.fn.empvalidate=function ()
	{
		$.fn.nameval();
		$.fn.mailval();
		$.fn.genderval();
		$.fn.contactval();
		$.fn.pasval();
		$.fn.cpasval();
		$.fn.techval();
		$.fn.addval();
		$.fn.salval();
		if ($.fn.nameval() && $.fn.mailval() && $.fn.genderval() && $.fn.contactval() && $.fn.pasval() && $.fn.cpasval() && $.fn.techval() && $.fn.addval() && $.fn.salval()) 
		{var totsal=0;
			$("#idisplay").show();
		   var name = $("#iname").val();
			var email = $("#imail").val();
			var gen= $.fn.genderval();
			var contact = $("#icontact").val();
			var department = $("#idepartment").val();
			var qualification = $("#iqualification").val();
			var technologies=$.fn.techval();
			var address = $("#iaddress").val();
			var salary = $("#isalary").val();
			$.fn.rowdel();
			var employee ={Name:name,Email:email,Gender:gen,Contact:contact,Department:department,Highestqualification:qualification,Technologies:technologies,Address:address,Salary:salary}
			emparray.push(employee);
		for(var i=0;i<emparray.length;i++)
	     {
			 //var chkbox="<input type='checkbox' id='chk_"+(i+1)+"' class='chkbox'  value='"+(i+1)+"'>"
			 	var chkbox="<input type='checkbox' class='chkbox'  value='"+(i+1)+"'>"
				 var newRow = 
				'<tr class="rowclass">'+
				 '<td>'+chkbox+'</td>'+
				 '<td id="icol2_"'+(i+1)+'>'+emparray[i].Name+'</td>'+
				 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Email+'</td>'+
				 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Gender+'</td>'+
				 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Contact+'</td>'+
				 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Department+'</td>'+
				 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Highestqualification+'</td>'+
				 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Technologies+'</td>'+
				 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Address+'</td>'+
				 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Salary+'</td>'+
				 '</tr>'
					//$('#dtable tbody').append(newRow);				        
					//$('#dtable tbody tr:first').after(newRow);
					//$('#dtable tbody').find('tr:eq(1)').before(newRow)-
					$('#dtable tr:last').before(newRow)
					//$("#dtable tbody").append(newRow);
    	 totsal+= parseInt(emparray[i].Salary);
    	 }
    	 //--------------------------------------------------------
     // alert($('#dtable').find("tr:first").find("th:eq(9)").html());
		$('#dtable').find("tr:last").find("th:eq(1)").html(totsal.toString());

		//$('#ichkhead').prop('checked',false);
		if($('#ichkhead').is(':checked'))
			{ 
				$('#ichkhead').prop('checked',false);
			}
  		//--------------------------------------------------------			

          //--------------------------------------------------------------------------
		$("#iupdate").hide();$("#idelete").hide();
		}

		//----------------------------------------------------------------
		  $('.chkbox').on('change', function() 
		  {
			 	$.fn.chkfun();			 	
    	  })
		  //-----------------------------------------------------------------
         $('#ichkhead').change(function()
         {
            if($(this).prop("checked") == true)
        	 {
				$("#dtable").find('input[class="chkbox"]').each(function()
				 {
				$(this).prop("checked", true);
   				  })
			$.fn.chkfun();
			//$("#iupdate").hide();$("#idelete").show();               
             }
            else if($(this).prop("checked") == false)
           {
               $("#dtable").find('input[class="chkbox"]').each(function()
               {
				$(this).prop("checked", false);
				})
			//$("#iupdate").hide();$("#idelete").hide();
			$.fn.chkfun();
           }
        });


	}

//-======================================--Edit recordss-function-=====================================-
var checkindex=0;var checkindex2=0;
	$.fn.upfun=function ()
		{//--------------------------------------------------------------
			$("#dtable").find('input[class="chkbox"]').each(function()
    	   {

    		if($(this).is(":checked"))
    			{
    			//alert($(this).attr('value'));
    		checkindex =  $(this).attr('value');
    			}

    	   })
		//----------------------------------------------------------------	
		   var name = $('#dtable').find("tr:eq("+checkindex+")").find("td:eq(1)").html();
			var email = $('#dtable').find("tr:eq("+checkindex+")").find("td:eq(2)").html();
			var gen= $('#dtable').find("tr:eq("+checkindex+")").find("td:eq(3)").html();
			var contact = $('#dtable').find("tr:eq("+checkindex+")").find("td:eq(4)").html();
			var department = $('#dtable').find("tr:eq("+checkindex+")").find("td:eq(5)").html();
			var qualification = $('#dtable').find("tr:eq("+checkindex+")").find("td:eq(6)").html();
			var technologies=$('#dtable').find("tr:eq("+checkindex+")").find("td:eq(7)").html();
			var address = $('#dtable').find("tr:eq("+checkindex+")").find("td:eq(8)").html();
			var salary = $('#dtable').find("tr:eq("+checkindex+")").find("td:eq(9)").html();
			$("#iname").val(name);$("#imail").val(email);$("#icontact").val(contact);
			$("#idepartment").val(department);$("#iqualification").val(qualification);
			$("#iaddress").val(address);$("#isalary").val(salary);
		if(gen=="Male")
		{
			$('input:radio[name=rd]')[0].checked = true;
		}
		else
		{
			$('input:radio[name=rd]')[1].checked = true;	
		}

		if(qualification=='Graduation')
		{
			$("#tlabel").text("");

				$("#tech").show();
				$('.tech').each(function()
				{
					$(this).prop('checked', true)
					$(this).prop('disabled', true)
				})
		}
		if(qualification=='High School')
		{
				$("#tech").show();
				$('.tech').each(function()
				{
					$(this).prop('checked', false)
					$(this).prop('disabled', false)

				})			
			if(technologies.indexOf("Java,")>-1)
			{
				$("#tlabel").text("");
				$('#ijava').prop('checked', true);
			}
			if(technologies.indexOf("Javascript")>-1)
			{
				$("#tlabel").text("");
				$('#ijavascript').prop('checked', true);
			}
			if(technologies.indexOf("Angular")>-1)
			{
				$("#tlabel").text("");
				$('#iangular').prop('checked', true);
			}
			if(technologies.indexOf("Jquery")>-1)
			{
				$("#tlabel").text("");
				$('#ijquery').prop('checked', true);
			}
		}
		if(qualification=='SSC')
		{
			$("#tlabel").text("");

				$("#tech").hide();
				$('.tech').each(function()
				{
					$(this).prop('checked', false)
					$(this).prop('disabled', false)

				})
		}
			$("#icancel").show();$("#iupbutton").show();			
			$("#iregister").hide();$("#iclear").hide(); 
	}
//--==========================================Update Function===================================-----
$.fn.updatefun=function ()
{
		$.fn.nameval();
		$.fn.mailval();
		$.fn.genderval();
		$.fn.contactval();
		$.fn.pasval();
		$.fn.cpasval();
		$.fn.techval();
		$.fn.addval();
		$.fn.salval();
		if ($.fn.nameval() && $.fn.mailval() && $.fn.genderval() && $.fn.contactval() && $.fn.pasval() && $.fn.cpasval() && $.fn.techval() && $.fn.addval() && $.fn.salval()) 
		{
			var totsal=0;
			$("#idisplay").show();
		   var name = $("#iname").val();
			var email = $("#imail").val();
			var gen= $.fn.genderval();
			var contact = $("#icontact").val();
			var department = $("#idepartment").val();
			var qualification = $("#iqualification").val();
			var technologies=$.fn.techval();
			var address = $("#iaddress").val();
			var salary = $("#isalary").val();
			//----------------------------------------------------------
			$("#dtable").find('input[class="chkbox"]').each(function()
		    	{
		    		if($(this).is(":checked"))
		    			{
		    			//alert($(this).attr('value'));
		    		checkindex2 =  $(this).attr('value');
		    			}
		    	})	
			//----------------------------------------------------------
			checkindex2--;
			emparray[checkindex2].Name=name;emparray[checkindex2].Email=email;
			emparray[checkindex2].Gender=gen;
			emparray[checkindex2].Contact=contact;
			emparray[checkindex2].Department=department;
			emparray[checkindex2].Highestqualification=qualification;
			emparray[checkindex2].Technologies=technologies;
			emparray[checkindex2].Address=address;
			emparray[checkindex2].Salary=salary;
					$.fn.rowdel();//--------------------------------------
		for(var i=0;i<emparray.length;i++)
	      {
			var chkbox="<input type='checkbox' id='ichkbox' class='chkbox'  value='"+(i+1)+"'>"
			var newRow = 
			'<tr class="rowclass">'+
			 '<td>'+chkbox+'</td>'+
			 '<td id="icol2_"'+(i+1)+'>'+emparray[i].Name+'</td>'+
			 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Email+'</td>'+
			 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Gender+'</td>'+
			 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Contact+'</td>'+
			 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Department+'</td>'+
			 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Highestqualification+'</td>'+
			 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Technologies+'</td>'+
			 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Address+'</td>'+
			 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Salary+'</td>'+
			 '</tr>'
			//$('#dtable tbody').append(newRow);				        
			//$('#dtable tbody tr:first').after(newRow);
			//$('#dtable tbody').find('tr:eq(1)').before(newRow)
			$('#dtable tr:last').before(newRow)
			//$("#dtable tbody").append(newRow);
    	 totsal+= parseInt(emparray[i].Salary);	
		  }
 		$('#dtable').find("tr:last").find("th:eq(1)").html(totsal.toString());
        	//--------------------------------------------------------------- 
	  $('#ichkhead').prop('checked',false);
	   //-----------------------------------------------------------  	 
  			$("#icancel").hide();$("#iupbutton").hide();
			$("#iupdate").hide();$("#idelete").hide();
			$("#iregister").show();$("#iclear").show();  
		//----------------------------------------------------------------
	  }		
		checkindex2=0;
	//--------------------------------------------------------------------
	 	   $('.chkbox').on('change', function() 
	    {
	  // 	alert("test");
	 	$.fn.chkfun();
		})
 	   //----------------------------------------------------------------------------
      $('#ichkhead').change(function()
        {
          if($(this).prop("checked") == true)
            {
				$("#dtable").find('input[class="chkbox"]').each(function()
				{
				   $(this).prop("checked", true);
				})
				//$("#iupdate").show();$("#idelete").show();
				$.fn.chkfun();    
            }
          else if($(this).prop("checked") == false)
           {
               $("#dtable").find('input[class="chkbox"]').each(function()
               {
				$(this).prop("checked", false);
			   })
			   //$("#iupdate").hide();$("#idelete").hide();
			    $.fn.chkfun();
            }
        });
	}

//-===========================================Delete Function==========================================-
$.fn.deletefun=function ()
	{var totsal=0;
		var conf=confirm("Do you want to delete selected employee","Press ok to proceed");
		if(conf==true)
		{	//------------------------------------------------------
		if($('#ichkhead').is(':checked'))
			{ 
			$('#dtable').find("tr:last").find("th:eq(1)").html('0');
				emparray.splice(0,emparray.length);
			}
		else
		{
			//checkindex2=1;
			//$($("#dtable").find('input[class="chkbox"]').get().reverse()).each(function()
			$($(".chkbox").get().reverse()).each(function()
	    	{
	    		if($(this).is(":checked"))
    			{
	    		//	alert($(this).attr('value'));
	    		checkindex2 =  $(this).attr('value');
			checkindex2--;
	    	emparray.splice(checkindex2,1);		
    			}
	    	})	
	    }
	    	//--------------------------------------------------------		
				$.fn.rowdel();
		//--------------------------------------------------------------
		for(var i=0;i<emparray.length;i++)
		     {
				 var chkbox="<input type='checkbox' id='ichkbox' class='chkbox'  value='"+(i+1)+"'>"
				var newRow = 
					'<tr class="rowclass">'+
					 '<td>'+chkbox+'</td>'+
					 '<td id="icol2_"'+(i+1)+'>'+emparray[i].Name+'</td>'+
					 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Email+'</td>'+
					 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Gender+'</td>'+
					 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Contact+'</td>'+
					 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Department+'</td>'+
					 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Highestqualification+'</td>'+
					 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Technologies+'</td>'+
					 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Address+'</td>'+
					 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Salary+'</td>'+
					 '</tr>'
					//$('#dtable tbody').append(newRow);				        
					//$('#dtable tbody tr:first').after(newRow);
					//$('#dtable tbody').find('tr:eq(1)').before(newRow)
					$('#dtable tr:last').before(newRow)
					//$("#dtable tbody").append(newRow);
      	 totsal+= parseInt(emparray[i].Salary);       	
         	 }
 		$('#dtable').find("tr:last").find("th:eq(1)").html(totsal.toString());
         //------------------------------------------------------------------
   			$("#icancel").hide();$("#iupbutton").hide();
			$("#iupdate").hide();$("#idelete").hide();
			$("#iregister").show();$("#iclear").show();  	 
		}
			else
			{
				$('#ichkbox').prop("checked", false);
    			$("#dtable").find('input[class="chkbox"]').each(function()
    				{
    					if($(this).is(":checked"))
    					{
    						$(this).prop("checked", false); 
    				   }
    				})				
   			$("#icancel").hide();$("#iupbutton").hide();
			$("#iupdate").hide();$("#idelete").hide();
			$("#iregister").show();$("#iclear").show();
			}
 	   checkindex2=0;
 	   //---------------------------------------------------------------------
 	   $('#ichkhead').prop('checked',false);
 	   $('.chkbox').on('change', function() 
	     {
	 	$.fn.chkfun();
		})
 	   //---------------------------------------------------------------------
     $('#ichkhead').change(function()
      {
            if($(this).prop("checked") == true)
               {
				$("#dtable").find('input[class="chkbox"]').each(function()
				 {
				  $(this).prop("checked", true);
			     })
				//$("#iupdate").show();$("#idelete").show();
				$.fn.chkfun();               
               }
            else if($(this).prop("checked") == false)
            {
               $("#dtable").find('input[class="chkbox"]').each(function()
                 {
					$(this).prop("checked", false);
				 })
				//$("#iupdate").hide();$("#idelete").hide();
				$.fn.chkfun();
            }
       });
    }
	//====================================Clear Function==================================--
$.fn.clr=function ()
   {var totsal=0;

					$("#iname").css({"borderColor":"white"})
		$("#nlabel").text("");//----------------------------
				$("#imail").css({"borderColor":"white"})
		$("#elabel").text("");//----------------------------
		$("#glabel").text("");//----------------------------
				$("#icontact").css({"borderColor":"white"})
		$("#clabel").text("");//----------------------------
				$("#ipassword").css({"borderColor":"white"})
		$("#plabel").text("");//----------------------------
				$("#icpassword").css({"borderColor":"white"})
		$("#cplabel").text("");//----------------------------
				$("#iaddress").css({"borderColor":"white"})
		$("#alabel").text("");//----------------------------
				$("#isalary").css({"borderColor":"white"})
		$("#slabel").text("");//----------------------------
				$("#tech").hide();
			$.fn.rowdel();
		//---------------------------------------------------------------------	
	for(var i=0;i<emparray.length;i++)
      {
		 var chkbox="<input type='checkbox' id='ichkbox' class='chkbox'  value='"+(i+1)+"'>"
			var newRow = 
				'<tr class="rowclass">'+
				 '<td>'+chkbox+'</td>'+
				 '<td id="icol2_"'+(i+1)+'>'+emparray[i].Name+'</td>'+
				 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Email+'</td>'+
				 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Gender+'</td>'+
				 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Contact+'</td>'+
				 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Department+'</td>'+
				 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Highestqualification+'</td>'+
				 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Technologies+'</td>'+
				 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Address+'</td>'+
				 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Salary+'</td>'+
				 '</tr>'
				//$('#dtable tbody').append(newRow);				        
				//$('#dtable tbody tr:first').after(newRow);
				//$('#dtable tbody').find('tr:eq(1)').before(newRow)
				$('#dtable tr:last').before(newRow)
				//$("#dtable tbody").append(newRow);
  	    	 totsal+= parseInt(emparray[i].Salary);
  	 }
 		$('#dtable').find("tr:last").find("th:eq(1)").html(totsal.toString());

  	 //-----------------------------------------------------------------------------
 	   $('#ichkhead').prop('checked',false);
 	   $('.chkbox').on('change', function() 
	   {
	   //	alert("test");
	 	$.fn.chkfun();
		})
 	   //----------------------------------------------------------------------------
      $('#ichkhead').change(function()
        {
          if($(this).prop("checked") == true)
            {
				$("#dtable").find('input[class="chkbox"]').each(function()
				{
				   $(this).prop("checked", true);
				})
				//$("#iupdate").show();$("#idelete").show();
				$.fn.chkfun();    
            }
          else if($(this).prop("checked") == false)
           {
               $("#dtable").find('input[class="chkbox"]').each(function()
               {
				$(this).prop("checked", false);
			   })
			   //$("#iupdate").hide();$("#idelete").hide();
			    $.fn.chkfun();
            }
        });
      $("#iupdate").hide();$("#idelete").hide();
  }
//==================+=============Row Delete Function=============================================

$.fn.rowdel=function ()
  		{
		//$("#dtable").find("tr:gt(0)").remove();}
		//$('#dtable').has('td').remove();
		// $('#dtable').find('tbody').remove();
		$(".rowclass").remove();
		}
	       
//--==================================-Search table--=========================================--

$('#isearch').on('keyup',function()
{
	var totsal=0;
    var searchTerm = $(this).val().toLowerCase();
 /*   $('#dtable tr:gt(0)').each(function()
     {
        var lineStr = $(this).text().toLowerCase();
        if(lineStr.indexOf(searchTerm) === -1)
        {
            $(this).hide();
        }
        else
        {
            $(this).show();
        }
    });*/
$.fn.rowdel();
    for(var i=0;i<emparray.length;i++)
    {
    	var ind1=emparray[i].Name.toLowerCase().indexOf(searchTerm);
    	var ind2=emparray[i].Email.toLowerCase().indexOf(searchTerm);
    	var ind3=emparray[i].Gender.toLowerCase().indexOf(searchTerm);
    	var ind4=emparray[i].Contact.toLowerCase().indexOf(searchTerm);
    	var ind5=emparray[i].Department.toLowerCase().indexOf(searchTerm);
    	var ind6=emparray[i].Highestqualification.toLowerCase().indexOf(searchTerm);
    	var ind7=emparray[i].Technologies.toLowerCase().indexOf(searchTerm);
    	var ind8=emparray[i].Address.toLowerCase().indexOf(searchTerm);
    	var ind9=emparray[i].Salary.toLowerCase().indexOf(searchTerm);
    	if(ind1!=-1||ind2!=-1||ind3!=-1||ind4!=-1||ind5!=-1||ind6!=-1||ind7!=-1||ind8!=-1||ind9!=-1) 
    	{
			 var chkbox="<input type='checkbox' id='ichkbox' class='chkbox'  value='"+(i+1)+"'>"

			var newRow = 
				'<tr class="rowclass">'+
				 '<td>'+chkbox+'</td>'+
				 '<td id="icol2_"'+(i+1)+'>'+emparray[i].Name+'</td>'+
				 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Email+'</td>'+
				 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Gender+'</td>'+
				 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Contact+'</td>'+
				 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Department+'</td>'+
				 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Highestqualification+'</td>'+
				 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Technologies+'</td>'+
				 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Address+'</td>'+
				 '<td id="icol1_"'+(i+1)+'>'+emparray[i].Salary+'</td>'+
				 '</tr>'
				$('#dtable tr:last').before(newRow)    		
    	 totsal+= parseInt(emparray[i].Salary);
    	}
         	 }
 		$('#dtable').find("tr:last").find("th:eq(1)").html(totsal.toString());
 	   $('.chkbox').on('change', function() 
	   {
	   //	alert("test");
	 	$.fn.chkfun();
		})
});

//================================================================================

$('.Button').hover(			
               function () {
                  $(this).css({"background-color":"rgba(50, 220, 251, .5)"});
               }, 					
               function () {
                  $(this).css({"background-color":"rgba(250, 220, 31, .5)"});
               },               
            );
})
//=-=-====-=-==============================================

