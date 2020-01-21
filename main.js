var ntime = parseInt(
  new Date()
    .getTime()
    .toString()
    .substring(0, 10)
);
var a = $('#vid').val();
comCheck = 'Y';
$.ajax({
  type: 'POST',
  async: true,
  url: '/include/gen_ajax.php',
  dataType: 'html',
  data:
    'mid=<?=$mid?>&act=getComplete&a=' + a + '&b=' + 564 + '&ntime=' + ntime,
  success: function(response, status, request) {
    if (response == 'E') {
      if ('k' == 'e') {
        alert('System Error. Please try again.');
      } else {
        alert('오류가 발생하였습니다. 잠시후 다시 시도해 주십시오.');
      }
      //window.close();
    } else {
      if (response == 'Y') {
        opener.window.document.ffsearch.submit();
        if ('k' == 'e') {
          alert('You have finished watching this video clip.');
        } else {
          alert('수강이 완료되었습니다');
        }
        //window.close();
      } else {
        opener.window.document.ffsearch.submit();
        if ('k' == 'e') {
          alert('Please check your course time and try again');
        } else {
          alert('수강 기준 시간에 미달합니다. 다시 수강하시기 바랍니다.');
        }
        //window.close();
      }
    }
  }
});
