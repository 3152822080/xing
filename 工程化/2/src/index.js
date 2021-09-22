import $ from 'jquery'
import './css/1.css'
import './css/1.less'


$(function() {
    $('li:odd').css('backgroundColor', 'red')
    $('li:even').css('backgroundColor', 'pink')
})