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
                      <li class="justify-content-sm-center">
                          <a href="#"><b>Kepala Desa</b>
                            <p>Hendi Kiswanto</p></a>
                            <ul>
                              <li class="col-sm-4" >
                                <a href="#"><b>Sekertaris Desa</b>
                                  <p class="py-2">Vicky Dairi Adiansyah</p></a>
                                    <ul class="container-sm-2 d-flex">
                                      <li>
                                      <a href="#"><b>Kepala Urusan Keuangan</b><p class="py-2">Dani Nurdiansah S.Pd.</p></a>
                                      </li>
                                      <li>
                                        <a href="#"><b>Kepala Urusan Umum</b><p class="py-2">Tono</p></a>
                                      </li>
                                      <li>
                                        <a href="#"><b>Kepala Urusan Perencanaan</b><p class="py-2">Zony Mardiansyah</p></a>
                                      </li>
                                    </ul>  
                              </li>
                              <li class="col-sm-4">
                                  <a href="#"><b>Kepala Seksi</b></a>
                                    <ul class="container-sm-2 d-flex">
                                      <li>
                                        <a href="#"><b>Pemerintahan</b><p class="py-2">Andrianus Maulana</p></a>
                                      </li>
                                      <li>
                                        <a href="#"><b>Pelayanan</b><p class="py-2">Tisnaeni Sasmita S.Pd.</p></a>
                                      </li>
                                      <li>
                                        <a href="#"><b>Kesejahteraan</b><p class="py-2">Cecep Effendi</p></a>
                                      </li>
                                    </ul>
                              </li>
                              <li class="col-sm-4">
                                <a href="#"><b>Kepala Dusun</b></a>
                                    <ul class="container-sm-2 d-flex">                                      
                                      <li>
                                      <a href="#"><b>Karangsari</b><p class="py-2">Dede Slamet Nugraha</p></a>
                                      </li>
                                      <li>
                                      <a href="#"><b>Mekarsari</b><p class="py-2">Diding Bahrudin</p></a>
                                      </li>
                                      <li>
                                      <a href="#"><b>Mulyasari</b><p class="py-2">Dedih</p></a>
                                      </li>
                                    </ul>
                              </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- <div class="row">
          <h1 class="level-1 rectangle">Hendi Kiswanto</h1>
          <ol class="level-2-wrapper">
            <li>
              <h2 class="level-2 rectangle">Vicky Dairi Adiansyah</h2>
              <ol class="level-3-wrapper">
                <li>
                  <h3 class="level-3 rectangle">Manager A</h3>
                  <ol class="level-4-wrapper">
                    <li>
                      <h4 class="level-4 rectangle">Dani Nurdiansah, S.Pd.</h4>
                    </li>
                    <li>
                      <h4 class="level-4 rectangle">Tono</h4>
                    </li>
                    <li>
                      <h4 class="level-4 rectangle">Zony Mardiansyah</h4>
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
        </div> -->
    </div>
<?php include "../components/footer.php"; ?>

    <script src="<?php echo $js_url;?>main.js"></script>

<?php include "../components/foot.php"; ?>