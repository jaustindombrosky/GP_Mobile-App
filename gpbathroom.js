console.log('working')
  var dropdown = ['Gender Neutral', 'Family', 'Single Stall'];

  function initMap() {
    console.log('loading map')
    var uofu = { lat: 40.766829464704202, lng: -111.84779251030393, }
    var map = new google.maps.Map(document.getElementById('map-body'), {
      center: uofu,
      zoom: 7
    });
    console.log('MAP DATA', map)
  }

$.ajax({
  url: "https://fmags.fm.utah.edu/arcgis/rest/services/mapservices/restrooms/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=%7B%22wkid%22%3A+4326%7D&gdbVersion=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=&f=pjson",
  dataType: "json"
 }).done(function(msg) {
   for(var i = 0; i < msg["features"].length; i++) {
     var geometry = msg["features"][i]["geometry"];
     var attr = msg["features"][i]["attributes"];
     
     console.log(geometry);
     console.log(attr["created_user"]);
   }
 });

$(document).ready(function (event) {
    var dropdown = ['Gender Neutral', 'Family', 'Single Stall'];

    $("#navbarDropdownMenuLink").on('click', function(e) {
        if($(this).hasClass("form-group")) {
            e.preventDefault();
        }
    });
});

//add user input
$("#addUser").on("click", function(event) {
  event.preventDefault();
    var name = $("#nameInput").val().trim();
    var email = $("#emailInput").val().trim();
    var comment = $("#commentInput").val().trim();
 
  $("#nameDisplay").text(name);
  $("#emailDisplay").text(email);
  $("#commentDisplay").text(comment);
    sessionStorage.clear();
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("comment", comment);
});
  $("#nameDisplay").text(sessionStorage.getItem("name"));
  $("#emailDisplay").text(sessionStorage.getItem("email"));
  $("#commentDisplay").text(sessionStorage.getItem("comment"));
//add user input
// 5 star rating
function rate(rating) {
  document.rating.stars.value = rating;
  document.rating.submit();
  return true;
}

function rate_images(rating) {
  if(!(rating>=1 && rating<=5)) return;

  for(var i=1;i<=rating;i++)
      document.getElementById("rate_image_"+rating).src="lit.gif";
}
// 5 star rating





    [{"objectIdFieldName": "OBJECTID",
    "globalIdFieldName": "",
    "geometryType": "esriGeometryPoint",
    "spatialReference": {
     "wkid": 102100,
     "latestWkid": 3857
    },
    "fields": [
     {
      "name": "assigned_gender",
      "alias": "Assigned Gender",
      "type": "esriFieldTypeString",
      "length": 15
     },
     {
      "name": "stall_type",
      "alias": "Stall Type",
      "type": "esriFieldTypeString",
      "length": 15
     },
     {
      "name": "accessible",
      "alias": "accessible",
      "type": "esriFieldTypeSmallInteger"
     },
     {
      "name": "access_restriction",
      "alias": "Access Restriction",
      "type": "esriFieldTypeString",
      "length": 15
     }
    ],
    "features": [
     {
      "geometry": {
       "x": -12450593.803249529,
       "y": 4977724.4369640537
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450590.66805296,
       "y": 4977719.5641322182
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450383.750665043,
       "y": 4977295.4281495605
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450352.698084202,
       "y": 4977254.8209970063
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450657.102597183,
       "y": 4977333.7959610214
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450586.487997467,
       "y": 4977710.3080041343
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450460.486226324,
       "y": 4977260.6434200574
      },
      "attributes": {
       "assigned_gender": "Male",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450630.23025628,
       "y": 4977393.5124294022
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450804.005104082,
       "y": 4977518.3198023569
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": null,
       "access_restriction": "Limited Access"
      }
     },
     {
      "geometry": {
       "x": -12451296.367020557,
       "y": 4977291.3973759776
      },
      "attributes": {
       "assigned_gender": "Female",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12451184.697294081,
       "y": 4977506.3764010556
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": null,
       "access_restriction": "Limited Access"
      }
     },
     {
      "geometry": {
       "x": -12451260.537177781,
       "y": 4977208.3914512079
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": null,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12451237.844849059,
       "y": 4977209.5858790893
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12451047.946638871,
       "y": 4977509.0636661891
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450917.167739667,
       "y": 4977475.0252890224
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 0,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450917.764839547,
       "y": 4977460.6934180735
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 0,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450690.245197563,
       "y": 4977224.2163214181
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Multiple Stalls",
       "accessible": 0,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450684.273559297,
       "y": 4977222.4248298602
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 0,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450683.67643146,
       "y": 4977214.6617090534
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 0,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450705.174322501,
       "y": 4977150.7651407309
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450481.237690255,
       "y": 4977196.1496002479
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450322.839861432,
       "y": 4977050.5908014309
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": null,
       "access_restriction": "Limited Access"
      }
     },
     {
      "geometry": {
       "x": -12449646.700695567,
       "y": 4977564.5999403764
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12449822.267019078,
       "y": 4977723.4457238382
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": null,
       "access_restriction": "Limited Access"
      }
     },
     {
      "geometry": {
       "x": -12449808.980051367,
       "y": 4977705.5307352236
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": null,
       "access_restriction": "Limited Access"
      }
     },
     {
      "geometry": {
       "x": -12449482.405881278,
       "y": 4977736.6579484204
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 0,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12449368.272865308,
       "y": 4977809.2134193946
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": null,
       "access_restriction": "Limited Access"
      }
     },
     {
      "geometry": {
       "x": -12449504.015725441,
       "y": 4978042.5180750499
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12449474.754647695,
       "y": 4978013.256931331
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12449143.92567171,
       "y": 4978173.296936065
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12449088.389388027,
       "y": 4977940.4029020267
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": null,
       "access_restriction": "Limited Access"
      }
     },
     {
      "geometry": {
       "x": -12449003.592097435,
       "y": 4977895.6156277284
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12448996.426070038,
       "y": 4977792.3062462788
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": null,
       "access_restriction": "Limited Access"
      }
     },
     {
      "geometry": {
       "x": -12448962.23840823,
       "y": 4977889.4946324099
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": null,
       "access_restriction": "Limited Access"
      }
     },
     {
      "geometry": {
       "x": -12448877.51578033,
       "y": 4977592.7787223645
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": null,
       "access_restriction": "Limited Access"
      }
     },
     {
      "geometry": {
       "x": -12450312.202868164,
       "y": 4977684.5926350253
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450419.281946741,
       "y": 4977532.6516630566
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12448770.212841729,
       "y": 4976189.7784703569
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12448781.558847966,
       "y": 4976198.7360381456
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12448731.99422249,
       "y": 4976491.6450342173
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": null,
       "access_restriction": "Limited Access"
      }
     },
     {
      "geometry": {
       "x": -12449015.199399382,
       "y": 4976737.228839417
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450061.719186502,
       "y": 4978118.5776537647
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12451078.303800315,
       "y": 4977000.3192632264
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450391.364559477,
       "y": 4977804.8093390139
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450070.975127719,
       "y": 4978088.12229692
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12449640.43039806,
       "y": 4978721.6058168914
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": null,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12449602.211984674,
       "y": 4978681.595723764
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": null,
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12449635.653166676,
       "y": 4978705.4822962759
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12449296.463840896,
       "y": 4978361.8143632663
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450189.299015107,
       "y": 4977462.5221551331
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12449403.057667205,
       "y": 4978522.7500704303
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12449365.734881755,
       "y": 4978445.4173283279
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 0,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12449784.197766105,
       "y": 4977318.120364896
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12451048.303329233,
       "y": 4976969.723913122
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450869.452616258,
       "y": 4976962.5579418195
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12449391.172459248,
       "y": 4978368.2826388851
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450857.807895683,
       "y": 4977053.0283642504
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12448928.370181501,
       "y": 4977608.6897105658
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": null,
       "access_restriction": "Limited Access"
      }
     },
     {
      "geometry": {
       "x": -12448751.551407339,
       "y": 4976997.7417265335
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": null,
       "access_restriction": "Limited Access"
      }
     },
     {
      "geometry": {
       "x": -12449479.345398735,
       "y": 4977737.031191499
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 0,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12449481.734006403,
       "y": 4977742.1070897756
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 0,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450144.138460141,
       "y": 4977683.4447540333
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12451110.051792786,
       "y": 4977989.4823905854
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12451173.948328715,
       "y": 4977990.6766976891
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450855.809026802,
       "y": 4978003.5156833287
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450861.631303962,
       "y": 4977594.1596800359
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12449308.780366156,
       "y": 4978230.2888304619
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450579.320115076,
       "y": 4978161.1020288775
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450578.986334441,
       "y": 4978125.8766391175
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450611.174303668,
       "y": 4978039.9454203267
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450611.303749695,
       "y": 4978031.1050336808
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450620.49972607,
       "y": 4978039.9577929415
      },
      "attributes": {
       "assigned_gender": "Male",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450620.312186714,
       "y": 4978031.4030315364
      },
      "attributes": {
       "assigned_gender": "Female",
       "stall_type": "Multiple Stalls",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12451108.421051305,
       "y": 4977989.5132160662
      },
      "attributes": {
       "assigned_gender": "Female",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12451109.217984311,
       "y": 4977987.3418018362
      },
      "attributes": {
       "assigned_gender": "Male",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450903.153371707,
       "y": 4977684.8990362538
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450831.152947003,
       "y": 4978085.0963565372
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450845.008700758,
       "y": 4978003.3459793543
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450842.284552833,
       "y": 4978086.5122678066
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     },
     {
      "geometry": {
       "x": -12450839.308598751,
       "y": 4978009.6598958066
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     }
    ]
   }]