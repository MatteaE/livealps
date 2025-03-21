var imgTag = document.querySelector("img")

var imgTitle = document.getElementById("img_title")

var btn_next = document.getElementById("btn_next")
var btn_prev = document.getElementById("btn_prev")

var count = img_names.length - 1

var img_v = "v3"

function next() {
    img_set = img_names.map(x => img_basedir + "/" + img_v + "/" + x)

    count++
    if (count < img_set.length) {
		imgTag.src = img_set[count]
		imgTitle.innerHTML = img_titles[count]
		if (count == img_set.length - 1) {
			btn_next.disabled = true
		}
		// Re-enable prev button if we are moving away from first image.
		if (count == 1) {
			btn_prev.disabled = false
		}

	// This else should happen only if something has gone very wrong
	// (because the button should be disabled before count can reach
	// img_set.length). We put it anyway (defensive programming).
    } else {
		count = img_set.length - 1
	}

}

function prev() {
    img_set = img_names.map(x => img_basedir + "/" + img_v + "/" + x)

    count--
    if (count >= 0) {
		imgTag.src = img_set[count]
		imgTitle.innerHTML = img_titles[count]
		if (count == 0) {
			btn_prev.disabled = true
		}
		// Re-enable next button if we are moving away from last image.
		if (count == img_set.length - 2) {
			btn_next.disabled = false
		}
	// This else should happen only if something has gone very wrong
	// (because the button should be disabled before count can reach
	// the negatives). We put it anyway (defensive programming).
    } else {
		count = 0
    }
}


function toggle_topomap() {
    if (img_v == "v3") {
        img_v = "v4"
    } else {
        img_v = "v3"
    }

    img_set = img_names.map(x => img_basedir + "/" + img_v + "/" + x)
    imgTag.src = img_set[count]

}
