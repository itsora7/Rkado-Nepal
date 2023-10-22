import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export const LayOut = () => {
  return (
    <footer class="bg-dark flex text-light p-2 justify-between mt-3">
      <div>
        <h3> Rkado</h3>
        <h4>www.rkado.com</h4>
        <p>Copyright @ All right reserved by 👣RKADO👣</p>
      </div>
      <div>
        {/* <i class="fa fa-facebook-official" aria-hidden="true">
          dfs
        </i> */}
      </div>

      <div class="text-6xl mx-4">
        <FaInstagram />
      </div>
      <div class="text-6xl mx-4">
        <FaYoutube />
      </div>
      <div class="text-6xl mx-4">
        <FaFacebook />
      </div>
      <div> </div>
      <center>
        <h4>Thank You 🙏 Visit Again </h4>
        This site has been visited{" "}
        <img
          src="https://hitwebcounter.com/counter/counter.php?page=8645474&style=0011&nbdigits=5&type=page&initCount=0"
          title="Free Counter"
          Alt="web counter"
          border="0"
        />{" "}
        "times"
      </center>
    </footer>
  );
};
