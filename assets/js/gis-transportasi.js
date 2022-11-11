
      require([
                    /*"esri/config",
                    */"esri/Map",
                    "esri/Graphic",
                    "esri/views/MapView",
                    "esri/layers/support/MapImage",
                    "esri/layers/MapImageLayer",
                    "esri/layers/GeoJSONLayer",
                    "esri/Graphic",
                    "esri/layers/GraphicsLayer",
                    "esri/layers/KMLLayer",
                    "esri/layers/MediaLayer",
                    "esri/layers/support/ImageElement",
                    "esri/layers/support/ExtentAndRotationGeoreference",
                    "esri/geometry/Extent",
                    "esri/widgets/Slider",
                    "esri/widgets/Expand",
                    "esri/Color",
                    "esri/symbols/SimpleFillSymbol",
                    "esri/symbols/SimpleLineSymbol",
                    "esri/symbols/SimpleMarkerSymbol",
                    "esri/renderers/SimpleRenderer",
                    "esri/layers/support/LabelClass",
                    "esri/renderers/support/UniqueValueInfo",
                    "esri/renderers/UniqueValueRenderer",
                    "esri/widgets/BasemapGallery",
                    "esri/widgets/Zoom",
                    "esri/widgets/Legend",
                    "esri/widgets/Fullscreen",
                    "esri/widgets/Print",
                    "esri/widgets/LayerList",
                    "esri/widgets/Measurement",
                    "esri/widgets/DistanceMeasurement2D",
                    "esri/widgets/AreaMeasurement2D",
                    "esri/widgets/Feature",
                    "esri/core/promiseUtils",
                    ],

        function (
                    /*esriConfig,*/
                    Map,
                    Graphic,
                    MapView,
                    MapImage,
                    MapImageLayer,
                    GeoJSONLayer,
                    Graphic,
                    GraphicsLayer,
                    KMLLayer,
                    MediaLayer,
                    ImageElement,
                    ExtentAndRotationGeoreference,
                    Extent,
                    Slider,
                    Expand,
                    Color,
                    SimpleFillSymbol,
                    SimpleLineSymbol,
                    SimpleMarkerSymbol,
                    SimpleRenderer,
                    LabelClass,
                    UniqueValueInfo,
                    UniqueValueRenderer,
                    BasemapGallery ,
                    Zoom,
                    Legend,
                    Fullscreen,
                    Print,
                    LayerList,
                    Measurement,
                    DistanceMeasurement2D,
                    AreaMeasurement2D,
                    Feature,
                    promiseUtils
                    ) {

        var activeWidget = null;
            function layer_liner(color){
                return {
                    type: "simple",
                    symbol: {
                      type: "simple-line",
                      style: "solid",
                      color: color,
                      width: "1px",
                      opacity: 0.8
                    }
                  };
            }

            function layer_filler(color){
                return {
                    type: "simple",
                    symbol: {
                      color: color,
                      type: "simple-fill",
                      style: "solid"
                    },
                };
            }

            function layer_point(color){
                return {
                    type: "simple",
                    symbol: {
                      color: color,
                      type: "simple-marker"
                    },
                };
            }

            function random_rgba() {
                var o = Math.round, r = Math.random, s = 255;
                return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
                /*

                  var num = Math.round(0xffffff * Math.random());
                  var r = num >> 16;
                  var g = num >> 8 & 255;
                  var b = num & 255;
                  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
                */
            }

            function populationChange (feature) {
                var attributes = feature.graphic.attributes;
                console.log(attributes);
                var popupContent = '';

                if (attributes.length) {

                    for(let i in attributes)
                    {
                        //hitResults.push([i ,attributes[i]]);
                        popupContent += `<b>${i}</b>: ${attributes[i]}<br>`;
                    }
                    view.popup.autoOpenEnabled = false;

                    view.popup.open({
                        content: popupContent
                    });
                }
              
              return popupContent;
            };

            const popupTemplate = {
            // autocasts as new PopupTemplate()
              title: "Population in {NAME}",
              content: populationChange,
              fieldInfos: [{
                fieldName: "Jenis",
                format: {
                  digitSeparator: true,
                  places: 0
                  }
                }]
            };
             const popupTemplates = 
                {
                    'ADMINISTRASIAR' : 
                    {
                      title: "Informasi ADMINISTRASIAR",
                      //content: populationChange,   
                      content:[
                      {
                          type: 'fields',
                          fieldInfos: [{
                            fieldName: "Jenis",
                            label: "Jenis"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "OBJECTID",
                            label: "OBJECTID"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Nama_Desa",
                            label: "Nama_Desa"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Nama_Dusun",
                            label: "Nama_Dusun"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "No_RW",
                            label: "No_RW"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "No_RT",
                            label: "No_RT"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Sumber",
                            label: "Sumber"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Jumlah_KK",
                            label: "Jumlah_KK"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "SHAPE_Leng",
                            label: "SHAPE_Leng"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Shape_Length",
                            label: "Shape_Length"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Shape_Area",
                            label: "Shape_Area"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              }*/
                            }]   
                        }],
                    },
                    'ADMINISTRASILN' : 
                    {
                      title: "Informasi ADMINISTRASILN",
                      //content: populationChange,   
                      content:[
                      {
                          type: 'fields',
                          fieldInfos: [{
                            fieldName: "Jenis",
                            label: "Jenis"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "FID",
                            label: "FID"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "OBJECTID",
                            label: "OBJECTID"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Batas_Admn",
                            label: "Batas_Admn"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Sumber",
                            label: "Sumber"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "SHAPE_Leng",
                            label: "SHAPE_Leng"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              }*/
                            }]   
                        }],
                    },
                    'ADMINISTRASIPT' : 
                    {
                      title: "Informasi ADMINISTRASIPT",
                      //content: populationChange,   
                      content:[
                      {
                          type: 'fields',
                          fieldInfos: [{
                            fieldName: "Jenis",
                            label: "Jenis"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "OBJECTID",
                            label: "OBJECTID"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Nama_Desa",
                            label: "Nama_Desa"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Nama_Dusun",
                            label: "Nama_Dusun"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "No_RW",
                            label: "No_RW"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "No_RT",
                            label: "No_RT"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Sumber",
                            label: "Sumber"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              }*/
                            }]   
                        }],
                    },
                    'BANGUNANFASUMAR' : 
                    {
                      title: "Informasi BANGUNANFASUMAR",
                      //content: populationChange,   
                      content:[
                      {
                          type: 'fields',
                          fieldInfos: [{
                            fieldName: "Jenis",
                            label: "Jenis"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "OBJECTID",
                            label: "OBJECTID"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Jenis",
                            label: "Jenis"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Nama_Desa",
                            label: "Nama_Desa"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Nama_Dusun",
                            label: "Nama_Dusun"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "No_RW",
                            label: "No_RW"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "No_RT",
                            label: "No_RT"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Sumber",
                            label: "Sumber"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "SHAPE_Leng",
                            label: "SHAPE_Leng"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Colour",
                            label: "Colour"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Shape_Length",
                            label: "Shape_Length"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Shape_Area",
                            label: "Shape_Area"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              }*/
                            }]   
                        }],
                    },
                    'Bendungan' : 
                    {
                      title: "Informasi Bendungan",
                      //content: populationChange,   
                      content:[
                      {
                          type: 'fields',
                          fieldInfos: [{
                            fieldName: "Jenis",
                            label: "Jenis"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "OBJECTID",
                            label: "OBJECTID"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Jenis",
                            label: "Jenis"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Nm_Bndgn",
                            label: "Nm_Bndgn"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Sumber",
                            label: "Sumber"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Foto_1",
                            label: "Foto_1"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              }*/
                            }]   
                        }],
                    },
                    'HIDROGRAFIAR' : 
                    {
                      title: "Informasi HIDROGRAFIAR",
                      //content: populationChange,   
                      content:[
                      {
                          type: 'fields',
                          fieldInfos: [{
                            fieldName: "Jenis",
                            label: "Jenis"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "OBJECTID_1",
                            label: "OBJECTID_1"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "OBJECTID",
                            label: "OBJECTID"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Jenis",
                            label: "Jenis"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Sumber",
                            label: "Sumber"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "SHAPE_Leng",
                            label: "SHAPE_Leng"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Colour",
                            label: "Colour"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Shape_Length",
                            label: "Shape_Length"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Shape_Area",
                            label: "Shape_Area"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              }*/
                            }]   
                        }],
                    },
                    'Perairan' : 
                    {
                      title: "Informasi Perairan",
                      //content: populationChange,   
                      content:[
                      {
                          type: 'fields',
                          fieldInfos: [{
                            fieldName: "Jenis",
                            label: "Jenis"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "OBJECTID",
                            label: "OBJECTID"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Jenis",
                            label: "Jenis"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Nm_Sungai",
                            label: "Nm_Sungai"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Sumber",
                            label: "Sumber"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "SHAPE_Leng",
                            label: "SHAPE_Leng"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Shape_Length",
                            label: "Shape_Length"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              }*/
                            }]   
                        }],
                    },
                    'TRANSPORTASILN' : 
                    {
                      title: "Informasi TRANSPORTASILN",
                      //content: populationChange,   
                      content:[
                      {
                          type: 'fields',
                          fieldInfos: [{
                            fieldName: "Jenis",
                            label: "Jenis"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "OBJECTID",
                            label: "OBJECTID"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Jenis",
                            label: "Jenis"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Nama_Jln",
                            label: "Nama_Jln"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Sumber",
                            label: "Sumber"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "SHAPE_Leng",
                            label: "SHAPE_Leng"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Shape_Length",
                            label: "Shape_Length"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              }*/
                            }]   
                        }],
                    },
                    'TRANSPORTASIPT' : 
                    {
                      title: "Informasi TRANSPORTASIPT",
                      //content: populationChange,   
                      content:[
                      {
                          type: 'fields',
                          fieldInfos: [{
                            fieldName: "Jenis",
                            label: "Jenis"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "OBJECTID",
                            label: "OBJECTID"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Jenis",
                            label: "Jenis"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Nama",
                            label: "Nama"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Sumber",
                            label: "Sumber"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Foto_1",
                            label: "Foto_1"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Foto_2",
                            label: "Foto_2"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              }*/
                            }]   
                        }],
                    },
                    'Toponimi' : 
                    {
                      title: "Informasi Toponimi",
                      //content: populationChange,   
                      content:[
                      {
                          type: 'fields',
                          fieldInfos: [{
                            fieldName: "Jenis",
                            label: "Jenis"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "OBJECTID",
                            label: "OBJECTID"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Jenis",
                            label: "Jenis"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Nama",
                            label: "Nama"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Sumber",
                            label: "Sumber"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Foto_1",
                            label: "Foto_1"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Foto_2",
                            label: "Foto_2"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              }*/
                            }]   
                        }],
                    },
                    'Tutupan_Lahan' : 
                    {
                      title: "Informasi Tutupan_Lahan",
                      //content: populationChange,   
                      content:[
                      {
                          type: 'fields',
                          fieldInfos: [{
                            fieldName: "Jenis",
                            label: "Jenis"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "OBJECTID",
                            label: "OBJECTID"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Jenis",
                            label: "Jenis"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Sumber",
                            label: "Sumber"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "SHAPE_Leng",
                            label: "SHAPE_Leng"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Colours",
                            label: "Colours"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Shape_Length",
                            label: "Shape_Length"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              },*/
                          },
                          {
                            fieldName: "Shape_Area",
                            label: "Shape_Area"/*,
                            format: {
                              digitSeparator: true,
                              places: 0
                              }*/
                            }]   
                        }],
                    }
                };

            var styles = {
                'Toponimi' : {
                    type: "unique-value",
                    field: 'Jenis',
                    //defaultSymbol: { type: "simple-fill" },
                    uniqueValueInfos: [
                                {
                                  value: "Cagar Budaya",
                                  symbol:
                                          {
                                            type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
                                            url: base_url+"assets/icons/cagarbudaya.png",
                                            width: "30px",
                                            height: "30px"
                                          },
                                },
                                {
                                  value: "Fasilitas Kesehatan",
                                  symbol:
                                          {
                                            type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
                                            url: base_url+"assets/icons/posyandu.png",
                                            width: "30px",
                                            height: "30px"
                                          },
                                },
                                {
                                  value: "Kantor Pemerintahan",
                                  symbol:
                                          {
                                            type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
                                            url: base_url+"assets/icons/kantor.png",
                                            width: "30px",
                                            height: "30px"
                                          },
                                },
                                {
                                  value: "Perdagangan Dan Jasa",
                                  symbol:
                                          {
                                            type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
                                            url: base_url+"assets/icons/restarea.png",
                                            width: "30px",
                                            height: "30px"
                                          },
                                },
                                {
                                  value: "Rumah Makan",
                                  symbol:
                                          {
                                            type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
                                            url: base_url+"assets/icons/rumahmakan.png",
                                            width: "30px",
                                            height: "30px"
                                          },
                                },
                                {
                                  value: "Tempat Pemakaman Umum",
                                  symbol:
                                          {
                                            type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
                                            url: base_url+"assets/icons/tpu.png",
                                            width: "30px",
                                            height: "30px"
                                          },
                                },
                                {
                                  value: "Tempat Pendidikan Agama",
                                  symbol:
                                          {
                                            type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
                                            url: base_url+"assets/icons/mdta.png",
                                            width: "30px",
                                            height: "30px"
                                          },
                                },
                                {
                                  value: "Tempat Pendidikan Dasar",
                                  symbol:
                                          {
                                            type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
                                            url: base_url+"assets/icons/sdn.png",
                                            width: "30px",
                                            height: "30px"
                                          },
                                },
                                {
                                  value: "Tempat Pendidikan TK",
                                  symbol:
                                          {
                                            type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
                                            url: base_url+"assets/icons/kober.png",
                                            width: "30px",
                                            height: "30px"
                                          },
                                },
                                {
                                  value: "Tempat Pengisian Bahan Bakar",
                                  symbol:
                                          {
                                            type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
                                            url: base_url+"assets/icons/spbu.png",
                                            width: "30px",
                                            height: "30px"
                                          },
                                },
                                {
                                  value: "Tempat Peribadatan Besar",
                                  symbol:
                                          {
                                            type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
                                            url: base_url+"assets/icons/masjid.png",
                                            width: "30px",
                                            height: "30px"
                                          },
                                },
                                {
                                  value: "Tempat Peribadatan Kecil",
                                  symbol:
                                          {
                                            type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
                                            url: base_url+"assets/icons/musala.png",
                                            width: "30px",
                                            height: "30px"
                                          },
                                },
                                {
                                  value: "Wisata Buatan",
                                  symbol:
                                          {
                                            type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
                                            url: base_url+"assets/icons/pariwisata.png",
                                            width: "30px",
                                            height: "30px"
                                          },
                                }
                    ]
                },
                'Bendungan' :  {
                    type: "simple",
                    symbol: {
                      type: "picture-marker",
                        color: "#00ff00",
                        url: base_url+"assets/icons/pariwisata.png",
                        width: "30px",
                        height: "30px"
                      },
                },
                'TRANSPORTASIPT' : {
                    type: "simple",
                    symbol: {
                      type: "picture-marker",
                      color: "#00ff00",
                      url: base_url+"assets/icons/njembatan.png",
                      width: "20px",
                      height: "20px"
                    },
                },
                'ADMINISTRASIPT' : {
                    type: "simple",
                    symbol: {
                      color: "#00ff00",
                      type: "simple-fill",
                      style: "solid"
                    },
                },
                // 'TRANSPORTASILNx' : {
                //     type: "simple",
                //     symbol: {
                //       color: "#ff0000",
                //       type: "simple-line",
                //       style: "solid"
                //     },
                // },
                'TRANSPORTASILN':  {
                  type: "unique-value",
                  field: 'Jenis',
                  defaultSymbol: { type: "simple-line" },
                  uniqueValueInfos: [
                    {
                      value : 'NULL',
                      symbol: {
                                type: "simple-line",  // autocasts as new SimpleFillSymbol()
                                color : [0,0,0,0]
                              }
                    },
                    {
                      value : 'As Jalan Kolektor',
                      symbol: {
                                type: "simple-line",  // autocasts as new SimpleFillSymbol()
                                color :  '#ff0000',
                                width : 5,
                                style: "solid"
                              }
                    },
                    {
                      value : 'As Jalan Lokal',
                      symbol: {
                                type: "simple-line",  // autocasts as new SimpleFillSymbol()
                                color : [255,0,0,0.5],
                                width : 4,
                                style: "solid"
                              }
                    },
                    {
                      value : 'Jalan Lingkungan',
                      symbol: {
                                type: "simple-line",  // autocasts as new SimpleFillSymbol()
                                color : [255,0,0,0.5],
                                width : 2,
                                style: "solid"
                              }
                    },
                    {
                      value : 'Pematang',
                      symbol: {
                                type: "simple-line",  // autocasts as new SimpleFillSymbol()
                                color : [255,0,0,0.5],
                                width : 1,
                                style: "solid"
                              }
                    },
                    {
                      value : 'Jalan Setapak',
                      symbol: {
                                type: "simple-line",  // autocasts as new SimpleFillSymbol()
                                color : [255,0,0,0.5],
                                width : 1,
                                style: "solid"
                              }
                    },
                    {
                      value : 'Tepi Jalan Kolektor',
                      symbol: {
                                type: "simple-line",  // autocasts as new SimpleFillSymbol()
                                color : [11,50,0,0],
                                style: "solid"
                              }
                    },
                    {
                      value : 'Tepi Jalan Lokal',
                      symbol: {
                                type: "simple-line",  // autocasts as new SimpleFillSymbol()
                                color : [11,50,0,0],
                                style: "solid"
                              }
                    },
                  ]
                  },
                'ADMINISTRASILN' : {
                    type: "simple",
                    symbol: {
                      color: "#ff0000",
                      type: "simple-line",
                      style: "solid"
                    },
                },
                'Perairan':  {
                    type: "unique-value",
                    field: 'Jenis',
                    defaultSymbol: { type: "simple-line" },
                    uniqueValueInfos: [
                      {
                        //*value : 'NULL',
                        symbol: {
                                  type: "simple-line",  // autocasts as new SimpleFillSymbol()
                                  color : [0,0,0,0]
                                }
                      },
                      {
                        value : 'As Sungai Dua Garis',
                        symbol: {
                                  type: "simple-line",  // autocasts as new SimpleFillSymbol()
                                  color : [62,254,255],
                                  width : 3,
                                  style : "solid"
                                }
                      },
                      {
                        value : 'Drainase',
                        symbol: {
                                  type: "simple-line",  // autocasts as new SimpleFillSymbol()
                                  color : [0,0,139]
                                }
                      },
                      {
                        value : 'Garis Tepi Kolam',
                        symbol: {
                                  type: "simple-line",  // autocasts as new SimpleFillSymbol()
                                  color : [0,0,255,0,5],
                                }
                      },
                      {
                        value : 'Garis Tepi Sungai Dua Garis',
                        symbol: {
                                  type: "simple-line",  // autocasts as new SimpleFillSymbol()
                                  color : [11,50,0,0],
                                  style : "solid"
                                }
                      },
                      {
                        value : 'Irigasi',
                        symbol: {
                                  type: "simple-line",  // autocasts as new SimpleFillSymbol()
                                  color : [100,149,237,0.5],
                                  width : 1,
                                  style : "solid"
                                }
                      },
                      {value : 'Sungai Satu Garis',
                        symbol: {
                                  type: "simple-line",  // autocasts as new SimpleFillSymbol()
                                  color : [62,254,255],
                                  width : 1,
                                  style : "solid"
                        }
                      },
                    ]
                },
                'BANGUNANFASUMAR' : {
                    type: "unique-value",
                    field: 'Jenis',
                    defaultSymbol: { type: "simple-fill" },
                    uniqueValueInfos: [
                      {'value' : 'NULL',
                          symbol: {
                                    type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                    color : '#aaaaaa'
                                  }
                      },
                      {'value' : 'Cagar Budaya',
                          symbol: {
                                    type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                    color : '#ee82ee'
                                  }
                      },
                      {'value' : 'Fasilitas Kesehatan',
                          symbol: {
                                    type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                    color : '#eee8aa'
                                  }
                      },
                      {'value' : 'MCK',
                          symbol: {
                                    type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                    color : '#6a5acd'
                                  }
                      },
                      {'value' : 'Pekantoran',
                          symbol: {
                                    type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                    color : '#808000'
                                  }
                      },
                      {'value' : 'Pemakaman Umum',
                          symbol: {
                                    type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                    color : '#556b2f'
                                  }
                      },
                      {'value' : 'Pemukiman',
                          symbol: {
                                    type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                    color : '#ffff00'
                                  }
                      },
                      {'value' : 'Perdagangan',
                          symbol: {
                                    type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                    color : '#ff6347'
                                  }
                      },
                      {'value' : 'Rumah Makan',
                          symbol: {
                                    type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                    color : '#fa8072'
                                  }
                      },
                      {'value' : 'Tempat Pendidikan',
                          symbol: {
                                    type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                    color : '#d2691e'
                                  }
                      },
                      {'value' : 'Tempat Perdagangan Dan Jasa',
                          symbol: {
                                    type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                    color : '#f08080'
                                  }
                      },
                      {'value' : 'Tempat Peribadatan',
                          symbol: {
                                    type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                    color : '#4b0082'
                                  }
                      },
                  ]
                },
                'HIDROGRAFIAR' : {
                    type: "unique-value",
                    field: 'Jenis',
                    defaultSymbol: { type: "simple-fill" },
                    uniqueValueInfos: [
                      { 
                          value : 'Empang / Kolam',
                          symbol: {
                                    type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                    color : '#4169e1'
                                  }
                      },
                      { 
                          value : 'Sungai',
                          symbol: {
                                    type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                    color : '#00ffff'
                                  }
                      }
                  ]
                },
                'Tutupan_Lahan' : {
                    type: "unique-value",
                    field: 'Jenis',
                    defaultSymbol: { type: "simple-fill" },
                    uniqueValueInfos: [
                          { 
                              value : 'Cagar Budaya',
                              symbol: {
                                        type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                        color : '#ff00ff'
                                      }
                          },
                          { 
                              value : 'Hutan',
                              symbol: {
                                        type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                        color : '#228b22'
                                      }
                          },
                          { 
                              value : 'Lahan Terbuka',
                              symbol: {
                                        type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                        color : '#ffffff'
                                      }
                          },
                          { 
                              value : 'Lapangan Olah Raga',
                              symbol: {
                                        type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                        color : '#bdb76b'
                                      }
                          },
                          { 
                              value : 'Pekarangan',
                              symbol: {
                                        type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                        color : '#ffa500'
                                      }
                          },
                          { 
                              value : 'Pendidikan',
                              symbol: {
                                        type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                        color : '#b8860b'
                                      }
                          },
                          { 
                              value : 'Perkebunan',
                              symbol: {
                                        type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                        color : '#32cd32'
                                      }
                          },
                          { 
                              value : 'Sawah',
                              symbol: {
                                        type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                        color : '#adff2f'
                                      }
                          },
                          { 
                              value : 'Semak Belukar',
                              symbol: {
                                        type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                        color : '#90ff90'
                                      }
                          },
                          { 
                              value : 'Tanah Kosong',
                              symbol: {
                                        type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                        color : '#ffebcd'
                                      }
                          },
                          { 
                              value : 'Transportasi',
                              symbol: {
                                        type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                        color : '#a52a2a'
                                      }
                          },
                          { 
                            value : 'Wisata Buatan',
                            symbol: {
                                      type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                      color : '#bc8f8f'
                                    }
                          }
                    ]
                },
                'ADMINISTRASIAR' : {
                        type: "unique-value",
                        field: 'No_RW',
                        defaultSymbol: { type: "simple-fill" },
                        uniqueValueInfos: [{'value' : 'NULL',symbol: {
                                                                      type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                                                      color : '#111111'
                                                                    }
                                                                },
                                        {'value' : 'NULL',symbol: {
                                                                      type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                                                      color : '#222222'
                                                                    }
                                                                },
                                        {'value' : '01',symbol: {
                                                                      type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                                                      color : '#d6eadf'
                                                                    }
                                                                },
                                        {'value' : '02',symbol: {
                                                                      type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                                                      color : '#b8e0d2'
                                                                    }
                                                                },
                                        {'value' : '03',symbol: {
                                                                      type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                                                      color : '#fcf5c7'
                                                                    }
                                                                },
                                        {'value' : '04',symbol: {
                                                                      type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                                                      color : '#ffee93'
                                                                    }
                                                                },
                                        {'value' : '05',symbol: {
                                                                      type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                                                      color : '#adf7b6'
                                                                    }
                                                                },
                                        {'value' : '06',symbol: {
                                                                      type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                                                                      color : '#c1d3fe'
                                                                    }
                                                                }]
                      },
            };


            var labelClass = 
            {
                'ADMINISTRASIAR' :
                {
                  symbol: {
                    type: "text",  // autocasts as new TextSymbol()
                    color: "white",
                    haloColor: "blue",
                    haloSize: 1,
                    font: {  // autocast as new Font()
                       family: "Ubuntu Mono",
                       size: 14,
                       weight: "bold"
                     }
                  },
                  //labelPlacement: "above-right",
                  labelExpressionInfo: {
                    expression: "'Dusun '+$feature.Nama_Dusun+' RW '+$feature.No_RW"
                  },
                  maxScale: 0,
                  minScale: 10000,
                  //where: "Conference = 'AFC'"
                },
                'Tutupan_Lahan' :
                {
                  symbol: {
                    type: "text",  // autocasts as new TextSymbol()
                    color: "#cccccc",
                    haloColor: "black",
                    haloSize: 1,
                    font: {  // autocast as new Font()
                       family: "Ubuntu Mono",
                       size: 12,
                       weight: "bold"
                     }
                  },
                  //labelPlacement: "above-right",
                  labelExpressionInfo: {
                    expression: "$feature.Jenis"
                  },
                  maxScale: 0,
                  minScale: 1500,
                  //where: "Conference = 'AFC'"
                },
                'BANGUNANFASUMAR' :
                {
                  symbol: {
                    type: "text",  // autocasts as new TextSymbol()
                    color: "black",
                    haloColor: "blue",
                    haloSize: 0,
                    font: {  // autocast as new Font()
                       family: "Ubuntu Mono",
                       size: 12,
                       weight: "bold"
                     }
                  },
                  //labelPlacement: "above-right",
                  labelExpressionInfo: {
                    expression: "$feature.Jenis"//+' Dusun '+$feature.Nama_Dusun"
                  },
                  maxScale: 0,
                  minScale: 2000,
                  //where: "Conference = 'AFC'"
                },
                'HIDROGRAFIAR' :
                {
                  symbol: {
                    type: "text",  // autocasts as new TextSymbol()
                    color: "blue",
                    haloColor: "white",
                    haloSize: 1,
                    font: {  // autocast as new Font()
                       family: "Ubuntu Mono",
                       size: 11,
                       weight: "normal"
                     }
                  },
                  //labelPlacement: "above-right",
                  labelExpressionInfo: {
                    expression: "$feature.Jenis"
                  },
                  maxScale: 0,
                  minScale: 9000,
                  //where: "Conference = 'AFC'"
                },
                'Perairan' :
                {
                  symbol: {
                    type: "text",  // autocasts as new TextSymbol()
                    color: "white",
                    haloColor: "blue",
                    haloSize: 1,
                    font: {  // autocast as new Font()
                       family: "Ubuntu Mono",
                       size: 12,
                       weight: "bold"
                     }
                  },
                  //labelPlacement: "above-right",
                  labelExpressionInfo: {
                    expression: "$feature.nm_sungai"
                  },
                  maxScale: 0,
                  minScale: 1500,
                  //where: "Conference = 'AFC'"
                },
                'ADMINISTRASILN' :
                {
                  symbol: {
                    type: "text",  // autocasts as new TextSymbol()
                    color: "white",
                    haloColor: "blue",
                    haloSize: 1,
                    font: {  // autocast as new Font()
                       family: "Ubuntu Mono",
                       size: 12,
                       weight: "bold"
                     }
                  },
                  //labelPlacement: "above-right",
                  labelExpressionInfo: {
                    expression: "$feature.Batas_Admn"
                  },
                  maxScale: 0,
                  minScale: 10000,
                  //where: "Conference = 'AFC'"
                },
                'TRANSPORTASILN' :
                {
                  symbol: {
                    type: "text",  // autocasts as new TextSymbol()
                    color: "white",
                    haloColor: "blue",
                    haloSize: 1,
                    font: {  // autocast as new Font()
                       family: "Ubuntu Mono",
                       size: 12,
                       weight: "bold"
                     }
                  },
                  //labelPlacement: "above-right",
                  labelExpressionInfo: {
                    expression: "$feature.Nama_Jln"
                  },
                  maxScale: 0,
                  minScale: 7000,
                  //where: "Conference = 'AFC'"
                },
                'ADMINISTRASIPT' :
                {
                  symbol: {
                    type: "text",  // autocasts as new TextSymbol()
                    color: "white",
                    haloColor: "blue",
                    haloSize: 1,
                    font: {  // autocast as new Font()
                       family: "Ubuntu Mono",
                       size: 12,
                       weight: "bold"
                     }
                  },
                  //labelPlacement: "above-right",
                  labelExpressionInfo: {
                    expression: "$feature.Nama $feature.Jenis"
                  },
                  maxScale: 0,
                  minScale: 50000,
                  //where: "Conference = 'AFC'"
                },
                'TRANSPORTASIPT' :
                {
                  symbol: {
                    type: "text",  // autocasts as new TextSymbol()
                    color: "white",
                    haloColor: "blue",
                    haloSize: 1,
                    font: {  // autocast as new Font()
                       family: "Ubuntu Mono",
                       size: 12,
                       weight: "bold"
                     }
                  },
                  //labelPlacement: "above-right",
                  labelExpressionInfo: {
                    expression: "$feature.nama"
                  },
                  maxScale: 0,
                  minScale: 20000,
                  //where: "Conference = 'AFC'"
                },
                'Bendungan' :
                {
                  symbol: {
                    type: "text",  // autocasts as new TextSymbol()
                    color: "white",
                    haloColor: "blue",
                    haloSize: 1,
                    font: {  // autocast as new Font()
                       family: "Ubuntu Mono",
                       size: 10,
                       weight: "bold"
                     }
                  },
                  //labelPlacement: "above-right",
                  labelExpressionInfo: {
                    expression: "$feature.Jenis"
                  },
                  maxScale: 0,
                  minScale: 70000,
                  //where: "Conference = 'AFC'"
                },
                'Toponimi' :
                {
                  symbol: {
                    type: "text",  // autocasts as new TextSymbol()
                    color: "white",
                    haloColor: "blue",
                    haloSize: 1,
                    font: {  // autocast as new Font()
                       family: "Ubuntu Mono",
                       size: 12,
                       weight: "bold"
                     }
                  },
                  //labelPlacement: "above-right",
                  labelExpressionInfo: {
                    expression: "$feature.Jenis"
                  },
                  maxScale: 0,
                  minScale: 2000,
                  //where: "Conference = 'AFC'"
                }
            };
            
        
        
        
        
            var jsonurl = 
            [
              // base_url+"assets/json/ADMINISTRASIAR.json",
              // base_url+"assets/json/Tutupan_Lahan.json",
              // base_url+"assets/json/HIDROGRAFIAR.json",
              // base_url+"assets/json/BANGUNANFASUMAR.json",
              base_url+"assets/json/Perairan.json",
              // base_url+"assets/json/ADMINISTRASIPT.json",
              // base_url+"assets/json/ADMINISTRASILN.json",
              base_url+"assets/json/TRANSPORTASILN.json",
              base_url+"assets/json/TRANSPORTASIPT.json",
              // base_url+"assets/json/Bendungan.json",
              // base_url+"assets/json/Toponimi.json",
            ];

            /*
          const imageInfos = [
            {
              name: "neworleans1891",
              title: "New Orleans 1891",
              extent: {
                //xmin: 108.28846027342287,
                //ymin: -6.887687484189843,
                //xmax: 108.31516457287945,
                //ymax: -6.91134905976731
                xmin: 108.295504061461642,
                ymin: -6.890950593817264,
                xmax: 108.31516457287945,
                ymax: -6.9113490597673,
              }
            }
          ];
            */

          // create image elements for each image
        /*  function createImageElement(name, box) {
            const imageElement = new ImageElement({
              image: base_url+`assets/images/Citra_PetaDesa_A0/Citra_PetaDesa_A0-0.png`,
              georeference: new ExtentAndRotationGeoreference({
                extent: new Extent({
                  spatialReference: {
                    wkid: 4326
                  },
                  xmin: box.xmin,
                  ymin: box.ymin,
                  xmax: box.xmax,
                  ymax: box.ymax
                })
              })
            });
            return imageElement;
          }
        */
        /*function createFillSymbol(value, color) {
            return {
              "value": value,
              "symbol": {
                "color": color,
                "type": "simple-fill",
                "style": "solid",
                "outline": {
                  "style": "none"
                }
              },
              "label": value
            };
          }*/

          /*
          let imageElements = [];
          // loop through images and set up ImageElement object for MediaLayer.
          imageInfos.forEach((image, i) => {
            const elementDiv = document.createElement("div");
            elementDiv.classList.add("elementDiv");

            const imageElement = {
              name: image.name,
              title: image.title,
              element: createImageElement(image.name, image.extent)
            };
            imageElements.push(imageElement);

            // create calcite checkboxes to allow users to add and remove
            // image elements from the MediaLayer.
            const label = document.createElement("calcite-label");
            label.layout = "inline-space-between";
            label.disableSpacing = true;
            label.innerHTML = image.title;
            const checkBox = document.createElement("calcite-checkbox");
            checkBox.name = image.name;
            checkBox.value = image.name;
            checkBox.checked = true;


            // Remove the image element from the MediaLayer if it exists
            // Add the image element to the layer if it does not exist in the layer.source.elements.
            checkBox.addEventListener("calciteCheckboxChange", (event) => {
              const selectedImageElement = imageElements.find(
                (item) => item.name === event.target.name
              );
              if (checkBox.checked) {
                layer.source.elements.add(selectedImageElement.element);
              } else {
                layer.source.elements.remove(selectedImageElement.element);
              }
            });


            label.appendChild(checkBox);
            const visibleDiv = document.createElement("div");
            visibleDiv.classList.add("leftPadding", "rightPadding");
            visibleDiv.appendChild(label);
            document.getElementById("elementsDiv").appendChild(visibleDiv);

            const slider = new Slider({
              min: 0,
              max: 1,
              precision: 1,
              container: document.createElement("div"),
              values: [1],
              label: image.name
            });


            slider.on("thumb-drag", (event) => {
              const selectedImageElement = imageElements.find(
                (item) => item.name === slider.label
              );
              selectedImageElement.element.opacity = slider.values[0];
            });


            const sliderLabel = document.createElement("calcite-label");
            sliderLabel.layout = "inline";
            sliderLabel.innerHTML = "opacity";
            sliderLabel.appendChild(slider.container);

            const sliderDiv = document.createElement("div");
            sliderDiv.classList.add("leftPadding");
            sliderDiv.appendChild(sliderLabel);
            document.getElementById("elementsDiv").appendChild(sliderDiv);
          });


          // MediaLayer - add imageElements
          const layerImage = new MediaLayer({
            source: [
              imageElements[0].element
            ],
            opacity: 0.9,
            title: "New Orleans",
            blendMode: "normal"
          });*/

          const map = new Map({
            basemap: "satellite"
          });

        let viewNode = document.getElementById("viewDiv");
        const view = new MapView({
            map: map,
            center: [108.3049667,-6.899219], //Longitude, latitude
            zoom: 16,
            container: viewNode,
            popup: {
                highlightEnabled: true,
                dockEnabled: true,
                dockOptions: {
                  breakpoint: true,
                  position: "bottom-left"
                }
            },
              highlightOptions: {
                color: "orange"
              }
         });

        //view
        //.when(maintainFixedExtent)
        //.then(enableHighlightOnPointerMove);

         /*const popupTemplate = {
            title: "{Jenis}",
            content: function(feature) {
              // calculate the population percent change from 2010 to 2013.
              div.innerHTML = feature.graphic.attributes.Jenis;
              return div;
            }
         }*/
         const attributes = {
            Name: "Graphic",
            Description: "I am a polygon"
         }
         const graphicsLayer = new GraphicsLayer();
         map.add(graphicsLayer);
        /*
        const layer = new KMLLayer({
          // major earthquakes for latest 30 days from USGS
          url: base_url+"assets/geojson2/FRAMEAR.json"
        });
        map.add(layer);*/

        /*
        var polygon = {
                spatialReference : {"wkid" : 4326},
                type: "polygon",
                    rings: [
                        [108.30134593,-6.863477],
                        [108.30257488,-6.856483],
                        [108.30334593,-6.856477],
                        [108.3047488,-6.856483]
                    ]
             };

         var simpleFillSymbol = {
            type: "simple",
            color: [227, 139, 79, 0.8],  // Orange, opacity 80%
            outline: {
                color: [255, 255, 255],
                width: 1
            }
         };

        var polygonGraphic = new Graphic({
            geometry: polygon,
            symbol: simpleFillSymbol,
            attributes: attributes,
            popupTemplate: popupTemplate

         });*/
        //console.log(polygonGraphic);
        //graphicsLayer.add(polygonGraphic);

        let basemap_container = document.getElementById("basemap-container");
        const basemapGallery = new BasemapGallery({
          view: view,
          container: basemap_container
        });

        // Expand widget for the editArea div.
        const editExpand = new Expand({
          expandIconClass: "esri-icon-collection",
          expandTooltip: "Expand Edit",
          expanded: false,
          view: view,
          content: basemapGallery
        });
        // Add the widget to the top-right corner of the view
        //view.ui.add(basemapGallery, {
        //  position: "top-right"
        //});
        view.ui.add(editExpand, "top-right");

        let highlight = null;
        let lastHighlight = null;

        function maintainFixedExtent(view) {
          const fixedExtent = view.extent.clone();
          // keep a fixed extent in the view
          // when the view size changes
          view.on("resize", () => {
            view.extent = fixedExtent;
          });
          return view;
        }

        fullscreen = new Fullscreen({
          view: view
        });
        view.ui.add(fullscreen, "top-right");


        view.when(() => {
          const print = new Print({
            view: view,
            // specify your own print service
            printServiceUrl:
              "https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"
          });

          // Add widget to the top right corner of the view
          //view.ui.add(print, "top-right");
            // Expand widget for the editArea div.
            const editPrint = new Expand({
              expandIconClass: "esri-icon-printer",
              expandTooltip: "Print",
              expanded: false,
              view: view,
              content: print
            });
            // Add the widget to the top-right corner of the view
            //view.ui.add(basemapGallery, {
            //  position: "top-right"
            //});
            view.ui.add(editPrint, "top-right");


              const layerList = new LayerList({
                view: view
              });

              // Add widget to the top right corner of the view
                const layerListToggle = new Expand({
                  expandIconClass: "esri-icon-layers",
                  expandTooltip: "Layer",
                  expanded: false,
                  view: view,
                  content: layerList
                });
              view.ui.add(layerListToggle, "top-right");
        });

            jsonurl.forEach(function(v,i,a){
            
            var file_name = v.replace(base_url+'assets/json/','');
            file_name = file_name.replace('.json','');

            //console.log(file_name);
            //console.log(labelClass[file_name]);
            //console.log(styles);
            var geojsonLayer = new GeoJSONLayer({
              url: v,
              title: file_name,
              renderer: styles[file_name],
              copyright: "Tegal Sari",
              popupTemplate : popupTemplates[file_name],
              labelingInfo: [labelClass[file_name]]
            });
            map.add(geojsonLayer);

                map.on("layer-add", function (results) {
                  //add the legend
                  legend = new Legend({
                      map: map,
                      layerInfos: [{
                          layer: results,
                          title: file_name
                      }]
                  }, "legendDiv");
                  legend.startup();
                });
            });
      
        // add the toolbar for the measurement widgets
        view.ui.add("topbar", "bottom-right");

        document
          .getElementById("distanceButton")
          .addEventListener("click", function () {
            setActiveWidget(null);
            if (!this.classList.contains("active")) {
              setActiveWidget("distance");
            } else {
              setActiveButton(null);
            }
          });

        document
          .getElementById("areaButton")
          .addEventListener("click", function () {
            setActiveWidget(null);
            if (!this.classList.contains("active")) {
              setActiveWidget("area");
            } else {
              setActiveButton(null);
            }
          });

        function setActiveWidget(type) {
          switch (type) {
            case "distance":
              activeWidget = new DistanceMeasurement2D({
                view: view
              });

              // skip the initial 'new measurement' button
              activeWidget.viewModel.start();

              view.ui.add(activeWidget, "top-right");
              setActiveButton(document.getElementById("distanceButton"));
              break;
            case "area":
              activeWidget = new AreaMeasurement2D({
                view: view
              });

              // skip the initial 'new measurement' button
              activeWidget.viewModel.start();

              view.ui.add(activeWidget, "top-right");
              setActiveButton(document.getElementById("areaButton"));
              break;
            case null:
              if (activeWidget) {
                view.ui.remove(activeWidget);
                activeWidget.destroy();
                activeWidget = null;
              }
              break;
          }
        }

        function setActiveButton(selectedButton) {
          // focus the view to activate keyboard shortcuts for sketching
          view.focus();
          var elements = document.getElementsByClassName("active");
          for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove("active");
          }
          if (selectedButton) {
            selectedButton.classList.add("active");
          }
        }

        
        //function create_feature_popup(fLayer)
        //{
/*
            view.whenLayerView(fLayer).then((layerView) => {
              let highlight;
              let objectId;

              const debouncedUpdate = promiseUtils.debounce((event) => {
              // Perform a hitTest on the View
                view.hitTest(event)
                  .then((event) => {
                    // Make sure graphic has a popupTemplate
                      const results = event.results.filter((result) => {
                        return result.graphic.layer.popupTemplate;
                      });

                      const result = results[0];
                      const newObjectId = result && result.graphic.attributes[fLayer.OBJECTID];

                      if (!newObjectId) {
                        highlight && highlight.remove();
                        objectId = featureGrapic.graphic = null;
                      } else if (objectId !== newObjectId) {
                        highlight && highlight.remove();
                        objectId = newObjectId;
                        featureGrapic.graphic = result.graphic;
                        highlight = layerView.highlight(result.graphic);
                      }
                    })
                });

                // Listen for the pointer-move event on the View
                // and make sure that function is not invoked more
                // than one at a time
                view.on("pointer-move", (event) => {
                  debouncedUpdate(event).catch((err) => {
                    if (!promiseUtils.isAbortError(err)) {
                      throw err;
                    }
                  });
                });
            });*/
        //}

  });

