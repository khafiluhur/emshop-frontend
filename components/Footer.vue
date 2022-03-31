<template>
  <div class="mx-12 2xl:mx-96 my-5">
    <div class="mb-10">
      <div class="row" style="">
        <div class="col-9">
          <p
            class="text-start fw-bold text-title-parsial mb-4"
            style="font-size: 14px"
          >
            PAYMENT
          </p>
          <div class="row pb-3">
            <div class="col text-center">
              <img width="30" src="../static/payment/visa.png" alt="" />
            </div>
            <div class="col text-center">
              <img width="30" src="../static/payment/master-card.png" alt="" />
            </div>
            <div class="col text-center">
              <img width="30" src="../static/payment/bca.png" alt="" />
            </div>
            <div class="col text-center">
              <img width="40" src="../static/payment/mandiri.png" alt="" />
            </div>
            <div class="col text-center">
              <img width="50" src="../static/payment/bni.png" alt="" />
            </div>
            <div class="col text-center">
              <img width="35" src="../static/payment/bri.png" alt="" />
            </div>
            <div class="col text-center">
              <img width="50" src="../static/payment/permata.png" alt="" />
            </div>
            <div class="col text-center">
              <img width="40" src="../static/payment/atm-bersama.png" alt="" />
            </div>
            <div class="col text-center">
              <img width="30" src="../static/payment/alto.png" alt="" />
            </div>
            <div class="col text-center">
              <img width="30" src="../static/payment/prima.png" alt="" />
            </div>
            <div class="col text-center">
              <img width="50" src="../static/payment/BCAKlikPay.png" alt="" />
            </div>
            <div class="col text-center">
              <img width="50" src="../static/payment/gopay.png" alt="" />
            </div>
            <div class="col text-center">
              <img width="50" src="../static/payment/ovo.png" alt="" />
            </div>
            <div class="col text-center">
              <img width="50" src="../static/payment/motionPay.png" alt="" />
            </div>
          </div>
          <div class="row">
            <div class="col text-center">
              <img width="50" src="../static/payment/shopeePay.png" alt="" />
            </div>
            <div class="col text-center">
              <img width="50" src="../static/payment/kredivo.svg" alt="" />
            </div>
            <div class="col text-center">
              <img width="50" src="../static/payment/indodana.png" alt="" />
            </div>
            <div class="col text-center">
              <img width="50" src="../static/payment/alfamart.svg" alt="" />
            </div>
            <div class="col text-center">
              <img width="50" src="../static/payment/indomaret.png" alt="" />
            </div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
          </div>
        </div>
        <div class="col-3 ps-5">
          <p
            class="fw-bold text-title-parsial text-start mb-4"
            style="font-size: 14px"
          >
            COURIER
          </p>
          <div class="row pb-3">
            <div class="col text-center">
              <img width="40" src="../static/courier/jne.png" alt="" />
            </div>
            <div class="col text-center">
              <img width="40" src="../static/courier/sicepat.png" alt="" />
            </div>
            <div class="col text-center">
              <img width="40" src="../static/courier/rpx.png" alt="" />
            </div>
            <div class="col text-center">
              <img width="40" src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-5">
      <div class="striped-border"></div>
    </div>

    <nav class="navbar navbar-expand-lg navbar-light bg-social mb-5">
      <div class="container-fluid">
        <div class="row">
          <div class="col-5">
            <p class="text-start fw-bold text-title-parsial mb-2">PART OF</p>
            <div class="row pb-0">
              <div class="col text-start">
                <a
                  target="_blank"
                  href="https://www.mncgroup.com/microsite/mnc-e-commerce-ltd"
                  aria-label="mnc-ecommerce"
                >
                  <img width="90" src="../static/mnc-ecommerce.png" alt="" />
                </a>
              </div>
              <div class="col text-start">
                <a
                  target="_blank"
                  href="https://emshop.id/"
                  aria-label="emshop"
                >
                  <img width="90" src="../static/mshop.png" alt="" />
                </a>
              </div>
              <div class="col text-start">
                <a
                  target="_blank"
                  href="https://www.misteraladin.com/"
                  aria-label="mister-aladin"
                >
                  <img width="90" src="../static/mister-aladin.png" alt="" />
                </a>
              </div>
              <div class="col text-start">
                <img width="90" src="" alt="" />
              </div>
            </div>
          </div>
          <div class="col-7" style="padding-left: 5rem">
            <p
              class="fw-bold text-title-parsial mb-0"
              style="font-size: 12px; text-align: justify"
            >
              <strong>eMSHOP</strong> merupakan toko belanja online terlengkap
              dan terpercaya. Menyediakan beragam pilihan produk kebutuhan
              sehari-hari dengan jaminan harga termurah dan kualitas terbaik.
              Layanan pengiriman luas serta kemudahan pembayaran bagi seluruh
              pelanggan.
            </p>
          </div>
        </div>
      </div>
    </nav>

    <div class="mb-5">
      <div class="striped-border"></div>
    </div>

    <p class="text-start" style="font-size: 12px">
      eMSHOP © 2017 - 2022 | Indonesia
    </p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}
.col-9 {
  flex: 0 0 auto;
  width: 75% !important;
}
.col {
  flex: 1 0 0%;
}
.col-3 {
  flex: 0 0 auto;
  width: 25% !important;
}
.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
}
.col-5 {
  flex: 0 0 auto;
  width: 41.66666667%;
}
.col-7 {
  flex: 0 0 auto;
  width: 58.33333333%;
}
.striped-border {
  border: 1px dashed #ccc;
}
.vertical-line-border {
  border-left: 1px solid #ccc;
  height: 29px;
}
img,
svg {
  vertical-align: middle;
  display: unset;
}
</style>
