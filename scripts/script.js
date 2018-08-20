$(function () {

    const palettes = [
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
        {
            bright: true,
            cool: true,
            colors: [
                "#d0d3c5",
                "#59b0bc",
                "#126f87",
                "#d83a36",
                "#062a30"
            ]
        },
        {
            bright: true,
            cool: true,
            colors: [
                "#476674",
                "#98fffb",
                "#f9c8c0",
                "#6b8d9c",
                "#cccccc"
            ]
        },
        {
            bright: true,
            cool: true,
            colors: [
                "#cccccc",
                "#5370c0",
                "#b7e8ca",
                "#9d92ce",
                "#c67bd0"
            ]
        },
        {
            bright: true,
            warm: true,
            colors: [
                "#72cbdb",
                "#55134e",
                "#a0596b",
                "#fec343",
                "#ef7351"
            ]
        },
        {
            bright: true,
            warm: true,
            colors: [
                "#feefd2",
                "#ff8c7d",
                "#ff634d",
                "#079dab",
                "#9efff6"
            ]
        },
        {
            bright: true,
            warm: true,
            colors: [
                "#fcc44d",
                "#ffaf9f",
                "#b283a3",
                "#8baae1",
                "#ffe2b6"
            ]
        },
        {
            bright: true,
            neutral: true,
            colors: [
                "#8dcdc1",
                "#7c786a",
                "#d3e397",
                "#eb6e44",
                "#fff5c3"
            ]
        },
        {
            bright: true,
            neutral: true,
            colors: [
                "#c6d1da",
                "#2995b6",
                "#f8d6a9",
                "#c3909d",
                "#dd6e2e"
            ]
        },
        {
            bright: true,
            neutral: true,
            colors: [
                "#3c2f3e",
                "#fbad87",
                "#ecc7c0",
                "#8ccac7",
                "#dae8e3"
            ]
        },
        {
            muted: true,
            neutral: true,
            colors: [
                "#38334a",
                "#6a4e6d",
                "#6980a5",
                "#757080",
                "#d0d3d0"
            ]
        },
        {
            muted: true,
            neutral: true,
            colors: [
                "#697e8d",
                "#e9e6c2",
                "#d6d5bd",
                "#c3a770",
                "#a74b22"
            ]
        },
        {
            muted: true,
            neutral: true,
            colors: [
                "#c0c4b6",
                "#eadfdb",
                "#aeafb1",
                "#d8c2b5",
                "#c18a6a"
            ]
        },
        {
            muted: true,
            cool: true,
            colors: [
                "#3d3d3b",
                "#4c586f",
                "#ebedec",
                "#a3a9b0",
                "#ccc4c0"
            ]
        },
        {
            muted: true,
            cool: true,
            colors: [
                "#8b8589",
                "#989898",
                "#838996",
                "#979aaa",
                "#4c516d"
            ]
        },
        {
            muted: true,
            cool: true,
            colors: [
                "#e0ca99",
                "#aca786",
                "#918a77",
                "#626b66",
                "#434a42"
            ]
        },
        {
            muted: true,
            warm: true,
            colors: [
                "#f5ded5",
                "#e8bbac",
                "#e1af92",
                "#844e4c",
                "#462527"
            ]
        },
        {
            muted: true,
            warm: true,
            colors: [
                "#485664",
                "#8d7c92",
                "#cfa6c0",
                "#1f3231",
                "#f5c1d0"
            ]
        },
        {
            muted: true,
            warm: true,
            colors: [
                "#a6a5b5",
                "#887a89",
                "#b5a6ab",
                "#ecd0cf",
                "#f3f0eb"
            ]
        },
        {
            clean: true,
            cool: true,
            colors: [
                "#46464e",
                "#73767d",
                "#a6cbd4",
                "#f7f6f2",
                "#f3f0eb"
            ]
        },
        {
            clean: true,
            cool: true,
            colors: [
                "#f3e7c1",
                "#a0c1b8",
                "#6f9eb2",
                "#726994",
                "#331f38"
            ]
        },
        {
            clean: true,
            cool: true,
            colors: [
                "#557b83",
                "#39aea9",
                "#a2d5ab",
                "#e5efc1",
                "#5b5151"
            ]
        },
        {
            clean: true,
            neutral: true,
            colors: [
                "#584848",
                "#f3b54a",
                "#d8d9de",
                "#6e7889",
                "#393b45"
            ]
        },
        {
            clean: true,
            neutral: true,
            colors: [
                "#d55c3d",
                "#677279",
                "#6a91ab",
                "#c4d7df",
                "#f5f5f5"
            ]
        },
        {
            clean: true,
            neutral: true,
            colors: [
                "#747474",
                "#8ec3af",
                "#e66cc5",
                "#d5d5d5",
                "#01395e"
            ]
        },
        {
            clean: true,
            warm: true,
            colors: [
                "#1a3445",
                "#e7c67f",
                "#e1b49d",
                "#99abb9",
                "#c5d5dd"
            ]
        },
        {
            clean: true,
            warm: true,
            colors: [
                "#ccaa87",
                "#c09569",
                "#abc2db",
                "#87a9cc",
                "#e1e1e1"
            ]
        },
        {
            clean: true,
            warm: true,
            colors: [
                "#f194a3",
                "#fedad3",
                "#f0f0f0",
                "#ccd5d8",
                "#8a939c"
            ]
        },




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

    // to allow color visibility on touch screens
    $(".container").on("touchstart", ".color-container", function () {
        let colorName = $(this).css("background-color");
        let colorContainer = $(this);
        rgb2hex(colorName, colorContainer);
    });

    // to convert autimatic rgb color to hex
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