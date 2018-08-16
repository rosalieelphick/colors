$(function(){
    

    //create array with multiple color objects

    // want to be able to go through full list of different palettes and check for different conditions
    const palettes = [
        {
            pastel: true,
            warm: true,
            colors: [
                "pink",
                "yellow",
                "peachpuff",
                "mint",
                "black"
            ]  
        },
        {
            pastel: true,
            warm: true,
            colors: [
                "red",
                "yellow",
                "peachpuff",
                "red",
                "red"
            ]
        },
        {
            pastel: true,
            cool: true,
            colors: [
                "paleturquoise",
                "lightcyan",
                "palegreen"
            ]
        },
        {
            dark: true,
            warm: true,
            colors: [
                "darkred",
                "darkviolet",
                "crimson"
            ]
        },
        {
            dark: true,
            cool: true,
            colors: [
                "midnightblue",
                "indigo",
                "darkolivegreen",
                "red",
                "yellow"
            ]
        }

    ]

    
    //  get temperature selection and make new array with just correct temperature
    $(".temp-button").on("click", function(){
        const temp = $(this).attr("id");
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
        getThemeSelection(theme);
    })

    // create final array with just the required palettes
    function getThemeSelection(themeSelection) {

        finalArray = tempArray.filter(function(item){
            return item[themeSelection];
        })

        finalArray.forEach(function(item){
            $(".container").append("hello")
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
                        <button class="add add${orderInArray}"> add another color</button>
                        <button class="subtract"> subtract color</button>
                    </div>`
        $(".container").append(paletteContainer);
        $(".subtract").css("display", "none");
    }

    // this defines what the colors are 
    // and adds them to the dom
    function defineColors(orderInArray) {

        // color0 = finalArray[orderInArray].colors[0];
        // color1 = finalArray[orderInArray].colors[1];
        // color2 = finalArray[orderInArray].colors[2];

        for (let i = 0; i < 3; i = i + 1) {
            $(`.palette${orderInArray}`).find(`.colorContainer${i}`).css("background-color", finalArray[orderInArray].colors[i]);
            // $(".palette1").find(`.colorContainer${i}`).css("background-color", finalArray[1].colors[i]);
        }
    }


    $(".container").on("click", ".add", function () {
        let selectedPalette = $(this).siblings(".palette");
        let paletteId = $(selectedPalette).attr("id");
        let colorNumber = selectedPalette.children().length;

        addColors(selectedPalette, paletteId, colorNumber);
    });

    $(".container").on("click", ".subtract", function () {
        let selectedPalette = $(this).siblings(".palette");
        let colorNumber = selectedPalette.children().length;

        deleteColors(selectedPalette, colorNumber);
    });


    function addColors (targetPalette, idNumber, numberOfColors) {

        if (numberOfColors == 3) {
            $(targetPalette).siblings(".subtract").css("display", "block");
        }

        if (numberOfColors === 3) {
            $(targetPalette).append("<div class='colorContainer colorContainer3'></div>");
            $(targetPalette).find(".colorContainer3").css("background-color", finalArray[idNumber].colors[3]);
                    
        } else if (numberOfColors === 4) {
            $(targetPalette).append("<div class='colorContainer colorContainer4'></div>");
            $(targetPalette).find(".colorContainer4").css("background-color", finalArray[idNumber].colors[4]);
            $(targetPalette).siblings(".add").css("display", "none");
        }

    };

    function deleteColors (targetPalette, numberOfColors) {
    
        if (numberOfColors === 5) {
            $(targetPalette).find(".colorContainer4").remove();
            $(targetPalette).siblings(".add").css("display", "block");
            
        } else if (numberOfColors === 4) {
            $(targetPalette).find(".colorContainer3").remove(); 
            $(targetPalette).siblings(".subtract").css("display", "none");
        }

        if (numberOfColors == 4) {
            $(targetPalette).siblings(".add").css("display", "block");
        }

    }


});