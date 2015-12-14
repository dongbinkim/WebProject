var id = 0;
$(document).ready(function(){
  $(document).on('click', '#addQuestion' , function() {
    $(document).find('.QuestPart').append($("#ChoiceQuestTemplate").html());
  });
  $(document).on('click', '#addAnswer' , function() {
    $(document).find('.AnswerPart').append($("#ChoiceAnswerTemplate").html());
  });
  $(document).on('click', '#removeAnswer' , function() {
    $(this).parents('from-group').remove();
  });
  // $(document).on('click', '#exampleAdd' , function() {
  //   $(this).append($("#exampleAddTemplate").html());
  //   //$(document).find('.Qtype').append($("#sltformTemplate").html());
  // });

  $(document).on('change', '#category', function() {
    $(this).parents('.content').find('.QuestPart').empty();
    switch($(this).val())
      {
        case '객관식':
        $(this).parents('.content').find('.QuestPart').append($("#ChoiceTemplate").html());
        break;
        case '단일문항':
        $(this).parents('.content').find('.QuestPart').append($("#SingleTemplate").html());
        break;
        case '의견':
        $(this).parents('.content').find('.QuestPart').append($("#CommentTemplate").html());
        break;
      }

  });
});
