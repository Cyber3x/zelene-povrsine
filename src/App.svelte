<svelte:head>
  <title>Zelene Površine</title>
  
</svelte:head>

<script>
  import * as animateScroll from "svelte-scrollto";

  import './main.css';

  const handleZoneClick = (name) => animateScroll.scrollTo({element: `#${name}`})

  const locations = [
    {
      imageSrc: "INDUSTRIJSKA_1.png",
      imageAlt: "Zelene površine na industrijskoj zoni",
      name: "Industrijska zona (Podravka)",
      totalArea:  "197,874.67",
      greenArea: "25,138.14",
      greenPart: "12.70",
      id: "industrijska"
    },
    {
      imageSrc: "REKREACIJSKA_1.png",
      imageAlt: "Zelene površine na rekreacijskoj zoni",
      name: "Rekreacijska zona (Gradski stadion Koprivnica)",
      totalArea: "143,395.52",
      greenArea: "87,000.23",
      greenPart: "60.67",
      id: "rekreacijska"
    }, 
    {
      imageSrc: "OBRAZOVNA_1.png",
      imageAlt: "Zelene površine na obrazovnoj zoni",
      name: "Obrazovna zona (Srednja škola Koprivnica)",
      totalArea: "100,319.59",
      greenArea: "34,069.23",
      greenPart: "33.96",
      id: "skolska"
    },
    {
      imageSrc: "TURISTICKA_1.png",
      imageAlt: "Zelene površine na turistickoj zoni",
      name: "Turistička zona (Gradski park i Zrinski trg)",
      totalArea: "111,130.81",
      greenArea: "70,825.30",
      greenPart: "63.73%",
      id: "turisticka" 
    },
    {
      imageSrc: "STAMBENA_1.png",
      imageAlt: "Zelene površine na stambenoj zoni",
      name: "Stambena zona (Trg kralja Zvonimira)",
      totalArea: "87,962.65",
      greenArea: "27,852.50",
      greenPart: "31.66%",
      id: "stambena"
    },
    {
      imageSrc: "TRGOVACKA_1.png",
      imageAlt: "Zelene površine na trgovačkoj zoni",
      name: "Trgovačka zona (Supernova i Pevex)",
      totalArea: "159,652.82",
      greenArea: "36,389.23",
      greenPart: "22.80",
      id: "trgovacka"
    }
  ]

</script>

<style>
  .trgovacka {
    position: absolute;
    width: 23.51%;
    height: 42.10%;
    top: 27.12%;
    left: 37%;
    }
  .stambena {
    position: absolute;
    height: calc(445.023 / 1080 * 100%);
    width: calc(602.41 / 1920 * 100%);
    left: calc(138.52 / 1920 * 100%);
    top: calc(574.13 / 1080 * 100%);
  }

  .turisticka {
    position: absolute;
    height: calc(684.79 / 1080 * 100%);
    width: calc(515.43 / 1920 * 100%);
    left: calc(1149 / 1920 * 100%);
    top: calc(10 / 1080 * 100%);
  }

  .industrijska {
    position: absolute;
    height: calc(740.47 / 1080 * 100%);
    width: calc(580.78 / 1920 * 100%);
    left: calc(28 / 1920 * 100%);
    top: calc(-28 / 1080 * 100%);
  }

  .skolska {
    position: absolute;
    height: calc(555.93 / 1080 * 100%);
    width: calc(541.20 / 1920 * 100%);
    left: calc(124 / 1920 * 100%);
    top: calc(513 / 1080 * 100%);
  }
  
  .rekreacijska {
    position: absolute;
    height: calc(722.07 / 1080 * 100%);
    width: calc(484.14 / 1920 * 100%);
    left: calc(1311 / 1920 * 100%);
    top: calc(220 / 1080 * 100%)

  }

  svg path:hover {
    cursor: pointer;
  }

  .separator-with-text {
    background-color: #2d3748;
    color: #e2e8f0;
  }

  img {
    width: 100%;
    user-select: none;
  }

</style>


<div>
  <h1 class="separator-with-text font-bold text-md lg:text-xl xl:text-2xl text-center p-3">Udio zelenih površina</h1>
 
  <div class="relative">

    <svg width="582" height="741" viewBox="0 0 582 741" fill="none" xmlns="http://www.w3.org/2000/svg" class="industrijska">
      <path on:click={() => handleZoneClick('industrijska')} d="M101.524 87.3374L210.389 0.460205H340.629L343.398 4.60297L377.541 48.1285L426.06 93.8123L485.36 129.064L538.551 155.324L531.363 218.274L519.503 265.396L509.799 327.267L498.298 400.289L504.408 422.952L519.503 436.621L581.319 468.995L549.692 538.42L519.503 593.456L484.641 650.291L448.702 708.565L427.138 740.94L356.696 693.817L293.083 650.291C276.55 639.26 242.479 616.694 238.454 614.68C234.429 612.665 197.722 596.334 179.872 588.42L76.3659 531.945L36.4728 513.6L31.0819 479.427L36.4728 441.297L18.8623 415.757L0.533081 403.887L51.9269 299.929L84.9915 220.792L101.524 146.69V87.3374Z" fill="#1CE4FF" fill-opacity="0.3"/>
    </svg>

    <svg width="542" height="557" viewBox="0 0 542 557" fill="none" xmlns="http://www.w3.org/2000/svg" class="skolska">
      <path on:click={() => handleZoneClick('skolska')} d="M0.256958 174.424L78.75 0.582031L123.552 21.7298L218.174 76.5705L331.792 160.803L419.245 228.548L541.465 313.855L475.158 412.067L392.722 534.294L364.766 556.517L277.671 521.749L102.405 447.552L124.627 389.844L157.96 381.241L161.903 367.621L220.683 269.768L157.96 241.81L61.5461 200.231L0.256958 174.424Z" fill="#FF2727" fill-opacity="0.3"/>
    </svg>
      
    <svg width="485" height="723" viewBox="0 0 485 723" fill="none" xmlns="http://www.w3.org/2000/svg" class="rekreacijska">
      <path on:click={() => handleZoneClick('rekreacijska')}  d="M53.9857 640.616L2.90226 602.418L0.140991 557.778V491.967V435.822L4.28289 367.25L13.4871 317.547L20.8505 263.703L30.9751 221.363L48.4631 170.74L61.349 148.65L81.1381 129.321L130.841 89.2829L187.447 43.2618L230.246 0.922363L276.728 43.2618L355.424 113.674L420.774 173.501L484.283 232.408L467.715 247.135L454.829 262.782L443.324 293.617L432.739 333.655L410.649 377.835L383.036 430.759L343.919 483.684L277.188 548.113L227.025 590.913L181.924 626.349L166.737 645.678L143.267 711.028L131.301 722.993L91.2628 665.007L53.9857 640.616Z" fill="#DBFF00" fill-opacity="0.3"/>
    </svg>
      
      
    <img src="industrijska_skolska_rekreacijska.jpg" alt="Satelitska karta s podravkom u centru">
  </div>

  <div class="p-2 separator-with-text"></div>

  <div class="relative">
    <svg width="603" height="446" viewBox="0 0 603 446" fill="none" xmlns="http://www.w3.org/2000/svg" class="stambena">
      <path on:click={() => handleZoneClick('stambena')} d="M9.72766 123.344L0.523438 48.3299L12.0287 45.1085L47.0047 50.631L70.9357 52.4718L99.4688 50.631H128.002L161.597 43.2676L196.573 35.9043L247.197 27.1602L286.775 20.7173L336.017 14.2743H379.737L382.499 10.1324L397.225 3.22928H420.696L457.513 0.928223L466.257 5.07012L486.966 8.2916L517.34 10.1324L590.054 3.22928L592.815 23.0183L594.196 39.1257V95.2715L597.877 162.462L602.94 249.902V308.349L545.413 312.491L359.948 324.457H334.637H278.031L245.816 337.803L223.726 364.495L195.653 402.232L162.978 445.952L145.03 433.066L98.0882 337.803L53.4477 231.034L9.72766 123.344Z" fill="#FF00C7" fill-opacity="0.3"/>
    </svg>
    <svg width="516" height="686" viewBox="0 0 516 686" fill="none" xmlns="http://www.w3.org/2000/svg" class="turisticka">
      <path on:click={() => handleZoneClick('turisticka')} d="M50.2301 574.831L0.527344 462.08L20.7766 433.086L53.4516 398.11L111.898 345.646L136.29 306.068H151.937L163.442 251.763L178.629 188.254L193.816 126.586L214.065 54.3327L221.889 13.3739L261.927 0.948242L274.813 8.77183L320.374 27.1803L370.537 49.7306L428.063 70.4401L491.112 90.6894L515.964 112.319L500.777 132.108L486.97 192.856L473.164 275.694L462.119 360.833L452.454 435.387L440.489 516.385L423.461 594.62L410.575 657.669L370.077 685.742L271.131 668.254L218.207 653.988L155.618 640.181L95.791 674.237L50.2301 574.831Z" fill="#FF7A00" fill-opacity="0.3"/>
    </svg> 
    <img src="stambena_turisticka.jpg" alt="Satelitska karta s trgom u centru">
  </div>

  <div class="p-2 separator-with-text"></div>

  <div class="relative">
    <svg width="491" height="495" viewBox="0 0 491 495" fill="none" xmlns="http://www.w3.org/2000/svg" class="trgovacka">
      <path on:click={() => handleZoneClick('trgovacka')} d="M125.5 146.5L170 0.499512L208.5 9.49951L238 14.4995L283 20.4995L341.5 25.4995L390.5 34.4995L436.5 51.9995L477.5 74.9995L491 96.4995V112.5L484.5 124.5L474 135.5L458 170L447 206.5L434.5 230.5L409 265L395 294.5L363.5 396L331 494.5L0.500183 378.5L34.5002 230.5L49.0002 222L82.5002 230.5L115.5 162.5L125.5 146.5Z" fill="#0038FF" fill-opacity="0.3"/>
    </svg>
    <img src="trgovacka.jpg" alt="Satelitska karta s supernovom i pevex-om u centru">
  </div>

  <h1 class="bg-gray-700 text-white font-bold text-md lg:text-xl xl:text-2xl text-center p-2">Udio zelenih površina u odabranim područjima.</h1>

  {#each locations as {imageSrc, name, totalArea, greenArea, greenPart, imageAlt, id}, i}
    <h1 class="separator-with-text font-bold text-sm md:text-2xl lg:text-4xl text-center p-2" id={id}>{i + 1} - {name}</h1>
    <p class="bg-gray-900 text-gray-400 text-sm md:text-lg lg:text-2xl text-center p-1">Ukupna površina: {totalArea} m&#178<br/>Zelene površine: {greenArea} m&#178<br/>Udio zelenih površina: {greenPart}%</p>

    <img src={imageSrc} alt={imageAlt}>
  {/each}
  <p class="bg-gray-900 text-gray-600 text-sm md:text-lg text-center p-1">Izradili <a href="mailto:stjepan.djelekovcan@gmail.com?subject=Oko stranice Zelene Površine">Stjepan Đelekovčan</a> i <a href="https://github.com/Cyber3x">Neven Lukić</a>. Slike preuzete s <a href="https://www.google.com/maps/">Google Maps</a></p>
   <p class="bg-gray-900 text-gray-600 text-sm md:text-md text-center">Ne garantiramo da su mjerenja u potpunosti točna.</p>
</div>
