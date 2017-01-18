$(document).ready(function() {

var nowTemp = new Date();
var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

$('.spinner .btn:first-of-type').on('click', function() {
    $('.spinner input').val( parseInt($('.spinner input').val(), 10) + 0 + 1);
  });
  $('.spinner .btn:last-of-type').on('click', function() {
    $('.spinner input').val( parseInt($('.spinner input').val(), 10) + 0 - 1);
  });
  
  $('.date_from').datepicker({
	 	format:'yyyy-mm-dd',
	  });

 $('.dobdatepicker').datepicker({
	 	format:'yyyy-mm-dd',
		onRender: function(date) {
			return date.valueOf() > now.valueOf() ? 'disabled' : '';
		}
	  });

var checkin = $('#fromDate').datepicker({
   format:'yyyy-mm-dd',
}).on('changeDate', function(ev) {
    var newDate = new Date(ev.date)
    newDate.setDate(newDate.getDate() + 366);
    checkout.setValue(newDate);

}).data('datepicker');

var checkout = $('#toDate').datepicker({
	format:'yyyy-mm-dd',
  onRender: function(date) {
    return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
  }
}).on('changeDate', function(ev) {
  checkout.hide();
}).data('datepicker');
    
} );

function select_deselect(treeid, operation){

    if(operation=='select'){
        $('#'+treeid).tree('checkAll');
    }
    else{
        $('#'+treeid).tree('uncheckAll');
    }

    return false;
}
