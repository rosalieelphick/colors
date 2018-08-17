$(function(){

    const palettes = [
        // pastel palettes
        {
            pastel: true,
            cool: true,
            colors: [
                "#b09cbf",
                "#b5b2d4",
                "#d4ebf0",
                "#ede8ed",
                "#ffd6e3"
            ]
        },
        {
            pastel: true,
            cool: true,
            colors: [
                "#cdc6d6",
                "#e8cfd5",
                "#b9b9d1",
                "#8d9ac6",
                "#eedad9"
            ]
        },
        {
            pastel: true,
            warm: true,
            colors: [
                "#e3c9c9",
                "#f4e7e7",
                "#eedbdb",
                "#cecbcb",
                "#cbdadb"
            ]
        },
        {
            pastel: true,
            warm: true,
            colors: [
                "#f2ddde",
                "#d1b9d6",
                "#b195c4",
                "#cc95c1",
                "#92a8d1"
            ]
        },
        {
            pastel: true,
            warm: true,
            colors: [
                "#d7ece3",
                "#efd0d6",
                "#ceb5ef",
                "#c69fb1",
                "#9b868d"
            ]
        },
        {
            pastel: true,
            neutral: true,
            colors: [
                "#dec3c3",
                "#e7d3d3",
                "#f0e4e4",
                "#f9f4f4",
                "#ffffff"
            ]
        },
        {
            pastel: true,
            neutral: true,
            colors: [
                "#f3bbae",
                "#fcdccf",
                "#ebeae5",
                "#aedfdb",
                "#75c8cc"
            ]
        },
        {
            pastel: true,
            neutral: true,
            colors: [
                "#a2adbc",
                "#d9e2e1",
                "#f4f3ee",
                "#f6f4da",
                "#df9496"
            ]
        }
        
    ]
    


    // const palettes = [
    //     {
    //         pastel: true,
    //         warm: true,
    //         colors: [
    //             "pink",
    //             "yellow",
    //             "peachpuff",
    //             "mint",
    //             "black"
    //         ]  
    //     },
    //     {
    //         pastel: true,
    //         warm: true,
    //         colors: [
    //             "red",
    //             "yellow",
    //             "peachpuff",
    //             "red",
    //             "red"
    //         ]
    //     },
    //     {
    //         pastel: true,
    //         cool: true,
    //         colors: [
    //             "paleturquoise",
    //             "lightcyan",
    //             "palegreen"
    //         ]
    //     },
    //     {
    //         pastel: true,
    //         neutral: true,
    //         colors: [
    //             "grey",
    //             "green",
    //             "grey"
    //         ]
    //     },
    //     {
    //         pastel: true,
    //         neutral: true,
    //         colors: [
    //             "grey",
    //             "green",
    //             "grey"
    //         ]
    //     },
    //     {
    //         dark: true,
    //         warm: true,
    //         colors: [
    //             "darkred",
    //             "darkviolet",
    //             "crimson"
    //         ]
    //     },
    //     {
    //         dark: true,
    //         cool: true,
    //         colors: [
    //             "midnightblue",
    //             "indigo",
    //             "darkolivegreen",
    //             "red",
    //             "yellow"
    //         ]
    //     }

    // ]
    
    //  get temperature selection and make new array with just correct temperature
    $(".temp-button").on("click", function(){
        const temp = $(this).attr("id");
        console.log(this)
        getTemperatureSelection(temp);
        
    });

    function getTemperatureSelection(temperatureSelection) {
        tempArray = palettes.filter(function (item) {
            return item[temperatureSelection];
        });
    }

    // get theme selection and create final array with both temp and theme
    $(".theme-button").on("click", function(){
        const theme = $(this).attr("id");
        submitButton(theme);
    })

    function submitButton(theme) {
        $(".submit-button").on("click", function () {
            $(".container").empty();
            createFinalArray(theme);
        })
    }

    // create final array with just the required palettes
    function createFinalArray(themeSelection) {

        finalArray = tempArray.filter(function(item){
            return item[themeSelection];
        })

        finalArray.forEach(function(item){
            arrayOrder = finalArray.indexOf(item);
            createPalette(arrayOrder);
            defineColors(arrayOrder);
            //for every object in the array I am creating a new palette
        });
    };

    //this creates the palette and puts it on the page
    function createPalette(orderInArray) {
        let paletteContainer = `
                    <div class="paletteContainer">
                        <div class="palette palette${orderInArray}" id="${orderInArray}">
                            <div class='colorContainer colorContainer0'></div>
                            <div class='colorContainer colorContainer1'></div>
                            <div class='colorContainer colorContainer2'></div>
                        </div>
                        <button class="subtract">remove color</button>
                        <button class="add">add color</button>

                    </div>`
        $(".container").append(paletteContainer);
        $(".subtract").addClass("button-disabled");
    }

    // this defines what the colors are 
    // and adds them to the dom

    function defineColors(orderInArray) {

        color0 = finalArray[orderInArray].colors[0];
        color1 = finalArray[orderInArray].colors[1];
        color2 = finalArray[orderInArray].colors[2];

        // console.log(color0, color1, color2)
        // let colorName;

        for (let i = 0; i < 3; i = i + 1) {
            $(`.palette${orderInArray}`).find(`.colorContainer${i}`).css("background-color", finalArray[orderInArray].colors[i]);

            // colorName = finalArray[orderInArray].colors[i];
        }
    }

    function rgb2hex(rgb, currentContainer) {
        rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        function hex(x) {
            return ("0" + parseInt(x).toString(16)).slice(-2);
        }
        colorNameDisplay = "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
        console.log(colorNameDisplay)
        
        $(currentContainer).html(`<div class="color-name">${colorNameDisplay}</div>`)

    }


    $(".container").on("mouseover", ".colorContainer", function(){
        let colorName = $(this).css("background-color");
        let colorContainer = $(this);
        rgb2hex(colorName, colorContainer);
    })

    $(".container").on("mouseout", ".colorContainer", function(){
        $(this).find(".color-name").empty();
    })

    $(".container").on("click", ".add", function () {
        let selectedPalette = $(this).siblings(".palette");
        let paletteId = $(selectedPalette).attr("id");
        let colorNumber = selectedPalette.children().length;

        $(this).find(".color-values").find(".getColors").append("hello");

        addColors(selectedPalette, paletteId, colorNumber);
    });

    $(".container").on("click", ".subtract", function () {
        let selectedPalette = $(this).siblings(".palette");
        let colorNumber = selectedPalette.children().length;

        $(this).find(".color-values").empty();

        deleteColors(selectedPalette, colorNumber);
    });

    function addColors (targetPalette, idNumber, numberOfColors) {

        if (numberOfColors == 3) {
            // $(targetPalette).siblings(".subtract").css("background-color", "pink");
            $(targetPalette).siblings(".subtract").removeClass("button-disabled");
        }

        if (numberOfColors === 3) {
            $(targetPalette).append("<div class='colorContainer colorContainer3'></div>");
            $(targetPalette).find(".colorContainer3").css("background-color", finalArray[idNumber].colors[3]);
                    
        } else if (numberOfColors === 4) {
            $(targetPalette).append("<div class='colorContainer colorContainer4'></div>");
            $(targetPalette).find(".colorContainer4").css("background-color", finalArray[idNumber].colors[4]);
            // $(targetPalette).siblings(".add").css("background-color", "grey");
            $(targetPalette).siblings(".add").addClass("button-disabled");
        }

    };

    function deleteColors (targetPalette, numberOfColors) {
    
        if (numberOfColors === 5) {
            $(targetPalette).find(".colorContainer4").remove();
            // $(targetPalette).siblings(".add").css("background-color", "pink");
            $(targetPalette).siblings(".add").removeClass("button-disabled");
            
        } else if (numberOfColors === 4) {
            $(targetPalette).find(".colorContainer3").remove(); 
            // $(targetPalette).siblings(".subtract").css("background-color", "grey");
            $(targetPalette).siblings(".subtract").addClass("button-disabled");
        }

        if (numberOfColors == 4) {
            // $(targetPalette).siblings(".add").css("background-color", "pink");
            $(targetPalette).siblings(".add").removeClass("button-disabled");
        }

    }

});