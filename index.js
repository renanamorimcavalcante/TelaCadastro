/* === RESOLVER PROBLEMA DA DATA PADRÃO EN === */
$(function () {
        $.datepicker.setDefaults($.datepicker.regional["pt-BR"]); // Use o código do idioma correto
        
        $("#datepicker").datepicker(); // Inicialize o Datepicker
    });