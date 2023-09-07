// TODO load the pollution.csv dataset (stored in the 'data' folder of this repo)
// HINT be careful with the path to your dataset

// TODO append an svg to the body of the index.html page using d3 syntax
// TODO ensure your svg displays a bar for each record in the csv.
// TODO the height of each bar should be equal to the 'Both sexes' field for each record
// NOTE you SHOULD make use of a scale as we did in the tutorial to do this
// HINT to access a multi-word field you may have to use d['name of field']
// TODO ensure your svg is big enough and there is no overlapping or visual artefacts
// NOTE the finished chart will not fit on one screen and it is expected that you will have to scroll to see all the data

// TODO Colour the bars so they range from white (low value) to dark green (high value)
// TODO Highlight the top 20% of possible values

// TODO ensure the background (of either the svg, or the whole webpage) is off-white
// HINT if you add a css file don't forget to link it

// TODO Ensure that each bar is labelled with the country name AND disease

// TODO in the vertical.js file recreate this bar chart but in a vertical orientation




// Some very basic starter code has been provided below, feel free to start from scratch if you prefer

// Variables for the height and width of the svg
const w = 100;
const h = 50;

// This code will almost add the svg to the body but you will have to update inside the parentheses accordingly
let svg = d3.select().append()
    .attr("width", w)
    .attr("height", h);

// This will load your specified data file in an asynchronous manner
d3.csv('')
    .then(function (data) {
        // TODO the majority of your code should go in here.
    });

