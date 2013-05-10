function appendImg(pictureId, src){
	var picture = '<a href="javascript:void(0)" onclick="selectImg(\'' + pictureId + '\');" name="image' + pictureId + '"><img ondragstart="return false;" class="thumb" id="' + pictureId + '" src="' + src + '" /></a>'; 
	$('#imageGrid').append(picture);
}

function insertImg(pictureId, objectId, src){
	var picture = '<a href="javascript:void(0)" onclick="selectImg(\'' + pictureId + '\');" name="image' + pictureId + '"><img ondragstart="return false;" class="thumb" id="' + pictureId + '" src="' + src + '" /></a>'; 
	$(picture).insertAfter('#' + objectId);
}

/* not used */

/*
 function getImgSrc(objectId){
 return $('#' + objectId).attr('src');
 }
 
 function setImgSrc(objectId, src){
 $('#' + objectId).attr('src', src);
 }

 function showImg(objectId){
 $('#' + objectId).show('fast');
 }

 function isImgHidden(objectId){
 return $('#' + objectId).is(":hidden");
 }

 function isImgVisible(objectId){
 return $('#' + objectId).is(":visible");
 }
 
 */

function setMaxSize(className, value) {
	$('.' + className).css('maxWidth', value + 'px');
	$('.' + className).css('maxHeight', value + 'px');
}

function hideImg(objectId){
	$('#' + objectId).hide('fast');
}

function removeImg(objectId){
	hideImg(objectId);
	$('#' + objectId).hide('fast', function() {$(this).remove();});
}

function highlightImg(objectId){
	$('#' + objectId).removeClass('selected').addClass('highlighted');
}

function unhighlightImg(objectId){
	$('#' + objectId).removeClass('highlighted selected');
}

function selectImg(objectId){
	$('.thumb').removeClass('highlighted selected');
	$('#' + objectId).addClass('selected');
	window.location = "http://image/" + objectId;
}