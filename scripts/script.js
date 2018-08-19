$(function () {

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
        },
        {
            earthy: true,
            warm: true,
            colors: [
                "#963a2f",
                "#d58258",
                "#ecb984",
                "#fffee9",
                "#a8a676"
            ]
        },
        {
            earthy: true,
            warm: true,
            colors: [
                "#bf8333",
                "#a76435",
                "#f9ab44",
                "#fbc274",
                "#ee4d24"
            ]
        },
        {
            earthy: true,
            warm: true,
            colors: [
                "#732c32",
                "#f2b366",
                "#f28d35",
                "#a63f03",
                "#f2f2f2"
            ]
        },
        {
            earthy: true,
            cool: true,
            colors: [
                "#656871",
                "#c3ad84",
                "#89705d",
                "#838fa5",
                "#645856"
            ]
        },
        {
            earthy: true,
            cool: true,
            colors: [
                "#d9ceb2",
                "#948c75",
                "#99b2b7",
                "#d5ded9",
                "#7a6a53"
            ]
        },
        {
            earthy: true,
            cool: true,
            colors: [
                "#b4b281",
                "#9b9559",
                "#81773c",
                "#fce78c",
                "#60481c"
            ]
        },
        {
            earthy: true,
            neutral: true,
            colors: [
                "#907d48",
                "#ceba54",
                "#935b42",
                "#ca7b49",
                "#91827e"
            ]
        },
        {
            earthy: true,
            neutral: true,
            colors: [
                "#594939",
                "#dfbac1",
                "#fcd2b9",
                "#f9bc7d",
                "#ee9d5e"
            ]
        },
        {
            earthy: true,
            neutral: true,
            colors: [
                "#ab9e7e",
                "#f2e5d2",
                "#eee4e2",
                "#c5743d",
                "#a6a2a3"
            ]
        },
        {
            dark: true,
            neutral: true,
            colors: [
                "#4b0004",
                "#552c10",
                "#5d606f",
                "#c2957e",
                "#6d4a37"
            ]
        },
        {
            dark: true,
            neutral: true,
            colors: [
                "#090c15",
                "#22072a",
                "#530b57",
                "#780c3d",
                "#3438bd"
            ]
        },
        {
            dark: true,
            neutral: true,
            colors: [
                "#480000",
                "#601800",
                "#184848",
                "#d89048",
                "#001830"
            ]
        },
        {
            dark: true,
            cool: true,
            colors: [
                "#000000",
                "#2a465c",
                "#316d92",
                "#031019",
                "#8d9ea5"
            ]
        },
        {
            dark: true,
            cool: true,
            colors: [
                "#21043e",
                "#4a3c74",
                "#737aa3",
                "#e8e3db",
                "#626781"
            ]
        },
        {
            dark: true,
            cool: true,
            colors: [
                "#080523",
                "#c0cb9a",
                "#003a26",
                "#3c7472",
                "#56abc0"
            ]
        },
        {
            dark: true,
            warm: true,
            colors: [
                "#1a0e18",
                "#5f4b4c",
                "#5e2c4e",
                "#a08993",
                "#d2d1cb"
            ]
        },
        {
            dark: true,
            warm: true,
            colors: [
                "#b14f34",
                "#692524",
                "#2e251c",
                "#f2b69a",
                "#080e32"
            ]
        },
        {
            dark: true,
            warm: true,
            colors: [
                "#160e46",
                "#5f0f78",
                "#9a165e",
                "#c71f2d",
                "#748997"
            ]
        },




    ]

    animate();
    
    function animate() {

        $(".bar").addClass("bar-end");
    }


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
        submitButton(theme);
    })

    function submitButton(theme) {
        $(".submit-button").on("click", function (e) {

            $(".container").empty();
            createFinalArray(theme);
            $(".up-arrow").addClass("up-arrow-display");
            $("footer").css("display", "block");

            // let position = $(".main-content").position();
        })
    }

    // create final array with just the required palettes
    function createFinalArray(themeSelection) {

        finalArray = tempArray.filter(function (item) {
            return item[themeSelection];
        })

        finalArray.forEach(function (item) {
            arrayOrder = finalArray.indexOf(item);
            createPalette(arrayOrder);
            defineColors(arrayOrder);
            //for every object in the array I am creating a new palette
        });
    };

    //this creates the palette and puts it on the page
    function createPalette(orderInArray) {
        let paletteContainer = `
                    <div class="palette-holder">
                        <div class="palette palette${orderInArray}" id="${orderInArray}">
                            <div class='color-container color-container0'><div class="color-name"></div></div>
                            <div class='color-container color-container1'><div class="color-name"></div></div>
                            <div class='color-container color-container2'><div class="color-name"></div></div>
                        </div>
                        <button class="subtract">remove color</button>
                        <button class="add">add color</button>

                    </div>`

        $(".container").append(paletteContainer);
        $(".subtract").addClass("button-disabled");
        $(".palette-section").addClass("palette-section-padding");
    }

    // this defines what the colors are 
    // and adds them to the dom

    function defineColors(orderInArray) {
        // color0 = finalArray[orderInArray].colors[0];
        for (let i = 0; i < 3; i = i + 1) {
            $(`.palette${orderInArray}`).find(`.color-container${i}`).css("background-color", finalArray[orderInArray].colors[i]);
        }
    }

    $(".container").on("mouseover", ".color-container", function () {
        let colorName = $(this).css("background-color");
        let colorContainer = $(this);
        rgb2hex(colorName, colorContainer);
    });

    $(".container").on("touchstart", ".color-container", function () {
        let colorName = $(this).css("background-color");
        let colorContainer = $(this);
        rgb2hex(colorName, colorContainer);
    });


    function rgb2hex(rgb, currentContainer) {
        rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        function hex(x) {
            return ("0" + parseInt(x).toString(16)).slice(-2);
        }
        colorNameDisplay = "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);

        $(currentContainer).find(".color-name").html(colorNameDisplay)
        $(currentContainer).find(".color-name").addClass("color-visible");
    }

    $(".container").on("mouseout", ".color-container", function () {
        $(this).find(".color-name").removeClass("color-visible");
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

    function addColors(targetPalette, idNumber, numberOfColors) {

        if (numberOfColors == 3) {
            $(targetPalette).siblings(".subtract").removeClass("button-disabled");
        }

        if (numberOfColors === 3) {
            $(targetPalette).append(`<div class='color-container color-container3'><div class="color-name"></div></div>`);
            $(targetPalette).find(".color-container3").css("background-color", finalArray[idNumber].colors[3]);

        } else if (numberOfColors === 4) {
            $(targetPalette).append(`<div class='color-container color-container4'><div class="color-name"></div></div>`);
            $(targetPalette).find(".color-container4").css("background-color", finalArray[idNumber].colors[4]);
            $(targetPalette).siblings(".add").addClass("button-disabled");
        }
    };

    function deleteColors(targetPalette, numberOfColors) {

        if (numberOfColors === 5) {
            $(targetPalette).find(".color-container4").remove();
            $(targetPalette).siblings(".add").removeClass("button-disabled");

        } else if (numberOfColors === 4) {
            $(targetPalette).find(".color-container3").remove();
            $(targetPalette).siblings(".subtract").addClass("button-disabled");
        }

        if (numberOfColors == 4) {
            $(targetPalette).siblings(".add").removeClass("button-disabled");
        }

    }

});