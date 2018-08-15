$(function () {


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
                "black",
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
    $(".temp-button").on("click", function () {
        const temp = $(this).attr("id");
        getTemperatureSelection(temp);
    });

    function getTemperatureSelection(temperatureSelection) {
        tempArray = palettes.filter(function (item) {
            return item[temperatureSelection];
        });
    }

    // get theme selection and create final array with both temp and theme
    $(".theme-button").on("click", function () {
        const theme = $(this).attr("id");
        getThemeSelection(theme);
    })

    let finalArray;

    // create final array with just the required palettes
    function getThemeSelection(themeSelection) {

        finalArray = tempArray.filter(function (item) {
            return item[themeSelection];
        })

        finalArray.forEach(function (item) {
            console.log(item.colors)
            $(".container").append("hello")
            arrayOrder = finalArray.indexOf(item);
            console.log(arrayOrder);
            createPalette(arrayOrder);
            //for every object in the array I am creating a new palette
        })

        //this creates the palette and puts it on the page
        function createPalette(orderInArray) {
            let paletteContainer = `
                    <div class="paletteContainer">
                        <div class="palette palette${orderInArray}">
                            <div class='colorContainer colorContainer0'></div>
                            <div class='colorContainer colorContainer1'></div>
                            <div class='colorContainer colorContainer2'></div>
                        </div>
                        <button class="add"> add another color</button>
                    </div>`
            $(".container").append(paletteContainer);

            defineColors(arrayOrder);
        }

        // console.log(finalArray);

        // for each object in array 
        // create a palette



        // finalArray.forEach(function(item) {
        //     // create new palette
        //     // gives palette a class of the order if is in the array
        //     let arrayOrder = finalArray.indexOf(item);

        //     let paletteContainer = `
        //                     <div class="paletteContainer">
        //                         <div class="palette palette${arrayOrder}">
        //                             <div class='colorContainer colorContainer0'></div>
        //                             <div class='colorContainer colorContainer1'></div>
        //                             <div class='colorContainer colorContainer2'></div>
        //                         </div>
        //                         <button class="add"> add another color</button>
        //                     </div>`

        //     $(".container").append(paletteContainer);

        //     defineColors(arrayOrder);       
        // });
    };

    // this defines what the colors are 
    // and adds them to the dom
    function defineColors(orderInArray) {

        // color0 = finalArray[orderInArray].colors[0];
        // color1 = finalArray[orderInArray].colors[1];
        // color2 = finalArray[orderInArray].colors[2];
        console.log(finalArray);

        for (let i = 0; i < 3; i = i + 1) {
            $(`.palette${orderInArray}`).find(`.colorContainer${i}`).css("background-color", finalArray[orderInArray].colors[i]);
            // $(".palette1").find(`.colorContainer${i}`).css("background-color", finalArray[1].colors[i]);
        }

        $("button.add").on("click", function () {
            console.log("clicked")
            console.log(finalArray);
        })

        // addColors(finalArray, orderInArray);

    }

    // function addColors(finalArray, orderInArray) {

    //     $("button.add").on("click", function () {

    //         console.log("clicked")

            let selectedPalette = $(this).siblings(".palette");

    //         // console.log(selectedPalette)

    //         // $(selectedPalette).append("<div class='colorContainer colorContainer3'></div>");

    //         $(selectedPalette).append("hello");
    //         console.log(selectedPalette)

    //         $(".colorContainer3").css("background-color", finalArray[0].colors[3]);

            // if (addCount == 1) {
            //     $(selectedPalette).append("<div class='colorContainer colorContainer3'></div>");
            //     $(".colorContainer3").css("background-color", finalArray[0].colors[3]);
            // } else if (addCount == 2) {
            //     $(selectedPalette).append("<div class='colorContainer colorContainer4'></div>");
            //     $(".colorContainer4").css("background-color", finalArray[0].colors[4]);
            // }
    //     });
    // }


});