// Read in the data

const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data
samples = d3.json(url);

// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    // Use sample_values as the values or the bar chart
    // Use otu_ids as the labels for the bar chart.
    // Use otu_labels as the hovertext for the chart.

//---------------------------------------------------------

// Need info
let sValues = samples.sample_values;
let sLabels = samples.otu_ids;
let sHovertext = samples.otu_labels;


// Initilize the page with a plot
function init() {
    let data = [{
        values: sValues,
        labels: sLabels,
        type: "bar",
        orientation: "h",
        text: sHovertext

    }]
};