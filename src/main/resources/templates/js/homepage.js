var log = console.log.bind(console);

/*show eachCategory*/
var controlEachCategory = () => {
    $('.eachCategory').each(function(){
        var cidEC = $(this).attr('cid')
        log(cidEC)
        var productsAsideCategorys = $('.productsAsideCategorys')
        $(this).on('mouseover', function(){
            productsAsideCategorys.each(function(){
                var cidPAC = $(this).attr('cid')
                if (cidEC == cidPAC) {
                    $(this).attr('style', 'left:-20px;display:block')
                }
            })
        })
        $(this).on('mouseout', function(){
            productsAsideCategorys.each(function(){
                var cidPAC = $(this).attr('cid')
                if (cidEC == cidPAC) {
                    $(this).attr('style', 'left:-20px;display:none')
                }
            })
        })
    })
}

/*control lunbo*/
var controlCarouselOfProduct = () => {
    $("#carousel-of-product").carousel('cycle');
    $("#carousel-of-product").carousel({
        interval: 30000
    });
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
}
_main()
