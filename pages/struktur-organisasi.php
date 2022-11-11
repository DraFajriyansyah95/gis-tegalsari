<?php include "../configs/config.php"; ?>
<?php include "../components/head.php"; ?>

    <link rel="stylesheet" href="<?php echo $js_url;?>/bootstrap-5.0.2-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo $css_url;?>/custom.css">

<?php include "../components/header.php"; ?>

    <div id="main-container" class="container min-vh-100 p-5 bg-white">
        <div class="row">
            <div class="col-md-12 text-center">
                <h1>Struktur Organisasi</h1>
            </div>
        </div>
        <div class="row py-5">
            <div class="col-md-12">
                <div class="tree">
                    <ul>
                        <li>
                            <a href="#">Parent</a>
                            <ul>
                                <li>
                                    <a href="#">Child</a>
                                    <ul>
                                        <li>
                                            <a href="#">Grand Child</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Child</a>
                                    <ul>
                                        <li><a href="#">Grand Child</a></li>
                                        <li>
                                            <a href="#">Grand Child</a>
                                            <ul>
                                                <li>
                                                    <a href="#">Great Grand Child</a>
                                                </li>
                                                <li>
                                                    <a href="#">Great Grand Child</a>
                                                </li>
                                                <li>
                                                    <a href="#">Great Grand Child</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Grand Child</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row">
          <h1 class="level-1 rectangle">CEO</h1>
          <ol class="level-2-wrapper">
            <li>
              <h2 class="level-2 rectangle">Director A</h2>
              <ol class="level-3-wrapper">
                <li>
                  <h3 class="level-3 rectangle">Manager A</h3>
                  <ol class="level-4-wrapper">
                    <li>
                      <h4 class="level-4 rectangle">Person A</h4>
                    </li>
                    <li>
                      <h4 class="level-4 rectangle">Person B</h4>
                    </li>
                    <li>
                      <h4 class="level-4 rectangle">Person C</h4>
                    </li>
                    <li>
                      <h4 class="level-4 rectangle">Person D</h4>
                    </li>
                  </ol>
                </li>
                <li>
                  <h3 class="level-3 rectangle">Manager B</h3>
                  <ol class="level-4-wrapper">
                    <li>
                      <h4 class="level-4 rectangle">Person A</h4>
                    </li>
                    <li>
                      <h4 class="level-4 rectangle">Person B</h4>
                    </li>
                    <li>
                      <h4 class="level-4 rectangle">Person C</h4>
                    </li>
                    <li>
                      <h4 class="level-4 rectangle">Person D</h4>
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              <h2 class="level-2 rectangle">Director B</h2>
              <ol class="level-3-wrapper">
                <li>
                  <h3 class="level-3 rectangle">Manager C</h3>
                  <ol class="level-4-wrapper">
                    <li>
                      <h4 class="level-4 rectangle">Person A</h4>
                    </li>
                    <li>
                      <h4 class="level-4 rectangle">Person B</h4>
                    </li>
                    <li>
                      <h4 class="level-4 rectangle">Person C</h4>
                    </li>
                    <li>
                      <h4 class="level-4 rectangle">Person D</h4>
                    </li>
                  </ol>
                </li>
                <li>
                  <h3 class="level-3 rectangle">Manager D</h3>
                  <ol class="level-4-wrapper">
                    <li>
                      <h4 class="level-4 rectangle">Person A</h4>
                    </li>
                    <li>
                      <h4 class="level-4 rectangle">Person B</h4>
                    </li>
                    <li>
                      <h4 class="level-4 rectangle">Person C</h4>
                    </li>
                    <li>
                      <h4 class="level-4 rectangle">Person D</h4>
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </div>
    </div>
<?php include "../components/footer.php"; ?>

    <script src="<?php echo $js_url;?>main.js"></script>

<?php include "../components/foot.php"; ?>