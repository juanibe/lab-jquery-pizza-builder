// Write your Pizza Builder JavaScript in this file.

var totalPrice = 13;

$(".btn-pepperonni").click(function(){
    $(".pep").toggle()
    if($(".pep:visible").length===0){
        $(".btn-pepperonni").removeClass("active")
        $("aside li:nth-child(1)").show()
        totalPrice += 1
    }else{
        $(".btn-pepperonni").addClass("active")
        $("aside li:nth-child(1)").hide()
        totalPrice -= 1
    }
    $("aside strong").html("$"+totalPrice)
})

$(".btn-mushrooms").click(function(){
    $(".mushroom").toggle()
    if($(".mushroom:visible").length===0){
        $(".btn-mushrooms").removeClass("active")
        $("aside li:nth-child(2)").show()
        totalPrice += 1
    }else{
        $(".btn-mushrooms").addClass("active")
        $("aside li:nth-child(2)").hide()
        totalPrice -= 1
    }
    $("aside strong").html("$"+totalPrice)
})

$(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle()
    if($(".green-pepper:visible").length===0){
        $(".btn-green-peppers").removeClass("active")
        $("aside li:nth-child(3)").show()
        totalPrice += 1
    }else{
        $(".btn-green-peppers").addClass("active")
        $("aside li:nth-child(3)").hide()
        totalPrice -= 1
    }
    $("aside strong").html("$"+totalPrice)
})

$(".btn-crust").click(function(){
    $(".crust").toggleClass("crust-gluten-free");
    if($(".crust").hasClass("crust-gluten-free")){
        $(".btn-crust").removeClass("active")
        $("aside li:nth-child(5)").show()
        totalPrice += 5
    }else{
        $(".btn-crust").addClass("active")
        $("aside li:nth-child(5)").hide()
        totalPrice -= 5
    }
})

$(".btn-sauce").click(function(){
    $(".sauce").toggleClass("sauce-white")
    //just short vesrion 
   // $(".btn-sauce").toggleClass("active", $(".sauce").hasClass("sauce-white"))
   if($(".sauce").hasClass("sauce-white")){
    $(".btn-sauce").removeClass("active")
    $("aside li:nth-child(4)").show()
    totalPrice += 3
}else{
    $(".btn-sauce").addClass("active")
    $("aside li:nth-child(4)").hide()
    totalPrice -= 3
}
$("aside strong").html("$"+totalPrice)
})
$()

$(".btn-crust").removeClass("crust-gluten-free")
$(".sauce").removeClass("sauce-white")
$(".btn-sauce").removeClass("active")
$(".btn-crust").removeClass("active")


