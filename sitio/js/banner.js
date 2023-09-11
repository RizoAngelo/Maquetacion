var contenedor=$('#caja');
var siguiente=$('#btn-adelante');
var anterior=$('#btn-atras');
$('#caja .section_caja:last').insertBefore
('#caja .section_caja:first');

contenedor.css( 'margin-left', '-'+100+'%');

function derecha(){
    contenedor.animate({
        marginLeft:'-'+200+'%'}
        ,700, function(){
            $('#caja .section_caja:first').insertAfter('#caja.section_caja:last');
            contenedor.css( 'margin-left', '-'+100+'%' );
        });
}
function izquierda(){
    contenedor.animate({
        marginLeft:0}
        ,700, function(){
            $('#caja .section_caja:last').insertAfter('#caja.section_caja:first');
            contenedor.css( 'margin-left', '-'+100+'%' );
        });
}
function automatico(){
    interval=setInterval(function(){
        derecha();
    }, 5000);
}

siguiente.on('click',function(){
    derecha();
    clearInterval(interval);
    automatico();
})

automatico()
