requirejs.config({
  baseUrl: 'scripts/lib'
});

requirejs(['jquery', 'bst', 'jquery_placeholder'], function($, bst, jp){

  // Left-pane behavior

  function sumtest(arr, num){

    let bstree = new bst.BinarySearchTree();

    function recursiveAddition(arr){
      if(arr.length>1){
        bstree.insert(arr[arr.length/2]);
        recursiveAddition(arr.slice(0, arr.length/2));
        recursiveAddition(arr.slice((arr.length/2) + 1));
      }
      else if(arr.length === 1){
        bstree.insert(arr[0]);
      }
      else return;
    }

    recursiveAddition(arr);

    for(let i=0; i<arr.length; i++){
      // if(arr[i] * 2 === num) continue;
      let temp = arr[i];
      bstree.search(bstree.root, arr[i]).data = 0;
      
      let node = bstree.search(bstree.root, num-temp);
      if(node !== null){
        return 'True';
      }
    }

    return 'False';
  }

  function data_parse(data){
    let str_temp = '';
    let arr = JSON.parse(data.match("\\[.*]"));
    for(let i = data.length-1; data[i]!=' '; i--) str_temp+=data[i];

    return {arr, str_temp};
  }

  $('.data_enter input').placeholder({customClass: 'my-placeholder'});
  $('input').placeholder();

  $("input[type='file']").change(function(){
    $('#displayTextFile').text(this.value.replace(/C:\\fakepath\\/i, ''));
  });

  $('.data_enter .test_button').click(function(){
    let data = $('#test_input').val();

    let {arr, str_temp} = data_parse(data);
    let res = sumtest(arr, JSON.parse(str_temp.split("").reverse().join("")));
    $('#showResult').fadeTo(100, 0.3, function(){ $(this).fadeTo(500, 1.0);}).text(res+'');
  });

  $('.data_upload .test_button').click(function(){

    let reader = new FileReader();

    reader.onload = function(e){
      let text = reader.result, res = '';
      let arrString = text.trim().split('\n');

      for(let i=0; i<arrString.length; i++){
        let {arr, str_temp} = data_parse(arrString[i]);

        res = res + '\n' + sumtest(arr, JSON.parse(str_temp.split("").reverse().join("")));
      }

      $('#showResult').fadeTo(100, 0.3, function(){ $(this).fadeTo(500, 1.0);}).text(res);
    }

    reader.readAsText(document.getElementById('uploadTextFile').files[0]);
  });


  // Right-pane behavior
  // $('div.a-desc p').val().hide();
  // $()
  // console.log($('div.a-desc'), $('div.a-desc p'));



  $('.clickButton').click(function(){
    // console.log($(this).closest('.q-btn').next().children());
    $(this).closest('.q-btn').next().children().children('p, div').fadeToggle(300);
  }).trigger('click');

  // $('.clickButton').trigger('click')

});
