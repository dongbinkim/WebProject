function QuestController {

  $('#add-question').click(function() {
	  $("#here").append($('#questionTemplate').html());
  });
  //$('#category').css('display','none')
}

function AnswerController {

  $('#add-answer').click(function() {
	  $("#here").append($('#answerTemplate').html());
  });
  //$('#category').css('display','none')
}
