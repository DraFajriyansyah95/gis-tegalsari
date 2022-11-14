<?php include "configs/config.php"; ?>
<?php include "components/head.php"; ?>
    <link rel="stylesheet" href="<?php echo $js_url;?>/bootstrap-5.0.2-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo $css_url;?>/custom.css">
<?php include "components/header.php"; ?>

    <div id="main-container" class="container min-vh-100 pt-2 pb-5 bg-white">
      <div class="row">
        <div class="col-md-12">
          <div id="carouselExampleDark" class="carousel carousel-dark slide mh-50" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>
            </div>
            <div class="carousel-inner">

              <div class="carousel-item active" data-bs-interval="10000">
                <img src="<?php echo $image_url;?>sliders/Kantor_Desa.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Kantor Desa Tegalsari</h5>
                  <p>Kantor Pusat Pemerintahan Desa Tegalsari.</p>
                </div>
              </div>

              <div class="carousel-item" data-bs-interval="10000">
                <img src="<?php echo $image_url;?>sliders/Masjid_Jami_Al_Falaah.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Masjid Jami Al-Fallah</h5>
                  <p>Tempat Peribadatan Besar Bagi Masyarakat Tegalsari.</p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="10000">
                <img src="<?php echo $image_url;?>sliders/Masjid_Nurul_Iman.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Masjid Nurul Iman</h5>
                  <p>Tempat Peribadatan Besar Bagi Masyarakat Tegalsari Yang Berada Di Dusun Karangsari.</p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="10000">
                <img src="<?php echo $image_url;?>sliders/Rest_Area_Cikebo.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Rest Area Cikebo</h5>
                  <p>Fasilitas Umum Yang Disediakan Desa Tegalsari Untuk Istirahat Bagi Pengedara Yang Melintasi Daerah Desa Tegalsari.</p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="10000">
                <img src="<?php echo $image_url;?>sliders/Posyandu_Mulyasari.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Posyandu Mulyasari</h5>
                  <p>Salah Satu Fasilitas Kesehatan Desa Tegalsari.</p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="10000">
                <img src="<?php echo $image_url;?>sliders/Musala_Miftahul_jannah.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Musala Miftahul Jannah</h5>
                  <p>Salah Satu Tempat Peribadatan Kecil Desa Tegalsari.</p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="10000">
                <img src="<?php echo $image_url;?>sliders/wisataIstana_Stable_EquestrianPark.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Istana Stable Equestrian Park</h5>
                  <p>Wisata baru Desa Tegalsari yang diresmikan bupati Majalengka tahun 2021.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-md-12 text-center p-5 align-middle">
          <h2>Selamat Datang</h2>
          <h3>WebGIS Desa Tegalsari</h3>
          <p>WebGIS sarana penyedia informasi ini merupakan hasil implementasi dari suatu penelitian guna untuk memberikan manfaat bagi masyarakat yang memuat informasi spasial dan non-spasial terkait Desa Tegalsari.</p>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-md-6 text-start p-5 align-middle">
          <h2>Apa itu WebGIS Tegalsari ?</h2>
          <p style="text-align : justify">WebGIS Tegalsari adalah web penyedia informasi yang memanfaatkan jaringan internet sebagai media komunikasi yang menyediakan berbagai informasi yang terdapat di wilayah Desa Tegalsari.</p>
        </div>
        <div class="col-md-6 p-5 align-middle">
          <img src="<?php echo $image_url;?>footer/Tandatanyaa.jpg" class="d-block w-50"/>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-md-6 text-start p-5 align-middle">
          <h2>Kenapa dengan WebGIS Tegalsari ?</h2>
          <p style="text-align : justify">WebGIS ini dapat membantu mempermudah mendapatkan informasi terkait batas wilayah, infrastruktur yang terdapat di wilayah Desa Tegalsari.</p>
        </div>
        <div class="col-md-6 p-5 align-middle">
          <img src="<?php echo $image_url;?>footer/Off.png" class="d-block w-50"/>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-md-6 text-start p-5 align-middle">
          <h2>Bagaimana cara menggunakan WebGIS Tegalsari ?</h2>
          <p style="text-align : justify">WebGIS ini menyediakan toolbar yang telah di sediakan yang akan membawa anda berselancar ke berbagai halaman yang memuat informasi spasial di wilayah Desa Tegalsari.</p>
        </div>
        <div class="col-md-6 p-5 align-middle">
          <img src="<?php echo $image_url;?>footer/On.png" class="d-block w-50"/>
        </div>
      </div>
      </div>
    </div>

<?php include "components/footer.php"; ?>
    <script src="<?php echo $js_url;?>main.js"></script>
<?php include "components/foot.php"; ?>