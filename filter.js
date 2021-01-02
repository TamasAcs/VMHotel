







/* 
function filterRoom(e) {
    const list = rooms;
    function Calculate() {
        const people = document.GetElementById('adult').valueOf;
        console.log(people);
    }
    list.forEach(function (show) {
        switch (e.target.class) {
            case "family":
                if (room.classList.contains('family')) {
                    room.style.display = 'flex';
                } else {
                    room.style.display = 'none';
                }
                break;
            case "triple":
                if (room.classList.contains('triple')) {
                    room.style.display = 'flex';
                } else {
                    room.style.display = 'none';
                }
                break;
                case "double":
                    if (room.classList.contains('double')) {
                        room.style.display = 'flex';
                    } else {
                        room.style.display = 'none';
                    }
                break;
                case "single":
                    if (room.classList.contains('single')) {
                        room.style.display = 'flex';
                    } else {
                        room.style.display = 'none';
                    }
                    break;
        }
    })
}
*/


/*
var filter = {
    range: null,
    size: null
  };

  var nav = new DayPilot.Navigator("nav");
  nav.freeHandSelectionEnabled = true;
  nav.onTimeRangeSelected = function(args) {
    filter.range = {
      start: args.start,
      end: args.end
    };
    applyRoomFilter();
  };
  nav.init();



  function applyRoomFilter() {

    // apply the filter
    dp.rows.filter(filter);
  
    // display the label
    if (filter.range) {
      elements.filterDate.style.display = "inline-block";
      elements.filterDateString.innerText = filter.range.start.toString("M/d/yyyy") + " - " + filter.range.end.addDays(-1).toString("M/d/yyyy");
    }
    else {
      elements.filterDate.style.display = "none";
    }
  
}
  

elements.filterSize.addEventListener("change", function(ev) {
    filter.size = elements.filterSize.value;
    applyRoomFilter();
});
  

dp.onRowFilter = function(args) {
    var sizeMatches = args.row.data.size >= filter.size;
    var dateMatches = !filter.range || args.row.events.forRange(filter.range.start, filter.range.end).length === 0;
  
    args.visible = sizeMatches && dateMatches;
};
  */


    /*
const rooms = [
    {name: "Room 1", id: "R1", size: 4},
    {name: "Room 2", id: "R2", size: 2},
    {name: "Room 3", id: "R3", size: 2},
    {name: "Room 4", id: "R4", size: 2},
    {name: "Room 5", id: "R5", size: 1},
    {name: "Room 6", id: "R6", size: 2},
    {name: "Room 7", id: "R7", size: 4},
    {name: "Room 101", id: "R101", size: 2},
    {name: "Room 102", id: "R102", size: 2},
    {name: "Room 103", id: "R103", size: 2},
    {name: "Room 104", id: "R104", size: 2},
    {name: "Room 105", id: "R105", size: 2},
    {name: "Room 106", id: "R106", size: 4},
    {name: "Room 201", id: "R201", size: 4},
    {name: "Room 202", id: "R202", size: 2},
    {name: "Room 203", id: "R203", size: 2},
    {name: "Room 204", id: "R204", size: 2},
    {name: "Room 205", id: "R205", size: 2},
    {name: "Room 206", id: "R206", size: 3},
    {name: "Room 301", id: "R301", size: 1},
    {name: "Room 302", id: "R302", size: 2},
    {name: "Room 303", id: "R303", size: 2},
    {name: "Room 401", id: "R401", size: 2},
    {name: "Room 402", id: "R402", size: 2},
    {name: "Room 403", id: "R403", size: 3},
    {name: "Room 404", id: "R404", size: 2},
    {name: "Room 405", id: "R405", size: 3},
    {name: "Room 406", id: "R406", size: 2},
    {name: "Room 501", id: "R501", size: 4},
    {name: "Room 502", id: "R502", size: 3},
    {name: "Room 503", id: "R503", size: 6},
    ];

const familyRoom = rooms.filter(family => family.size >= 4);
const tripleRoom = rooms.filter(triple => triple.size = 3);
const doubleRoom = rooms.filter(double => double.size = 2);
const singleRoom = rooms.filter(single => single.size = 1);
*/



/*const roomAdult = document.getElementById('adult');
const rows = document.querySelectorAll("room"); 
const button = document.getElementsByClassName('.rooms_search');*/
const filterOption = document.querySelector('.filter-people');
const rooms = document.querySelectorAll('.room');

filterOption.addEventListener('click', filterPeople);
/*roomAdult.addEventListener("change", family);
button.addEventListener('click', filter);*/

function filterPeople(e) {
   
    rooms.forEach(function (room) {
            switch (e.target.value) {
                case "4+":
                    if (room.classList.contains("empire")) {
                        room.style.display = 'flex';
                        break;
                    } else {
                        room.style.display = 'none';
                    }
                case "4":
                    if (room.classList.contains("family")) {
                        room.style.display = 'flex';
                        break;
                    } else {
                        room.style.display = 'none';
                    }
                case "3":
                    if (room.classList.contains("triple")) {
                        room.style.display = 'flex';
                        break;
                    } else {
                        room.style.display = 'none';
                    }
                case "2":
                    if (room.classList.contains("double")) {
                        room.style.display = 'flex';
                        console.log("true")
                        console.log({room})
                        break;
                    } else {
                        room.style.display = 'none';
                    }
                case "1":
                    if (room.classList.contains("single")) {
                        room.style.display = 'flex';
                        break;
                    } else {
                        room.style.display = 'none';
                    }
            }
        })
    }




/*
const roomAdult = document.getElementById('adult');
const roomItem = document.querySelectorAll('.room');
const filterRooms = document.querySelector('.rooms_container');
const filterOption = document.getElementById('adult');


filterOption.addEventListener('change', filter);
*/

/*
roomAdult.onchange = function () {
    console.log(rooms_search.textContent)
    const value = 
        roomItem.forEach(room => {
            room.style.display = 'flex';
            if (room)

    })
}
*/
/*
function filter(e) {
    const show = filterRooms.children;
    show.forEach(function (sort) {
        switch (e.target.value) {
            case "4":
                if (filterRooms.classList.contains("family")) {
                    filterRooms.style.display = "flex";
                }
                else {
                    filterRooms.style.display = "none";
                }
                break;
            case "3":
                if (filterRooms.classList.contains("triple")) {
                    filterRooms.style.display = "flex";
                }
                else {
                    filterRooms.style.display = "none";
                }
                break;
            case "2":
                if (!filterRooms.classList.contains("double")) {
                    filterRooms.style.display = "flex";
                } else {
                    filterRooms.style.display = "none";
                }
                break;
            case "1":
                if (!filterRooms.classList.contains("single")) {
                    filterRooms.style.display = "flex";
                } else {
                    filterRooms.style.display = "none";
                }
                break;
        }
    })
}
*/





/*
filterSelection("room")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("room");
  if (c == "1") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "hide");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}
*/


/*
$(document).ready(function()
{
    $(".btn-group .btn").click(function()
    {
        var inputValue  =   $(this).find("input").val();
        if(inputValue   != 'all')
        {
            var target  =   $('table tr[data-status="' + inputValue + '"]');
            $("table tbody tr").not(target).hide();
            target.fadeIn();
        }
        else
        {
            $("table tbody tr").fadeIn();
        } 
    });
    // Changeing the class of status label to support bootstrap 4
    var bs  =  $.fn.tooltip.Constructor.VERSION;
    var support =   bs.split(".");
    if(str[0]   ==  4)
    {
        $(".label").each(function()
        {
            var classStr    =   $(this).attr("class");
            var newClassStr =   classStr.replace(/label/g, "badge");
            $(this).removeAttr("class").addClass(newClassStr);
        });
    }
});  
*/