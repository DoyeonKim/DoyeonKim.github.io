<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js"></script>
<script type="text/javascript">
$(document).ready(function(){
initTabs();
});
function initTabs() {
$('#tabMenu a').bind('click',function(e) {
e.preventDefault();
var thref = $(this).attr("href").replace(/#/, '');
$('#tabMenu a').removeClass('active');
$(this).addClass('active');
$('#tabContent div.content').removeClass('active');
$('#'+thref).addClass('active');
});
}
</script>