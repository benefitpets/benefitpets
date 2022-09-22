function readFile() {
    jQuery.get("input.txt", function (txt) {
        var rows = txt.split(/\r?\n|\r/).slice(1);
        // console.log(rows);
        for (let i=0; i<rows.length(); i++) {
            var row = rows[i].split(",");
            // console.log(row);
            var html = '\
            <div class="w3-col l3 m6 w3-margin-bottom">\
                <div class="img" style="background-image: url(images/' + row[2].trim() + ');"></div> \
                <h3>' + row[4].trim() + ' ' + row[3].trim() + '</h3> \
                <p class="w3-opacity">Age ' + row[5].trim() + '</p> \
                <p>Contact <b>' + row[1].trim() + '</b> for more details</p> \
                <p name="mobile"><i class="fa-solid fa-phone"></i> ' + row[7].trim() + '</p> \
                <p name="mail"><i class="fa-solid fa-envelope"></i> ' + row[8].trim() + '</p> \
            </div> \
            ';
            $(".w3-row-padding.w3-grayscale").append(html);
        }
    });
}

function menu() {
    var menu = $("div.w3-right")[0];
    if ($(menu).css("display") == "block")
        $(menu).css("display", "none");
    else
        $(menu).css("display", "block");
}
