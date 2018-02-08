// use to scramble the @ symbol
// replace @ symbol with letters in var maildivider
// so test@test.com is test[at]test.com in html code

/***********************************************
* Easy Email Scrambler script- (c) Dynamic Drive (www.dynamicdrive.com)
* Please keep this notice intact
* Visit http://www.dynamicdrive.com/ for full source code
***********************************************/

<script>

var maildivider="[at]" 

for (i=0; i<=(document.links.length-1); i++){
if (document.links[i].href.indexOf(maildivider)!=-1)
document.links[i].href=document.links[i].href.split(maildivider)[0]+"@"+document.links[i].href.split(maildivider)[1]
}

</script>