// Read in the data

const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
//  Initilize lists for the data
let sHovertext = [];
let sValues = [];
let sLabels = [];

// Fetch the JSON data
let data = d3.json(url);

data.then(function(d) {
    // Pull first subject's data
    sHovertext = d.samples[0].otu_ids;
    sValues = d.samples[0].sample_values;
    sLabels = d.samples[0].otu_labels;
    subjectID = d.names;


    // Build initial plot using a function
    function init() {
        let data = [{
            y: sValues,
            x: sHovertext,
            type: "bar",
            orientation: "h"
        }]
        
        Plotly.newPlot("cow", data);
    }

    // Drop Down Menu Options
    let dropDownOptions = d["samples"].map(item => item.id);
    
    // For loop to put in the options
    // ahhhhh change because cant iterate through list 
    for (let item in dropDownOptions) {
        var x = document.getElementById("selDataset");
        var option = document.createElement("option");
        option.text = item;
        console.log(item);
        x.add(option);
      
    };


    let chosen_subject = d3.selectALL("#selDataset").on("change", getData);

    // Grab data for drop down
    function getData() {
        let menuChoice = d3.select("selDataset");
        let dataset = menuChoice.text;
        let data = {
            "otu_ids": d,
            "sample_values": m, 
            "otu_labels": l
        
        };
        return data;
    };
        

    init();
});



// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    // Use sample_values as the values or the bar chart
    // Use otu_ids as the labels for the bar chart.
    // Use otu_labels as the hovertext for the chart.

//---------------------------------------------------------
