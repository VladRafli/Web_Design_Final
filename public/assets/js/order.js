$('form').submit((e) => {
    e.preventDefault()
    
})

let orders = []
$('.menu > .card-body > a').each((i, e) => {
    e.addEventListener('click', (e) => {
        orders.push({
            menuId: i + 1,
            quantity: 1
        })
        console.log(orders)
        $('.orders > input[name=\"isEmpty\"]').attr("value", "false")
        $('.orders > .card-body > div').html('')
        orders.forEach((val, idx, arr) => {
            $('.orders > .card-body > div')
            .append(`
                <div class="d-flex justify-content-between align-items-center order order-${val.menuId}" id="menu-${val.menuId}">
                    <div class="d-flex align-items-center">
                        <img class="mr-3 " src="assets/img/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg" alt=""
                            height="100">
                        <p><b>Menu ${val.menuId}</b></p>
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
                    console.log(orders)
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
                    console.log(orders)
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
                console.log(orders)
            })
        })

    })
})