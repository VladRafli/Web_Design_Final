// ==============
// Place Order
// ==============
let menu = [
    { menuId: 1, name: 'Family Pack for 5 people', img: '/public/assets/img/bestseller1.png' },
    { menuId: 2, name: 'Nasi King Box Special', img: '/public/assets/img/bestseller2.png' },
    { menuId: 3, name: 'Cheese BuRHger King', img: '/public/assets/img/bestseller3.png' },
    { menuId: 4, name: 'Kids Box Special Blacpink', img: '/public/assets/img/bestseller4.png' },
    { menuId: 5, name: 'Beef Special BuRHger XL', img: '/public/assets/img/bestseller5.png' },
    { menuId: 6, name: 'Special BuRHger King', img: '/public/assets/img/bestseller6.png' }
]
let orders = []
$('.menu > .card-body > a').each((i, e) => {
    e.addEventListener('click', (e) => {
        orders.push({
            menuId: i + 1,
            quantity: 1
        })
        // DEBUG
        // console.log(orders)
        $('.order-form > input[name=\"isEmpty\"]').attr("value", "false")
        $('.orders > .card-body > div').html('')
        orders.forEach((val, idx, arr) => {
            $('.orders > .card-body > div')
                .append(`
                <div class="d-flex justify-content-between align-items-center order order-${val.menuId}" id="menu-${val.menuId}">
                    <div class="d-flex align-items-center">
                        <img class="mr-3" src="${menu[val.menuId - 1].img}" alt=""
                            height="100">
                        <p><b>${menu[val.menuId - 1].name}</b></p>
                        <input
                            type="hidden"
                            name="order-id"
                            value="menu-${val.menuId}"
                        >
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <button class="mr-1 btn btn-primary" id="decrement" type="button">-</button>
                        <input 
                            class="text-center mx-1" 
                            type="number" name="menu-quantity-${val.menuId}" 
                            id="menu-quantity-${val.menuId}"
                            value="1"
                            min="1"
                            max="100"
                            required
                            >
                        <button class="mx-1 btn btn-primary" id="increment" type="button" >+</button>
                        <button class="ml-1 btn btn-danger" id="delete" type="button"><i class="fas fa-trash-alt"></i></button>
                    </div>
                </div>
            `)
            $(`.order-${val.menuId} #decrement`).click((e) => {
                if ($(`.order-${val.menuId} input[type=\"number\"]`).attr("value") > 1) {
                    $(`.order-${val.menuId} input[type=\"number\"]`).attr("value", (parseInt($(`.order-${val.menuId} input[type=\"number\"]`).attr("value")) - 1).toString())

                    orders[
                        orders.map((e) => { return e.menuId })
                            .indexOf(val.menuId)
                    ].quantity -= 1
                    // DEBUG
                    // console.log(orders)
                }
            })
            $(`.order-${val.menuId} #increment`).click((e) => {
                if ($(`.order-${val.menuId} input[type=\"number\"]`).attr("value") < 100) {
                    $(`.order-${val.menuId} input[type=\"number\"]`).attr("value", (parseInt($(`.order-${val.menuId} input[type=\"number\"]`).attr("value")) + 1).toString())

                    orders[
                        orders.map((e) => { return e.menuId })
                            .indexOf(val.menuId)
                    ].quantity += 1
                    // DEBUG
                    // console.log(orders)
                }

            })
            $(`.order-${val.menuId} #delete`).click((e) => {
                $(`#menu-${val.menuId}`).remove()
                orders.splice(
                    orders.map((e) => { return e.menuId })
                        .indexOf(val.menuId),
                    1
                )
                if (orders.length === 0) {
                    $('.orders > div > div').html('<p>No order listed</p>')
                    $('.orders > input[name=\"isEmpty\"]').attr("value", "true")
                }
                // DEBUG
                // console.log(orders)
            })
        })
    })
})

// =============
// Validation
// =============

$('.order-form').submit((e) => {
    e.preventDefault()
    let serialized = $('.order-form').serializeArray()
    let termsInput = serialized.find(o => o.name === 'terms') === undefined ? 'off' : 'on'
    let orderList = []
    $('.orders > div > div').children('.order').each((i, e) => {
        orderList.push({
            menuId: e.querySelector('div > input[name=\"order-id\"]').getAttribute('value'),
            menuName: e.querySelector('div > p > b').innerHTML,
            quantity: e.querySelector('div > input[type=\"number\"]').getAttribute('value')
        })
    })
    let formData = {
        name: serialized.find(o => o.name === 'name').value,
        email: serialized.find(o => o.name === 'email').value,
        order: {
            amount: $('.orders > div > div').children(".order").length,
            list: orderList
        },
        isEmpty: serialized.find(o => o.name === 'isEmpty').value,
        address: serialized.find(o => o.name === 'address').value,
        terms: termsInput,
    }
    // DEBUG
    // console.log(formData)
    if (formData.name === '') {
        $('.order-form > #name').addClass('is-invalid')
    } else {
        if ($('.order-form > #name').hasClass('is-invalid')) {
            $('.order-form > #name').removeClass('is-invalid')
        }
        $('.order-form > #name').addClass('is-valid')
    }
    if (formData.email.indexOf('@') === -1) {
        $('.order-form > #email').addClass('is-invalid')
    } else {
        if ($('.order-form > #email').hasClass('is-invalid')) {
            $('.order-form > #email').removeClass('is-invalid')
        }
        $('.order-form > #email').addClass('is-valid')
    }
    if (formData.order.amount === 0) {
        $('.order-form > #orders').addClass('is-invalid')
    } else {
        if ($('.order-form > #orders').hasClass('is-invalid')) {
            $('.order-form > #orders').removeClass('is-invalid')
        }
        $('.order-form > #orders').addClass('is-valid')
    }
    if (formData.address === '') {
        $('.order-form > #address').addClass('is-invalid')
    } else {
        if ($('.order-form > #address').hasClass('is-invalid')) {
            $('.order-form > #address').removeClass('is-invalid')
        }
        $('.order-form > #address').addClass('is-valid')
    }
    if (formData.terms === 'off') {
        $('.order-form > #address').addClass('is-invalid')
    } else if (formData.terms === 'on') {
        if ($('.order-form > #address').hasClass('is-invalid')) {
            $('.order-form > #address').removeClass('is-invalid')
        }
        $('.order-form > #address').addClass('is-valid')
    }
    if ($('.order-form > #name~#email~#orders~#address').hasClass('is-valid')) {
        $('.order-form').addClass('was-validated')
    }
})

// ===============
// Redirect Behaviour
// ===============

const urlParams = new URLSearchParams(window.location.search)
if (
    urlParams.has('id') && 
    (menu.map((e) => { return e.menuId }).indexOf(parseInt(urlParams.get('id'))) !== -1)
) {
    orders.push({
        menuId: urlParams.get('id'),
        quantity: 1
    })
    // DEBUG
    // console.log(orders)
    $('.order-form > input[name=\"isEmpty\"]').attr("value", "false")
    $('.orders > .card-body > div').html('')
    orders.forEach((val, idx, arr) => {
        $('.orders > .card-body > div')
            .append(`
            <div class="d-flex justify-content-between align-items-center order order-${val.menuId}" id="menu-${val.menuId}">
                <div class="d-flex align-items-center">
                    <img class="mr-3" src="${menu[val.menuId - 1].img}" alt=""
                        height="100">
                    <p><b>${menu[val.menuId - 1].name}</b></p>
                    <input
                        type="hidden"
                        name="order-id"
                        value="menu-${val.menuId}"
                    >
                </div>
                <div class="d-flex align-items-center justify-content-between">
                    <button class="mr-1 btn btn-primary" id="decrement" type="button">-</button>
                    <input 
                        class="text-center mx-1" 
                        type="number" name="menu-quantity-${val.menuId}" 
                        id="menu-quantity-${val.menuId}"
                        value="1"
                        min="1"
                        max="100"
                        required
                        >
                    <button class="mx-1 btn btn-primary" id="increment" type="button" >+</button>
                    <button class="ml-1 btn btn-danger" id="delete" type="button"><i class="fas fa-trash-alt"></i></button>
                </div>
            </div>
        `)
        $(`.order-${val.menuId} #decrement`).click((e) => {
            if ($(`.order-${val.menuId} input[type=\"number\"]`).attr("value") > 1) {
                $(`.order-${val.menuId} input[type=\"number\"]`).attr("value", (parseInt($(`.order-${val.menuId} input[type=\"number\"]`).attr("value")) - 1).toString())

                orders[
                    orders.map((e) => { return e.menuId })
                        .indexOf(val.menuId)
                ].quantity -= 1
                // DEBUG
                // console.log(orders)
            }
        })
        $(`.order-${val.menuId} #increment`).click((e) => {
            if ($(`.order-${val.menuId} input[type=\"number\"]`).attr("value") < 100) {
                $(`.order-${val.menuId} input[type=\"number\"]`).attr("value", (parseInt($(`.order-${val.menuId} input[type=\"number\"]`).attr("value")) + 1).toString())

                orders[
                    orders.map((e) => { return e.menuId })
                        .indexOf(val.menuId)
                ].quantity += 1
                // DEBUG
                // console.log(orders)
            }

        })
        $(`.order-${val.menuId} #delete`).click((e) => {
            $(`#menu-${val.menuId}`).remove()
            orders.splice(
                orders.map((e) => { return e.menuId })
                    .indexOf(val.menuId),
                1
            )
            if (orders.length === 0) {
                $('.orders > div > div').html('<p>No order listed</p>')
                $('.orders > input[name=\"isEmpty\"]').attr("value", "true")
            }
            // DEBUG
            // console.log(orders)
        })
    })
}

if (orders.length !== 0) {
    $('.nav-item > a').click((e) => {
        if (!confirm('Please finish the order, if you move to another page, your process is not saved!')) {
            e.preventDefault();
        }
    })
}