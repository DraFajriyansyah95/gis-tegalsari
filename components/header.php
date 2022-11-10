  </head>
  <body>
    
    <main>
      <header>  
        <nav class="navbar navbar-expand-lg navbar-dark bg-info" aria-label="Fifth navbar example">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">WebGIS Tegalsari</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample05">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="<?php echo $base_url;?>index.php">Beranda</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="<?php echo $base_url;?>pages/sejarah.php">Sejarah</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" aria-current="page" href="<?php echo $base_url;?>pages/datadesa.php" role="button" data-bs-toggle="dropdown" aria-expanded="false">Data Desa</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Geografis Kantor Desa</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Struktur Organisasi</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Kependudukan</a></li>
                </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="<?php echo $base_url;?>pages/arcgis.php">GIS</a>
                </li>
              </ul>
              <!-- <form>
                <input class="form-control" type="text" placeholder="Search" aria-label="Search">
              </form> -->
            </div>
          </div>
        </nav>

      </header>
    </main>