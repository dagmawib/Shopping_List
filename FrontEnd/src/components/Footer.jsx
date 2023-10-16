import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <ul class="wrraper">
        <li class="icon linkedin">
            <span class="tooltip">LinkedIn</span>
            <span><a href="https://www.linkedin.com/in/dagmawi-belayneh-9b4639245/"><i class="fa-brands fa-linkedin"></i></a></span>
        </li>
        <li class="icon twitter">
            <span class="tooltip">Twitter</span>
            <span><a href="https://twitter.com/BelayDagi"><i class="fab fa-twitter"></i></a></span>
        </li>
        <li class="icon instagram">
            <span class="tooltip">Instagram</span>
            <span><a href="https://www.instagram.com/dagi_1430/"><i class="fab fa-instagram"></i></a></span>
        </li>
        <li class="icon github">
            <span class="tooltip">Github</span>
            <span><a href="https://github.com/dagmawib"><i class="fa-brands fa-github"></i></a></span>
        </li>

    </ul>
      <p>Alx Portfolio Project</p>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
