snippet_count = 120;
//<![CDATA[
function removeHtmlTag(n,e){if(-1!=n.indexOf("<")){for(var t=n.split("<"),i=0;i<t.length;i++)-1!=t[i].indexOf(">")&&(t[i]=t[i].substring(t[i].indexOf(">")+1,t[i].length));n=t.join("")}for(e=e<n.length-1?e:n.length-2;" "!=n.charAt(e-1)&&-1!=n.indexOf(" ",e);)e++;return n=n.substring(0,e-1),n+"..."}function createSnippet(n){var e=document.getElementById(n),t=snippet_count,i='<div class="snippets">'+removeHtmlTag(e.innerHTML,t)+"..."+"</div>";e.innerHTML=i}
//]]>