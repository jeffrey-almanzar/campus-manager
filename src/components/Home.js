import React from "react";
import Navigation from "./Navigation";
import "../css/Home.css";
import homeImage from "../img/home.jpg";
import Footer from "./Footer";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navigation />

        <main>
          <div className="homePic">
            <img src={homeImage} alt="" />
            {/* <div className="top-left">Campus Manager</div> */}
          </div>

          <div className="paras">
            <h1 className="heading">Information of Campuses and Students</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
              volutpat consequat mauris nunc congue nisi vitae suscipit tellus.
              Proin nibh nisl condimentum id venenatis. Ut consequat semper
              viverra nam libero justo laoreet sit. Bibendum arcu vitae
              elementum curabitur vitae. Vel turpis nunc eget lorem dolor sed
              viverra ipsum. Ultrices vitae auctor eu augue. Ac orci phasellus
              egestas tellus rutrum tellus pellentesque. Donec massa sapien
              faucibus et molestie ac feugiat. Integer vitae justo eget magna
              fermentum iaculis eu non. Sapien faucibus et molestie ac feugiat
              sed lectus vestibulum mattis. Quam nulla porttitor massa id neque.
              Commodo odio aenean sed adipiscing diam donec adipiscing tristique
              risus. Faucibus turpis in eu mi.
            </p>

            <br />

            <p>
              Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Amet volutpat
              consequat mauris nunc congue nisi vitae suscipit tellus. Proin
              nibh nisl condimentum id venenatis. Ut consequat semper viverra
              nam libero justo laoreet sit. Bibendum arcu vitae elementum
              curabitur vitae. Vel turpis nunc eget lorem dolor sed viverra
              ipsum. Ultrices vitae auctor eu augue. Ac orci phasellus egestas
              tellus rutrum tellus pellentesque. Donec massa sapien faucibus et
              molestie ac feugiat. Integer vitae justo eget magna fermentum
              iaculis eu non. Sapien faucibus et molestie ac feugiat sed lectus
              vestibulum mattis. Quam nulla porttitor massa id neque. Commodo
              odio aenean sed adipiscing diam donec adipiscing tristique risus.
              Faucibus turpis in eu mi.
            </p>
          </div>

          <Footer />
        </main>
      </div>
    );
  }
}

export default Home;
