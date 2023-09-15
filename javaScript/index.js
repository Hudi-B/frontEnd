        const numbers = [45, 4, 9, 16, 25];
        let txt = "";
        numbers.forEach(myFunction);

        function myFunction(value) {
        txt += "<th>" + value + "</th>\n";
        }

        console.log(txt);
        document.getElementById('tableRow').innerHTML = txt;