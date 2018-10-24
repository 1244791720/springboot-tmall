var log = console.log.bind(console);

/*show eachCategory*/
var controlEachCategory = () => {
    $('.eachCategory').each(function(){
        var cidEC = $(this).attr('cid')
        log(cidEC)
        var productsAsideCategorys = $('.productsAsideCategorys')
        $(this).on('mouseover', function(){
            $(this).attr('style', 'background-color: white!important')
            $(this).siblings().attr('style', 'background-color:rgb(226,226,227)!important')
            productsAsideCategorys.each(function(){
                var cidPAC = $(this).attr('cid')
                if (cidEC == cidPAC) {
                    $(this).siblings().attr('style', 'left: 227.6px;display:none!important')
                    $(this).attr('style', 'left: 227.6px;display:block!important')
                }
            })
        })
    })
    $('.homepageCategoryProducts').on('mouseover', function() {
        $('.productsAsideCategorys').hide()
        $('.eachCategory').attr('style', 'background-color:rgb(226,226,227)!important')
    })

    $('.headbar').on('mouseover', function() {
        $('.productsAsideCategorys').hide()
        $('.eachCategory').attr('style', 'background-color:rgb(226,226,227)!important')

    })

    $('iframe').on('mouseover', function() {
        $('.productsAsideCategorys').hide()
        $('.eachCategory').attr('style', 'background-color:rgb(226,226,227)!important')
    })
}

/*control lunbo*/
var controlCarouselOfProduct = () => {
    $("#carousel-of-product").carousel('cycle');
    $("#carousel-of-product").carousel({
        interval: 30000
    });
}
var maoerChange = () => {
    var num = 240.5;
    var i = $($('.homepageDiv img')[0])
    $('.rightMenu span').each(function() {
        var index = $(this).index()
        log(index)
        $(this).on('mouseover', function() {
            switch(index) {
                case 0:
                    num = 500
                    break
                case 1:
                    num = 620
                    break
                case 2:
                    num = 720
                    break
                case 3:
                    num = 820
                    break
                case 4:
                    num = 890
                    break
                case 5:
                    num = 980
                    break
            }

            i.attr('style', `left:${num}px;`)
        })
    })


}
/*add productItem-img mask*/
var productItemImgMask = () => {
    var pImgs = $('.productItem')
    pImgs.each(function(){
        $(this).on('mouseover', function(){
            var mask = $(this).children('.product-mask')
            log('mask', mask)
            mask.show()
        })
        $(this).on('mouseout', function(){
            var mask = $(this).children('.product-mask')
            log('mask', mask)
            mask.hide()
        })


    })

}


var _main = function() {
    controlEachCategory()
    controlCarouselOfProduct()
    productItemImgMask()
    maoerChange()

}
window.onload = _main()
