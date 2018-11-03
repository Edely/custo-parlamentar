var menu = (function(){
  //desktop
  var depu = '.deputados__item';
  var sear = "#procurar";

  //mobile
  var depuM = '.deputados__item__mobile';
  var searM = "#searchMobile";


  //busca dinamica deputados
  function listaDeputados(cssDeputados, searchId, mobile=false){
    var deputados = $(cssDeputados);
    var search = $(searchId)[0];

    $(searchId).on('input', function(){
      $(deputados).parent().css('display', 'none');
      var exp = new RegExp(search.value, 'i');
      for(var j = 0; j < deputados.length; j++){
        var depWrapper = deputados[j];
        var dep = $(depWrapper).text();
        if(dep.search(exp) != -1){
            $(depWrapper).parent().css('display', 'block');
        }
      }
    });
  }

  listaDeputados(depuM, searM);
  listaDeputados(depu, sear);

  //input desencadeia abertura do menu em mobile
  $("#searchMobile").on('focus', function(){
    if( !$('#navbarMobDeputado').hasClass('show')  ){
      $('#navbarMobDeputado').addClass('show')
      $('#navbarMobDeputado').addClass('collapsed');
    }  
  });

  $("#searchMobile").on('blur', function(){
    $('.deputados-mobile button').click();
    if( !$('#searchMobile').val() == "" ){
      $('#navbarMobDeputado').removeClass('show');
      $('#navbarMobDeputado').removeClass('collapsed');
    }  
  });

  
})();

(function(){
  $('.aside-desktop *').mouseover(
    function(){
      if(($(window).innerWidth() < 992) && ($(window).innerWidth() > 767)){
        $('.expand-menu').css('width', '230px');
        $('.deputados__item').css('display', 'block');
        console.log('foi o hover');
      }    
    });
  $('.aside-desktop *').mouseleave(
    function(){
      if(($(window).innerWidth() < 992) && ($(window).innerWidth() > 767)){
        $('.deputados__item').css('display', 'none');
        $('.expand-menu').css('width', '64px');
        console.log('saiu o hover');
      }    
    });

})();

console.log(1)