var dropdown = ['Gender Neutral', 'Family', 'Single Stall'];

var map, infoWindow;
var bathroomData = {
  
    "objectIdFieldName": "OBJECTID",
    "globalIdFieldName": "",
    "geometryType": "esriGeometryPoint",
    "spatialReference": {
     "wkid": 4326,
     "latestWkid": 4326
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
       "x": -111.84558709822853,
       "y": 40.764888893814437
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
       "x": -111.84555893427857,
       "y": 40.764855740042513
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
       "x": -111.8437001637574,
       "y": 40.761969940388497
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
       "x": -111.8434212136776,
       "y": 40.761693644815459
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
       "x": -111.84615572594326,
       "y": 40.762230998180911
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
       "x": -111.84552138420118,
       "y": 40.764792763155199
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
       "x": -111.84438949103274,
       "y": 40.76173326129868
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
       "x": -111.84591432759773,
       "y": 40.762637311977521
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
       "x": -111.84747537361548,
       "y": 40.763486499479235
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
       "x": -111.85189833596436,
       "y": 40.761942514609025
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
       "x": -111.8508951897437,
       "y": 40.763405237224596
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
       "x": -111.85157647101043,
       "y": 40.761377731625224
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
       "x": -111.85137262235321,
       "y": 40.761385858700095
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
       "x": -111.84966673770681,
       "y": 40.763423521239488
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
       "x": -111.84849193086687,
       "y": 40.763191925486112
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
       "x": -111.84849729470633,
       "y": 40.763094411769451
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
       "x": -111.84645345098804,
       "y": 40.761485406446894
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
       "x": -111.84639980684877,
       "y": 40.761473216874862
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
       "x": -111.84639444275815,
       "y": 40.761420395433312
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
       "x": -111.84658756159914,
       "y": 40.760985631977647
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
       "x": -111.84457590460492,
       "y": 40.76129443609134
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
       "x": -111.84315299269889,
       "y": 40.760304022482799
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
       "x": -111.83707913123001,
       "y": 40.763801386089639
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
       "x": -111.83865627034788,
       "y": 40.764882149615865
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
       "x": -111.83853691148612,
       "y": 40.764760259527399
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
       "x": -111.83560324580225,
       "y": 40.764972042871825
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
       "x": -111.83457797147555,
       "y": 40.76546569319153
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
       "x": -111.83579737033523,
       "y": 40.767053018215591
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
       "x": -111.83553451360153,
       "y": 40.766853937488285
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
       "x": -111.83256262634596,
       "y": 40.767942776241682
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
       "x": -111.8320637354214,
       "y": 40.7663582661948
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
       "x": -111.8313019883995,
       "y": 40.766053548664679
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
       "x": -111.83123761488014,
       "y": 40.765350661099141
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
       "x": -111.83093050188883,
       "y": 40.766011903365566
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
       "x": -111.83016942557329,
       "y": 40.763993111691761
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
       "x": -111.84305743896259,
       "y": 40.764617800494051
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
       "x": -111.84401934669154,
       "y": 40.763584012550943
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
       "x": -111.82920550687554,
       "y": 40.754446567158752
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
       "x": -111.8293074297837,
       "y": 40.754507522187758
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
       "x": -111.82886218317752,
       "y": 40.756500697227295
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
       "x": -111.83140625856697,
       "y": 40.758171789707973
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
       "x": -111.84080730576599,
       "y": 40.767570493361518
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
       "x": -111.84993944072788,
       "y": 40.759961960614937
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
       "x": -111.84376856053484,
       "y": 40.765435728971404
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
       "x": -111.84089045330064,
       "y": 40.767363289302494
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
       "x": -111.83702280418915,
       "y": 40.771673082992606
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
       "x": -111.83667948234036,
       "y": 40.771400889632098
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
       "x": -111.83697988958947,
       "y": 40.77156339292317
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
       "x": -111.83393290003389,
       "y": 40.769225339425233
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
       "x": -111.84195337486581,
       "y": 40.763106854461832
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
       "x": -111.83489044866754,
       "y": 40.770320233003737
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
       "x": -111.83455517238139,
       "y": 40.769794117563904
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
       "x": -111.83831428842986,
       "y": 40.762124340240049
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
       "x": -111.84966994191085,
       "y": 40.759753780274821
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
       "x": -111.84806329862043,
       "y": 40.759705020668513
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
       "x": -111.83478368202792,
       "y": 40.769269345379925
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
       "x": -111.84795869231571,
       "y": 40.760320608309911
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
       "x": -111.83062625843165,
       "y": 40.764101368212927
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
       "x": -111.82903786835818,
       "y": 40.759944422273499
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
       "x": -111.8355757530198,
       "y": 40.764974582339107
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
       "x": -111.83559721024754,
       "y": 40.765009117672335
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
       "x": -111.84154769069816,
       "y": 40.76460999051131
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
       "x": -111.85022463779666,
       "y": 40.766692184900684
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
       "x": -111.85079863014492,
       "y": 40.766700310504021
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
       "x": -111.84794073617105,
       "y": 40.766787661930927
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
       "x": -111.84799303857667,
       "y": 40.76400250757483
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
       "x": -111.83404354126277,
       "y": 40.76833051863106
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
       "x": -111.84545699401812,
       "y": 40.767859808317084
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
       "x": -111.84545399561567,
       "y": 40.767620152161321
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
       "x": -111.84574314506288,
       "y": 40.767035514960135
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
       "x": -111.84574430789634,
       "y": 40.766975368670437
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
       "x": -111.84582691675762,
       "y": 40.767035599138197
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
       "x": -111.84582523206294,
       "y": 40.766977396123984
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
       "x": -111.8502099885967,
       "y": 40.766692394625338
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
       "x": -111.85021714756769,
       "y": 40.766677621160753
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
       "x": -111.8483660376575,
       "y": 40.764619885194612
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
       "x": -111.84771924683776,
       "y": 40.767342702178631
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
       "x": -111.84784371519147,
       "y": 40.766786507332327
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
       "x": -111.84781924375429,
       "y": 40.767352335396524
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
       "x": -111.84779251030393,
       "y": 40.766829464704202
      },
      "attributes": {
       "assigned_gender": "All Gender",
       "stall_type": "Single Stall",
       "accessible": 1,
       "access_restriction": "Public Access"
      }
     }
    ]
   }

function initMap() {
  map = new google.maps.Map(document.getElementById('map-body'), {
    center: { lat: 40.766829464704202, lng: -111.84779251030393, },
    zoom: 15
  });
  var image = {
    url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  };
bathroomData.features.map(function(bathroom){
  var latitude = [];
  var longitude = [];
  for(i = 0; i < bathroomData.features.length; i++){
    longitude[i] = bathroomData.features[i].geometry.x;
    latitude[i] = bathroomData.features[i].geometry.y;
  }


  var bathroomLatLng = [];
  for(i = 0; i < bathroomData.features.length; i++){
  var myLatLng = {lat: latitude[i], lng: longitude[i]};
  bathroomLatLng[i] = myLatLng;

  var marker = new google.maps.Marker({
    position: bathroomLatLng[i],
    map: map,
    title: 'Bathroom'
  });
  }

});

  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function () {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

// $(function () {
//   $.ajax({
//     url: "https://fmags.fm.utah.edu/arcgis/rest/services/mapservices/restrooms/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=%7B%22wkid%22%3A+4326%7D&gdbVersion=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=&f=pjson",
//     dataType: "json"
//   }).done(function (msg) {
//     for (var i = 0; i < msg["features"].length; i++) {
//       var geometry = msg["features"][i]["geometry"];
//       var attr = msg["features"][i]["attributes"];

//       console.log(geometry);
//       console.log(attr["created_user"]);
//     }
//   });
// });


$(document).ready(function (event) {
  var dropdown = ['Gender Neutral', 'Family', 'Single Stall'];

  $("#navbarDropdownMenuLink").on('click', function (e) {
    if ($(this).hasClass("form-group")) {
      e.preventDefault();
    }
  });
});

//map call that will loop data points//


//add user input
$("#addUser").on("click", function (event) {
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

  $("#nameDisplay").text(sessionStorage.getItem("name"));
  $("#emailDisplay").text(sessionStorage.getItem("email"));
  $("#commentDisplay").text(sessionStorage.getItem("comment"));

  sessionStorage.clear();
  sessionStorage.setItem("name", name);
  sessionStorage.setItem("email", email);
  sessionStorage.setItem("comment", comment);

$("#nameDisplay").text(sessionStorage.getItem("name"));
$("#emailDisplay").text(sessionStorage.getItem("email"));
$("#commentDisplay").text(sessionStorage.getItem("comment"));
});

//add user input
// 5 star rating


function rate(rating) {
  document.rating.stars.value = rating;
  document.rating.submit();
  return true;
}

function rate_images(rating) {
  if (!(rating >= 1 && rating <= 5)) return;

  for (var i = 1; i <= rating; i++)
    document.getElementById("rate_image_" + rating).src = "lit.gif";
}
// 5 star rating



    
    

    //console.log("X Coord", bathroom.features[i].geometry.x)
    //console.log("Y Coord", bathroom.features[i].geometry.y)

  //google map api pin