$(document).ready(function(){

    window.setTimeout(ShowPage, 2000);


function ShowPage(){
    $('.headerpage').removeClass('width800 m-auto mt-15per');
    $('.loadingdata').hide();
    $('.logobox').removeClass('col-lg-10').addClass('logomobile')
    $('.whitefiller,footer,.rightpanelheader').fadeIn('slow')
}
/*
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
*/
$('.options img').on('click',function(){
    $('.optionLinks').toggle()
})

$('.pagelink').on('click',function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active')
        $('.subpagedetails').hide();
        $('.pagelink h2').text('LEARN MORE ABOUT THIS REPORT >')
        $('.Page').show()
    }else{
        $(this).addClass('active')
        $('.subpagedetails').show()
        $('.pagelink h2').text('< GO BACK')
        $('.Page').hide()
    }
    
})
$('.page1details').on('click',function(){
    $('.subpage1details').toggle()
})
$('.page2details').on('click',function(){
    $('.subpage2details').toggle()
})
$('.page3details').on('click',function(){
    $('.subpage3details').toggle()
})
$('.yellowfiller.info').on('click',function(){
    $('.offClass').toggle()
})
$('.greenfiller').on('click',function(){
    $('.onClass').toggle()
})

	/*$.ajax({
	  url: "assets/script/data.json",
	  dataType: 'json',
	  contentType: 'application/json',
	  success: function(data){
	  	var pageID=getUrlParameter('ID')
       
        if(pageID){
            var listData= data.filter(
                function(data) {
                  return data.ID == pageID
                }
            )

            if(listData==0){
                $('.nodata').show()
            }else{
                //$('.schoolName').html(listData[0].SName)
                //$('.PrincipalName').html(listData[0].PName)
				//$('.sra').html(listData[0].RAD)

                if(listData[0].Staffing==="On"){
                    $('.onClass .Staffing').show()
                }else if(listData[0].Staffing==="Off"){
                    $('.offClass .Staffing').show()
                }
    
                if(listData[0].Schedule==="On"){
                    $('.onClass .Schedule').show()
                }else if(listData[0].Schedule==="Off"){
                    $('.offClass .Schedule').show()
                }
    
                if(listData[0].Observe==="On"){
                    $('.onClass .Observe').show()
                }else if(listData[0].Observe==="Off"){
                    $('.offClass .Observe').show()
                }
               
                if(listData[0].EncourageLearning==="On"){
                    $('.onClass .EncourageLearning').show()
                }else if(listData[0].EncourageLearning==="Off"){
                    $('.offClass .EncourageLearning').show()
                }
                
                if(listData[0].Communicate==="On"){
                    $('.onClass .Communicate').show()
                }else if(listData[0].Communicate==="Off"){
                    $('.offClass .Communicate').show()
                }
    
                if(listData[0].EducateCommunity==="On"){
                    $('.onClass .EducateCommunity').show()
                }else if(listData[0].EducateCommunity==="Off"){
                    $('.offClass .EducateCommunity').show()
                }
                
                if(listData[0].IncludeinCEP==="On"){
                    $('.onClass .IncludeinCEP').show()
                }else if(listData[0].IncludeinCEP==="Off"){
                    $('.offClass .IncludeinCEP').show()
                }
                
                if(listData[0].DesignateSpace==="On"){
                    $('.onClass .DesignateSpace').show()
                }else if(listData[0].DesignateSpace==="Off"){
                    $('.offClass .DesignateSpace').show()
                }
                
                if(listData[0].FosterInclusivity==="On"){
                    $('.onClass .FosterInclusivity').show()
                }else if(listData[0].FosterInclusivity==="Off"){
                    $('.offClass .FosterInclusivity').show()
                }
            }
    
for (var key in listData[0]) {
                    if (listData[0].hasOwnProperty(key)) {
                        var value = listData[0][key];
                        if(value=="On"){
                            $('.greenfillerback').show()		
                        }else{
                            null
						}
                    }
                }  
for (var key in listData[0]) {
                    if (listData[0].hasOwnProperty(key)) {
                        var value = listData[0][key];
                        if(value=="Off"){
                            $('.yellowfiller').show()
                        }else{
                            null
						}
                    }
                } 
        }else{
            $('.nodata').show();
        }
        
	  }
	})
*/
//$('.staffpanel,.Schedule,.EncourageLearning,.EducateCommunity').hide()


})