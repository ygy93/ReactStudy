import { Children } from "react";
import '../Footer.css';

export default function FooterNavbar({children}){
  return(
    <footer>
      {children}
    </footer>
  );
}