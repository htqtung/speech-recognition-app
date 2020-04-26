import React from 'react';

const Wrapper = () => {
  return (
    <div class="wrapper">
      <div
        class="page-header section-dark"
        // style={{
        //   backgroundImage: ${url(
        //     'https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/antoine-barres.jpg'
        //   )},
        // }}
      >
        <div class="filter"></div>
        <div class="content-center">
          <div class="container">
            <div class="title-brand">
              <h1 class="presentation-title">Title here</h1>
              <div class="fog-low">
                <img
                  src="https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/fog-low.png"
                  alt=""
                />
              </div>
              <div class="fog-low right">
                <img
                  src="https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/fog-low.png"
                  alt=""
                />
              </div>
            </div>

            <h2 class="presentation-subtitle text-center">
              You can add a small description
            </h2>
          </div>
        </div>
        <div
          class="moving-clouds"
          // style="background-image: url('https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/clouds.png'); "
        ></div>
      </div>{' '}
    </div>
  );
};

export default Wrapper;
