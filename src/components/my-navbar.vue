

<template>
    <nav class="hat navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Панель мониторинга</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
                <router-link class="hat_link nav-link active" aria-current="page" to="/">Все логи</router-link> 
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>


<style>
  .hat {
      background: #aeffc3;
      padding: 0 0 0 15%;
      top: 0;
      position: sticky;
  }

  .hat_link {
      color: #dee2e6;
      font-size: 24px;
  }
</style>