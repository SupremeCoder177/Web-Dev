function check_proximity(p1, p2, delta){
    return p1 <= p2 + delta && p1 >= p2 - delta;
}


function move_widget(){
    console.log("moving the widget");

    const widget = document.querySelector(".container");

    let start_x = widget.getBoundingClientRect().left;

    let end_x = start_x > 100 ? 100 : window.innerWidth / 2;

    function move(){
        const current = widget.getBoundingClientRect().left;

        if(check_proximity(current, end_x, 2)){
            widget.style.left = end_x + "px";
            return;
        }
        const step = current < end_x ? 5 : -5;

        console.log(step);

        widget.style.left = (current + step) + "px";

        setTimeout(() => {
            move()
        }, 0.02);
    }
    move();
}

function grow_widget(){
    console.log("Changing the widget size");

    const widget = document.querySelector(".secondContainer");

    let end_ratio = widget.getBoundingClientRect().width < 300 ? 300 : 100;

    function grow(){
        const current_width = widget.getBoundingClientRect().width;

        if(Math.abs(current_width - end_ratio) <= 1){
            widget.style.width = end_ratio + "px";
            widget.style.height = end_ratio + "px";
            return;
        }

        const step = current_width < end_ratio ? 2 : -2;

        widget.style.width = (current_width + step) + "px";
        widget.style.height = (current_width + step) + "px";

        setTimeout(() => {
            grow()
        }, 0.02);
    }

    grow();
}

function show_sidebar(){
    console.log("showing sidebar");

    const widget = document.querySelector(".sidebar");
    let start_x = widget.getBoundingClientRect().left;
    let end_x = 0;
    if(start_x < 0){
        end_x = 0;
    }else{
        end_x = -200;
    }

    function toggle(){
        const current_x = widget.getBoundingClientRect().left;

        if(check_proximity(current_x, end_x, 2)){
            widget.style.left = end_x + "px";
            return;
        }

        const step = end_x === 0 ? 5 : -5;

        widget.style.left = (current_x + step) + "px";
        setTimeout(() => {
            toggle()
        }, 0.02);
    }

    toggle();   
}