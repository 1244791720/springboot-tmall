var showLeaveMessageTextareaSpan = () => {
    var lmi = $('.leaveMessageImg')
    var lmts = $('.leaveMessageTextareaSpan')
    var ois = $('.orderItemSumDiv')

    lmi.on('click', function() {
        lmi.attr('style', 'display: none;')
        lmts.attr('style', 'display: inline;')
        ois.attr('style', 'height:80px!important')
    })
}

var _main = () => {
    showLeaveMessageTextareaSpan()
}

_main()
