document.addEventListener("DOMContentLoaded", function() {
    if (typeof WordCloud === 'undefined') {
        console.error('WordCloud library is not loaded');
    } else {
        // Your word cloud code here
        var countries = [
            "United States", "China", "India", "Brazil", "Russia",
            "Japan", "Germany", "United Kingdom", "France", "Italy",
            "Canada", "South Korea", "Australia", "Mexico", "Indonesia",
            "Turkey", "Saudi Arabia", "Netherlands", "Switzerland", "Argentina"
        ];

        var data = countries.map(function(country) {
            return [country, Math.floor(Math.random() * 100) + 10];
        });

        var options = {
            list: data,
            gridSize: Math.round(16 * document.getElementById('wordCloud').offsetWidth / 1024),
            weightFactor: function (size) {
                return Math.pow(size, 2.3) * document.getElementById('wordCloud').offsetWidth / 1024;
            },
            fontFamily: 'Times, serif',
            color: 'random-dark',
            rotateRatio: 0.5,
            rotationSteps: 2,
            backgroundColor: '#f0f0f0'
        };

        WordCloud(document.getElementById('wordCloud'), options);
    }
});
