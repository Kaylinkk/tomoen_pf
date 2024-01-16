$(function(){

    const slide = $('.s3_slide .row')
    const nextBtn = $('.s3_slide .arrow.right')
    const prevBtn = $('.s3_slide .arrow.left')


    nextBtn.on('click',function(e) {
        e.preventDefault()
       const slider = $(this).parent('.row');
       

       if(slider.hasClass('row1')){
        next(0)
       }
       else if(slider.hasClass('row2')){
        next(1)
       }
    })


    prevBtn.on('click',function(e) {
        e.preventDefault()
       const slider = $(this).parent('.row');
       

       if(slider.hasClass('row1')){
        prev(0)
       }
       else if(slider.hasClass('row2')){
        prev(1)
       }
    })



    function next(i){
        const crt = slide.eq(i).children('.row_inner')

        let index = crt.children('img.active').index()
        let slLength = crt.children('img').length

        index++

        if(index ==slLength){
            index=0
        }

        crt.children('img').removeClass('active')
        crt.children('img').eq(index).addClass('active')
      
    }



    function prev(i){
        const crt = slide.eq(i).children('.row_inner')

        let index = crt.children('img.active').index()
        let slLength = crt.children('img').length

        index--

        if(index < 0){
            index=slLength -1
        }

        crt.children('img').removeClass('active')
        crt.children('img').eq(index).addClass('active')
      
    }


})

