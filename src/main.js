import jQuery from 'jquery';
const $ = jQuery;

class captionMotion {
  constructor(){
    this.init();
  }
  init(){
    this.setParameter();
    this.bindEvent();
  }
  setParameter(){
    this.$caption = $('.myText');
    this.text = this.$caption.text();
    this.$caption.empty().show();
    this.array = this.text.split('');
    this.element = [];
    this.$startBtn = $('.jsc-Btn');
  }
  bindEvent(){
    this.array.map((item,index)=>{
      this.element[index] = $(`<span>${item}</span>`);
      this.$caption.append(this.element[index]);
    });
    this.$startBtn.on('click',$.proxy(this.motion,this));
  }
  motion(){
    this.$startBtn.addClass('isHide');
    this.element.map((item,index)=>{
      item.delay(200 * index).queue(function(){
        $(this).addClass('motion');
      });
    });
  }
}

new captionMotion;