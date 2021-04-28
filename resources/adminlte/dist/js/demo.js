/**
 * AdminLTE Demo Menu
 * ------------------
 * You should not use this file in production.
 * This file is for demo purposes only.
 */

/* eslint-disable camelcase */

(function ($) {
  'use strict'

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  function createSkinBlock(colors, callback, noneSelected) {
    var $block = $('<select />', {
      class: noneSelected ? 'custom-select mb-3 border-0' : 'custom-select mb-3 text-light border-0 ' + colors[0].replace(/accent-|navbar-/, 'bg-')
    })

    if (noneSelected) {
      var $default = $('<option />', {
        text: 'None Selected'
      })
      if (callback) {
        $default.on('click', callback)
      }

      $block.append($default)
    }

    colors.forEach(function (color) {
      var $color = $('<option />', {
        class: (typeof color === 'object' ? color.join(' ') : color).replace('navbar-', 'bg-').replace('accent-', 'bg-'),
        text: capitalizeFirstLetter((typeof color === 'object' ? color.join(' ') : color).replace(/navbar-|accent-|bg-/, '').replace('-', ' '))
      })

      $block.append($color)

      $color.data('color', color)

      if (callback) {
        $color.on('click', callback)
      }
    })

    return $block
  }

  var $sidebar = $('.control-sidebar')
  var $container = $('<div />', {
    class: 'p-3 control-sidebar-content'
  })

  $sidebar.append($container)

  // Checkboxes

  $container.append(
    '<h5>Customize AdminLTE</h5><hr class="mb-2"/>'
  )

  $container.append("<button class='btn btn-secondary btn-sm my-3 reset'>Reset All</button>");

    document.querySelector("button.reset").onclick=()=>{
        localStorage.clear();
        location.reload();
    }

  var $dark_mode_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('dark-mode'),
    class: 'mr-1 body-check'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('dark-mode')
    } else {
      $('body').removeClass('dark-mode')
    }
  })
  var $dark_mode_container = $('<div />', { class: 'mb-4' }).append($dark_mode_checkbox).append('<span>Dark Mode</span>')
  $container.append($dark_mode_container)

  $container.append('<h6>Header Options</h6>')

  var $dropdown_legacy_offset_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-header').hasClass('dropdown-legacy'),
    class: 'mr-1 header-check'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-header').addClass('dropdown-legacy')
    } else {
      $('.main-header').removeClass('dropdown-legacy')
    }
  })
  var $dropdown_legacy_offset_container = $('<div />', { class: 'mb-1' }).append($dropdown_legacy_offset_checkbox).append('<span>Dropdown Legacy Offset</span>')
  $container.append($dropdown_legacy_offset_container)

  var $no_border_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-header').hasClass('border-bottom-0'),
    class: 'mr-1 header-check'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-header').addClass('border-bottom-0')
    } else {
      $('.main-header').removeClass('border-bottom-0')
    }
  })
  var $no_border_container = $('<div />', { class: 'mb-4' }).append($no_border_checkbox).append('<span>No border</span>')
  $container.append($no_border_container)

  $container.append('<h6>Sidebar Options</h6>')



  var $sidebar_mini_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('sidebar-mini'),
    class: 'mr-1 body-check'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('sidebar-mini')
    } else {
      $('body').removeClass('sidebar-mini')
    }
  })
  var $sidebar_mini_container = $('<div />', { class: 'mb-1' }).append($sidebar_mini_checkbox).append('<span>Sidebar Mini</span>')
  $container.append($sidebar_mini_container)

  var $sidebar_mini_md_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('sidebar-mini-md'),
    class: 'mr-1 body-check'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('sidebar-mini-md')
    } else {
      $('body').removeClass('sidebar-mini-md')
    }
  })
  var $sidebar_mini_md_container = $('<div />', { class: 'mb-1' }).append($sidebar_mini_md_checkbox).append('<span>Sidebar Mini MD</span>')
  $container.append($sidebar_mini_md_container)

  var $sidebar_mini_xs_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('sidebar-mini-xs'),
    class: 'mr-1 body-check'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('sidebar-mini-xs')
    } else {
      $('body').removeClass('sidebar-mini-xs')
    }
  })
  var $sidebar_mini_xs_container = $('<div />', { class: 'mb-1' }).append($sidebar_mini_xs_checkbox).append('<span>Sidebar Mini XS</span>')
  $container.append($sidebar_mini_xs_container)

  var $flat_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-flat'),
    class: 'mr-1 nav-check'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-flat')
    } else {
      $('.nav-sidebar').removeClass('nav-flat')
    }
  })
  var $flat_sidebar_container = $('<div />', { class: 'mb-1' }).append($flat_sidebar_checkbox).append('<span>Nav Flat Style</span>')
  $container.append($flat_sidebar_container)

  var $legacy_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-legacy'),
    class: 'mr-1 nav-check'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-legacy')
    } else {
      $('.nav-sidebar').removeClass('nav-legacy')
    }
  })
  var $legacy_sidebar_container = $('<div />', { class: 'mb-1' }).append($legacy_sidebar_checkbox).append('<span>Nav Legacy Style</span>')
  $container.append($legacy_sidebar_container)

  var $compact_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-compact'),
    class: 'mr-1 nav-check'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-compact')
    } else {
      $('.nav-sidebar').removeClass('nav-compact')
    }
  })
  var $compact_sidebar_container = $('<div />', { class: 'mb-1' }).append($compact_sidebar_checkbox).append('<span>Nav Compact</span>')
  $container.append($compact_sidebar_container)

  var $child_indent_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-child-indent'),
    class: 'mr-1 nav-check'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-child-indent')
    } else {
      $('.nav-sidebar').removeClass('nav-child-indent')
    }
  })
  var $child_indent_sidebar_container = $('<div />', { class: 'mb-1' }).append($child_indent_sidebar_checkbox).append('<span>Nav Child Indent</span>')
  $container.append($child_indent_sidebar_container)

  var $child_hide_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-collapse-hide-child'),
    class: 'mr-1 nav-check'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-collapse-hide-child')
    } else {
      $('.nav-sidebar').removeClass('nav-collapse-hide-child')
    }
  })
  var $child_hide_sidebar_container = $('<div />', { class: 'mb-1' }).append($child_hide_sidebar_checkbox).append('<span>Nav Child Hide on Collapse</span>')
  $container.append($child_hide_sidebar_container)

  var $no_expand_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-sidebar').hasClass('sidebar-no-expand'),
    class: 'mr-1 nav-check'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-sidebar').addClass('sidebar-no-expand')
    } else {
      $('.main-sidebar').removeClass('sidebar-no-expand')
    }
  })
  var $no_expand_sidebar_container = $('<div />', { class: 'mb-4' }).append($no_expand_sidebar_checkbox).append('<span>Disable Hover/Focus Auto-Expand</span>')
  $container.append($no_expand_sidebar_container)

  $container.append('<h6>Small Text Options</h6>')

  var $text_sm_body_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('text-sm'),
    class: 'mr-1 body-check'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('text-sm')
    } else {
      $('body').removeClass('text-sm')
    }
  })
  var $text_sm_body_container = $('<div />', { class: 'mb-1' }).append($text_sm_body_checkbox).append('<span>Body</span>')
  $container.append($text_sm_body_container)

  var $text_sm_header_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-header').hasClass('text-sm'),
    class: 'mr-1 header-check'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-header').addClass('text-sm')
    } else {
      $('.main-header').removeClass('text-sm')
    }
  })
  var $text_sm_header_container = $('<div />', { class: 'mb-1' }).append($text_sm_header_checkbox).append('<span>Navbar</span>')
  $container.append($text_sm_header_container)

  var $text_sm_brand_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.brand-link').hasClass('text-sm'),
    class: 'mr-1 brand-check'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.brand-link').addClass('text-sm')
    } else {
      $('.brand-link').removeClass('text-sm')
    }
  })
  var $text_sm_brand_container = $('<div />', { class: 'mb-1' }).append($text_sm_brand_checkbox).append('<span>Brand</span>')
  $container.append($text_sm_brand_container)

  var $text_sm_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('text-sm'),
    class: 'mr-1 nav-check'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('text-sm')
    } else {
      $('.nav-sidebar').removeClass('text-sm')
    }
  })
  var $text_sm_sidebar_container = $('<div />', { class: 'mb-1' }).append($text_sm_sidebar_checkbox).append('<span>Sidebar Nav</span>')
  $container.append($text_sm_sidebar_container)

  var $text_sm_footer_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-footer').hasClass('text-sm'),
    class: 'mr-1 footer-check'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-footer').addClass('text-sm')
    } else {
      $('.main-footer').removeClass('text-sm')
    }
  })
  var $text_sm_footer_container = $('<div />', { class: 'mb-4' }).append($text_sm_footer_checkbox).append('<span>Footer</span>')
  $container.append($text_sm_footer_container)


  // Navbar Variants

  $container.append('<h6>AdminLTE Styles</h6>')

  $container.append(`
    <div class="d-flex align-items-center mt-1" name="header">
        <input type="color" style="width:100px;height: 31px" value="#343a40" />
        <button class='btn btn-sm mx-1 btn-secondary btn-background' style="flex-basis:100%">Header</button>
        <button class='btn btn-sm btn-secondary' id='btn-header-reset'>Clear</button>
    </div>`);

    $container.append(`
    <div class="d-flex align-items-center mt-1" name="header">
        <input type="color" style="width:100px;height: 31px" value="#343a40" />
        <button class='btn btn-sm mx-1 btn-secondary btn-color' style="flex-basis:100%">Header Text</button>
        <button class='btn btn-sm btn-secondary' id='btn-header-reset'>Clear</button>
    </div>`);

    $container.append(`
    <div class="d-flex align-items-center mt-1" name="footer">
        <input type="color" style="width:100px;height: 31px" value="#343a40" />
        <button class='btn btn-sm mx-1 btn-secondary btn-background' style="flex-basis:100%">Footer</button>
        <button class='btn btn-sm btn-secondary' id='btn-header-reset'>Clear</button>
    </div>`);

    $container.append(`
    <div class="d-flex align-items-center mt-1" name="footer">
        <input type="color" style="width:100px;height: 31px" value="#343a40" />
        <button class='btn btn-sm mx-1 btn-secondary btn-color' style="flex-basis:100%">Footer Text</button>
        <button class='btn btn-sm btn-secondary' id='btn-header-reset'>Clear</button>
    </div>`);

    $container.append(`
    <div class="d-flex align-items-center mt-1" name="sidebar">
        <input type="color" style="width:100px;height: 31px" value="#343a40" />
        <button class='btn btn-sm mx-1 btn-secondary btn-background' style="flex-basis:100%">Sidebar</button>
        <button class='btn btn-sm btn-secondary' id='btn-header-reset'>Clear</button>
    </div>`);

    $container.append(`
    <div class="d-flex align-items-center mt-1" name="sidebar">
        <input type="color" style="width:100px;height: 31px" value="#343a40" />
        <button class='btn btn-sm mx-1 btn-secondary btn-color' style="flex-basis:100%">Sidebar Text</button>
        <button class='btn btn-sm btn-secondary'>Clear</button>
    </div>`);

    $container.append(`
    <div class="d-flex align-items-center mt-1">
        <input type="color" style="width:100px;height: 31px" value="#343a40" />
        <button class='btn btn-sm mx-1 btn-secondary btn-active' style="flex-basis:100%">Active</button>
        <button class='btn btn-sm btn-secondary' id="btn-active-clear">Clear</button>
    </div>`);

    $container.append(`
    <div class="d-flex align-items-center mt-1">
        <input type="color" style="width:100px;height: 31px" value="#343a40" />
        <button class='btn btn-sm mx-1 btn-secondary btn-active-text' style="flex-basis:100%" id='btn-active-text'>Active Text</button>
        <button class='btn btn-sm btn-secondary' id='btn-active-text-clear'>Clear</button>
    </div>`);

    $container.append("<div style='height:20px'></div>");

})(jQuery)

const setStorage = (key,value) =>{
    localStorage.setItem(key,value);
}

const removeStorage = (key) =>{
    localStorage.removeItem(key);
}

var num = 1;

document.querySelectorAll("#sidebar_control input[type='checkbox']").forEach(inp =>{
    inp.setAttribute("id","id-"+(num++));
    inp.checked = localStorage.getItem(inp.id) === "true";
});

document.querySelectorAll("#sidebar_control input[type='checkbox'].body-check").forEach(inp =>{
    inp.onchange = () =>{
        setStorage(inp.id,inp.checked);
        localStorage.setItem("body-check",document.body.className);
    }
});

document.querySelectorAll("#sidebar_control input[type='checkbox'].header-check").forEach(inp =>{
    inp.onchange = () =>{
        setStorage(inp.id,inp.checked);
        localStorage.setItem("header-check",document.getElementById('header').className);
    }
});

document.querySelectorAll("#sidebar_control input[type='checkbox'].nav-check").forEach(inp =>{
    inp.onchange = () =>{
        setStorage(inp.id,inp.checked);
        localStorage.setItem("nav-check",document.getElementById('navnav').className);
    }
});

document.getElementById("id-15").onchange =()=>{
    setStorage("id-15",document.getElementById("id-15").checked);
    localStorage.setItem("brand-check",document.querySelector('.brand-link').className);
}

document.getElementById("id-17").onchange =()=>{
    setStorage("id-17",document.getElementById("id-17").checked);
    localStorage.setItem("footer-check",document.querySelector('.main-footer').className);
}


document.querySelectorAll(".btn-background").forEach(btn=>{
    var id_name = btn.parentElement.getAttribute("name");
    var storage = localStorage.getItem(btn.parentElement.getAttribute("name"));

    btn.onclick=()=>{
        const color = btn.previousElementSibling.value
        const id = btn.parentElement.getAttribute("name");
        document.getElementById(id).style.background = color;
        setStorage(id,color);
    }

    btn.nextElementSibling.onclick =()=>{
        removeStorage(id_name);
        document.getElementById(id_name).style.background = "";
    }

    // Local Storage

    if(storage){
        document.getElementById(id_name).style.background = storage;
    }
});

document.querySelectorAll(".btn-color").forEach(btn=>{
    var storage = localStorage.getItem(btn.parentElement.getAttribute("name")+"-color");
    var id_name = btn.parentElement.getAttribute("name");

    btn.onclick=()=>{
        const color = btn.previousElementSibling.value;
        const id = btn.parentElement.getAttribute("name");
        document.querySelectorAll("#"+id+" *").forEach(elem => {
            elem.style.color = color;
            console.log(elem);
        });
        setStorage(id+"-color",color);
    }

    btn.nextElementSibling.onclick =()=>{
        removeStorage(id_name+"-color");
        document.querySelectorAll("#"+id_name+" *").forEach(elem=>{
            elem.style.color = "";
        });
    }

    // Local Storage

    if(storage){
        document.querySelectorAll("#"+id_name+" *").forEach(elem=>{
            elem.style.color = storage;
        });
    }
});

document.querySelector(".btn-active").onclick=()=>{
    var color = document.querySelector(".btn-active").previousElementSibling.value;
    document.querySelectorAll("li.nav-item .active").forEach(elem=>{
        elem.style.background = color;
    });
    setStorage("btn-active",color);
}

document.querySelector(".btn-active-text").onclick=()=>{
    var color = document.querySelector(".btn-active-text").previousElementSibling.value;
    document.querySelectorAll("li.nav-item .active").forEach(elem=>{
        elem.style.color = color;
    });
    setStorage("btn-active-text",color);
}

document.getElementById("btn-active-clear").onclick=()=>{
    document.querySelectorAll("li.nav-item .active").forEach(elem=>{
        elem.style.background = "";
        removeStorage("btn-active");
    });
}

document.getElementById("btn-active-text-clear").onclick=()=>{
    document.querySelectorAll("li.nav-item .active").forEach(elem=>{
        elem.style.color = "";
        removeStorage("btn-active-text");
    });
}


document.getElementById("control_sidebar").onclick =()=>{
    setTimeout(()=>{
        setStorage("body-check",document.body.className);
    },700);
}


//  Local Storage

if(localStorage.getItem("body-check")){
    document.body.className = localStorage.getItem("body-check");
}

if(localStorage.getItem("header-check")){
    document.getElementById('header').className = localStorage.getItem("header-check");
}

if(localStorage.getItem("nav-check")){
    document.getElementById('navnav').className = localStorage.getItem("nav-check");
}

if(localStorage.getItem("brand-check")){
    document.querySelector('.brand-link').className = localStorage.getItem("brand-check");
}

if(localStorage.getItem("footer-check")){
    document.querySelector('.main-footer').className = localStorage.getItem("footer-check");
}

if(localStorage.getItem("btn-active")){
    document.querySelectorAll("li.nav-item .active").forEach(elem=>{
        elem.style.background = localStorage.getItem("btn-active");
    });
}

if(localStorage.getItem("btn-active-text")){
    document.querySelectorAll("li.nav-item .active").forEach(elem=>{
        elem.style.color = localStorage.getItem("btn-active-text");
    });
}
