// Write your Pizza Builder JavaScript in this file.
$(".btn-pepperonni").click(function(){
    $(".pep").toggle()
    if($(".pep:visible").length===0){
        $(".btn-pepperonni").removeClass("active")
        $("aside li:nth-child(1)").show()
    }else{
        $(".btn-pepperonni").addClass("active")
        $("aside li:nth-child(1)").hide()
    }
})

$(".btn-mushrooms").click(function(){
    $(".mushroom").toggle()
    if($(".mushroom:visible").length===0){
        $(".btn-mushrooms").removeClass("active")
        $("aside li:nth-child(2)").show()
    }else{
        $(".btn-mushrooms").addClass("active")
        $("aside li:nth-child(2)").hide()
    }
})

$(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle()
    if($(".green-pepper:visible").length===0){
        $(".btn-green-peppers").removeClass("active")
        $("aside li:nth-child(3)").show()
    }else{
        $(".btn-green-peppers").addClass("active")
        $("aside li:nth-child(3)").hide()
    }
})

$(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free");
    if($(".crust").hasClass("crust-gluten-free")){
        $(".btn-crust").removeClass("active")
        $("aside li:nth-child(5)").show()
    }else{
        $(".btn-crust").addClass("active")
        $("aside li:nth-child(5)").hide()
    }
})

$(".btn-sauce").click(function(){
    $(".sauce").toggleClass("sauce-white")
    //just short vesrion 
   // $(".btn-sauce").toggleClass("active", $(".sauce").hasClass("sauce-white"))
   if($(".sauce").hasClass("sauce-white")){
    $(".btn-sauce").removeClass("active")
    $("aside li:nth-child(4)").show()
}else{
    $(".btn-sauce").addClass("active")
    $("aside li:nth-child(4)").hide()
}
})
$()

$(".btn-crust").removeClass("crust-gluten-free")
$(".sauce").removeClass("sauce-white")
$(".btn-sauce").removeClass("active")
$(".btn-crust").removeClass("active")

