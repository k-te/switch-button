$(document).on('click', '#toggler', function()
{ 
if ($('link[href="css/style.css"]').length>0)
{
$('link[href="css/style.css"]').attr('href','css/yeti.css');
}

else if($('link[href="css/yeti.css"]').length>0)
{
$('link[href="css/yeti.css"]').attr('href','css/style.css');

}
});