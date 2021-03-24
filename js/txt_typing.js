function txtTyping(){
  let workStrong = $('.work_content strong');
  let txtStrong = workStrong.text().trim();
  workStrong.text('');
  let subStrong = '';
  let indexNum = 0;
  let rotateStrong = setInterval(function(){
    if(indexNum < txtStrong.length){
      subStrong = subStrong + txtStrong[indexNum];
      workStrong.text(subStrong);
      indexNum++;
    }else{
      subStrong ='';
      indexNum = 0;
    }
  },200);
}