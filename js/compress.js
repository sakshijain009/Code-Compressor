document.getElementById('copy').addEventListener("click",function(){
		let copyTextarea = document.querySelector('#comment');
        copyTextarea.focus();
        copyTextarea.select();
        try {
          let successful = document.execCommand('copy');
          let msg = successful ? 'successful' : 'unsuccessful';
          if(msg==='successful'){
          	    document.getElementById('copy').innerHTML="copied!";
          	    setTimeout(function () {
				document.getElementById('copy').innerHTML="COPY";
				}, 2000);
          }
		} catch(err) {
          alert('Unable to copy');
        }
});

document.getElementById('buts').addEventListener("click",function(){
  var text1 = document.getElementById('comment').value;
  var text3=text1;
  text3=text3.replace(/\t/ig, "").replace(/\n/ig, "").replace(/\s\s+/ig, "");
  document.getElementById('comment').value=text3;
});

document.getElementById('reset').addEventListener("click",function(){
  document.getElementById('comment').value="";
});