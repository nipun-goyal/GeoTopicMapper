// create map
var mymap = L.map('map', {
        center: [56.1304, -106.3468], 
        minZoom: 1,
        zoom: 5
    });

// FREE TILE PROVIDERS

// open-street-map
L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a','b','c']
}).addTo( mymap );

// CartoDB
//L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
//	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
//	subdomains: 'abcd',
//}).addTo( mymap );

// wikimedia
//L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png', {
//	attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
//}).addTo( mymap );
	


// list of markers on the map, along with their data
location_markers = [];

// control parameters for the application
// opacity of default and highlighted markers on the map
default_opacity = 0.4;
highlight_opacity = 1.0;

// currently selected type of highlight ("none", "location-type", or "topic")
highlight_type = "none";

// variables for location highlighting

// dictionary mapping a location type to the button that adds or
// removes it from the highlight
location_type_to_buttons = {};
// list of currently highlighted location types
selected_locations = [];

// what colors to use when coloring the markers based on location type
locations_colors = {
    "dominion-land-survey": "red",
    "national-topographic-system": "blue",
    "latitude-longitude": "green"
};

// variables for topic highlighting

// dictionary mapping a topic to the button that adds or removes it
// from the highlight
topics_to_buttons = {};
// list of currently highlighted topics
selected_topics = [];
// what colors to use when coloring the markers based on topic
topics_colors = {
    1: "#2c0845", 
    2: "#6778f5",
    3: "#0b3911", 
    4: "#78ab66", 
    5: "#4d0c12", 
    6: "#e77c9f", 
    7: "#059dc5", 
    8: "#154975", 
    9: "#c551dc", 
    10: "#15b71e", 
    11: "#ec102f", 
    12: "#9a4058", 
    13: "#f17e45", 
    14: "#f23387", 
    15: "#765846", 
    16: "#bc9495", 
    17: "#a93705", 
    18: "#c9952a",
    19: "#7b038e",
};

// functions to highlight a particular marker based on the marker data and
// highlight type

// highlight a marker based on the marker's location type
function highlight_by_location_type(marker_data) {
    color_marker(marker_data.marker, locations_colors[marker_data.original_location_type], highlight_opacity);
    marker_data.marker.bringToFront();
}

// highlight a marker based on the marker's topic
function highlight_by_topic(marker_data) {
    if (topics[marker_data.docname]) {
        var topic = parseInt(topics[marker_data.docname].topic);
        color_marker(marker_data.marker, topics_colors[topic], highlight_opacity);
    } else {
        color_marker(marker_data.marker, 'gray', highlight_opacity);    
    }
        
    marker_data.marker.bringToFront();
}

// highlight a marker based on the currently selected highlight type
function highlight(marker_data) {
    if (highlight_type == 'none') {
        color_marker(marker_data.marker, 'blue', highlight_opacity);
        marker_data.marker.bringToFront();
    } else if (highlight_type == 'location-type') {
        highlight_by_location_type(marker_data);
    } else if (highlight_type == 'topic') {
        highlight_by_topic(marker_data);
    }
}

// highlight a marker based on the currently selected document (triggered
// by clicking on a marker)
function highlight_doc(docname) {
    for ( var i = 0; i < location_markers.length; i++ ) {
        if ( location_markers[i].docname == docname ) {
            highlight(location_markers[i]);
        } else {
            color_marker(location_markers[i].marker, 'gray', default_opacity);
        }
    }
}

// functions to color a particular marker based on the marker data and
// color type

function color_marker(marker, color, opacity) {
    marker.setStyle({
            fillColor: color,
            color: color,
            fillOpacity: opacity,
            opacity: opacity,
            weight: 4
        });
}

function color_by_location(marker_data) {
    if (selected_locations.includes(marker_data.original_location_type)) {
        highlight_by_location_type(marker_data);
    } else {
        color_marker(marker_data.marker, 'gray', default_opacity);
        marker_data.marker.bringToBack();
    }
}

function color_by_topic(marker_data) {
    if (!topics[marker_data.docname]) {
        color_marker(marker_data.marker, 'gray', default_opacity);
        marker_data.marker.bringToBack();
    } else {
        var topic = parseInt(topics[marker_data.docname].topic);
        if (selected_topics.includes(topic)) {
            highlight_by_topic(marker_data);
        } else {
            color_marker(marker_data.marker, 'gray', default_opacity);
            marker_data.marker.bringToBack();
        }
    }
}

function color_none() {
    for ( var i = 0; i < location_markers.length; i++ ) {
        color_marker(location_markers[i].marker, "gray", default_opacity);
    }
}

function color_by_locations() {
    for ( var i = 0; i < location_markers.length; i++ ) {
        color_by_location(location_markers[i]);
    }
}

function color_by_topics() {
    for ( var i = 0; i < location_markers.length; i++ ) {
        color_by_topic(location_markers[i]);
    }
}

function color_markers() {
    if (highlight_type == "none") {
        color_none();
    } else if (highlight_type == "location-type") {
        color_by_locations();
    } else if (highlight_type == "topic") {
        color_by_topics();
    }
}
    
// callback functions for location type buttons
function toggle_location(location_type) {
    var btn = location_type_to_buttons[location_type];
    if (selected_locations.includes(location_type)) {
        // remove the location
        selected_locations = selected_locations.filter(function(loc) { return loc != location_type });
        on_location_hover_leave(location_type);
    } else {
        selected_locations.push(location_type);
        on_location_hover_enter(location_type);    
    }
        
    color_markers();
}
    
function on_location_hover_enter(location_type) {
    var btn = location_type_to_buttons[location_type];
    if (selected_locations.includes(location_type)) {
        $(btn).css("color", "black");
        $(btn).css("text-shadow", "0px 0px 2px " + locations_colors[location_type]);
        $(btn).css("border", "1px solid " + locations_colors[location_type]);
        $(btn).css("box-shadow", "0px 0px 2px 1px " + locations_colors[location_type]);
    } else {
        $(btn).css("color", "#808080");
        $(btn).css("text-shadow", "none");
        $(btn).css("border", "1px solid #C4C5CD");
        $(btn).css("box-shadow", "0px 0px 2px 1px #C4C5CD");
    }
}
    
function on_location_hover_leave(location_type) {
    var btn = location_type_to_buttons[location_type];
    if (selected_locations.includes(location_type)) {
        $(btn).css("color", "#808080");
        $(btn).css("text-shadow", "0px 0px 1px " + locations_colors[location_type]);
        $(btn).css("border", "1px solid " + locations_colors[location_type]);
        $(btn).css("box-shadow", "0px 0px 1px 1px " + locations_colors[location_type]);
    } else {
        $(btn).css("color", "#C4C5CD");
        $(btn).css("text-shadow", "none");
        $(btn).css("border", "1px solid #C4C5CD");
        $(btn).css("box-shadow", "none");
    }
}

// callback functions for topic buttons

function toggle_topic(topic_no) {
    var btn = topics_to_buttons[topic_no];
    if (selected_topics.includes(topic_no)) {
        // remove the topic
        selected_topics = selected_topics.filter(function(no) { return no != topic_no });
        on_topic_hover_leave(topic_no);
    } else {
        selected_topics.push(topic_no);
        on_topic_hover_enter(topic_no);
    }
    
    color_markers();
}
    
function select_all_topics() {
    selected_topics = [];
    for (var i = 1; i <= 19; i++) {
        selected_topics.push(i);
        on_topic_hover_leave(i);
    }
        
    color_markers();
}

function deselect_all_topics() {
    selected_topics = [];
    color_markers();
    for (var i = 1; i <= 19; i++) {
        on_topic_hover_leave(i);
    }
}

function on_topic_hover_enter(topic_no) {
    var btn = topics_to_buttons[topic_no];
    if (selected_topics.includes(topic_no)) {
        $(btn).css("color", "black");
        $(btn).css("text-shadow", "0px 0px 2px " + topics_colors[topic_no]);
        $(btn).css("border", "1px solid " + topics_colors[topic_no]);
        $(btn).css("box-shadow", "0px 0px 2px 1px " + topics_colors[topic_no]);
    } else {
        $(btn).css("color", "#808080");
        $(btn).css("text-shadow", "none");
        $(btn).css("border", "1px solid #C4C5CD");
        $(btn).css("box-shadow", "0px 0px 2px 1px #C4C5CD");
    }
}

function on_topic_hover_leave(topic_no) {
    var btn = topics_to_buttons[topic_no];
    if (selected_topics.includes(topic_no)) {
        $(btn).css("color", "#808080");
        $(btn).css("text-shadow", "0px 0px 1px " + topics_colors[topic_no]);
        $(btn).css("border", "1px solid " + topics_colors[topic_no]);
        $(btn).css("box-shadow", "0px 0px 1px 1px " + topics_colors[topic_no]);
    } else {
        $(btn).css("color", "#C4C5CD");
        $(btn).css("text-shadow", "none");
        $(btn).css("border", "1px solid #C4C5CD");
        $(btn).css("box-shadow", "none");
    }
}

// callback functions for opacity sliders and highlight type selector
function on_opacity_changed(opacity, highlight_opacity_) {
    default_opacity = opacity;
    highlight_opacity = highlight_opacity_;
    color_markers();
    mymap.closePopup();
}

function on_highlight_type_changed() {
    if (highlight_type == "topic") {
        $("#topics-select").show();
    } else {
        $("#topics-select").hide();
    }
        
    if (highlight_type == "location-type") {
        $("#locations-select").show();
    } else {
        $("#locations-select").hide();    
    }
    color_markers();
    mymap.closePopup();
}


// function for making the html popup when clicking a marker
function make_info_block_html(title, content) {
    return "<div>" +
    "<span class=\"info-title\">" +
      title +
    "</span>" +
    "<span class=\"info-content\">"+
      content +
    "</span>" +
    "</div>"
}

// adds a marker to the map with the provided data
function add_to_map(docname, lat_long, original_location_type, original_location_data) {
    var popup = L.popup()
        .setContent(
            "<div class=\"location-info\">" +
            "<h1 class=\"doc-title\">" + docname + "</h1>" + 
            make_info_block_html("Original Location Type: ", original_location_type) +
            make_info_block_html("Original Location: ", original_location_data['text']) +
            make_info_block_html("Pages (starting from 0): ", original_location_data['pages'].toString()) +
            make_info_block_html("Location: ", lat_long['text']) +
            make_info_block_html("Topic: ", topics[docname] ? topics[docname].topic : undefined) +
            make_info_block_html("Keywords: ", topics[docname] ? topics[docname].keywords : undefined) +
            "</div>"
        );
    var marker = L.circle(L.latLng(lat_long['degrees-north'], -1 * lat_long['degrees-west']))
        .bindPopup(popup)
        .openPopup()
        .on('click', function(e) {highlight_doc( docname )})
        .addTo( mymap );
    
    location_markers.push({
        marker: marker,
        docname: docname,
        original_location_type: original_location_type
    });
}

// add all locations
for ( var docname in locations ) {
    var location_data = locations[docname]
    for ( var i = 0; i < location_data['latitude-longitude'].length; i++ ) {
        var lat_long = location_data['latitude-longitude'][i];
        add_to_map( docname, lat_long, "latitude-longitude", lat_long );
    }
    
    for ( var i = 0; i < location_data['dominion-land-survey'].length; i++ ) {
        var lat_long = location_data['dominion-land-survey'][i]['latitude-longitude'];
        add_to_map( docname, lat_long, 'dominion-land-survey', location_data['dominion-land-survey'][i] );
    }
    
    for ( var i = 0; i < location_data['national-topographic-system'].length; i++ ) {
        var lat_long = location_data['national-topographic-system'][i]['latitude-longitude'];
        add_to_map( docname, lat_long, 'national-topographic-system', location_data['national-topographic-system'][i] );
    }
        
    // debug check
    if (!topics[docname]) {
        console.warn("Discrepancy in filenames: Unable to find following filename in topic data: " + docname);
    }
}

// bind event when you click the map
mymap.on('click', function() {
    color_markers();
    mymap.closePopup();
});

// bind opacity sliders
const background_slider = document.getElementById("background-opacity");
background_slider.oninput = function() {
    opacity = this.value / 100.0;
    on_opacity_changed(opacity, highlight_opacity);
}
    
const highlight_slider = document.getElementById("highlight-opacity");
highlight_slider.oninput = function() {
    opacity = this.value / 100.0;
    on_opacity_changed(default_opacity, opacity);
}

// bind change highlight button
$("#submit-highlight").bind("click", function() {
    highlight_type = $("#highlight-type").val();
    on_highlight_type_changed();
    $(this).blur();
});
    
// bind location type selector buttons
$(".location-type-button").each(function(){
    var location_type = $(this).val();
    location_type_to_buttons[location_type] = this;
    $(this).bind("click", function() {
        toggle_location(location_type);
        mymap.closePopup();
    });
    $(this).hover(function() {
        on_location_hover_enter(location_type);
    }, function() {
        on_location_hover_leave(location_type);    
    });
});

// bind topic selector buttons
$(".topic-button").each(function() {
    var topic_no = parseInt($(this).val());
    topics_to_buttons[topic_no] = this;
    $(this).bind("click", function() {
        toggle_topic(topic_no);
        mymap.closePopup();
    });
    $(this).hover(function() {
        on_topic_hover_enter(topic_no);
    }, function() {
        on_topic_hover_leave(topic_no);
    });
});
    
$("#topic-select-all").bind("click", function() {
    select_all_topics();
    $(this).blur();
    mymap.closePopup();
});

$("#topic-deselect-all").bind("click", function() {
    deselect_all_topics();
    $(this).blur();
    mymap.closePopup();
});

// start app
on_highlight_type_changed();

