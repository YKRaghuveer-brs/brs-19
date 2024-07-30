/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

document.addEventListener("DOMContentLoaded", function() {
    var countries = [
        "United States", "China", "India", "Brazil", "Russia",
        "Japan", "Germany", "United Kingdom", "France", "Italy",
        "Canada", "South Korea", "Australia", "Mexico", "Indonesia",
        "Turkey", "Saudi Arabia", "Netherlands", "Switzerland", "Argentina"
    ];

    var data = countries.map(function(country) {
        return [country, Math.floor(Math.random() * 100) + 10];
    });

    WordCloud(document.getElementById('wordCloud'), { list: data });
});
