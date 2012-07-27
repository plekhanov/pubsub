$(document).ready(function () {
	function initResult() {
		$('#result').subscribe({
			channel: 'test',
			source: 'result',
			callback: function (data) {
				$('#result').html(data);
			}
		});
	}
	$('#source').bind('change', function(){
		$(this).publish({
			channel: 'test',
			data: $(this).val()
		});
	});
	initResult();
	$('#subscribe').bind('click', function(){
		initResult();
	});
	$('#unsubscribe').bind('click', function(){
		unsubscribe
		$('#result').unsubscribe({
			channel: 'test',
			source: 'result'
		});
	});
});