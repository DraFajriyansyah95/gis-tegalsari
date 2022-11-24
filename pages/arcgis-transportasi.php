<?php include "../configs/config.php"; ?>
<?php include "../components/head.php"; ?>
    <link rel="stylesheet" type="text/css" href="https://js.arcgis.com/calcite-components/1.0.0-beta.82/calcite.css"/>
    <link rel="stylesheet" href="https://js.arcgis.com/4.24/esri/themes/light/main.css" />
    <link rel="stylesheet" href="<?php echo $js_url;?>/bootstrap-5.0.2-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo $css_url;?>/custom.css">

    <style>
      #viewDiv {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
      }

      #topbar {
        background: #fff;
        padding: 10px;
      }

      .action-button {
        font-size: 16px;
        background-color: transparent;
        border: 1px solid #d3d3d3;
        color: #6e6e6e;
        height: 32px;
        width: 32px;
        text-align: center;
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
      }

      .action-button:hover,
      .action-button:focus {
        background: #0079c1;
        color: #e4e4e4;
      }

      .action-button.active {
        background: #0079c1;
        color: #e4e4e4;
      }
    </style>
<?php include "../components/header.php"; ?>
    <div class="container-fluid w-100 min-vh-100 py-3 bg-white" style="height: calc(100vh - 110px);">
      <div class="row">
        <div class="col-md-12">
          <div id="viewDiv" class="w-100 bg-white" style="height: calc(100vh - 110px);"></div>
          <div id="outputMessages" class="esri-widget" style="display: none;"></div>
          <div id="elementsDiv"></div>
          <div id="legendDiv"></div>
            <div id="topbar">
              <button
                class="action-button esri-icon-measure-line"
                id="distanceButton"
                type="button"
                title="Measure distance between two or more points"
              ></button>
              <button
                class="action-button esri-icon-measure-area"
                id="areaButton"
                type="button"
                title="Measure area"
              ></button>
            </div>
        </div>
      </div>
      
    </div>

<?php include "../components/footer.php"; ?>

    <script>
      var base_url = '<?php echo $base_url;?>';
    </script>
    <script type="module" src="https://js.arcgis.com/calcite-components/1.0.0-beta.82/calcite.esm.js"></script>
    <script nomodule="" src="https://js.arcgis.com/calcite-components/1.0.0-beta.82/calcite.js"></script>

    <script src="https://js.arcgis.com/4.24/"></script>
    <script src="<?php echo $js_url;?>gis-transportasi.js"></script>
    <script src="<?php echo $js_url;?>main.js"></script>

<?php include "../components/foot.php"; ?>