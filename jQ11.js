$(document).ready(function() {
    head();
    body();
    function head(){
    $('#selectall').click(function(){
        $("#selectall").css("accent-color", "grey");
        $('.case').attr("checked",this.checked);
    });
    }
    function body(){
    $('.case').click(function(){
        if($(".case").length != $(".case:checked").length){
            $("#selectall").css("accent-color", "red");
            $('#selectall').attr("checked","checked");
        }
        else if($(".case").length == $(".case:checked").length){
            $("#selectall").css("accent-color", "grey");
            $('#selectall').attr("checked","checked");
        }
        else{
            $("#selectall").removeAttr("checked");
        }
    });
    }
});